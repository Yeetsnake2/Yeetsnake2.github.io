export const profile = {
  name: 'Muhammad Tayyeb Bukhari',
  tagline: 'AI/ML researcher & robotics builder — medical imaging, imitation learning, and physical systems.',
  location: 'Pakistan',
  email: 'tayyebbukhari24@gmail.com',
  phone: '+92 331 4886495',
  github: 'https://github.com/Yeetsnake2',
  linkedin: 'https://www.linkedin.com/in/muhammad-tayyeb-bukhari',
  publication: 'https://doi.org/10.1101/2024.10.24.24316057',
}

export const education = [
  {
    school: 'Lahore University of Management Sciences (LUMS)',
    degree: 'BS Computer Science — Sophomore',
    detail: 'GPA: 4.0 / 4.0',
    place: 'Lahore, Pakistan',
    period: '2025 — Present',
  },
  {
    school: 'Beaconhouse College Programme, Abbottabad',
    degree: 'Cambridge A-Levels — Rank 2 / 160',
    detail: 'Physics A*, Chemistry A*, Biology A*, Mathematics A',
    place: 'Abbottabad, Pakistan',
    period: '2023 — 2024',
  },
]

export const experience = [
  {
    org: 'SPADES (LUMS Student Society) — AI/ML & Robotics',
    role: 'Project Lead, Robotic Arm Imitation Learning; Team Member, AI/ML Dept.',
    period: '2025 — Present',
    points: [
      'Leading a project on robotic arm imitation learning, developing control pipelines for physical manipulation tasks.',
      'Contributing to AI/ML department initiatives and collaborative research within the society.',
    ],
  },
  {
    org: 'LUMS — NERC (National Engineering Robotics Contest)',
    role: 'Robotics Team Member',
    period: '2025 — Present',
    points: [
      'Designed, built, and programmed an NERC competition robot; secured funding from the LUMS EE Department.',
    ],
  },
  {
    org: 'Xylexa.ai',
    role: 'AI/ML Intern',
    period: '2024',
    points: [
      'Developed AI algorithms for detecting 14 chest CT abnormalities; addressed dataset imbalance via oversampling and augmentation.',
      'Enhanced breast cancer detection pipelines and built triaging systems for urgent care prioritization.',
    ],
  },
  {
    org: 'National Centre of Robotics and Automation (NCRA)',
    role: 'AI Research Intern',
    period: '2024',
    points: [
      'Built AI models for medical datasets: lumbar degeneration classification, chest X-ray anomaly detection, seizure detection from EEG.',
      'Applied GANs and advanced vision techniques; authored and published research on medRxiv.',
    ],
  },
  {
    org: 'Combined Military Hospital (CMH) — AI Tumor Detection Project',
    role: 'Lead Developer & Researcher',
    period: '2023',
    points: [
      'Designed a SqueezeNet-based neural network achieving 97% accuracy in tumor detection; received CMH certification.',
      'Produced diagnostic reports and visual aids for clinical staff.',
    ],
  },
]

export const projects = [
  {
    name: 'AI Agentic Chatbot',
    link: 'https://github.com/Yeetsnake2/AI-agentic-chatbot',
    description: 'Gemini-based chatbot with web search integration and semantic document parsing in Python.',
    stack: ['Python', 'Gemini API', 'Semantic Search'],
  },
  {
    name: 'Pneumonia Diagnosis Classification',
    link: 'https://github.com/Yeetsnake2/Pneumonia-diagnosis-classification-model',
    description:
      'Compared four lightweight models — EfficientNet-Lite0, MobileNetV3, MobileViT, EfficientFormerV2 — for pneumonia detection. MobileViT achieved 97.5% accuracy.',
    stack: ['PyTorch', 'ViTs', 'CNNs'],
  },
  {
    name: 'Tokamak Simulation',
    link: 'https://github.com/Yeetsnake2/Tokamak-simulation',
    description: 'OpenGL compute-accelerated plasma simulation of a tokamak fusion reactor.',
    stack: ['C++', 'OpenGL', 'Compute Shaders'],
  },
  {
    name: "Rubik's Cube Solver Robot",
    link: null,
    description:
      '3D-printed, soldered, and programmed a fully autonomous cube solver for under $90; achieved 95% solving efficiency. Covered by 2 news outlets.',
    stack: ['Embedded Systems', 'Robotics', '3D Printing'],
    year: '2023',
  },
]

export const publication = {
  title: 'Comparison of Lightweight CNN and Hybrid ViT Models for Pneumonia Detection',
  venue: 'medRxiv, Oct 2024',
  doi: '10.1101/2024.10.24.24316057',
  link: 'https://doi.org/10.1101/2024.10.24.24316057',
}

export const leadership = [
  {
    org: 'LSMS (LUMS Math Society)',
    role: 'Event Head',
    period: '2025 — Present',
    detail: 'Sigma and Delta Olympiads — two of Pakistan\u2019s largest math olympiads.',
  },
  {
    org: 'Epilepsy Awareness KPK',
    role: 'Founder & Project Lead',
    period: '2024 — Present',
    detail: 'Raised epilepsy awareness across KPK; collaborated with hospitals and raised funds; reached 20K+ people/month.',
  },
  {
    org: 'Robotics & CS Society, Beaconhouse',
    role: 'President',
    period: '2023 — 2024',
    detail: 'Led 60+ member society; taught Python, C++, CNNs, 3D modeling, and circuit design; organized COMSATS IoT bootcamp.',
  },
  {
    org: 'National Science Talent Contest',
    role: 'Alumni Mentor',
    period: '2024 — Present',
    detail: 'Coached IPhO and INSO aspirants; compiled resource banks, designed problem sets, and held training sessions.',
  },
]

export const awards = [
  { title: 'Gold Medal — International Nuclear Science Olympiad (IAEA)', detail: 'First Gold for Pakistan', year: '2025' },
  { title: 'Pride of Pakistan', detail: 'Conferred by the Government of Pakistan', year: '2024' },
  { title: 'Top 5 Nationally — National Physics Talent Contest, HEC Pakistan', detail: 'Ranked 5th', year: '2024' },
  { title: 'Silver Medal — Copernicus Physics & Astronomy Olympiad', detail: '', year: '2024' },
  { title: 'Top 10 — National Science Olympiad III', detail: 'Great Future Pakistan', year: '2024' },
]

export const skills = [
  { category: 'Languages', items: ['Python', 'C++', 'C', 'JavaScript'] },
  { category: 'ML / AI', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'CNNs', 'ViTs', 'GANs', 'Imitation Learning'] },
  { category: 'Tools', items: ['Git', 'Linux', 'OpenGL', 'Jupyter', 'Albumentations', 'FLTK'] },
  { category: 'Other', items: ['3D Prototyping', 'Circuit Design (Fritzing)', 'Embedded Systems', 'Robotics'] },
]
