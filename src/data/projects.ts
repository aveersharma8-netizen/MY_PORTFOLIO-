export type ProjectStatus = 'Built' | 'In Progress' | 'Project / Prototype' | 'Project' | 'Concept / Development';

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  tagline: string;
  category: string;
  focus: string;
  featured: boolean;
  order: number;
  description: string;
  whyIStartedIt: string;
  whatImBuilding: string[];
  stack: string[];
  currentStatusText: string;
  whatsNext: string;
  isPlayable?: boolean;
  visualType: 'ncert' | 'offline-app' | 'frostalert' | 'would-you-rather' | 'dustbin' | 'watering' | 'progress';
}

export const projects: Project[] = [
  {
    id: 'ncert-nexus',
    title: 'NCERT Nexus',
    status: 'In Progress',
    tagline: 'AI learning web tool designed for NCERT school curricula',
    category: 'AI · Education · Web · Product',
    focus: 'AI · Education · Web · Product',
    featured: true,
    order: 1,
    description: 'An AI web platform designed to turn NCERT textbooks into interactive study guides, custom quizzes, and instant concept explanations.',
    whyIStartedIt: 'Studying from standard NCERT textbooks often feels passive. Students need a tool that understands the exact CBSE curriculum context and textbook structure.',
    whatImBuilding: [
      'Curriculum document indexing for NCERT textbooks',
      'Step-by-step problem solver & concept explanations',
      'Interactive flashcard revision system',
      'CBSE marking scheme answer evaluation'
    ],
    stack: ['TypeScript', 'React', 'Gemini API', 'Tailwind CSS', 'FastAPI'],
    currentStatusText: 'Working on textbook document indexing and query response interface. Refining the interactive flashcard UI.',
    whatsNext: 'Adding multi-subject support and offline study material export.',
    visualType: 'ncert'
  },
  {
    id: 'offline-ai-student-app',
    title: 'Offline AI Student App',
    status: 'In Progress',
    tagline: 'On-device offline learning assistant for study without internet',
    category: 'AI · Education · Offline-first',
    focus: 'AI · Education · Offline-first',
    featured: true,
    order: 2,
    description: 'An offline application that uses local models to provide instant tutoring, formula reference, and problem solving without requiring internet.',
    whyIStartedIt: 'Students in low-bandwidth or unreliable network environments face frequent internet disruptions. Essential learning tools should work offline.',
    whatImBuilding: [
      'On-device inference engine using ONNX Runtime',
      'Fine-tuned local student language models',
      'Offline textbook reference search',
      'Optimized memory usage for mobile devices'
    ],
    stack: ['React Native', 'ONNX Runtime', 'Local Models', 'SQLite', 'TypeScript'],
    currentStatusText: 'Initial prototype running locally on-device for math and science queries. Optimizing model memory usage for mobile devices.',
    whatsNext: 'Integrating image OCR for resolving textbook photo queries.',
    visualType: 'offline-app'
  },
  {
    id: 'frostalert-pro',
    title: 'FrostAlert Pro',
    status: 'Project / Prototype',
    tagline: 'Smart IoT agricultural system for early frost warnings',
    category: 'IoT · Agriculture · Automation',
    focus: 'IoT · Agriculture · Automation',
    featured: true,
    order: 3,
    description: 'An IoT monitoring system that tracks micro-climate parameters like soil temperature and humidity to alert farmers before freezing temperatures damage crops.',
    whyIStartedIt: 'Sudden frost destroys crops overnight in agricultural regions. Farmers need early warnings before temperatures drop below freezing.',
    whatImBuilding: [
      'Solar-powered ESP32 wireless sensor node array',
      'GSM telemetry bridge for data transmission',
      'Temperature drop prediction logic',
      'Automated SMS farmer alerts'
    ],
    stack: ['ESP32', 'C++', 'MQTT', 'Node.js', 'InfluxDB', 'Tailwind CSS', 'GSM'],
    currentStatusText: 'Hardware prototype assembled and field-tested in a small plot. Sensor nodes running on low-power battery with solar charging.',
    whatsNext: 'Connecting automated sprinkler valves to trigger frost mitigation autonomously.',
    visualType: 'frostalert'
  },
  {
    id: 'would-you-rather-roast',
    title: 'Would You Rather — Fully Roasting Game',
    status: 'Built',
    tagline: 'A chaotic decision game with ridiculous choices and full-on roasting',
    category: 'Game · Web · Interactive Experience',
    focus: 'Game · Web · Interactive Experience',
    featured: true,
    order: 4,
    description: 'A chaotic Would You Rather game built around ridiculous choices, unexpected situations, and full-on roasting.',
    whyIStartedIt: 'I don\'t only build serious AI or hardware projects. I wanted to build something purely fun, fast, and interactive that demonstrates UI micro-interactions and state management.',
    whatImBuilding: [
      'Interactive decision card UI with animations',
      'Real-time vote percentage tallies',
      'Dynamic roasting feedback generator',
      'Shareable summary cards'
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    currentStatusText: 'Fully built and playable directly inside this portfolio.',
    whatsNext: 'Adding custom scenario packs and room sharing.',
    isPlayable: true,
    visualType: 'would-you-rather'
  },
  {
    id: 'smart-dustbin',
    title: 'Smart Dustbin',
    status: 'Project',
    tagline: 'Contactless automated waste bin powered by ultrasonic sensing',
    category: 'IoT · Automation',
    focus: 'IoT · Automation',
    featured: false,
    order: 5,
    description: 'An automated, touch-free waste bin built with Arduino UNO, ultrasonic distance sensors, and servo motors for hygienic waste disposal.',
    whyIStartedIt: 'Promoting touchless hygiene in public and home spaces by eliminating the need to physically touch trash lids.',
    whatImBuilding: [
      'Ultrasonic distance detection (<20cm threshold)',
      'Distance filtering logic to prevent false triggers',
      'Auto-closing servo lid control (3.5s delay)',
      'Power-saving idle routine'
    ],
    stack: ['Arduino UNO', 'C++', 'Ultrasonic Sensor', 'Servo Motor'],
    currentStatusText: 'Physical hardware assembled and microcontroller firmware written and tested.',
    whatsNext: 'Adding fill-level indicators.',
    visualType: 'dustbin'
  },
  {
    id: 'automated-plant-watering',
    title: 'Automated Plant Watering System',
    status: 'Project',
    tagline: 'Self-regulating soil moisture monitoring & automated irrigation',
    category: 'IoT · Automation',
    focus: 'IoT · Automation',
    featured: false,
    order: 6,
    description: 'An automated irrigation system using soil moisture sensors and relay-controlled water pumps to maintain soil moisture.',
    whyIStartedIt: 'Plants frequently wither due to irregular watering. An automated closed-loop system solves this simple problem.',
    whatImBuilding: [
      'Capacitive soil moisture sensing',
      'Relay switching logic',
      'Dry-run pump protection'
    ],
    stack: ['Arduino', 'C++', 'Capacitive Sensors', '5V Relay Module', 'Water Pump'],
    currentStatusText: 'Working prototype managing indoor plants.',
    whatsNext: 'Adding WiFi connectivity for smartphone status updates.',
    visualType: 'watering'
  },
  {
    id: 'student-progress-app',
    title: 'Student Progress App',
    status: 'Concept / Development',
    tagline: 'Visual academic analytics & revision tracking dashboard',
    category: 'EdTech · Product · Web/App',
    focus: 'EdTech · Product · Web/App',
    featured: false,
    order: 7,
    description: 'A dashboard for tracking revision schedules, test score trends, and subject mastery over time.',
    whyIStartedIt: 'Standard grade trackers focus on numbers rather than learning velocity and targeted revision strategy.',
    whatImBuilding: [
      'Revision study planner',
      'Progress trajectory charts',
      'Weak-topic heatmaps'
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    currentStatusText: 'UI wireframes and data models drafted. Prototyping the subject mastery scoring engine.',
    whatsNext: 'Integrating study session timing and calendar sync.',
    visualType: 'progress'
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}
