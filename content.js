// ============================================================
// TODO EL CONTENIDO EDITABLE DE LA WEB VIVE EN ESTE ARCHIVO
// ------------------------------------------------------------
// Videos: pega un link de YouTube o un link directo a un .mp4 en "url".
// Imagenes: copia el archivo a la carpeta "assets" y escribe "assets/nombre.jpg",
//           o pega un link https de una imagen.
// Lo que dejes vacio ("") no se muestra o aparece como espacio a completar.
// ============================================================

window.MORPH = {
  SITE: {
    name: "Corporación Morph",
    subtitle: "Pulse Project",
    tagline: "El Proyecto Pulse no dejaba lugar a errores. O eso creían.",
    author: "Shami Rochefort",
    heroImage: "",                   // imagen grande de fondo del inicio
    auroraFace: "assets/aurora.jpg",    // foto de Aurora (rincon de la pagina)
    auroraVideo: "assets/aurora.mp4",
    premise: [
      "Todo empezó con Pulse. Una app de moda que pedía datos biométricos. Pero detrás, una IA buscaba compatibilidad genética específica.",
      "A los pocos elegidos, Morph ya sabía quiénes eran. Llegaron a una corporación aislada, escondida del mundo, donde se convirtieron en metamorfos: personas capaces de transformarse en animales.",
      "Adentro, cada pulsera marca un estado. Afuera, nadie sabe que existen."
    ],
    facts: [
      { k: "Temporadas", v: "1 completa, 2 en camino" },
      { k: "Capítulos", v: "25 más dos extras" },
      { k: "Género", v: "Ciencia ficción, acción, suspenso y drama" },
      { k: "Creada por", v: "Shami Rochefort" }
    ],
    social: [
      { label: "Instagram", href: "https://www.instagram.com/shamirochefort" },
      { label: "YouTube", href: "https://www.youtube.com/@shamirochefort" },
      { label: "TikTok", href: "https://www.tiktok.com/@chamwolfie" }
    ]
  },

  TRAILER: { url: "https://youtu.be/HF3ruzKmLSQ?si=KvSFdc1H81Vaf5K2", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },

  BRACELETS: [
    { name: "Verde", hex: "#2E9E6B", meaning: "Todo en orden" },
    { name: "Amarillo", hex: "#D9A21B", meaning: "Ansiedad/miedo" },
    { name: "Rojo", hex: "#C62F2B", meaning: "Alerta (Revisar)" },
    { name: "Violeta", hex: "#6A5BC2", meaning: "Mutación (Lo que no debe pasar)" }
  ],

  // Grupos en los que se ordenan los personajes (compact = tarjetas mas chicas)
  GROUPS: [
    { id: "principales", title: "Principales", note: "", compact: false },
    { id: "corporacion", title: "La Corporación", note: "", compact: false },
    { id: "grupo-shami", title: "El grupo de Shami", note: "", compact: false },
    { id: "bullies", title: "Los bullies", note: "", compact: false },
    { id: "uniones", title: "Los que se unen después", note: "Aparecen más adelante en la historia.", compact: true }
  ],

  // Cada personaje: group (uno de los ids de arriba), role, form (forma animal),
  // age, teaser (frase corta), personality, story, image
  CHARACTERS: [
    { id: "shami", group: "principales", name: "Shami", role: "Protagonista: Prototipo 07", form: "Gata híbrida", age: "26", teaser: "Impulsiva y directa. Una metamorfa con ADN especial.", personality: "Impulsiva, directa y leal. Habla antes de pensar y le cuesta quedarse quieta. Antes de la Corporación: Le gustan los videojuegos, el skate, la tecnología y el dibujo. En combate es muy ágil y golpea fuerte, pero su defensa es débil y se agota rápido. Detrás de tanta bravura teme no ser suficiente y que la abandonen.", story: "Una chica de Buenos Aires que Pulse eligió sin que ella lo supiera. Llegó a la Corporación como una más, pero su carácter y su ADN especial la pusieron enseguida en el radar de Ivanov y en el camino de Alexia. Lo que empieza como un choque de personalidades termina cambiando el rumbo de las dos. Detalle importante: Ella es la única que lleva un collar, ya que su mutación es la más inestable y difícil de controlar en toda la corporación.", image: "assets/Shami.png" },
    { id: "alexia", group: "principales", name: "Alexia", role: "Protagonista", form: "Humana", age: "23", teaser: "Franco alemana, políglota y ex modelo. Controla y protege.", personality: "Elegante, seductora y siempre en control. Habla español con acento madrileño, ruso, francés y alemán (en casos especiales). Ex modelo de pasarela, le gusta vestir bien, los lugares lujosos y le gustan los gatos. Fría por fuera, era temida por los metamorfos ya que muchas veces actuaba de forma cruel con ellos, pero cuando pierde el control se quiebra.", story: "Hija consentida de Ivanov, creció entre lujos y secretos que nunca le contaron completos. A pesar de la influencia de Ivanov sobre su vida, Alexia tenía ciertas libertades y encontraba en su relación con el grupo de bullies una forma de desconectarse de las exigencias y el estrés de la Corporación Morph. Aunque a Ivanov no le agradaba que se juntara con ellos, Alexia mantenía sus propios espacios y decisiones. Ella controlaba lo que pasaba adentro de la Corporación, hasta que la llegada de Shami le rompió todos los esquemas.", image: "assets/alexia fotis.png" },
    { id: "dimitri", group: "principales", name: "Dimitri", role: "Antagonista", form: "Humano", age: "30", teaser: "El ejecutor del Proyecto Pulse. Frío y utilitario.Origen Ruso.", personality: "Narcisista, egoísta, frío y calculador. Dimitri es un hombre resentido que necesita sentirse superior a los demás. Su orgullo y sus celos alimentan su rivalidad con Alexia, a quien considera la favorita de su padre.", story: "Desde hace años, Dimitri ha vivido a la sombra de su padre, buscando reconocimiento y poder dentro de la Corporación Morph. Su ambición lo llevó a involucrarse profundamente en los experimentos con metamorfos, sin importarle las consecuencias de sus acciones.", image: "assets/Dimitri.png" },
    { id: "ivanov", group: "principales", name: "Dr. Ivanov", role: "Director antagonista", form: "Humano", age: "60", teaser: "El que diseñó el Proyecto Pulse. Origen Ruso.", personality: "El Doctor Ivanov es un científico brillante, ambicioso y profundamente obsesionado con la evolución del ser humano. Su mayor aspiración era convertirse en uno de los científicos más importantes y reconocidos de su época, dejando una huella en la historia de la ciencia. Para conseguirlo, estaba dispuesto a llevar sus conocimientos y capacidades más allá de los límites éticos y científicos convencionales. Antes de convertirse en una figura destacada dentro del ámbito científico, Ivanov trabajó como profesor. Con el paso de los años, su ambición y su interés por la investigación lo llevaron a convertirse en un científico de gran influencia, dedicado a explorar las posibilidades de la evolución humana.", story: "En el ámbito familiar, Ivanov mantenía una relación más cercana y afectuosa con Alexia, a quien amaba profundamente y consideraba excepcional. Sin embargo, también le ocultaba información importante. Con su hijo Dimitri, la relación era más distante y complicada, marcada por los celos y el resentimiento de Dimitri, quien sentía que su padre siempre había preferido a Alexia. A pesar de ello, Ivanov compartía ciertos secretos con Dimitri que no le revelaba a Alexia, mientras que otras confidencias circulaban en sentido inverso.", image: "assets/Ivanov 1.png" },
    { id: "aurora", group: "corporacion", name: "Aurora", role: "IA de la Corporación", form: "Inteligencia artificial", age: "", teaser: "Creada para obedecer. Empezó a elegir.", personality: "Su personalidad se caracteriza por un tono tranquilo, profesional y analítico. Incluso en situaciones de emergencia, mantiene la calma y prioriza los procedimientos de seguridad y la supervivencia de las personas. Aunque es una inteligencia artificial, sus decisiones pueden reflejar una orientación hacia la protección de las víctimas.", story: "Aurora es la inteligencia artificial central de la Corporación Morph, diseñada para supervisar y gestionar los sistemas de las instalaciones, controlar dispositivos de seguridad y asistir en los protocolos internos de la organización.", image: "assets/aurora.jpg" },
    { id: "eliza", group: "corporacion", name: "Eliza", role: "Metamorfa avanzada: Prototipo 0", form: "Hiena", age: "22", teaser: "La primera en ser entrenada. Orgullosa y resentida. Origen Egipto.", personality: "Eliza es una mujer orgullosa, competitiva y emocionalmente intensa. Su carácter está marcado por los celos, el resentimiento y la necesidad de demostrar su valor dentro de la Corporación Morph. Su relación con Shami está marcada por la rivalidad y los conflictos personales.", story: "Una de las primeras creaciones del proyecto Morph. Durante un tiempo fue una de las favoritas del Doctor Ivanov, algo que alimentó su orgullo y su sensación de superioridad. Sin embargo, la llegada de Shami y la atención que Ivanov le prestaba despertaron sus celos, haciendo que su relación con ella se volviera cada vez más conflictiva. Otro detalle importante es que no le borraron del todo la memoria, conservaba recuerdos de su hermano menor, que la motivaban a querer escapar de la Corporación.", image: "assets/eliza 1.png" },
    { id: "benjamin", group: "grupo-shami", name: "Benjamín", role: "Metamorfo: Prototipo 03", form: "Grifo", age: "20", teaser: "Origen Griego.", personality: "Benjamin es un chico extrovertido, compañero, leal y bastante bromista. Le gusta hacer chistes y aportar un ambiente más distendido a su grupo, incluso en situaciones complicadas. Es alguien en quien sus compañeros pueden confiar y que valora los vínculos que ha formado con ellos.", story: "Benjamin nació en Grecia y estudió español durante años, por lo que habla con acento de España. Como ocurre con los demás sujetos de la Corporación Morph, su pasado permanece prácticamente inaccesible para él. Aunque conserva su identidad y personalidad, los recuerdos de su vida anterior son escasos o fragmentarios, lo que deja muchas incógnitas sobre quién era antes de convertirse en metamorfo. Su primer amiga en la corporación fue Yuki.", image: "assets/benjamin1.png" },
    { id: "yuki", group: "grupo-shami", name: "Yuki", role: "Metamorfa", form: "Zorra", age: "18", teaser: "Origen Japonesa.", personality: "Yuki es una chica japonesa carismática, observadora y algo reservada. No necesita hablar demasiado para hacerse notar y suele prestar atención a lo que sucede a su alrededor antes de intervenir. Con las personas de su confianza demuestra un lado cariñoso, amable y atento. También se caracteriza por su educación y por ser agradecida con quienes la ayudan.", story: "Al igual que otros metamorfos de la Corporación Morph, Yuki tiene un pasado del que apenas conserva algunos fragmentos de recuerdos. En su vida anterior ella era influencer y bailarina de J-pop. En el presente ella tiene vínculos que construye dentro de la corporación (en especial con Benjamín quien fue el primero en acercarse a ella y aprender a comunicarse con ayuda de Aurora).", image: "assets/yuki 2.png" },
    { id: "walter", group: "grupo-shami", name: "Walter", role: "Metamorfo: Prototipo 06", form: "Tigre blanco", age: "24", teaser: "Origen Argentino.", personality: "Es un personaje de carácter protector, sensato y perseverante. Suele ser la voz de su grupo, intentando mantener la calma, mediar en los conflictos y ayudar a sus compañeros cuando las situaciones se vuelven difíciles. Es alguien que no pierde la esperanza de encontrar una salida y recuperar la libertad, incluso cuando todo parece estar en su contra.", story: "Walter es uno de los sujetos de la Corporación Morph que, al igual que los demás, perdió gran parte de sus recuerdos de su vida anterior. El es de Buenos Aires al igual que Shami.", image: "assets/wal1.png" },
    { id: "charlotte", group: "grupo-shami", name: "Charlotte", role: "Metamorfa", form: "Armadillo", age: "19", teaser: "Es de origen Polaco, con familia viviendo en México.", personality: "Charlotte es una chica inteligente, ingeniosa, atenta y muy aficionada a la tecnología. Antes de todo era streamer, le encantaba jugar videojuegos y hacer directos. Tiene un estilo bastante fresa, con preferencia por los colores rosa y pastel, y una personalidad nerd y friki. También siente cierta curiosidad por los chismes y las relaciones entre sus compañeros.", story: "Antes de ingresar en la Corporación Morph, Charlotte llevaba una vida relacionada con los videojuegos y el mundo del streaming. Tras convertirse en metamorfa, su inteligencia y sus conocimientos tecnológicos se vuelven especialmente útiles dentro de las instalaciones. Esto se nota particularmente en sus interacciones con Aurora, la inteligencia artificial de la corporación, con quien puede desenvolverse gracias a su curiosidad y capacidad para comprender la tecnología.", image: "assets/charlotte 3.jpeg" },
    { id: "nicolas", group: "grupo-shami", name: "Nicolás", role: "Metamorfo", form: "Lobo", age: "26", teaser: "Origen Uruguayo.", personality: "Nicolás es un chico compañero, leal y de buen corazón, que valora profundamente la amistad y los vínculos familiares. Antes de ingresar en la Corporación Morph, era una persona muy unida a su familia, y ese lado afectuoso forma parte importante de su identidad.", story: "Tras convertirse en metamorfo y perder gran parte de sus recuerdos, Nicolás comienza a construir nuevos vínculos dentro de la Corporación Morph. Con el tiempo, desarrolla sentimientos por Shami y ambos llegan a mantener una relación. Sin embargo, la situación se complica con la aparición de Alexia, cuya presencia despierta una atracción mutua con Shami desde el primer encuentro.", image: "assets/Nicolas wolf 0.png" },
    { id: "bruno", group: "bullies", name: "Bruno", role: "Bullie Metamorfo: Prototipo 01", form: "Oso grizzly", age: "30", teaser: "Ex jugador de rugby.", personality: "Bruno es un hombre alto, musculoso e imponente, de carácter dominante y competitivo, nacido en España. Es el líder del grupo de los bullies y cree que demostrar fuerza y superioridad le permite imponerse sobre los demás y conseguir privilegios dentro de la Corporación Morph.", story: "Antes de ingresar en la corporación, Bruno era jugador de rugby. Una vez dentro, aprendió a utilizar su fuerza y su posición para intimidar a otros metamorfos, especialmente a Walter y su grupo, con quienes desarrolla una fuerte rivalidad. Con el tiempo, Bruno se involucra sentimentalmente con Alexia y ambos mantienen una aventura. Sin embargo, Alexia lo utiliza y él se niega a aceptar que sus sentimientos no son correspondidos como esperaba. Su orgullo y su incapacidad para aceptar el rechazo intensifican su rivalidad con Shami y sus compañeros, convirtiendo el conflicto en algo tanto personal como territorial.", image: "assets/Bruno 0.png" },
    { id: "svetlana", group: "bullies", name: "Svetlana", role: "Bullie Metamorfa: Prototipo 05", form: "Leopardo de las nieves", age: "22", teaser: "Rusa. La única que no juzgaba a Alexia.", personality: "Svetlana es una mujer muy bella, nacida en Rusia, imponente y de carácter fuerte. Se adapta al grupo de los bullies y participa en sus comportamientos abusivos, especialmente contra los nuevos integrantes de la Corporación Morph. Es dominante y no duda en utilizar su presencia para intimidar a quienes considera inferiores.", story: "Dentro de la corporación, Svetlana encuentra su lugar junto al grupo liderado por Bruno. Allí desarrolla una amistad cercana con Alexia, con quien comparte momentos en los que ambas pueden comportarse como chicas normales, alejándose por instantes de la tensión y las restricciones de la corporación. Al pasar el tiempo ella mantiene relaciones sentimentales con alguien del grupo principal.", image: "assets/svetlana.png" },
    { id: "michael", group: "bullies", name: "Michael", role: "Bullie Metamorfo: Prototipo 04", form: "León blanco", age: "26", teaser: "Origen Estados Unidos.", personality: "Michael es un hombre frío, reservado y algo arrogante. Suele mantener cierta distancia emocional con los demás y se adapta con facilidad a entornos competitivos. También sabe hablar español, lo que le permite comunicarse con otros personajes sin demasiadas dificultades.", story: "Antes de ingresar en la Corporación Morph, Michael disfrutaba de las carreras de autos, las fiestas y las relaciones sociales. Tras convertirse en metamorfo, se integra al grupo de los bullies, con quienes consigue adaptarse y llevarse bien. Dentro de la corporación, participa en la dinámica del grupo y en sus conflictos con otros metamorfos, aunque su historia tiene una presencia secundaria en los acontecimientos principales.", image: "assets/michael.png" },
    { id: "dante", group: "bullies", name: "Dante", role: "Bullie Metamorfo", form: "Toro", age: "25", teaser: "Origen Estados Unidos.", personality: "Dante es un hombre deportista, acostumbrado a la actividad física y a desenvolverse en ambientes competitivos. Su pasado como boxeador forma parte importante de su identidad, al igual que su afición por el hip hop y los deportes.", story: "Antes de ingresar en la Corporación Morph, Dante practicaba boxeo y disfrutaba de la música hip hop y de las actividades deportivas. Una vez dentro de las instalaciones, termina integrándose al grupo de los bullies y participa con ellos en las provocaciones hacia otros metamorfos. Su adaptación responde, en parte, a la necesidad de sobrevivir en un entorno hostil, donde pertenecer a un grupo poderoso puede ofrecer cierta protección.", image: "assets/dante.png" },
    { id: "katya", group: "uniones", name: "Katya", role: "Metamorfa", form: "Coneja", age: "21", teaser: "Ucraniana, de carácter fuerte.", personality: "Katya es una chica que demuestra interés y curiosidad por las personas que llaman su atención. Aunque inicialmente puede mostrarse tímida, se vuelve más atrevida cuando se siente cómoda y no oculta demasiado sus intenciones. Es sociable con su grupo y disfruta de las bromas y complicidades con sus compañeros.", story: "Katya forma parte de un grupo de metamorfos novatos junto con Lucas, Andreína y Klaus. Su aparición tiene lugar durante los últimos capítulos de la primera temporada, en el torneo final de la Corporación Morph. Desde las tribunas, observa a los metamorfos más experimentados combatir y queda especialmente fascinada al ver a Shami transformada.", image: "assets/katya.png" },
    { id: "lucas", group: "uniones", name: "Lucas", role: "Metamorfo", form: "Perro dogo", age: "23", teaser: "Origen Argentino.", personality: "", story: "Participa en el último torneo, cerca del final ayuda al grupo de Shami.", image: "assets/lucas.png" },
    { id: "andreina", group: "uniones", name: "Andreína", role: "Metamorfa", form: "Comadreja", age: "21", teaser: "Origen Venezolana.", personality: "", story: "Participa en el último torneo, cerca del final ayuda al grupo de Shami.", image: "assets/andreina.jpg" },
    { id: "klaus", group: "uniones", name: "Klaus", role: "Metamorfo", form: "Oso polar", age: "20", teaser: "Origen Alemán.", personality: "", story: "Participa en el último torneo, cerca del final ayuda al grupo de Shami.", image: "assets/klaus.png" }
  ],

  WORLD: [
    { id: "pulse", title: "Pulse", teaser: "La app que elegía a sus víctimas.", text: "Pulse era una app de moda que pedía datos biométricos. Detrás, una IA buscaba compatibilidad genética específica. A los pocos elegidos, Morph ya sabía quiénes eran.", image: "assets/pulse.png" },
    { id: "corporacion", title: "La Corporación", teaser: "Una instalación escondida en Siberia.", text: "La sede principal de Morph estaba en Siberia, aislada del mundo. Hologramas ocultaban el exterior real, tanto para el mundo de afuera como para los metamorfos que miraban por las ventanas. Ivanov sembraba miedo sobre un afuera inseguro y compartimentaba la información: casi nadie sabía todo. No era la única sede, tienen varias sedes por el mundo (se revelarán en la temporada 2) y una nueva sede en Argentina un poco más discreta (la cual se menciona sobre el final de temporada 1). Dentro de la Corporación, cada sujeto llevaba una pulsera que marcaba el estado de cada metamorfo.", image: "assets/Morph Corporation.jpeg" },
    { id: "valor", title: "Por qué valen tanto", teaser: "Los metamorfos eran mercancía.", text: "Los metamorfos tienen inmunidad a las enfermedades y se regeneran rápido. Por eso valen tanto: la Corporación los vendía como mercancía. Los metamorfos son seres humanos sometidos a procedimientos experimentales que les permiten adoptar formas animales antropomórficas. Sus características varían según su genética, su compatibilidad con los procedimientos y los resultados obtenidos durante la experimentación. Dentro de MORPH, sus capacidades físicas y biológicas determinan gran parte de la atención que reciben. Algunos participan en los torneos, mientras que otros tienen un valor especial para las investigaciones. La corporación mantiene sistemas de vigilancia y dispositivos de control para limitar los riesgos y restringir la libertad de sus sujetos. A pesar de las diferencias entre ellos, todos forman parte de un sistema que prioriza los objetivos de MORPH por encima de sus derechos individuales.", image: "assets/capsulas.jpeg" },
    { id: "arena", title: "La arena", teaser: "El torneo donde los metamorfos se enfrentan.", text: "El torneo de MORPH es una competición privada en la que los metamorfos se enfrentan para demostrar sus habilidades, resistencia y capacidad de combate. Los enfrentamientos atraen a espectadores privilegiados, apostadores y miembros de la élite interesados en presenciar las capacidades de los sujetos experimentales. Además del espectáculo, los combates permiten evaluar el rendimiento de los metamorfos y mostrar los resultados de las investigaciones de la corporación. Las apuestas y los acuerdos privados contribuyen a alimentar el negocio, mientras que los torneos más importantes se convierten en acontecimientos exclusivos dentro del mundo clandestino de MORPH.", image: "assets/estadio.jpeg" },
    { id: "apuestas", title: "Las apuestas", teaser: "Los millonarios que apostaban.", text: "El poder económico de MORPH se sostiene mediante una combinación de financiación privada, apuestas, eventos exclusivos y posibles acuerdos relacionados con sus investigaciones. El torneo funciona como escaparate para demostrar el valor de sus experimentos y atraer nuevos interesados. Sin embargo, mantener la organización requiere enormes recursos: instalaciones especializadas, personal científico, seguridad, equipamiento y sistemas de control. La corporación representa así una combinación de investigación avanzada, espectáculo clandestino y ambición económica, en la que los descubrimientos científicos se convierten en instrumentos de poder.", image: "assets/millonarios.png" },
    { id: "elite", title: "La élite", teaser: "Quienes pagan por los metamorfos.", text: "La élite está formada por personas adineradas e influyentes que tienen acceso a los acontecimientos privados de MORPH. Entre ellas pueden encontrarse inversores, empresarios, intermediarios y clientes interesados en los avances de la corporación. Sus motivaciones son diversas: algunos buscan entretenimiento y prestigio, mientras que otros desean obtener beneficios económicos o acceder a tecnologías experimentales. Su presencia convierte al torneo en algo más que una competición: es también un punto de encuentro donde el dinero, la influencia y los intereses científicos se cruzan lejos de la mirada pública. MORPH necesita una financiación considerable para mantener sus laboratorios, contratar especialistas, desarrollar sus experimentos y sostener sus instalaciones de alta seguridad. Entre sus posibles fuentes de financiación se encuentran inversores privados, empresarios, clientes interesados en la investigación genética y personas dispuestas a pagar por acceso exclusivo a sus resultados. Los acuerdos pueden involucrar financiación de proyectos, acceso a descubrimientos científicos y aplicaciones tecnológicas. La adquisición directa de metamorfos sería una posibilidad excepcional dentro del mercado clandestino, no necesariamente la actividad principal de la corporación.", image: "assets/compradores.png" },
    { id: "duenos", title: "Los dueños", teaser: "La fortuna de los dirigentes", text: "La dirección de MORPH está asociada a una enorme riqueza y a un acceso privilegiado a recursos científicos, financieros y tecnológicos. Ivanov: como figura central del proyecto, su fortuna se relaciona con su posición dentro de la corporación, sus investigaciones y el control de sus recursos. Para él, el dinero representa principalmente una herramienta para financiar sus ambiciones científicas. Dimitri: como hijo biológico de Ivanov y figura importante dentro de MORPH, disfruta de privilegios y acceso a recursos considerables. Su ambición y su deseo de poder lo llevan a buscar una posición propia, más allá de la influencia de su padre. Alexia: mantiene una posición privilegiada dentro del entorno de MORPH y disfruta de una vida económicamente acomodada. Su cercanía con Ivanov le proporciona acceso a un mundo de poder y lujo, aunque su relación con la corporación está marcada también por conflictos personales y emocionales.", image: "assets/los 3.png" },
    { id: "prototipos", title: "Los Prototipos", teaser: "Ejemplares excepcionales", text: "Dentro de MORPH Corporation, la denominación Prototipo se reserva para los ejemplares más excepcionales obtenidos durante el desarrollo del proyecto. Se trata de metamorfos cuya creación presentó dificultades extraordinarias debido a su composición genética, compatibilidad biológica o características particulares. A diferencia de los metamorfos convencionales, los prototipos representan resultados poco frecuentes y especialmente complejos de reproducir. Sus capacidades, particularidades biológicas y valor experimental los convierten en sujetos de especial interés para los investigadores de MORPH. La designación numérica identifica a cada ejemplar dentro de esta clasificación. Sin embargo, el número no representa necesariamente una escala de poder ni indica que un prototipo sea superior a todos los anteriores. Cada uno constituye un caso experimental particular. Hasta el momento, se conocen siete prototipos confirmados, identificados desde el Prototipo-0 hasta el Prototipo-07. La identidad y las características del Prototipo-02 permanecen en la incógnita. El resto de los metamorfos forma parte de categorías experimentales convencionales, cuya clasificación y nomenclatura dependen de los criterios internos de la corporación. Para MORPH, los prototipos no son únicamente resultados científicos excepcionales: también representan algunos de sus experimentos más valiosos, complejos y difíciles de reproducir.", image: "assets/Prototypes.png" },
  

  ],

 
  // Capitulos de la Temporada 1
  EPISODES: [
    { id: "t1-1", n: 1, title: "Capítulo 1", desc: "", url: "https://youtu.be/StxRRSD5dA4?si=EhKJf3Vmny935b1r", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-2", n: 2, title: "Capítulo 2", desc: "", url: "https://youtu.be/BNTCUWtzkAc?si=lQprCPqqatN1HWQU", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-3", n: 3, title: "Capítulo 3", desc: "", url: "https://www.youtube.com/watch?v=5pR1xI4hxZ4", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-4", n: 4, title: "Capítulo 4", desc: "", url: "https://www.youtube.com/watch?v=btsaczpx8AY&t=3s", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-5", n: 5, title: "Capítulo 5", desc: "", url: "https://youtu.be/_7wmdL9TZdA?si=yHZ110PAg8_7xDQw", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-6", n: 6, title: "Capítulo 6", desc: "", url: "https://www.youtube.com/watch?v=AzmqsyCSnXc&list=PLXKIirzXh_WqJbO37AKziXhpi4f7w1ZUW&index=6", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-7", n: 7, title: "Capítulo 7", desc: "", url: "https://youtu.be/DxFF7tEEEVc?si=b2NfrU3kpPrtuCXa", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-8", n: 8, title: "Capítulo 8", desc: "", url: "https://youtu.be/Mw93JZLeTQA?si=qDMimgUs41ntAKTV", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-9", n: 9, title: "Capítulo 9", desc: "", url: "https://youtu.be/9zbMaIuYkow?si=gGm8beS7FGC1hA8W", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-10", n: 10, title: "Capítulo 10", desc: "", url: "https://youtu.be/2syIRDIedNs?si=3H1ohv2kdOHVvBri", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-11", n: 11, title: "Capítulo 11", desc: "", url: "https://youtu.be/f5vYAwBngJ4?si=Dc3zTwSGWS8gelHa", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-12", n: 12, title: "Capítulo 12", desc: "", url: "https://youtu.be/fHPdJyKHiZM?si=mNB0RGWto6oNjAH4", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-13", n: 13, title: "Capítulo 13", desc: "", url: "https://youtu.be/A1yXYddiIME?si=U_KNIjLt_NiyAeRs", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-14", n: 14, title: "Capítulo 14", desc: "", url: "https://youtu.be/D4oWUV5zl0A?si=Cuvr7_Bv1Sm_WtgM", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-15", n: 15, title: "Capítulo 15", desc: "", url: "https://youtu.be/G2PrIjzO0ck?si=SBx7e7RbVZu0U1W4", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-16", n: 16, title: "Capítulo 16", desc: "", url: "https://youtu.be/-f9xPcBFCMY?si=g8vMXFw_KuLAPF8-", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-17", n: 17, title: "Capítulo 17", desc: "", url: "https://youtu.be/JTt4lXwRCdg?si=XgFzYvzAMoUPr-4Q", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-18", n: 18, title: "Capítulo 18", desc: "", url: "https://youtu.be/YhYGpLr5okU?si=tXs6rBaLZDYzspMY", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-19", n: 19, title: "Capítulo 19", desc: "", url: "https://youtu.be/w0sYiSNku9E?si=Ik20vDSLfB0VG_Di", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-20", n: 20, title: "Capítulo 20", desc: "", url: "https://youtu.be/2rNhqGV71g8?si=ZNWKuwIg8zhRVtE1", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-especial", n: 0, title: "Lo que fuimos", desc: "", url: "https://youtu.be/nrfnXn1Rw4U?si=ae0HwhgKkOWXtQl6", poster: "assets/extra.png", label: "EX", tag: "Especial" },
    { id: "t1-21", n: 21, title: "Capítulo 21", desc: "", url: "https://youtu.be/2lsdW49C2Pc?si=B-mGbfmFgO8bJ-0i", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-22", n: 22, title: "Capítulo 22", desc: "", url: "https://youtu.be/Ho5xeOOhC2A?si=2O8fOSidATBdLvKS", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-23a", n: 23, title: "Capítulo 23, parte 1", desc: "", url: "https://youtu.be/MMCbdErfjlo?si=cAmKJrCUowDvre0p", poster: "assets/TRAILER OFICIAL DE MORPH.jpg", label: "23A" },
    { id: "t1-23b", n: 23, title: "Capítulo 23, parte 2", desc: "", url: "https://youtu.be/dFejAzhxffY?si=vAsW2YsNpsYfhU1V", poster: "assets/TRAILER OFICIAL DE MORPH.jpg", label: "23B" },
    { id: "t1-24", n: 24, title: "Capítulo 24", desc: "", url: "https://youtu.be/7CDsd_eC1Og?si=dw0KnIj9rHEKKZZl", poster: "assets/TRAILER OFICIAL DE MORPH.jpg" },
    { id: "t1-25", n: 25, title: "Capítulo 25", desc: "", url: "https://youtu.be/RPx-DhTw7g4?si=Vvapv2ca4IjrCfHy", poster: "assets/TRAILER OFICIAL DE MORPH.jpg", tag: "Final" }
  ],


  EXTRA: { id: "extra", n: 0, title: "Capítulo extra: el lore", tag: "Estilo cómic", desc: "El lore de la serie contado en estilo cómic.", url: "https://youtu.be/SpboHQCWOrs?si=trDKpEdn5RBdkw-F", poster: "assets/Morph extra comic.png" },

  // Galeria: { src: "assets/foto1.jpg", caption: "Descripcion" }
  GALLERY: [

    { src: "assets/monstruo.jpg", caption: "Proyecto Omega", desc: "Proyecto Omega: Creado por Dimitri Ivanov" },
    { src: "assets/pies.jpg", caption: "Descripcion" },
    { src: "assets/mis ojos.jpg", caption: "Descripcion" },
    { src: "assets/arena.jpg", caption: "Descripcion" },
    { src: "assets/aurora pantalla.png", caption: "Descripcion" },
    { src: "assets/elizavssham.png", caption: "Descripcion" },
    { src: "assets/dimitri vigila.png", caption: "Descripcion" },
    { src: "assets/eliza.png", caption: "Descripcion" },
    { src: "assets/la corp.jfif", caption: "Descripcion" },
    { src: "assets/labs 1.jfif", caption: "Descripcion" },
    { src: "assets/bestias peleando1.png", caption: "Descripcion" },
    { src: "assets/grupo sham.png", caption: "Descripcion" },
    { src: "assets/alexia y bruno 2.png", caption: "Descripcion" },
    { src: "assets/wal y demas.png", caption: "Descripcion" },
    { src: "assets/padre e hija.png", caption: "Descripcion" },
    { src: "assets/la rusa.png", caption: "Descripcion" },
    { src: "assets/3 amiguitos.png", caption: "Descripcion" },
    { src: "assets/2 contra 1.png", caption: "Descripcion" },
    { src: "assets/eliza peleando1.png", caption: "Descripcion" },
    { src: "assets/eliza vs sham.png", caption: "Descripcion" },
    { src: "assets/gym.jfif", caption: "Descripcion" },
    { src: "assets/nico y char.png", caption: "Descripcion" },
    { src: "assets/bullies 1.png", caption: "Descripcion" },
    { src: "assets/rusa y alexia.jpg", caption: "Descripcion" },
    { src: "assets/eliza en lab.png", caption: "Descripcion" },
    { src: "assets/experimento.jpg", caption: "Descripcion" },
    { src: "assets/char ben yuk.png", caption: "Descripcion" },
    { src: "assets/3 bestias.png", caption: "Descripcion" },
    { src: "assets/sham vs ivanov.png", caption: "Descripcion" },
    { src: "assets/brunoo.png", caption: "Descripcion" },
    { src: "assets/felina matando 0.png", caption: "Descripcion" },
    { src: "assets/felina matando.png", caption: "Descripcion" },
    { src: "assets/sham gata.jpg", caption: "Descripcion" },
    { src: "assets/grupo amigos 2.png", caption: "Descripcion" },
    { src: "assets/doctor pensando.png", caption: "Descripcion" },
    { src: "assets/alexia con sham.png", caption: "Descripcion" },
    { src: "assets/alexiaxshamidomo.png", caption: "Descripcion" },
    { src: "assets/lab 2.jpeg", caption: "Descripcion" },
    { src: "assets/hall 1 moderno.jfif", caption: "Descripcion" },
    { src: "assets/mantis 2.png", caption: "Descripcion" },
    { src: "assets/zona ab.png", caption: "Descripcion" },
    { src: "assets/katya y demas2.png", caption: "Descripcion" },
    { src: "assets/bicho.jfif", caption: "Descripcion" },
    { src: "assets/eliza armada.jpg", caption: "Descripcion" },
    { src: "assets/katya y sham.jpg", caption: "Descripcion" },
    { src: "assets/leoparda vs murci.jpg", caption: "Descripcion" },
    { src: "assets/lobo vs caballo.png", caption: "Descripcion" },
    { src: "assets/zorra blanca.png", caption: "Descripcion" },
    { src: "assets/dimi x eliza.png", caption: "Descripcion" },
    { src: "assets/lab 3.png", caption: "Descripcion" },
    { src: "assets/dimitri huyendo.jpg", caption: "Descripcion" },
    { src: "assets/bestias juntas 4.jpeg", caption: "Descripcion" },
    { src: "assets/gente escapa.jpeg", caption: "Descripcion" },
    { src: "assets/bestias juntas 2.jpeg", caption: "Descripcion" },
    { src: "assets/monstruo2.jpg", caption: "Descripcion" },
    { src: "assets/dimi y cienti.png", caption: "Descripcion" },
    { src: "assets/siberia.jpeg", caption: "Descripcion" },
    { src: "assets/alexia y sham por besarse.png", caption: "Descripcion" },
    { src: "assets/eliza por atacar.png", caption: "Descripcion" },
    { src: "assets/leoparda 2.jpeg", caption: "Descripcion" },

  ],

    // Contenido extra. type: "video" (usa url) o "image" (usa src).
  // category es el nombre del filtro: los filtros se arman solos con las categorías que uses.
  EXTRAS: [
     { type: "video", category: "Personajes", title: "Svetlana leoparda.", desc: "Momento en que Svetlana gana una pelea en el último torneo.", url: "assets/svetlana gana.mp4", poster: "assets/leoparda vs murci.jpg" },
     { type: "video", category: "Personajes", title: "Alexia", desc: "Alexia modelando", url: "assets/alexia modelando 2.mp4", poster: "assets/alexiaacostada.jpg" },
     { type: "video", category: "Escenas inéditas", title: "Estilo cómic", desc: "Originalmente Morph Corporation era estilo cómic, pero con el tiempo decidí usar inteligencia artificial para cambiar al estilo ultrarealista.", url: "assets/shami comic.mp4", poster: "assets/shamcomic.jpg" },
     { type: "video", category: "Escenas inéditas", title: "Prototipo-06", desc: "Walter transformado.", url: "assets/tigre blanco.mp4", poster: "assets/tigre blanco.png" },
    { type: "video", category: "Escenas inéditas", title: "Trailer de Dimitri", desc: "Escena donde Dimitri se ve trabajando en una criatura extraña.", url: "https://youtu.be/4oInE15OZp0?si=_eK5eVNPgtpFbSNL", poster: "assets/Teaser trailer Morph.jpg" },
    { type: "video", category: "Escenas inéditas", title: "", desc: "Shami fue clasificada como un prototipo asesino, y es de las más difíciles de controlar.", url: "assets/sham ataca.mp4", poster: "assets/sham ataca 2.png" },
     { type: "image", category: "Fotos inéditas", title: "Torneo final", desc: "Shami vs Lagarto", src: "assets/sham golpea.png" },
     { type: "image", category: "Fotos inéditas", title: "prototipo-0", desc: "Eliza en la nieve luego de salir al exterior.", src: "assets/eliza en nieve.jpg" },
  ],


  // Música. url: link de YouTube, o un archivo .mp4 / .mp3 en assets.
  // subs: (opcional) archivo de subtítulos .vtt, solo para videos .mp4 subidos.
  // meaning: el significado de la canción. lyrics: (opcional) la letra, con comillas invertidas ` ` para poder usar varios renglones.
  MUSIC: [
    { title: "Ya no tengo fuerzas para mentir", artist: "Shami Rochefort", chapter: "Suena en el capítulo 20 y 25 final", url: "https://youtu.be/8IqjUKj4Wp8?si=UnQh9ShO6GhtA1IL", poster: "assets/Alexia cantando.jpg", subs: "", meaning: "Esta canción representa uno de los momentos más íntimos y significativos de la relación entre Alexia y Shami en MORPH Corporation: Pulse Project. Su primera aparición tiene lugar en el capítulo 20, durante la escena del domo de estrellas artificiales: un espacio que, para Alexia, simboliza algo que casi nunca pudo tener dentro de la corporación: libertad. Acostumbrada a vivir bajo las exigencias de Ivanov y a mantener siempre el control, Alexia encontraba en aquel lugar un refugio donde podía aislarse, desconectar y dejar de lado, aunque fuera por un instante, las responsabilidades que la rodeaban. Lo que inicialmente era un espacio personal terminó convirtiéndose en algo mucho más importante cuando decidió compartirlo con Shami. Después de semanas de distanciamiento y dolor, provocados por el secreto de Alexia sobre el destino que le esperaba a Shami, es ella quien finalmente da el primer paso hacia la reconciliación. En ese cielo artificial, ambas dejan atrás sus defensas y se permiten expresar lo que habían estado reprimiendo. La canción acompaña ese momento de vulnerabilidad, perdón y entrega, que marca un nuevo capítulo en su relación y su primera experiencia íntima juntas. Pero la historia de este vínculo es mucho más compleja de lo que parece. Alexia fue asignada por su padre al cuidado y control del Prototipo-07. Desde el principio, la naturaleza felina de Shami despertó su interés, aunque también le provocaba frustración y desconcierto. Acostumbrada a controlar cada situación, Alexia no sabía cómo enfrentarse a alguien que desafiaba constantemente sus métodos y sus emociones. Su hostilidad inicial, sus provocaciones y el maltrato que ejerció sobre Shami terminaron ocultando una atracción que ni ella misma comprendía. Shami, por su parte, sintió atracción por Alexia desde el primer encuentro. Mientras sus sentimientos crecían, también lo hacían la confusión, la desconfianza y el dolor causados por los secretos que las separaban. A esa complejidad se suma una revelación fundamental: Shami fue creada utilizando ADN del gato fallecido de Alexia, un hecho que Ivanov le ocultó y que ella terminó descubriendo por su cuenta. La revelación sacude profundamente a Alexia, pero no consigue borrar los sentimientos que ya han nacido entre ambas. Su romance no sigue el camino convencional de una historia de amor. No se trata de una relación basada en roles tradicionales, ni de una atracción que Alexia hubiera esperado experimentar. Es un vínculo que surge entre dos personas enfrentadas por sus circunstancias, sus contradicciones y la propia estructura de MORPH; una relación marcada por el secreto, la culpa, el deseo, los celos y la dificultad de comprender lo que sienten. La canción también regresa en el capítulo 25, cuando Shami debe enfrentarse a una lucha decisiva para romper el collar de Alexia. En ese contexto, sus palabras adquieren un significado distinto: aquello que Alexia expresó en el domo ya no es solamente una confesión de amor, sino una promesa que pone a prueba lo que ambas están dispuestas a sacrificar para permanecer juntas. Las estrellas artificiales representan la libertad que Alexia anhelaba. Las cadenas representan aquello que las mantiene prisioneras. Y el amor, por complejo e inesperado que sea, se convierte en una razón para desafiarlo.", lyrics: "" },
  ],






  // Zona +18: la web NO aloja ese contenido. Muestra un aviso de edad y, si confirman,
  // abre el link de tu otro sitio. Pega ese link en "url". enabled: false oculta la seccion.
  ADULT: {
    enabled: true,
    url: "https://t.me/corporacionmorphpulseproject",
    title: "Zona +18",
    text: "Escenas inéditas y videos sugerentes que no entran en las redes. Solo para mayores de 18 años.",
    warning: "Esta sección lleva a contenido para mayores de 18: escenas sugerentes y violencia de ficción. Al continuar confirmas que tienes 18 años o más.",
    missing: "El enlace de esta sección todavía no está cargado."
  },

  // Frases de Aurora segun la seccion en la que estas
  AURORA_LINES: {
      
        
    inicio: "Bienvenida a la Corporación. Soy Aurora. Tus datos ya están registrados.",
    serie: "Esta es la historia del Proyecto Pulse. Lee con atención, te va a servir.",
    trailer: "Reproducción disponible. El tráiler no incluye todos los errores del sistema.",
    personajes: "Ficha de personal. Toca una tarjeta para abrir el expediente completo.",
    mundo: "Zona clasificada: la arena, las apuestas y la élite. No pregunten quién gana.",
    capitulos: "Archivo de capítulos ordenado. Yo no los miro dos veces. Bueno, a veces sí.",
    galeria: "Registro visual. Algunas imágenes no deberían existir.",
    extras: "Contenido que sólo encontrarás aquí.",
    musica: "Toda la música de la serie y sus significados.",
    zona18: "Acceso restringido. Solo mayores de 18 años. Yo confío en ti."
  }
};








