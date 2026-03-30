import { PitchVersion } from './types';

/** Single deck — you control pacing (skip last slides if short on time). */
export const PITCH_VERSIONS: PitchVersion[] = [
  {
    id: 'pitch',
    name: 'Pitch',
    duration: '',
    slides: [
      {
        id: 'slide-1',
        section: 'Problem',
        title: 'Teams waste hours every day on the same browser work',
        subtitle:
          'People repeat the same steps again and again — copy, paste, switch tabs, fix formatting. It’s slow, boring, and full of mistakes.',
        bullets: [
          'Example: a recruiter searches LinkedIn, opens many profiles, copies skills and titles into a spreadsheet, asks ChatGPT to draft or shorten a message, then pastes into email or the ATS — and does it 20+ times a day.'
        ],
        accentColor: 'red',
        speakerNotes:
          'Paint the loop: LinkedIn → copy → ChatGPT → paste → ATS. Emphasize repeatability gap. Keep it concrete, not abstract.'
      },
      {
        id: 'slide-2',
        section: 'Gap',
        title: 'Current tools don’t solve this',
        bullets: [],
        layout: 'two-column',
        leftContent: [
          'What teams use today',
          'ChatGPT and other AI chats',
          'Automation tools (like n8n)',
          'Spreadsheets, bookmarks, and doing it by hand'
        ],
        rightContent: [
          'Why it still breaks',
          '❌ Chat helps with words, not a full, repeatable browser routine',
          '❌ Many automations are too technical or live in the cloud — data and cost concerns, not every website has API',
          '❌ Nothing ties Browser + AI + your exact clicks and tabs into one workflow you can run again'
        ],
        accentColor: 'orange',
        speakerNotes:
          'Bridge: they need ChatGPT-style help and n8n-style flows, but inside the browser, for non-developers.'
      },
      {
        id: 'slide-3',
        section: 'Solution',
        title: 'Flownic turns browser work into reusable workflows',
        subtitle:
          'We help teams turn repetitive browser work into workflows they can run in one click.',
        showLogoBadge: true,
        bullets: [
          'Record or define a workflow once.',
          'Run it anytime with one shortcut.',
          'AI handles the thinking; the browser handles the actions.',
          'Chrome built-in AI when you want it: no cloud and no internet required for that path — your data stays on your computer.'
        ],
        tagline:
          'Like ChatGPT and workflow automation combined — but it runs in your browser, on your sites, as a playbook you can repeat.',
        accentColor: 'emerald',
        speakerNotes:
          'One sentence: reusable playbooks, not one-off prompts. On-device Chrome AI = privacy-sensitive teams. Details on architecture slide if needed.'
      },
      {
        id: 'slide-4',
        section: 'Demo',
        title: 'From manual loop to one-click workflow',
        bullets: [],
        layout: 'demo',
        demoSteps: [
          'Pick or build a workflow',
          'Run it on the live page',
          'Get structured output you can reuse',
          'Run again tomorrow in one click'
        ],
        accentColor: 'blue',
        speakerNotes:
          '0:00–0:25: show UI. 0:25–1:15: live page. 1:15–1:45: output. 1:45–2:00: repeatability line. Keep fallback video ready.'
      },
      {
        id: 'slide-5',
        section: 'Business',
        title: 'How we make money',
        bullets: [
          'B2B — per user: Companies pay per seat for their teams on the product.',
          'B2B — usage: Pay for AI and browser actions as volume grows.',
          'Marketplace (B2C): Ready-made workflow packs people can buy; creators earn when their workflows sell.'
        ],
        accentColor: 'emerald',
        layout: 'monetization',
        speakerNotes:
          'Core: recurring B2B + usage. Marketplace expands distribution and creator economy. Optional: enterprise add-ons later.'
      },
      {
        id: 'slide-6',
        section: 'Use cases',
        title: 'What Flownic can do for people and teams',
        subtitle:
          'A vision of repeatable browser playbooks',
        bullets: [],
        layout: 'useCases',
        contentAlign: 'start',
        accentColor: 'emerald',
        useCases: [
          {
            icon: 'FileText',
            title: 'Smarter job applications',
            description:
              'Read each job post, adapt your CV and cover letter to the role and company, fill application forms, and track status — one workflow per search, tuned per listing.'
          },
          {
            icon: 'UserSearch',
            title: 'Recruiting & sourcing',
            description:
              'Search LinkedIn or job boards, shortlist profiles, enrich with public data, draft personalized outreach, and log everything to your ATS without tab gymnastics.'
          },
          {
            icon: 'Target',
            title: 'Sales & outbound',
            description:
              'Move from prospect to CRM: research a lead on the web, update the record, generate a tailored email or sequence, and follow up when it’s time.'
          },
          {
            icon: 'Headphones',
            title: 'Support & success',
            description:
              'Open a ticket, pull order and account context from internal tools, suggest a reply, run safe actions (refund, escalate), and document the case.'
          },
          {
            icon: 'ShoppingCart',
            title: 'E‑commerce & ops',
            description:
              'Check competitors’ prices, update your storefront or marketplace listings, reconcile supplier portals, and handle routine storefront tasks in the browser.'
          },
          {
            icon: 'LineChart',
            title: 'Research & analysis',
            description:
              'Harvest public data from many pages into a structured sheet or brief, refresh dashboards, and rerun the same sweep when numbers change.'
          },
          {
            icon: 'Globe',
            title: 'Personal life admin',
            description:
              'Renew insurance, book travel, compare utilities, or chase refunds — multi-step sites that today eat your evening, turned into guided runs.'
          },
          {
            icon: 'Receipt',
            title: 'Finance & bookkeeping',
            description:
              'Download statements, categorize expenses across bank and card portals, and prep exports for your accountant or tax tool.'
          },
          {
            icon: 'GraduationCap',
            title: 'Students & applicants',
            description:
              'Apply to programs and scholarships: gather requirements, adapt essays, upload documents, and track deadlines across different portals.'
          },
          {
            icon: 'Plane',
            title: 'Travel & bookings',
            description:
              'Compare flights and hotels across sites, hold the best fare rules in mind, and complete bookings with your saved preferences.'
          },
          {
            icon: 'ClipboardList',
            title: 'Compliance & internal ops',
            description:
              'Walk through policy checklists, attestations, and vendor portals — same audit trail every quarter, with human approval where required.'
          },
          {
            icon: 'Sparkles',
            title: 'Creators & side projects',
            description:
              'Post once, adapt for each platform, resize copy, and file repetitive creator workflows (uploads, metadata, comments) without losing your voice.'
          }
        ],
        speakerNotes:
          'Paint breadth: browser-native, role-agnostic. Tie back to “define once, run forever.” Pick 2–3 examples live if short on time.'
      },
      {
        id: 'slide-7',
        section: 'Why now',
        title: 'Why now — and what companies care about',
        bullets: [],
        layout: 'two-column',
        contentAlign: 'start',
        leftContent: [
          'Why now',
          'AI can finally understand and execute real tasks.',
          'Teams still need structure, approvals, and control — not a black box.',
          'No one has combined both inside the browser the way daily operators need.'
        ],
        rightContent: [
          'What companies care about',
          'Simplicity: easy for everyday users, not only engineers.',
          'Control: approve and review actions before they run.',
          'Trust: see what the AI did and what data was involved.'
        ],
        accentColor: 'blue',
        speakerNotes:
          'Left: timing + wedge. Right: buyer checklist — maps to product story. Browser-first / on-device called out on solution slide.'
      },
      {
        id: 'slide-8',
        section: 'Architecture',
        title: 'How it works under the hood',
        subtitle:
          'MVP today: Chrome extension, workflow engine, and demos you can run — technical detail stays on this slide.',
        bullets: [],
        layout: 'architecture',
        contentAlign: 'start',
        architectureSteps: [
          {
            label: '1. Chrome extension (shipped)',
            text: 'Playground and quick actions — where teams author and trigger workflows. This is our live MVP surface.'
          },
          {
            label: '2. Workflow file',
            text: 'A JSON “recipe” of steps, data, and triggers — portable and versionable.'
          },
          {
            label: '3. Background service',
            text: 'Orchestrates the run: which step is next, which tab to use, and messages to the page.'
          },
          {
            label: '4. Page layer',
            text: 'Runs in the tab: reads the page, runs actions, and connects to browser tooling.'
          },
          {
            label: '5. AI + browser agent',
            text: 'When a step needs reasoning, an LLM loop uses tools (navigate, click, snapshot, …) to complete the task.'
          }
        ],
        accentColor: 'blue',
        speakerNotes:
          'For technical listeners: service worker vs content script, BrowserController-style tools, optional on-device vs remote LLM. For others: “extension coordinates AI and the browser in one workflow.”'
      }
    ]
  }
];
