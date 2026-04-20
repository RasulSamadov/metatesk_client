/* ============================================
   METATESK v3 — Super Futuristic JS
   Multiple 3D scenes + Typed text + Tilt + Magnetic
   ============================================ */

// ===== LOADER =====
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loaderBar');
let lp = 0;
const li = setInterval(() => {
    lp += Math.random() * 12 + 5;
    if (lp >= 100) { lp = 100; clearInterval(li); setTimeout(() => { loader.classList.add('loaded'); initAll(); }, 500); }
    loaderBar.style.width = lp + '%';
}, 180);

// Loader 3D spinning shape
(function initLoaderScene() {
    const c = document.getElementById('loaderCanvas');
    if (!c || typeof THREE === 'undefined') return;
    const s = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    const r = new THREE.WebGLRenderer({ canvas: c, alpha: true, antialias: true });
    r.setSize(100, 100); r.setPixelRatio(2);
    const geo = new THREE.IcosahedronGeometry(1.2, 1);
    const mat = new THREE.MeshBasicMaterial({ color: 0x482AFF, wireframe: true, transparent: true, opacity: 0.6 });
    const mesh = new THREE.Mesh(geo, mat);
    s.add(mesh); cam.position.z = 3;
    (function a() { requestAnimationFrame(a); mesh.rotation.x += 0.015; mesh.rotation.y += 0.02; r.render(s, cam); })();
})();

function initAll() {
    const fns = [
        initCursor, initNav, initScrollProgress, initMobileMenu, initSmoothScroll,
        initHeroParticles, initTypedText,
        initMolecule, initChemCanvas, initGlobe,
        initClassroomPreview, initBackToTop,
        initScrollAnims, initCounters, initTilt, initMagnetic, initFAQ, initForm
    ];
    fns.forEach(fn => { try { fn(); } catch (e) { console.warn(fn.name, 'failed:', e); } });
}

// ===== CURSOR =====
function initCursor() {
    const dot = document.getElementById('cursorDot'), ring = document.getElementById('cursorRing');
    if (!dot || !ring || window.innerWidth < 768) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
    (function anim() { rx += (mx - rx) * .15; ry += (my - ry) * .15; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(anim); })();
    document.querySelectorAll('a,button,.tilt,.faq-q,.partner,.prod-card').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

// ===== SCROLL PROGRESS =====
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => { bar.style.width = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%'; });
}

// ===== NAV =====
function initNav() { window.addEventListener('scroll', () => document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 80)); }

// ===== MOBILE =====
function initMobileMenu() {
    const b = document.getElementById('burger'), m = document.getElementById('mobMenu');
    b.addEventListener('click', () => { b.classList.toggle('active'); m.classList.toggle('active'); document.body.style.overflow = m.classList.contains('active') ? 'hidden' : ''; });
    m.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => { b.classList.remove('active'); m.classList.remove('active'); document.body.style.overflow = ''; }));
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }));
}

// ===== TYPED TEXT =====
function initTypedText() {
    const el = document.getElementById('heroTyped');
    if (!el) return;
    const getLines = () => window._typedLines || [
        'A multiplayer VR/AI world where learners master subjects as if playing a game.',
        'Immersive education experiences powered by AI teachers and virtual reality.',
        'Education infrastructure for schools, institutions, and governments at scale.',
        'Where students experience knowledge — instead of just memorizing it.'
    ];
    let li = 0, ci = 0, deleting = false;
    function type() {
        const lines = getLines();
        const current = lines[li % lines.length];
        if (!deleting) {
            el.textContent = current.substring(0, ci + 1);
            ci++;
            if (ci === current.length) { setTimeout(() => { deleting = true; type(); }, 2500); return; }
            setTimeout(type, 35);
        } else {
            el.textContent = current.substring(0, ci - 1);
            ci--;
            if (ci === 0) { deleting = false; li = (li + 1) % lines.length; setTimeout(type, 400); return; }
            setTimeout(type, 18);
        }
    }
    setTimeout(type, 800);
}

// ===== HERO PARTICLES =====
function initHeroParticles() {
    const c = document.getElementById('heroCanvas');
    if (!c || typeof THREE === 'undefined') return;
    const s = new THREE.Scene(), cam = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, .1, 1000);
    const r = new THREE.WebGLRenderer({ canvas: c, alpha: true, antialias: true });
    r.setSize(innerWidth, innerHeight); r.setPixelRatio(Math.min(devicePixelRatio, 2));
    const N = 1200, geo = new THREE.BufferGeometry(), pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
    const cP = new THREE.Color(0x482AFF), cC = new THREE.Color(0x55CBF9), cO = new THREE.Color(0xFBB116), cG = new THREE.Color(0x88CE53);
    for (let i = 0; i < N; i++) {
        const i3 = i * 3, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), ra = 3 + Math.random() * 8;
        pos[i3] = ra * Math.sin(ph) * Math.cos(th); pos[i3+1] = ra * Math.sin(ph) * Math.sin(th); pos[i3+2] = ra * Math.cos(ph);
        const t = Math.random(), color = t < .35 ? cP : t < .6 ? cC : t < .85 ? cO : cG;
        col[i3] = color.r; col[i3+1] = color.g; col[i3+2] = color.b;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: .05, vertexColors: true, transparent: true, opacity: .55, sizeAttenuation: true }));
    s.add(pts);
    // lines
    const lp = [], pa = pos;
    for (let i = 0; i < Math.min(N, 350); i++) for (let j = i+1; j < Math.min(N, 350); j++) {
        const dx = pa[i*3]-pa[j*3], dy = pa[i*3+1]-pa[j*3+1], dz = pa[i*3+2]-pa[j*3+2];
        if (dx*dx+dy*dy+dz*dz < 4.5) { lp.push(pa[i*3],pa[i*3+1],pa[i*3+2],pa[j*3],pa[j*3+1],pa[j*3+2]); }
    }
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3));
    s.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x482AFF, transparent: true, opacity: .03 })));
    cam.position.z = 6;
    let mX = 0, mY = 0;
    document.addEventListener('mousemove', e => { mX = (e.clientX / innerWidth - .5) * 2; mY = (e.clientY / innerHeight - .5) * 2; });
    (function a() {
        requestAnimationFrame(a);
        pts.rotation.y += .0007; pts.rotation.x += .0003;
        cam.position.x += (mX * .4 - cam.position.x) * .02;
        cam.position.y += (-mY * .25 - cam.position.y) * .02;
        cam.lookAt(s.position); r.render(s, cam);
    })();
    window.addEventListener('resize', () => { cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix(); r.setSize(innerWidth, innerHeight); });
}

// ===== 3D MOLECULE =====
function initMolecule() {
    const c = document.getElementById('moleculeCanvas');
    if (!c || typeof THREE === 'undefined') return;
    const ct = c.parentElement, s = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, ct.clientWidth / ct.clientHeight, .1, 100);
    const r = new THREE.WebGLRenderer({ canvas: c, alpha: true, antialias: true });
    r.setSize(ct.clientWidth, ct.clientHeight); r.setPixelRatio(Math.min(devicePixelRatio, 2));
    const m1 = new THREE.MeshPhongMaterial({ color: 0x55CBF9, emissive: 0x55CBF9, emissiveIntensity: .3, transparent: true, opacity: .9 });
    const m2 = new THREE.MeshPhongMaterial({ color: 0x482AFF, emissive: 0x482AFF, emissiveIntensity: .3, transparent: true, opacity: .9 });
    const m3 = new THREE.MeshPhongMaterial({ color: 0xFBB116, emissive: 0xFBB116, emissiveIntensity: .3, transparent: true, opacity: .9 });
    const m4 = new THREE.MeshPhongMaterial({ color: 0x88CE53, emissive: 0x88CE53, emissiveIntensity: .3, transparent: true, opacity: .9 });
    const bm = new THREE.MeshPhongMaterial({ color: 0x9994B8, transparent: true, opacity: .35 });
    const g = new THREE.Group();
    const atoms = [
        { p: [0,0,0], m: m2, s: .4 }, { p: [1.2,.8,0], m: m1, s: .28 }, { p: [-1.2,.8,0], m: m1, s: .28 },
        { p: [0,-1.5,.5], m: m3, s: .35 }, { p: [1.5,-.5,-.8], m: m4, s: .25 }, { p: [-1,-.9,-.6], m: m2, s: .3 },
        { p: [.5,1.5,-.5], m: m3, s: .22 }, { p: [-.8,0,1.2], m: m4, s: .26 },
    ];
    const meshes = atoms.map(a => { const me = new THREE.Mesh(new THREE.SphereGeometry(a.s, 32, 32), a.m); me.position.set(...a.p); g.add(me); return me; });
    [[0,1],[0,2],[0,3],[0,5],[3,4],[1,6],[0,7]].forEach(([i,j]) => {
        const st = new THREE.Vector3(...atoms[i].p), en = new THREE.Vector3(...atoms[j].p);
        const mid = new THREE.Vector3().addVectors(st, en).multiplyScalar(.5);
        const bond = new THREE.Mesh(new THREE.CylinderGeometry(.04,.04,st.distanceTo(en),8), bm);
        bond.position.copy(mid); bond.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), new THREE.Vector3().subVectors(en,st).normalize());
        g.add(bond);
    });
    s.add(g);
    s.add(new THREE.AmbientLight(0x8888CC, .8));
    const pl = new THREE.PointLight(0x55CBF9, 1.2, 20); pl.position.set(5,5,5); s.add(pl);
    const pl2 = new THREE.PointLight(0x482AFF, .8, 20); pl2.position.set(-5,-3,3); s.add(pl2);
    cam.position.z = 5;
    // Mouse drag rotation
    let isDragging = false, prevX = 0, prevY = 0, rotVelX = .005, rotVelY = .002;
    c.style.cursor = 'grab';
    c.addEventListener('mousedown', e => { isDragging = true; prevX = e.clientX; prevY = e.clientY; c.style.cursor = 'grabbing'; });
    window.addEventListener('mouseup', () => { isDragging = false; c.style.cursor = 'grab'; });
    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        rotVelY = (e.clientX - prevX) * .005; rotVelX = (e.clientY - prevY) * .005;
        prevX = e.clientX; prevY = e.clientY;
    });
    (function a() {
        requestAnimationFrame(a);
        g.rotation.y += rotVelY; g.rotation.x += rotVelX;
        if (!isDragging) { rotVelX *= .98; rotVelY *= .98; rotVelX += .0001; rotVelY += .0003; }
        meshes.forEach((m, i) => m.scale.setScalar(1 + Math.sin(Date.now() * .002 + i * .8) * .1));
        r.render(s, cam);
    })();
    new ResizeObserver(() => { if (ct.clientWidth > 0) { cam.aspect = ct.clientWidth / ct.clientHeight; cam.updateProjectionMatrix(); r.setSize(ct.clientWidth, ct.clientHeight); } }).observe(ct);
}

// ===== CHEMISTRY CANVAS =====
function initChemCanvas() {
    const c = document.getElementById('chemCanvas'); if (!c) return;
    const ctx = c.getContext('2d'), ct = c.parentElement;
    function resize() { c.width = ct.clientWidth * devicePixelRatio; c.height = ct.clientHeight * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); }
    resize();
    const atoms = [], colors = ['#482AFF','#55CBF9','#FBB116','#88CE53','#6B5AFF'];
    for (let i = 0; i < 50; i++) atoms.push({ x: Math.random()*ct.clientWidth, y: Math.random()*ct.clientHeight, vx: (Math.random()-.5)*.7, vy: (Math.random()-.5)*.7, r: Math.random()*5+2, c: colors[Math.floor(Math.random()*colors.length)], g: Math.random()*8+4 });
    (function a() {
        const w = ct.clientWidth, h = ct.clientHeight; ctx.clearRect(0,0,w,h);
        for (let i=0;i<atoms.length;i++) for (let j=i+1;j<atoms.length;j++) {
            const dx=atoms[i].x-atoms[j].x, dy=atoms[i].y-atoms[j].y, d=Math.sqrt(dx*dx+dy*dy);
            if (d<100) { ctx.strokeStyle=`rgba(72,42,255,${(1-d/100)*.1})`; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(atoms[i].x,atoms[i].y); ctx.lineTo(atoms[j].x,atoms[j].y); ctx.stroke(); }
        }
        atoms.forEach(a => {
            a.x+=a.vx; a.y+=a.vy; if(a.x<0||a.x>w) a.vx*=-1; if(a.y<0||a.y>h) a.vy*=-1;
            const gr=ctx.createRadialGradient(a.x,a.y,0,a.x,a.y,a.g); gr.addColorStop(0,a.c+'30'); gr.addColorStop(1,a.c+'00');
            ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(a.x,a.y,a.g,0,Math.PI*2); ctx.fill();
            ctx.fillStyle=a.c; ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2); ctx.fill();
        });
        requestAnimationFrame(a);
    })();
    window.addEventListener('resize', resize);
}

// ===== GLOBE =====
function initGlobe() {
    const c = document.getElementById('globeCanvas'); if (!c||typeof THREE==='undefined') return;
    const s = new THREE.Scene(), cam = new THREE.PerspectiveCamera(50,1,.1,100);
    const r = new THREE.WebGLRenderer({ canvas: c, alpha: true, antialias: true }); r.setSize(600,600); r.setPixelRatio(Math.min(devicePixelRatio,2));
    const globe = new THREE.Mesh(new THREE.SphereGeometry(2,32,32), new THREE.MeshBasicMaterial({ color: 0x55CBF9, wireframe: true, transparent: true, opacity: .12 }));
    s.add(globe);
    const dg = new THREE.SphereGeometry(.03,8,8), dm = new THREE.MeshBasicMaterial({ color: 0x482AFF });
    for (let i=0;i<120;i++) { const th=Math.random()*Math.PI*2, ph=Math.acos(2*Math.random()-1), d=new THREE.Mesh(dg,dm); d.position.set(2.02*Math.sin(ph)*Math.cos(th),2.02*Math.sin(ph)*Math.sin(th),2.02*Math.cos(ph)); s.add(d); }
    cam.position.z = 5;
    (function a() { requestAnimationFrame(a); globe.rotation.y += .003; r.render(s, cam); })();
}


// ===== SCROLL ANIMS =====
function initScrollAnims() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        const ob = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: .1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.anim-in').forEach(el => ob.observe(el)); return;
    }
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.anim-in').forEach(el => {
        const d = parseInt(el.style.getPropertyValue('--d')) || 0;
        gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: .8, delay: d * .12, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            onComplete: () => el.classList.add('visible') });
    });
    gsap.to('.hero-content', { y: 80, opacity: .2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    // Parallax floats
    gsap.to('.hero-float-1', { y: -60, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.hero-float-2', { y: -40, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}

// ===== COUNTERS =====
function initCounters() {
    const obs = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.counted) { e.target.dataset.counted = '1'; animC(e.target); }
    }), { threshold: .5 });
    document.querySelectorAll('.counter').forEach(c => obs.observe(c));
}
function animC(el) {
    const t = parseInt(el.dataset.count), dur = 2000, st = performance.now();
    (function u(now) {
        const p = Math.min((now - st) / dur, 1), e = 1 - (1 - p) * (1 - p);
        el.textContent = Math.floor(e * t);
        if (p < 1) requestAnimationFrame(u); else el.textContent = t;
    })(st);
}

// ===== TILT =====
function initTilt() {
    if (window.innerWidth < 768) return;
    document.querySelectorAll('.tilt').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
            const rx = (y - r.height/2) / r.height * -8, ry = (x - r.width/2) / r.width * 8;
            card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
            const glow = card.querySelector('.card-glow');
            if (glow) { glow.style.setProperty('--gx', (x/r.width*100)+'%'); glow.style.setProperty('--gy', (y/r.height*100)+'%'); }
        });
        card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'; });
    });
}

// ===== MAGNETIC =====
function initMagnetic() {
    if (window.innerWidth < 768) return;
    document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            btn.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.2}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; btn.style.transition = 'transform .4s cubic-bezier(.16,1,.3,1)'; setTimeout(() => btn.style.transition = '', 400); });
    });
}

// ===== FAQ =====
function initFAQ() {
    document.querySelectorAll('.faq-q').forEach(b => b.addEventListener('click', () => {
        const item = b.parentElement, open = item.classList.contains('open');
        document.querySelectorAll('.faq.open').forEach(i => i.classList.remove('open'));
        if (!open) item.classList.add('open');
    }));
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 600);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== FORM =====
function initForm() {
    const f = document.getElementById('contactForm'); if (!f) return;
    f.addEventListener('submit', e => {
        e.preventDefault();
        const btn = f.querySelector('button[type="submit"]'), orig = btn.querySelector('.btn-text').textContent;
        btn.querySelector('.btn-text').textContent = 'Sending...'; btn.disabled = true;
        setTimeout(() => { btn.querySelector('.btn-text').textContent = 'Sent!'; btn.style.background = 'linear-gradient(135deg,#88CE53,#6BAF3E)';
            setTimeout(() => { btn.querySelector('.btn-text').textContent = orig; btn.style.background = ''; btn.disabled = false; f.reset(); }, 3000);
        }, 1500);
    });
}

// ===== INTERACTIVE CLASSROOM PREVIEW — WOW VERSION =====
function initClassroomPreview() {
    const c = document.getElementById('classroomCanvas');
    if (!c || typeof THREE === 'undefined') return;
    const ct = c.parentElement;
    const w = ct.clientWidth, h = ct.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0D0820);
    scene.fog = new THREE.FogExp2(0x0D0820, .04);
    const cam = new THREE.PerspectiveCamera(55, w / h, .1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas: c, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // === FLOOR — glowing grid ===
    const floorGeo = new THREE.PlaneGeometry(16, 14);
    const floorMat = new THREE.MeshPhongMaterial({ color: 0x0A0618, emissive: 0x0A0618, emissiveIntensity: .1 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2; scene.add(floor);
    // Grid lines on floor
    for (let i = -7; i <= 7; i++) {
        const lineG = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(i, .01, -7), new THREE.Vector3(i, .01, 7)]);
        scene.add(new THREE.Line(lineG, new THREE.LineBasicMaterial({ color: 0x482AFF, transparent: true, opacity: .06 })));
    }
    for (let i = -6; i <= 6; i++) {
        const lineG = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-8, .01, i), new THREE.Vector3(8, .01, i)]);
        scene.add(new THREE.Line(lineG, new THREE.LineBasicMaterial({ color: 0x482AFF, transparent: true, opacity: .06 })));
    }

    // === WALLS with accent neon strips ===
    const wallMat = new THREE.MeshPhongMaterial({ color: 0x120A30 });
    const wallLower = new THREE.MeshPhongMaterial({ color: 0x1A1040 });

    // Back wall
    const bw = new THREE.Mesh(new THREE.PlaneGeometry(16, 6), wallMat);
    bw.position.set(0, 3, -7); scene.add(bw);
    const bwLower = new THREE.Mesh(new THREE.PlaneGeometry(16, 1.2), wallLower);
    bwLower.position.set(0, .6, -6.99); scene.add(bwLower);

    // Side walls
    [[-8, Math.PI / 2], [8, -Math.PI / 2]].forEach(([x, ry]) => {
        const sw = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), wallMat);
        sw.position.set(x, 3, 0); sw.rotation.y = ry; scene.add(sw);
        const swl = new THREE.Mesh(new THREE.PlaneGeometry(14, 1.2), wallLower);
        swl.position.set(x, .6, 0); swl.rotation.y = ry; scene.add(swl);
    });

    // Ceiling
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(16, 14), new THREE.MeshPhongMaterial({ color: 0x0A0618 }));
    ceil.rotation.x = Math.PI / 2; ceil.position.y = 6; scene.add(ceil);

    // Neon accent strips along walls
    const neonMat = new THREE.MeshBasicMaterial({ color: 0x482AFF, transparent: true, opacity: .8 });
    const neonCyan = new THREE.MeshBasicMaterial({ color: 0x55CBF9, transparent: true, opacity: .6 });
    // Back wall neon
    const nStrip1 = new THREE.Mesh(new THREE.BoxGeometry(14, .04, .02), neonMat);
    nStrip1.position.set(0, 1.25, -6.97); scene.add(nStrip1);
    const nStrip2 = new THREE.Mesh(new THREE.BoxGeometry(14, .04, .02), neonCyan);
    nStrip2.position.set(0, 5.5, -6.97); scene.add(nStrip2);
    // Side neon
    [[-7.97, Math.PI/2], [7.97, -Math.PI/2]].forEach(([x, ry]) => {
        const ns = new THREE.Mesh(new THREE.BoxGeometry(12, .04, .02), neonMat);
        ns.position.set(x, 1.25, 0); ns.rotation.y = ry; scene.add(ns);
    });

    // === HOLOGRAPHIC WHITEBOARD ===
    const boardFrame = new THREE.Mesh(new THREE.BoxGeometry(7, 3.5, .12),
        new THREE.MeshPhongMaterial({ color: 0x0D0D2A, emissive: 0x0D0D2A, emissiveIntensity: .05 }));
    boardFrame.position.set(0, 3, -6.9); scene.add(boardFrame);
    // Glowing border
    const borderPts = [new THREE.Vector3(-3.5, -1.75, 0), new THREE.Vector3(3.5, -1.75, 0),
        new THREE.Vector3(3.5, 1.75, 0), new THREE.Vector3(-3.5, 1.75, 0), new THREE.Vector3(-3.5, -1.75, 0)];
    const borderGeo = new THREE.BufferGeometry().setFromPoints(borderPts);
    const borderLine = new THREE.Line(borderGeo, new THREE.LineBasicMaterial({ color: 0x55CBF9, transparent: true, opacity: .5 }));
    borderLine.position.set(0, 3, -6.83); scene.add(borderLine);

    // Holographic text lines with glow
    const boardLines = [];
    const lineData = [
        { w: 4.5, y: 4.2, c: 0x55CBF9, o: .7 },
        { w: 3.2, y: 3.7, c: 0x482AFF, o: .5 },
        { w: 5.0, y: 3.2, c: 0x482AFF, o: .4 },
        { w: 2.8, y: 2.7, c: 0x6B5AFF, o: .35 },
        { w: 4.0, y: 2.2, c: 0x482AFF, o: .3 },
        { w: 1.5, y: 1.7, c: 0x55CBF9, o: .4 },
    ];
    lineData.forEach((d, i) => {
        const lm = new THREE.MeshBasicMaterial({ color: d.c, transparent: true, opacity: d.o });
        const line = new THREE.Mesh(new THREE.PlaneGeometry(d.w, .06), lm);
        line.position.set(-1.5 + (i % 2) * .8, d.y, -6.82);
        scene.add(line); boardLines.push(line);
    });

    // === TEACHER DESK — futuristic ===
    const deskMat = new THREE.MeshPhongMaterial({ color: 0x1A1040, emissive: 0x1A1040, emissiveIntensity: .05 });
    const deskTopMat = new THREE.MeshPhongMaterial({ color: 0x201555, emissive: 0x201555, emissiveIntensity: .08 });
    const desk = new THREE.Mesh(new THREE.BoxGeometry(3, .8, 1.2), deskMat);
    desk.position.set(0, .4, -5); scene.add(desk);
    const dt = new THREE.Mesh(new THREE.BoxGeometry(3.2, .06, 1.3), deskTopMat);
    dt.position.set(0, .81, -5); scene.add(dt);
    // Desk neon edge
    const deskNeon = new THREE.Mesh(new THREE.BoxGeometry(3.2, .03, .03), neonCyan);
    deskNeon.position.set(0, .83, -4.35); scene.add(deskNeon);

    // === SIMPLE FACELESS CHARACTERS ===
    function makePerson(color, sc, standing) {
        const g = new THREE.Group();
        const mat = new THREE.MeshPhongMaterial({ color, emissive: color, emissiveIntensity: .1 });
        const skinM = new THREE.MeshPhongMaterial({ color: 0xE8C9A0 });
        const pantM = new THREE.MeshPhongMaterial({ color: 0x1A1040 });
        // Head
        const head = new THREE.Mesh(new THREE.SphereGeometry(.16 * sc, 12, 12), skinM);
        g.add(head); g.userData.head = head;
        // Torso
        const torso = new THREE.Mesh(new THREE.CylinderGeometry(.12 * sc, .14 * sc, .35 * sc, 10), mat);
        g.add(torso);
        // Arms
        const arms = [];
        [-1, 1].forEach(side => {
            const armG = new THREE.Group();
            const upper = new THREE.Mesh(new THREE.CylinderGeometry(.04 * sc, .04 * sc, .2 * sc, 8), mat);
            upper.position.y = -.1 * sc; armG.add(upper);
            const hand = new THREE.Mesh(new THREE.SphereGeometry(.03 * sc, 8, 8), skinM);
            hand.position.y = -.24 * sc; armG.add(hand);
            armG.position.set(side * .18 * sc, 0, 0);
            armG.rotation.z = side * .15;
            g.add(armG); arms.push(armG);
        });
        g.userData.arms = arms;
        if (standing) {
            head.position.y = .56 * sc; torso.position.y = .2 * sc;
            arms.forEach(a => a.position.y = .34 * sc);
            [-1, 1].forEach(side => {
                const leg = new THREE.Mesh(new THREE.CylinderGeometry(.05 * sc, .04 * sc, .45 * sc, 6), pantM);
                leg.position.set(side * .07 * sc, -.25 * sc, 0); g.add(leg);
            });
        } else {
            head.position.y = .42 * sc; torso.position.y = .08 * sc;
            arms.forEach(a => a.position.y = .22 * sc);
        }
        return g;
    }

    // Teacher — positioned in front of desk
    const teacherZ = -3.8;
    const avatarGroup = makePerson(0x482AFF, 1.2, true);
    avatarGroup.position.set(0, .55, teacherZ);
    // Arms at natural resting angle (slightly out from body)
    if (avatarGroup.userData.arms[0]) avatarGroup.userData.arms[0].rotation.z = .2;
    if (avatarGroup.userData.arms[1]) avatarGroup.userData.arms[1].rotation.z = -.2;
    scene.add(avatarGroup);

    // Teacher glow
    const teachBase = new THREE.Mesh(new THREE.CylinderGeometry(.5, .5, .02, 32),
        new THREE.MeshBasicMaterial({ color: 0x482AFF, transparent: true, opacity: .2 }));
    teachBase.position.set(0, .01, teacherZ); scene.add(teachBase);
    [0, 1].forEach(i => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(.45 + i * .15, .012, 8, 32),
            new THREE.MeshBasicMaterial({ color: 0x55CBF9, transparent: true, opacity: .15 - i * .05 }));
        ring.rotation.x = Math.PI / 2; ring.position.set(0, .02, teacherZ); scene.add(ring);
    });

    // === TALKING: big wifi arcs, rotated 90° left, bigger with more spacing ===
    const talkGroup = new THREE.Group();
    const talkWaves = [];
    [0, 1, 2].forEach(i => {
        const arc = new THREE.Mesh(
            new THREE.TorusGeometry(.18 + i * .16, .012, 6, 24, Math.PI * .7),
            new THREE.MeshBasicMaterial({ color: 0x55CBF9, transparent: true, opacity: .55 - i * .12 }));
        arc.rotation.y = Math.PI;
        talkGroup.add(arc); talkWaves.push(arc);
    });
    talkGroup.position.set(0, 1.6, teacherZ + .5);
    scene.add(talkGroup);

    // === THINKING: 3 horizontal dots ===
    const thinkGroup = new THREE.Group();
    const thinkDots = [];
    [-.05, 0, .05].forEach((dx, i) => {
        const dot = new THREE.Mesh(new THREE.SphereGeometry(.018, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xFBB116 }));
        dot.position.set(dx, 0, 0);
        thinkGroup.add(dot); thinkDots.push(dot);
    });
    thinkGroup.position.set(.28, 1.5, teacherZ + .2);
    thinkGroup.visible = false;
    scene.add(thinkGroup);

    // 6 Students
    const studentColors = [0x55CBF9, 0x88CE53, 0xFBB116, 0x6B5AFF, 0xF97316, 0x22C55E];
    const activeStudent = 2;
    const studentAvatars = [];
    const holoScreens = [];
    const focusRings = [];
    const studentPositions = [[-3, 0], [0, 0], [3, 0], [-3, 2.5], [0, 2.5], [3, 2.5]];

    studentPositions.forEach(([x, z], i) => {
        const col = studentColors[i];
        const isActive = i === activeStudent;
        const sGroup = new THREE.Group();
        sGroup.position.set(x, 0, z);
        // Desk
        const dsk = new THREE.Mesh(new THREE.BoxGeometry(1.6, .55, .8), deskMat);
        dsk.position.y = .275; sGroup.add(dsk);
        const sdt = new THREE.Mesh(new THREE.BoxGeometry(1.7, .04, .9), deskTopMat);
        sdt.position.y = .56; sGroup.add(sdt);
        // Chair
        const seat = new THREE.Mesh(new THREE.BoxGeometry(.5, .04, .45), new THREE.MeshPhongMaterial({ color: 0x2A1A5E }));
        seat.position.set(0, .45, .55); sGroup.add(seat);
        const cb = new THREE.Mesh(new THREE.BoxGeometry(.5, .38, .04), new THREE.MeshPhongMaterial({ color: 0x201550 }));
        cb.position.set(0, .67, .76); sGroup.add(cb);
        // Student
        const student = makePerson(col, .85, false);
        student.position.set(0, .52, .55);
        if (isActive && student.userData.arms[1]) student.userData.arms[1].rotation.z = -.7;
        sGroup.add(student);
        // Book
        const book = new THREE.Mesh(new THREE.BoxGeometry(.28, .035, .18), new THREE.MeshPhongMaterial({ color: col }));
        book.position.set(.25, .59, -.05); sGroup.add(book);
        // Screen
        const screen = new THREE.Mesh(new THREE.PlaneGeometry(.65, .4),
            new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: isActive ? .15 : .06 }));
        screen.position.set(0, 1.0, -.15); sGroup.add(screen); holoScreens.push(screen);
        const sbPts = [new THREE.Vector3(-.325,-.2,0), new THREE.Vector3(.325,-.2,0),
            new THREE.Vector3(.325,.2,0), new THREE.Vector3(-.325,.2,0), new THREE.Vector3(-.325,-.2,0)];
        const sbLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sbPts),
            new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: isActive ? .35 : .12 }));
        sbLine.position.copy(screen.position); sGroup.add(sbLine);
        // Focus ring
        if (isActive) {
            const ring = new THREE.Mesh(new THREE.TorusGeometry(.55, .015, 8, 32),
                new THREE.MeshBasicMaterial({ color: 0x55CBF9, transparent: true, opacity: .35 }));
            ring.rotation.x = Math.PI / 2; ring.position.set(0, .02, .55); sGroup.add(ring);
            focusRings.push(ring);
        }
        scene.add(sGroup);
        studentAvatars.push(student);
    });

    // === FLOATING MOLECULE ===
    const molGroup = new THREE.Group();
    const atomCols = [0x55CBF9, 0x482AFF, 0xFBB116, 0x88CE53, 0x55CBF9, 0xFBB116, 0x88CE53];
    const atomPositions = [[0,0,0],[.8,.5,0],[-.8,.4,.3],[0,-.8,.2],[.5,0,-.7],[-.4,.7,-.3],[.3,-.5,.6]];
    const atomMeshes = [];
    atomPositions.forEach((p, i) => {
        const sz = .08 + Math.random() * .08;
        const am = new THREE.Mesh(new THREE.SphereGeometry(sz, 12, 12),
            new THREE.MeshBasicMaterial({ color: atomCols[i], transparent: true, opacity: .7 }));
        am.position.set(...p); molGroup.add(am); atomMeshes.push(am);
    });
    // Bonds
    [[0,1],[0,2],[0,3],[0,4],[2,5],[3,6]].forEach(([a,b]) => {
        const pts = [new THREE.Vector3(...atomPositions[a]), new THREE.Vector3(...atomPositions[b])];
        molGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
            new THREE.LineBasicMaterial({ color: 0x482AFF, transparent: true, opacity: .2 })));
    });
    molGroup.position.set(5, 3.5, -4); molGroup.scale.setScalar(1.2);
    scene.add(molGroup);

    // === DNA HELIX floating on left ===
    const dnaGroup = new THREE.Group();
    for (let i = 0; i < 20; i++) {
        const angle = i * .6;
        const y = i * .15 - 1.5;
        const x1 = Math.cos(angle) * .3, z1 = Math.sin(angle) * .3;
        const x2 = Math.cos(angle + Math.PI) * .3, z2 = Math.sin(angle + Math.PI) * .3;
        const n1 = new THREE.Mesh(new THREE.SphereGeometry(.04, 8, 8), new THREE.MeshBasicMaterial({ color: 0x55CBF9, transparent: true, opacity: .6 }));
        n1.position.set(x1, y, z1); dnaGroup.add(n1);
        const n2 = new THREE.Mesh(new THREE.SphereGeometry(.04, 8, 8), new THREE.MeshBasicMaterial({ color: 0x88CE53, transparent: true, opacity: .6 }));
        n2.position.set(x2, y, z2); dnaGroup.add(n2);
        if (i % 2 === 0) {
            const bar = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x1,y,z1), new THREE.Vector3(x2,y,z2)]),
                new THREE.LineBasicMaterial({ color: 0xFBB116, transparent: true, opacity: .15 }));
            dnaGroup.add(bar);
        }
    }
    dnaGroup.position.set(-5.5, 3, -3); scene.add(dnaGroup);

    // === GLOBE ===
    const globe = new THREE.Mesh(new THREE.SphereGeometry(.5, 24, 24),
        new THREE.MeshBasicMaterial({ color: 0x482AFF, wireframe: true, transparent: true, opacity: .2 }));
    globe.position.set(-5, 1.5, -5);
    scene.add(globe);
    // Globe stand
    const gStand = new THREE.Mesh(new THREE.CylinderGeometry(.03, .06, .8, 8), new THREE.MeshPhongMaterial({ color: 0x1A1040 }));
    gStand.position.set(-5, .7, -5); scene.add(gStand);

    // === BOOKSHELF on right wall ===
    const shelfMat = new THREE.MeshPhongMaterial({ color: 0x1A1040 });
    [1.5, 2.5, 3.5].forEach(y => {
        const shelf = new THREE.Mesh(new THREE.BoxGeometry(.15, .04, 1.8), shelfMat);
        shelf.position.set(7.9, y, -4); shelf.rotation.y = -Math.PI/2; scene.add(shelf);
        // Books
        const bookColors = [0x482AFF, 0x55CBF9, 0xFBB116, 0x88CE53, 0x6B5AFF, 0xF97316];
        for (let b = 0; b < 6; b++) {
            const bh = .3 + Math.random() * .4;
            const book = new THREE.Mesh(new THREE.BoxGeometry(.12, bh, .15 + Math.random() * .1),
                new THREE.MeshPhongMaterial({ color: bookColors[b % 6] }));
            book.position.set(7.85, y + bh/2 + .02, -4.6 + b * .3); scene.add(book);
        }
    });

    // === FLOATING PARTICLES (dust in light) ===
    const dustCount = 200;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
        dustPos[i*3] = (Math.random() - .5) * 14;
        dustPos[i*3+1] = Math.random() * 5.5 + .3;
        dustPos[i*3+2] = (Math.random() - .5) * 12;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0xCCCCFF, size: .03, transparent: true, opacity: .3 }));
    scene.add(dust);

    // === WINDOW with sky glow ===
    const winFrame = new THREE.Mesh(new THREE.BoxGeometry(.08, 2.5, 3.5), new THREE.MeshPhongMaterial({ color: 0x1A1040 }));
    winFrame.position.set(7.96, 3, 1); scene.add(winFrame);
    const winGlass = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 2.2),
        new THREE.MeshBasicMaterial({ color: 0x2244AA, transparent: true, opacity: .2 }));
    winGlass.position.set(7.95, 3, 1); winGlass.rotation.y = -Math.PI/2; scene.add(winGlass);
    // Sky gradient behind window
    const sky = new THREE.Mesh(new THREE.PlaneGeometry(4, 3),
        new THREE.MeshBasicMaterial({ color: 0x3366CC, transparent: true, opacity: .15 }));
    sky.position.set(8.5, 3.2, 1); sky.rotation.y = -Math.PI/2; scene.add(sky);

    // === CEILING LIGHTS — neon strips ===
    [[-3, -2], [3, -2], [-3, 2], [3, 2]].forEach(([x, z]) => {
        const cLight = new THREE.Mesh(new THREE.BoxGeometry(2, .04, .15), new THREE.MeshBasicMaterial({ color: 0xDDDDFF, transparent: true, opacity: .9 }));
        cLight.position.set(x, 5.98, z); scene.add(cLight);
        // Glow beneath
        const glow = new THREE.PointLight(0xCCCCFF, .3, 4);
        glow.position.set(x, 5.5, z); scene.add(glow);
    });

    // === LIGHTING ===
    scene.add(new THREE.AmbientLight(0x4444AA, .35));
    const mainLight = new THREE.DirectionalLight(0xCCCCFF, .4);
    mainLight.position.set(2, 5, 3); scene.add(mainLight);
    // Board light — dramatic
    const bLight = new THREE.PointLight(0x55CBF9, 1.2, 8);
    bLight.position.set(0, 4, -5.5); scene.add(bLight);
    // Purple accent from below
    const purpleUp = new THREE.PointLight(0x482AFF, .4, 10);
    purpleUp.position.set(0, .1, -2); scene.add(purpleUp);
    // Window light
    const wLight = new THREE.PointLight(0x3366CC, .5, 8);
    wLight.position.set(7, 3.5, 1); scene.add(wLight);
    // Orange warm accent
    const warmLight = new THREE.PointLight(0xFBB116, .15, 6);
    warmLight.position.set(-5, 2, 2); scene.add(warmLight);

    cam.position.set(0, 2.8, 4.5);
    cam.lookAt(0, 2.2, -2);

    // === CONTROLS ===
    let dragging = false, startX = 0, startY = 0, targetY = 0, targetX = 0, angleY = 0, angleX = 0;
    let autoRotate = true;

    c.addEventListener('mousedown', e => { dragging = true; autoRotate = false; startX = e.clientX; startY = e.clientY; });
    window.addEventListener('mouseup', () => { dragging = false; });
    window.addEventListener('mousemove', e => {
        if (!dragging) return;
        targetY += (e.clientX - startX) * .004;
        targetX += (e.clientY - startY) * .003;
        targetX = Math.max(-.4, Math.min(.4, targetX));
        startX = e.clientX; startY = e.clientY;
    });
    c.addEventListener('touchstart', e => { dragging = true; autoRotate = false; startX = e.touches[0].clientX; startY = e.touches[0].clientY; });
    c.addEventListener('touchend', () => { dragging = false; });
    c.addEventListener('touchmove', e => {
        if (!dragging) return;
        targetY += (e.touches[0].clientX - startX) * .004;
        targetX += (e.touches[0].clientY - startY) * .003;
        targetX = Math.max(-.4, Math.min(.4, targetX));
        startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    });

    // Only animate when visible
    let isVisible = false;
    const obs = new IntersectionObserver(([e]) => {
        isVisible = e.isIntersecting;
        if (isVisible) { obs.disconnect(); animate(); }
    }, { threshold: 0.1 });
    obs.observe(c);

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        // Auto-rotate slowly when not dragging
        if (autoRotate) targetY += .001;

        angleY += (targetY - angleY) * .04;
        angleX += (targetX - angleX) * .04;

        cam.position.x = Math.sin(angleY) * 6;
        cam.position.z = Math.cos(angleY) * 6;
        cam.position.y = 2.8 + angleX * 3;
        cam.lookAt(0, 2, -1.5);

        // Animate molecule
        molGroup.rotation.y = t * .3;
        molGroup.rotation.x = Math.sin(t * .2) * .2;
        atomMeshes.forEach((a, i) => a.scale.setScalar(1 + Math.sin(t * 2 + i) * .15));

        // Animate DNA
        dnaGroup.rotation.y = t * .4;
        dnaGroup.position.y = 3 + Math.sin(t * .5) * .3;

        // Animate globe
        globe.rotation.y = t * .3;

        // Teacher — gentle sway, both arms natural
        if (avatarGroup.userData.head) {
            avatarGroup.userData.head.rotation.y = Math.sin(t * .5) * .12;
        }
        if (avatarGroup.userData.arms) {
            // Both arms gently sway at sides
            avatarGroup.userData.arms[0].rotation.z = .2 + Math.sin(t * .8) * .05;
            avatarGroup.userData.arms[1].rotation.z = -.2 + Math.sin(t * .9 + 1) * .05;
        }
        avatarGroup.position.y = .55 + Math.sin(t * 1.2) * .015;

        // Alternate talk/think every ~7 seconds
        const isTalking = Math.floor(t / 7) % 2 === 0;
        talkGroup.visible = isTalking;
        thinkGroup.visible = !isTalking;

        // Talk: arcs gently pulse opacity (wifi broadcast feel)
        talkWaves.forEach((arc, i) => {
            arc.material.opacity = .3 + Math.sin(t * 2.5 + i * .6) * .2;
        });

        // Think: dots bounce one after another
        thinkDots.forEach((dot, i) => {
            dot.position.y = Math.abs(Math.sin(t * 3 + i * .8)) * .035;
        });

        // Students — head look + active arm
        studentAvatars.forEach((student, i) => {
            const isActive = i === activeStudent;
            if (student.userData.head) {
                if (isActive) {
                    student.userData.head.rotation.y = Math.sin(t * .4) * .08;
                } else {
                    student.userData.head.rotation.y = Math.sin(t * .6 + i * 1.5) * .2;
                }
            }
            if (student.userData.arms) {
                if (isActive) {
                    student.userData.arms[1].rotation.z = -.7 + Math.sin(t * 2) * .1;
                } else {
                    student.userData.arms.forEach((arm, ai) => {
                        arm.rotation.z = (ai === 0 ? 1 : -1) * (.15 + Math.sin(t * .7 + i + ai) * .04);
                    });
                }
            }
        });

        // Focus rings pulse
        focusRings.forEach(r => {
            r.material.opacity = .2 + Math.sin(t * 2.5) * .15;
        });

        // Holographic screens flicker
        holoScreens.forEach((s, i) => {
            s.material.opacity = .06 + Math.sin(t * 2 + i * 1.5) * .05;
        });

        // Board lines animate
        boardLines.forEach((bl, i) => {
            bl.material.opacity = .2 + Math.sin(t * 1.5 + i * .8) * .15;
        });

        // Dust drift
        const dArr = dust.geometry.attributes.position.array;
        for (let i = 0; i < dustCount; i++) {
            dArr[i*3+1] += Math.sin(t + i) * .0005;
            dArr[i*3] += Math.cos(t * .5 + i) * .0003;
            if (dArr[i*3+1] > 5.5) dArr[i*3+1] = .3;
        }
        dust.geometry.attributes.position.needsUpdate = true;

        // Board light subtle pulse
        bLight.intensity = 1 + Math.sin(t * 2) * .3;

        renderer.render(scene, cam);
    }

    new ResizeObserver(() => {
        const nw = ct.clientWidth, nh = ct.clientHeight;
        if (nw > 0 && nh > 0) { cam.aspect = nw / nh; cam.updateProjectionMatrix(); renderer.setSize(nw, nh); }
    }).observe(ct);
}
