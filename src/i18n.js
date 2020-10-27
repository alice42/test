import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'resume link': 'Resume',
      'projects link': 'Projects',
      'subtitle header': 'Front-End Developer',
      'cv part1 title': '<strong>PREVIOUS PROFESSIONAL EXPERIENCES</strong>',
      'cv part1 content':
        '<strong>Student Jobs</strong> <br />' +
        'Receptionist, waitress, secretary in a law firm...' +
        '<br /> 2005 – 2007 <br />' +
        '<br />' +
        '<strong>Manager</strong> - La Marine, Paris <br /> Bar/restaurant' +
        ' 52bis quai de Valmy, 75010' +
        '<br /> 2007 – 2009 <br />' +
        '<br />' +
        '<strong>Owner and Manager</strong> - La Faille, Paris' +
        '<br /> Bar/restaurant 96 rue de Ménilmontant, 75020 <br />' +
        '2009 – 2012 <br />' +
        '<br />' +
        '<strong>Accessory and decoration assistant</strong>, Paris' +
        '<br /> Productions: KG Productions, Cortland Films, BadTaste,' +
        'Filmanthrope...' +
        '<br />',
      'cv part2 title': '<strong>TECHNICAL PROFESSIONAL EXPERIENCES</strong>',
      'cv part2 content':
        '<strong>Web development intern</strong> <br />' +
        'Localéo, Paris <br />' +
        'February 2018 – August 2018 <br /> <br />' +
        '- Support management related to production projects<br />' +
        '<strong>technical stack:</strong> PHP, ' +
        'Zend, JavaScript, SQL, Git <br /> <br />' +
        '- Creation of a data setup and export tool <br />' +
        '<strong>technical stack:</strong>' +
        'PHP, JavaScript, Bootstrap, SQL <br /> <br />' +
        '- Creation of WordPress themes with dynamic page customization modules' +
        '<br />' +
        '<strong> technical stack:</strong> PHP, ' +
        'JavaScript, WordPress, SQL, JQuery, Google Analytics <br /><br />' +
        'Agile Development Methodology (Scrum) <br /> <br />' +
        '<strong>R&D Developer - Lab 42</strong> <br />' +
        'Veepee, Saint-Denis <br /> March 2019 – March 2020 <br /> <br />' +
        '- Creation of a single page application project generator <br />' +
        '<strong> technical stack:</strong> ReactJS, ' +
        'Styled-Component, StoryBook, Jest, Integromat, Airtable, Gitlab, ' +
        'RubyOnRails <br /> <br />' +
        '- Creation of a visualization tool for cloud resources and optimization of their cost and energy impact' +
        ' <br />' +
        'personal target: Management of the entire front / implementation of a user interface in the form of a Dashboard' +
        '<br />' +
        '<strong> technical stack: </strong>ReactJS, ' +
        'Redux, Saga, Python Django, Rust, GoLang,' +
        'InfluxDB, PostgreSQL, Kubernetes, Gitlab, Rancher <br />',
      'cv part3 title': ' <strong>INFORMATIONS</strong>',
      'cv part3 content':
        '06.61.60.21.29' +
        '<br /> alicemartin.crea@gmail.com' +
        '<br />' +
        '<br />' +
        '17, rue Francoeur <br />' +
        '75018 Paris' +
        '<br />' +
        '<br />' +
        '09/12/1986, Paris <br />' +
        'Driving licence',
      'cv part4 title': ' <strong>EDUCATION</strong>',
      'cv part4 content':
        '<strong> Literary Baccalaureate <br />' +
        'Fine Arts section' +
        '</strong>' +
        '<br />' +
        'Lycée Voltaire, Paris' +
        '<br /> 2005' +
        '<br />' +
        '<br />' +
        '<strong>Engineering/programming college</strong>' +
        '<br />' +
        '42, Paris' +
        '<br /> Since 2016',
      'cv part5 title': '<strong>SKILLS</strong>',
      'cv part5 content':
        'React JS <br />' +
        'React Native' +
        '<br /> Redux' +
        '<br /> Node JS <br />' +
        'JavaScript' +
        '<br /> Git' +
        '<br />' +
        'Docker <br /> Npm' +
        '<br />' +
        'Yarn' +
        '<br />' +
        'Shell' +
        '<br />' +
        'Unix / OSX C<br />' +
        'SQL' +
        '<br />' +
        'Mongo DB <br />FireBase <br />Xcode <br />HTML' +
        '<br />' +
        'CSS',
      'cv part6 title': '<strong>LANGUAGES</strong>',
      'cv part6 content': 'French: fluent<br /> English: professional skills'
    }
  },
  fr: {
    translation: {
      'resume link': 'CV',
      'projects link': 'Projets',
      'subtitle header': 'Développeur Front-End',
      'cv part1 title':
        '<strong>PRECEDENTES EXPERIENCES PROFESSIONNELLES</strong>',
      'cv part1 content':
        '<strong>Jobs Étudiants</strong> <br />' +
        'Hôtesse d’accueil, serveuse, secrétaire en cabinet d’avocats...' +
        '<br /> 2005 – 2007 <br />' +
        '<br />' +
        '<strong>Responsable</strong> - La Marine, Paris <br /> Bar/restaurant' +
        ' 52bis quai de Valmy, 75010' +
        '<br /> 2007 – 2009 <br />' +
        '<br />' +
        '<strong>Propriétaire et Gérante </strong> - La Faille, Paris' +
        '<br /> Bar/restaurant 96 rue de Ménilmontant, 75020 <br />' +
        '2009 – 2012 <br />' +
        '<br />' +
        '<strong> Assistante accessoiriste et decoration</strong>, Paris' +
        '<br /> Productions: KG Productions, Cortland Films, BadTaste,' +
        'Filmanthrope...' +
        '<br />',
      'cv part2 title':
        '<strong>EXPERIENCES PROFESSIONNELLES TECHNIQUES</strong>',
      'cv part2 content':
        '<strong>Stagiaire développement Web</strong> <br />' +
        'Localéo, Paris <br />' +
        'Février 2018 – Août 2018 <br /> <br />' +
        '- Gestion du support lié aux projets en production <br />' +
        '<strong>stack abordée:</strong> PHP,' +
        'Zend, JavaScript, SQL, Git <br /> <br />' +
        "- Création d'un outil de paramètrage et d‘exports de données <br />" +
        '<strong>stack abordée:</strong> PHP, JavaScript, Bootstrap, SQL <br /> <br />' +
        '- Création de thèmes WordPress présentant des modules de customisation' +
        'dynamique des pages <br />' +
        '<strong> stack abordée:</strong> PHP, ' +
        'JavaScript, WordPress, SQL, JQuery, Google Analytics <br /><br />' +
        'Méthodologie Agile (Scrum) <br /> <br />' +
        '<strong>Développeur R&D - Lab 42</strong> <br />' +
        'Veepee, Saint-Denis <br /> Mars 2019 – Mars 2020 <br /> <br />' +
        '- Création d’un générateur de projets single page application <br />' +
        '<strong> stack abordée:</strong> ReactJS, ' +
        'Styled-Component, StoryBook, Jest, Integromat, Airtable, Gitlab, ' +
        'RubyOnRails <br /> <br />' +
        '- Création d’un outil de visualisation des ressources cloud et ' +
        'd’optimisation de leur coût et impact énergétique <br />' +
        'Objectif personnel: Gestion de l’intégralité du front / mise en place ' +
        'd’une interface utilisateur sous forme de Dashboard <br />' +
        '<strong> stack abordée: </strong>ReactJS, ' +
        'Redux, Saga, Python Django, Rust, GoLang,' +
        'InfluxDB, PostgreSQL, Kubernetes, Gitlab, Rancher <br />',
      'cv part3 title': ' <strong>INFORMATIONS</strong>',
      'cv part3 content':
        '06.61.60.21.29' +
        '<br /> alicemartin.crea@gmail.com' +
        '<br />' +
        '<br />' +
        '17, rue Francoeur <br />' +
        '75018 Paris' +
        '<br />' +
        '<br />' +
        '09/12/1986, Paris <br />' +
        'Permis B',
      'cv part4 title': ' <strong>EDUCATION</strong>',
      'cv part4 content':
        '<strong>Baccalauréat Littéraire <br />' +
        '  section Arts Plastiques' +
        '</strong>' +
        '<br />' +
        'Lycée Voltaire, Paris' +
        '<br /> 2005' +
        '<br />' +
        '<br />' +
        '<strong>Formation au métiers du numérique</strong>' +
        '<br />' +
        '42, Paris' +
        '<br /> Depuis 2016',
      'cv part5 title': '<strong>APTITUDES</strong>',
      'cv part5 content':
        'React JS <br />' +
        'React Native' +
        '<br /> Redux' +
        '<br /> Node JS <br />' +
        'JavaScript' +
        '<br /> Git' +
        '<br />' +
        'Docker <br />Npm' +
        '<br />' +
        'Yarn' +
        '<br />' +
        'Shell' +
        '<br />' +
        'Unix / OSX C<br />' +
        'SQL' +
        '<br />' +
        'Mongo DB <br />FireBase <br />Xcode <br />HTML' +
        '<br />' +
        'CSS',
      'cv part6 title': '<strong>LANGUES</strong>',
      'cv part6 content': 'Français: courant<br /> Anglais: professionnel'
    }
  }
}

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: DETECTION_OPTIONS,
    resources,
    fallbackLng: 'en'
  })

export default i18n
