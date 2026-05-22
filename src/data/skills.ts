export type PillarKey = 'build' | 'operate' | 'explore';

export interface SkillCard {
  title: string;
  skills: string[];
}

export interface Pillar {
  key: PillarKey;
  title: string;
  cards: SkillCard[];
}

export const pillars: Pillar[] = [
  {
    key: 'build',
    title: 'Build',
    cards: [
      {
        title: 'Backend Development',
        skills: ['.net', 'c#', 'asp.net core', 'roslyn', 'php', 'python', 'grpc', 'node'],
      },
      {
        title: 'Frontend Development',
        skills: [
          'js',
          'css',
          'html',
          'angular',
          'typescript',
          'svelte',
          'nuxt',
          'astro',
          'websockets',
        ],
      },
      {
        title: 'Game Development',
        skills: [
          'c++',
          'unreal engine',
          'godot',
          'shaders',
          'procedural generation',
          'behavior trees',
        ],
      },
      {
        title: 'AI & Data',
        skills: ['prompt engineering', 'rag', 'mcp', 'skills', 'subagents'],
      },
    ],
  },
  {
    key: 'operate',
    title: 'Operate',
    cards: [
      {
        title: 'Architecture & Engineering',
        skills: [
          'micro-services',
          'mvc',
          'solid',
          'design patterns',
          'domain-driven',
          'cqrs',
          'rest',
        ],
      },
      {
        title: 'Database & Streaming',
        skills: [
          'mysql',
          'sqlserver',
          'elasticsearch',
          'neo4j',
          'oracle',
          'mongo',
          'rabbitmq',
          'kafka',
          'redis',
        ],
      },
      {
        title: 'Cloud & Infrastructure',
        skills: [
          'docker',
          'kubernetes',
          'ci/cd',
          'github actions',
          'terraform',
          'aws',
          'lambda',
          'opentelemetry',
          'sentry',
        ],
      },
      {
        title: 'Testing & Security',
        skills: ['xunit', 'playwright', 'oauth', 'tdd', 'secrets management', 'sonarqube'],
      },
    ],
  },
  {
    key: 'explore',
    title: 'Explore',
    cards: [
      {
        title: 'Writing',
        skills: ['short stories', 'rp', 'short novels'],
      },
      {
        title: 'Arts',
        skills: ['piano', 'french horn', 'video editing', 'streaming'],
      },
      {
        title: 'Martial Arts & Sports',
        skills: ['historical european martial arts', 'handball', 'jujitsu'],
      },
      {
        title: 'Languages',
        skills: ['french (native)', 'english (advanced)'],
      },
    ],
  },
];
