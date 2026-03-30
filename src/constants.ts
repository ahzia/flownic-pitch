import { PitchVersion } from './types';

export const PITCH_VERSIONS: PitchVersion[] = [
  {
    id: '5min',
    name: '5-Minute Pitch',
    duration: '5:00',
    slides: [
      {
        id: '5-1',
        title: 'Every browser-heavy team is bleeding hours on repeat work',
        bullets: [
          'A recruiter opens 20 job profiles daily.',
          'Copies details into sheets, drafts outreach, switches tabs all day.',
          'Same process tomorrow. Same friction. Same mistakes.'
        ],
        accentColor: 'red',
        speakerNotes: 'Start specific and relatable. This is not a niche issue; this is daily operations in recruiting, sales ops, support, and research.'
      },
      {
        id: '5-2',
        title: 'The stack is fragmented: chat helps text, automation tools need engineers',
        bullets: [],
        layout: 'two-column',
        leftContent: [
          'What teams use now',
          'AI chat copilots',
          'No-code cloud automations',
          'Manual browser workflows'
        ],
        rightContent: [
          'What still breaks',
          'Not browser-context repeatable',
          'Hard for non-technical users',
          'Cloud/privacy concerns'
        ],
        accentColor: 'orange',
        speakerNotes: 'Teams need something like ChatGPT + n8n, but directly where work happens: inside the browser.'
      },
      {
        id: '5-3',
        title: 'Flownic = AI workflow layer for browser operations',
        bullets: [
          'Workflow-first: save reusable playbooks, not one-off prompts.',
          'AI + Action: combine task AI, browser tools, and agentic steps.',
          'On-device first: use Chrome built-in AI where possible.',
          'B2B outcome: faster execution, lower variance, easier onboarding.'
        ],
        tagline: 'ChatGPT (with on-device option) + n8n-style flows, built for non-technical browser users.',
        accentColor: 'emerald',
        speakerNotes: 'Mention real shipped capabilities from codebase: workflow engine + data points, browser tools + agent step, multi-tab primitives.'
      },
      {
        id: '5-4',
        title: 'Why now, and why us',
        bullets: [
          'AI is good enough to plan/execute browser sub-tasks.',
          'Teams still need deterministic workflows and human checkpoints.',
          'We already shipped a working extension with real flow execution and demos.'
        ],
        accentColor: 'blue',
        speakerNotes: 'Position this as execution-heavy, not theory-heavy. Built: multi-step runs, browser actions, agent tooling, reusable templates.'
      },
      {
        id: '5-5',
        title: '2-minute demo: from repetitive browser task to reusable workflow',
        bullets: [],
        layout: 'demo',
        demoSteps: [
          'Step 1: trigger workflow',
          'Step 2: agent/tool gathers data',
          'Step 3: structured output + download/modal',
          'Step 4: rerun in one shortcut'
        ],
        accentColor: 'blue',
        speakerNotes: '0:00-0:20: playground. 0:20-1:10: live page. 1:10-1:40: business output. 1:40-2:00: rerun/repeatability. Safety tip: fallback recording ready.'
      },
      {
        id: '5-6',
        title: 'Why Incubator is the right next step',
        bullets: [
          'Next 6 months: sharpen B2B ICP, improve flow UX, prove ROI.',
          'Ask: mentorship on GTM, customer intros for early pilots.',
          'Support to convert product progress into repeatable business traction.'
        ],
        accentColor: 'emerald',
        speakerNotes: 'Keep ask concrete and program-aligned.'
      },
      {
        id: '5-7',
        title: 'Revenue strategy: B2B core + B2C marketplace edge',
        bullets: [
          'B2B: Seat-based SaaS + usage-based credits + enterprise add-ons.',
          'B2C: Users buy ready-made workflows for specific outcomes.',
          'Creator economy: Workflow builders publish templates and earn revenue share.'
        ],
        layout: 'monetization',
        accentColor: 'blue',
        speakerNotes: 'B2B SaaS is core revenue engine. B2C marketplace is growth/distribution + additional monetization layer.'
      }
    ]
  },
  {
    id: '3min',
    name: '3-Minute Pitch',
    duration: '3:00',
    slides: [
      {
        id: '3-1',
        title: 'Teams lose hours every week on repeat browser workflows',
        bullets: [
          'Recruiting, sales ops, support, research: same browser tasks every day.',
          'Copy-paste + tab switching + manual formatting = slow and error-prone.',
          'Chat tools help text, not repeatable operations.'
        ],
        accentColor: 'red',
        speakerNotes: 'Keep this very human and direct. One concrete role example only (recruiter or sales ops).'
      },
      {
        id: '3-2',
        title: 'Flownic makes browser work reusable, AI-powered, and operational',
        bullets: [
          'Build workflow once, run in one shortcut.',
          'Combine AI tasks + browser actions + agent step when needed.',
          'B2B value: faster execution, lower variance, easier team onboarding.'
        ],
        tagline: 'Think: ChatGPT + n8n-style flows, built for non-technical browser users.',
        accentColor: 'emerald',
        speakerNotes: 'Mention on-device-first option: "We prioritize Chrome built-in AI where possible." Include one monetization line: "B2B SaaS first + workflow marketplace."'
      },
      {
        id: '3-3',
        title: 'Live: from manual browser process to repeatable workflow',
        bullets: [],
        layout: 'demo',
        demoSteps: [
          'Trigger',
          'Execute',
          'Output',
          'Reuse'
        ],
        accentColor: 'blue',
        speakerNotes: '0:00-0:20: intent. 0:20-1:20: execute. 1:20-1:50: output artifact. 1:50-2:00: final line: "This is one reusable operational playbook, not a one-off prompt."'
      },
      {
        id: '3-4',
        title: 'How Flownic makes money',
        bullets: [
          'B2B core: seat + usage pricing, enterprise add-ons',
          'B2C: buy specific ready-made workflows (outcome-based packs)',
          'Creator economy: workflow builders earn a percentage of sales'
        ],
        layout: 'monetization',
        accentColor: 'blue',
        speakerNotes: 'Quick spoken example: "A non-technical user buys a job-application workflow pack; a creator gets paid per purchase."'
      }
    ]
  }
];
