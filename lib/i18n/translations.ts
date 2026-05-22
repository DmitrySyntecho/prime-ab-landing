export type Locale = "en" | "es" | "fr" | "nl"

export const locales: Locale[] = ["en", "es", "fr", "nl"]

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  nl: "Nederlands",
}

// Type-safe translation keys
export type TranslationKey = keyof typeof translations.en

export const translations = {
  en: {
    // Header Navigation
    "nav.services": "Services",
    "nav.rentals": "Rentals",
    "nav.portfolio": "Portfolio",
    "nav.aboutUs": "About Us",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",
    "nav.callUs": "Call Us",

    // Hero Section
    "hero.tagline": "Your Vision, Our Production",
    "hero.title": "Full AV Production",
    "hero.titleHighlight": "for High-Stakes Events",
    "hero.description":
      "The AV partner brands trust for corporate events, brand activations, experiential marketing, and studio work. Full-service audio, video, lighting, and staging production.",
    "hero.cta.quote": "Start Your Quote",
    "hero.cta.portfolio": "View Portfolio",
    "hero.stats.events": "Events Produced",
    "hero.stats.rating": "Client Rating",
    "hero.stats.support": "Support for Active Events",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive AV solutions for every event type",
    "services.stageRental": "Stage Rental",
    "services.stageRental.desc": "Portable, truss-built, or mobile stages — engineered, certified, and crewed",
    "services.soundRental": "Sound System Rental",
    "services.soundRental.desc": "L-Acoustics and d&b systems, tuned to your room with A1 engineer",
    "services.lightingRental": "Lighting Equipment Rental",
    "services.lightingRental.desc": "Designed, pre-vis'd, and programmed with senior LD on every event",
    "services.fullAVProduction": "Full AV Production",
    "services.fullAVProduction.desc": "One team, one contract, one producer — from pre-vis to strike",
    "services.tvRental": "TV Rental",
    "services.tvRental.desc": "Confidence monitors to video walls — 32\" to 98\", indoor and outdoor",
    "services.projectorRental": "Projector & Screen Rental",
    "services.projectorRental.desc": "Boardroom to ballroom — plus projection mapping when the room is the canvas",
    "services.pipeDrapeRental": "Pipe & Drape Rental",
    "services.pipeDrapeRental.desc": "IFR-certified drape, any height and color, installed by our crew",
    "services.ledRental": "LED Screen Rental",
    "services.ledRental.desc": "Indoor, outdoor, mobile — same-day quote, senior crew on every job",
    "services.learnMore": "Learn More",
    "services.viewAll": "View All Services",

    // Rentals Section
    "rentals.title": "Equipment Rentals",
    "rentals.subtitle": "Professional-grade equipment for any event",
    "rentals.stage": "Stage Rentals",
    "rentals.tv": "TV & Monitor Rentals",
    "rentals.sound": "Sound System Rentals",
    "rentals.lighting": "Lighting Rentals",
    "rentals.led": "LED Wall Rentals",
    "rentals.projector": "Projector & Screen Rentals",
    "rentals.truss": "Truss & Rigging Rentals",
    "rentals.pipeDrape": "Pipe & Drape Rentals",
    "rentals.viewAll": "View All Rentals",
    "rentals.startingAt": "Starting at",
    "rentals.perDay": "/day",

    // About Section
    "about.title": "About Us",
    "about.subtitle": "Your trusted partner in event production",
    "about.description":
      "With over a decade of experience, Prime Line AV has become the go-to AV production company for Fortune 500 companies, major brands, and event planners across the nation.",
    "about.mission": "Our Mission",
    "about.missionText":
      "To deliver flawless audio-visual experiences that elevate every event and exceed client expectations.",
    "about.readMore": "Read More About Us",

    // Why Choose Us
    "whyUs.title": "Why Choose Us",
    "whyUs.subtitle": "What sets us apart from the competition",
    "whyUs.experience": "15+ Years Experience",
    "whyUs.experience.desc": "Over a decade of expertise in event production",
    "whyUs.support": "24/7 Support",
    "whyUs.support.desc": "Round-the-clock technical support for your events",
    "whyUs.nationwide": "Nationwide Coverage",
    "whyUs.nationwide.desc": "Serving clients across all 50 states",
    "whyUs.equipment": "Premium Equipment",
    "whyUs.equipment.desc": "Top-of-the-line gear from leading manufacturers",

    // Testimonials
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "What our clients say about us",

    // CTA Banner
    "cta.title": "Ready to Elevate Your Event?",
    "cta.subtitle": "Get a custom quote for your next production",
    "cta.button": "Start Your Quote",
    "cta.call": "Or call us at",

    // Footer
    "footer.newsletter": "Subscribe to Our Newsletter",
    "footer.newsletterDesc": "Get regular updates on trends in event industry",
    "footer.subscribe": "Subscribe",
    "footer.emailPlaceholder": "Enter your email",
    "footer.rentals": "Rentals",
    "footer.services": "Services",
    "footer.installations": "Installations",
    "footer.locations": "Locations",
    "footer.company": "Company",
    "footer.followUs": "Follow us",
    "footer.callback": "Request a Callback",
    "footer.callbackDesc": "We'll get back to you within 24 hours",
    "footer.fullName": "Full Name",
    "footer.phone": "Phone",
    "footer.email": "E-mail",
    "footer.requestCallback": "Request Callback",
    "footer.copyright": "© 2025 Prime Line AV. All Rights Reserved",
    "footer.hours": "Mon-Fri: 9am-6pm",
    "footer.weekendHours": "Sat-Sun: 9am-2pm",

    // Quote Form
    "quote.title": "Get Your Custom Quote",
    "quote.subtitle": "Tell us about your event and we'll provide a detailed estimate",
    "quote.name": "Full Name",
    "quote.email": "Email Address",
    "quote.phone": "Phone Number",
    "quote.eventType": "Event Type",
    "quote.eventDate": "Event Date",
    "quote.location": "Event Location",
    "quote.budget": "Estimated Budget",
    "quote.details": "Event Details",
    "quote.submit": "Submit Quote Request",
    "quote.sending": "Sending...",

    // Event Types
    "events.title": "Event Types We Serve",
    "events.subtitle": "From intimate gatherings to large-scale productions",
    "events.corporate": "Corporate Events",
    "events.conferences": "Conferences & Trade Shows",
    "events.concerts": "Concerts & Festivals",
    "events.weddings": "Weddings & Galas",
    "events.sports": "Sporting Events",
    "events.activations": "Brand Activations",

    // Case Studies
    "caseStudies.title": "Case Studies",
    "caseStudies.subtitle": "See our work in action",
    "caseStudies.viewProject": "View Project",
    "caseStudies.viewAll": "View All Case Studies",

    // Portfolio
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "A showcase of our finest work",
    "portfolio.viewAll": "View Full Portfolio",

    // Common
    "common.learnMore": "Learn More",
    "common.viewAll": "View All",
    "common.getStarted": "Get Started",
    "common.contactUs": "Contact Us",
    "common.readMore": "Read More",
    "common.seeMore": "See More",
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.close": "Close",

    // FIFA Page
    "fifa.title": "FIFA World Cup 2026",
    "fifa.subtitle": "AV Packages",
    "fifa.heroTitle": "FIFA World Cup 2026",
    "fifa.heroSubtitle": "Premium AV Packages for Watch Parties & Fan Zones",
    "fifa.heroDescription":
      "Create unforgettable viewing experiences for the biggest sporting event in history. From backyard watch parties to massive fan zones.",
    "fifa.getQuote": "Get Your Quote",
    "fifa.viewPackages": "View Packages",
    "fifa.features.title": "Everything You Need for the Perfect Watch Party",
    "fifa.packages.title": "Choose Your Package",
    "fifa.packages.subtitle": "Packages for every venue size and budget",
    "fifa.cities.title": "2026 Host Cities We Serve",
    "fifa.cities.subtitle": "Full AV support across all US World Cup venues",
    "fifa.whyUs.title": "Why Choose Prime Line AV",
    "fifa.cta.title": "Ready to Host the Ultimate Watch Party?",
    "fifa.cta.subtitle": "Book early for the best availability during World Cup 2026",
  },

  es: {
    // Header Navigation
    "nav.services": "Servicios",
    "nav.rentals": "Alquileres",
    "nav.portfolio": "Portafolio",
    "nav.aboutUs": "Nosotros",
    "nav.contact": "Contacto",
    "nav.getQuote": "Cotizar",
    "nav.callUs": "Llámanos",

    // Hero Section
    "hero.tagline": "Tu Visión, Nuestra Producción",
    "hero.title": "Producción AV Completa",
    "hero.titleHighlight": "para Eventos de Alto Impacto",
    "hero.description":
      "El socio AV en quien confían las marcas para eventos corporativos, activaciones de marca, marketing experiencial y trabajo de estudio. Producción completa de audio, video, iluminación y escenografía.",
    "hero.cta.quote": "Solicitar Cotización",
    "hero.cta.portfolio": "Ver Portafolio",
    "hero.stats.events": "Eventos Producidos",
    "hero.stats.rating": "Calificación de Clientes",
    "hero.stats.support": "Soporte para Eventos Activos",

    // Services Section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones AV integrales para todo tipo de eventos",
    "services.stageRental": "Alquiler de Escenarios",
    "services.stageRental.desc": "Escenarios portátiles, de truss o móviles — diseñados, certificados y con equipo",
    "services.soundRental": "Alquiler de Sistemas de Sonido",
    "services.soundRental.desc": "Sistemas L-Acoustics y d&b, ajustados a tu espacio con ingeniero A1",
    "services.lightingRental": "Alquiler de Equipos de Iluminación",
    "services.lightingRental.desc": "Diseñado, pre-visualizado y programado con LD senior en cada evento",
    "services.fullAVProduction": "Producción AV Completa",
    "services.fullAVProduction.desc": "Un equipo, un contrato, un productor — desde pre-vis hasta desmontaje",
    "services.tvRental": "Alquiler de TV",
    "services.tvRental.desc": "Monitores de confianza hasta video walls — 32\" a 98\", interior y exterior",
    "services.projectorRental": "Alquiler de Proyectores y Pantallas",
    "services.projectorRental.desc": "De sala de juntas a salón de baile — más projection mapping cuando el espacio es el lienzo",
    "services.pipeDrapeRental": "Alquiler de Pipe & Drape",
    "services.pipeDrapeRental.desc": "Cortinas IFR certificadas, cualquier altura y color, instaladas por nuestro equipo",
    "services.ledRental": "Alquiler de Pantallas LED",
    "services.ledRental.desc": "Interior, exterior, móvil — cotización el mismo día, equipo senior en cada trabajo",
    "services.learnMore": "Saber Más",
    "services.viewAll": "Ver Todos los Servicios",

    // Rentals Section
    "rentals.title": "Alquiler de Equipos",
    "rentals.subtitle": "Equipo de grado profesional para cualquier evento",
    "rentals.stage": "Alquiler de Escenarios",
    "rentals.tv": "Alquiler de TV y Monitores",
    "rentals.sound": "Alquiler de Sistemas de Sonido",
    "rentals.lighting": "Alquiler de Iluminación",
    "rentals.led": "Alquiler de Pantallas LED",
    "rentals.projector": "Alquiler de Proyectores y Pantallas",
    "rentals.truss": "Alquiler de Truss y Rigging",
    "rentals.pipeDrape": "Alquiler de Pipe & Drape",
    "rentals.viewAll": "Ver Todos los Alquileres",
    "rentals.startingAt": "Desde",
    "rentals.perDay": "/día",

    // About Section
    "about.title": "Sobre Nosotros",
    "about.subtitle": "Tu socio de confianza en producción de eventos",
    "about.description":
      "Con más de una década de experiencia, Prime Line AV se ha convertido en la empresa de producción AV preferida por empresas Fortune 500, grandes marcas y organizadores de eventos en todo el país.",
    "about.mission": "Nuestra Misión",
    "about.missionText":
      "Ofrecer experiencias audiovisuales impecables que eleven cada evento y superen las expectativas del cliente.",
    "about.readMore": "Leer Más Sobre Nosotros",

    // Why Choose Us
    "whyUs.title": "¿Por Qué Elegirnos?",
    "whyUs.subtitle": "Lo que nos diferencia de la competencia",
    "whyUs.experience": "15+ Años de Experiencia",
    "whyUs.experience.desc": "Más de una década de experiencia en producción de eventos",
    "whyUs.support": "Soporte 24/7",
    "whyUs.support.desc": "Soporte técnico las 24 horas para tus eventos",
    "whyUs.nationwide": "Cobertura Nacional",
    "whyUs.nationwide.desc": "Atendemos clientes en los 50 estados",
    "whyUs.equipment": "Equipo Premium",
    "whyUs.equipment.desc": "Equipos de última generación de los principales fabricantes",

    // Testimonials
    "testimonials.title": "Testimonios de Clientes",
    "testimonials.subtitle": "Lo que dicen nuestros clientes sobre nosotros",

    // CTA Banner
    "cta.title": "¿Listo para Elevar tu Evento?",
    "cta.subtitle": "Obtén una cotización personalizada para tu próxima producción",
    "cta.button": "Solicitar Cotización",
    "cta.call": "O llámanos al",

    // Footer
    "footer.newsletter": "Suscríbete a Nuestro Boletín",
    "footer.newsletterDesc": "Recibe actualizaciones sobre tendencias en la industria de eventos",
    "footer.subscribe": "Suscribirse",
    "footer.emailPlaceholder": "Ingresa tu email",
    "footer.rentals": "Alquileres",
    "footer.services": "Servicios",
    "footer.installations": "Instalaciones",
    "footer.locations": "Ubicaciones",
    "footer.company": "Empresa",
    "footer.followUs": "Síguenos",
    "footer.callback": "Solicitar Llamada",
    "footer.callbackDesc": "Te contactaremos en 24 horas",
    "footer.fullName": "Nombre Completo",
    "footer.phone": "Teléfono",
    "footer.email": "E-mail",
    "footer.requestCallback": "Solicitar Llamada",
    "footer.copyright": "© 2025 Prime Line AV. Todos los Derechos Reservados",
    "footer.hours": "Lun-Vie: 9am-6pm",
    "footer.weekendHours": "Sáb-Dom: 9am-2pm",

    // Quote Form
    "quote.title": "Obtén Tu Cotización Personalizada",
    "quote.subtitle": "Cuéntanos sobre tu evento y te daremos un presupuesto detallado",
    "quote.name": "Nombre Completo",
    "quote.email": "Correo Electrónico",
    "quote.phone": "Número de Teléfono",
    "quote.eventType": "Tipo de Evento",
    "quote.eventDate": "Fecha del Evento",
    "quote.location": "Ubicación del Evento",
    "quote.budget": "Presupuesto Estimado",
    "quote.details": "Detalles del Evento",
    "quote.submit": "Enviar Solicitud de Cotización",
    "quote.sending": "Enviando...",

    // Event Types
    "events.title": "Tipos de Eventos que Atendemos",
    "events.subtitle": "Desde reuniones íntimas hasta producciones a gran escala",
    "events.corporate": "Eventos Corporativos",
    "events.conferences": "Conferencias y Ferias",
    "events.concerts": "Conciertos y Festivales",
    "events.weddings": "Bodas y Galas",
    "events.sports": "Eventos Deportivos",
    "events.activations": "Activaciones de Marca",

    // Case Studies
    "caseStudies.title": "Casos de Éxito",
    "caseStudies.subtitle": "Mira nuestro trabajo en acción",
    "caseStudies.viewProject": "Ver Proyecto",
    "caseStudies.viewAll": "Ver Todos los Casos",

    // Portfolio
    "portfolio.title": "Nuestro Portafolio",
    "portfolio.subtitle": "Una muestra de nuestro mejor trabajo",
    "portfolio.viewAll": "Ver Portafolio Completo",

    // Common
    "common.learnMore": "Saber Más",
    "common.viewAll": "Ver Todo",
    "common.getStarted": "Comenzar",
    "common.contactUs": "Contáctanos",
    "common.readMore": "Leer Más",
    "common.seeMore": "Ver Más",
    "common.loading": "Cargando...",
    "common.error": "Ocurrió un error",
    "common.close": "Cerrar",

    // FIFA Page
    "fifa.title": "Copa Mundial FIFA 2026",
    "fifa.subtitle": "Paquetes AV",
    "fifa.heroTitle": "Copa Mundial FIFA 2026",
    "fifa.heroSubtitle": "Paquetes AV Premium para Fiestas y Zonas de Fans",
    "fifa.heroDescription":
      "Crea experiencias de visualización inolvidables para el evento deportivo más grande de la historia. Desde fiestas en el patio hasta enormes zonas de fans.",
    "fifa.getQuote": "Solicitar Cotización",
    "fifa.viewPackages": "Ver Paquetes",
    "fifa.features.title": "Todo lo que Necesitas para la Fiesta Perfecta",
    "fifa.packages.title": "Elige Tu Paquete",
    "fifa.packages.subtitle": "Paquetes para todo tamaño de venue y presupuesto",
    "fifa.cities.title": "Ciudades Sede 2026 que Atendemos",
    "fifa.cities.subtitle": "Soporte AV completo en todas las sedes del Mundial en EE.UU.",
    "fifa.whyUs.title": "¿Por Qué Elegir Prime Line AV?",
    "fifa.cta.title": "¿Listo para la Mejor Fiesta del Mundial?",
    "fifa.cta.subtitle": "Reserva temprano para mejor disponibilidad durante el Mundial 2026",
  },

  fr: {
    // Header Navigation
    "nav.services": "Services",
    "nav.rentals": "Locations",
    "nav.portfolio": "Portfolio",
    "nav.aboutUs": "À Propos",
    "nav.contact": "Contact",
    "nav.getQuote": "Devis",
    "nav.callUs": "Appelez-nous",

    // Hero Section
    "hero.tagline": "Votre Vision, Notre Production",
    "hero.title": "Production AV Complète",
    "hero.titleHighlight": "pour Événements de Prestige",
    "hero.description":
      "Le partenaire AV de confiance des marques pour événements d'entreprise, activations de marque, marketing expérientiel et travail en studio. Production audio, vidéo, éclairage et scénographie complète.",
    "hero.cta.quote": "Demander un Devis",
    "hero.cta.portfolio": "Voir Portfolio",
    "hero.stats.events": "Événements Produits",
    "hero.stats.rating": "Note Client",
    "hero.stats.support": "Support pour Événements Actifs",

    // Services Section
    "services.title": "Nos Services",
    "services.subtitle": "Solutions AV complètes pour tout type d'événement",
    "services.stageRental": "Location de Scènes",
    "services.stageRental.desc": "Scènes portables, sur truss ou mobiles — conçues, certifiées et avec équipe",
    "services.soundRental": "Location Systèmes Audio",
    "services.soundRental.desc": "Systèmes L-Acoustics et d&b, accordés à votre salle avec ingénieur A1",
    "services.lightingRental": "Location Équipement d'Éclairage",
    "services.lightingRental.desc": "Conçu, pré-visualisé et programmé avec LD senior sur chaque événement",
    "services.fullAVProduction": "Production AV Complète",
    "services.fullAVProduction.desc": "Une équipe, un contrat, un producteur — de la pré-vis au démontage",
    "services.tvRental": "Location TV",
    "services.tvRental.desc": "Moniteurs de confiance aux murs vidéo — 32\" à 98\", intérieur et extérieur",
    "services.projectorRental": "Location Projecteurs et Écrans",
    "services.projectorRental.desc": "De la salle de réunion à la salle de bal — plus projection mapping quand l'espace est la toile",
    "services.pipeDrapeRental": "Location Pipe & Drape",
    "services.pipeDrapeRental.desc": "Rideaux certifiés IFR, toute hauteur et couleur, installés par notre équipe",
    "services.ledRental": "Location Écrans LED",
    "services.ledRental.desc": "Intérieur, extérieur, mobile — devis le jour même, équipe senior sur chaque travail",
    "services.learnMore": "En Savoir Plus",
    "services.viewAll": "Voir Tous les Services",

    // Rentals Section
    "rentals.title": "Location d'Équipement",
    "rentals.subtitle": "Équipement professionnel pour tout événement",
    "rentals.stage": "Location de Scènes",
    "rentals.tv": "Location TV et Moniteurs",
    "rentals.sound": "Location Systèmes Audio",
    "rentals.lighting": "Location d'Éclairage",
    "rentals.led": "Location Murs LED",
    "rentals.projector": "Location Projecteurs et Écrans",
    "rentals.truss": "Location Truss et Rigging",
    "rentals.pipeDrape": "Location Pipe & Drape",
    "rentals.viewAll": "Voir Toutes les Locations",
    "rentals.startingAt": "À partir de",
    "rentals.perDay": "/jour",

    // About Section
    "about.title": "À Propos",
    "about.subtitle": "Votre partenaire de confiance en production événementielle",
    "about.description":
      "Avec plus d'une décennie d'expérience, Prime Line AV est devenu la référence en production AV pour les entreprises Fortune 500, les grandes marques et les organisateurs d'événements à travers le pays.",
    "about.mission": "Notre Mission",
    "about.missionText":
      "Offrir des expériences audiovisuelles impeccables qui élèvent chaque événement et dépassent les attentes des clients.",
    "about.readMore": "En Savoir Plus Sur Nous",

    // Why Choose Us
    "whyUs.title": "Pourquoi Nous Choisir",
    "whyUs.subtitle": "Ce qui nous distingue de la concurrence",
    "whyUs.experience": "15+ Ans d'Expérience",
    "whyUs.experience.desc": "Plus d'une décennie d'expertise en production événementielle",
    "whyUs.support": "Support 24/7",
    "whyUs.support.desc": "Support technique 24h/24 pour vos événements",
    "whyUs.nationwide": "Couverture Nationale",
    "whyUs.nationwide.desc": "Nous servons des clients dans les 50 états",
    "whyUs.equipment": "Équipement Premium",
    "whyUs.equipment.desc": "Matériel haut de gamme des principaux fabricants",

    // Testimonials
    "testimonials.title": "Témoignages Clients",
    "testimonials.subtitle": "Ce que nos clients disent de nous",

    // CTA Banner
    "cta.title": "Prêt à Élever Votre Événement?",
    "cta.subtitle": "Obtenez un devis personnalisé pour votre prochaine production",
    "cta.button": "Demander un Devis",
    "cta.call": "Ou appelez-nous au",

    // Footer
    "footer.newsletter": "Abonnez-vous à Notre Newsletter",
    "footer.newsletterDesc": "Recevez des mises à jour sur les tendances de l'industrie événementielle",
    "footer.subscribe": "S'abonner",
    "footer.emailPlaceholder": "Entrez votre email",
    "footer.rentals": "Locations",
    "footer.services": "Services",
    "footer.installations": "Installations",
    "footer.locations": "Emplacements",
    "footer.company": "Entreprise",
    "footer.followUs": "Suivez-nous",
    "footer.callback": "Demander un Rappel",
    "footer.callbackDesc": "Nous vous recontacterons dans les 24 heures",
    "footer.fullName": "Nom Complet",
    "footer.phone": "Téléphone",
    "footer.email": "E-mail",
    "footer.requestCallback": "Demander un Rappel",
    "footer.copyright": "© 2025 Prime Line AV. Tous Droits Réservés",
    "footer.hours": "Lun-Ven: 9h-18h",
    "footer.weekendHours": "Sam-Dim: 9h-14h",

    // Quote Form
    "quote.title": "Obtenez Votre Devis Personnalisé",
    "quote.subtitle": "Parlez-nous de votre événement et nous vous fournirons un devis détaillé",
    "quote.name": "Nom Complet",
    "quote.email": "Adresse Email",
    "quote.phone": "Numéro de Téléphone",
    "quote.eventType": "Type d'Événement",
    "quote.eventDate": "Date de l'Événement",
    "quote.location": "Lieu de l'Événement",
    "quote.budget": "Budget Estimé",
    "quote.details": "Détails de l'Événement",
    "quote.submit": "Soumettre la Demande de Devis",
    "quote.sending": "Envoi en cours...",

    // Event Types
    "events.title": "Types d'Événements que Nous Servons",
    "events.subtitle": "Des réunions intimes aux productions à grande échelle",
    "events.corporate": "Événements d'Entreprise",
    "events.conferences": "Conférences et Salons",
    "events.concerts": "Concerts et Festivals",
    "events.weddings": "Mariages et Galas",
    "events.sports": "Événements Sportifs",
    "events.activations": "Activations de Marque",

    // Case Studies
    "caseStudies.title": "Études de Cas",
    "caseStudies.subtitle": "Découvrez notre travail en action",
    "caseStudies.viewProject": "Voir le Projet",
    "caseStudies.viewAll": "Voir Toutes les Études",

    // Portfolio
    "portfolio.title": "Notre Portfolio",
    "portfolio.subtitle": "Une vitrine de nos meilleures réalisations",
    "portfolio.viewAll": "Voir le Portfolio Complet",

    // Common
    "common.learnMore": "En Savoir Plus",
    "common.viewAll": "Voir Tout",
    "common.getStarted": "Commencer",
    "common.contactUs": "Contactez-nous",
    "common.readMore": "Lire Plus",
    "common.seeMore": "Voir Plus",
    "common.loading": "Chargement...",
    "common.error": "Une erreur est survenue",
    "common.close": "Fermer",

    // FIFA Page
    "fifa.title": "Coupe du Monde FIFA 2026",
    "fifa.subtitle": "Forfaits AV",
    "fifa.heroTitle": "Coupe du Monde FIFA 2026",
    "fifa.heroSubtitle": "Forfaits AV Premium pour Soirées et Zones de Fans",
    "fifa.heroDescription":
      "Créez des expériences de visionnage inoubliables pour le plus grand événement sportif de l'histoire. Des soirées dans le jardin aux immenses zones de fans.",
    "fifa.getQuote": "Demander un Devis",
    "fifa.viewPackages": "Voir les Forfaits",
    "fifa.features.title": "Tout ce dont Vous Avez Besoin pour la Fête Parfaite",
    "fifa.packages.title": "Choisissez Votre Forfait",
    "fifa.packages.subtitle": "Forfaits pour toutes tailles de salle et budgets",
    "fifa.cities.title": "Villes Hôtes 2026 que Nous Servons",
    "fifa.cities.subtitle": "Support AV complet dans toutes les villes hôtes américaines",
    "fifa.whyUs.title": "Pourquoi Choisir Prime Line AV",
    "fifa.cta.title": "Prêt à Organiser la Fête Ultime?",
    "fifa.cta.subtitle": "Réservez tôt pour la meilleure disponibilité pendant la Coupe du Monde 2026",
  },

  nl: {
    // Header Navigation
    "nav.services": "Diensten",
    "nav.rentals": "Verhuur",
    "nav.portfolio": "Portfolio",
    "nav.aboutUs": "Over Ons",
    "nav.contact": "Contact",
    "nav.getQuote": "Offerte",
    "nav.callUs": "Bel Ons",

    // Hero Section
    "hero.tagline": "Uw Visie, Onze Productie",
    "hero.title": "Complete AV Productie",
    "hero.titleHighlight": "voor Belangrijke Evenementen",
    "hero.description":
      "De AV-partner waar merken op vertrouwen voor bedrijfsevenementen, merkactivaties, ervaringsmarketing en studiowerk. Volledige audio-, video-, verlichtings- en podiumproductie.",
    "hero.cta.quote": "Offerte Aanvragen",
    "hero.cta.portfolio": "Portfolio Bekijken",
    "hero.stats.events": "Geproduceerde Evenementen",
    "hero.stats.rating": "Klantbeoordeling",
    "hero.stats.support": "Ondersteuning voor Actieve Evenementen",

    // Services Section
    "services.title": "Onze Diensten",
    "services.subtitle": "Uitgebreide AV-oplossingen voor elk type evenement",
    "services.stageRental": "Podium Verhuur",
    "services.stageRental.desc": "Draagbare, truss-gebouwde of mobiele podia — ontworpen, gecertificeerd en bemand",
    "services.soundRental": "Geluidssysteem Verhuur",
    "services.soundRental.desc": "L-Acoustics en d&b systemen, afgestemd op uw ruimte met A1 engineer",
    "services.lightingRental": "Verlichtingsapparatuur Verhuur",
    "services.lightingRental.desc": "Ontworpen, voorgevisualiseerd en geprogrammeerd met senior LD op elk evenement",
    "services.fullAVProduction": "Complete AV Productie",
    "services.fullAVProduction.desc": "Eén team, één contract, één producer — van pre-vis tot afbouw",
    "services.tvRental": "TV Verhuur",
    "services.tvRental.desc": "Confidence monitors tot videowalls — 32\" tot 98\", binnen en buiten",
    "services.projectorRental": "Projector & Scherm Verhuur",
    "services.projectorRental.desc": "Van vergaderruimte tot balzaal — plus projectiemapping wanneer de ruimte het canvas is",
    "services.pipeDrapeRental": "Pipe & Drape Verhuur",
    "services.pipeDrapeRental.desc": "IFR-gecertificeerde gordijnen, elke hoogte en kleur, geïnstalleerd door ons team",
    "services.ledRental": "LED Scherm Verhuur",
    "services.ledRental.desc": "Binnen, buiten, mobiel — offerte dezelfde dag, senior crew op elke klus",
    "services.learnMore": "Meer Info",
    "services.viewAll": "Alle Diensten Bekijken",

    // Rentals Section
    "rentals.title": "Apparatuur Verhuur",
    "rentals.subtitle": "Professionele apparatuur voor elk evenement",
    "rentals.stage": "Podium Verhuur",
    "rentals.tv": "TV & Monitor Verhuur",
    "rentals.sound": "Geluidssysteem Verhuur",
    "rentals.lighting": "Verlichting Verhuur",
    "rentals.led": "LED Wand Verhuur",
    "rentals.projector": "Projector & Scherm Verhuur",
    "rentals.truss": "Truss & Rigging Verhuur",
    "rentals.pipeDrape": "Pipe & Drape Verhuur",
    "rentals.viewAll": "Alle Verhuur Bekijken",
    "rentals.startingAt": "Vanaf",
    "rentals.perDay": "/dag",

    // About Section
    "about.title": "Over Ons",
    "about.subtitle": "Uw betrouwbare partner in evenementproductie",
    "about.description":
      "Met meer dan een decennium ervaring is Prime Line AV de go-to AV-productiebedrijf geworden voor Fortune 500-bedrijven, grote merken en eventplanners in het hele land.",
    "about.mission": "Onze Missie",
    "about.missionText":
      "Het leveren van vlekkeloze audiovisuele ervaringen die elk evenement naar een hoger niveau tillen en de verwachtingen van klanten overtreffen.",
    "about.readMore": "Lees Meer Over Ons",

    // Why Choose Us
    "whyUs.title": "Waarom Kiezen voor Ons",
    "whyUs.subtitle": "Wat ons onderscheidt van de concurrentie",
    "whyUs.experience": "15+ Jaar Ervaring",
    "whyUs.experience.desc": "Meer dan een decennium expertise in evenementproductie",
    "whyUs.support": "24/7 Ondersteuning",
    "whyUs.support.desc": "Technische ondersteuning rond de klok voor uw evenementen",
    "whyUs.nationwide": "Landelijke Dekking",
    "whyUs.nationwide.desc": "We bedienen klanten in alle 50 staten",
    "whyUs.equipment": "Premium Apparatuur",
    "whyUs.equipment.desc": "Topapparatuur van toonaangevende fabrikanten",

    // Testimonials
    "testimonials.title": "Klant Testimonials",
    "testimonials.subtitle": "Wat onze klanten over ons zeggen",

    // CTA Banner
    "cta.title": "Klaar om Uw Evenement te Verheffen?",
    "cta.subtitle": "Krijg een offerte op maat voor uw volgende productie",
    "cta.button": "Offerte Aanvragen",
    "cta.call": "Of bel ons op",

    // Footer
    "footer.newsletter": "Abonneer op Onze Nieuwsbrief",
    "footer.newsletterDesc": "Ontvang regelmatige updates over trends in de evenementenindustrie",
    "footer.subscribe": "Abonneren",
    "footer.emailPlaceholder": "Voer uw e-mail in",
    "footer.rentals": "Verhuur",
    "footer.services": "Diensten",
    "footer.installations": "Installaties",
    "footer.locations": "Locaties",
    "footer.company": "Bedrijf",
    "footer.followUs": "Volg ons",
    "footer.callback": "Terugbelverzoek",
    "footer.callbackDesc": "We nemen binnen 24 uur contact met u op",
    "footer.fullName": "Volledige Naam",
    "footer.phone": "Telefoon",
    "footer.email": "E-mail",
    "footer.requestCallback": "Terugbellen Aanvragen",
    "footer.copyright": "© 2025 Prime Line AV. Alle Rechten Voorbehouden",
    "footer.hours": "Ma-Vr: 9u-18u",
    "footer.weekendHours": "Za-Zo: 9u-14u",

    // Quote Form
    "quote.title": "Krijg Uw Offerte op Maat",
    "quote.subtitle": "Vertel ons over uw evenement en we geven u een gedetailleerde schatting",
    "quote.name": "Volledige Naam",
    "quote.email": "E-mailadres",
    "quote.phone": "Telefoonnummer",
    "quote.eventType": "Type Evenement",
    "quote.eventDate": "Evenementdatum",
    "quote.location": "Evenementlocatie",
    "quote.budget": "Geschat Budget",
    "quote.details": "Evenementdetails",
    "quote.submit": "Offerteverzoek Indienen",
    "quote.sending": "Verzenden...",

    // Event Types
    "events.title": "Evenementtypes die We Bedienen",
    "events.subtitle": "Van intieme bijeenkomsten tot grootschalige producties",
    "events.corporate": "Bedrijfsevenementen",
    "events.conferences": "Conferenties & Beurzen",
    "events.concerts": "Concerten & Festivals",
    "events.weddings": "Bruiloften & Gala's",
    "events.sports": "Sportevenementen",
    "events.activations": "Merkactivaties",

    // Case Studies
    "caseStudies.title": "Case Studies",
    "caseStudies.subtitle": "Zie ons werk in actie",
    "caseStudies.viewProject": "Project Bekijken",
    "caseStudies.viewAll": "Alle Cases Bekijken",

    // Portfolio
    "portfolio.title": "Ons Portfolio",
    "portfolio.subtitle": "Een showcase van ons beste werk",
    "portfolio.viewAll": "Volledig Portfolio Bekijken",

    // Common
    "common.learnMore": "Meer Info",
    "common.viewAll": "Alles Bekijken",
    "common.getStarted": "Aan de Slag",
    "common.contactUs": "Neem Contact Op",
    "common.readMore": "Lees Meer",
    "common.seeMore": "Meer Zien",
    "common.loading": "Laden...",
    "common.error": "Er is een fout opgetreden",
    "common.close": "Sluiten",

    // FIFA Page
    "fifa.title": "FIFA Wereldkampioenschap 2026",
    "fifa.subtitle": "AV Pakketten",
    "fifa.heroTitle": "FIFA Wereldkampioenschap 2026",
    "fifa.heroSubtitle": "Premium AV Pakketten voor Kijkfeesten & Fanzones",
    "fifa.heroDescription":
      "Creëer onvergetelijke kijkervaringen voor het grootste sportevenement in de geschiedenis. Van achtertuinfeesten tot enorme fanzones.",
    "fifa.getQuote": "Offerte Aanvragen",
    "fifa.viewPackages": "Pakketten Bekijken",
    "fifa.features.title": "Alles wat U Nodig Heeft voor het Perfecte Kijkfeest",
    "fifa.packages.title": "Kies Uw Pakket",
    "fifa.packages.subtitle": "Pakketten voor elke locatiegrootte en budget",
    "fifa.cities.title": "2026 Gaststeden die We Bedienen",
    "fifa.cities.subtitle": "Volledige AV-ondersteuning in alle Amerikaanse WK-locaties",
    "fifa.whyUs.title": "Waarom Kiezen voor Prime Line AV",
    "fifa.cta.title": "Klaar om het Ultieme Kijkfeest te Organiseren?",
    "fifa.cta.subtitle": "Boek vroeg voor de beste beschikbaarheid tijdens WK 2026",
  },
} as const
