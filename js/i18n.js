/* ============================================
   METATESK — Internationalization (EN / AZ)
   ============================================ */

const translations = {
    en: {
        // Nav
        'nav.about': 'About',
        'nav.product': 'Product',
        'nav.solutions': 'Solutions',
        'nav.team': 'Team',
        'nav.demo': 'Get a Demo',

        // Mobile menu
        'mob.about': 'About',
        'mob.product': 'Product',
        'mob.solutions': 'Solutions',
        'mob.team': 'Team',
        'mob.demo': 'Get a Demo',

        // Loader
        'loader.sub': 'Entering immersive world...',

        // Marquee
        'mq.1': 'Forbes 30 Under 30 Europe',
        'mq.2': 'Google for Startups',
        'mq.3': 'ABB Partnership',
        'mq.4': 'EBRD Star Venture',
        'mq.5': 'Presidential Youth Award',
        'mq.6': 'Draper Hero Training',
        'mq.7': '2x Teknofest Winner',
        'mq.8': 'RC Challenge Partner',

        // Hero
        'hero.badge': '<span class="badge-dot"></span>Metatesk — The Future of Education is Immersive',
        'hero.title1': 'Step <em>Inside</em>',
        'hero.title2': 'Education',
        'hero.cta1': 'Request a Demo',
        'hero.cta2': 'Explore',
        'hero.scroll': 'Scroll',

        // Problem
        'problem.tag': 'The Problem',
        'problem.title': 'The world changed.<br><span class="grad">Education didn\'t.</span>',
        'problem.sub': 'Students grow up in a digital, interactive world — but classrooms still rely on passive lectures, static textbooks, and memorization. The gap between how students live and how they learn keeps growing.',
        'problem.c1.title': 'Passive Learning',
        'problem.c1.text': 'Students watch and memorize. They rarely interact with what they study. Engagement drops. Understanding stays surface-level.',
        'problem.c2.title': 'Outdated Methods',
        'problem.c2.text': 'Textbooks and lectures were built for a different century. Digital-native students deserve learning that matches how they experience the world.',
        'problem.c3.title': 'Invisible Concepts',
        'problem.c3.text': 'Chemistry reactions, molecular structures, physical systems — students must imagine what they cannot see. Real comprehension suffers.',
        'problem.c4.title': 'One-Size-Fits-All',
        'problem.c4.text': 'Every student learns differently. But most classrooms deliver one lesson at one speed. Personalization barely exists at scale.',

        // Solution
        'sol.tag': 'The Solution',
        'sol.title': 'What if students could<br><span class="grad">enter the lesson?</span>',
        'sol.sub': 'Think of it as a Roblox-like world, but for education — a multiplayer VR/AI platform where learners globally can master subjects through experience. Not gamification gimmicks — real immersive education infrastructure.',
        'sol.label': 'Interactive 3D Molecular Visualization — Drag to rotate',
        'sol.f1.title': 'Immersive VR Environments',
        'sol.f1.text': 'Students enter subject-specific virtual worlds where abstract concepts become visible, tangible, and interactive. Science isn\'t a diagram — it\'s an experience you step inside.',
        'sol.f2.title': 'AI-Powered Teacher',
        'sol.f2.text': 'Not a chatbot. An intelligent teaching companion that adapts to each student\'s pace, answers questions in real-time, and evolves toward full AI teacher avatars with voice interaction.',
        'sol.f3.title': 'Multiplayer Classrooms',
        'sol.f3.text': 'Up to 30 students in shared virtual environments with real-time voice. Collaboration, group experiments, teacher-led sessions — education that\'s social, not isolated.',
        'sol.f4.title': 'Education Infrastructure',
        'sol.f4.text': 'A proprietary LMS that became its own product. Manage learners, track progress, deploy across schools. Not just content — scalable systems for entire education ecosystems.',

        // Product
        'prod.tag': 'Product',
        'prod.title': 'Four pillars.<br><span class="grad">One platform.</span>',
        'prod.vr.title': 'VR Learning Worlds',
        'prod.vr.text': 'Subject-specific virtual classrooms — from chemistry labs to physics simulations to biology explorations. Each environment is uniquely themed and curriculum-aligned. Real education through immersion.',
        'prod.ai.title': 'AI Teacher',
        'prod.ai.text': 'An intelligent educational guide that personalizes lessons, answers questions contextually, and adapts to each student\'s speed. Building toward AI teacher avatars and digital twin teaching.',
        'prod.multi.title': 'Multiplayer',
        'prod.multi.text': '30 students in shared virtual classrooms with real-time voice communication. Collaborative experiments, teacher-led group sessions, and AI-supported class management.',
        'prod.lms.title': 'LMS Platform',
        'prod.lms.text': 'Proprietary learning management system that grew from internal tool to standalone product. Complete education infrastructure that institutions adopt to run and scale their operations.',

        // Product card list items
        'prod.vr.li1': '6+ themed virtual classrooms',
        'prod.vr.li2': 'Interactive 3D simulations',
        'prod.vr.li3': 'Works on VR, desktop & tablet',
        'prod.ai.li1': 'Real-time voice interaction',
        'prod.ai.li2': 'Adaptive pacing',
        'prod.ai.li3': 'Teacher assistance tools',
        'prod.multi.li1': '30-student capacity',
        'prod.multi.li2': 'Live voice chat',
        'prod.multi.li3': 'Collaborative experiments',
        'prod.lms.li1': 'Institutional deployment',
        'prod.lms.li2': 'Progress analytics',
        'prod.lms.li3': 'Multi-school management',

        // How it works
        'how.tag': 'How It Works',
        'how.title': 'From classroom to<br><span class="grad">virtual world.</span>',
        'how.s1.title': 'Curriculum Aligned',
        'how.s1.text': 'Every VR experience maps to real educational standards and learning objectives. Not random content — structured education.',
        'how.s2.title': 'Enter the Experience',
        'how.s2.text': 'Students put on a VR headset or access through a digital interface and step into an interactive 3D world built for the topic.',
        'how.s3.title': 'AI Guides the Journey',
        'how.s3.text': 'The AI teaching companion explains, adapts, answers questions, and ensures deep understanding at each student\'s pace.',
        'how.s4.title': 'Learn by Doing',
        'how.s4.text': 'Run experiments, observe molecular reactions, manipulate structures. Understanding comes from experience, not memorization.',
        'how.s5.title': 'Track & Scale',
        'how.s5.text': 'The LMS handles deployment, progress tracking, and institutional management. From one classroom to an entire national education system.',

        // Solutions
        'solutions.tag': 'Solutions',
        'solutions.title': 'Built for every stakeholder<br><span class="grad">in education.</span>',
        'solutions.students.title': 'For Students',
        'solutions.students.text': 'Learn by experiencing, not memorizing. Complex subjects become understandable when you can see, touch, and explore them inside immersive worlds.',
        'solutions.educators.title': 'For Educators',
        'solutions.educators.text': 'AI tools that save time, improve personalization, and bring real innovation into every session. Support teachers — don\'t replace them.',
        'solutions.schools.title': 'For Schools',
        'solutions.schools.text': 'Modernize with scalable digital learning. Differentiate your institution, improve engagement, and deploy next-generation education tools system-wide.',
        'solutions.gov.title': 'For Governments',
        'solutions.gov.text': 'Deploy immersive AI-powered learning across public education systems. National-scale infrastructure for the future of an entire country\'s education.',

        // HUD (Classroom Preview)
        'hud.live': 'LIVE 3D CLASSROOM',
        'hud.sub': 'AI Teacher Active · 6 Students Connected',
        'hud.interactive': 'Interactive',
        'hud.hint': 'Drag to look around',

        // Virtual Classrooms
        'rooms.tag': 'Virtual Classrooms',
        'rooms.title': 'Every subject gets<br><span class="grad">its own world.</span>',
        'rooms.sub': 'Each subject has a uniquely themed 3D environment — designed to match the topic, engage the senses, and make learning feel natural. Not one generic room — a universe of classrooms.',
        'rooms.math': 'Mathematics',
        'rooms.math.text': 'Number lines, geometric shapes, spatial reasoning — abstract math becomes visual and interactive.',
        'rooms.physics': 'Physics Lab',
        'rooms.physics.text': 'Pendulums, wave patterns, force simulations — see physics happen instead of just reading formulas.',
        'rooms.chem': 'Chemistry Lab',
        'rooms.chem.text': 'Virtual beakers, molecule models, reactions at molecular level — safe experimentation without limits.',
        'rooms.bio': 'Biology',
        'rooms.bio.text': 'DNA helixes, cell structures, ecosystems — explore life sciences at every scale from micro to macro.',
        'rooms.code': 'Programming',
        'rooms.code.text': 'Floating code screens, logic visualizations, server simulations — learn to code inside the machine.',
        'rooms.lang': 'Languages',
        'rooms.lang.text': 'Cultural immersion, conversation practice, world exploration — learn languages by living them virtually.',

        // Platform
        'plat.tag': 'Works Everywhere',
        'plat.title': 'One platform.<br><span class="grad">Every device.</span>',
        'plat.sub': 'VR headsets deliver the deepest immersion — but Metatesk works on any screen. No hardware barrier to getting started.',
        'plat.vr': 'VR Headset',
        'plat.vr.sub': 'Full immersion',
        'plat.desktop': 'Desktop',
        'plat.desktop.sub': '3D interactive',
        'plat.tablet': 'Tablet',
        'plat.tablet.sub': 'Touch-friendly',

        // AI Teachers
        'personas.tag': 'AI Teachers',
        'personas.title': 'Not one teacher.<br><span class="grad">Four personalities.</span>',
        'personas.sub': 'Every student learns differently. That\'s why Metatesk doesn\'t have one AI — it has four distinct teaching personas, each with a unique style. Students pick the teacher that fits how they think.',
        'personas.ada.name': 'Professor Ada',
        'personas.ada.style': 'Patient Guide',
        'personas.ada.text': 'Step-by-step explanations with comprehension checks. Never rushes. Builds understanding layer by layer until it clicks.',
        'personas.felix.name': 'Dr. Felix',
        'personas.felix.style': 'Energetic Motivator',
        'personas.felix.text': 'Real-world examples, analogies, high energy. Makes connections between subjects and life. Turns dry topics into exciting discoveries.',
        'personas.maia.name': 'Professor Maia',
        'personas.maia.style': 'Thought Provoker',
        'personas.maia.text': 'Socratic method — asks strategic questions instead of giving answers directly. Builds critical thinking and deep reasoning skills.',
        'personas.rex.name': 'Dr. Rex',
        'personas.rex.style': 'Efficient Expert',
        'personas.rex.text': 'Concise, direct, no fluff. Maximizes knowledge density per minute. Perfect for advanced students who want speed and depth.',

        // Classroom Preview
        'preview.tag': 'See It In Action',
        'preview.title': 'A classroom you can<br><span class="grad">step inside.</span>',
        'preview.sub': 'This is what a Metatesk learning environment looks like from the inside. Interactive 3D. AI-guided. Built for understanding.',

        // Founder
        'founder.tag': 'Behind Metatesk',
        'founder.title': 'Built by people who believe<br><span class="grad">education should feel alive.</span>',
        'founder.sub': 'Metatesk started from a real frustration: watching science education remain passive and outdated while the world became interactive and digital. The question was simple — <strong>what if students could enter the lesson instead of just watching it?</strong> Early VR prototypes showed children responding with genuine excitement. That spark became a company.',
        'founder.jobtitle': 'Founder &amp; CEO',
        'founder.bio': 'Gunay Imanzade is the founder and CEO of Metatesk, the Azerbaijan-based edtech company building immersive VR and AI-powered learning environments for schools, governments, and learners worldwide. A Forbes 30 Under 30 Europe honoree, recipient of the Presidential Youth Award for Innovation and Entrepreneurship, and named Tech Entrepreneur of the Year by Azerbaijan\'s Innovation and Digital Development Agency, Gunay leads Metatesk\'s mission to make education an experience students step inside — not just something they read.',
        'founder.forbes': 'Forbes 30 Under 30',
        'founder.forbes.sub': 'Europe',
        'founder.pres': 'Presidential Youth Award',
        'founder.pres.sub': 'Innovation & Entrepreneurship',
        'founder.tech': 'Tech Entrepreneur of the Year',
        'founder.tech.sub': 'IDDA Awards',
        'founder.tekno': '2x Teknofest Winner',
        'founder.tekno.sub': 'Technology Competition',

        // FAQ
        'faq.tag': 'FAQ',
        'faq.title': 'Frequently asked<br><span class="grad">questions.</span>',
        'faq.q1': 'What makes Metatesk different from other edtech?',
        'faq.a1': 'Metatesk is not just content delivery. It combines immersive VR environments, AI teaching support, multiplayer interaction, and institutional-grade LMS infrastructure in one platform. Students don\'t watch — they step inside.',
        'faq.q2': 'Do students need VR headsets?',
        'faq.a2': 'VR headsets provide the most immersive experience, but Metatesk also works through digital interfaces on computers and tablets — flexible for any institution\'s setup.',
        'faq.q3': 'How does the AI teacher work?',
        'faq.a3': 'Our AI companion adapts to each student\'s pace, explains concepts in real-time within the VR environment, and provides personalized guidance. The long-term vision includes AI teacher avatars with voice-in/voice-out interaction.',
        'faq.q4': 'Can this deploy at national scale?',
        'faq.a4': 'Yes. The proprietary LMS and infrastructure are built specifically for institutional and government-level deployment. We actively work with B2G partners for public education systems.',
        'faq.q5': 'What subjects are available?',
        'faq.a5': 'Metatesk covers Mathematics, Physics, Chemistry, Biology, Programming, and Languages — each with a uniquely themed virtual classroom. Curriculum-aligned content is continuously expanding across subjects and levels.',

        // Vision
        'vision.tag': 'Our Vision',
        'vision.quote': 'A world where every learner can <em>step inside</em> education — guided by intelligent systems, supported by immersive environments, and empowered to learn in ways that match the future.',
        'vision.p1': 'Immersive',
        'vision.p2': 'Intelligent',
        'vision.p3': 'Personalized',
        'vision.p4': 'Global',

        // Footer
        'ft.product': 'Product',
        'ft.vr': 'VR Labs',
        'ft.ai': 'AI Teacher',
        'ft.lms': 'LMS',
        'ft.multi': 'Multiplayer',
        'ft.solutions': 'Solutions',
        'ft.students': 'Students',
        'ft.educators': 'Educators',
        'ft.schools': 'Schools',
        'ft.govs': 'Governments',
        'ft.company': 'Company',
        'ft.about': 'About',
        'ft.team': 'Team',
        'ft.contact': 'Contact',

        // Contact
        'contact.tag': 'Get Started',
        'contact.title': 'Ready to transform<br><span class="grad">education?</span>',
        'contact.sub': 'Whether you\'re a school, government, partner, or investor — let\'s explore what Metatesk can do for your mission.',
        'contact.name': 'Your name',
        'contact.email': 'Email address',
        'contact.type': 'I am a...',
        'contact.type.school': 'School / Education Center',
        'contact.type.gov': 'Government / Public Sector',
        'contact.type.educator': 'Educator',
        'contact.type.partner': 'Partner',
        'contact.type.investor': 'Investor',
        'contact.type.other': 'Other',
        'contact.message': 'Tell us about your needs...',
        'contact.send': 'Send Message',

        // Footer
        'footer.tagline': 'Metatesk builds immersive VR learning worlds guided by AI teachers. Founded by <a href="/gunay-imanzade" class="footer-founder-link">Gunay Imanzade</a> — Forbes 30 Under 30 Europe.',
        'footer.copy': '© 2026 Metatesk. All rights reserved.',

        // ── Product page ──────────────────────────────────────────────────
        'prod.page.tag': 'Platform',
        'prod.page.sub': 'Metatesk combines immersive VR environments, intelligent AI teachers, real-time multiplayer classrooms, and institutional LMS infrastructure into a single cohesive platform — built to transform education from the ground up.',
        'prod.page.cta2': 'See Solutions',
        'prod.p1.tag': 'Pillar 01',
        'prod.p2.tag': 'Pillar 02',
        'prod.p3.tag': 'Pillar 03',
        'prod.p4.tag': 'Pillar 04',
        'prod.vr.p1': 'Students don\'t just read about chemistry — they stand inside a molecular lab. They don\'t memorize physics formulas — they watch forces interact in real time. Each subject at Metatesk has a uniquely themed, curriculum-aligned 3D virtual classroom designed to make abstract concepts tangible and unforgettable.',
        'prod.vr.p2': 'Six themed environments and growing: Mathematics, Physics, Chemistry, Biology, Programming, and Languages — each built to match the sensory and cognitive demands of the subject.',
        'prod.vr.f1.title': '6+ Themed Virtual Classrooms',
        'prod.vr.f1.text': 'Math, Physics, Chemistry, Biology, Programming, and Languages — each with its own purpose-built 3D environment.',
        'prod.vr.f2.title': 'Interactive 3D Simulations',
        'prod.vr.f2.text': 'Run chemical reactions, manipulate molecular structures, observe physical phenomena — all inside the virtual world.',
        'prod.vr.f3.title': 'Works on VR, Desktop &amp; Tablet',
        'prod.vr.f3.text': 'Full VR headset immersion or browser-based access — no hardware barrier to getting started.',
        'prod.vr.sub.math': 'Geometric shapes, number lines, spatial reasoning',
        'prod.vr.sub.physics': 'Pendulums, wave patterns, force simulations',
        'prod.vr.sub.chem': 'Molecule models, reactions at molecular level',
        'prod.vr.sub.bio': 'DNA helixes, cell structures, ecosystems',
        'prod.vr.sub.code': 'Floating code, logic visualizations, server simulations',
        'prod.vr.sub.lang': 'Cultural immersion, conversation practice',
        'prod.ai.p1': 'Not a chatbot. Not a quiz engine. Metatesk\'s AI Teacher is an intelligent educational companion that adapts to each student\'s pace, answers questions in real-time within the VR environment, and evolves toward full AI teacher avatars with voice-in/voice-out interaction.',
        'prod.ai.p2': 'Every student learns differently — that\'s why Metatesk offers four distinct teaching personas. Students choose the teacher that fits how they think and learn best.',
        'prod.ai.f1.title': 'Real-time Voice Interaction',
        'prod.ai.f1.text': 'Ask questions naturally inside the VR world. The AI responds contextually with voice and visual cues.',
        'prod.ai.f2.title': 'Adaptive Pacing',
        'prod.ai.f2.text': 'The AI adjusts explanation depth, speed, and style to match each individual student\'s comprehension level.',
        'prod.multi.p1': 'Education is inherently social. Metatesk\'s multiplayer infrastructure brings up to 30 students together inside a shared virtual environment — with live voice communication, collaborative experiments, and teacher-led group sessions happening in real time.',
        'prod.multi.p2': 'Students learn together, interact with simulations as a class, and build understanding through shared experience — the same social dynamic as a physical classroom, but with the power of an immersive virtual world.',
        'prod.multi.f1.title': '30-Student Capacity',
        'prod.multi.f1.text': 'A full class of 30 students can share a single virtual environment simultaneously — teacher and students together.',
        'prod.multi.f2.title': 'Live Voice Chat',
        'prod.multi.f2.text': 'Real-time spatial voice communication — students and teachers talk naturally as if physically in the same room.',
        'prod.multi.f3.title': 'Collaborative Experiments',
        'prod.multi.f3.text': 'Students work together on virtual experiments, lab simulations, and interactive challenges — learning through doing.',
        'prod.multi.f4.title': 'Teacher-Led Sessions',
        'prod.multi.f4.text': 'Educators control the classroom environment — guiding students, presenting content, and managing the session from within VR.',
        'prod.multi.stat': 'Students per virtual classroom',
        'prod.multi.note': 'Like Roblox, but for education — a multiplayer VR world where learners globally master subjects through shared interactive experience.',
        'prod.lms.p1': 'What started as an internal tool to manage Metatesk\'s own deployments grew into a full-featured, institutional-grade learning management system. Schools, education networks, and governments use it to deploy, manage, and scale their immersive learning operations.',
        'prod.lms.p2': 'Built for national scale — not just a classroom. The Metatesk LMS is the infrastructure layer that makes it possible to bring immersive education to an entire country\'s school system.',
        'prod.lms.f1.title': 'Institutional Deployment',
        'prod.lms.f1.text': 'Deploy Metatesk across an entire school, network of schools, or national education system with centralized management.',
        'prod.lms.f2.title': 'Progress Analytics',
        'prod.lms.f2.text': 'Track individual student progress, class-wide performance, and institutional outcomes — with actionable data for educators and administrators.',
        'prod.lms.f3.title': 'Multi-School Management',
        'prod.lms.f3.text': 'Manage multiple schools or institutions from a single dashboard — user accounts, content, sessions, and analytics in one place.',
        'prod.lms.f4.title': 'National Scale Ready',
        'prod.lms.f4.text': 'Designed for B2G deployment — scalable infrastructure that supports thousands of schools and millions of students.',
        'prod.lms.dash.1': 'Active Schools',
        'prod.lms.dash.1v': 'Connected',
        'prod.lms.dash.2': 'Student Progress Tracking',
        'prod.lms.dash.2v': 'Real-time',
        'prod.lms.dash.3': 'Content Management',
        'prod.lms.dash.3v': 'Centralized',
        'prod.lms.dash.4': 'Deployment Scale',
        'prod.lms.dash.4v': 'National',
        'prod.lms.dash.5': 'Analytics Reports',
        'prod.lms.dash.5v': 'Automated',
        'prod.lms.label': 'LMS Dashboard',
        'prod.multi.live': 'Live',
        'prod.multi.voice': 'Voice',
        'prod.multi.real': 'Real',
        'prod.multi.time': 'Time',
        'prod.multi.ai.label': 'AI',
        'prod.multi.supported': 'Supported',
        'prod.cta.title': 'Ready to step <span class="grad">inside?</span>',
        'prod.cta.sub': 'Metatesk is ready for schools, institutions, and governments. Request a live demo and see all four pillars working together in a real session.',
        'prod.cta.cta2': 'See Solutions',

        // ── Solutions page ────────────────────────────────────────────────
        'sol.page.sub': 'Metatesk serves the full education ecosystem — students who need to experience concepts, educators who need better tools, schools ready to modernize, and governments building the future of national learning.',
        'sol.page.cta2': 'See the Product',
        'sol.s01.tag': 'Solutions · 01',
        'sol.s02.tag': 'Solutions · 02',
        'sol.s03.tag': 'Solutions · 03',
        'sol.s04.tag': 'Solutions · 04',
        'sol.students.p1': 'Education shouldn\'t be about memorizing what you can\'t see. Metatesk puts students inside the lesson — inside the chemistry reaction, the physics simulation, the biological ecosystem — so concepts become experiences, not abstract facts.',
        'sol.students.p2': 'With an AI teacher that adapts to each student\'s learning style and pace, and multiplayer classrooms that make learning social, students engage with material in ways that genuinely build understanding.',
        'sol.students.li1': 'Experience subjects in fully immersive 3D virtual environments',
        'sol.students.li2': 'Choose your AI teacher from 4 distinct teaching personas',
        'sol.students.li3': 'Learn alongside classmates in real-time shared sessions',
        'sol.students.li4': 'Practice and experiment without limits or real-world risk',
        'sol.students.li5': 'Access on VR headset, desktop, or tablet — wherever you learn',
        'sol.students.feat1': 'Immersive VR Worlds',
        'sol.students.feat1.sub': 'Step inside Chemistry, Physics, Biology, Math &amp; more',
        'sol.students.feat2': 'AI Teacher Companion',
        'sol.students.feat2.sub': 'Real-time voice guidance that adapts to your pace',
        'sol.students.feat3': 'Multiplayer Learning',
        'sol.students.feat3.sub': 'Study with classmates in shared virtual classrooms',
        'sol.students.feat4': 'Any Device',
        'sol.students.feat4.sub': 'VR headset, desktop browser, or tablet — your choice',
        'sol.educators.p1': 'Metatesk doesn\'t replace teachers — it amplifies them. Educators gain AI tools that handle personalization at scale, class management systems that reduce administrative overhead, and immersive content that makes every lesson more engaging.',
        'sol.educators.p2': 'Teachers lead sessions from within or alongside the virtual world, supported by AI that handles individual student questions and pacing — freeing educators to focus on the big-picture understanding of their class.',
        'sol.educators.li1': 'AI handles individualized student guidance while you focus on the class',
        'sol.educators.li2': 'Lead teacher-directed multiplayer sessions with full control',
        'sol.educators.li3': 'Access curriculum-aligned content across 6+ subjects',
        'sol.educators.li4': 'Track each student\'s progress and comprehension in real time',
        'sol.educators.li5': 'Reduce time spent on repetitive explanations and reteaching',
        'sol.educators.feat1': 'Real-time Student Analytics',
        'sol.educators.feat1.sub': 'See who\'s keeping up and who needs support — instantly',
        'sol.educators.feat2': 'AI Handles Individual Q&amp;A',
        'sol.educators.feat2.sub': '4 AI personas answer student questions so you don\'t have to',
        'sol.educators.feat3': 'Curriculum-Aligned Content',
        'sol.educators.feat3.sub': 'Every VR environment maps to real educational standards',
        'sol.educators.feat4': 'Class Control',
        'sol.educators.feat4.sub': 'Lead, pause, direct, and manage your entire VR classroom',
        'sol.schools.p1': 'Metatesk gives schools a complete digital learning transformation — without the chaos of managing multiple platforms, vendors, or technical teams. The LMS handles deployment, user management, and progress tracking from a single dashboard.',
        'sol.schools.p2': 'Schools that adopt Metatesk differentiate themselves with next-generation learning infrastructure, improve student engagement metrics, and demonstrate genuine educational innovation to parents, boards, and accreditors.',
        'sol.schools.li1': 'Deploy across your entire school from a centralized LMS dashboard',
        'sol.schools.li2': 'Manage all student and teacher accounts in one place',
        'sol.schools.li3': 'Access immersive content for 6+ subjects from day one',
        'sol.schools.li4': 'Works on existing hardware — no mandatory VR headset purchase required',
        'sol.schools.li5': 'Scalable from a single classroom to a multi-campus institution',
        'sol.schools.feat1': 'Centralized LMS',
        'sol.schools.feat1.sub': 'One dashboard for all teachers, students, and content',
        'sol.schools.feat2': 'Easy Deployment',
        'sol.schools.feat2.sub': 'Simple onboarding — up and running in days, not months',
        'sol.schools.feat3': 'Progress Reports',
        'sol.schools.feat3.sub': 'Automated analytics for administrators, parents, and boards',
        'sol.schools.feat4': 'Flexible Hardware',
        'sol.schools.feat4.sub': 'Runs on VR headsets, desktops, and tablets',
        'sol.gov.p1': 'Metatesk is built for national scale. For governments that want to modernize public education systems, Metatesk provides the immersive learning infrastructure, the LMS backbone, and the AI-powered teaching layer to deploy across thousands of schools simultaneously.',
        'sol.gov.p2': 'B2G-ready, strategically backed by EBRD and Google for Startups, and validated through government-level partnerships — Metatesk is the platform that can transform an entire country\'s education system from the ground up.',
        'sol.gov.li1': 'National-scale deployment across thousands of public schools',
        'sol.gov.li2': 'Centralized government dashboard for system-wide management',
        'sol.gov.li3': 'Curriculum customization aligned to national educational standards',
        'sol.gov.li4': 'Data sovereignty and institutional security protocols',
        'sol.gov.li5': 'Ongoing partnership model with implementation and training support',
        'sol.gov.li6': 'Proven B2G track record backed by EBRD Star Venture and Google for Startups',
        'sol.gov.feat1': 'National Scale Infrastructure',
        'sol.gov.feat1.sub': 'Deploy to thousands of schools across a country',
        'sol.gov.feat2': 'Government Dashboard',
        'sol.gov.feat2.sub': 'System-wide visibility, reporting, and management',
        'sol.gov.feat3': 'Curriculum Alignment',
        'sol.gov.feat3.sub': 'Content customized to national educational standards',
        'sol.gov.feat4': 'Data Security',
        'sol.gov.feat4.sub': 'Institutional security protocols and data sovereignty',
        'sol.impact.tag': 'Impact',
        'sol.impact.title': 'The platform built<br><span class="grad">for scale.</span>',
        'sol.impact.sub': 'Metatesk\'s architecture was designed from day one to grow from a single classroom to an entire national education system.',
        'sol.impact.stat1': 'Students per virtual classroom',
        'sol.impact.stat2': 'Subjects with immersive environments',
        'sol.impact.stat3': 'AI teacher personas for personalized learning',
        'sol.impact.stat4': 'National scale deployment capacity',
        'sol.cta.title': 'Which solution is<br><span class="grad">right for you?</span>',
        'sol.cta.sub': 'Whether you represent a single school or a national ministry of education, Metatesk has a deployment model built for your mission. Let\'s explore it together.',
        'sol.cta.cta2': 'Explore the Product',
        'sol.students.h2': 'For <span class="grad">Students</span>',
        'sol.educators.h2': 'For <span class="grad">Educators</span>',
        'sol.schools.h2': 'For <span class="grad">Schools</span>',
        'sol.gov.h2': 'For <span class="grad">Governments</span>',

        // ── Gunay Imanzade page ───────────────────────────────────────────
        'gunay.tag': 'Founder &amp; CEO · Metatesk',
        'gunay.role': 'Building the future of education from Baku, Azerbaijan',
        'gunay.badge1': 'Forbes 30 Under 30 Europe',
        'gunay.badge2': 'Presidential Youth Award',
        'gunay.badge3': 'Tech Entrepreneur of the Year',
        'gunay.badge4': '2x Teknofest Winner',
        'gunay.bio.short': 'Gunay Imanzade founded Metatesk to answer one question: what if students could enter the lesson instead of just watching it? Today, Metatesk\'s immersive VR and AI learning platform is deployed in schools and pursued by governments across the region.',
        'gunay.cta1': 'View Metatesk',
        'gunay.bg.tag': 'Background',
        'gunay.bg.title': 'The person behind<br><span class="grad">the platform.</span>',
        'gunay.bio.p1': 'Gunay Imanzade studied chemistry at Baku State University (2013–2017) before pursuing a master\'s degree at ETH Zurich — the Swiss Federal Institute of Technology — one of the world\'s top technical universities. After working at ETH Zurich in 2018 and spending time teaching in China, she returned to Azerbaijan with a clear conviction: that education needed to be rebuilt from the ground up.',
        'gunay.bio.p2': 'In 2021, Gunay founded Metatesk — an immersive VR and AI education platform built for the way students actually learn. The platform combines virtual reality classrooms, AI teacher companions with four distinct personas, multiplayer sessions for up to 30 students, and an institutional-grade LMS capable of national-scale deployment.',
        'gunay.bio.p3': 'Her work earned recognition across the globe: named to the Forbes 30 Under 30 Europe list, awarded the Presidential Youth Award for Innovation and Entrepreneurship, named Tech Entrepreneur of the Year by Azerbaijan\'s Innovation and Digital Development Agency (IDDA), and recognized as a 2x Teknofest winner. Metatesk has been backed by Google for Startups Silkway Accelerator, Microsoft for Startups, ABB, EBRD Star Venture, and Draper University.',
        'gunay.stat1': 'International Awards',
        'gunay.stat2': 'Metatesk Founded',
        'gunay.stat3': 'Students per Class',
        'gunay.stat4': 'Subjects Covered',
        'gunay.awards.tag': 'Recognition',
        'gunay.awards.title': 'Awards &amp; <span class="grad">achievements.</span>',
        'gunay.awards.sub': 'Gunay\'s work has been recognized by some of the world\'s most prestigious institutions in technology, entrepreneurship, and education.',
        'gunay.awards.card1.h3': 'Forbes 30 Under 30 Europe',
        'gunay.awards.card1.p': 'Named to Forbes\' prestigious list of the most impactful young entrepreneurs and innovators across Europe.',
        'gunay.awards.card2.h3': 'Presidential Youth Award',
        'gunay.awards.card2.p': 'Recipient of Azerbaijan\'s Presidential Youth Award for Innovation and Entrepreneurship — a national honor for exceptional young changemakers.',
        'gunay.awards.card3.h3': 'Tech Entrepreneur of the Year',
        'gunay.awards.card3.p': 'Named Tech Entrepreneur of the Year by Azerbaijan\'s Innovation and Digital Development Agency (IDDA Awards).',
        'gunay.awards.card4.h3': '2x Teknofest Winner',
        'gunay.awards.card4.p': 'Two-time winner at Teknofest — Turkey\'s world-renowned technology and aviation festival, one of the largest tech competitions globally.',
        'gunay.cta2.tag': 'Metatesk',
        'gunay.cta2.title': 'The platform Gunay built<br><span class="grad">from scratch.</span>',
        'gunay.cta2.sub': 'From a chemistry lab at Baku State University to Forbes 30 Under 30 Europe — Metatesk is the result of a decade of learning, building, and believing that education can be transformed.',
        'gunay.cta2.cta1': 'Explore Metatesk',
        'gunay.cta2.cta2': 'Get a Demo',

        // ── Contact page ──────────────────────────────────────────────────
        'contact.page.sub': 'Whether you\'re a school, government, partner, or investor — let\'s explore what Metatesk can do for your mission. Fill in the form and we\'ll be in touch within 24 hours.',
        'contact.badge.schools': 'Schools',
        'contact.badge.gov': 'Governments',
        'contact.badge.educators': 'Educators',
        'contact.badge.partners': 'Partners',

        // Typed hero lines
        'typed': [
            'A multiplayer VR/AI world where learners master subjects as if playing a game.',
            'Immersive education experiences powered by AI teachers and virtual reality.',
            'Education infrastructure for schools, institutions, and governments at scale.',
            'Where students experience knowledge — instead of just memorizing it.'
        ],
    },

    az: {
        'nav.about': 'Haqqında',
        'nav.product': 'Məhsul',
        'nav.solutions': 'Həllər',
        'nav.team': 'Komanda',
        'nav.demo': 'Demo Al',

        'mob.about': 'Haqqında',
        'mob.product': 'Məhsul',
        'mob.solutions': 'Həllər',
        'mob.team': 'Komanda',
        'mob.demo': 'Demo Al',

        'loader.sub': 'İmmersiv dünyaya daxil olunur...',

        'mq.1': 'Forbes 30 Under 30 Avropa',
        'mq.2': 'Google for Startups',
        'mq.3': 'ABB Tərəfdaşlığı',
        'mq.4': 'EBRD Star Venture',
        'mq.5': 'Prezident Gənclər Mükafatı',
        'mq.6': 'Draper Hero Training',
        'mq.7': '2x Teknofest Qalibi',
        'mq.8': 'RC Challenge Tərəfdaşı',

        'hero.badge': '<span class="badge-dot"></span>Metatesk — Təhsilin Gələcəyi İmmersivdir',
        'hero.title1': 'Təhsilə <em>Daxil</em>',
        'hero.title2': 'Olun',
        'hero.cta1': 'Demo Sorğusu',
        'hero.cta2': 'Kəşf Et',
        'hero.scroll': 'Aşağı',

        'problem.tag': 'Problem',
        'problem.title': 'Dünya dəyişdi.<br><span class="grad">Təhsil yox.</span>',
        'problem.sub': 'Tələbələr rəqəmsal, interaktiv dünyada böyüyürlər — lakin siniflər hələ də passiv mühazirələrə, statik dərsliklərə və əzbərləməyə arxalanır.',
        'problem.c1.title': 'Passiv Öyrənmə',
        'problem.c1.text': 'Tələbələr izləyir və əzbərləyir. Öyrəndikləri ilə nadir hallarda qarşılıqlı əlaqə qururlar.',
        'problem.c2.title': 'Köhnəlmiş Metodlar',
        'problem.c2.text': 'Dərsliklər və mühazirələr fərqli bir əsr üçün yaradılıb. Rəqəmsal nəsil daha yaxşısına layiqdir.',
        'problem.c3.title': 'Görünməz Anlayışlar',
        'problem.c3.text': 'Kimyəvi reaksiyalar, molekulyar quruluşlar — tələbələr görə bilmədiklərini təsəvvür etməlidirlər.',
        'problem.c4.title': 'Hamıya Eyni',
        'problem.c4.text': 'Hər tələbə fərqli öyrənir. Lakin əksər siniflər bir dərsi bir sürətlə çatdırır.',

        'sol.tag': 'Həll',
        'sol.title': 'Tələbələr dərsə<br><span class="grad">daxil ola bilsəydi?</span>',
        'sol.sub': 'Bunu təhsil üçün Roblox kimi düşünün — öyrənənlərin qlobal miqyasda fənləri təcrübə ilə mənimsədiyi multiplayer VR/AI platforması.',
        'sol.label': 'İnteraktiv 3D Molekulyar Vizuallaşdırma — Fırlatmaq üçün sürüşdürün',
        'sol.f1.title': 'İmmersiv VR Mühitlər',
        'sol.f1.text': 'Tələbələr mücərrəd anlayışların görünən və interaktiv olduğu virtual dünyalara daxil olurlar.',
        'sol.f2.title': 'Süni İntellekt Müəllim',
        'sol.f2.text': 'Chatbot deyil. Hər tələbənin tempinə uyğunlaşan, real vaxtda suallara cavab verən ağıllı tədris yoldaşı.',
        'sol.f3.title': 'Multiplayer Siniflər',
        'sol.f3.text': 'Real vaxt səs ilə paylaşılan virtual mühitlərdə 30-a qədər tələbə. Əməkdaşlıq, qrup təcrübələri.',
        'sol.f4.title': 'Təhsil İnfrastrukturu',
        'sol.f4.text': 'Müstəqil məhsula çevrilmiş xüsusi LMS. Öyrənənləri idarə edin, irəliləyişi izləyin, məktəblər arasında yayın.',

        'prod.tag': 'Məhsul',
        'prod.title': 'Dörd sütun.<br><span class="grad">Bir platforma.</span>',
        'prod.vr.title': 'VR Öyrənmə Dünyaları',
        'prod.vr.text': 'Fənnə xas virtual siniflər — kimya laboratoriyalarından fizika simulyasiyalarına qədər. İmmersiya ilə real təhsil.',
        'prod.ai.title': 'Süni İntellekt Müəllim',
        'prod.ai.text': 'Dərsləri fərdiləşdirən, suallara kontekstual cavab verən ağıllı tədris bələdçisi.',
        'prod.multi.title': 'Multiplayer',
        'prod.multi.text': 'Real vaxt səs rabitəsi ilə paylaşılan virtual siniflərdə 30 tələbə.',
        'prod.lms.title': 'LMS Platforması',
        'prod.lms.text': 'Daxili alətdən müstəqil məhsula çevrilmiş xüsusi öyrənmə idarəetmə sistemi.',

        'prod.vr.li1': '6+ tematik virtual sinif',
        'prod.vr.li2': 'İnteraktiv 3D simulyasiyalar',
        'prod.vr.li3': 'VR, kompüter və planşetdə işləyir',
        'prod.ai.li1': 'Real vaxt səs qarşılıqlı əlaqəsi',
        'prod.ai.li2': 'Adaptiv temp',
        'prod.ai.li3': 'Müəllim yardım alətləri',
        'prod.multi.li1': '30 tələbə tutumu',
        'prod.multi.li2': 'Canlı səs söhbəti',
        'prod.multi.li3': 'Birgə təcrübələr',
        'prod.lms.li1': 'İnstitusional yerləşdirmə',
        'prod.lms.li2': 'İrəliləyiş analitikası',
        'prod.lms.li3': 'Çox məktəb idarəetməsi',

        'how.tag': 'Necə İşləyir',
        'how.title': 'Sinifdən<br><span class="grad">virtual dünyaya.</span>',
        'how.s1.title': 'Kurikuluma Uyğun',
        'how.s1.text': 'Hər VR təcrübəsi real təhsil standartlarına və öyrənmə məqsədlərinə uyğundur.',
        'how.s2.title': 'Təcrübəyə Daxil Olun',
        'how.s2.text': 'Tələbələr VR qulaqlıq taxır və ya rəqəmsal interfeys vasitəsilə mövzu üçün qurulmuş 3D dünyaya daxil olurlar.',
        'how.s3.title': 'Sİ Yolu Göstərir',
        'how.s3.text': 'Sİ tədris yoldaşı izah edir, uyğunlaşır, suallara cavab verir.',
        'how.s4.title': 'Edərək Öyrən',
        'how.s4.text': 'Təcrübələr aparın, reaksiyaları müşahidə edin, strukturları manipulyasiya edin.',
        'how.s5.title': 'İzləyin və Genişləndirin',
        'how.s5.text': 'LMS yerləşdirmə, irəliləyiş izləmə və institusional idarəetməni həyata keçirir.',

        'solutions.tag': 'Həllər',
        'solutions.title': 'Təhsildə hər maraqlı tərəf<br><span class="grad">üçün qurulub.</span>',
        'solutions.students.title': 'Tələbələr Üçün',
        'solutions.students.text': 'Əzbərləmə ilə deyil, təcrübə ilə öyrənin. Mürəkkəb mövzular immersiv dünyalarda anlaşılan olur.',
        'solutions.educators.title': 'Müəllimlər Üçün',
        'solutions.educators.text': 'Vaxtınıza qənaət edən, fərdiləşdirməni yaxşılaşdıran Sİ alətləri. Müəllimləri dəstəkləyir.',
        'solutions.schools.title': 'Məktəblər Üçün',
        'solutions.schools.text': 'Genişləndirilə bilən rəqəmsal öyrənmə ilə modernləşin. Növbəti nəsil təhsil alətlərini tətbiq edin.',
        'solutions.gov.title': 'Hökumətlər Üçün',
        'solutions.gov.text': 'Dövlət təhsil sistemləri üzrə immersiv Sİ ilə işləyən öyrənməni yerləşdirin. Milli miqyaslı infrastruktur.',

        'hud.live': 'CANLI 3D SİNİF',
        'hud.sub': 'Sİ Müəllim Aktiv · 6 Tələbə Bağlı',
        'hud.interactive': 'İnteraktiv',
        'hud.hint': 'Baxmaq üçün sürüşdürün',

        'rooms.tag': 'Virtual Siniflər',
        'rooms.title': 'Hər fənn öz<br><span class="grad">dünyasını alır.</span>',
        'rooms.sub': 'Hər fənnin mövzuya uyğun, unikal dizaynlı 3D mühiti var. Bir ümumi otaq yox — siniflər kainatı.',
        'rooms.math': 'Riyaziyyat',
        'rooms.math.text': 'Ədəd xətləri, həndəsi fiqurlar — mücərrəd riyaziyyat vizual və interaktiv olur.',
        'rooms.physics': 'Fizika Laboratoriyası',
        'rooms.physics.text': 'Rəqqaslar, dalğa nümunələri, qüvvə simulyasiyaları — fizikanı baş verən kimi görün.',
        'rooms.chem': 'Kimya Laboratoriyası',
        'rooms.chem.text': 'Virtual qablar, molekul modelləri, molekulyar səviyyədə reaksiyalar.',
        'rooms.bio': 'Biologiya',
        'rooms.bio.text': 'DNT helixləri, hüceyrə quruluşları, ekosistemler — mikrodan makroya həyat elmləri.',
        'rooms.code': 'Proqramlaşdırma',
        'rooms.code.text': 'Süzən kod ekranları, məntiq vizuallaşdırmaları — maşının içindən kodlamağı öyrənin.',
        'rooms.lang': 'Dillər',
        'rooms.lang.text': 'Mədəni immersiya, danışıq praktikası — dilləri virtual yaşayaraq öyrənin.',

        'plat.tag': 'Hər Yerdə İşləyir',
        'plat.title': 'Bir platforma.<br><span class="grad">Hər cihaz.</span>',
        'plat.sub': 'VR qulaqlıqlar ən dərin immersiyanı təmin edir — lakin Metatesk istənilən ekranda işləyir.',
        'plat.vr': 'VR Qulaqlıq',
        'plat.vr.sub': 'Tam immersiya',
        'plat.desktop': 'Kompüter',
        'plat.desktop.sub': '3D interaktiv',
        'plat.tablet': 'Planşet',
        'plat.tablet.sub': 'Toxunma dostu',

        'personas.tag': 'Sİ Müəllimlər',
        'personas.title': 'Bir müəllim deyil.<br><span class="grad">Dörd şəxsiyyət.</span>',
        'personas.sub': 'Hər tələbə fərqli öyrənir. Buna görə Metatesk-in bir deyil, dörd fərqli tədris şəxsiyyəti var.',
        'personas.ada.name': 'Professor Ada',
        'personas.ada.style': 'Səbirli Bələdçi',
        'personas.ada.text': 'Addım-addım izahlar və anlama yoxlamaları. Heç vaxt tələsmir. Anlayış qat-qat qurur.',
        'personas.felix.name': 'Dr. Feliks',
        'personas.felix.style': 'Enerjili Motivator',
        'personas.felix.text': 'Real dünya nümunələri, analogiyalar, yüksək enerji. Quru mövzuları həyəcanlı kəşflərə çevirir.',
        'personas.maia.name': 'Professor Maya',
        'personas.maia.style': 'Düşüncə Təhrikçisi',
        'personas.maia.text': 'Sokratik metod — birbaşa cavab vermək əvəzinə strateji suallar verir. Tənqidi düşüncə qurur.',
        'personas.rex.name': 'Dr. Reks',
        'personas.rex.style': 'Səmərəli Ekspert',
        'personas.rex.text': 'Qısa, birbaşa, artıq söz yox. Dəqiqə başına bilik sıxlığını maksimuma çatdırır.',

        'preview.tag': 'Əyani Nümunə',
        'preview.title': 'İçinə daxil ola<br><span class="grad">biləcəyiniz sinif.</span>',
        'preview.sub': 'Metatesk öyrənmə mühitinin içəridən görünüşü budur. İnteraktiv 3D. Sİ rəhbərli.',

        'founder.tag': 'Metatesk-in Arxasında',
        'founder.title': 'Təhsilin canlı olması lazım olduğuna<br><span class="grad">inanan insanlar tərəfindən qurulub.</span>',
        'founder.sub': 'Metatesk real bir məyusluqdan başladı: elm təhsilinin passiv və köhnəlmiş qalmasını izləmək. Sual sadə idi — <strong>tələbələr dərsə sadəcə baxmaq əvəzinə daxil ola bilsəydilər?</strong> İlk VR prototipləri uşaqların həqiqi həyəcanla cavab verdiyini göstərdi.',
        'founder.jobtitle': 'Qurucu və Baş İcraçı Direktor',
        'founder.bio': 'Günay İmanzadə Metatesk-in qurucusu və baş icraçı direktorudur — Azərbaycanda yerləşən, dünya üzrə məktəblər, hökumətlər və öyrənənlər üçün immersiv VR və süni intellektlə gücləndirilmiş təhsil mühitləri yaradan edtech şirkəti. Forbes 30 Under 30 Avropa siyahısının üzvü, İnnovasiya və Sahibkarlıq sahəsindəki Prezident Gənclər Mükafatının laureatı, Azərbaycan İnnovasiya və Rəqəmsal İnkişaf Agentliyinin İlin Texnoloji Sahibkarı mükafatının sahibi olan Günay, tələbələrin bilikləri sadəcə oxuyaraq deyil, birbaşa içinə daxil olaraq mənimsədiyi bir təhsil yaratmaq missiyasını Metatesk vasitəsilə irəlilədirir.',
        'founder.forbes': 'Forbes 30 Under 30',
        'founder.forbes.sub': 'Avropa',
        'founder.pres': 'Prezident Gənclər Mükafatı',
        'founder.pres.sub': 'İnnovasiya və Sahibkarlıq',
        'founder.tech': 'İlin Texnoloji Sahibkarı',
        'founder.tech.sub': 'IDDA Mükafatları',
        'founder.tekno': '2x Teknofest Qalibi',
        'founder.tekno.sub': 'Texnologiya Müsabiqəsi',

        'faq.tag': 'Tez-tez Verilən Suallar',
        'faq.title': 'Tez-tez verilən<br><span class="grad">suallar.</span>',
        'faq.q1': 'Metatesk-i digər edtech-dən nə fərqləndirir?',
        'faq.a1': 'Metatesk sadəcə məzmun çatdırma deyil. İmmersiv VR mühitləri, Sİ tədris dəstəyi, multiplayer qarşılıqlı əlaqə və institusional LMS-i bir platformada birləşdirir.',
        'faq.q2': 'Tələbələrə VR qulaqlıq lazımdır?',
        'faq.a2': 'VR qulaqlıqlar ən immersiv təcrübəni təmin edir, lakin Metatesk kompüter və planşetlərdə də işləyir.',
        'faq.q3': 'Sİ müəllim necə işləyir?',
        'faq.a3': 'Sİ yoldaşımız hər tələbənin tempinə uyğunlaşır, VR mühitində real vaxtda anlayışları izah edir.',
        'faq.q4': 'Bu milli miqyasda yerləşdirilə bilər?',
        'faq.a4': 'Bəli. Xüsusi LMS və infrastruktur xüsusi olaraq institusional və hökumət səviyyəli yerləşdirmə üçün qurulub.',
        'faq.q5': 'Hansı fənlər mövcuddur?',
        'faq.a5': 'Metatesk Riyaziyyat, Fizika, Kimya, Biologiya, Proqramlaşdırma və Dilləri əhatə edir — hər biri unikal virtual siniflə.',

        'vision.tag': 'Baxışımız',
        'vision.quote': 'Hər öyrənənin təhsilə <em>daxil ola</em> biləcəyi dünya — ağıllı sistemlər tərəfindən istiqamətləndirilən, immersiv mühitlər tərəfindən dəstəklənən.',
        'vision.p1': 'İmmersiv',
        'vision.p2': 'Ağıllı',
        'vision.p3': 'Fərdi',
        'vision.p4': 'Qlobal',

        'ft.product': 'Məhsul',
        'ft.vr': 'VR Laboratoriyalar',
        'ft.ai': 'Sİ Müəllim',
        'ft.lms': 'LMS',
        'ft.multi': 'Multiplayer',
        'ft.solutions': 'Həllər',
        'ft.students': 'Tələbələr',
        'ft.educators': 'Müəllimlər',
        'ft.schools': 'Məktəblər',
        'ft.govs': 'Hökumətlər',
        'ft.company': 'Şirkət',
        'ft.about': 'Haqqında',
        'ft.team': 'Komanda',
        'ft.contact': 'Əlaqə',

        'contact.tag': 'Başlayın',
        'contact.title': 'Təhsili dəyişdirməyə<br><span class="grad">hazırsınız?</span>',
        'contact.sub': 'Məktəb, hökumət, tərəfdaş və ya investor olsanız — Metatesk-in sizin missiyalarınız üçün nə edə biləcəyini araşdıraq.',
        'contact.name': 'Adınız',
        'contact.email': 'E-poçt ünvanı',
        'contact.type': 'Mən...',
        'contact.type.school': 'Məktəb / Təhsil Mərkəzi',
        'contact.type.gov': 'Hökumət / Dövlət Sektoru',
        'contact.type.educator': 'Müəllim',
        'contact.type.partner': 'Tərəfdaş',
        'contact.type.investor': 'İnvestor',
        'contact.type.other': 'Digər',
        'contact.message': 'Ehtiyaclarınız haqqında yazın...',
        'contact.send': 'Mesaj Göndər',

        'footer.tagline': '<a href="/gunay-imanzade" class="footer-founder-link">Günay İmanzadə</a> tərəfindən qurulan Metatesk, Sİ müəllimləri ilə idarə olunan immersiv VR öyrənmə dünyaları yaradır — Forbes 30 Under 30 Avropa.',
        'footer.copy': '© 2026 Metatesk. Bütün hüquqlar qorunur.',

        // ── Product page ──────────────────────────────────────────────────
        'prod.page.tag': 'Platforma',
        'prod.page.sub': 'Metatesk immersiv VR mühitlərini, ağıllı süni intellekt müəllimlərini, real vaxt multiplayer siniflərini və institusional LMS infrastrukturunu bir vahid platformada birləşdirir — təhsili sıfırdan dəyişdirmək üçün qurulub.',
        'prod.page.cta2': 'Həlləri Gör',
        'prod.p1.tag': 'Sütun 01',
        'prod.p2.tag': 'Sütun 02',
        'prod.p3.tag': 'Sütun 03',
        'prod.p4.tag': 'Sütun 04',
        'prod.vr.p1': 'Tələbələr kimyadan sadəcə oxumur — onlar molekulyar laboratoriyada dayanırlar. Fizika düsturlarını əzbərləmirlər — qüvvələrin real vaxtda necə qarşılıqlı əlaqə qurduğunu izləyirlər. Metatesk-də hər fənn mücərrəd anlayışları əyani və unudulmaz etmək üçün unikal tematik, kurikuluma uyğun 3D virtual sinfə malikdir.',
        'prod.vr.p2': 'Altı tematik mühit və artmaqda: Riyaziyyat, Fizika, Kimya, Biologiya, Proqramlaşdırma və Dillər — hər biri fənnin hissi və idrak tələblərinə uyğun qurulub.',
        'prod.vr.f1.title': '6+ Tematik Virtual Sinif',
        'prod.vr.f1.text': 'Riyaziyyat, Fizika, Kimya, Biologiya, Proqramlaşdırma və Dillər — hər biri xüsusi məqsəd üçün qurulmuş 3D mühitlə.',
        'prod.vr.f2.title': 'İnteraktiv 3D Simulyasiyalar',
        'prod.vr.f2.text': 'Kimyəvi reaksiyaları aparın, molekulyar strukturları manipulyasiya edin, fiziki hadisələri müşahidə edin — hamısı virtual dünya içərisində.',
        'prod.vr.f3.title': 'VR, Kompüter və Planşetdə İşləyir',
        'prod.vr.f3.text': 'Tam VR qulaqlıq immersionu və ya brauzer əsaslı giriş — başlamaq üçün heç bir aparat maneəsi yoxdur.',
        'prod.vr.sub.math': 'Həndəsi fiqurlar, ədəd xətləri, məkan mühakiməsi',
        'prod.vr.sub.physics': 'Rəqqaslar, dalğa nümunələri, qüvvə simulyasiyaları',
        'prod.vr.sub.chem': 'Molekul modelləri, molekulyar səviyyədə reaksiyalar',
        'prod.vr.sub.bio': 'DNT helixləri, hüceyrə quruluşları, ekosistemler',
        'prod.vr.sub.code': 'Süzən kod ekranları, məntiq vizuallaşdırmaları, server simulyasiyaları',
        'prod.vr.sub.lang': 'Mədəni immersiya, danışıq praktikası',
        'prod.ai.p1': 'Chatbot deyil. Test mühərriki deyil. Metatesk-in Sİ Müəllimi hər tələbənin tempinə uyğunlaşan, VR mühitindəki suallara real vaxtda cavab verən və tam Sİ müəllim avatarlarına doğru inkişaf edən ağıllı tədris yoldaşıdır.',
        'prod.ai.p2': 'Hər tələbə fərqli öyrənir — buna görə Metatesk dörd fərqli tədris şəxsiyyəti təklif edir. Tələbələr öz düşüncə tərzinə ən uyğun müəllimi seçirlər.',
        'prod.ai.f1.title': 'Real Vaxt Səs Qarşılıqlı Əlaqəsi',
        'prod.ai.f1.text': 'VR dünyası içərisində təbii şəkildə sual verin. Sİ kontekstual olaraq səs və vizual işarələrlə cavab verir.',
        'prod.ai.f2.title': 'Adaptiv Temp',
        'prod.ai.f2.text': 'Sİ hər tələbənin anlama səviyyəsinə uyğun izahat dərinliyini, sürətini və üslubunu tənzimləyir.',
        'prod.multi.p1': 'Təhsil mahiyyətcə sosial bir prosesdir. Metatesk-in multiplayer infrastrukturu 30-a qədər tələbəni paylaşılan virtual mühit içərisində bir araya gətirir — real vaxt səs rabitəsi, birgə təcrübələr və müəllim rəhbərliyindəki qrup sessiyaları ilə.',
        'prod.multi.p2': 'Tələbələr birlikdə öyrənir, sinif olaraq simulyasiyalarla qarşılıqlı əlaqə qurur və ortaq təcrübə vasitəsilə anlayış formalaşdırır — fiziki siniflə eyni sosial dinamika, lakin immersiv virtual dünyanın gücü ilə.',
        'prod.multi.f1.title': '30 Tələbə Tutumu',
        'prod.multi.f1.text': '30 tələbəlik tam bir sinif eyni anda bir virtual mühiti paylaşa bilər — müəllim və tələbələr birlikdə.',
        'prod.multi.f2.title': 'Canlı Səs Söhbəti',
        'prod.multi.f2.text': 'Real vaxt məkânsal səs rabitəsi — tələbələr və müəllimlər fiziki olaraq eyni otaqdaymış kimi təbii danışır.',
        'prod.multi.f3.title': 'Birgə Təcrübələr',
        'prod.multi.f3.text': 'Tələbələr virtual təcrübələr, laboratoriya simulyasiyaları və interaktiv çağırışlar üzərində birlikdə işləyir.',
        'prod.multi.f4.title': 'Müəllim Rəhbərli Sessiyalar',
        'prod.multi.f4.text': 'Müəllimlər sinif mühitini idarə edir — tələbələrə rəhbərlik edir, məzmun təqdim edir və sessiyanı VR içərisindən idarə edir.',
        'prod.multi.stat': 'Virtual sinif başına tələbə sayı',
        'prod.multi.note': 'Roblox kimi, amma təhsil üçün — öyrənənlərin ortaq interaktiv təcrübə ilə fənləri mənimsədiyi multiplayer VR dünyası.',
        'prod.lms.p1': 'Metatesk-in öz yerləşdirmələrini idarə etmək üçün daxili alət kimi başlayan şey tam xüsusiyyətli, institusional səviyyəli öyrənmə idarəetmə sisteminə çevrildi. Məktəblər, təhsil şəbəkələri və hökumətlər immersiv öyrənmə əməliyyatlarını yerləşdirmək, idarə etmək və genişləndirmək üçün ondan istifadə edir.',
        'prod.lms.p2': 'Milli miqyas üçün qurulub — yalnız bir sinif üçün deyil. Metatesk LMS-i immersiv təhsili bütün bir ölkənin məktəb sisteminə gətirməyi mümkün edən infrastruktur qatıdır.',
        'prod.lms.f1.title': 'İnstitusional Yerləşdirmə',
        'prod.lms.f1.text': 'Metatesk-i bütün məktəb, məktəb şəbəkəsi və ya milli təhsil sistemi üzrə mərkəzləşdirilmiş idarəetmə ilə yerləşdirin.',
        'prod.lms.f2.title': 'İrəliləyiş Analitikası',
        'prod.lms.f2.text': 'Fərdi tələbə irəliləyişini, sinif miqyaslı performansı və institusional nəticələri izləyin — müəllimlər və administratorlar üçün fəaliyyətə çevrilə bilən məlumatlarla.',
        'prod.lms.f3.title': 'Çox Məktəb İdarəetməsi',
        'prod.lms.f3.text': 'Bir idarə panelidən birdən çox məktəb və müəssisəni idarə edin — istifadəçi hesabları, məzmun, sessiyalar və analitika bir yerdə.',
        'prod.lms.f4.title': 'Milli Miqyasa Hazır',
        'prod.lms.f4.text': 'B2G yerləşdirmə üçün nəzərdə tutulub — minlərlə məktəbi və milyonlarla tələbəni dəstəkləyən genişlənə bilən infrastruktur.',
        'prod.lms.dash.1': 'Aktiv Məktəblər',
        'prod.lms.dash.1v': 'Bağlı',
        'prod.lms.dash.2': 'Tələbə İrəliləyiş İzləməsi',
        'prod.lms.dash.2v': 'Real vaxt',
        'prod.lms.dash.3': 'Məzmun İdarəetməsi',
        'prod.lms.dash.3v': 'Mərkəzləşdirilmiş',
        'prod.lms.dash.4': 'Yerləşdirmə Miqyası',
        'prod.lms.dash.4v': 'Milli',
        'prod.lms.dash.5': 'Analitika Hesabatları',
        'prod.lms.dash.5v': 'Avtomatlaşdırılmış',
        'prod.lms.label': 'LMS İdarəetmə Paneli',
        'prod.multi.live': 'Canlı',
        'prod.multi.voice': 'Səs',
        'prod.multi.real': 'Real',
        'prod.multi.time': 'Vaxt',
        'prod.multi.ai.label': 'Sİ',
        'prod.multi.supported': 'Dəstəkli',
        'prod.cta.title': 'İçinə daxil olmağa <span class="grad">hazırsınız?</span>',
        'prod.cta.sub': 'Metatesk məktəblər, müəssisələr və hökumətlər üçün hazırdır. Canlı demo tələb edin və real sessiyada dörd sütunun birlikdə işlədiyini görün.',
        'prod.cta.cta2': 'Həlləri Gör',

        // ── Solutions page ────────────────────────────────────────────────
        'sol.page.sub': 'Metatesk tam təhsil ekosisteminə xidmət edir — anlayışları yaşaması lazım olan tələbələr, daha yaxşı alətlərə ehtiyacı olan müəllimlər, modernləşməyə hazır məktəblər və milli öyrənmənin gələcəyini quran hökumətlər.',
        'sol.page.cta2': 'Məhsulu Gör',
        'sol.s01.tag': 'Həll · 01',
        'sol.s02.tag': 'Həll · 02',
        'sol.s03.tag': 'Həll · 03',
        'sol.s04.tag': 'Həll · 04',
        'sol.students.p1': 'Təhsil görə bilmədiyini əzbərləmək haqqında olmamalıdır. Metatesk tələbələri dərsə daxil edir — kimyəvi reaksiya içinə, fizika simulyasiyasına, bioloji ekosisteminə — anlayışlar mücərrəd faktlar deyil, təcrübəyə çevrilir.',
        'sol.students.p2': 'Hər tələbənin öyrənmə üslubuna və tempinə uyğunlaşan Sİ müəllimi və öyrənməni sosial edən multiplayer siniflər ilə tələbələr həqiqətən anlayış quran şəkildə materiallarla məşğul olur.',
        'sol.students.li1': 'Tam immersiv 3D virtual mühitlərdə fənləri yaşayın',
        'sol.students.li2': '4 fərqli tədris şəxsiyyətindən Sİ müəlliminizi seçin',
        'sol.students.li3': 'Real vaxt paylaşılan sessiyalarda sinif yoldaşlarınızla birlikdə öyrənin',
        'sol.students.li4': 'Heç bir limit və ya real dünya riski olmadan məşq edin və təcrübə aparın',
        'sol.students.li5': 'VR qulaqlıq, masaüstü kompüter və ya planşetdə — harada öyrənirsinizsə orada daxil olun',
        'sol.students.feat1': 'İmmersiv VR Dünyaları',
        'sol.students.feat1.sub': 'Kimya, Fizika, Biologiya, Riyaziyyat və daha çoxuna daxil olun',
        'sol.students.feat2': 'Sİ Müəllim Yoldaşı',
        'sol.students.feat2.sub': 'Tempinizə uyğunlaşan real vaxt səs rəhbərliyi',
        'sol.students.feat3': 'Multiplayer Öyrənmə',
        'sol.students.feat3.sub': 'Paylaşılan virtual siniflərdə sinif yoldaşlarınızla birlikdə oxuyun',
        'sol.students.feat4': 'İstənilən Cihaz',
        'sol.students.feat4.sub': 'VR qulaqlıq, masaüstü brauzer və ya planşet — seçim sizindir',
        'sol.educators.p1': 'Metatesk müəllimləri əvəz etmir — onları gücləndirir. Müəllimlər miqyasda fərdiləşdirməni idarə edən Sİ alətləri, inzibati yükü azaldan sinif idarəetmə sistemləri və hər dərsi daha cəlbedici edən immersiv məzmun əldə edir.',
        'sol.educators.p2': 'Müəllimlər sessiyalara virtual dünyanın içindən və ya yanından rəhbərlik edir, fərdi tələbə suallarını və tempi idarə edən Sİ tərəfindən dəstəklənərək — bu da müəllimləri sinfin ümumi anlayışına fokuslanmağa azad edir.',
        'sol.educators.li1': 'Sİ fərdi tələbə rəhbərliyini həll edir, siz isə sinfə fokuslanırsınız',
        'sol.educators.li2': 'Tam nəzarətlə müəllim rəhbərli multiplayer sessiyalar aparın',
        'sol.educators.li3': '6+ fənn üzrə kurikuluma uyğun məzmuna daxil olun',
        'sol.educators.li4': 'Hər tələbənin irəliləyişini və anlayışını real vaxtda izləyin',
        'sol.educators.li5': 'Təkrarlanan izahat və yenidən tədris üçün vaxtı azaldın',
        'sol.educators.feat1': 'Real Vaxt Tələbə Analitikası',
        'sol.educators.feat1.sub': 'Kimin ayaqda qaldığını və kimin dəstəyə ehtiyacı olduğunu anında görün',
        'sol.educators.feat2': 'Sİ Fərdi Sual-Cavabı İdarə Edir',
        'sol.educators.feat2.sub': '4 Sİ şəxsiyyəti tələbə suallarını cavablandırır',
        'sol.educators.feat3': 'Kurikuluma Uyğun Məzmun',
        'sol.educators.feat3.sub': 'Hər VR mühiti real təhsil standartlarına uyğundur',
        'sol.educators.feat4': 'Sinif Nəzarəti',
        'sol.educators.feat4.sub': 'Bütün VR sinifini aparın, dayandırın, istiqamətləndirin və idarə edin',
        'sol.schools.p1': 'Metatesk məktəblərə birdən çox platforma, satıcı və ya texniki komandanı idarə etməyin xaosu olmadan tam rəqəmsal öyrənmə transformasiyası imkanı verir. LMS yerləşdirmə, istifadəçi idarəetməsi və irəliləyiş izləməni bir idarə panelindən həll edir.',
        'sol.schools.p2': 'Metatesk-i qəbul edən məktəblər növbəti nəsil öyrənmə infrastrukturu ilə özlərini fərqləndirirlər, tələbə məşğulluğu göstəricilərini yaxşılaşdırırlar və valideynlər, idarə heyəti və akkreditasiya orqanları üçün həqiqi təhsil inovasiyasını nümayiş etdirirlər.',
        'sol.schools.li1': 'Mərkəzləşdirilmiş LMS idarə panelindən bütün məktəb üzrə yerləşdirin',
        'sol.schools.li2': 'Bütün tələbə və müəllim hesablarını bir yerdə idarə edin',
        'sol.schools.li3': 'İlk gündən 6+ fənn üzrə immersiv məzmuna daxil olun',
        'sol.schools.li4': 'Mövcud aparat vasitəsilə işləyir — məcburi VR qulaqlıq alışı tələb edilmir',
        'sol.schools.li5': 'Tək sinif otağından çox kampuslu müəssisəyə qədər genişlənir',
        'sol.schools.feat1': 'Mərkəzləşdirilmiş LMS',
        'sol.schools.feat1.sub': 'Bütün müəllimlər, tələbələr və məzmun üçün bir idarə paneli',
        'sol.schools.feat2': 'Asan Yerləşdirmə',
        'sol.schools.feat2.sub': 'Sadə onboarding — aylar deyil, günlər içərisində hazır',
        'sol.schools.feat3': 'İrəliləyiş Hesabatları',
        'sol.schools.feat3.sub': 'Administratorlar, valideynlər və idarə heyəti üçün avtomatik analitika',
        'sol.schools.feat4': 'Çevik Aparat',
        'sol.schools.feat4.sub': 'VR qulaqlıq, masaüstü kompüter və planşetdə işləyir',
        'sol.gov.p1': 'Metatesk milli miqyas üçün qurulub. İctimai təhsil sistemlərini modernləşdirmək istəyən hökumətlər üçün Metatesk immersiv öyrənmə infrastrukturunu, LMS arxa planını və minlərlə məktəbdə eyni anda yerləşdirilmək üçün Sİ ilə gücləndirilmiş tədris qatını təmin edir.',
        'sol.gov.p2': 'B2G-yə hazır, EBRD və Google for Startups tərəfindən strateji dəstəklənən və hökumət səviyyəli tərəfdaşlıqlar vasitəsilə təsdiqlənmiş — Metatesk bütün bir ölkənin təhsil sistemini sıfırdan dəyişdirə biləcək platformadır.',
        'sol.gov.li1': 'Minlərlə ictimai məktəb üzrə milli miqyaslı yerləşdirmə',
        'sol.gov.li2': 'Sistem miqyaslı idarəetmə üçün mərkəzləşdirilmiş hökumət idarə paneli',
        'sol.gov.li3': 'Milli təhsil standartlarına uyğun kurikulum fərdiləşdirməsi',
        'sol.gov.li4': 'Məlumat suverenliyi və institusional təhlükəsizlik protokolları',
        'sol.gov.li5': 'Tətbiqat və təlim dəstəyi ilə davamlı tərəfdaşlıq modeli',
        'sol.gov.li6': 'EBRD Star Venture və Google for Startups tərəfindən dəstəklənən sübut edilmiş B2G track record',
        'sol.gov.feat1': 'Milli Miqyas İnfrastrukturu',
        'sol.gov.feat1.sub': 'Bir ölkə üzrə minlərlə məktəbə yerləşdirin',
        'sol.gov.feat2': 'Hökumət İdarə Paneli',
        'sol.gov.feat2.sub': 'Sistem miqyaslı görünürlük, hesabat və idarəetmə',
        'sol.gov.feat3': 'Kurikulum Uyğunlaşması',
        'sol.gov.feat3.sub': 'Milli təhsil standartlarına uyğun fərdiləşdirilmiş məzmun',
        'sol.gov.feat4': 'Məlumat Təhlükəsizliyi',
        'sol.gov.feat4.sub': 'İnstitusional təhlükəsizlik protokolları və məlumat suverenliyi',
        'sol.impact.tag': 'Təsir',
        'sol.impact.title': 'Miqyas üçün qurulmuş<br><span class="grad">platforma.</span>',
        'sol.impact.sub': 'Metatesk-in arxitekturası ilk gündən tək sinif otağından bütün milli təhsil sisteminə böyüməsi üçün nəzərdə tutulub.',
        'sol.impact.stat1': 'Virtual sinif başına tələbə sayı',
        'sol.impact.stat2': 'İmmersiv mühitli fənn sayı',
        'sol.impact.stat3': 'Fərdi öyrənmə üçün Sİ müəllim şəxsiyyəti',
        'sol.impact.stat4': 'Milli miqyas yerləşdirmə tutumu',
        'sol.cta.title': 'Hansı həll <span class="grad">sizin üçündür?</span>',
        'sol.cta.sub': 'İstər tək bir məktəbi, istərsə də milli təhsil nazirliyini təmsil edin — Metatesk-in missiyalarınız üçün qurulmuş bir yerləşdirmə modeli var. Gəlin birlikdə araşdıraq.',
        'sol.cta.cta2': 'Məhsulu Kəşf Et',
        'sol.students.h2': 'Tələbələr <span class="grad">üçün</span>',
        'sol.educators.h2': 'Müəllimlər <span class="grad">üçün</span>',
        'sol.schools.h2': 'Məktəblər <span class="grad">üçün</span>',
        'sol.gov.h2': 'Hökumətlər <span class="grad">üçün</span>',

        // ── Gunay Imanzade page ───────────────────────────────────────────
        'gunay.tag': 'Qurucu və BİD · Metatesk',
        'gunay.role': 'Bakı, Azərbaycandan təhsilin gələcəyini qurur',
        'gunay.badge1': 'Forbes 30 Under 30 Avropa',
        'gunay.badge2': 'Prezident Gənclər Mükafatı',
        'gunay.badge3': 'İlin Texnoloji Sahibkarı',
        'gunay.badge4': '2x Teknofest Qalibi',
        'gunay.bio.short': 'Günay İmanzadə bir suala cavab vermək üçün Metatesk-i qurdu: tələbələr yalnız izləmək əvəzinə dərsə daxil ola bilsəydilər nə olardı? Bu gün Metatesk-in immersiv VR və Sİ öyrənmə platforması bölgə üzrə məktəblərə yerləşdirilib və hökumətlər tərəfindən axtarılır.',
        'gunay.cta1': 'Metatesk-i Gör',
        'gunay.bg.tag': 'Keçmişi',
        'gunay.bg.title': 'Platformanın arxasındakı<br><span class="grad">insan.</span>',
        'gunay.bio.p1': 'Günay İmanzadə dünyanın aparıcı texniki universitetlərindən biri olan İsveçrə Federal Texnologiya İnstitutunda (ETH Zürix) magistratura dərəcəsi almadan əvvəl Bakı Dövlət Universitetində kimya oxuyub (2013–2017). 2018-ci ildə ETH Zürix-də işlədikdən və Çin\'də tədris keçirdikdən sonra Azərbaycana aydın bir inancla qayıtdı: təhsil sıfırdan yenidən qurulmalıdır.',
        'gunay.bio.p2': '2021-ci ildə Günay Metatesk-i qurdu — tələbələrin həqiqətən öyrəndiyi şəkil üçün qurulmuş immersiv VR və Sİ təhsil platforması. Platforma virtual reallıq siniflərini, dörd fərqli şəxsiyyətli Sİ müəllim yoldaşlarını, 30-a qədər tələbə üçün multiplayer sessiyaları və milli miqyaslı yerləşdirməyə qadir institusional səviyyəli LMS-i birləşdirir.',
        'gunay.bio.p3': 'Onun işi dünya üzrə tanınma qazandı: Forbes 30 Under 30 Avropa siyahısına daxil edildi, İnnovasiya və Sahibkarlıq sahəsindəki Prezident Gənclər Mükafatı ilə ödülləndirilib, Azərbaycan İnnovasiya və Rəqəmsal İnkişaf Agentliyinin (İDDA) İlin Texnoloji Sahibkarı mükafatına layiq görülüb, 2x Teknofest qalibi kimi tanınıb. Metatesk Google for Startups Silkway Accelerator, Microsoft for Startups, ABB, EBRD Star Venture və Draper University tərəfindən dəstəklənib.',
        'gunay.stat1': 'Beynəlxalq Mükafat',
        'gunay.stat2': 'Metatesk Quruldu',
        'gunay.stat3': 'Sinif Başına Tələbə',
        'gunay.stat4': 'Əhatə Olunan Fənn',
        'gunay.awards.tag': 'Tanınma',
        'gunay.awards.title': 'Mükafatlar &amp; <span class="grad">nailiyyətlər.</span>',
        'gunay.awards.sub': 'Günay\'ın işi texnologiya, sahibkarlıq və təhsil sahəsindəki bəzi dünyanın ən nüfuzlu qurumları tərəfindən tanınıb.',
        'gunay.awards.card1.h3': 'Forbes 30 Under 30 Avropa',
        'gunay.awards.card1.p': 'Avropanın ən təsirli gənc sahibkarları və innovatorlarının Forbes\'in nüfuzlu siyahısına daxil edilib.',
        'gunay.awards.card2.h3': 'Prezident Gənclər Mükafatı',
        'gunay.awards.card2.p': 'İnnovasiya və Sahibkarlıq sahəsindəki Prezident Gənclər Mükafatının laureatı — müstəsna gənc dəyişənlər üçün milli fəxri ödül.',
        'gunay.awards.card3.h3': 'İlin Texnoloji Sahibkarı',
        'gunay.awards.card3.p': 'Azərbaycan İnnovasiya və Rəqəmsal İnkişaf Agentliyinin (İDDA Mükafatları) İlin Texnoloji Sahibkarı ödülü.',
        'gunay.awards.card4.h3': '2x Teknofest Qalibi',
        'gunay.awards.card4.p': 'Dünyanın ən böyük texnologiya müsabiqələrindən biri olan Türkiyənin dünyaca məşhur texnologiya və aviasiya festivalı Teknofest-in iki dəfəlik qalibi.',
        'gunay.cta2.tag': 'Metatesk',
        'gunay.cta2.title': 'Günay\'ın sıfırdan qurduğu<br><span class="grad">platforma.</span>',
        'gunay.cta2.sub': 'Bakı Dövlət Universitetinin kimya laboratoriyasından Forbes 30 Under 30 Avropa-ya — Metatesk on illik öyrənmənin, qurmağın və təhsilin dəyişdiriləcəyinə inamın nəticəsidir.',
        'gunay.cta2.cta1': 'Metatesk-i Kəşf Et',
        'gunay.cta2.cta2': 'Demo Al',

        // ── Contact page ──────────────────────────────────────────────────
        'contact.page.sub': 'Məktəb, hökumət, tərəfdaş və ya investor olsanız — Metatesk-in sizin missiyalarınız üçün nə edə biləcəyini araşdıraq. Formu doldurun, 24 saat içərisində sizinlə əlaqə saxlayacağıq.',
        'contact.badge.schools': 'Məktəblər',
        'contact.badge.gov': 'Hökumətlər',
        'contact.badge.educators': 'Müəllimlər',
        'contact.badge.partners': 'Tərəfdaşlar',

        'typed': [
            'Öyrənənlərin fənləri oyun kimi mənimsədiyi multiplayer VR/Sİ dünyası.',
            'Sİ müəllimləri və virtual reallıqla gücləndirilmiş immersiv təhsil təcrübələri.',
            'Məktəblər, müəssisələr və hökumətlər üçün miqyaslana bilən təhsil infrastrukturu.',
            'Tələbələrin bilikləri əzbərləmək əvəzinə təcrübə etdiyi yer.'
        ],
    }
};

// ===== i18n Engine =====
// Maps data-i18n attribute values to DOM elements, applies translations
const _urlLang = new URLSearchParams(location.search).get('lang');
let currentLang = (_urlLang === 'az' || _urlLang === 'en') ? _urlLang : (localStorage.getItem('metatesk-lang') || 'en');

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('metatesk-lang', lang);
    document.documentElement.lang = lang === 'az' ? 'az' : 'en';

    const dict = translations[lang];
    if (!dict) return;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = dict[key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = dict[key];
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    // Update both lang toggle buttons
    ['langLabel', 'langLabelMob'].forEach(id => {
        const label = document.getElementById(id);
        if (label) {
            label.textContent = lang.toUpperCase();
            const alt = label.parentElement.querySelector('.lang-alt');
            if (alt) alt.textContent = lang === 'en' ? 'AZ' : 'EN';
        }
    });

    // Update typed text lines
    if (window._typedLines) {
        window._typedLines = dict['typed'] || translations.en['typed'];
    }
}

function initI18n() {
    // Tag all elements with data-i18n — uses a mapping of selectors
    const selectorMap = {
        '.loader-sub': 'loader.sub',
        '.hero-badge': 'hero.badge',
        '.hero-actions .btn-primary .btn-text': 'hero.cta1',
        '.hero-actions .btn-outline .btn-text': 'hero.cta2',
        '.hero-scroll span': 'hero.scroll',
    };

    // Auto-tag elements that don't already have data-i18n
    Object.entries(selectorMap).forEach(([sel, key]) => {
        const el = document.querySelector(sel);
        if (el && !el.dataset.i18n) el.dataset.i18n = key;
    });

    // Tag sections by order — more robust approach using section structure
    const sections = document.querySelectorAll('.section');
    const sectionKeys = [
        // Problem section
        { tags: ['problem.tag'], titles: ['problem.title'], subs: ['problem.sub'],
          cards: [['problem.c1.title','problem.c1.text'],['problem.c2.title','problem.c2.text'],['problem.c3.title','problem.c3.text'],['problem.c4.title','problem.c4.text']] },
        // Solution section
        { tags: ['sol.tag'], titles: ['sol.title'], subs: ['sol.sub'],
          feats: [['sol.f1.title','sol.f1.text'],['sol.f2.title','sol.f2.text'],['sol.f3.title','sol.f3.text'],['sol.f4.title','sol.f4.text']] },
        // Product
        { tags: ['prod.tag'], titles: ['prod.title'],
          prodCards: [['prod.vr.title','prod.vr.text'],['prod.ai.title','prod.ai.text'],['prod.multi.title','prod.multi.text'],['prod.lms.title','prod.lms.text']] },
        // How
        { tags: ['how.tag'], titles: ['how.title'],
          steps: [['how.s1.title','how.s1.text'],['how.s2.title','how.s2.text'],['how.s3.title','how.s3.text'],['how.s4.title','how.s4.text'],['how.s5.title','how.s5.text']] },
        // Solutions
        { tags: ['solutions.tag'], titles: ['solutions.title'],
          cards: [['solutions.students.title','solutions.students.text'],['solutions.educators.title','solutions.educators.text'],['solutions.schools.title','solutions.schools.text'],['solutions.gov.title','solutions.gov.text']] },
        // Rooms (Virtual Classrooms)
        { tags: ['rooms.tag'], titles: ['rooms.title'], subs: ['rooms.sub'] },
        // Platform
        { tags: ['plat.tag'], titles: ['plat.title'], subs: ['plat.sub'] },
        // Personas
        { tags: ['personas.tag'], titles: ['personas.title'], subs: ['personas.sub'] },
        // Preview
        { tags: ['preview.tag'], titles: ['preview.title'], subs: ['preview.sub'] },
        // Founder
        { tags: ['founder.tag'], titles: ['founder.title'], subs: ['founder.sub'] },
        // FAQ
        { tags: ['faq.tag'], titles: ['faq.title'] },
        // Vision
        { tags: ['vision.tag'] },
        // Contact
        { tags: ['contact.tag'], titles: ['contact.title'], subs: ['contact.sub'] },
    ];

    sections.forEach((sec, i) => {
        const cfg = sectionKeys[i];
        if (!cfg) return;
        const tag = sec.querySelector('.tag');
        const title = sec.querySelector('.sec-title');
        const sub = sec.querySelector('.sec-sub');
        if (tag && cfg.tags && !tag.dataset.i18n) tag.dataset.i18n = cfg.tags[0];
        if (title && cfg.titles && !title.dataset.i18n) title.dataset.i18n = cfg.titles[0];
        if (sub && cfg.subs && !sub.dataset.i18n) sub.dataset.i18n = cfg.subs[0];

        if (cfg.cards) {
            sec.querySelectorAll('.card').forEach((card, ci) => {
                if (cfg.cards[ci]) {
                    const h = card.querySelector('h3');
                    const p = card.querySelector('p');
                    if (h && !h.dataset.i18n) h.dataset.i18n = cfg.cards[ci][0];
                    if (p && !p.dataset.i18n) p.dataset.i18n = cfg.cards[ci][1];
                }
            });
        }
        if (cfg.feats) {
            sec.querySelectorAll('.sol-feat').forEach((feat, fi) => {
                if (cfg.feats[fi]) {
                    const h = feat.querySelector('h3');
                    const p = feat.querySelector('p');
                    if (h && !h.dataset.i18n) h.dataset.i18n = cfg.feats[fi][0];
                    if (p && !p.dataset.i18n) p.dataset.i18n = cfg.feats[fi][1];
                }
            });
        }
        if (cfg.prodCards) {
            sec.querySelectorAll('.prod-card').forEach((card, ci) => {
                if (cfg.prodCards[ci]) {
                    const h = card.querySelector('h3');
                    const p = card.querySelector('p');
                    if (h && !h.dataset.i18n) h.dataset.i18n = cfg.prodCards[ci][0];
                    if (p && !p.dataset.i18n) p.dataset.i18n = cfg.prodCards[ci][1];
                }
            });
        }
        if (cfg.steps) {
            sec.querySelectorAll('.step').forEach((step, si) => {
                if (cfg.steps[si]) {
                    const h = step.querySelector('h3');
                    const p = step.querySelector('p');
                    if (h && !h.dataset.i18n) h.dataset.i18n = cfg.steps[si][0];
                    if (p && !p.dataset.i18n) p.dataset.i18n = cfg.steps[si][1];
                }
            });
        }
    });

    // Vision quote
    const vq = document.querySelector('.vision-q');
    if (vq) vq.dataset.i18n = 'vision.quote';

    // Room cards
    const roomKeys = ['math', 'physics', 'chem', 'bio', 'code', 'lang'];
    document.querySelectorAll('.room-card').forEach((card, i) => {
        const key = roomKeys[i];
        if (!key) return;
        const h = card.querySelector('h4');
        const p = card.querySelector('p');
        if (h) h.dataset.i18n = `rooms.${key}`;
        if (p) p.dataset.i18n = `rooms.${key}.text`;
    });

    // Award cards
    const awardKeys = ['forbes', 'pres', 'tech', 'tekno'];
    document.querySelectorAll('.award-card').forEach((card, i) => {
        const key = awardKeys[i];
        if (!key) return;
        const h = card.querySelector('h4') || card.querySelector('h3');
        const p = card.querySelector('p');
        if (h && !h.dataset.i18n) h.dataset.i18n = `founder.${key}`;
        if (p && !p.dataset.i18n) p.dataset.i18n = `founder.${key}.sub`;
    });

    // Platform cards
    const platKeys = ['vr', 'desktop', 'tablet'];
    document.querySelectorAll('.plat-card').forEach((card, i) => {
        const key = platKeys[i];
        if (!key) return;
        const h = card.querySelector('h4');
        const p = card.querySelector('p');
        if (h) h.dataset.i18n = `plat.${key}`;
        if (p) p.dataset.i18n = `plat.${key}.sub`;
    });

    // Persona cards
    const personaKeys = ['ada', 'felix', 'maia', 'rex'];
    document.querySelectorAll('.persona-card').forEach((card, i) => {
        const key = personaKeys[i];
        if (!key) return;
        const h = card.querySelector('h3');
        const style = card.querySelector('.persona-style');
        const p = card.querySelector('p');
        if (h) h.dataset.i18n = `personas.${key}.name`;
        if (style) style.dataset.i18n = `personas.${key}.style`;
        if (p) p.dataset.i18n = `personas.${key}.text`;
    });

    // FAQ questions and answers
    document.querySelectorAll('.faq').forEach((faq, i) => {
        const q = faq.querySelector('.faq-q span');
        const a = faq.querySelector('.faq-a p');
        if (q) q.dataset.i18n = `faq.q${i+1}`;
        if (a) a.dataset.i18n = `faq.a${i+1}`;
    });

    // Contact form placeholders + select options
    const form = document.querySelector('.cform');
    if (form) {
        const inputs = form.querySelectorAll('input');
        if (inputs[0]) inputs[0].dataset.i18n = 'contact.name';
        if (inputs[1]) inputs[1].dataset.i18n = 'contact.email';
        const textarea = form.querySelector('textarea');
        if (textarea) textarea.dataset.i18n = 'contact.message';
        const submitText = form.querySelector('button .btn-text');
        if (submitText) submitText.dataset.i18n = 'contact.send';
        // Select options
        const select = form.querySelector('select');
        if (select) {
            const opts = select.querySelectorAll('option');
            const optKeys = ['contact.type', 'contact.type.school', 'contact.type.gov', 'contact.type.educator', 'contact.type.partner', 'contact.type.investor', 'contact.type.other'];
            opts.forEach((opt, i) => { if (optKeys[i]) opt.dataset.i18n = optKeys[i]; });
        }
    }

    // Footer
    const ftag = document.querySelector('.footer-brand p');
    if (ftag) ftag.dataset.i18n = 'footer.tagline';
    const fcopy = document.querySelector('.footer-bot p');
    if (fcopy) fcopy.dataset.i18n = 'footer.copy';

    // Lang toggle click (both desktop and mobile)
    ['langToggle', 'langToggleMob'].forEach(id => {
        const toggle = document.getElementById(id);
        if (toggle) {
            toggle.addEventListener('click', () => {
                const next = currentLang === 'en' ? 'az' : 'en';
                applyLanguage(next);
                const url = new URL(location.href);
                if (next === 'en') {
                    url.searchParams.delete('lang');
                } else {
                    url.searchParams.set('lang', next);
                }
                history.replaceState(null, '', url.toString());
            });
        }
    });

    // Apply saved language
    if (currentLang !== 'en') {
        applyLanguage(currentLang);
    }
}

// Export for typed text
window._typedLines = translations[currentLang]['typed'];

// ===== DARK MODE =====
function initTheme() {
    // Only apply dark if user explicitly chose it before
    const saved = localStorage.getItem('metatesk-theme');
    if (saved === 'dark') {
        document.documentElement.dataset.theme = 'dark';
    } else {
        document.documentElement.dataset.theme = 'light';
    }

    // Toggle handlers
    ['themeToggle', 'themeToggleMob'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                const current = document.documentElement.dataset.theme;
                const next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.dataset.theme = next;
                localStorage.setItem('metatesk-theme', next);

                // Update meta theme-color
                const meta = document.querySelector('meta[name="theme-color"]');
                if (meta) meta.content = next === 'dark' ? '#0D0820' : '#482AFF';
            });
        }
    });
}

// Apply saved theme ASAP to prevent flash (light is default)
(function() {
    const saved = localStorage.getItem('metatesk-theme');
    if (saved === 'dark') {
        document.documentElement.dataset.theme = 'dark';
    }
})();

// Init when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initI18n(); initTheme(); });
} else {
    initI18n();
    initTheme();
}
