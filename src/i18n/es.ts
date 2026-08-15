import type { Content } from './types'

export const es: Content = {
  common: {
    langName: 'Español',
    nav: {
      services: 'Servicios',
      cases: 'Casos',
      system: 'Sistema',
      team: 'Equipo',
      thinking: 'Pensamiento',
    },
    home: 'Inicio',
    book: 'Agendar una hora de diagnóstico',
    bookShort: 'Agendar',
    switchLang: 'Cambiar idioma',
    footer: {
      location: 'Santiago de Chile',
      nameLink: 'Qué significa el nombre',
    },
  },

  home: {
    meta: {
      title: 'Utopía Lab · Inteligencia anticipatoria para decidir bajo incertidumbre',
      description:
        'Instalamos capacidad de anticipación en organizaciones: tablero de observación, posición común y protocolo de incidencia medible. Piloto de doce semanas. Santiago de Chile.',
    },

    hero: {
      kicker: 'Utopía Lab · Inteligencia anticipatoria',
      titleLines: ['Del ruido', 'a la señal.'],
      sub: 'Instalamos capacidad de anticipación en organizaciones que necesitan decidir bajo incertidumbre. Metodología propia, antenas no convencionales y un tablero que su equipo opera solo.',
      positions: [
        [
          { b: 'Anticipar no es predecir.' },
          ' El futuro no se pronostica: se disputa. Trabajamos donde la decisión todavía es reversible.',
        ],
        [
          { b: 'Método, no informe.' },
          ' No entregamos un documento que se va con quien lo hizo. Instalamos una capacidad que queda.',
        ],
      ],
      microcopy:
        'Sin costo y sin cotización previa. Primero contrastamos si el problema que describimos es el que le duele.',
      frames: ['Ruido', 'Método', 'Señal'],
    },

    problem: {
      h2: 'Su organización ya produce más información de la que alcanza a leer.',
      body: 'No es un problema de datos. Es un problema de jerarquía. Todo llega al mismo nivel: la minuta, el boletín, la nota de prensa, la conversación en terreno. Y cuando algo importa de verdad, se nota tarde.',
      symptomsLabel: ['Tres síntomas', '01 — 03'],
      symptoms: [
        {
          title: 'Llegan tarde a la ventana',
          text: 'La votación, la consulta pública o el cambio de gabinete ya ocurrió cuando el análisis está listo.',
        },
        {
          title: 'Cada área tiene su lectura',
          text: 'Tres equipos que trabajan el mismo tema no logran firmar una sola posición común.',
        },
        {
          title: 'No pueden demostrar incidencia',
          text: 'Saben que influyeron. No tienen cómo mostrarlo con evidencia ante un directorio o un financista.',
        },
      ],
      close: 'Ninguno se resuelve con más información. Se resuelven con un criterio para descartar.',
    },

    audience: {
      h2: 'El mismo método, tres conversaciones distintas.',
      label: ['Para quién', '01 — 03'],
      tracks: [
        {
          n: '01',
          title: 'Cooperación internacional y fundaciones',
          text: 'Una cartera de contrapartes que produce conocimiento valioso y disperso. Necesita consolidarlo en posiciones comunes y demostrar incidencia con evidencia ante su sede.',
          referenceLabel: 'Referencia',
          reference: 'Ley Lafkenche · ONU Derechos Humanos',
          cta: 'Ver el caso →',
        },
        {
          n: '02',
          title: 'Sector público, universidades y gobiernos locales',
          text: 'Decide bajo presión y con información asimétrica. Necesita anticipar qué se viene en su sector y con qué frecuencia revisarlo, sin depender de un consultor externo cada vez.',
          referenceLabel: 'Referencia',
          reference: 'Consejo Municipal de Futuros',
          cta: 'Ver el caso →',
        },
        {
          n: '03',
          title: 'Empresas y gremios con asuntos públicos',
          text: 'Le afecta un proceso regulatorio, un conflicto territorial o un cambio de encuadre en la conversación pública. Necesita verlo formarse antes de que sea noticia.',
          referenceLabel: 'Referencia',
          reference: 'El futuro de la formación ante la inteligencia artificial',
          cta: 'Ver el caso →',
        },
      ],
    },

    method: {
      h2: 'Cinco pasos, siempre los mismos.',
      sub: 'El método no cambia con el tema. Cambian las antenas.',
      label: ['El método', '01 — 05'],
      steps: [
        {
          n: '01',
          title: 'Recibimos ruido',
          text: 'Todo lo que circula alrededor del tema: documentos, actas, prensa, conversaciones, territorio.',
        },
        {
          n: '02',
          title: 'Identificamos señales',
          text: 'Qué de todo eso anticipa una decisión, un cambio de posición o una ventana que se abre.',
        },
        {
          n: '03',
          title: 'Despejamos el ruido',
          text: 'Lo que no es señal se descarta explícitamente. Es el paso que casi nadie hace y el que vuelve legible todo lo demás.',
        },
        {
          n: '04',
          title: 'Estructuramos',
          text: 'Las señales se ordenan en categorías estables, comparables en el tiempo y entre organizaciones.',
        },
        {
          n: '05',
          title: 'Visualizamos',
          text: 'Recién al final aparece el tablero. Es la superficie del método, no el método.',
        },
      ],
      bridge: {
        text: 'El marco conceptual que ordena esto —espacialización, visualización, futurización— está en',
        link: 'Sistema →',
      },
    },

    pilot: {
      h2: 'Doce semanas. Un solo tema. Tres equipos.',
      label: ['El piloto', 'Doce semanas'],
      isNot: {
        label: 'Qué no es',
        text: 'Una transformación organizacional ni un trabajo con toda su cartera.',
      },
      is: {
        label: 'Qué es',
        text: 'Tres equipos que ya funcionan bien, sobre un tema donde usted ya tiene acervo acumulado.',
      },
      deliverablesLabel: 'Tres entregables',
      deliverables: [
        {
          title: 'Posición común empaquetada',
          text: 'El conocimiento disperso consolidado en una sola posición, en cuatro versiones: técnica, parlamentaria, mediática y territorial.',
        },
        {
          title: 'Tablero de observación',
          text: 'Proceso legislativo y regulatorio, mapa de actores, cuellos de botella, señales culturales y alertas anticipatorias. Cada equipo opera el suyo.',
        },
        {
          title: 'Línea base y protocolo de incidencia',
          text: 'La definición de incidencia la pone usted. Nosotros la volvemos medible.',
        },
      ],
      risk: {
        tag: 'Caja de riesgo acotado',
        text: 'El éxito se define antes de empezar: cuatro condiciones observables, acordadas al inicio y medidas en la semana doce. 3 de 4 → se escala. Si no se cumplen, el piloto se cierra y se paga solo lo ejecutado.',
      },
      foot: {
        text: 'El piloto se estructura en tramos para caber en presupuesto corriente. Valores a convenir tras la conversación de validación.',
        link: 'Ver los cuatro tramos →',
      },
    },

    cases: {
      h2: 'El método en obra.',
      sub: 'Procesos abiertos, no monumentos terminados.',
      cards: [
        { n: '01', title: 'Ley Lafkenche' },
        { n: '02', title: 'Consejo Municipal de Futuros' },
        { n: '03', title: 'Formación ante la IA' },
      ],
      cta: 'Ver los casos →',
    },

    team: {
      h2: 'Quién ejecuta esto.',
      sub: 'Un equipo chico. Lo ejecutan las mismas personas que lo diseñan.',
      label: ['Equipo', '01 — 03'],
      members: [
        {
          name: 'Isabel Serra',
          role: 'Jefatura de producto',
          text: 'Arquitecta. Diseño del producto y conducción de los proyectos: alcance, entregables y relación con las contrapartes.',
        },
        {
          name: 'Genaro Cuadros',
          role: 'Coordinación de incidencia',
          text: 'Arquitecto y urbanista. Trayectoria en política pública urbana y territorial en Chile; dirección de los proyectos anteriores.',
        },
        {
          name: 'Equipo de desarrollo',
          role: 'Ingeniería y tablero',
          text: 'Construyen el tablero y las rutinas de procesamiento. Trabajan con herramientas de IA, lo que permite iterar el producto en días y no en meses.',
        },
      ],
    },

    closing: {
      h2: 'Una hora para validar el diagnóstico.',
      body: 'Antes de cotizar nada queremos contrastar dos cosas: si el problema que describimos es el que efectivamente le duele, y cómo define usted la incidencia que quiere medir.',
      cta: 'Agendar la conversación',
    },
  },

  services: {
    meta: {
      title: 'Servicios · Utopía Lab',
      description:
        'Cuatro tramos que se contratan juntos o por separado: exploración y datos, análisis prospectivo, decisión e incidencia. Más el tablero de observación y sus reglas de diseño.',
    },
    kicker: 'Cómo se contrata',
    titleLines: ['Cuatro', 'tramos.'],
    sub: 'Se contratan juntos o por separado.',
    lead: ['Cada tramo resuelve el anterior. ', { b: 'Puede detenerse en cualquiera' }, '.'],

    tracksLabel: ['Los cuatro tramos', '01 — 04'],
    deliverableLabel: 'Entregable',
    durationLabel: 'Duración',
    tracks: [
      {
        n: '01',
        name: 'Exploración y datos',
        text: 'Levantamiento y estructuración de fuentes sobre un tema. Usted necesita estos datos; se los entregamos ordenados y comparables.',
        deliverable: 'Base estructurada + mapa de fuentes',
        duration: '3–4 semanas',
      },
      {
        n: '02',
        name: 'Análisis prospectivo y priorización',
        text: 'Escenarios posibles, cuellos de botella y jerarquización de señales. Qué importa y qué no, con el criterio explícito.',
        deliverable: 'Informe prospectivo + tablero de observación',
        duration: '4–6 semanas',
      },
      {
        n: '03',
        name: 'Decisión',
        text: 'El tramo que casi nadie ofrece. Diseñamos cómo se toma la decisión: quiénes participan, con qué información y en qué condiciones de simetría.',
        deliverable: 'Consejo del Futuro instalado + protocolo de deliberación',
        duration: '4 semanas',
      },
      {
        n: '04',
        name: 'Incidencia',
        text: 'Qué cuenta como incidencia y dónde. Acordado al inicio, medido al cierre, reutilizable con el resto de la cartera.',
        deliverable: 'Línea base + protocolo de incidencia + documento de evidencia de una página',
        duration: 'Transversal',
      },
    ],
    note: 'Esto es una herramienta dentro de un plan de incidencia. No es el plan: la estrategia sigue siendo suya.',

    dashboard: {
      label: ['El tablero', 'Tres reglas de diseño'],
      h2: 'Tres reglas de diseño.',
      rules: [
        {
          title: 'Ni un tweet ni un libro',
          text: 'Cada vista se lee en un minuto y se puede abrir hasta la fuente.',
        },
        {
          title: 'Al ritmo de la decisión',
          text: 'Ciclo mensual a trimestral, con un subconjunto de alertas semanales.',
        },
        {
          title: 'Mobile-first, sin excusas',
          text: 'Lo van a mirar en el celular, en terreno y entre reuniones.',
        },
      ],
      clarification:
        'Quién ve qué se co-define en el diagnóstico inicial. Es observación del entorno, no seguimiento de las personas ni de las organizaciones.',
    },

    organization: {
      label: ['Cómo nos organizamos', 'U-Lab · U-Sync · U-NinA'],
      h2: 'U-Lab piensa · U-Sync observa · U-NinA conecta.',
      intro:
        'Utopía Lab no tiene áreas: tiene dispositivos. Un área es una división administrativa; un dispositivo es una función que produce. Es información útil para quien ya decidió trabajar con nosotros.',
      three: [
        {
          name: 'U-Lab',
          verb: 'Piensa',
          text: 'El motor intelectual. Produce el conocimiento que el resto del Lab opera: la investigación que fundamenta el Sistema Utopía, las metodologías que lo vuelven aplicable y la formación que lo instala en equipos e instituciones.',
        },
        {
          name: 'U-Sync',
          verb: 'Observa',
          text: 'El observatorio de señales. Lee señales normativas, territoriales, institucionales y presupuestarias para reconocer hacia dónde empuja un proceso mientras todavía es reversible. Distinguir la decisión-bisagra del ruido es su operación central.',
        },
        {
          name: 'U-NinA',
          verb: 'Conecta',
          text: 'La red de articulación. Vincula el trabajo con quienes deciden y con quienes disputan —instituciones, comunidades, universidades, organizaciones—, porque el conocimiento que no circula no cambia ninguna decisión.',
        },
      ],
    },

    faq: {
      label: ['Preguntas frecuentes', '01 — 06'],
      items: [
        {
          id: 'ia',
          q: '¿Esto es otra consultora con ChatGPT encima?',
          a: 'No entrenamos modelos. Usamos modelos existentes con contextos propios para obtener y estructurar información que antes era cara de conseguir. Lo que no es replicable es la metodología y el criterio de jerarquización.',
        },
        {
          id: 'foda',
          q: '¿En qué se diferencia de un FODA o un PESTEL?',
          a: 'Esos marcos ordenan lo que usted ya sabe. Nosotros trabajamos sobre lo que todavía no está declarado: señales culturales, vacíos, cambios de posición que aún no se anuncian.',
        },
        {
          id: 'tablero',
          q: '¿Y si terminamos con un tablero que nadie mira?',
          a: 'Es el riesgo real y lo tratamos como tal. Por eso el ritmo se ajusta al de sus decisiones, cada vista se lee en un minuto, y uno de los criterios de éxito es que su equipo lo opere sin nosotros.',
        },
        {
          id: 'costo',
          q: '¿Cuánto cuesta?',
          a: 'Depende del alcance, del número de equipos y de las antenas que haya que instalar. Definimos valores después de la hora de diagnóstico. El piloto se estructura en tramos para caber en presupuesto corriente.',
        },
        {
          id: 'requisitos',
          q: '¿Qué necesitan de nosotros?',
          a: 'Un tema, un equipo contraparte y acceso a lo que ya producen. El resto lo ponemos nosotros.',
        },
        {
          id: 'nombre',
          q: '¿Por qué «Utopía Lab»?',
          a: 'Porque trabajamos sobre la distancia entre lo que una organización desea y lo que puede. Achicar esa brecha es el objetivo; el resto es método.',
        },
      ],
    },
  },

  cases: {
    meta: {
      title: 'Casos · Utopía Lab',
      description:
        'El método en obra: Ley Lafkenche, Consejo Municipal de Futuros, el futuro de la formación ante la IA y la Mesa del Transantiago. Contexto, intervención y resultado.',
    },
    kicker: 'El método en obra',
    titleLines: ['El método', 'en obra.'],
    sub: 'Procesos abiertos, no monumentos terminados.',
    lead: ['Cada uno se cuenta igual: ', { b: 'contexto, intervención, resultado' }, '.'],

    templateLabel: ['Cómo se cuenta cada caso', '01 — 04'],
    templateIntro: 'La misma plantilla para todos, sin excepciones.',
    templateSteps: [
      { n: '01', title: 'Contexto', text: 'Qué estaba en disputa y quién decidía.' },
      { n: '02', title: 'Intervención', text: 'Qué antenas se instalaron y qué se descartó.' },
      { n: '03', title: 'Resultado', text: 'Qué quedó instalado y qué se puede verificar.' },
      { n: '04', title: 'Qué se probó', text: 'La lección metodológica.' },
    ],

    casesLabel: ['Los casos', '01 — 04'],
    provedLabel: 'Qué se probó',
    cases: [
      {
        n: '01',
        title: 'Ley Lafkenche',
        subtitle: 'Derechos y territorio',
        text: 'Análisis sistémico del conflicto entre borde costero, pueblos originarios y actividad productiva. El producto se entregó a la abogacía del Alto Comisionado de Derechos Humanos de la ONU.',
        proved: 'El método en un conflicto de alta densidad jurídica y territorial.',
      },
      {
        n: '02',
        title: 'Consejo Municipal de Futuros',
        subtitle: 'Prospectiva pública',
        text: 'Instalación de capacidad de anticipación en gobiernos locales: qué señales mirar y con qué frecuencia revisarlas.',
        proved: 'Dejar el instrumento instalado en el cliente.',
      },
      {
        // TODO (contenidos): reescribir con la plantilla de cuatro pasos —
        // contexto, intervención, resultado, qué se probó—. El texto de abajo
        // es el que ya estaba publicado en Intervenciones; es el único caso
        // que puede sostener el carril de empresas y gremios, así que debería
        // quedar como el mejor documentado de los cuatro.
        n: '03',
        title: 'El futuro de la formación ante la inteligencia artificial',
        text: 'Un mismo dispositivo prospectivo aplicado al futuro de distintas formaciones —pedagogía, arte, arquitectura, diseño— frente a una tecnología que ya no altera el entorno del trabajo, sino su objeto mismo. No pronostica el fin de ninguna disciplina: hace visible la brecha entre nombrar el futuro y tener método para decidirlo, y la vuelve discutible. Método replicado en instituciones de Chile y el extranjero.',
        status: 'En documentación',
      },
      {
        n: '04',
        title: 'Mesa del Transantiago',
        subtitle: 'Coordinación multiactor',
        text: 'Señales dispersas de múltiples organizaciones convertidas en una posición común, desde el Laboratorio de Desarrollo Urbano.',
        proved: 'La coordinación entre organizaciones distintas.',
      },
    ],
  },

  system: {
    meta: {
      title: 'Sistema Utopía · Utopía Lab',
      description:
        'Sistema Utopía: el marco conceptual de Utopía Lab. La triada —espacialización, visualización, futurización—, las cinco operaciones del método, los cinco principios y las cinco dimensiones de trabajo.',
    },
    kicker: 'El marco conceptual',
    titleLines: ['Sistema', 'Utopía'],
    header: [
      'No vendemos informes. Instalamos ',
      { b: 'infraestructura' },
      ': una capacidad de anticipación que queda operando cuando el proyecto termina. El proyecto es el vehículo; la infraestructura es el resultado.',
    ],
    sub: 'El dispositivo teórico que ordena todo el Lab: cómo se lee la producción de futuros.',
    lead: ['Un sistema para leer cómo las sociedades ', { b: 'producen futuros' }, '.'],
    note: 'La utopía no como modelo de sociedad correcta, sino como forma de conocimiento anticipatorio: un método crítico y situado para leer, hacer visible y abrir el porvenir. Su premisa: anticipar no es predecir. El Sistema opera a través de una triada de operaciones encadenadas.',
    triadLabel: ['Triada operativa', '01 — 03'],
    triad: [
      {
        n: '01',
        question: '¿Cómo se inscribe el futuro en el territorio?',
        name: 'Espacialización',
        def: 'Leer un campo —un barrio, una ley, una organización, un conflicto, una transición— como el lugar donde el futuro ya se está jugando. Sitúa el análisis en campos de fuerza, materialidades y escalas: situar antes de proyectar.',
      },
      {
        n: '02',
        question: '¿Cómo se vuelve visible, imaginable y discutible?',
        name: 'Visualización',
        def: 'Hacer visible el sistema de lo posible: traducir procesos complejos en formas legibles y compartibles, para volver discutible lo que todavía no existe y poder proyectarlo.',
      },
      {
        n: '03',
        question: '¿Cómo se construyen y disputan horizontes posibles?',
        name: 'Futurización',
        def: 'Abrir horizontes de futuro sin encerrarlos en un pronóstico. Anticipar no es predecir: es ensanchar y disputar lo que puede pasar.',
      },
    ],
    methodLabel: ['Método · cinco operaciones', 'M1 — M5'],
    methodIntro: [
      'La triada dice cómo el Lab ',
      { b: 'lee' },
      ' un campo. Las cinco operaciones dicen cómo lo ',
      { b: 'trabaja' },
      ': el proceso que convierte esa lectura en decisiones. Se activan en secuencia completa o de forma modular.',
    ],
    producesLabel: 'Produce',
    ops: [
      {
        n: 'M1',
        name: 'Anticipar',
        def: 'Leer lo emergente y detectar los cambios cuando todavía son débiles —antes de que se vuelvan crisis o irreversibilidad.',
        produces: ['señales débiles', 'tendencias', 'riesgos', 'tensiones'],
      },
      {
        n: 'M2',
        name: 'Explorar',
        def: 'Abrir el espacio de los futuros posibles, en lugar de proyectar el presente hacia adelante como si fuera destino.',
        produces: ['escenarios alternativos', 'bifurcaciones', 'incertidumbres críticas'],
      },
      {
        n: 'M3',
        name: 'Criticar',
        def: 'Desnaturalizar el presente y los futuros que se dan por supuestos: hacer visible quién decide, con qué intereses y bajo qué marcos.',
        produces: ['supuestos revelados', 'análisis de poder', 'marcos ideológicos a la vista'],
      },
      {
        n: 'M4',
        name: 'Participar',
        def: 'Co-construir los futuros con los actores diversos que habitan un territorio o una institución, no decidir por ellos.',
        produces: ['visiones compartidas', 'conflictos y acuerdos', 'legitimidad social'],
      },
      {
        n: 'M5',
        name: 'Proyectar',
        def: 'Orientar la acción hacia los futuros deseables: convertir el análisis en criterios que sostienen una decisión, no en un informe que se archiva.',
        produces: ['horizontes normativos', 'criterios de decisión', 'hoja de ruta'],
      },
    ],

    principlesLabel: ['Cinco principios', 'Lo que el Lab sostiene'],
    principles: [
      {
        n: '01',
        title: 'Anticipar no es predecir',
        text: 'El futuro no se pronostica: se disputa. El Lab no calcula el desenlace más probable, sino que abre el campo de lo posible mientras todavía es reversible. Predecir clausura; anticipar mantiene abierta la decisión.',
      },
      {
        n: '02',
        title: 'La utopía es método, no modelo',
        text: 'La utopía no nombra una sociedad correcta a la cual llegar, sino una forma de conocimiento: una manera de pensar lo que todavía no es sin imponerlo como verdad única. El Lab no produce planes cerrados; produce capacidad de imaginar con rigor.',
      },
      {
        n: '03',
        title: 'Abrir futuros, no cerrarlos',
        text: 'Todo futuro enunciado como certeza descarta los demás. El trabajo del Lab es ensanchar el horizonte de lo posible y volverlo discutible, no reducirlo a un solo escenario. La apertura es la condición de que el futuro siga siendo público.',
      },
      {
        n: '04',
        title: 'Situar la anticipación',
        text: 'No hay un futuro único ni un solo tiempo. El Lab piensa desde América Latina la pluralidad de temporalidades que el pensamiento anticipatorio dominante tiende a aplanar. Los futuros tienen fecha, geografía y lengua: situar es reconocer desde dónde y desde cuándo se imagina.',
      },
      {
        n: '05',
        title: 'Infraestructura, no autor',
        text: 'La capacidad de anticipar no puede depender de una sola voluntad. El Lab se diseña como infraestructura permanente y transferible: método que queda instalado más allá de quien lo aplica. Democratizar la anticipación es hacerla independiente de la persona que la porta.',
      },
    ],
    dimsLabel: ['Cinco dimensiones', 'El problema · lo que aporta el Lab'],
    problemHead: 'El problema',
    contributionHead: 'Lo que aporta Utopía Lab',
    dims: [
      {
        n: '01',
        name: 'Académica',
        claim:
          'Instalación de capacidad anticipatoria en universidades, centros de investigación y comunidades académicas.',
        problems: [
          'Las universidades producen conocimiento sobre el futuro pero rara vez desarrollan la capacidad institucional para actuar anticipatoriamente. El pensamiento de futuros es tratado como objeto de estudio, no como competencia que se instala.',
          'El resultado: comunidades académicas que saben mucho sobre el mañana pero deciden como si el presente fuera estable.',
        ],
        contributions: [
          {
            title: 'Reconecta investigación y territorio',
            text: 'Devuelve el largo plazo como horizonte real de la producción académica, ligada a los desafíos concretos de los territorios.',
          },
          {
            title: 'Instala el pensamiento de futuros como competencia',
            text: 'Capacidad operativa, no objeto de estudio: equipos que saben pensar escenarios, leer señales y orientar decisiones con método.',
          },
          {
            title: 'Construye orientación institucional propia',
            text: 'Una visión de largo plazo que no es plan de gestión, sino horizonte que orienta qué investigar, con quién y para qué.',
          },
          {
            title: 'Activa el saber situado latinoamericano',
            text: 'Introduce la perspectiva crítica y decolonial en los métodos de futuros, frente a la hegemonía de los modelos del Norte.',
          },
          {
            title: 'Sostiene trayectorias con sentido',
            text: 'Coherencia de largo plazo para investigadores y docentes, en un campo marcado por la precariedad y el resultado inmediato.',
          },
        ],
      },
      {
        n: '02',
        name: 'Política',
        claim:
          'Lectura anticipatoria de leyes, políticas y decisiones públicas mientras todavía se están decidiendo.',
        problems: [
          'Cada ley inscribe un futuro y descarta otros, pero esa inscripción no se hace explícita: se discute el texto, no el porvenir que instala. Cuando el efecto se vuelve visible, la decisión ya es irreversible.',
          'El resultado: políticas que producen efectos de largo plazo que nadie decidió, y que nadie puede atribuir.',
        ],
        contributions: [
          {
            title: 'Hace explícito el futuro que una norma inscribe',
            text: 'Traduce el texto normativo en el porvenir que produce: qué trayectorias abre, cuáles clausura y sobre quiénes.',
          },
          {
            title: 'Lee el sistema, no el episodio',
            text: 'Analiza el entramado normativo, institucional y discursivo que produce un conflicto, no su última manifestación pública.',
          },
          {
            title: 'Trabaja la política pública, no solo la norma',
            text: 'Una ley es un punto del proceso: el futuro se inscribe también en el diseño de los programas, el presupuesto y la implementación.',
          },
          {
            title: 'Anticipa mientras es reversible',
            text: 'Identifica la decisión-bisagra antes de que se cierre: el punto donde el futuro todavía admite corrección.',
          },
          {
            title: 'Produce argumentos trazables',
            text: 'Piezas defendibles y con genealogía —no consignas ni pronósticos—, utilizables en el trámite real.',
          },
          {
            title: 'Democratiza la capacidad de anticipar',
            text: 'Pone el método a disposición de quienes disputan decisiones diseñadas sin ellos: comunidades y actores territoriales.',
          },
        ],
      },
      {
        n: '03',
        name: 'Empresarial',
        claim:
          'Anticipación de trayectorias, capacidades y campos de actividad emergentes en las organizaciones y los equipos que deciden.',
        problems: [
          'Las organizaciones planifican proyectando el presente: extrapolan tendencias y llaman a eso estrategia. Funciona mientras cambia el entorno; falla cuando lo que cambia es el objeto mismo del trabajo.',
          'El resultado: equipos con mucha información sobre el futuro y ninguna competencia propia para decidir en él.',
        ],
        contributions: [
          {
            title: 'Distingue estrategia de programa',
            text: 'Separa lo que puede planificarse de lo que solo puede anticiparse, y devuelve capacidad de operar cuando el plan deja de aplicar.',
          },
          {
            title: 'Instala método, no entrega informe',
            text: 'La capacidad anticipatoria queda dentro de la organización, como competencia de sus equipos y no como dependencia externa.',
          },
          {
            title: 'Anticipa la transformación del oficio',
            text: 'Trabaja sobre los cambios que no alteran el entorno del trabajo sino su objeto, y hace visible la brecha entre nombrarlos y saber decidirlos.',
          },
          {
            title: 'Identifica nichos de desarrollo futuro',
            text: 'Reconoce campos que se abren antes de tener nombre o demanda formada: no mide un mercado existente, lee lo que lo está produciendo.',
          },
          {
            title: 'Abre el campo de lo posible',
            text: 'Ensancha el rango de trayectorias reconocibles en lugar de reducir la decisión al escenario más probable.',
          },
          {
            title: 'Sostiene la decisión en el tiempo',
            text: 'Deja instalados criterios y dispositivos propios, para que la lectura del largo plazo no dependa de cada nueva asesoría.',
          },
        ],
      },
      {
        n: '04',
        name: 'Territorial',
        claim: 'La ciudad y el territorio como el lugar donde el futuro ya se está decidiendo.',
        problems: [
          'El territorio se administra como escenario dado —se zonifica, se norma, se gestiona— cuando es donde el porvenir se inscribe materialmente. Y la participación llega cuando lo esencial ya está decidido, convertida en validación de lo irreversible.',
          'El resultado: comunidades que habitan futuros que no imaginaron ni discutieron.',
        ],
        contributions: [
          {
            title: 'Sitúa antes de proyectar',
            text: 'Lee el territorio como campo de fuerzas —materialidades, escalas, conflictos—, no como superficie neutra donde aplicar soluciones ajenas.',
          },
          {
            title: 'Explicita qué futuro inscribe el espacio',
            text: 'Hace visible el porvenir que un plan o una obra fijan en el suelo: qué trayectorias habilitan, cuáles cierran, y para quién.',
          },
          {
            title: 'Convierte la participación en imaginación',
            text: 'Desplaza a las comunidades del lugar de validar lo decidido al de imaginar lo posible, y lo vuelve discutible.',
          },
          {
            title: 'Reconoce la pluralidad de temporalidades',
            text: 'No hay un solo tiempo en un territorio: incorpora al análisis las temporalidades que la planificación tiende a aplanar.',
          },
          {
            title: 'Interviene mientras se disputa',
            text: 'Actúa en el proceso abierto, allí donde el conflicto todavía admite otro desenlace.',
          },
        ],
      },
      {
        n: '05',
        name: 'Institucional',
        claim:
          'Diseño de dispositivos que instalan capacidad anticipatoria de forma permanente en el aparato público.',
        problems: [
          'Las instituciones anticipan por episodios: una comisión, un plan, una asesoría. Cambia el gobierno y la capacidad se va con quienes la portaban. No hay reglas de traspaso ni memoria: cada ciclo redescubre el largo plazo y lo vuelve a perder.',
          'El resultado: instituciones que deciden a veinticinco años con dispositivos que duran cuatro.',
        ],
        contributions: [
          {
            title: 'Diseña infraestructura, no asesoría',
            text: 'Órganos y procedimientos con existencia propia —consejos, observatorios, protocolos— que ejercen la función anticipatoria de forma continua.',
          },
          {
            title: 'Construye reglas de traspaso',
            text: 'Escribe la continuidad en el diseño: la capacidad de anticipar sobrevive al cambio de gobierno y no depende de una sola voluntad.',
          },
          {
            title: 'Conecta el futuro con el instrumento',
            text: 'Vincula el trabajo anticipatorio con los instrumentos formales, para que el escenario entre donde efectivamente se decide.',
          },
          {
            title: 'Instala observación de señales',
            text: 'Capacidad de leer tempranamente hacia qué futuro empuja un proceso, distinguiendo la decisión-bisagra del ruido.',
          },
          {
            title: 'Democratiza la deliberación de largo plazo',
            text: 'El futuro deja de ser competencia técnica reservada y se vuelve materia de deliberación pública.',
          },
        ],
      },
    ],
    place: {
      tag: 'Lugar de enunciación',
      h2: 'Se piensa desde América Latina, no como periferia.',
      p: 'El Lab opera desde Santiago de Chile, y desde América Latina como lugar de enunciación: no como margen que aplica marcos ajenos, sino como sitio desde donde se produce pensamiento anticipatorio situado. Los futuros que imagina tienen fecha, geografía y lengua.',
    },
    bridge: {
      text: 'Este es el marco. Cómo se aplica a un tema concreto, en doce semanas, está en',
      link: 'El piloto →',
    },
  },

  thinking: {
    meta: {
      title: 'Pensamiento · Utopía Lab',
      description:
        'El pensamiento de Utopía Lab, por eje. Líneas de pensamiento y Biblioteca de futuros. Infraestructura democrática de futuros.',
    },
    kicker: 'U-Lab piensa · Producción de conocimiento',
    title: 'Pensamiento',
    sub: 'El motor intelectual del Lab, por eje. No una bibliografía de autor —una posición sobre el futuro.',
    lead: [
      'El Lab piensa en ',
      { b: 'cinco ejes' },
      '. Cada uno es una posición, no un tema; una manera de leer el presente para abrir su futuro.',
    ],
    linesLabel: ['Líneas de pensamiento', 'La posición del Lab'],
    lines: [
      {
        n: '01',
        title: 'Sistema Utopía y pensamiento anticipatorio',
        text: 'La utopía no como modelo de sociedad correcta, sino como forma de conocimiento: una manera de anticipar sin predecir y de abrir futuros sin cerrarlos en un pronóstico. Es el eje que fundamenta al Lab, donde se desarrolla el Sistema Utopía —el dispositivo para leer, hacer visible y abrir lo que todavía no es.',
      },
      {
        n: '02',
        title: 'Ciudad, territorio y futuros',
        text: 'La ciudad es el lugar donde el futuro ya se está decidiendo. El Lab no la lee como escenario dado sino como campo en disputa: cada plan, cada norma y cada borde inscribe un porvenir y descarta otros. Pensar la ciudad es reconocer qué futuros se están inscribiendo en el espacio, y por quién.',
      },
      {
        n: '03',
        title: 'Planificación, poder e imaginación',
        text: 'Ordenar el espacio es ejercer poder sobre el tiempo de una comunidad. Frente al tecnocratismo que reduce la ciudad a gestión, y a la utopía impuesta que la reduce a un plan cerrado, el Lab reivindica la imaginación como facultad política: concebir lo que aún no existe sin imponerlo como verdad única.',
      },
      {
        n: '04',
        title: 'Temporalidades latinoamericanas',
        text: 'No hay un solo futuro ni un solo tiempo. El Lab piensa desde América Latina la pluralidad de temporalidades que el pensamiento anticipatorio dominante tiende a aplanar: los futuros tienen fecha, geografía y lengua. Situar la anticipación es reconocer desde dónde y desde cuándo se imagina.',
      },
      {
        n: '05',
        title: 'Señales, sistemas y complejidad',
        text: 'Leer el presente como sistema para anticipar sus transformaciones. El Lab observa señales —normativas, territoriales, institucionales— no para predecir su desenlace, sino para reconocer temprano hacia qué futuro empuja un proceso mientras todavía es reversible. Pensar en complejidad es distinguir la decisión-bisagra del ruido.',
      },
    ],
    libraryLabel: ['Biblioteca de futuros', 'Lecturas · curadas por eje'],
    libraryTitle: 'Lo que hay que leer para pensar cada eje.',
    libraryIntro:
      'No un catálogo de lo que el Lab ha escrito, sino el mapa de lo que considera que hay que leer. Una biblioteca curada por eje —qué leer, y desde qué pregunta del Lab se lee—.',
    axes: [
      {
        n: '01',
        title: 'Sistema Utopía y pensamiento anticipatorio',
        question: '¿Cómo se piensa lo que todavía no es, sin convertirlo en pronóstico ni en plan?',
        refs: [
          {
            author: 'Bloch',
            work: 'El principio esperanza',
            kind: 'book',
            year: '2004 [1959]',
            note: 'El Noch-Nicht: lo aún-no-sido como categoría de conocimiento.',
          },
          {
            author: 'Levitas',
            work: 'Utopia as Method',
            kind: 'book',
            year: '2013',
            note: 'La utopía como método: la formulación que funda la posición del Lab.',
          },
          {
            author: 'Mannheim',
            work: 'Utopía e ideología',
            kind: 'book',
            year: '2020 [1929]',
            note: 'La utopía como conciencia que rompe el orden, no como evasión.',
          },
          {
            author: 'Koselleck',
            work: 'Futuro pasado',
            kind: 'book',
            year: '1993 [1979]',
            note: 'Espacio de experiencia y horizonte de expectativa: el futuro tiene historia.',
          },
          {
            author: 'Hinkelammert',
            work: 'Crítica de la razón utópica',
            kind: 'book',
            year: '2002 [1984]',
            note: 'La crítica de la utopía desde América Latina.',
          },
          {
            author: 'Jameson',
            work: 'Arqueologías del futuro',
            kind: 'book',
            year: '2009',
            note: 'La dificultad de imaginar como síntoma político.',
          },
          {
            author: 'Hölscher',
            work: 'El descubrimiento del futuro',
            kind: 'book',
            year: '2014',
            note: 'Cuándo y cómo el futuro se volvió un objeto pensable.',
          },
        ],
      },
      {
        n: '02',
        title: 'Ciudad, territorio y futuros',
        question: '¿Qué futuro inscribe el espacio, y quién lo decidió?',
        refs: [
          {
            author: 'Gorelik',
            work: 'La ciudad latinoamericana',
            kind: 'book',
            year: '2022',
            note: 'La ciudad como figura de la imaginación social del siglo XX.',
          },
          {
            author: 'Rama',
            work: 'La ciudad letrada',
            kind: 'book',
            year: '1984',
            note: 'El orden urbano como escritura del poder.',
          },
          {
            author: 'Romero',
            work: 'Latinoamérica: las ciudades y las ideas',
            kind: 'book',
            year: '2001',
            note: 'Las ideas que construyeron las ciudades del continente.',
          },
          {
            author: 'Heffes (ed.)',
            work: 'Utopías urbanas',
            kind: 'book',
            year: '2013',
            note: 'Geopolíticas del deseo en América Latina.',
          },
          {
            author: 'Lefebvre',
            work: 'La producción del espacio',
            kind: 'book',
            year: '1974',
            note: 'El espacio como producto social, no como soporte dado.',
          },
          {
            author: 'Harvey',
            work: 'Spaces of Hope',
            kind: 'book',
            year: '2000',
            note: 'Utopía y ciudad pensadas juntas: el espacio de la esperanza.',
          },
          {
            author: 'Fishman',
            work: 'Urban Utopias in the Twentieth Century',
            kind: 'book',
            year: '1977',
            note: 'Las utopías urbanas realizadas y su reverso.',
          },
        ],
      },
      {
        n: '03',
        title: 'Planificación, poder e imaginación',
        question: '¿Por qué ordenar el espacio es ejercer poder sobre el tiempo de una comunidad?',
        refs: [
          {
            author: 'Scott',
            work: 'Seeing Like a State',
            kind: 'book',
            year: '1998',
            note: 'Cómo la utopía impuesta destruye aquello que ordena.',
          },
          {
            author: 'Pinder',
            work: 'Visions of the City',
            kind: 'book',
            year: '2005',
            note: 'Utopismo, poder e imaginación en el urbanismo del siglo XX.',
          },
          {
            author: 'Arboleda',
            work: 'Gobernar la utopía',
            kind: 'book',
            year: '2021',
            note: 'Sobre la planificación y el poder popular.',
          },
          {
            author: 'Friedmann',
            work: 'The good city: in defense of utopian thinking',
            kind: 'article',
            year: '2000',
            note: 'La defensa del pensamiento utópico en la planificación.',
          },
          {
            author: 'Miraftab',
            work: 'Insurgent planning',
            kind: 'article',
            year: '2009',
            note: 'Planificar desde la insurgencia y no desde el Estado.',
          },
          {
            author: 'Davoudi',
            work: 'Prefigurative planning',
            kind: 'article',
            year: '2023',
            note: 'Anticipar practicando el futuro que se quiere.',
          },
          {
            author: 'Hoch',
            work: 'Utopia, scenario, and plan',
            kind: 'article',
            year: '2016',
            note: 'La relación entre utopía, escenario y plan.',
          },
        ],
      },
      {
        n: '04',
        title: 'Temporalidades latinoamericanas',
        question: '¿Desde dónde y desde cuándo se imagina el futuro?',
        refs: [
          {
            author: 'Rivera Cusicanqui',
            work: "Ch'ixinakax utxiwa",
            kind: 'book',
            year: '2010',
            note: "Lo ch'ixi: coexistencia de tiempos heterogéneos sin síntesis.",
          },
          {
            author: 'Krenak',
            work: 'Futuro ancestral',
            kind: 'book',
            year: '2022',
            note: 'La escucha frente al futuro único.',
          },
          {
            author: 'Quijano',
            work: 'Coloniality of power and Eurocentrism in Latin America',
            kind: 'article',
            year: '2000',
            note: 'Quién quedó fuera del tiempo del progreso.',
          },
          {
            author: 'Aínsa',
            work: 'Espacios alternativos: una utopía desde y para América Latina',
            kind: 'article',
            year: '2015',
            note: 'La utopía enunciada desde el continente.',
          },
          {
            author: 'Viveiros de Castro',
            work: 'La mirada del jaguar',
            kind: 'book',
            year: '2013',
            note: 'Otros mundos posibles, otras ontologías del tiempo.',
          },
          {
            author: 'Gavilán Pinto',
            work: 'El modelo mental de los pueblos indígenas',
            kind: 'article',
            year: '2009',
            note: 'Temporalidades indígenas frente al tiempo lineal.',
          },
          {
            author: 'Dinerstein',
            work: 'The Politics of Autonomy in Latin America',
            kind: 'book',
            year: '2015',
            note: 'La organización de la esperanza como práctica política.',
          },
        ],
      },
      {
        n: '05',
        title: 'Señales, sistemas y complejidad',
        question: '¿Cómo distinguir la decisión-bisagra del ruido, mientras todavía es reversible?',
        refs: [
          {
            author: 'Morin',
            work: 'Introducción al pensamiento complejo',
            kind: 'book',
            year: '1990',
            note: 'Estrategia frente a programa; democracia cognitiva.',
          },
          {
            author: 'Beer',
            work: 'Designing Freedom',
            kind: 'book',
            year: '1974',
            note: 'La cibernética como diseño de libertad, no de control.',
          },
          {
            author: 'Medina',
            work: 'Cybernetic Revolutionaries',
            kind: 'book',
            year: '2011',
            note: 'Synco: la genealogía chilena que funda U-Sync.',
          },
          {
            author: 'Meadows',
            work: 'Thinking in Systems',
            kind: 'book',
            year: '2008',
            note: 'Puntos de apalancamiento: dónde intervenir un sistema.',
          },
          {
            author: 'Ansoff',
            work: 'Managing Strategic Surprise by Response to Weak Signals',
            kind: 'article',
            year: '1975',
            note: 'El origen de la noción de señal débil.',
          },
        ],
      },
    ],
    thesis: {
      tag: 'Investigación doctoral · IDEA–USACH · en curso',
      h2: 'El pensamiento del Lab se fundamenta en la investigación.',
      p: 'El recorrido visual de la tesis traza de dónde viene el dispositivo: de la utopía como conocimiento a la ciudad latinoamericana, hasta la triada del Sistema Utopía.',
      cta: 'Ver el recorrido de la tesis →',
    },
  },
}
