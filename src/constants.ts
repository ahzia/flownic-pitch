import { PitchVersion } from './types';

export const PITCH_VERSIONS: PitchVersion[] = [
  {
    id: '5min',
    name: '5-Minute Pitch',
    duration: '5:00',
    slides: [
      {
        id: '5-1',
        section: 'Problem',
        title: 'Every browser-heavy team is bleeding hours on repeat work',
        subtitle: 'The pain is operational, daily, and expensive.',
        bullets: [
          '👩‍💼 A recruiter reviews 20+ profiles per day and repeats the same browser steps.',
          '🔁 Data collection, tab switching, and formatting still happen manually.',
          '📉 Result: slower execution, inconsistent quality, and avoidable human error.'
        ],
        accentColor: 'red',
        speakerNotes: 'Start specific and relatable. This is not niche; this is daily operations in recruiting, sales ops, support, and research.'
      },
      {
        id: '5-2',
        section: 'Gap',
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
          '❌ Not browser-context repeatable',
          '❌ Hard for non-technical users',
          '❌ Cloud/privacy concerns for sensitive workflows'
        ],
        accentColor: 'orange',
        speakerNotes: 'Teams need something like ChatGPT + n8n, but directly where work happens: inside the browser.'
      },
      {
        id: '5-3',
        section: 'Solution',
        title: 'Flownic = AI workflow layer for browser operations',
        subtitle: 'Workflow-first automation for business teams, not only developers.',
        showLogoBadge: true,
        bullets: [
          '🧩 Workflow-first: save reusable playbooks, not one-off prompts.',
          '🤖 AI + action: combine task AI, browser tools, and agentic steps.',
          '🔒 On-device first: use Chrome built-in AI where possible.',
          '🏢 B2B outcome: faster execution, lower variance, easier onboarding.'
        ],
        tagline: 'ChatGPT (with on-device option) + n8n-style flows, built for non-technical browser users.',
        accentColor: 'emerald',
        speakerNotes: 'Mention real shipped capabilities from codebase: workflow engine + data points, browser tools + agent step, multi-tab primitives.'
      },
      {
        id: '5-4',
        section: 'Why Now',
        title: 'Why now, and why Flownic',
        bullets: [
          '⚡ AI is now good enough to plan and execute browser sub-tasks.',
          '🛟 Teams still need deterministic workflows and human checkpoints.',
          '✅ We already shipped a working extension with real workflow execution and demos.'
        ],
        accentColor: 'blue',
        speakerNotes: 'Position this as execution-heavy, not theory-heavy. Built: multi-step runs, browser actions, agent tooling, reusable templates.'
      },
      {
        id: '5-4b',
        section: 'Architecture',
        title: 'How it works under the hood',
        subtitle: 'Extension UI → workflow JSON → background orchestration → page execution.',
        bullets: [],
        layout: 'architecture',
        architectureSteps: [
          {
            label: '1. Extension',
            text: 'Playground / Quickbar — author and trigger workflows in Chrome.'
          },
          {
            label: '2. Workflow JSON',
            text: 'Steps (tasks, handlers, agents, browser tools) + ${data points} + triggers.'
          },
          {
            label: '3. Service worker',
            text: 'Runs the workflow: resolve tokens, route steps, message the right tab.'
          },
          {
            label: '4. Content script',
            text: 'Context (page + KB), TaskExecutor, HandlerExecutor, BrowserController tools.'
          },
          {
            label: '5. Browser MCP agent',
            text: 'LLM loop + tool calls (navigate, click, snapshot, …) when a step needs reasoning.'
          }
        ],
        accentColor: 'blue',
        speakerNotes: 'Ground truth: orchestration lives in the background service worker; DOM and BrowserController run in the content script per tab. Agents combine tasks (Chrome AI / remote LLM) with browser tools.'
      },
      {
        id: '5-5',
        section: 'Demo',
        title: '2-minute demo: from repetitive browser task to reusable workflow',
        bullets: [],
        layout: 'demo',
        demoSteps: [
          '🚀 Trigger workflow',
          '🧠 Agent/tool gathers data',
          '📦 Structured output + download/modal',
          '♻️ Rerun in one shortcut'
        ],
        accentColor: 'blue',
        speakerNotes: '0:00-0:20: playground. 0:20-1:10: live page. 1:10-1:40: business output. 1:40-2:00: rerun/repeatability. Safety tip: fallback recording ready.'
      },
      {
        id: '5-6',
        section: 'Business Model',
        title: 'Revenue strategy: B2B core + B2C marketplace edge',
        bullets: [
          'B2B: seat-based SaaS + usage credits + enterprise controls (SSO, audit, governance).',
          'B2C: users buy ready-made workflow packs for specific outcomes.',
          'Creator economy: workflow builders publish and earn revenue share.'
        ],
        accentColor: 'blue',
        layout: 'monetization',
        speakerNotes: 'B2B is the core revenue engine. Marketplace accelerates adoption and creates creator-led distribution.'
      },
      {
        id: '5-7',
        section: 'Missing Piece',
        title: 'What matters most next: trust, governance, and ROI proof',
        subtitle: 'This is the critical bridge from great product to scalable B2B adoption.',
        bullets: [
          '🛡️ Trust layer: action previews, approvals, and auditable run logs for teams.',
          '📊 ROI proof: benchmark time saved and quality consistency per workflow.',
          '🔒 Governance: role-based workflow access and approved template libraries.'
        ],
        accentColor: 'emerald',
        speakerNotes: 'This is the most important missing piece in many automation products. Buyers need control and measurable ROI, not only capability.'
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
        section: 'Problem',
        title: 'Teams lose hours every week on repeat browser workflows',
        bullets: [
          '👥 Recruiting, sales ops, support, research: same browser tasks every day.',
          '🧱 Copy-paste + tab switching + manual formatting = slow and error-prone.',
          '💬 Chat tools help text, not repeatable operations.'
        ],
        accentColor: 'red',
        speakerNotes: 'Keep this very human and direct. One concrete role example only (recruiter or sales ops).'
      },
      {
        id: '3-2',
        section: 'Architecture',
        title: 'How it works (high level)',
        subtitle: 'Same stack as the product: workflow engine + BrowserController + agent loop.',
        bullets: [],
        layout: 'architecture',
        architectureSteps: [
          { label: 'Extension', text: 'UI to build and run workflows.' },
          { label: 'Workflow JSON', text: 'Portable recipe: steps + tokens + triggers.' },
          { label: 'Background', text: 'Orchestrates runs and tab messaging.' },
          { label: 'Content + BC', text: 'Page context, handlers, browser tools.' },
          { label: 'MCP-style agent', text: 'LLM + tools for adaptive steps.' }
        ],
        accentColor: 'blue',
        speakerNotes: 'One sentence each if short on time. Emphasize: not a cloud-only bot — runs in the user’s browser profile with explicit steps.'
      },
      {
        id: '3-3',
        section: 'Solution + Monetization',
        title: 'Flownic makes browser work reusable, AI-powered, and operational',
        showLogoBadge: true,
        bullets: [
          '✨ Build workflow once, run in one shortcut.',
          '🛠️ Combine AI tasks + browser actions + agent step when needed.',
          '💰 Revenue: B2B seat+usage pricing, plus B2C workflow marketplace with creator payouts.'
        ],
        tagline: 'Think: ChatGPT + n8n-style flows, built for non-technical browser users.',
        accentColor: 'emerald',
        speakerNotes: 'Mention on-device-first option: "We prioritize Chrome built-in AI where possible." Include one monetization line: "B2B SaaS first + workflow marketplace."'
      },
      {
        id: '3-4',
        section: 'Demo',
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
        id: '3-5',
        section: 'Close',
        title: 'What’s next',
        subtitle: 'Working product today. Clear business model. Ready for pilots.',
        bullets: [
          'B2B is our core: recurring SaaS with expansion economics.',
          'B2C marketplace expands reach: buy-ready workflows, creator revenue share.',
          'We are now focused on proving pilot ROI and scaling distribution.'
        ],
        accentColor: 'blue',
        speakerNotes: 'Use as a 15-20 second close if time allows; otherwise keep this as backup and finish on demo outcome.'
      },
    ]
  }
];
