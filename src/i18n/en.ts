import type { Content } from './types'

export const en: Content = {
  common: {
    langName: 'English',
    nav: {
      services: 'Services',
      cases: 'Cases',
      system: 'System',
      team: 'Team',
      thinking: 'Thinking',
    },
    home: 'Home',
    book: 'Book a one-hour diagnostic',
    bookShort: 'Book',
    switchLang: 'Switch language',
    footer: {
      location: 'Santiago, Chile',
      nameLink: 'What the name means',
    },
  },

  home: {
    meta: {
      title: 'Utopía Lab · Anticipatory intelligence for deciding under uncertainty',
      description:
        'We install anticipatory capacity in organizations: an observation dashboard, a common position and a measurable influence protocol. Twelve-week pilot. Santiago, Chile.',
    },

    hero: {
      kicker: 'Utopía Lab · Anticipatory intelligence',
      titleLines: ['From noise', 'to signal.'],
      sub: 'We install anticipatory capacity in organizations that need to decide under uncertainty. Our own methodology, unconventional antennas and a dashboard your team runs on its own.',
      positions: [
        [
          { b: 'Anticipating is not predicting.' },
          ' The future is not forecast: it is contested. We work where the decision is still reversible.',
        ],
        [
          { b: 'Method, not report.' },
          ' We do not hand over a document that leaves with whoever wrote it. We install a capacity that stays.',
        ],
      ],
      microcopy:
        'No cost and no prior quote. First we check whether the problem we describe is the one that actually hurts.',
      frames: ['Noise', 'Method', 'Signal'],
    },

    problem: {
      h2: 'Your organization already produces more information than it can read.',
      body: 'This is not a data problem. It is a hierarchy problem. Everything arrives at the same level: the minutes, the newsletter, the press release, the conversation on the ground. And when something really matters, it is noticed late.',
      symptomsLabel: ['Three symptoms', '01 — 03'],
      symptoms: [
        {
          title: 'You reach the window late',
          text: 'The vote, the public consultation or the cabinet reshuffle has already happened by the time the analysis is ready.',
        },
        {
          title: 'Every area has its own reading',
          text: 'Three teams working on the same issue cannot sign off on a single common position.',
        },
        {
          title: 'You cannot demonstrate influence',
          text: 'You know you had an effect. You have no way to show it with evidence to a board or a funder.',
        },
      ],
      close: 'None of these is solved with more information. They are solved with a criterion for discarding.',
    },

    audience: {
      h2: 'The same method, three different conversations.',
      label: ['Who it is for', '01 — 03'],
      tracks: [
        {
          n: '01',
          title: 'International cooperation and foundations',
          text: 'A portfolio of counterparts producing knowledge that is valuable and scattered. It needs to be consolidated into common positions, and influence demonstrated with evidence to headquarters.',
          referenceLabel: 'Reference',
          reference: 'Ley Lafkenche · UN Human Rights',
          cta: 'See the case →',
        },
        {
          n: '02',
          title: 'Public sector, universities and local government',
          text: 'Deciding under pressure and with asymmetric information. It needs to anticipate what is coming in its sector, and how often to review it, without depending on an outside consultant every time.',
          referenceLabel: 'Reference',
          reference: 'Municipal Futures Council',
          cta: 'See the case →',
        },
        {
          n: '03',
          title: 'Companies and trade associations with public affairs',
          text: 'Affected by a regulatory process, a territorial conflict or a shift in how the public conversation is framed. It needs to see this take shape before it becomes news.',
          referenceLabel: 'Reference',
          reference: 'The future of education in the face of artificial intelligence',
          cta: 'See the case →',
        },
      ],
    },

    method: {
      h2: 'Five steps, always the same ones.',
      sub: 'The method does not change with the subject. The antennas do.',
      label: ['The method', '01 — 05'],
      steps: [
        {
          n: '01',
          title: 'We take in noise',
          text: 'Everything circulating around the subject: documents, minutes, press, conversations, territory.',
        },
        {
          n: '02',
          title: 'We identify signals',
          text: 'Which of it anticipates a decision, a shift in position or a window opening.',
        },
        {
          n: '03',
          title: 'We clear the noise',
          text: 'Whatever is not a signal is explicitly discarded. It is the step almost nobody takes, and the one that makes everything else legible.',
        },
        {
          n: '04',
          title: 'We structure',
          text: 'Signals are sorted into stable categories, comparable over time and across organizations.',
        },
        {
          n: '05',
          title: 'We visualize',
          text: 'Only at the end does the dashboard appear. It is the surface of the method, not the method.',
        },
      ],
      bridge: {
        text: 'The conceptual framework that orders this —spatialization, visualization, futurization— is in',
        link: 'System →',
      },
    },

    pilot: {
      h2: 'Twelve weeks. One single subject. Three teams.',
      label: ['The pilot', 'Twelve weeks'],
      isNot: {
        label: 'What it is not',
        text: 'An organizational transformation, nor work across your whole portfolio.',
      },
      is: {
        label: 'What it is',
        text: 'Three teams that already work well, on a subject where you have an accumulated body of work.',
      },
      deliverablesLabel: 'Three deliverables',
      deliverables: [
        {
          title: 'A packaged common position',
          text: 'Scattered knowledge consolidated into a single position, in four versions: technical, parliamentary, media and territorial.',
        },
        {
          title: 'Observation dashboard',
          text: 'Legislative and regulatory process, map of actors, bottlenecks, cultural signals and anticipatory alerts. Each team runs its own.',
        },
        {
          title: 'Baseline and influence protocol',
          text: 'You define what influence means. We make it measurable.',
        },
      ],
      risk: {
        tag: 'Capped-risk box',
        text: 'Success is defined before we start: four observable conditions, agreed at the outset and measured in week twelve. 3 out of 4 → we scale. If they are not met, the pilot closes and you pay only for what was carried out.',
      },
      foot: {
        text: 'The pilot is structured in blocks so it fits within a running budget. Figures to be agreed after the validation conversation.',
        link: 'See the four blocks →',
      },
    },

    cases: {
      h2: 'The method at work.',
      sub: 'Open processes, not finished monuments.',
      cards: [
        { n: '01', title: 'Ley Lafkenche' },
        { n: '02', title: 'Municipal Futures Council' },
        { n: '03', title: 'Education in the face of AI' },
      ],
      cta: 'See the cases →',
    },

    team: {
      h2: 'Who does this work.',
      sub: 'A small team. It is carried out by the same people who design it.',
      label: ['Team', '01 — 03'],
      members: [
        {
          name: 'Isabel Serra',
          role: 'Head of product',
          text: 'Architect. Product design and project leadership: scope, deliverables and the relationship with counterparts.',
        },
        {
          name: 'Genaro Cuadros',
          role: 'Influence coordination',
          text: 'Architect and urban planner. A career in urban and territorial public policy in Chile; director of the previous projects.',
        },
        {
          name: 'Development team',
          role: 'Engineering and dashboard',
          text: 'They build the dashboard and the processing routines. They work with AI tools, which lets the product be iterated in days rather than months.',
        },
      ],
    },

    closing: {
      h2: 'One hour to validate the diagnosis.',
      body: 'Before quoting anything we want to check two things: whether the problem we describe is the one that actually hurts, and how you define the influence you want to measure.',
      cta: 'Book the conversation',
    },
  },

  services: {
    meta: {
      title: 'Services · Utopía Lab',
      description:
        'Four blocks of work, contracted together or separately: exploration and data, foresight analysis, decision and influence. Plus the observation dashboard and its design rules.',
    },
    kicker: 'How it is contracted',
    titleLines: ['Four', 'blocks.'],
    sub: 'Contracted together or separately.',
    lead: ['Each block resolves the previous one. ', { b: 'You can stop at any of them' }, '.'],

    tracksLabel: ['The four blocks', '01 — 04'],
    deliverableLabel: 'Deliverable',
    durationLabel: 'Duration',
    tracks: [
      {
        n: '01',
        name: 'Exploration and data',
        text: 'Gathering and structuring sources on a subject. You need this data; we hand it over ordered and comparable.',
        deliverable: 'Structured database + map of sources',
        duration: '3–4 weeks',
      },
      {
        n: '02',
        name: 'Foresight analysis and prioritization',
        text: 'Possible scenarios, bottlenecks and a ranking of signals. What matters and what does not, with the criterion made explicit.',
        deliverable: 'Foresight report + observation dashboard',
        duration: '4–6 weeks',
      },
      {
        n: '03',
        name: 'Decision',
        text: 'The block almost nobody offers. We design how the decision gets made: who takes part, with what information and under what conditions of symmetry.',
        deliverable: 'Futures Council installed + deliberation protocol',
        duration: '4 weeks',
      },
      {
        n: '04',
        name: 'Influence',
        text: 'What counts as influence, and where. Agreed at the outset, measured at the close, reusable across the rest of the portfolio.',
        deliverable: 'Baseline + influence protocol + one-page evidence document',
        duration: 'Cross-cutting',
      },
    ],
    note: 'This is a tool within an influence plan. It is not the plan: the strategy remains yours.',

    dashboard: {
      label: ['The dashboard', 'Three design rules'],
      h2: 'Three design rules.',
      rules: [
        {
          title: 'Neither a tweet nor a book',
          text: 'Each view reads in a minute and can be opened all the way down to the source.',
        },
        {
          title: 'At the pace of the decision',
          text: 'A monthly to quarterly cycle, with a subset of weekly alerts.',
        },
        {
          title: 'Mobile-first, no excuses',
          text: 'People will look at it on their phone, in the field and between meetings.',
        },
      ],
      clarification:
        'Who sees what is co-defined in the initial diagnostic. This is observation of the environment, not monitoring of people or organizations.',
    },

    organization: {
      label: ['How we are organized', 'U-Lab · U-Sync · U-NinA'],
      h2: 'U-Lab thinks · U-Sync observes · U-NinA connects.',
      intro:
        'Utopía Lab has no departments: it has devices. A department is an administrative division; a device is a function that produces. This is useful information for someone who has already decided to work with us.',
      three: [
        {
          name: 'U-Lab',
          verb: 'Thinks',
          text: 'The intellectual engine. It produces the knowledge the rest of the Lab operates: the research that grounds the Utopia System, the methodologies that make it applicable, and the training that installs it in teams and institutions.',
        },
        {
          name: 'U-Sync',
          verb: 'Observes',
          text: 'The signals observatory. It reads regulatory, territorial, institutional and budgetary signals to recognize where a process is heading while it is still reversible. Telling the hinge decision from the noise is its central operation.',
        },
        {
          name: 'U-NinA',
          verb: 'Connects',
          text: 'The articulation network. It links the work to those who decide and those who contest —institutions, communities, universities, organizations— because knowledge that does not circulate changes no decision.',
        },
      ],
    },

    faq: {
      label: ['Frequently asked questions', '01 — 06'],
      items: [
        {
          id: 'ia',
          q: 'Is this just another consultancy with ChatGPT on top?',
          a: 'We do not train models. We use existing models with our own contexts to obtain and structure information that used to be expensive to get. What is not replicable is the methodology and the criterion for ranking.',
        },
        {
          id: 'foda',
          q: 'How is this different from a SWOT or a PESTEL?',
          a: 'Those frameworks organize what you already know. We work on what has not yet been declared: cultural signals, gaps, shifts in position that are not announced yet.',
        },
        {
          id: 'tablero',
          q: 'What if we end up with a dashboard nobody looks at?',
          a: 'That is the real risk and we treat it as such. That is why the rhythm is set to that of your decisions, each view reads in a minute, and one of the success criteria is that your team runs it without us.',
        },
        {
          id: 'costo',
          q: 'How much does it cost?',
          a: 'It depends on the scope, the number of teams and the antennas that need installing. We set figures after the diagnostic hour. The pilot is structured in blocks so it fits within a running budget.',
        },
        {
          id: 'requisitos',
          q: 'What do you need from us?',
          a: 'A subject, a counterpart team and access to what you already produce. We provide the rest.',
        },
        {
          id: 'nombre',
          q: 'Why “Utopía Lab”?',
          a: 'Because we work on the distance between what an organization wants and what it can do. Closing that gap is the objective; the rest is method.',
        },
      ],
    },
  },

  cases: {
    meta: {
      title: 'Cases · Utopía Lab',
      description:
        'The method at work: Ley Lafkenche, the Municipal Futures Council, the future of education in the face of AI, and the Transantiago roundtable. Context, intervention and result.',
    },
    kicker: 'The method at work',
    titleLines: ['The method', 'at work.'],
    sub: 'Open processes, not finished monuments.',
    lead: ['Each one is told the same way: ', { b: 'context, intervention, result' }, '.'],

    templateLabel: ['How each case is told', '01 — 04'],
    templateIntro: 'The same template for all of them, with no exceptions.',
    templateSteps: [
      { n: '01', title: 'Context', text: 'What was at stake and who was deciding.' },
      { n: '02', title: 'Intervention', text: 'Which antennas were installed and what was discarded.' },
      { n: '03', title: 'Result', text: 'What was left installed and what can be verified.' },
      { n: '04', title: 'What it proved', text: 'The methodological lesson.' },
    ],

    casesLabel: ['The cases', '01 — 04'],
    provedLabel: 'What it proved',
    cases: [
      {
        n: '01',
        title: 'Ley Lafkenche',
        subtitle: 'Rights and territory',
        text: 'Systemic analysis of the conflict between the coastal edge, Indigenous peoples and productive activity. The product was delivered to the legal advocacy team of the UN High Commissioner for Human Rights.',
        proved: 'The method in a conflict of high legal and territorial density.',
      },
      {
        n: '02',
        title: 'Municipal Futures Council',
        subtitle: 'Public foresight',
        text: 'Installing anticipatory capacity in local government: which signals to watch and how often to review them.',
        proved: 'Leaving the instrument installed with the client.',
      },
      {
        // TODO (content): rewrite using the four-step template —context,
        // intervention, result, what it proved—. The text below is what was
        // already published under Interventions; this is the only case that
        // can carry the companies-and-trade-associations track, so it should
        // end up the best documented of the four.
        n: '03',
        title: 'The future of education in the face of artificial intelligence',
        text: 'A single foresight device applied to the future of different fields of training —pedagogy, art, architecture, design— faced with a technology that no longer alters the environment of the work, but its very object. It does not forecast the end of any discipline: it makes visible the gap between naming the future and having a method to decide it, and makes it debatable. A method replicated in institutions in Chile and abroad.',
        status: 'Being documented',
      },
      {
        n: '04',
        title: 'Mesa del Transantiago',
        subtitle: 'Multi-actor coordination',
        text: 'Scattered signals from multiple organizations turned into a single common position, from the Laboratorio de Desarrollo Urbano.',
        proved: 'Coordination between different organizations.',
      },
    ],
  },

  system: {
    meta: {
      title: 'Utopia System · Utopía Lab',
      description:
        'The Utopia System: the conceptual framework of Utopía Lab. The triad —spatialization, visualization, futurization—, the five operations of the method, the five principles and the five dimensions of work.',
    },
    kicker: 'The conceptual framework',
    titleLines: ['Utopia', 'System'],
    header: [
      'We do not sell reports. We install ',
      { b: 'infrastructure' },
      ': an anticipatory capacity that keeps operating once the project ends. The project is the vehicle; the infrastructure is the result.',
    ],
    sub: 'The theoretical device that orders the whole Lab: how the production of futures is read.',
    lead: ['A system for reading how societies ', { b: 'produce futures' }, '.'],
    note: 'Utopia not as a model of the correct society, but as a form of anticipatory knowledge: a critical, situated method for reading, making visible and opening what is to come. Its premise: anticipating is not predicting. The System operates through a triad of chained operations.',
    triadLabel: ['Operational triad', '01 — 03'],
    triad: [
      {
        n: '01',
        question: 'How is the future inscribed in the territory?',
        name: 'Spatialization',
        def: 'Reading a field —a neighbourhood, a law, an organization, a conflict, a transition— as the place where the future is already at stake. It situates the analysis in fields of force, materialities and scales: situate before projecting.',
      },
      {
        n: '02',
        question: 'How does it become visible, imaginable and debatable?',
        name: 'Visualization',
        def: 'Making the system of the possible visible: translating complex processes into legible, shareable forms, so that what does not yet exist becomes debatable and can be projected.',
      },
      {
        n: '03',
        question: 'How are possible horizons built and contested?',
        name: 'Futurization',
        def: 'Opening horizons of the future without locking them into a forecast. Anticipating is not predicting: it is widening and contesting what may happen.',
      },
    ],
    methodLabel: ['Method · five operations', 'M1 — M5'],
    methodIntro: [
      'The triad says how the Lab ',
      { b: 'reads' },
      ' a field. The five operations say how it ',
      { b: 'works' },
      ' it: the process that turns that reading into decisions. They run as a full sequence or modularly.',
    ],
    producesLabel: 'Produces',
    ops: [
      {
        n: 'M1',
        name: 'Anticipate',
        def: 'Reading the emergent and detecting changes while they are still weak —before they turn into crisis or irreversibility.',
        produces: ['weak signals', 'trends', 'risks', 'tensions'],
      },
      {
        n: 'M2',
        name: 'Explore',
        def: 'Opening the space of possible futures, instead of projecting the present forward as if it were destiny.',
        produces: ['alternative scenarios', 'bifurcations', 'critical uncertainties'],
      },
      {
        n: 'M3',
        name: 'Critique',
        def: 'Denaturalizing the present and the futures taken for granted: making visible who decides, with what interests and under which frameworks.',
        produces: ['assumptions revealed', 'power analysis', 'ideological frameworks in view'],
      },
      {
        n: 'M4',
        name: 'Participate',
        def: 'Co-building futures with the diverse actors who inhabit a territory or an institution, not deciding for them.',
        produces: ['shared visions', 'conflicts and agreements', 'social legitimacy'],
      },
      {
        n: 'M5',
        name: 'Project',
        def: 'Orienting action towards desirable futures: turning analysis into criteria that sustain a decision, not into a report that gets filed away.',
        produces: ['normative horizons', 'decision criteria', 'roadmap'],
      },
    ],

    principlesLabel: ['Five principles', 'What the Lab holds'],
    principles: [
      {
        n: '01',
        title: 'Anticipating is not predicting',
        text: 'The future is not forecast: it is contested. The Lab does not calculate the most probable outcome; it opens the field of the possible while it is still reversible. Predicting closes; anticipating keeps the decision open.',
      },
      {
        n: '02',
        title: 'Utopia is a method, not a model',
        text: 'Utopia does not name a correct society to arrive at, but a form of knowledge: a way of thinking what is not yet without imposing it as the only truth. The Lab does not produce closed plans; it produces the capacity to imagine with rigour.',
      },
      {
        n: '03',
        title: 'Open futures, do not close them',
        text: 'Every future stated as certainty discards the rest. The Lab’s work is to widen the horizon of the possible and make it debatable, not to reduce it to a single scenario. Openness is the condition for the future to remain public.',
      },
      {
        n: '04',
        title: 'Situate anticipation',
        text: 'There is no single future and no single time. The Lab thinks from Latin America the plurality of temporalities that dominant anticipatory thinking tends to flatten. Futures have a date, a geography and a language: to situate is to acknowledge from where and from when one imagines.',
      },
      {
        n: '05',
        title: 'Infrastructure, not author',
        text: 'The capacity to anticipate cannot depend on a single will. The Lab is designed as permanent, transferable infrastructure: a method that stays installed beyond whoever applies it. To democratize anticipation is to make it independent of the person who carries it.',
      },
    ],
    dimsLabel: ['Five dimensions', 'The problem · what the Lab contributes'],
    problemHead: 'The problem',
    contributionHead: 'What Utopía Lab contributes',
    dims: [
      {
        n: '01',
        name: 'Academic',
        claim:
          'Installing anticipatory capacity in universities, research centres and academic communities.',
        problems: [
          'Universities produce knowledge about the future but rarely develop the institutional capacity to act anticipatorily. Futures thinking is treated as an object of study, not as a competence to be installed.',
          'The result: academic communities that know a great deal about tomorrow but decide as if the present were stable.',
        ],
        contributions: [
          {
            title: 'Reconnects research and territory',
            text: 'Restores the long term as a real horizon for academic production, tied to the concrete challenges of territories.',
          },
          {
            title: 'Installs futures thinking as a competence',
            text: 'Operational capacity, not an object of study: teams that know how to think scenarios, read signals and guide decisions with method.',
          },
          {
            title: 'Builds the institution’s own orientation',
            text: 'A long-term vision that is not a management plan, but a horizon guiding what to research, with whom and for what.',
          },
          {
            title: 'Activates situated Latin American knowledge',
            text: 'Introduces the critical, decolonial perspective into futures methods, against the hegemony of models from the North.',
          },
          {
            title: 'Sustains meaningful trajectories',
            text: 'Long-term coherence for researchers and teachers, in a field marked by precarity and immediate results.',
          },
        ],
      },
      {
        n: '02',
        name: 'Political',
        claim:
          'Anticipatory reading of laws, policies and public decisions while they are still being decided.',
        problems: [
          'Every law inscribes one future and discards others, but that inscription is never made explicit: the text is discussed, not the future it installs. By the time the effect becomes visible, the decision is already irreversible.',
          'The result: policies that produce long-term effects nobody decided, and that nobody can be held to.',
        ],
        contributions: [
          {
            title: 'Makes explicit the future a rule inscribes',
            text: 'Translates the legal text into the future it produces: which trajectories it opens, which it closes, and for whom.',
          },
          {
            title: 'Reads the system, not the episode',
            text: 'Analyses the regulatory, institutional and discursive fabric that produces a conflict, not its latest public manifestation.',
          },
          {
            title: 'Works on public policy, not only on the rule',
            text: 'A law is one point in the process: the future is also inscribed in programme design, budget and implementation.',
          },
          {
            title: 'Anticipates while it is still reversible',
            text: 'Identifies the hinge-decision before it closes: the point where the future still admits correction.',
          },
          {
            title: 'Produces traceable arguments',
            text: 'Defensible pieces with a genealogy —not slogans or forecasts— usable in the actual legislative process.',
          },
          {
            title: 'Democratizes the capacity to anticipate',
            text: 'Puts the method at the disposal of those contesting decisions designed without them: communities and territorial actors.',
          },
        ],
      },
      {
        n: '03',
        name: 'Business',
        claim:
          'Anticipating trajectories, capabilities and emerging fields of activity in the organizations and teams that decide.',
        problems: [
          'Organizations plan by projecting the present: they extrapolate trends and call that strategy. It works while the environment changes; it fails when what changes is the object of the work itself.',
          'The result: teams with plenty of information about the future and no capacity of their own to decide within it.',
        ],
        contributions: [
          {
            title: 'Distinguishes strategy from programme',
            text: 'Separates what can be planned from what can only be anticipated, and restores the capacity to operate when the plan no longer applies.',
          },
          {
            title: 'Installs method, does not deliver a report',
            text: 'Anticipatory capacity stays inside the organization, as a competence of its teams and not as an external dependency.',
          },
          {
            title: 'Anticipates the transformation of the craft',
            text: 'Works on the changes that alter not the environment of the work but its very object, and makes visible the gap between naming them and knowing how to decide on them.',
          },
          {
            title: 'Identifies niches of future development',
            text: 'Recognizes fields that open before they have a name or a formed demand: it does not measure an existing market, it reads what is producing it.',
          },
          {
            title: 'Opens the field of the possible',
            text: 'Widens the range of recognizable trajectories instead of reducing the decision to the most probable scenario.',
          },
          {
            title: 'Sustains the decision over time',
            text: 'Leaves the organization’s own criteria and devices installed, so that reading the long term does not depend on each new consultancy.',
          },
        ],
      },
      {
        n: '04',
        name: 'Territorial',
        claim: 'The city and the territory as the place where the future is already being decided.',
        problems: [
          'Territory is administered as a given setting —it is zoned, regulated, managed— when it is where the future is materially inscribed. And participation arrives once the essentials have been decided, turned into validation of the irreversible.',
          'The result: communities inhabiting futures they neither imagined nor discussed.',
        ],
        contributions: [
          {
            title: 'Situates before projecting',
            text: 'Reads the territory as a field of forces —materialities, scales, conflicts—, not as a neutral surface on which to apply solutions from elsewhere.',
          },
          {
            title: 'Makes explicit which future space inscribes',
            text: 'Makes visible the future a plan or a public work fixes in the ground: which trajectories it enables, which it closes, and for whom.',
          },
          {
            title: 'Turns participation into imagination',
            text: 'Moves communities from validating what has been decided to imagining what is possible, and makes it debatable.',
          },
          {
            title: 'Recognizes the plurality of temporalities',
            text: 'There is no single time in a territory: it brings into the analysis the temporalities that planning tends to flatten.',
          },
          {
            title: 'Intervenes while it is still contested',
            text: 'Acts within the open process, where the conflict still admits another outcome.',
          },
        ],
      },
      {
        n: '05',
        name: 'Institutional',
        claim:
          'Designing devices that install anticipatory capacity permanently within the public apparatus.',
        problems: [
          'Institutions anticipate in episodes: a commission, a plan, a consultancy. The government changes and the capacity leaves with those who carried it. There are no handover rules and no memory: each cycle rediscovers the long term and loses it again.',
          'The result: institutions deciding twenty-five years ahead with devices that last four.',
        ],
        contributions: [
          {
            title: 'Designs infrastructure, not consultancy',
            text: 'Bodies and procedures with an existence of their own —councils, observatories, protocols— that exercise the anticipatory function continuously.',
          },
          {
            title: 'Builds handover rules',
            text: 'Writes continuity into the design: the capacity to anticipate survives a change of government and does not depend on a single will.',
          },
          {
            title: 'Connects the future with the instrument',
            text: 'Links anticipatory work to the formal instruments, so that the scenario enters where decisions are actually made.',
          },
          {
            title: 'Installs signal observation',
            text: 'The capacity to read early which future a process is pushing towards, distinguishing the hinge-decision from noise.',
          },
          {
            title: 'Democratizes long-term deliberation',
            text: 'The future stops being a reserved technical competence and becomes a matter of public deliberation.',
          },
        ],
      },
    ],
    place: {
      tag: 'Place of enunciation',
      h2: 'Thought from Latin America, not as periphery.',
      p: 'The Lab operates from Santiago de Chile, and from Latin America as a place of enunciation: not as a margin applying frameworks from elsewhere, but as a site that produces situated anticipatory thinking. The futures it imagines have a date, a geography and a language.',
    },
    bridge: {
      text: 'This is the framework. How it applies to a concrete subject, over twelve weeks, is in',
      link: 'The pilot →',
    },
  },

  thinking: {
    meta: {
      title: 'Thinking · Utopía Lab',
      description:
        'The thinking of Utopía Lab, by axis. Lines of thought and a Library of futures. Democratic infrastructure of futures.',
    },
    kicker: 'U-Lab thinks · Knowledge production',
    title: 'Thinking',
    sub: 'The Lab’s intellectual engine, by axis. Not an author’s bibliography —a position on the future.',
    lead: [
      'The Lab thinks along ',
      { b: 'five axes' },
      '. Each one is a position, not a topic; a way of reading the present in order to open its future.',
    ],
    linesLabel: ['Lines of thought', 'The Lab’s position'],
    lines: [
      {
        n: '01',
        title: 'Utopia System and anticipatory thinking',
        text: 'Utopia not as a model of the correct society, but as a form of knowledge: a way of anticipating without predicting and of opening futures without closing them into a forecast. It is the axis that grounds the Lab, where the Utopia System is developed —the device for reading, making visible and opening what is not yet.',
      },
      {
        n: '02',
        title: 'City, territory and futures',
        text: 'The city is the place where the future is already being decided. The Lab does not read it as a given setting but as a contested field: every plan, every rule and every edge inscribes one future and discards others. To think the city is to recognize which futures are being inscribed in space, and by whom.',
      },
      {
        n: '03',
        title: 'Planning, power and imagination',
        text: 'To order space is to exercise power over a community’s time. Against the technocratism that reduces the city to management, and the imposed utopia that reduces it to a closed plan, the Lab claims imagination as a political faculty: conceiving what does not yet exist without imposing it as the only truth.',
      },
      {
        n: '04',
        title: 'Latin American temporalities',
        text: 'There is no single future and no single time. The Lab thinks from Latin America the plurality of temporalities that dominant anticipatory thinking tends to flatten: futures have a date, a geography and a language. To situate anticipation is to acknowledge from where and from when one imagines.',
      },
      {
        n: '05',
        title: 'Signals, systems and complexity',
        text: 'Reading the present as a system in order to anticipate its transformations. The Lab observes signals —regulatory, territorial, institutional— not to predict their outcome, but to recognize early which future a process is pushing towards while it is still reversible. To think in complexity is to distinguish the hinge-decision from noise.',
      },
    ],
    libraryLabel: ['Library of futures', 'Readings · curated by axis'],
    libraryTitle: 'What must be read to think each axis.',
    libraryIntro:
      'Not a catalogue of what the Lab has written, but a map of what it considers must be read. A library curated by axis —what to read, and from which of the Lab’s questions it is read—.',
    axes: [
      {
        n: '01',
        title: 'Utopia System and anticipatory thinking',
        question: 'How does one think what is not yet, without turning it into a forecast or a plan?',
        refs: [
          {
            author: 'Bloch',
            work: 'El principio esperanza',
            kind: 'book',
            year: '2004 [1959]',
            note: 'The Noch-Nicht: the not-yet-become as a category of knowledge.',
          },
          {
            author: 'Levitas',
            work: 'Utopia as Method',
            kind: 'book',
            year: '2013',
            note: 'Utopia as method: the formulation that founds the Lab’s position.',
          },
          {
            author: 'Mannheim',
            work: 'Utopía e ideología',
            kind: 'book',
            year: '2020 [1929]',
            note: 'Utopia as a consciousness that breaks the order, not as escape.',
          },
          {
            author: 'Koselleck',
            work: 'Futuro pasado',
            kind: 'book',
            year: '1993 [1979]',
            note: 'Space of experience and horizon of expectation: the future has a history.',
          },
          {
            author: 'Hinkelammert',
            work: 'Crítica de la razón utópica',
            kind: 'book',
            year: '2002 [1984]',
            note: 'The critique of utopia from Latin America.',
          },
          {
            author: 'Jameson',
            work: 'Arqueologías del futuro',
            kind: 'book',
            year: '2009',
            note: 'The difficulty of imagining as a political symptom.',
          },
          {
            author: 'Hölscher',
            work: 'El descubrimiento del futuro',
            kind: 'book',
            year: '2014',
            note: 'When and how the future became a thinkable object.',
          },
        ],
      },
      {
        n: '02',
        title: 'City, territory and futures',
        question: 'Which future does space inscribe, and who decided it?',
        refs: [
          {
            author: 'Gorelik',
            work: 'La ciudad latinoamericana',
            kind: 'book',
            year: '2022',
            note: 'The city as a figure of twentieth-century social imagination.',
          },
          {
            author: 'Rama',
            work: 'La ciudad letrada',
            kind: 'book',
            year: '1984',
            note: 'Urban order as the writing of power.',
          },
          {
            author: 'Romero',
            work: 'Latinoamérica: las ciudades y las ideas',
            kind: 'book',
            year: '2001',
            note: 'The ideas that built the cities of the continent.',
          },
          {
            author: 'Heffes (ed.)',
            work: 'Utopías urbanas',
            kind: 'book',
            year: '2013',
            note: 'Geopolitics of desire in Latin America.',
          },
          {
            author: 'Lefebvre',
            work: 'La producción del espacio',
            kind: 'book',
            year: '1974',
            note: 'Space as a social product, not as a given support.',
          },
          {
            author: 'Harvey',
            work: 'Spaces of Hope',
            kind: 'book',
            year: '2000',
            note: 'Utopia and city thought together: the space of hope.',
          },
          {
            author: 'Fishman',
            work: 'Urban Utopias in the Twentieth Century',
            kind: 'book',
            year: '1977',
            note: 'Urban utopias realized, and their reverse.',
          },
        ],
      },
      {
        n: '03',
        title: 'Planning, power and imagination',
        question: 'Why is ordering space an exercise of power over a community’s time?',
        refs: [
          {
            author: 'Scott',
            work: 'Seeing Like a State',
            kind: 'book',
            year: '1998',
            note: 'How imposed utopia destroys what it orders.',
          },
          {
            author: 'Pinder',
            work: 'Visions of the City',
            kind: 'book',
            year: '2005',
            note: 'Utopianism, power and imagination in twentieth-century urbanism.',
          },
          {
            author: 'Arboleda',
            work: 'Gobernar la utopía',
            kind: 'book',
            year: '2021',
            note: 'On planning and popular power.',
          },
          {
            author: 'Friedmann',
            work: 'The good city: in defense of utopian thinking',
            kind: 'article',
            year: '2000',
            note: 'The defence of utopian thinking in planning.',
          },
          {
            author: 'Miraftab',
            work: 'Insurgent planning',
            kind: 'article',
            year: '2009',
            note: 'Planning from insurgency rather than from the State.',
          },
          {
            author: 'Davoudi',
            work: 'Prefigurative planning',
            kind: 'article',
            year: '2023',
            note: 'Anticipating by practising the future one wants.',
          },
          {
            author: 'Hoch',
            work: 'Utopia, scenario, and plan',
            kind: 'article',
            year: '2016',
            note: 'The relation between utopia, scenario and plan.',
          },
        ],
      },
      {
        n: '04',
        title: 'Latin American temporalities',
        question: 'From where and from when is the future imagined?',
        refs: [
          {
            author: 'Rivera Cusicanqui',
            work: "Ch'ixinakax utxiwa",
            kind: 'book',
            year: '2010',
            note: "The ch'ixi: coexistence of heterogeneous times without synthesis.",
          },
          {
            author: 'Krenak',
            work: 'Futuro ancestral',
            kind: 'book',
            year: '2022',
            note: 'Listening, against the single future.',
          },
          {
            author: 'Quijano',
            work: 'Coloniality of power and Eurocentrism in Latin America',
            kind: 'article',
            year: '2000',
            note: 'Who was left outside the time of progress.',
          },
          {
            author: 'Aínsa',
            work: 'Espacios alternativos: una utopía desde y para América Latina',
            kind: 'article',
            year: '2015',
            note: 'Utopia enunciated from the continent.',
          },
          {
            author: 'Viveiros de Castro',
            work: 'La mirada del jaguar',
            kind: 'book',
            year: '2013',
            note: 'Other possible worlds, other ontologies of time.',
          },
          {
            author: 'Gavilán Pinto',
            work: 'El modelo mental de los pueblos indígenas',
            kind: 'article',
            year: '2009',
            note: 'Indigenous temporalities against linear time.',
          },
          {
            author: 'Dinerstein',
            work: 'The Politics of Autonomy in Latin America',
            kind: 'book',
            year: '2015',
            note: 'The organization of hope as political practice.',
          },
        ],
      },
      {
        n: '05',
        title: 'Signals, systems and complexity',
        question: 'How to distinguish the hinge-decision from noise, while it is still reversible?',
        refs: [
          {
            author: 'Morin',
            work: 'Introducción al pensamiento complejo',
            kind: 'book',
            year: '1990',
            note: 'Strategy versus programme; cognitive democracy.',
          },
          {
            author: 'Beer',
            work: 'Designing Freedom',
            kind: 'book',
            year: '1974',
            note: 'Cybernetics as the design of freedom, not of control.',
          },
          {
            author: 'Medina',
            work: 'Cybernetic Revolutionaries',
            kind: 'book',
            year: '2011',
            note: 'Synco: the Chilean genealogy that founds U-Sync.',
          },
          {
            author: 'Meadows',
            work: 'Thinking in Systems',
            kind: 'book',
            year: '2008',
            note: 'Leverage points: where to intervene in a system.',
          },
          {
            author: 'Ansoff',
            work: 'Managing Strategic Surprise by Response to Weak Signals',
            kind: 'article',
            year: '1975',
            note: 'The origin of the notion of the weak signal.',
          },
        ],
      },
    ],
    thesis: {
      tag: 'Doctoral research · IDEA–USACH · ongoing',
      h2: 'The Lab’s thinking is grounded in research.',
      p: 'The thesis’s visual path traces where the device comes from: from utopia as knowledge to the Latin American city, all the way to the triad of the Utopia System.',
      cta: 'See the thesis path →',
    },
  },
}
