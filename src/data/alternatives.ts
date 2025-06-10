import { Alternative } from '@/types'

export const alternatives: Alternative[] = [
  {
    id: 'n8n',
    name: 'n8n',
    description: 'A flexible automation platform combining AI capabilities with business process automation, offering both code-based and no-code options for technical teams.',
    alternativeTo: ['Zapier', 'Make', 'Integromat'],
    category: 'automation',
    tags: ['workflow', 'automation', 'no-code', 'AI', 'integration'],
    website: 'https://n8n.io',
    github: 'https://github.com/n8n-io/n8n',
    stars: 105490,
    forks: 29720,
    lastCommit: '2024-01-15',
    license: 'Fair-code',
    features: [
      'Visual workflow builder',
      'Code-based customization',
      'AI integration capabilities',
      'Self-hosted option',
      '400+ integrations'
    ]
  },
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'A powerful, scalable backend platform offering real-time databases, authentication, storage, and serverless functions for rapid development.',
    alternativeTo: ['Firebase', 'AWS Amplify'],
    category: 'backend',
    tags: ['database', 'backend', 'real-time', 'authentication', 'serverless'],
    website: 'https://supabase.com',
    github: 'https://github.com/supabase/supabase',
    stars: 84225,
    forks: 8888,
    lastCommit: '2024-01-15',
    license: 'Apache-2.0',
    features: [
      'PostgreSQL database',
      'Real-time subscriptions',
      'Authentication & authorization',
      'File storage',
      'Edge functions',
      'Vector embeddings'
    ]
  },
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    description: 'Excalidraw is a virtual whiteboard tool that allows teams to easily create and share sketches with a unique hand-drawn aesthetic.',
    alternativeTo: ['Miro', 'Figma', 'draw.io'],
    category: 'design',
    tags: ['whiteboard', 'collaboration', 'drawing', 'design', 'sketching'],
    website: 'https://excalidraw.com',
    github: 'https://github.com/excalidraw/excalidraw',
    stars: 101551,
    forks: 9975,
    lastCommit: '2024-01-14',
    license: 'MIT',
    features: [
      'Hand-drawn style',
      'Real-time collaboration',
      'End-to-end encryption',
      'Infinite canvas',
      'Export to various formats'
    ]
  },
  {
    id: 'rustdesk',
    name: 'RustDesk',
    description: 'Cross-platform remote desktop solution offering seamless control, file transfer, and screen sharing with robust security and customization options.',
    alternativeTo: ['TeamViewer', 'AnyDesk', 'Chrome Remote Desktop'],
    category: 'utilities',
    tags: ['remote-desktop', 'cross-platform', 'security', 'file-transfer'],
    website: 'https://rustdesk.com',
    github: 'https://github.com/rustdesk/rustdesk',
    stars: 90273,
    forks: 12953,
    lastCommit: '2024-01-12',
    license: 'AGPLv3',
    features: [
      'Cross-platform support',
      'End-to-end encryption',
      'File transfer',
      'Self-hosted server option',
      'No registration required'
    ]
  },
  {
    id: 'dify',
    name: 'Dify',
    description: 'Create, deploy, and manage AI-native apps effortlessly with a user-friendly platform that combines LLMs and your data.',
    alternativeTo: ['Vertex AI', 'Azure AI Studio', 'Amazon Bedrock'],
    category: 'ai-ml',
    tags: ['AI', 'LLM', 'no-code', 'workflow', 'chatbot'],
    website: 'https://dify.ai',
    github: 'https://github.com/langgenius/dify',
    stars: 102489,
    forks: 15375,
    lastCommit: '2024-01-15',
    license: 'Apache-2.0',
    features: [
      'Visual AI workflow builder',
      'Multiple LLM support',
      'RAG pipeline',
      'Agent capabilities',
      'API management'
    ]
  },
  {
    id: 'uptime-kuma',
    name: 'Uptime Kuma',
    description: 'A user-friendly, open-source uptime monitoring solution for tracking website and service availability.',
    alternativeTo: ['Pingdom', 'StatusCake', 'UptimeRobot'],
    category: 'monitoring',
    tags: ['monitoring', 'uptime', 'self-hosted', 'notifications'],
    website: 'https://uptime.kuma.pet',
    github: 'https://github.com/louislam/uptime-kuma',
    stars: 70542,
    forks: 6215,
    lastCommit: '2024-01-12',
    license: 'MIT',
    features: [
      'Beautiful UI',
      'Multiple notification channels',
      'Multi-language support',
      'Status pages',
      'Docker support'
    ]
  },
  {
    id: 'immich',
    name: 'Immich',
    description: 'Immich is an open-source, privacy-focused platform for managing and storing your personal photos and videos.',
    alternativeTo: ['Google Photos', 'iCloud Photos', 'Amazon Photos'],
    category: 'media',
    tags: ['photos', 'self-hosted', 'privacy', 'backup', 'media-management'],
    website: 'https://immich.app',
    github: 'https://github.com/immich-app/immich',
    stars: 70000,
    forks: 3500,
    lastCommit: '2024-01-15',
    license: 'MIT',
    features: [
      'Auto backup from mobile',
      'Facial recognition',
      'Object detection',
      'Multi-user support',
      'Mobile and web apps'
    ]
  },
  {
    id: 'nocodb',
    name: 'NocoDB',
    description: 'Transform any database into a smart spreadsheet with a no-code platform for building databases and automations.',
    alternativeTo: ['Airtable', 'Google Sheets', 'Microsoft Excel'],
    category: 'productivity',
    tags: ['database', 'no-code', 'spreadsheet', 'automation'],
    website: 'https://nocodb.com',
    github: 'https://github.com/nocodb/nocodb',
    stars: 48000,
    forks: 3200,
    lastCommit: '2024-01-14',
    license: 'AGPLv3',
    features: [
      'Spreadsheet interface',
      'API generation',
      'Workflow automation',
      'Multi-database support',
      'Form builder'
    ]
  },
  {
    id: 'plausible',
    name: 'Plausible Analytics',
    description: 'A lightweight, privacy-focused web analytics alternative that respects user privacy without using cookies.',
    alternativeTo: ['Google Analytics', 'Matomo'],
    category: 'analytics',
    tags: ['analytics', 'privacy', 'GDPR', 'web-analytics'],
    website: 'https://plausible.io',
    github: 'https://github.com/plausible/analytics',
    stars: 20000,
    forks: 1100,
    lastCommit: '2024-01-13',
    license: 'AGPLv3',
    features: [
      'No cookies required',
      'GDPR compliant',
      'Lightweight script',
      'Real-time dashboard',
      'Custom events'
    ]
  },
  {
    id: 'outline',
    name: 'Outline',
    description: 'A modern team knowledge base with a focus on speed and beautiful documents.',
    alternativeTo: ['Notion', 'Confluence', 'GitBook'],
    category: 'documentation',
    tags: ['wiki', 'documentation', 'collaboration', 'markdown'],
    website: 'https://getoutline.com',
    github: 'https://github.com/outline/outline',
    stars: 28000,
    forks: 2200,
    lastCommit: '2024-01-15',
    license: 'BSL',
    features: [
      'Real-time collaboration',
      'Markdown support',
      'Full-text search',
      'Slack integration',
      'Version history'
    ]
  }
]