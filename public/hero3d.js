// Sattva Energies — real WebGL hero: floating solar panel, glowing sun disc,
// animated orbit rings, HDRI-style environment reflections, soft shadows,
// mouse parallax, and UnrealBloom post-processing. Vanilla three.js, GPU-only,
// DPR-capped, IntersectionObserver-paused, prefers-reduced-motion aware.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

function radialBackground() {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  const rg = g.createRadialGradient(170, 80, 40, 256, 300, 620);
  rg.addColorStop(0, '#f4f9f5');
  rg.addColorStop(0.45, '#e6f1ea');
  rg.addColorStop(1, '#cadfd3');
  g.fillStyle = rg; g.fillRect(0, 0, 512, 512);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// soft round sprite texture for the sun's outer glow
function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const rg = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  rg.addColorStop(0, 'rgba(255,238,180,0.95)');
  rg.addColorStop(0.25, 'rgba(255,196,64,0.62)');
  rg.addColorStop(0.55, 'rgba(255,178,32,0.22)');
  rg.addColorStop(1, 'rgba(255,178,32,0)');
  g.fillStyle = rg; g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

function buildPanel() {
  const panel = new THREE.Group();

  // aluminium frame
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x9aa6ad, metalness: 0.85, roughness: 0.5, envMapIntensity: 0.4 });
  const fw = 3.5, fh = 2.4, ft = 0.14, bar = 0.11;
  const frameParts = [
    [fw, bar, ft, 0, fh / 2 - bar / 2, 0],
    [fw, bar, ft, 0, -fh / 2 + bar / 2, 0],
    [bar, fh, ft, -fw / 2 + bar / 2, 0, 0],
    [bar, fh, ft, fw / 2 - bar / 2, 0, 0],
  ];
  frameParts.forEach(([w, h, d, x, y, z]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), frameMat);
    m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true;
    panel.add(m);
  });

  // dark backsheet
  const back = new THREE.Mesh(new THREE.BoxGeometry(fw - bar, fh - bar, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x10161d, metalness: 0.4, roughness: 0.7 }));
  back.position.z = -0.03; back.receiveShadow = true; panel.add(back);

  // photovoltaic cells — glossy deep-blue, clearcoat glass sheen, subtle emissive
  const cols = 6, rows = 4, gap = 0.05;
  const availW = fw - bar - 0.22, availH = fh - bar - 0.22;
  const cw = (availW - gap * (cols - 1)) / cols;
  const ch = (availH - gap * (rows - 1)) / rows;
  const cellGeo = new THREE.BoxGeometry(cw, ch, 0.04);
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0x0b2444, metalness: 0.35, roughness: 0.5,
      clearcoat: 0.5, clearcoatRoughness: 0.28,
      emissive: 0x0c2a4e, emissiveIntensity: 0.22,
      envMapIntensity: 0.3,
    });
    const cell = new THREE.Mesh(cellGeo, mat);
    cell.position.set(-availW / 2 + cw / 2 + c * (cw + gap), -availH / 2 + ch / 2 + r * (ch + gap), 0.06);
    cell.castShadow = true;
    panel.add(cell);
  }

  // busbar lines for realism
  const lineMat = new THREE.MeshStandardMaterial({ color: 0x9fb8c8, metalness: 0.9, roughness: 0.4 });
  for (let c = 0; c <= cols; c++) {
    const x = -availW / 2 + c * (cw + gap) - gap / 2;
    const l = new THREE.Mesh(new THREE.BoxGeometry(0.012, availH, 0.005), lineMat);
    l.position.set(x, 0, 0.085); panel.add(l);
  }
  return panel;
}

function initHero3D(mount) {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.92;
  mount.appendChild(renderer.domElement);
  renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';

  const scene = new THREE.Scene();
  scene.background = radialBackground();

  // environment reflections (HDRI-like) from RoomEnvironment
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.5;

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.4, 8.2);

  // lighting — soft ambient + key directional with soft shadow + warm rim
  scene.add(new THREE.HemisphereLight(0xffffff, 0xbfd4c6, 0.7));
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(3, 6, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 1; key.shadow.camera.far = 25;
  key.shadow.camera.left = -6; key.shadow.camera.right = 6;
  key.shadow.camera.top = 6; key.shadow.camera.bottom = -6;
  key.shadow.bias = -0.0004; key.shadow.radius = 6;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffd27a, 1.1);
  rim.position.set(-5, 2, -3); scene.add(rim);

  // ---- assembly ----
  const root = new THREE.Group();
  scene.add(root);

  const panel = buildPanel();
  panel.rotation.x = -0.32;
  root.add(panel);

  // soft contact shadow catcher
  const shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(14, 14),
    new THREE.ShadowMaterial({ opacity: 0.22 })
  );
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -2.4;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  // glowing sun disc above the panel
  const sun = new THREE.Group();
  sun.position.set(0.35, 1.95, 0.8);
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.46, 48, 48),
    new THREE.MeshStandardMaterial({ color: 0xffe08a, emissive: 0xffb400, emissiveIntensity: 4.6, roughness: 0.4 })
  );
  sun.add(core);
  const sunLight = new THREE.PointLight(0xffce6a, 2.1, 22, 2);
  sun.add(sunLight);
  const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), color: 0xffffff, transparent: true,
    blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  glowSprite.scale.set(3.6, 3.6, 1);
  sun.add(glowSprite);
  root.add(sun);

  // animated orbit rings around the panel
  const rings = [];
  const ringSpecs = [
    [2.9, 0.018, 0x2a7a53, 0.9, [Math.PI / 2.2, 0, 0]],
    [3.5, 0.014, 0xffb400, 1.0, [Math.PI / 1.8, 0.5, 0.3]],
    [4.1, 0.012, 0x2a7a53, 0.55, [Math.PI / 2.6, -0.4, -0.2]],
  ];
  ringSpecs.forEach(([rad, tube, color, op, rot]) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(rad, tube, 16, 160),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6, metalness: 0.3, roughness: 0.4, transparent: true, opacity: op })
    );
    ring.rotation.set(rot[0], rot[1], rot[2]);
    root.add(ring); rings.push(ring);
  });

  // ---- post-processing bloom ----
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.45, 0.6, 0.95);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  function resize() {
    const w = mount.clientWidth, h = mount.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h); composer.setSize(w, h);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  resize();
  const ro = new ResizeObserver(resize); ro.observe(mount);

  // mouse parallax
  const mouse = { x: 0, y: 0 }, eased = { x: 0, y: 0 };
  const onMove = (e) => {
    const b = mount.getBoundingClientRect();
    mouse.x = ((e.clientX - b.left) / b.width - 0.5) * 2;
    mouse.y = ((e.clientY - b.top) / b.height - 0.5) * 2;
  };
  const onLeave = () => { mouse.x = 0; mouse.y = 0; };
  mount.addEventListener('mousemove', onMove);
  mount.addEventListener('mouseleave', onLeave);

  let visible = true;
  const io = new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0.01 });
  io.observe(mount);

  let raf, t = 0, last = performance.now();
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    if (!visible) return;
    t += dt;

    if (!reduce) {
      // continuous slow 360° rotation + gentle multi-sine float
      panel.rotation.y += dt * (Math.PI * 2 / 18); // ~18s per turn
      root.position.y = Math.sin(t * 0.7) * 0.18 + Math.sin(t * 1.6 + 0.6) * 0.05;
      panel.rotation.z = Math.sin(t * 0.5) * 0.04;
      rings[0].rotation.z += dt * 0.5;
      rings[1].rotation.z -= dt * 0.35;
      rings[2].rotation.z += dt * 0.22;
      sun.children[0].scale.setScalar(1 + Math.sin(t * 2) * 0.04);
      glowSprite.material.rotation += dt * 0.08;

      // eased mouse parallax on the whole rig + camera
      eased.x += (mouse.x - eased.x) * Math.min(dt * 2.6, 1);
      eased.y += (mouse.y - eased.y) * Math.min(dt * 2.6, 1);
      root.rotation.y = eased.x * 0.28;
      root.rotation.x = eased.y * 0.16;
      camera.position.x = eased.x * 0.5;
      camera.position.y = 0.4 - eased.y * 0.35;
      camera.lookAt(0, 0.2, 0);
    } else {
      panel.rotation.y = 0.5;
    }
    composer.render();
  }
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
    mount.removeEventListener('mousemove', onMove);
    mount.removeEventListener('mouseleave', onLeave);
    renderer.dispose(); composer.dispose && composer.dispose(); pmrem.dispose();
    if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
  };
}

window.initHero3D = initHero3D;
window.dispatchEvent(new Event('hero3d-ready'));
