import type { Content } from './types'

/**
 * Nota sobre la Biblioteca de futuros: los títulos de las obras se dejan tal
 * como aparecen en el original (edición citada por el Lab). Solo se traduce la
 * glosa de cada referencia. Si el Lab prefiere citar las ediciones en inglés,
 * hay que cambiar `work` y `year` de cada entrada aquí.
 */
export const en: Content = {
  common: {
    langName: 'English',
    nav: {
      about: 'What it is',
      system: 'System',
      interventions: 'Interventions',
      devices: 'Devices',
      thinking: 'Thinking',
    },
    home: 'Home',
    backHome: '← Back to home',
    book: 'Book a meeting',
    bookShort: 'Book',
    talk: "Let's talk →",
    tagline: 'Utopia as method',
    switchLang: 'Change language',
  },

  home: {
    meta: {
      title: '(U)² Lab · Democratic infrastructure of futures',
      description:
        '(U)² Lab · Anticipatory intelligence. Democratic infrastructure of futures. Utopia as method: reading, making visible and opening what is to come.',
    },
    kicker: '(U)² Lab · Urban Utopia Laboratory',
    titleLines: ['Democratic', 'infrastructure', 'of futures.'],
    claim: 'Anticipatory intelligence where the future is still being decided.',
    principles: [
      [
        { b: 'Anticipating is not predicting.' },
        ' The future is not forecast: it is contested. The Lab opens the field of the possible while the decision is still reversible.',
      ],
      [
        { b: 'Method, not report.' },
        ' The Lab does not deliver a document that leaves with whoever wrote it. It installs a capacity that stays.',
      ],
    ],
    index: [
      {
        n: '01',
        page: 'about',
        title: 'What it is',
        desc: 'An infrastructure, not a consultancy. Five principles, five dimensions of work and a place of enunciation: Latin America.',
      },
      {
        n: '02',
        page: 'system',
        title: 'Utopia System',
        desc: 'The conceptual framework that orders the whole Lab: the triad that reads a field —spatialization, visualization, futurization— and the five operations that work it.',
      },
      {
        n: '03',
        page: 'interventions',
        title: 'Interventions',
        desc: 'The method at work: a law under dispute, the future of education in the face of artificial intelligence, a municipal futures council. Open processes, not finished monuments.',
      },
      {
        n: '04',
        page: 'devices',
        title: 'Devices',
        desc: 'How the Lab organizes itself to last. One matrix and three functions: U-Lab thinks, U-Sync observes, U-NinA connects.',
      },
      {
        n: '05',
        page: 'thinking',
        title: 'Thinking',
        desc: 'The intellectual engine, by axis. Five lines that are positions on the future, a curated library and the path of the doctoral research.',
      },
    ],
    closing: {
      h2: 'The future is not administered: it is contested.',
      p: 'The Lab works with public institutions, universities, agencies and organizations that need to decide under uncertainty. It does not sell a report: it installs a capacity that remains when the work is over.',
    },
  },

  about: {
    meta: {
      title: 'What it is · (U)² Lab',
      description:
        '(U)² Lab: a democratic infrastructure of futures. Method, not consultancy. Five principles, five dimensions and a place of enunciation.',
    },
    kicker: 'The Lab in one definition',
    title: 'What it is',
    sub: 'A democratic infrastructure of futures. A method that stays installed, not a report that leaves with whoever wrote it.',
    lead: ['(U)² Lab installs ', { b: 'the capacity to anticipate' }, ' where decisions are made.'],
    note: 'It is not a consultancy. A consultancy delivers a report that leaves with whoever wrote it; the Lab installs a method that stays. It does not sell forecasts or closed answers: it builds the capacity to read, make visible and contest the future, and leaves it installed in those who decide. Conceptual depth is not an obstacle to operating —it is what distinguishes an anticipatory reading from an opinion about what is to come.',
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
    contributionHead: 'What (U)² Lab contributes',
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
  },

  system: {
    meta: {
      title: 'Utopia System · (U)² Lab',
      description:
        'Utopia System: the conceptual framework of (U)² Lab. The triad —spatialization, visualization, futurization— and the five operations of the method.',
    },
    kicker: 'The conceptual framework',
    titleLines: ['Utopia', 'System'],
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
    invite: {
      h2: 'Working with the Lab.',
      p: 'The Lab activates this method with public institutions, universities, agencies and companies that need to decide under uncertainty. It does not sell a report: it installs a capacity that remains when the work is over.',
    },
  },

  interventions: {
    meta: {
      title: 'Interventions · (U)² Lab',
      description:
        '(U)² Lab interventions: the method operating on territories, institutions and fields where the future is still being decided.',
    },
    kicker: 'The method at work',
    titleLines: ['Interven-', 'tions'],
    sub: 'The method operating where the future is still being decided: a law, a municipality, a field of education.',
    lead: [
      'Not finished monuments. ',
      { b: 'Open processes' },
      ', where the future is still contested.',
    ],
    note: 'Each intervention carries the triad operation that best embodies it —spatialize, visualize, futurize— and its dimension of work. All are under development: they are presented as ongoing processes, not as closed results. Clients are not named; the conflict and the territory are.',
    casesLabel: ['Cases', 'In development'],
    cases: [
      {
        op: '01 · Spatialization',
        dim: 'Political and territorial',
        status: 'In development',
        title: 'A territorial recognition law under dispute',
        desc: 'Anticipatory reading of a conflict over the coastal edge. Law 20.249 recognizes the customary use of the coastal peoples, and today faces an attempt at modification that invokes its slowness. The Lab analyses the system —regulatory, institutional and discursive— that produces that slowness, and translates it into traceable arguments for the legislative process under way. Situating the coast as the place where the future is already being decided.',
      },
      {
        op: '02 · Visualization',
        dim: 'Academic',
        status: 'In development',
        title: 'Futures of education in the face of artificial intelligence',
        desc: 'A single foresight device applied to the future of different fields of training —pedagogy, art, architecture, design— faced with a technology that no longer alters the environment of the work, but its very object. It does not forecast the end of any discipline: it makes visible the gap between naming the future and having a method to decide it, and makes it debatable. A method replicated in institutions in Chile and abroad.',
      },
      {
        op: '03 · Futurization',
        dim: 'Institutional',
        status: 'In development',
        title: 'Municipal Futures Council',
        desc: 'In a municipality of Santiago, the Lab designs an advisory body for deciding twenty-five years ahead: a plural council that produces diagnosis, scenarios and vision, and connects them with the formal instruments of planning. Its defining feature is continuity —handover rules between administrations so that the capacity to anticipate does not depend on a single will—. Democratic infrastructure of futures made into a municipal device.',
      },
    ],
    closing: [
      'The same method also operates in the ',
      { b: 'business and organizational dimension' },
      ' —anticipating trajectories and capabilities in the teams that decide— and in the ',
      { b: 'anticipatory management of public investment' },
      '. Ongoing processes, documented as they mature.',
    ],
  },

  devices: {
    meta: {
      title: 'Devices · (U)² Lab',
      description:
        'The devices of (U)² Lab: U-Lab thinks, U-Sync observes, U-NinA connects. One matrix and three functions of a democratic infrastructure of futures.',
    },
    kicker: 'How the Lab is organized',
    titleLines: ['Devices'],
    sub: 'One matrix and three functions. Thinking, observing, connecting: the three operations of an infrastructure of futures.',
    lead: ['The Lab has no departments. It has ', { b: 'devices' }, '.'],
    note: 'A department is an administrative division; a device is a function that produces. (U)² Lab is the matrix —it closes and signs everything the Lab produces— and operates through three devices that exercise three distinct, chained functions: one thinks, one observes, one connects. The structure is the form the method takes when it must outlast whoever applies it.',
    matrixRole: 'Matrix · closes and signs',
    three: [
      { name: 'U-Lab', verb: 'Thinks' },
      { name: 'U-Sync', verb: 'Observes' },
      { name: 'U-NinA', verb: 'Connects' },
    ],
    listLabel: ['The three devices', '01 — 03'],
    producesLabel: 'What it produces',
    items: [
      {
        n: '01',
        name: 'U-Lab',
        verb: 'Thinks',
        claim: 'The intellectual engine. Where the method is built before it is applied.',
        paragraphs: [
          'U-Lab produces the knowledge the rest of the Lab operates: the research that grounds the Utopia System, the methodologies that translate theory into applicable devices, and the writing that makes them public and debatable.',
          'It is not a study area attached to practice: it is the condition for practice not to degrade into technique. Conceptual depth does not delay the intervention —it makes it defensible.',
        ],
        bullets: [
          'Research and theoretical development of the Utopia System',
          'Anticipation methodologies transferable to real contexts',
          'Academic writing and editorial production',
          'Training: installing the method in teams and institutions',
        ],
        link: 'See U-Lab →',
      },
      {
        n: '02',
        name: 'U-Sync',
        verb: 'Observes',
        claim: 'The signals observatory. Reading early which future a process is pushing towards.',
        paragraphs: [
          'U-Sync observes signals —regulatory, territorial, institutional, budgetary— not to predict their outcome, but to recognize the direction of a process while it is still reversible. Distinguishing the hinge-decision from noise is its central operation.',
          'Observation is a capacity, not an archive. What U-Sync produces is not a record of what happened, but the anticipatory reading of what a process is about to make irreversible.',
        ],
        bullets: [
          'Systematic observation of signals of change',
          'Convergence analysis: when several signals point to the same future',
          'Anticipatory reading of regulatory and institutional processes under way',
          'Periodic reports and syntheses for public circulation',
        ],
        link: 'See U-Sync →',
      },
      {
        n: '03',
        name: 'U-NinA',
        verb: 'Connects',
        claim: 'The articulation network. Knowledge that does not circulate changes no decision.',
        paragraphs: [
          'U-NinA articulates the Lab with those who decide and those who contest: institutions, communities, universities, organizations. It builds the alliances that let the method reach where it is needed, and not only where it is already understood.',
          'It is the device that guarantees anticipation is effectively democratic: without circulation, the capacity to imagine the future stays concentrated in those who already had it.',
        ],
        bullets: [
          'Institutional and academic alliances, national and international',
          'Circulation of knowledge towards those who decide',
          'Influence on public processes under way',
          'Articulation with territorial actors and communities',
        ],
        link: 'See U-NinA →',
      },
    ],
    closing: {
      tag: 'Why this structure',
      h2: 'The form is the argument.',
      p: 'Thinking without observing produces theory without a world. Observing without connecting produces diagnoses nobody uses. Connecting without thinking produces influence without foundation. The three devices exist because an infrastructure of futures only works if the three operations sustain one another —and if none depends on a single person to keep existing.',
    },
  },

  thinking: {
    meta: {
      title: 'Thinking · (U)² Lab',
      description:
        'The thinking of (U)² Lab, by axis. Lines of thought and a Library of futures. Democratic infrastructure of futures.',
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
