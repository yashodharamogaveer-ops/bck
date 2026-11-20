export type Language = 'en' | 'kn';

export interface LocalizedText {
  en: string;
  kn: string;
}

export interface DocumentItem {
  id: string;
  title: LocalizedText;
  year: string;
  size: string;
  href: string;
}

export interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  email?: string;
  photo?: string;
  isPlaceholder?: boolean;
}

export interface GovernanceMember {
  id: string;
  name: string;
  designation: string;
  photo?: string;
  isPlaceholder?: boolean;
}

export interface ProgramCombinationGroup {
  framework: string;
  items: string[];
}

export interface ProgramItem {
  id: string;
  slug: string;
  code: string;
  category: 'commerce' | 'science' | 'arts' | 'computer-management';
  title: LocalizedText;
  shortDesc: LocalizedText;
  overview: LocalizedText;
  duration: LocalizedText;
  eligibility: LocalizedText;
  feesNote: LocalizedText;
  highlights: {
    en: string[];
    kn: string[];
  };
  combinations?: ProgramCombinationGroup[];
  syllabusUrl: string;
  syllabus: {
    semester: LocalizedText;
    subjects: LocalizedText;
  }[];
  careerPaths: {
    en: string[];
    kn: string[];
  };
  faculty: FacultyMember[];
  image: string;
  iconName: 'Calculator' | 'FlaskConical' | 'BookOpen' | 'Laptop' | 'Briefcase';
}

export interface DepartmentItem {
  id: string;
  slug: string;
  name: LocalizedText;
  stream: LocalizedText;
  hod: string;
  hodNotice?: string;
  iconName:
    | 'BookOpen'
    | 'Languages'
    | 'Landmark'
    | 'TrendingUp'
    | 'Scale'
    | 'Users'
    | 'Atom'
    | 'FlaskConical'
    | 'Sigma'
    | 'Leaf'
    | 'Bug'
    | 'BarChart3'
    | 'Laptop'
    | 'Calculator'
    | 'Briefcase'
    | 'Trophy'
    | 'Newspaper'
    | 'Microscope';
  about: LocalizedText;
  faculty: FacultyMember[];
  labs: LocalizedText;
  achievements: LocalizedText;
  events: LocalizedText;
}

export interface CampusSupportItem {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  about: LocalizedText;
  coordinator: string;
  coordinatorNotice?: string;
  contact: string;
  activities: {
    en: string[];
    kn: string[];
  };
  gallery: string[];
  iconName:
    | 'BriefcaseBusiness'
    | 'Lightbulb'
    | 'Shield'
    | 'HeartHandshake'
    | 'Compass'
    | 'HeartPulse'
    | 'Award'
    | 'Palette'
    | 'Trophy'
    | 'Library'
    | 'Building2';
  href: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: LocalizedText;
  dateLabel: LocalizedText;
  status: LocalizedText;
  categoryKey: 'academics' | 'sports' | 'cultural' | 'nss-ncc' | 'alumni';
  category: LocalizedText;
  summary: LocalizedText;
  fullBody: LocalizedText;
  venue: LocalizedText;
}

export interface RankHolderItem {
  id: string;
  name: string;
  rank: LocalizedText;
  program: string;
  university: LocalizedText;
  year: string;
  initials: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
  aspectClass: string;
}

export interface QuickAccessItem {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  href: string;
  external?: boolean;
  iconName:
    | 'CheckCircle2'
    | 'ClipboardCheck'
    | 'FileText'
    | 'BarChart3'
    | 'Scale'
    | 'BookMarked'
    | 'GraduationCap'
    | 'ShieldCheck'
    | 'Smartphone'
    | 'Map';
}

export const SITE_CONTENT = {
  collegeName: {
    en: "Bhandarkars' Arts and Science College",
    kn: 'ಭಂಡಾರ್ಕಾರ್ಸ್ ಕಲಾ ಮತ್ತು ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ',
  },
  collegeLocation: {
    en: 'Kundapura',
    kn: 'ಕುಂದಾಪುರ',
  },
  shortName: {
    en: "Bhandarkars' College",
    kn: 'ಭಂಡಾರ್ಕಾರ್ಸ್ ಮಹಾವಿದ್ಯಾಲಯ',
  },
  logoUrl: 'https://www.basck.in/images/logo.jpg',
  altLogoUrl: 'https://basck.in/images/logonew.png',

  topBar: {
    links: [
      {
        id: 'radio',
        label: { en: 'Radio Kundapura 89.6 FM', kn: 'ರೇಡಿಯೋ ಕುಂದಾಪುರ 89.6 FM' },
        href: '/#media',
        external: false,
      },
      {
        id: 'youtube',
        label: { en: 'YouTube', kn: 'ಯೂಟ್ಯೂಬ್' },
        href: 'https://www.youtube.com/channel/UCVLHcVA9rAkKicJOcGQThXg',
        external: true,
      },
      {
        id: 'blog',
        label: { en: 'College Blog', kn: 'ಕಾಲೇಜು ಬ್ಲಾಗ್' },
        href: 'https://events.basck.in/',
        external: true,
      },
      {
        id: 'alumni',
        label: { en: 'Alumni Registration', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ನೋಂದಣಿ' },
        href: '/associations/alumni',
        external: false,
      },
      {
        id: 'uucms',
        label: { en: 'UUCMS Portal', kn: 'UUCMS ಪೋರ್ಟಲ್' },
        href: 'https://uucms.karnataka.gov.in/',
        external: true,
      },
    ],
  },

  header: {
    programsLabel: { en: 'Programs', kn: 'ವಿಭಾಗಗಳು' },
    exploreLabel: { en: 'Explore', kn: 'ಅನ್ವೇಷಿಸಿ' },
    aboutLink: { en: 'About', kn: 'ನಮ್ಮ ಬಗ್ಗೆ' },
    campusLifeLink: { en: 'Campus Life', kn: 'ಕ್ಯಾಂಪಸ್ ಜೀವನ' },
    newsLink: { en: 'News', kn: 'ಸುದ್ದಿಗಳು' },
    contactLink: { en: 'Contact', kn: 'ಸಂಪರ್ಕ' },
    applyNow: { en: 'Apply Now', kn: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' },
    searchPlaceholder: {
      en: 'Search pages, programs, departments, NAAC, or student support...',
      kn: 'ಪುಟಗಳು, ಕೋರ್ಸ್‌ಗಳು, ವಿಭಾಗಗಳು ಅಥವಾ NAAC ಹುಡುಕಿ...',
    },
    searchTitle: {
      en: 'Global Site Search (Ctrl+K)',
      kn: 'ಸಂಪೂರ್ಣ ಜಾಲತಾಣ ಹುಡುಕಾಟ (Ctrl+K)',
    },
    noSearchResults: {
      en: 'No matching pages or programs found. Try "B.Com", "NAAC", "Library", or "Research".',
      kn: 'ಯಾವುದೇ ಫಲಿತಾಂಶ ಕಂಡುಬಂದಿಲ್ಲ.',
    },
    groupedMenu: [
      {
        heading: { en: 'Institution & Governance', kn: 'ಸಂಸ್ಥೆ ಮತ್ತು ಆಡಳಿತ' },
        items: [
          { label: { en: 'About Us & Founders', kn: 'ನಮ್ಮ ಬಗ್ಗೆ ಮತ್ತು ಸಂಸ್ಥಾಪಕರು' }, href: '/about' },
          { label: { en: 'Administration', kn: 'ಆಡಳಿತ ಮಂಡಳಿ' }, href: '/administration' },
          { label: { en: 'All Departments', kn: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು' }, href: '/departments' },
          { label: { en: 'Research & Development', kn: 'ಸಂಶೋಧನೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ' }, href: '/research' },
        ],
      },
      {
        heading: { en: 'Campus & Students', kn: 'ಕ್ಯಾಂಪಸ್ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳು' },
        items: [
          { label: { en: 'Facilities & Library', kn: 'ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಗ್ರಂಥಾಲಯ' }, href: '/facilities' },
          { label: { en: 'Student Support Units', kn: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಘಟಕಗಳು' }, href: '/student-support' },
          { label: { en: 'Associations & Alumni', kn: 'ಸಂಘಗಳು ಮತ್ತು ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು' }, href: '/associations' },
          { label: { en: 'News & Upcoming Events', kn: 'ಸುದ್ದಿ ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳು' }, href: '/news' },
        ],
      },
      {
        heading: { en: 'Quality & Disclosures', kn: 'ಗುಣಮಟ್ಟ ಮತ್ತು ಪ್ರಕಟಣೆಗಳು' },
        items: [
          { label: { en: 'NAAC / IQAC', kn: 'NAAC / IQAC' }, href: '/naac' },
          { label: { en: 'NIRF Documents', kn: 'NIRF ದಾಖಲೆಗಳು' }, href: '/nirf' },
          { label: { en: 'RTI Disclosures', kn: 'RTI ಮಾಹಿತಿ ಹಕ್ಕು' }, href: '/rti' },
          { label: { en: 'Contact & Enquiries', kn: 'ಸಂಪರ್ಕ ಮತ್ತು ವಿಚಾರಣೆ' }, href: '/contact' },
        ],
      },
    ],
  },

  sharedLayout: {
    homeLabel: { en: 'Home', kn: 'ಮುಖಪುಟ' },
    needHelpTitle: {
      en: 'Need help? Contact Admissions',
      kn: 'ಸಹಾಯ ಬೇಕೇ? ಪ್ರವೇಶಾತಿ ವಿಭಾಗವನ್ನು ಸಂಪರ್ಕಿಸಿ',
    },
    needHelpBody: {
      en: 'Reach our administrative office for course eligibility, fee structure, scholarships, and campus visit appointments.',
      kn: 'ಕೋರ್ಸ್ ಅರ್ಹತೆ, ಶುಲ್ಕ ವಿವರ, ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಕ್ಯಾಂಪಸ್ ಭೇಟಿಗಾಗಿ ನಮ್ಮ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    needHelpCta: {
      en: 'Go to Contact & Enquiry Form',
      kn: 'ಸಂಪರ್ಕ ಮತ್ತು ವಿಚಾರಣೆ ಪುಟಕ್ಕೆ ಹೋಗಿ',
    },
    sectionMenuLabel: { en: 'In this section', kn: 'ಈ ವಿಭಾಗದಲ್ಲಿ' },
  },

  hero: {
    slides: [
      {
        src: 'https://www.basck.in/images/main-slider/fr1.jpg',
        alt: {
          en: "Bhandarkars' Arts and Science College Kundapura main campus building",
          kn: 'ಭಂಡಾರ್ಕಾರ್ಸ್ ಕಲಾ ಮತ್ತು ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ, ಕುಂದಾಪುರ ಮುಖ್ಯ ಕಟ್ಟಡ',
        },
      },
      {
        src: 'https://www.basck.in/images/main-slider/fr2.jpg',
        alt: {
          en: 'Academic block and lush green courtyard at Bhandarkars College',
          kn: 'ಭಂಡಾರ್ಕಾರ್ಸ್ ಮಹಾವಿದ್ಯಾಲಯದ ಶೈಕ್ಷಣಿಕ ವಿಭಾಗ ಮತ್ತು ಹಸಿರು ಆವರಣ',
        },
      },
      {
        src: 'https://www.basck.in/images/main-slider/fr3.jpg',
        alt: {
          en: 'Campus pathways and student gathering spaces in Kundapura',
          kn: 'ಕುಂದಾಪುರ ಕಾಲೇಜು ಆವರಣದ ದೃಶ್ಯ',
        },
      },
      {
        src: 'https://www.basck.in/images/main-slider/fr4.jpg',
        alt: {
          en: 'College heritage campus grounds and institutional architecture',
          kn: 'ಕಾಲೇಜಿನ ಪಾರಂಪರಿಕ ಆವರಣ',
        },
      },
      {
        src: 'https://www.basck.in/images/main-slider/fr5.jpg',
        alt: {
          en: 'Science and library complex at Bhandarkars Arts and Science College',
          kn: 'ವಿಜ್ಞಾನ ಮತ್ತು ಗ್ರಂಥಾಲಯ ಸಂಕೀರ್ಣ',
        },
      },
      {
        src: 'https://www.basck.in/images/main-slider/fr6.jpg',
        alt: {
          en: 'Students and faculty academic environment at Kundapura campus',
          kn: 'ಕುಂದಾಪುರ ಕ್ಯಾಂಪಸ್ ಶೈಕ್ಷಣಿಕ ಪರಿಸರ',
        },
      },
    ],
    kicker: {
      en: "Bhandarkars' Arts and Science College, Kundapura",
      kn: 'ಭಂಡಾರ್ಕಾರ್ಸ್ ಕಲಾ ಮತ್ತು ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ, ಕುಂದಾಪುರ',
    },
    headline: {
      en: 'Shaping Futures Since 1963',
      kn: '1963 ರಿಂದ ಭವಿಷ್ಯದ ನಿರ್ಮಾಣ',
    },
    subtext: {
      en: "First Grade College of Arts, Science & Commerce · Re-Accredited 'A' by NAAC (2017) · Affiliated to Mangalore University",
      kn: "ಪ್ರಥಮ ದರ್ಜೆ ಕಲಾ, ವಿಜ್ಞಾನ ಮತ್ತು ವಾಣಿಜ್ಯ ಕಾಲೇಜು · NAAC 'A' ಶ್ರೇಣಿ ಮಾನ್ಯತೆ (2017) · ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ",
    },
    primaryCta: {
      en: 'Apply Now',
      kn: 'ಈಗಲೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    },
    secondaryCta: {
      en: 'Explore Programs',
      kn: 'ಕೋರ್ಸ್‌ಗಳನ್ನು ನೋಡಿ',
    },
  },

  stats: {
    sectionLabel: {
      en: 'Institutional Milestones & Scale',
      kn: 'ಸಂಸ್ಥೆಯ ಮೈಲಿಗಲ್ಲುಗಳು',
    },
    items: [
      {
        id: 'established',
        numericValue: 1963,
        suffix: '',
        formatComma: false,
        displayOverride: null,
        label: { en: 'Established (June 1963)', kn: 'ಸ್ಥಾಪನೆ (ಜೂನ್ 1963)' },
        detail: { en: 'Managed by BASC Trust · AGE Manipal', kn: 'BASC ಟ್ರಸ್ಟ್ · AGE ಮಣಿಪಾಲ' },
      },
      {
        id: 'naac',
        numericValue: null,
        suffix: '',
        formatComma: false,
        displayOverride: "NAAC 'A'",
        label: { en: 'Grade Re-Accredited', kn: 'NAAC ಶ್ರೇಣಿ ಮಾನ್ಯತೆ' },
        detail: { en: 'Re-accredited in 2017 (Cycle-IV SSR)', kn: '2017 ರಲ್ಲಿ ಪುನರ್ ಮಾನ್ಯತೆ' },
      },
      {
        id: 'library',
        numericValue: 97286,
        suffix: '',
        formatComma: true,
        displayOverride: null,
        label: { en: 'Library Books (3,500 sq.m.)', kn: 'ಗ್ರಂಥಾಲಯ ಪುಸ್ತಕಗಳು' },
        detail: { en: '⚠ Intro text states 95,500+ books', kn: '⚠ ಪಠ್ಯದಲ್ಲಿ 95,500+ ಎಂದು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ' },
      },
      {
        id: 'programs',
        numericValue: 5,
        suffix: '',
        formatComma: false,
        displayOverride: null,
        label: { en: 'UG Degree Programs', kn: 'ಪದವಿ ಕಾರ್ಯಕ್ರಮಗಳು' },
        detail: { en: 'B.Com · B.Sc · B.A. · BCA · BBA', kn: 'B.Com · B.Sc · B.A. · BCA · BBA' },
      },
      {
        id: 'students',
        numericValue: null,
        suffix: '',
        formatComma: false,
        displayOverride: '⚠ [Confirm with office]',
        label: { en: 'Enrolled Students', kn: 'ಒಟ್ಟು ವಿದ್ಯಾರ್ಥಿಗಳು' },
        detail: { en: 'Not found on basck.in — ask college office', kn: 'ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಲಭ್ಯವಿಲ್ಲ' },
      },
      {
        id: 'faculty',
        numericValue: null,
        suffix: '',
        formatComma: false,
        displayOverride: '⚠ [Confirm with office]',
        label: { en: 'Total Faculty Strength', kn: 'ಒಟ್ಟು ಬೋಧಕ ವರ್ಗ' },
        detail: { en: 'Sanskrit & PE names pending office confirmation', kn: 'ಕಚೇರಿ ದೃಢೀಕರಣ ಬಾಕಿ ಇದೆ' },
      },
      {
        id: 'placements',
        numericValue: null,
        suffix: '',
        formatComma: false,
        displayOverride: '2024–25 PDF',
        label: { en: 'Campus Placements', kn: 'ಕ್ಯಾಂಪಸ್ ಉದ್ಯೋಗ ಕೋಶ' },
        detail: { en: 'See 2024–25 Selection PDF (exact counts pending)', kn: '2024–25 ಆಯ್ಕೆ ಪಟ್ಟಿ PDF ಲಭ್ಯವಿದೆ' },
      },
    ],
  },

  about: {
    eyebrow: { en: 'Our Heritage', kn: 'ನಮ್ಮ ಪರಂಪರೆ' },
    pageTitle: { en: 'About Us', kn: 'ನಮ್ಮ ಬಗ್ಗೆ' },
    heading: {
      en: 'Rooted in Philanthropy, Committed to Excellence',
      kn: 'ದಾನಶೀಲತೆಯಿಂದ ಹುಟ್ಟಿದ ಶ್ರೇಷ್ಠ ಶೈಕ್ಷಣಿಕ ಪರಂಪರೆ',
    },
    storyParagraphs: {
      en: [
        'Founded in June 1963 through a generous donation of Rs. 2,00,000 (his life savings) by Dr. A. S. Bhandarkar, a native of Kundapura practising medicine in Bahrain, the college fulfilled a long-felt need of the taluk. The Rotary Club of Kundapura and leading local citizens worked tirelessly for its opening.',
        "When Dr. A. S. Bhandarkar made his offer, Dr. T. M. A. Pai—founder of Syndicate Bank, medical and engineering colleges, and the Academy of General Education (AGE), Manipal—agreed to sponsor a First Grade College at Kundapura under AGE Manipal. Though Dr. Bhandarkar did not seek personal recognition, the college proudly carries his family name at the insistence of Kundapura's citizens and AGE Manipal.",
        "Managed by Bhandarkars' College Trust (Regd.), Kundapura, the institution is a First Grade College of Arts, Science and Commerce affiliated to Mangalore University and re-accredited with an 'A' Grade by NAAC in 2017.",
      ],
      kn: [
        'ಕುಂದಾಪುರದವರೇ ಆಗಿದ್ದು ಬಹ್ರೇನ್‌ನಲ್ಲಿ ವೈದ್ಯರಾಗಿದ್ದ ಡಾ. ಎ. ಎಸ್. ಭಂಡಾರ್ಕರ್ ಅವರ ರೂ. 2,00,000 (ತಮ್ಮ ಜೀವಮಾನದ ಉಳಿತಾಯ) ಉದಾರ ದೇಣಿಗೆ ಹಾಗೂ ಕುಂದಾಪುರ ರೋಟರಿ ಕ್ಲಬ್ ಮತ್ತು ಪ್ರಮುಖ ನಾಗರಿಕರ ಶ್ರಮದಿಂದ ಜೂನ್ 1963 ರಲ್ಲಿ ಈ ಕಾಲೇಜು ಸ್ಥಾಪನೆಯಾಯಿತು.',
        'ಸಿಂಡಿಕೇಟ್ ಬ್ಯಾಂಕ್, ವೈದ್ಯಕೀಯ-ಎಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜುಗಳು ಹಾಗೂ ಮಣಿಪಾಲದ ಅಕಾಡೆಮಿ ಆಫ್ ಜನರಲ್ ಎಜುಕೇಶನ್ (AGE) ಸಂಸ್ಥಾಪಕರಾದ ಡಾ. ಟಿ. ಎಂ. ಎ. ಪೈ ಅವರು ಈ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜನ್ನು AGE ಮಣಿಪಾಲದಡಿ ಪ್ರಾಯೋಜಿಸಲು ಒಪ್ಪಿದರು. ಡಾ. ಭಂಡಾರ್ಕರ್ ಸ್ವಂತ ಹೆಸರನ್ನು ಬಯಸದಿದ್ದರೂ, ಕುಂದಾಪುರ ನಾಗರಿಕರು ಮತ್ತು AGE ಮಣಿಪಾಲದ ಒತ್ತಾಸೆಯ ಮೇರೆಗೆ ಕಾಲೇಜಿಗೆ ಅವರ ಕುಟುಂಬದ ಹೆಸರಿಡಲಾಯಿತು.',
        "ಭಂಡಾರ್ಕರ್ಸ್ ಕಾಲೇಜು ಟ್ರಸ್ಟ್ (ರಿ.), ಕುಂದಾಪುರದಿಂದ ನಿರ್ವಹಿಸಲ್ಪಡುವ ಈ ಕಾಲೇಜು ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯಕ್ಕೆ ಸಂಯೋಜಿತವಾಗಿದ್ದು, 2017 ರಲ್ಲಿ NAAC ನಿಂದ 'A' ಶ್ರೇಣಿ ಪುನರ್ ಮಾನ್ಯತೆ ಪಡೆದಿದೆ.",
      ],
    },
    image: 'https://www.basck.in/images/main-slider/fr2.jpg',
    imageCaption: {
      en: "Sponsored by Academy of General Education (AGE), Manipal · Managed by Bhandarkars' College Trust (Regd.)",
      kn: "ಅಕಾಡೆಮಿ ಆಫ್ ಜನರಲ್ ಎಜುಕೇಶನ್ (AGE), ಮಣಿಪಾಲ ಪ್ರಾಯೋಜಿತ · ಭಂಡಾರ್ಕರ್ಸ್ ಕಾಲೇಜು ಟ್ರಸ್ಟ್ ನಿರ್ವಹಣೆ",
    },
    foundersTitle: {
      en: 'Our Founders & Patrons',
      kn: 'ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ಪೋಷಕರು',
    },
    founders: [
      {
        id: 'dr-tma-pai',
        name: 'Dr. T. M. A. Pai',
        role: {
          en: 'Sponsor & Founder of Academy of General Education (AGE), Manipal',
          kn: 'ಪ್ರಾಯೋಜಕರು ಮತ್ತು ಅಕಾಡೆಮಿ ಆಫ್ ಜನರಲ್ ಎಜುಕೇಶನ್ (AGE), ಮಣಿಪಾಲ ಸಂಸ್ಥಾಪಕರು',
        },
        photo: 'https://www.basck.in/images/management/tmapai.jpg',
        bio: {
          en: 'Founder of Syndicate Bank, medical and engineering colleges, the Academy of General Education, Manipal and numerous institutions. He agreed to sponsor a First Grade College at Kundapura under AGE Manipal when Dr. A. S. Bhandarkar made his offer.',
          kn: 'ಸಿಂಡಿಕೇಟ್ ಬ್ಯಾಂಕ್, ವೈದ್ಯಕೀಯ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜುಗಳು ಹಾಗೂ ಮಣಿಪಾಲದ AGE ಸಂಸ್ಥಾಪಕರು. ಡಾ. ಎ. ಎಸ್. ಭಂಡಾರ್ಕರ್ ಅವರ ಕೊಡುಗೆಯ ಸಮಯದಲ್ಲಿ ಕುಂದಾಪುರದಲ್ಲಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜನ್ನು ಪ್ರಾಯೋಜಿಸಲು ಒಪ್ಪಿದರು.',
        },
      },
      {
        id: 'dr-as-bhandarkar',
        name: 'Dr. A. S. Bhandarkar',
        role: {
          en: 'Principal Donor & Philanthropist (Kundapura / Bahrain)',
          kn: 'ಪ್ರಮುಖ ದಾನಿಗಳು (ಕುಂದಾಪುರ / ಬಹ್ರೇನ್)',
        },
        photo: 'https://www.basck.in/images/management/DrASBhandarkar.jpg',
        bio: {
          en: 'Native of Kundapura practising medicine in Bahrain. He donated Rs. 2,00,000 from his savings. Although he did not want a name for himself, the college carries his family name at the insistence of the citizens of Kundapura and AGE Manipal.',
          kn: 'ಬಹ್ರೇನ್‌ನಲ್ಲಿ ವೈದ್ಯರಾಗಿದ್ದ ಕುಂದಾಪುರ ಮೂಲದವರು. ತಮ್ಮ ಉಳಿತಾಯದಿಂದ ರೂ. 2,00,000 ದಾನ ಮಾಡಿದರು. ಕುಂದಾಪುರ ನಾಗರಿಕರು ಮತ್ತು AGE ಮಣಿಪಾಲದ ಆಶಯದಂತೆ ಕಾಲೇಜಿಗೆ ಅವರ ಕುಟುಂಬದ ಹೆಸರನ್ನು ಇಡಲಾಗಿದೆ.',
        },
      },
    ],
    timelineTitle: {
      en: 'Institutional Timeline',
      kn: 'ಸಂಸ್ಥೆಯ ಮೈಲಿಗಲ್ಲುಗಳು',
    },
    timeline: [
      {
        year: 'June 1963',
        title: { en: 'Founding of the College', kn: 'ಕಾಲೇಜು ಸ್ಥಾಪನೆ (ಜೂನ್ 1963)' },
        detail: {
          en: 'Established via a Rs. 2,00,000 donation by Dr. A. S. Bhandarkar, sponsored by Dr. T. M. A. Pai under AGE Manipal, and actively championed by the Rotary Club of Kundapura and leading citizens.',
          kn: 'ಡಾ. ಎ. ಎಸ್. ಭಂಡಾರ್ಕರ್ ಅವರ ರೂ. 2,00,000 ದೇಣಿಗೆ, ಡಾ. ಟಿ. ಎಂ. ಎ. ಪೈ (AGE ಮಣಿಪಾಲ) ಪ್ರಾಯೋಜಕತ್ವ ಮತ್ತು ಕುಂದಾಪುರ ರೋಟರಿ ಕ್ಲಬ್ ಸಹಕಾರದಿಂದ ಸ್ಥಾಪನೆ.',
        },
      },
      {
        year: '⚠ [Confirm year]',
        title: { en: '⚠ [Additional Milestones — Ask College Office]', kn: '⚠ [ಹೆಚ್ಚುವರಿ ಮೈಲಿಗಲ್ಲುಗಳು — ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ]' },
        detail: {
          en: '⚠ Specific dates for program introductions, hostel, indoor games complex, and jubilee milestones were not listed as a timeline on basck.in; confirm exact years with the college office.',
          kn: '⚠ ವಿಭಾಗಗಳ ಪ್ರಾರಂಭ ಮತ್ತು ಕಟ್ಟಡಗಳ ನಿಖರ ವರ್ಷಗಳನ್ನು ಕಾಲೇಜು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        year: '2017',
        title: { en: "NAAC 'A' Grade Re-Accreditation", kn: "NAAC 'A' ಶ್ರೇಣಿ ಪುನರ್ ಮಾನ್ಯತೆ" },
        detail: {
          en: "Re-accredited with 'A' Grade by the National Assessment and Accreditation Council (NAAC), recognizing institutional quality and academic rigour.",
          kn: "ರಾಷ್ಟ್ರೀಯ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಮಾನ್ಯತಾ ಮಂಡಳಿಯಿಂದ (NAAC) 'A' ಶ್ರೇಣಿಯ ಪುನರ್ ಮಾನ್ಯತೆ.",
        },
      },
      {
        year: '2022–2027',
        title: { en: 'Perspective Plan & SSR Cycle-IV', kn: 'ದೂರದೃಷ್ಟಿ ಯೋಜನೆ 2022–2027 ಮತ್ತು SSR ಸೈಕಲ್-IV' },
        detail: {
          en: 'Implementing the institutional Perspective Plan (2022–2027), NEP-aligned degree combinations, and Cycle-IV NAAC SSR documentation.',
          kn: '2022–2027 ದೂರದೃಷ್ಟಿ ಯೋಜನೆ, NEP ಪದವಿ ಸಂಯೋಜನೆಗಳು ಮತ್ತು ಸೈಕಲ್-IV SSR ದಾಖಲಾತಿ.',
        },
      },
    ],
    pillars: [
      {
        id: 'vision',
        title: { en: 'Vision', kn: 'ದೃಷ್ಟಿ (Vision)' },
        body: {
          en: 'Make higher education available to all sections of the community, emphasizing moral and human values.',
          kn: 'ನೈತಿಕ ಮತ್ತು ಮಾನವೀಯ ಮೌಲ್ಯಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತಾ ಸಮಾಜದ ಎಲ್ಲಾ ವರ್ಗದವರಿಗೂ ಉನ್ನತ ಶಿಕ್ಷಣವನ್ನು ತಲುಪಿಸುವುದು.',
        },
      },
      {
        id: 'mission',
        title: { en: 'Mission', kn: 'ಧ್ಯೇಯ (Mission)' },
        body: {
          en: 'Provide adequate infrastructure and a student-centric, research-oriented learning environment, with scope for value-based, skill-oriented co-curricular and extra-curricular activities in tune with technological development.',
          kn: 'ತಾಂತ್ರಿಕ ಪ್ರಗತಿಗೆ ಅನುಗುಣವಾಗಿ ಮೌಲ್ಯಾಧಾರಿತ, ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ ಪಠ್ಯೇತರ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ಉತ್ತಮ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ-ಕೇಂದ್ರಿತ ಸಂಶೋಧನಾತ್ಮಕ ಕಲಿಕಾ ವಾತಾವರಣವನ್ನು ಒದಗಿಸುವುದು.',
        },
      },
      {
        id: 'quality',
        title: { en: 'Quality Policy', kn: 'ಗುಣಮಟ್ಟದ ನೀತಿ' },
        body: {
          en: 'Value-based education to suit contemporary needs, making students socially responsible with strong ethical concerns.',
          kn: 'ಸಮಕಾಲೀನ ಅಗತ್ಯಗಳಿಗೆ ತಕ್ಕಂತೆ ಮೌಲ್ಯಾಧಾರಿತ ಶಿಕ್ಷಣ ನೀಡಿ, ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ನೈತಿಕ ಪ್ರಜ್ಞೆ ಮತ್ತು ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿಯುಳ್ಳ ನಾಗರಿಕರನ್ನಾಗಿ ರೂಪಿಸುವುದು.',
        },
      },
    ],
  },

  administration: {
    pageTitle: { en: 'Administration', kn: 'ಆಡಳಿತ ಮಂಡಳಿ' },
    subtitle: {
      en: "Governance under Academy of General Education (AGE) Manipal, Bhandarkars' College Trust (Regd.), Bhandarkars' Vocational Courses Trust, and Governing Council.",
      kn: 'ಅಕಾಡೆಮಿ ಆಫ್ ಜನರಲ್ ಎಜುಕೇಶನ್ (ಮಣಿಪಾಲ), ಭಂಡಾರ್ಕರ್ಸ್ ಕಾಲೇಜು ಟ್ರಸ್ಟ್ (ರಿ.), ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳ ಟ್ರಸ್ಟ್ ಮತ್ತು ಆಡಳಿತ ಮಂಡಳಿಯ ವಿವರಗಳು.',
    },
    tabs: [
      { id: 'overview', slug: '/administration', label: { en: 'Overview & Principal', kn: 'ಮುಖ್ಯಾಂಶ ಮತ್ತು ಪ್ರಾಂಶುಪಾಲರು' } },
      { id: 'management', slug: '/administration/management', label: { en: 'Trusts & Councils', kn: 'ಟ್ರಸ್ಟ್ ಮತ್ತು ಮಂಡಳಿಗಳು' } },
      { id: 'staff-council', slug: '/administration/staff-council', label: { en: 'Staff Council', kn: 'ಸ್ಟಾಫ್ ಕೌನ್ಸಿಲ್' } },
      { id: 'organogram', slug: '/administration/organogram', label: { en: 'Organogram (PDF)', kn: 'ಆಡಳಿತ ರಚನೆ (PDF)' } },
      { id: 'perspective-plan', slug: '/administration/perspective-plan', label: { en: 'Perspective Plan 2022–2027', kn: 'ದೂರದೃಷ್ಟಿ ಯೋಜನೆ 2022–2027' } },
    ],
    ageCommittee: [
      { id: 'age-1', name: 'Dr. H S Ballal', designation: 'President (Pro-Chancellor, Manipal University)', photo: 'https://www.basck.in/images/management/Dr_HSBallal.jpg' },
      { id: 'age-2', name: 'Mr. T Sathish U Pai', designation: 'Vice President · AGE Manipal' },
      { id: 'age-3', name: 'Dr. Ranjan R. Pai', designation: 'Registrar (MD & CEO, MEMG International India Pvt. Ltd.)', photo: 'https://www.basck.in/images/management/ranjan%20pai.jpg' },
      { id: 'age-4', name: 'Dr. Narayana Sabhahit', designation: 'Secretary · AGE Manipal' },
      { id: 'age-5', name: 'Dr. Shreedhara Ranganath Pai', designation: 'Administrative Officer · AGE Manipal' },
    ] as GovernanceMember[],
    bascTrust: [
      { id: 'bt-1', name: 'Mr. Shantharam A Bhandarkar', designation: 'President (Manipal)', photo: 'https://www.basck.in/images/management/ShantharamAB.jpg' },
      { id: 'bt-2', name: 'Mr. K Shantharama Prabhu', designation: 'Vice President (Kumbhashi)', photo: 'https://www.basck.in/images/management/ShantharamP.jpg' },
      { id: 'bt-3', name: 'Dr. Shubhakarachary', designation: 'Secretary (Principal)', photo: 'https://www.basck.in/images/staff/principal.jpeg' },
      { id: 'bt-4', name: 'Dr. Ranjan R. Pai', designation: 'Member', photo: 'https://www.basck.in/images/management/ranjan%20pai.jpg' },
      { id: 'bt-5', name: 'Dr. H S Ballal', designation: 'Member', photo: 'https://www.basck.in/images/management/Dr_HSBallal.jpg' },
      { id: 'bt-6', name: 'Dr. Narayana Sabhahit', designation: 'Member' },
      { id: 'bt-7', name: 'Dr. Sreedhara Ranganath Pai', designation: 'Member' },
      { id: 'bt-8', name: 'Mr. K Devadas Kamath', designation: 'Member (Kamath Motors)', photo: 'https://www.basck.in/images/management/DevadasKamath.jpg' },
      { id: 'bt-9', name: 'Sri S Sadananda Chathra', designation: 'Member (Durgamba Motors)', photo: 'https://www.basck.in/images/management/Sadananda%20Chathra.png' },
    ] as GovernanceMember[],
    vocationalTrust: [
      { id: 'vt-1', name: 'Dr. Ranjan R. Pai', designation: 'Ex-officio President', photo: 'https://www.basck.in/images/management/ranjan%20pai.jpg' },
      { id: 'vt-2', name: 'Mr. K Shantharama Prabhu', designation: 'Secretary-cum-Treasurer', photo: 'https://www.basck.in/images/management/ShantharamP.jpg' },
      { id: 'vt-3', name: 'Mr. Rajendra Tholar', designation: 'Member' },
      { id: 'vt-4', name: 'Shri Abhinandan Shetty', designation: 'Member' },
      { id: 'vt-5', name: 'Mr. K Devadas Kamath', designation: 'Member', photo: 'https://www.basck.in/images/management/DevadasKamath.jpg' },
      { id: 'vt-6', name: 'Mr. Prakash T Soans', designation: 'Member' },
      { id: 'vt-7', name: 'Dr. Narayana Sabhahit', designation: 'Member' },
      { id: 'vt-8', name: 'Sri N. Raghavendra Rao', designation: 'Member' },
      { id: 'vt-9', name: 'Dr. Sreedhara Ranganath Pai', designation: 'Member' },
      { id: 'vt-10', name: 'Dr. Shubhakarachary', designation: 'Member (Ex-officio · Principal)', photo: 'https://www.basck.in/images/staff/principal.jpeg' },
    ] as GovernanceMember[],
    governingCouncil: [
      { id: 'gc-1', name: 'Mr. Prakash T Soans', designation: 'President · Governing Council' },
      { id: 'gc-2', name: 'Mr. U Surendra Shenoy', designation: 'Secretary · Governing Council' },
      { id: 'gc-3', name: 'Mr. K Devadas Kamath', designation: 'Member', photo: 'https://www.basck.in/images/management/DevadasKamath.jpg' },
      { id: 'gc-4', name: 'Mr. Prajnesh Prabhu', designation: 'Member' },
      { id: 'gc-5', name: 'Dr. Saroja M', designation: 'Member (Principal, PU College)' },
      { id: 'gc-6', name: 'Dr. Ranjith Kumar Shetty', designation: 'Member (MBBS, MD)' },
      { id: 'gc-7', name: 'Mr. Jayakara Shetty', designation: 'Member' },
      { id: 'gc-8', name: 'Dr. Shubhakarachary', designation: 'Member (Principal)', photo: 'https://www.basck.in/images/staff/principal.jpeg' },
      { id: 'gc-9', name: 'Dr. Sharan S J', designation: 'Staff Representative (Department of English)' },
      { id: 'gc-10', name: 'Sri S. N. Sadananda Kamath', designation: "Parents' Representative (President)" },
      { id: 'gc-11', name: 'Sri Sanjeeva Thekkatte', designation: "Parents' Representative (Secretary)" },
    ] as GovernanceMember[],
    staffCouncilNotice: {
      en: '⚠ The full Staff Council roster page was not extracted from basck.in. Confirmed heads and IQAC/Staff representatives are listed below; confirm complete office-bearer list with the college office.',
      kn: '⚠ ಸ್ಟಾಫ್ ಕೌನ್ಸಿಲ್ ಸಂಪೂರ್ಣ ಪಟ್ಟಿಯನ್ನು ಕಾಲೇಜು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಬೇಕಾಗಿದೆ.',
    },
    staffCouncilMembers: [
      { id: 'sc1', name: 'Dr. Shubhakarachary', designation: 'Principal (M.A., M.Phil., Ph.D.) · Chairperson', photo: 'https://www.basck.in/images/staff/principal.jpeg' },
      { id: 'sc2', name: 'Dr. Sharan S J', designation: 'Staff Representative · Governing Council (English)' },
      { id: 'sc3', name: '⚠ [Pending office confirmation]', designation: 'Staff Council Secretary (not extracted from old site)', isPlaceholder: true },
      { id: 'sc4', name: 'All Heads of Departments', designation: 'Ex-officio Staff Council Members (confirm full roster with office)' },
    ] as GovernanceMember[],
    documents: {
      organogram: [
        {
          id: 'doc-organogram',
          title: { en: 'Institutional Organogram & Governance Structure (6.2.2)', kn: 'ಸಂಸ್ಥೆಯ ಆಡಳಿತ ರಚನಾ ನಕ್ಷೆ (Organogram 6.2.2)' },
          year: 'IQAC',
          size: 'PDF',
          href: 'https://www.basck.in/IQAC/ORGANOGRAM/6.2.2%20ORGANOGRAM.pdf',
        },
      ] as DocumentItem[],
      perspectivePlan: [
        {
          id: 'doc-perspective',
          title: { en: 'Institutional Perspective Plan (2022–2027)', kn: 'ಸಂಸ್ಥೆಯ ದೂರದೃಷ್ಟಿ ಯೋಜನೆ (2022–2027)' },
          year: '2022–2027',
          size: 'PDF',
          href: 'https://www.basck.in/IQAC/BCK%20Perspective%20Plan%202022-2027.pdf',
        },
      ] as DocumentItem[],
    },
  },

  programs: {
    eyebrow: { en: 'Academic Offerings', kn: 'ಶೈಕ್ಷಣಿಕ ವಿಭಾಗಗಳು' },
    pageTitle: { en: 'Academic Programs', kn: 'ಶೈಕ್ಷಣಿಕ ಪದವಿ ಕಾರ್ಯಕ್ರಮಗಳು' },
    heading: {
      en: 'Undergraduate Degree Programs',
      kn: 'ಪದವಿ ಶಿಕ್ಷಣ ಕಾರ್ಯಕ್ರಮಗಳು',
    },
    subtitle: {
      en: 'Five undergraduate degree streams (B.Com, B.Sc, B.A., BCA, BBA) under Mangalore University across CBCS & NEP subject combinations. M.Com is also referenced under Gold Medals.',
      kn: 'ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯದ ಅಡಿಯಲ್ಲಿ CBCS ಮತ್ತು NEP ವಿಷಯ ಸಂಯೋಜನೆಗಳೊಂದಿಗೆ ಐದು ಪದವಿ ವಿಭಾಗಗಳು (B.Com, B.Sc, B.A., BCA, BBA).',
    },
    postgraduateNote: {
      en: 'Note: Postgraduate M.Com is referenced in the institutional Gold Medals records (Kumbashi Radhabai Venkatramana Prabhu Memorial Gold Medal). Confirm current M.Com intake and prospectus with the college office.',
      kn: 'ಗಮನಿಸಿ: ದತ್ತಿ ಚಿನ್ನದ ಪದಕಗಳ ಪಟ್ಟಿಯಲ್ಲಿ M.Com ವಿಭಾಗದ ಉಲ್ಲೇಖವಿದೆ. ಪ್ರವೇಶಾತಿ ವಿವರಗಳಿಗಾಗಿ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    syllabusLinkLabel: {
      en: 'Official Subject Details & Syllabus (basck.in/IQACLink5.html)',
      kn: 'ಅಧಿಕೃತ ವಿಷಯಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮ ವಿವರ (IQACLink5)',
    },
    syllabusPortalUrl: 'https://basck.in/IQACLink5.html',
    filters: [
      { id: 'all', label: { en: 'All', kn: 'ಎಲ್ಲಾ' } },
      { id: 'arts', label: { en: 'Arts', kn: 'ಕಲಾ' } },
      { id: 'science', label: { en: 'Science', kn: 'ವಿಜ್ಞಾನ' } },
      { id: 'commerce', label: { en: 'Commerce', kn: 'ವಾಣಿಜ್ಯ' } },
      { id: 'computer-management', label: { en: 'Computer & Management', kn: 'ಕಂಪ್ಯೂಟರ್ ಮತ್ತು ನಿರ್ವಹಣೆ' } },
    ] as const,
    learnMore: { en: 'Learn more', kn: 'ಹೆಚ್ಚು ತಿಳಿಯಿರಿ' },
    viewAllDepartments: {
      en: 'View all Departments',
      kn: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳನ್ನು ನೋಡಿ',
    },
    items: [
      {
        id: 'bcom',
        slug: 'bcom',
        code: 'B.Com',
        category: 'commerce',
        title: { en: 'Bachelor of Commerce (B.Com)', kn: 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಕಾಮರ್ಸ್ (B.Com)' },
        shortDesc: {
          en: 'Accounting, taxation, finance, auditing, and corporate law affiliated to Mangalore University.',
          kn: 'ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯಕ್ಕೆ ಸಂಯೋಜಿತವಾದ ಲೆಕ್ಕಶಾಸ್ತ್ರ, ತೆರಿಗೆ, ಹಣಕಾಸು ಮತ್ತು ವಾಣಿಜ್ಯ ಕಾನೂನು ಅಧ್ಯಯನ.',
        },
        overview: {
          en: 'Affiliated to Mangalore University, the Bachelor of Commerce program develops strong analytical grounding in financial accounting, taxation, auditing, corporate governance, and modern banking systems.',
          kn: 'ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯಕ್ಕೆ ಸಂಯೋಜಿತವಾದ B.Com ಪದವಿಯು ಲೆಕ್ಕಶಾಸ್ತ್ರ, ತೆರಿಗೆ, ಲೆಕ್ಕಪರಿಶೋಧನೆ, ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ನಿರ್ವಹಣೆಯಲ್ಲಿ ಸಮಗ್ರ ಜ್ಞಾನ ನೀಡುತ್ತದೆ.',
        },
        duration: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        eligibility: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        feesNote: { en: '⚠ Fee structure not listed on old site — confirm with college office (08254-230469)', kn: '⚠ ಶುಲ್ಕ ವಿವರ ಕಚೇರಿಯಲ್ಲಿ ಲಭ್ಯವಿದೆ' },
        highlights: {
          en: [
            '12 experienced faculty members led by Mr. Arun A S (HOD)',
            'Prof. T. Krishna Rao Gold Medal awarded for III B.Com Advanced Accountancy',
            'Official syllabus & subject details published via IQAC portal',
          ],
          kn: [
            'ಶ್ರೀ ಅರುಣ್ ಎ ಎಸ್ (HOD) ನೇತೃತ್ವದ 12 ಮಂದಿ ಅನುಭವಿ ಬೋಧಕರು',
            'III B.Com ಅಡ್ವಾನ್ಸ್ಡ್ ಅಕೌಂಟೆನ್ಸಿಯಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಅಂಕಗಳಿಗೆ ಚಿನ್ನದ ಪದಕ',
            'IQAC ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅಧಿಕೃತ ಪಠ್ಯಕ್ರಮ ವಿವರ',
          ],
        },
        syllabusUrl: 'https://basck.in/IQACLink5.html',
        syllabus: [
          {
            semester: { en: 'Mangalore University Curriculum & Subject Details', kn: 'ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ ಪಠ್ಯಕ್ರಮ ವಿವರ' },
            subjects: {
              en: 'View complete semester-wise papers and syllabus structure at https://basck.in/IQACLink5.html. (Core streams: Financial & Advanced Accountancy, Taxation, Banking, and Management).',
              kn: 'ಸಂಪೂರ್ಣ ಸೆಮಿಸ್ಟರ್ ವಿಷಯಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮವನ್ನು https://basck.in/IQACLink5.html ನಲ್ಲಿ ನೋಡಿ.',
            },
          },
          {
            semester: { en: 'Gold Medal Specialization Note', kn: 'ಚಿನ್ನದ ಪದಕದ ವಿಶೇಷತೆ' },
            subjects: {
              en: 'Prof. T. Krishna Rao Gold Medal is awarded for highest marks in III B.Com Advanced Accountancy (University examination).',
              kn: 'III B.Com ಅಡ್ವಾನ್ಸ್ಡ್ ಅಕೌಂಟೆನ್ಸಿಯಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಅಂಕ ಗಳಿಸಿದ ವಿದ್ಯಾರ್ಥಿಗೆ ಪ್ರೊ. ಟಿ. ಕೃಷ್ಣ ರಾವ್ ಚಿನ್ನದ ಪದಕ ನೀಡಲಾಗುತ್ತದೆ.',
            },
          },
        ],
        careerPaths: {
          en: ['Chartered Accountancy (CA) & Company Secretary (CS)', 'Banking, Taxation & Audit Firms', 'Corporate Finance & M.Com / MBA'],
          kn: ['CA ಮತ್ತು CS ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳು', 'ಬ್ಯಾಂಕಿಂಗ್, ತೆರಿಗೆ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ', 'ಕಾರ್ಪೊರೇಟ್ ಹಣಕಾಸು ಮತ್ತು M.Com / MBA'],
        },
        faculty: [
          { name: 'Mr. Arun A S', designation: 'Lecturer & HOD', qualification: 'M.Com.', experience: '16 yrs', email: 'arun.as@basck.in' },
          { name: 'Mrs. Mamatha', designation: 'Lecturer', qualification: 'M.Com., M.Phil.', experience: '19 yrs', email: 'mamatha@basck.in' },
          { name: 'Mrs. Omshree', designation: 'Lecturer', qualification: 'M.Com.', experience: '12 yrs', email: 'omshree@basck.in' },
          { name: 'Mr. Rithin Shetty', designation: 'Lecturer', qualification: 'M.Com.', experience: '11 yrs', email: 'rithinkumar.shetty@basck.in' },
        ],
        image: 'https://www.basck.in/images/blog/large/bcom.png',
        iconName: 'Calculator',
      },
      {
        id: 'bsc',
        slug: 'bsc',
        code: 'B.Sc',
        category: 'science',
        title: { en: 'Bachelor of Science (B.Sc)', kn: 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಸೈನ್ಸ್ (B.Sc)' },
        shortDesc: {
          en: '6 CBCS combinations and 11 NEP major/minor combinations across Physical, Life & Computer Sciences.',
          kn: 'ಭೌತ, ರಸಾಯನ, ಗಣಿತ, ಜೀವ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನಗಳಲ್ಲಿ 6 CBCS ಮತ್ತು 11 NEP ಸಂಯೋಜನೆಗಳು.',
        },
        overview: {
          en: 'The Bachelor of Science program offers comprehensive subject combinations across both CBCS (6 combinations including PMC, PMS, PMCs, BZC, MCZ, BBZ) and NEP (11 combinations across Physics, Chemistry, Mathematics, Zoology, Biochemistry, Biotechnology, Microbiology, and Computer Science).',
          kn: 'CBCS (PMC, PMS, PMCs, BZC, MCZ, BBZ) ಮತ್ತು NEP (11 ಸಂಯೋಜನೆಗಳು) ವಿಧಾನಗಳಲ್ಲಿ ಭೌತಶಾಸ್ತ್ರ, ರಸಾಯನಶಾಸ್ತ್ರ, ಗಣಿತ, ಜೀವವಿಜ್ಞಾನ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ ಅಧ್ಯಯನ.',
        },
        duration: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        eligibility: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        feesNote: { en: '⚠ Fee structure not listed on old site — confirm with college office (08254-230469)', kn: '⚠ ಶುಲ್ಕ ವಿವರ ಕಚೇರಿಯಲ್ಲಿ ಲಭ್ಯವಿದೆ' },
        highlights: {
          en: [
            '6 CBCS & 11 NEP interdisciplinary science combinations',
            'Dedicated Science laboratories, Botanical Garden & Zoology Museum',
            'Sir C.V. Raman Scholarship eligible for I B.Sc students',
          ],
          kn: [
            '6 CBCS ಮತ್ತು 11 NEP ವಿಜ್ಞಾನ ವಿಷಯ ಸಂಯೋಜನೆಗಳು',
            'ಪ್ರತ್ಯೇಕ ಪ್ರಯೋಗಾಲಯಗಳು, ಸಸ್ಯೋದ್ಯಾನ ಮತ್ತು ಪ್ರಾಣಿಶಾಸ್ತ್ರ ವಸ್ತುಸಂಗ್ರಹಾಲಯ',
            'I B.Sc ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸರ್ ಸಿ.ವಿ. ರಾಮನ್ ವಿದ್ಯಾರ್ಥಿವೇತನ ಸೌಲಭ್ಯ',
          ],
        },
        combinations: [
          {
            framework: 'CBCS Combinations',
            items: [
              'PMC (Physics, Maths, Chemistry)',
              'PMS (Physics, Maths, Statistics)',
              'PMCs (Physics, Maths, Computer Science)',
              'BZC (Botany, Zoology, Chemistry)',
              'MCZ (Microbiology, Chemistry, Zoology)',
              'BBZ (Biotechnology, Biochemistry, Zoology)',
            ],
          },
          {
            framework: 'NEP Combinations',
            items: [
              'Chemistry & Physics',
              'Maths & Physics',
              'Maths & Chemistry',
              'Chemistry & Zoology',
              'Biochemistry & Biotechnology',
              'Biotechnology & Zoology',
              'Microbiology & Biochemistry',
              'Microbiology & Chemistry',
              'Microbiology & Zoology',
              'Computer Science & Maths',
              'Computer Science & Physics',
            ],
          },
        ],
        syllabusUrl: 'https://basck.in/IQACLink5.html',
        syllabus: [
          {
            semester: { en: 'CBCS Subject Combinations (6 Streams)', kn: 'CBCS ವಿಷಯ ಸಂಯೋಜನೆಗಳು (6 ವಿಭಾಗಗಳು)' },
            subjects: {
              en: 'PMC (Physics, Maths, Chemistry) · PMS (Physics, Maths, Statistics) · PMCs (Physics, Maths, Computer Science) · BZC (Botany, Zoology, Chemistry) · MCZ (Microbiology, Chemistry, Zoology) · BBZ (Biotechnology, Biochemistry, Zoology).',
              kn: 'PMC, PMS, PMCs, BZC, MCZ ಮತ್ತು BBZ ವಿಷಯ ಸಂಯೋಜನೆಗಳು.',
            },
          },
          {
            semester: { en: 'NEP Subject Combinations (11 Streams)', kn: 'NEP ವಿಷಯ ಸಂಯೋಜನೆಗಳು (11 ವಿಭಾಗಗಳು)' },
            subjects: {
              en: 'Chemistry & Physics · Maths & Physics · Maths & Chemistry · Chemistry & Zoology · Biochemistry & Biotechnology · Biotechnology & Zoology · Microbiology & Biochemistry · Microbiology & Chemistry · Microbiology & Zoology · Computer Science & Maths · Computer Science & Physics.',
              kn: 'ರಸಾಯನಶಾಸ್ತ್ರ, ಭೌತಶಾಸ್ತ್ರ, ಗಣಿತ, ಪ್ರಾಣಿಶಾಸ್ತ್ರ, ಜೀವರಸಾಯನಶಾಸ್ತ್ರ, ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ, ಸೂಕ್ಷ್ಮಜೀವಶಾಸ್ತ್ರ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನದ 11 NEP ಸಂಯೋಜನೆಗಳು.',
            },
          },
          {
            semester: { en: 'Official Syllabus & Paper Details', kn: 'ಅಧಿಕೃತ ಪಠ್ಯಕ್ರಮ ಮತ್ತು ವಿಷಯ ವಿವರ' },
            subjects: {
              en: 'Detailed semester papers are published on the official subject details portal: https://basck.in/IQACLink5.html',
              kn: 'ವಿವರವಾದ ಪಠ್ಯಕ್ರಮವನ್ನು https://basck.in/IQACLink5.html ನಲ್ಲಿ ನೋಡಿ.',
            },
          },
        ],
        careerPaths: {
          en: ['Scientific Research & M.Sc Programs', 'Pharmaceuticals, Biotech & Quality Testing', 'Data Analytics, IT & Teaching'],
          kn: ['ವೈಜ್ಞಾನಿಕ ಸಂಶೋಧನೆ ಮತ್ತು M.Sc', 'ಔಷಧೀಯ ಮತ್ತು ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ', 'ಡೇಟಾ ಅನಾಲಿಟಿಕ್ಸ್, ಐಟಿ ಮತ್ತು ಬೋಧನೆ'],
        },
        faculty: [
          { name: 'Mr. Shashikanth Hathwar', designation: 'Associate Professor & HOD (Physics)', qualification: 'M.Sc., M.Phil.', experience: '32 yrs', email: 'shashikanth.hathwar@basck.in' },
          { name: 'Ms. Nisha M', designation: 'Associate Professor & HOD (Chemistry)', qualification: 'M.Sc.', experience: '35 yrs', email: 'nisha.m@basck.in' },
          { name: 'Ms. Divya', designation: 'Lecturer & HOD (Mathematics)', qualification: 'MSc Maths, B.Ed', experience: 'past 7 + present 1 yrs' },
          { name: 'Mrs. Swapna', designation: 'Lecturer & HOD (Statistics)', qualification: 'M.Sc.', experience: '14 yrs', email: 'swapna@basck.in' },
          { name: 'Mrs. Manasa Shetty', designation: 'Lecturer & HOD (Zoology)', qualification: 'M.Sc.', experience: '11 yrs', email: 'manasa.shetty@basck.in' },
          { name: 'Mrs. Rajani Mathew', designation: 'Lecturer & HOD (Botany)', qualification: 'M.Sc., B.Ed.', experience: '1 yr' },
        ],
        image: 'https://www.basck.in/images/blog/large/bsc.png',
        iconName: 'FlaskConical',
      },
      {
        id: 'ba',
        slug: 'ba',
        code: 'B.A.',
        category: 'arts',
        title: { en: 'Bachelor of Arts (B.A.)', kn: 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಆರ್ಟ್ಸ್ (B.A.)' },
        shortDesc: {
          en: '4 CBCS combinations (HEK, HEP, HSP, EJP) and 4 NEP combinations across Humanities, Social Sciences & Languages.',
          kn: 'ಕಲಾ, ಸಮಾಜ ವಿಜ್ಞಾನ, ಪತ್ರಿಕೋದ್ಯಮ ಮತ್ತು ಭಾಷೆಗಳಲ್ಲಿ 4 CBCS ಹಾಗೂ 4 NEP ವಿಷಯ ಸಂಯೋಜನೆಗಳು.',
        },
        overview: {
          en: 'Our flagship Bachelor of Arts degree offers combinations across History, Economics, Political Science, Sociology, Kannada, English, Journalism, and Psychology under both CBCS (HEK, HEP, HSP, EJP) and NEP frameworks.',
          kn: 'ಇತಿಹಾಸ, ಅರ್ಥಶಾಸ್ತ್ರ, ರಾಜ್ಯಶಾಸ್ತ್ರ, ಸಮಾಜಶಾಸ್ತ್ರ, ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್, ಪತ್ರಿಕೋದ್ಯಮ ಮತ್ತು ಮನೋವಿಜ್ಞಾನ ವಿಷಯಗಳನ್ನು ಒಳಗೊಂಡ ಪದವಿ.',
        },
        duration: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        eligibility: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        feesNote: { en: '⚠ Fee structure not listed on old site — confirm with college office (08254-230469)', kn: '⚠ ಶುಲ್ಕ ವಿವರ ಕಚೇರಿಯಲ್ಲಿ ಲಭ್ಯವಿದೆ' },
        highlights: {
          en: [
            'CBCS: HEK, HEP, HSP & EJP (English, Journalism, Psychology)',
            'NEP: History, Political Science, Economics & Optional Kannada pairs',
            'History Museum & Language departments with experienced faculty',
          ],
          kn: [
            'CBCS: HEK, HEP, HSP ಮತ್ತು EJP (ಇಂಗ್ಲಿಷ್, ಪತ್ರಿಕೋದ್ಯಮ, ಮನೋವಿಜ್ಞಾನ)',
            'NEP: ಇತಿಹಾಸ, ರಾಜ್ಯಶಾಸ್ತ್ರ, ಅರ್ಥಶಾಸ್ತ್ರ ಮತ್ತು ಐಚ್ಛಿಕ ಕನ್ನಡ',
            'ಇತಿಹಾಸ ವಸ್ತುಸಂಗ್ರಹಾಲಯ ಮತ್ತು ಅನುಭವಿ ಭಾಷಾ ವಿಭಾಗಗಳು',
          ],
        },
        combinations: [
          {
            framework: 'CBCS Combinations',
            items: [
              'HEK (History, Economics, Kannada)',
              'HEP (History, Economics, Political Science)',
              'HSP (History, Sociology, Political Science)',
              'EJP (English, Journalism, Psychology)',
            ],
          },
          {
            framework: 'NEP Combinations',
            items: [
              'Political Science & History',
              'Economics & Political Science',
              'Economics & History',
              'Kannada (optional) & History',
            ],
          },
        ],
        syllabusUrl: 'https://basck.in/IQACLink5.html',
        syllabus: [
          {
            semester: { en: 'CBCS Combinations (4 Streams)', kn: 'CBCS ವಿಷಯ ಸಂಯೋಜನೆಗಳು (4 ವಿಭಾಗಗಳು)' },
            subjects: {
              en: 'HEK (History, Economics, Kannada) · HEP (History, Economics, Political Science) · HSP (History, Sociology, Political Science) · EJP (English, Journalism, Psychology).',
              kn: 'HEK, HEP, HSP ಮತ್ತು EJP ವಿಷಯ ಸಂಯೋಜನೆಗಳು.',
            },
          },
          {
            semester: { en: 'NEP Combinations (4 Streams)', kn: 'NEP ವಿಷಯ ಸಂಯೋಜನೆಗಳು (4 ವಿಭಾಗಗಳು)' },
            subjects: {
              en: 'Political Science & History · Economics & Political Science · Economics & History · Kannada (optional) & History.',
              kn: 'ರಾಜ್ಯಶಾಸ್ತ್ರ-ಇತಿಹಾಸ, ಅರ್ಥಶಾಸ್ತ್ರ-ರಾಜ್ಯಶಾಸ್ತ್ರ, ಅರ್ಥಶಾಸ್ತ್ರ-ಇತಿಹಾಸ ಹಾಗೂ ಕನ್ನಡ-ಇತಿಹಾಸ.',
            },
          },
          {
            semester: { en: 'Official Syllabus & Paper Details', kn: 'ಅಧಿಕೃತ ಪಠ್ಯಕ್ರಮ ಮತ್ತು ವಿಷಯ ವಿವರ' },
            subjects: {
              en: 'View complete subject details at https://basck.in/IQACLink5.html.',
              kn: 'ಸಂಪೂರ್ಣ ವಿಷಯ ವಿವರಗಳನ್ನು https://basck.in/IQACLink5.html ನಲ್ಲಿ ನೋಡಿ.',
            },
          },
        ],
        careerPaths: {
          en: ['Civil Services (UPSC / KPSC) & Public Policy', 'Journalism, Publishing & Mass Communication', 'Law (LLB), Social Work & Education'],
          kn: ['ನಾಗರಿಕ ಸೇವೆಗಳು (UPSC / KPSC)', 'ಪತ್ರಿಕೋದ್ಯಮ ಮತ್ತು ಸಂವಹನ', 'ಕಾನೂನು (LLB), ಸಮಾಜಕಾರ್ಯ ಮತ್ತು ಶಿಕ್ಷಣ'],
        },
        faculty: [
          { name: 'Praveen', designation: 'Lecturer & HOD (English)', qualification: 'M.A., B.Ed., PGDCE', experience: '16 yrs', email: 'praveen@basck.in' },
          { name: 'Mr. Manjunatha K.S', designation: 'Lecturer & HOD (Kannada)', qualification: 'M.A., B.Ed.', experience: '6 yrs', email: 'manjunatha.ks@basck.in' },
          { name: 'Mrs. Sneha S', designation: 'Lecturer & HOD (History)', qualification: 'M.A., B.Ed', experience: '20 yrs', email: 'sneha.s@basck.in' },
          { name: 'Mr. Manjunatha', designation: 'Lecturer & HOD (Economics)', qualification: 'M.A., B.Ed, KSET', experience: '14 yrs', email: 'manjunatha@basck.in' },
          { name: 'Mrs. Harshitha', designation: 'Lecturer & HOD (Political Science)', qualification: 'M.A.', experience: '13 yrs', email: 'harshitha@basck.in' },
          { name: 'Mrs. Sumalatha S Naik', designation: 'Lecturer & HOD (Journalism)', qualification: 'M.A.', experience: '19 yrs', email: 'sumalatha.naik@basck.in' },
        ],
        image: 'https://www.basck.in/images/blog/large/ba.png',
        iconName: 'BookOpen',
      },
      {
        id: 'bca',
        slug: 'bca',
        code: 'BCA',
        category: 'computer-management',
        title: { en: 'Bachelor of Computer Applications (BCA)', kn: 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಕಂಪ್ಯೂಟರ್ ಅಪ್ಲಿಕೇಶನ್ಸ್ (BCA)' },
        shortDesc: {
          en: 'Dedicated Computer Science Block & 20-member faculty producing top Mangalore University BCA rank holders.',
          kn: 'ಪ್ರತ್ಯೇಕ ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ ಬ್ಲಾಕ್ ಮತ್ತು 20 ಮಂದಿ ಬೋಧಕರೊಂದಿಗೆ ಮಂಗಳೂರು ವಿವಿ ರ‍್ಯಾಂಕ್ ವಿಜೇತರ ವಿಭಾಗ.',
        },
        overview: {
          en: 'Delivered by the Department of Computer Applications / Computer Science in a dedicated Computer Science Block, the BCA degree pairs software foundations with practical laboratory instruction—producing 2025 Mangalore University rank holders Ms. Shravya Shenoy (VIII Rank) and Ms. Rakshitha (IX Rank).',
          kn: 'ಪ್ರತ್ಯೇಕ ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ ಬ್ಲಾಕ್‌ನಲ್ಲಿ 20 ಮಂದಿ ಅಧ್ಯಾಪಕರಿಂದ ಬೋಧಿಸಲ್ಪಡುವ BCA ಪದವಿಯು 2025 ರಲ್ಲಿ ಮಂಗಳೂರು ವಿವಿಯ VIII ಮತ್ತು IX ರ‍್ಯಾಂಕ್‌ಗಳನ್ನು ಪಡೆದಿದೆ.',
        },
        duration: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        eligibility: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        feesNote: { en: '⚠ Fee structure not listed on old site — confirm with college office (08254-230469)', kn: '⚠ ಶುಲ್ಕ ವಿವರ ಕಚೇರಿಯಲ್ಲಿ ಲಭ್ಯವಿದೆ' },
        highlights: {
          en: [
            'Mangalore University 2025 Ranks VIII & IX',
            '20 faculty members led by Mr. Ganesh K (HOD, 27 yrs experience)',
            'Mrs. Poornima Devadas Kamath Gold Medal for best out-going BCA student',
          ],
          kn: [
            '2025 ರ ಮಂಗಳೂರು ವಿವಿ VIII ಮತ್ತು IX ರ‍್ಯಾಂಕ್ ಸಾಧನೆ',
            'ಶ್ರೀ ಗಣೇಶ್ ಕೆ (HOD, 27 ವರ್ಷ ಅನುಭವ) ನೇತೃತ್ವದ 20 ಮಂದಿ ಬೋಧಕರು',
            'ಉತ್ತಮ BCA ವಿದ್ಯಾರ್ಥಿಗೆ ಶ್ರೀಮತಿ ಪೂರ್ಣಿಮಾ ದೇವದಾಸ್ ಕಾಮತ್ ಚಿನ್ನದ ಪದಕ',
          ],
        },
        syllabusUrl: 'https://basck.in/IQACLink5.html',
        syllabus: [
          {
            semester: { en: 'Official BCA Subject Details & Syllabus', kn: 'ಅಧಿಕೃತ BCA ವಿಷಯಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮ' },
            subjects: {
              en: 'View complete Mangalore University BCA paper list and syllabus details at https://basck.in/IQACLink5.html.',
              kn: 'ಸಂಪೂರ್ಣ BCA ವಿಷಯಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮವನ್ನು https://basck.in/IQACLink5.html ನಲ್ಲಿ ನೋಡಿ.',
            },
          },
          {
            semester: { en: 'Merit Endowment Recognition', kn: 'ದತ್ತಿ ಚಿನ್ನದ ಪದಕ' },
            subjects: {
              en: 'Best out-going BCA student receives the Mrs. Poornima Devadas Kamath Gold Medal.',
              kn: 'ಉತ್ತಮ ಅಂತಿಮ ವರ್ಷದ BCA ವಿದ್ಯಾರ್ಥಿಗೆ ಶ್ರೀಮತಿ ಪೂರ್ಣಿಮಾ ದೇವದಾಸ್ ಕಾಮತ್ ಚಿನ್ನದ ಪದಕ ನೀಡಲಾಗುತ್ತದೆ.',
            },
          },
        ],
        careerPaths: {
          en: ['Software Engineer & Web Developer', 'Database / Cloud Systems Administrator', 'MCA / M.Sc Computer Science'],
          kn: ['ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರ್ ಮತ್ತು ವೆಬ್ ಡೆವಲಪರ್', 'ಡೇಟಾಬೇಸ್ ಮತ್ತು ಕ್ಲೌಡ್ ನಿರ್ವಾಹಕರು', 'MCA / M.Sc ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್'],
        },
        faculty: [
          { name: 'Mr. Ganesh K', designation: 'Lecturer & HOD', qualification: 'B.E(CS), M.Tech(IT), NET, SLET', experience: '27 yrs', email: 'ganesh.k@basck.in' },
          { name: 'Mrs. Vijayalaxmi N Shetty', designation: 'Lecturer', qualification: 'M.Sc(IT), M.Phil.', experience: '20 yrs', email: 'vijayalakshmi.shetty@basck.in' },
          { name: 'Mr. Krishna', designation: 'Lecturer', qualification: 'B.E(CS), M.Tech(IT), NET, SLET', experience: '20 yrs', email: 'krishna@basck.in' },
          { name: 'Mr. Ramachandra Achari', designation: 'Lecturer', qualification: 'M.C.A., P.G.D.C.A', experience: '16 yrs', email: 'ramachandra.achari@basck.in' },
        ],
        image: 'https://www.basck.in/images/blog/large/bca.png',
        iconName: 'Laptop',
      },
      {
        id: 'bba',
        slug: 'bba',
        code: 'BBA',
        category: 'computer-management',
        title: { en: 'Bachelor of Business Administration (BBA)', kn: 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಬಿಸಿನೆಸ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಶನ್ (BBA)' },
        shortDesc: {
          en: 'Management, entrepreneurship, and leadership studies achieving Mangalore University Rank VI (2025).',
          kn: '2025 ರ ಮಂಗಳೂರು ವಿವಿ VI ರ‍್ಯಾಂಕ್ ಪಡೆದ ವ್ಯವಹಾರ ಆಡಳಿತ ಮತ್ತು ನಾಯಕತ್ವ ತರಬೇತಿ ಪದವಿ.',
        },
        overview: {
          en: 'The BBA program equips students with managerial decision-making, finance, HR, and entrepreneurship training under the Department of Business Administration—producing 2025 Mangalore University VI Rank holder Ms. Shravya Adiga.',
          kn: 'ನಿರ್ವಹಣೆ, ಹಣಕಾಸು, ಮಾನವ ಸಂಪನ್ಮೂಲ ಮತ್ತು ಉದ್ಯಮಶೀಲತೆ ತರಬೇತಿಯೊಂದಿಗೆ 2025 ರಲ್ಲಿ ಮಂಗಳೂರು ವಿವಿಯ VI ರ‍್ಯಾಂಕ್ (ಕು. ಶ್ರಾವ್ಯ ಅಡಿಗ) ಗಳಿಸಿದ ವಿಭಾಗ.',
        },
        duration: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        eligibility: { en: '⚠ Not listed on old site — confirm with college office', kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ — ಕಚೇರಿಯಲ್ಲಿ ದೃಢೀಕರಿಸಿ' },
        feesNote: { en: '⚠ Fee structure not listed on old site — confirm with college office (08254-230469)', kn: '⚠ ಶುಲ್ಕ ವಿವರ ಕಚೇರಿಯಲ್ಲಿ ಲಭ್ಯವಿದೆ' },
        highlights: {
          en: [
            'Mangalore University 2025 VI Rank (Ms. Shravya Adiga)',
            'Experienced faculty (15–17 yrs each) led by Mrs. Archana Aravind (HOD)',
            'Integrated IPR & entrepreneurship mentoring via IIC',
          ],
          kn: [
            '2025 ರ ಮಂಗಳೂರು ವಿವಿ VI ರ‍್ಯಾಂಕ್ (ಕು. ಶ್ರಾವ್ಯ ಅಡಿಗ)',
            'ಶ್ರೀಮತಿ ಅರ್ಚನಾ ಅರವಿಂದ್ (HOD) ನೇತೃತ್ವದ ಅನುಭವಿ ಬೋಧಕ ವರ್ಗ',
            'IIC ಮೂಲಕ IPR ಮತ್ತು ಉದ್ಯಮಶೀಲತೆ ಮಾರ್ಗದರ್ಶನ',
          ],
        },
        syllabusUrl: 'https://basck.in/IQACLink5.html',
        syllabus: [
          {
            semester: { en: 'Official BBA Subject Details & Syllabus', kn: 'ಅಧಿಕೃತ BBA ವಿಷಯಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮ' },
            subjects: {
              en: 'View complete Mangalore University BBA course structure and subject papers at https://basck.in/IQACLink5.html.',
              kn: 'ಸಂಪೂರ್ಣ BBA ವಿಷಯಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮವನ್ನು https://basck.in/IQACLink5.html ನಲ್ಲಿ ನೋಡಿ.',
            },
          },
        ],
        careerPaths: {
          en: ['Business Operations & Marketing Management', 'Human Resources & Talent Acquisition', 'Entrepreneurship & MBA Programs'],
          kn: ['ವ್ಯವಹಾರ ಕಾರ್ಯಾಚರಣೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ನಿರ್ವಹಣೆ', 'ಮಾನವ ಸಂಪನ್ಮೂಲ ವಿಭಾಗ', 'ಉದ್ಯಮಶೀಲತೆ ಮತ್ತು MBA'],
        },
        faculty: [
          { name: 'Mrs. Archana Aravind', designation: 'Lecturer & HOD', qualification: 'MBA, M.Com.', experience: '17 yrs', email: 'archana.aravind@basck.in' },
          { name: 'Mr. Prasanth S Hegde', designation: 'Lecturer', qualification: 'MBA', experience: '16 yrs', email: 'prashanth.hegde@basck.in' },
          { name: 'Mr. Anjan Kumar A L', designation: 'Lecturer', qualification: 'MAF, M.Com, KSET', experience: '15 yrs', email: 'anjankumar.al@basck.in' },
        ],
        image: 'https://www.basck.in/images/blog/large/bba.png',
        iconName: 'Briefcase',
      },
    ] as ProgramItem[],
  },

  departments: {
    pageTitle: { en: 'Departments & Faculty', kn: 'ಶೈಕ್ಷಣಿಕ ವಿಭಾಗಗಳು ಮತ್ತು ಬೋಧಕರು' },
    subtitle: {
      en: 'Academic departments across Languages, Humanities, Sciences, Commerce, Management, Computer Science, Journalism, and Physical Education.',
      kn: 'ಭಾಷೆ, ಕಲಾ, ವಿಜ್ಞಾನ, ವಾಣಿಜ್ಯ, ನಿರ್ವಹಣೆ, ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ, ಪತ್ರಿಕೋದ್ಯಮ ಮತ್ತು ದೈಹಿಕ ಶಿಕ್ಷಣ ವಿಭಾಗಗಳ ಸಂಪೂರ್ಣ ಬೋಧಕ ವರ್ಗದ ಮಾಹಿತಿ.',
    },
    searchPlaceholder: {
      en: 'Search departments or faculty by name, subject, or stream...',
      kn: 'ವಿಭಾಗ ಅಥವಾ ಬೋಧಕರ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ...',
    },
    items: [
      {
        id: 'english',
        slug: 'english',
        name: { en: 'Department of English', kn: 'ಇಂಗ್ಲಿಷ್ ವಿಭಾಗ' },
        stream: { en: 'Languages & Humanities', kn: 'ಭಾಷೆ ಮತ್ತು ಕಲಾ' },
        hod: 'Praveen',
        iconName: 'BookOpen',
        about: {
          en: 'Six-member department offering foundational English language and B.A. EJP (English, Journalism, Psychology) literature instruction, with staff representation on the Governing Council (Dr. Sharan S J) and IQAC (Mrs. Shaila Ramachandra).',
          kn: 'ಆರು ಮಂದಿ ಬೋಧಕರನ್ನು ಒಳಗೊಂಡ ಇಂಗ್ಲಿಷ್ ವಿಭಾಗವು ಭಾಷಾ ಕಲಿಕೆ ಮತ್ತು B.A. EJP ಪತ್ರಿಕೋದ್ಯಮ-ಸಾಹಿತ್ಯ ಅಧ್ಯಯನವನ್ನು ನೀಡುತ್ತದೆ.',
        },
        faculty: [
          { name: 'Praveen', designation: 'Lecturer & HOD', qualification: 'M.A., B.Ed., PGDCE', experience: '16 yrs', email: 'praveen@basck.in' },
          { name: 'Mrs. Meenakshi N S', designation: 'Associate Professor', qualification: 'M.A., M.Phil', experience: '28 yrs', email: 'meenakshi@basck.in', photo: 'https://basck.in/images/staff/Meenakshi.jpg' },
          { name: 'Dr. Sharan S J', designation: 'Lecturer', qualification: 'M.A., M.Phil., B.Ed., KSET', experience: '12 yrs', email: 'sharan.sj@basck.in' },
          { name: 'Mr. Shashank Patel K G', designation: 'Lecturer', qualification: 'MA', experience: '11 yrs', email: 'shashank.patel@basck.in' },
          { name: 'Mrs. Shaila Ramachandra', designation: 'Lecturer', qualification: 'M.A., KSET', experience: '6 yrs', email: 'shaila.r@basck.in' },
          { name: 'Mrs. Shrithi Kashi', designation: 'Lecturer', qualification: 'M.A., KSET', experience: '3 yrs' },
        ],
        labs: {
          en: 'Language learning resources & ICT-enabled classrooms (confirm language lab details with department).',
          kn: 'ಭಾಷಾ ಕಲಿಕಾ ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ICT ತರಗತಿ ಕೊಠಡಿಗಳು.',
        },
        achievements: {
          en: 'Dr. Sharan S J serves as Staff Representative on the Governing Council & Sub. Lt. (ANO, NCC Navy Wing); Mrs. Shaila Ramachandra serves on IQAC.',
          kn: 'ಡಾ. ಶರಣ್ ಎಸ್.ಜೆ. ಆಡಳಿತ ಮಂಡಳಿ ಪ್ರತಿನಿಧಿ ಹಾಗೂ NCC ನೌಕಾ ವಿಭಾಗದ ANO ಆಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ವಿಭಾಗದ ವಾರ್ಷಿಕ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'kannada',
        slug: 'kannada',
        name: { en: 'Department of Kannada', kn: 'ಕನ್ನಡ ವಿಭಾಗ' },
        stream: { en: 'Languages & Humanities', kn: 'ಭಾಷೆ ಮತ್ತು ಕಲಾ' },
        hod: 'Mr. Manjunatha K.S',
        iconName: 'Languages',
        about: {
          en: 'Offers Kannada language courses across UG streams along with Optional Kannada in B.A. (CBCS HEK & NEP Kannada & History combinations).',
          kn: 'ಪದವಿ ವಿಭಾಗಗಳಿಗೆ ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು B.A. ಯಲ್ಲಿ ಐಚ್ಛಿಕ ಕನ್ನಡ ಅಧ್ಯಯನವನ್ನು ನೀಡುವ ವಿಭಾಗ.',
        },
        faculty: [
          { name: 'Mr. Manjunatha K.S', designation: 'Lecturer & HOD', qualification: 'M.A., B.Ed.', experience: '6 yrs', email: 'manjunatha.ks@basck.in' },
          { name: 'Mrs. Archana Shetty', designation: 'Lecturer', qualification: 'M.A., B.Ed.', experience: '5 yrs', email: 'archana.shetty@basck.in' },
          { name: 'Dr. Mohana B.', designation: 'Lecturer', qualification: 'M.A., M.Phil, Ph.D', experience: 'past 8 + present 5 yrs', email: 'mohan.b@basck.in' },
        ],
        labs: {
          en: 'Language infrastructure documented under Language & Arts block (IQAC Infrastructure archive).',
          kn: 'ಭಾಷಾ ಮತ್ತು ಕಲಾ ವಿಭಾಗದ ತರಗತಿ ಸೌಲಭ್ಯಗಳು.',
        },
        achievements: {
          en: 'Faculty includes Ph.D.-qualified scholar Dr. Mohana B. contributing to Kannada research and teaching.',
          kn: 'ಡಾ. ಮೋಹನ ಬಿ. ಅವರಂತಹ ಪಿಎಚ್.ಡಿ. ಪದವೀಧರ ಬೋಧಕರನ್ನು ವಿಭಾಗ ಹೊಂದಿದೆ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ವಿಭಾಗದ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'hindi',
        slug: 'hindi',
        name: { en: 'Department of Hindi', kn: 'ಹಿಂದಿ ವಿಭಾಗ' },
        stream: { en: 'Languages & Humanities', kn: 'ಭಾಷೆ ಮತ್ತು ಕಲಾ' },
        hod: 'Ms. Prafulla B',
        iconName: 'BookOpen',
        about: {
          en: 'Led by senior educator Ms. Prafulla B (32 years of teaching experience), delivering Hindi language instruction for undergraduate programs.',
          kn: '32 ವರ್ಷಗಳ ಅನುಭವ ಹೊಂದಿರುವ ಶ್ರೀಮತಿ ಪ್ರಫುಲ್ಲಾ ಬಿ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ಪದವಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಹಿಂದಿ ಬೋಧನೆ.',
        },
        faculty: [
          { name: 'Ms. Prafulla B', designation: 'Lecturer & HOD', qualification: 'M.A., Hindi Ratna', experience: '32 yrs', email: 'prafulla.b@basck.in' },
          { name: 'Ms. Shreenidhi', designation: 'Lecturer', qualification: 'M.A.', experience: '2 yrs' },
        ],
        labs: {
          en: 'Supported by Central Library Hindi literature holdings and language block classrooms.',
          kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯದ ಹಿಂದಿ ಪುಸ್ತಕ ಸಂಗ್ರಹ ಮತ್ತು ಭಾಷಾ ತರಗತಿಗಳು.',
        },
        achievements: {
          en: '32 years of dedicated Hindi pedagogy and university language instruction under Ms. Prafulla B.',
          kn: 'ಶ್ರೀಮತಿ ಪ್ರಫುಲ್ಲಾ ಬಿ ಅವರ 32 ವರ್ಷಗಳ ನಿರಂತರ ಶೈಕ್ಷಣಿಕ ಸೇವೆ.',
        },
        events: {
          en: '⚠ Departmental event schedule not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'sanskrit',
        slug: 'sanskrit',
        name: { en: 'Department of Sanskrit', kn: 'ಸಂಸ್ಕೃತ ವಿಭಾಗ' },
        stream: { en: 'Languages & Humanities', kn: 'ಭಾಷೆ ಮತ್ತು ಕಲಾ' },
        hod: '⚠ [Pending office confirmation]',
        hodNotice: '⚠ Old site displays an empty "Staff Name" placeholder for Sanskrit. Confirm faculty details with the college office.',
        iconName: 'BookOpen',
        about: {
          en: 'Classical Sanskrit language department. ⚠ On basck.in, the Sanskrit faculty listing shows an empty "Staff Name" placeholder; confirm current staff details with the college office.',
          kn: 'ಶಾಸ್ತ್ರೀಯ ಸಂಸ್ಕೃತ ಭಾಷಾ ವಿಭಾಗ. ⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಬೋಧಕರ ಹೆಸರು ಖಾಲಿ ಇದೆ — ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
        faculty: [
          {
            name: '⚠ [Staff name needed from college office]',
            designation: 'Placeholder (empty on basck.in)',
            qualification: '⚠ Confirm with college office',
            experience: '—',
            isPlaceholder: true,
          },
        ],
        labs: {
          en: '⚠ Confirm departmental resources with the college office.',
          kn: '⚠ ವಿಭಾಗದ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
        achievements: {
          en: '⚠ Confirm achievements with the college office.',
          kn: '⚠ ಸಾಧನೆಗಳನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
        events: {
          en: '⚠ Confirm departmental events with the college office.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'history',
        slug: 'history',
        name: { en: 'Department of History', kn: 'ಇತಿಹಾಸ ವಿಭಾಗ' },
        stream: { en: 'Arts & Humanities', kn: 'ಕಲಾ ವಿಭಾಗ' },
        hod: 'Mrs. Sneha S',
        iconName: 'Landmark',
        about: {
          en: 'Core B.A. discipline across CBCS (HEK, HEP, HSP) and NEP combinations, led by Mrs. Sneha S (20 years experience) and supported by the college History Museum.',
          kn: 'B.A. ವಿಭಾಗದ CBCS ಮತ್ತು NEP ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಪ್ರಮುಖ ವಿಷಯವಾಗಿದ್ದು, ಕಾಲೇಜು ಇತಿಹಾಸ ವಸ್ತುಸಂಗ್ರಹಾಲಯದೊಂದಿಗೆ ಬೋಧಿಸಲಾಗುತ್ತದೆ.',
        },
        faculty: [
          { name: 'Mrs. Sneha S', designation: 'Lecturer & HOD', qualification: 'M.A., B.Ed', experience: '20 yrs', email: 'sneha.s@basck.in' },
        ],
        labs: {
          en: 'Campus History Museum (featured in IQAC Infrastructure archive) and documentary archive in Central Library.',
          kn: 'ಕ್ಯಾಂಪಸ್ ಇತಿಹಾಸ ವಸ್ತುಸಂಗ್ರಹಾಲಯ ಮತ್ತು ಗ್ರಂಥಾಲಯದ ದಾಖಲೆ ಸಂಗ್ರಹ.',
        },
        achievements: {
          en: 'Active representation in IQAC (Sri K. Gopal, History, listed in 2023–24 IQAC archive).',
          kn: 'IQAC ನಲ್ಲಿ ವಿಭಾಗದ ಪ್ರಾತಿನಿಧ್ಯ (ಶ್ರೀ ಕೆ. ಗೋಪಾಲ್, ಇತಿಹಾಸ).',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'economics',
        slug: 'economics',
        name: { en: 'Department of Economics', kn: 'ಅರ್ಥಶಾಸ್ತ್ರ ವಿಭಾಗ' },
        stream: { en: 'Arts & Humanities', kn: 'ಕಲಾ ವಿಭಾಗ' },
        hod: 'Mr. Manjunatha',
        iconName: 'TrendingUp',
        about: {
          en: 'Three-member KSET-qualified faculty teaching Economics across B.A. CBCS (HEK, HEP) and NEP combinations, and supporting Campus Placement mentoring.',
          kn: 'KSET ಅರ್ಹತೆಯುಳ್ಳ ಮೂವರು ಬೋಧಕರಿಂದ B.A. ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅರ್ಥಶಾಸ್ತ್ರ ಬೋಧನೆ ಮತ್ತು ಉದ್ಯೋಗ ಕೋಶ ಮಾರ್ಗದರ್ಶನ.',
        },
        faculty: [
          { name: 'Mr. Manjunatha', designation: 'Lecturer & HOD', qualification: 'M.A., B.Ed, KSET', experience: '14 yrs', email: 'manjunatha@basck.in' },
          { name: 'Mr. Durgaprasada Mayya', designation: 'Lecturer', qualification: 'M.A, KSET', experience: '11 yrs', email: 'durgaprasad.mayya@basck.in' },
          { name: 'Ms. Sooranjini', designation: 'Lecturer', qualification: 'M.A, KSET', experience: '6 yrs', email: 'sooranjini@basck.in' },
        ],
        labs: {
          en: 'ICT-enabled classrooms and Central Library economics periodicals and statistical references.',
          kn: 'ICT ತರಗತಿ ಕೊಠಡಿಗಳು ಮತ್ತು ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯದ ಅರ್ಥಶಾಸ್ತ್ರ ನಿಯತಕಾಲಿಕೆಗಳು.',
        },
        achievements: {
          en: 'All three faculty members are KSET qualified; Mr. Durgaprasada Mayya also serves on the Career Guidance & Placement Committee.',
          kn: 'ಎಲ್ಲಾ ಮೂವರು ಬೋಧಕರು KSET ಅರ್ಹತೆ ಪಡೆದಿದ್ದು, ಶ್ರೀ ದುರ್ಗಾಪ್ರಸಾದ ಮಯ್ಯ ಉದ್ಯೋಗ ಕೋಶ ಸಮಿತಿಯಲ್ಲಿದ್ದಾರೆ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'political-science',
        slug: 'political-science',
        name: { en: 'Department of Political Science', kn: 'ರಾಜ್ಯಶಾಸ್ತ್ರ ವಿಭಾಗ' },
        stream: { en: 'Arts & Humanities', kn: 'ಕಲಾ ವಿಭಾಗ' },
        hod: 'Mrs. Harshitha',
        iconName: 'Scale',
        about: {
          en: 'Offers Political Science in B.A. CBCS (HEP, HSP) and NEP combinations, home to Principal Dr. Shubhakarachary (Associate Professor, 29 yrs) and HOD Mrs. Harshitha.',
          kn: 'ಪ್ರಾಂಶುಪಾಲ ಡಾ. ಶುಭಾಕರಾಚಾರಿ ಮತ್ತು ವಿಭಾಗಾಧ್ಯಕ್ಷೆ ಶ್ರೀಮತಿ ಹರ್ಷಿತಾ ಅವರನ್ನೊಳಗೊಂಡ B.A. ರಾಜ್ಯಶಾಸ್ತ್ರ ವಿಭಾಗ.',
        },
        faculty: [
          { name: 'Mrs. Harshitha', designation: 'Lecturer & HOD', qualification: 'M.A.', experience: '13 yrs', email: 'harshitha@basck.in' },
          { name: 'Dr. Shubhakarachary', designation: 'Associate Professor (Principal)', qualification: 'M.A., Ph.D.', experience: '29 yrs', email: 'shubhakara@basck.in', photo: 'https://www.basck.in/images/staff/principal.jpeg' },
        ],
        labs: {
          en: 'Arts & Humanities seminar classrooms and Central Library civics & constitution reference holdings.',
          kn: 'ಕಲಾ ವಿಭಾಗದ ತರಗತಿಗಳು ಮತ್ತು ಸಂವಿಧಾನ-ರಾಜ್ಯಶಾಸ್ತ್ರ ಗ್ರಂಥಾಲಯ ಸಂಪನ್ಮೂಲಗಳು.',
        },
        achievements: {
          en: 'Institutional leadership led by Dr. Shubhakarachary (Principal); Placement Cell representation.',
          kn: 'ಡಾ. ಶುಭಾಕರಾಚಾರಿ ಅವರ ಪ್ರಾಂಶುಪಾಲತ್ವ ಮತ್ತು ಉದ್ಯೋಗ ಕೋಶ ಪ್ರಾತಿನಿಧ್ಯ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'sociology',
        slug: 'sociology',
        name: { en: 'Department of Sociology', kn: 'ಸಮಾಜಶಾಸ್ತ್ರ ವಿಭಾಗ' },
        stream: { en: 'Arts & Humanities', kn: 'ಕಲಾ ವಿಭಾಗ' },
        hod: '⚠ [HOD designation not specified on old site]',
        hodNotice: '⚠ Both faculty members are listed as Lecturer without explicit HOD tag on basck.in; confirm HOD with office.',
        iconName: 'Users',
        about: {
          en: 'Teaches Sociology within the B.A. CBCS (HSP — History, Sociology, Political Science) program, exploring social institutions and community development.',
          kn: 'B.A. HSP ಸಂಯೋಜನೆಯಡಿ ಸಮಾಜಶಾಸ್ತ್ರ ಅಧ್ಯಯನವನ್ನು ನೀಡುವ ವಿಭಾಗ.',
        },
        faculty: [
          { name: 'Ms. Rashmitha', designation: 'Lecturer', qualification: 'M.A.', experience: '3 yrs', email: 'rashmitha@basck.in' },
          { name: 'Mrs. Manjula N', designation: 'Lecturer', qualification: 'M.A.', experience: '1 yr' },
        ],
        labs: {
          en: 'Arts classrooms and Central Library social sciences collection.',
          kn: 'ಕಲಾ ತರಗತಿ ಕೊಠಡಿಗಳು ಮತ್ತು ಸಮಾಜ ವಿಜ್ಞಾನ ಗ್ರಂಥಾಲಯ ವಿಭಾಗ.',
        },
        achievements: {
          en: '⚠ Confirm departmental achievements with college office.',
          kn: '⚠ ವಿಭಾಗದ ಸಾಧನೆಗಳನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with office.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'journalism',
        slug: 'journalism',
        name: { en: 'Department of Journalism', kn: 'ಪತ್ರಿಕೋದ್ಯಮ ವಿಭಾಗ' },
        stream: { en: 'Arts & Media', kn: 'ಕಲಾ ಮತ್ತು ಮಾಧ್ಯಮ' },
        hod: 'Mrs. Sumalatha S Naik',
        iconName: 'Newspaper',
        about: {
          en: 'Part of the B.A. EJP (English, Journalism, Psychology) combination, led by Mrs. Sumalatha S Naik (19 yrs experience), also serving on IQAC and IIC Social Media.',
          kn: 'B.A. EJP ಸಂಯೋಜನೆಯ ಭಾಗವಾಗಿದ್ದು, ಶ್ರೀಮತಿ ಸುಮಲತಾ ಎಸ್. ನಾಯ್ಕ್ (19 ವರ್ಷ ಅನುಭವ) ಅವರ ನೇತೃತ್ವದಲ್ಲಿದೆ.',
        },
        faculty: [
          { name: 'Mrs. Sumalatha S Naik', designation: 'Lecturer & HOD', qualification: 'M.A.', experience: '19 yrs', email: 'sumalatha.naik@basck.in' },
        ],
        labs: {
          en: 'Campus media connections including Radio Kundapura 89.6 FM community radio station and Central Library newspaper archives (13 daily/weekly newspapers).',
          kn: 'ರೇಡಿಯೋ ಕುಂದಾಪುರ 89.6 FM ಸಮುದಾಯ ರೇಡಿಯೋ ಮತ್ತು ಗ್ರಂಥಾಲಯದ 13 ಪತ್ರಿಕೆಗಳ ಸಂಗ್ರಹ.',
        },
        achievements: {
          en: 'Mrs. Sumalatha S Naik serves as IQAC Member & IIC Social Media Coordinator.',
          kn: 'ಶ್ರೀಮತಿ ಸುಮಲತಾ ಎಸ್. ನಾಯ್ಕ್ IQAC ಸದಸ್ಯೆ ಮತ್ತು IIC ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಸಂಯೋಜಕಿಯಾಗಿದ್ದಾರೆ.',
        },
        events: {
          en: '⚠ Confirm journalism workshops & campus publications with HOD.',
          kn: '⚠ ಪತ್ರಿಕೋದ್ಯಮ ಕಾರ್ಯಾಗಾರಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'commerce',
        slug: 'commerce',
        name: { en: 'Department of Commerce (B.Com)', kn: 'ವಾಣಿಜ್ಯ ವಿಭಾಗ (B.Com)' },
        stream: { en: 'Commerce', kn: 'ವಾಣಿಜ್ಯ' },
        hod: 'Mr. Arun A S',
        iconName: 'Calculator',
        about: {
          en: 'Twelve-member faculty team led by Mr. Arun A S (16 yrs experience), guiding B.Com students in accounting, taxation, finance, and commerce placements.',
          kn: 'ಶ್ರೀ ಅರುಣ್ ಎ ಎಸ್ ನೇತೃತ್ವದ 12 ಮಂದಿ ಬೋಧಕರ ತಂಡದೊಂದಿಗೆ ಲೆಕ್ಕಶಾಸ್ತ್ರ, ತೆರಿಗೆ ಮತ್ತು ಹಣಕಾಸು ಶಿಕ್ಷಣ ನೀಡುವ ವಿಭಾಗ.',
        },
        faculty: [
          { name: 'Mr. Arun A S', designation: 'Lecturer & HOD', qualification: 'M.Com.', experience: '16 yrs', email: 'arun.as@basck.in' },
          { name: 'Mrs. Mamatha', designation: 'Lecturer', qualification: 'M.Com., M.Phil.', experience: '19 yrs', email: 'mamatha@basck.in' },
          { name: 'Mrs. Omshree', designation: 'Lecturer', qualification: 'M.Com.', experience: '12 yrs', email: 'omshree@basck.in' },
          { name: 'Mr. Rithin Shetty', designation: 'Lecturer', qualification: 'M.Com.', experience: '11 yrs', email: 'rithinkumar.shetty@basck.in' },
          { name: 'Mr. Annappa Poojari', designation: 'Lecturer', qualification: 'M.Com', experience: '11 yrs', email: 'annappa.poojari@basck.in' },
          { name: 'Mr. Ganesh Kumar', designation: 'Lecturer', qualification: 'M.Com, KSET', experience: '9 yrs', email: 'ganeshkumar@basck.in' },
          { name: 'Mrs. Akshatha K', designation: 'Lecturer', qualification: 'M.Com.', experience: '9 yrs', email: 'akshatha@basck.in' },
          { name: 'Mrs. Suma', designation: 'Lecturer', qualification: 'M.Com, NET and KSET', experience: '6 yrs', email: 'suma.poojari@basck.in' },
          { name: 'Mrs. Sumashree M', designation: 'Lecturer', qualification: 'M.Com.', experience: 'past 10 + present 2 yrs' },
          { name: 'Ms. Prajna Parameshwara Hegade', designation: 'Lecturer', qualification: 'M.Com.', experience: 'past 3.2 + present 2 yrs', email: 'prajnahegde@basck.in' },
          { name: 'Mrs. Sulatha', designation: 'Lecturer', qualification: 'M.Com.', experience: 'past 10 + present 1 yr' },
          { name: 'Ms. Pushpalatha', designation: 'Lecturer', qualification: 'M.Com, KSET', experience: 'past 4 + present 1 yr' },
        ],
        labs: {
          en: 'Commerce & Management academic block with ICT-enabled classrooms (IQAC Infrastructure archive).',
          kn: 'ವಾಣಿಜ್ಯ ಮತ್ತು ನಿರ್ವಹಣಾ ಬ್ಲಾಕ್ ಹಾಗೂ ICT ತರಗತಿ ಕೊಠಡಿಗಳು.',
        },
        achievements: {
          en: 'Faculty actively lead NSS Unit I (Mr. Arun A S), IIC Start-up/ARIIA/Internship cells, Placement Cell, and IQAC.',
          kn: 'NSS ಘಟಕ-I, IIC, ಉದ್ಯೋಗ ಕೋಶ ಮತ್ತು IQAC ನಲ್ಲಿ ವಿಭಾಗದ ಬೋಧಕರು ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತಿದ್ದಾರೆ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'business-administration',
        slug: 'business-administration',
        name: { en: 'Department of Business Administration (BBA)', kn: 'ವ್ಯವಹಾರ ಆಡಳಿತ ವಿಭಾಗ (BBA)' },
        stream: { en: 'Management', kn: 'ನಿರ್ವಹಣೆ' },
        hod: 'Mrs. Archana Aravind',
        iconName: 'Briefcase',
        about: {
          en: 'Seasoned three-member management faculty (15–17 years experience each) delivering BBA studies and leadership training.',
          kn: 'ತಲಾ 15–17 ವರ್ಷಗಳ ಅನುಭವ ಹೊಂದಿರುವ ಮೂವರು ಬೋಧಕರಿಂದ BBA ನಿರ್ವಹಣಾ ಶಿಕ್ಷಣ.',
        },
        faculty: [
          { name: 'Mrs. Archana Aravind', designation: 'Lecturer & HOD', qualification: 'MBA, M.Com.', experience: '17 yrs', email: 'archana.aravind@basck.in' },
          { name: 'Mr. Prasanth S Hegde', designation: 'Lecturer', qualification: 'MBA', experience: '16 yrs', email: 'prashanth.hegde@basck.in' },
          { name: 'Mr. Anjan Kumar A L', designation: 'Lecturer', qualification: 'MAF, M.Com, KSET', experience: '15 yrs', email: 'anjankumar.al@basck.in' },
        ],
        labs: {
          en: 'Arts, Commerce & Management block classrooms, AV Hall, and e-learning resources.',
          kn: 'ವಾಣಿಜ್ಯ ಮತ್ತು ನಿರ್ವಹಣಾ ಬ್ಲಾಕ್, ದೃಶ್ಯ-ಶ್ರವಣ ಸಭಾಂಗಣ ಮತ್ತು ಇ-ಕಲಿಕಾ ಕೇಂದ್ರ.',
        },
        achievements: {
          en: 'Mangalore University 2025 VI Rank in BBA (Ms. Shravya Adiga). Faculty also serve as IIC IPR Coordinator (Mrs. Archana Aravind), Placement Cell member (Mr. Prasanth S Hegde), and NCC Army Wing ANO (Lt. Anjan Kumar A L).',
          kn: '2025 ರ ಮಂಗಳೂರು ವಿವಿ VI ರ‍್ಯಾಂಕ್ (ಕು. ಶ್ರಾವ್ಯ ಅಡಿಗ) ಹಾಗೂ NCC, IIC ಮತ್ತು ಉದ್ಯೋಗ ಕೋಶದಲ್ಲಿ ಸೇವೆ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'physics',
        slug: 'physics',
        name: { en: 'Department of Physics', kn: 'ಭೌತಶಾಸ್ತ್ರ ವಿಭಾಗ' },
        stream: { en: 'Sciences', kn: 'ವಿಜ್ಞಾನ' },
        hod: 'Mr. Shashikanth Hathwar',
        iconName: 'Atom',
        about: {
          en: 'Core B.Sc. science department across CBCS (PMC, PMS, PMCs) and NEP (Chemistry & Physics, Maths & Physics, Computer Science & Physics), led by Associate Professor Mr. Shashikanth Hathwar (32 yrs experience).',
          kn: '32 ವರ್ಷಗಳ ಅನುಭವದ ಶ್ರೀ ಶಶಿಕಾಂತ್ ಹತ್ವಾರ್ ನೇತೃತ್ವದಲ್ಲಿ B.Sc. CBCS ಮತ್ತು NEP ಭೌತಶಾಸ್ತ್ರ ಬೋಧನೆ.',
        },
        faculty: [
          { name: 'Mr. Shashikanth Hathwar', designation: 'Associate Professor & HOD', qualification: 'M.Sc., M.Phil.', experience: '32 yrs', email: 'shashikanth.hathwar@basck.in' },
          { name: 'Mrs. Neha Shetty', designation: 'Lecturer', qualification: 'M.Sc.', experience: '5 yrs', email: 'neha@basck.in' },
        ],
        labs: {
          en: 'Undergraduate Physics laboratories supporting CBCS and NEP practical coursework.',
          kn: 'CBCS ಮತ್ತು NEP ಪ್ರಾಯೋಗಿಕ ತರಗತಿಗಳಿಗೆ ಸುಸಜ್ಜಿತ ಭೌತಶಾಸ್ತ್ರ ಪ್ರಯೋಗಾಲಯಗಳು.',
        },
        achievements: {
          en: 'Mr. Shashikanth Hathwar has served as Past IQAC Coordinator and leads senior undergraduate Physics instruction.',
          kn: 'ಶ್ರೀ ಶಶಿಕಾಂತ್ ಹತ್ವಾರ್ ಹಿಂದಿನ IQAC ಸಂಯೋಜಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿದ್ದಾರೆ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'chemistry',
        slug: 'chemistry',
        name: { en: 'Department of Chemistry', kn: 'ರಸಾಯನಶಾಸ್ತ್ರ ವಿಭಾಗ' },
        stream: { en: 'Sciences', kn: 'ವಿಜ್ಞಾನ' },
        hod: 'Ms. Nisha M',
        iconName: 'FlaskConical',
        about: {
          en: 'Led by senior Associate Professors Ms. Nisha M (35 yrs) and Mr. Sathyanarayana (34 yrs), teaching across B.Sc. CBCS (PMC, BZC, MCZ) and NEP Chemistry combinations.',
          kn: '35 ವರ್ಷ ಅನುಭವದ ಶ್ರೀಮತಿ ನಿಶಾ ಎಂ ಮತ್ತು 34 ವರ್ಷ ಅನುಭವದ ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಅವರನ್ನೊಳಗೊಂಡ ರಸಾಯನಶಾಸ್ತ್ರ ವಿಭಾಗ.',
        },
        faculty: [
          { name: 'Ms. Nisha M', designation: 'Associate Professor & HOD', qualification: 'M.Sc.', experience: '35 yrs', email: 'nisha.m@basck.in' },
          { name: 'Mr. Sathyanarayana', designation: 'Associate Professor', qualification: 'M.Sc., M.Phil.', experience: '34 yrs', email: 'sathyanarayana@basck.in' },
          { name: 'Ms. K Pavithra', designation: 'Lecturer', qualification: 'M.Sc.', experience: '2 yrs' },
        ],
        labs: {
          en: 'Chemistry laboratories supporting Physical, Inorganic, Organic, and analytical practicals.',
          kn: 'ಭೌತ, ಅಜೈವಿಕ ಮತ್ತು ಸಾವಯವ ರಸಾಯನಶಾಸ್ತ್ರ ಪ್ರಯೋಗಾಲಯಗಳು.',
        },
        achievements: {
          en: 'Prof. Sathyanarayana serves as IQAC Coordinator (2023–24; ⚠ confirm current list with office) and Youth Red Cross Programme Coordinator.',
          kn: 'ಪ್ರೊ. ಸತ್ಯನಾರಾಯಣ IQAC ಸಂಯೋಜಕರಾಗಿ ಮತ್ತು ಯೂತ್ ರೆಡ್ ಕ್ರಾಸ್ ಸಂಯೋಜಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'mathematics',
        slug: 'mathematics',
        name: { en: 'Department of Mathematics', kn: 'ಗಣಿತಶಾಸ್ತ್ರ ವಿಭಾಗ' },
        stream: { en: 'Sciences', kn: 'ವಿಜ್ಞಾನ' },
        hod: 'Ms. Divya',
        iconName: 'Sigma',
        about: {
          en: 'Three-member faculty teaching core Mathematics across B.Sc. CBCS (PMC, PMS, PMCs) and NEP (Maths & Physics, Maths & Chemistry, Computer Science & Maths).',
          kn: 'B.Sc. CBCS ಮತ್ತು NEP ವಿಜ್ಞಾನ ಸಂಯೋಜನೆಗಳಿಗೆ ಗಣಿತಶಾಸ್ತ್ರ ಬೋಧಿಸುವ ವಿಭಾಗ.',
        },
        faculty: [
          { name: 'Ms. Divya', designation: 'Lecturer & HOD', qualification: 'MSc Maths, B.Ed', experience: 'past 7 + present 1 yrs' },
          { name: 'Ms. Kavya Pai', designation: 'Lecturer', qualification: 'MSc Maths', experience: 'past 1.10 + present 1 yrs' },
          { name: 'Ms. Deepthi Velankar', designation: 'Lecturer', qualification: 'MSc Maths', experience: '1 yr' },
        ],
        labs: {
          en: 'Science classrooms & computational facilities (confirm departmental email contacts with office).',
          kn: 'ವಿಜ್ಞಾನ ತರಗತಿ ಕೊಠಡಿಗಳು ಮತ್ತು ಗಣಿತ ಕಲಿಕಾ ಸಂಪನ್ಮೂಲಗಳು.',
        },
        achievements: {
          en: 'Placement Cell representation (Ms. Vaishanvi, Mathematics, listed on Placement Cell committee).',
          kn: 'ಉದ್ಯೋಗ ಕೋಶ ಸಮಿತಿಯಲ್ಲಿ ಗಣಿತ ವಿಭಾಗದ ಪ್ರಾತಿನಿಧ್ಯ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'statistics',
        slug: 'statistics',
        name: { en: 'Department of Statistics', kn: 'ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ವಿಭಾಗ' },
        stream: { en: 'Sciences', kn: 'ವಿಜ್ಞಾನ' },
        hod: 'Mrs. Swapna',
        iconName: 'BarChart3',
        about: {
          en: 'Supports the B.Sc. PMS (Physics, Maths, Statistics) combination and quantitative analysis coursework across streams.',
          kn: 'B.Sc. PMS ಸಂಯೋಜನೆ ಮತ್ತು ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ಅಧ್ಯಯನವನ್ನು ನೀಡುವ ವಿಭಾಗ.',
        },
        faculty: [
          { name: 'Mrs. Swapna', designation: 'Lecturer & HOD', qualification: 'M.Sc.', experience: '14 yrs', email: 'swapna@basck.in' },
        ],
        labs: {
          en: 'Statistical practical resources and computing facilities.',
          kn: 'ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ಪ್ರಾಯೋಗಿಕ ಮತ್ತು ಗಣಕ ಸೌಲಭ್ಯಗಳು.',
        },
        achievements: {
          en: 'Mrs. Swapna actively mentors students through the Career Guidance & Placement Committee.',
          kn: 'ಶ್ರೀಮತಿ ಸ್ವಪ್ನಾ ಉದ್ಯೋಗ ಕೋಶ ಸಮಿತಿಯಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಿದ್ದಾರೆ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'zoology',
        slug: 'zoology',
        name: { en: 'Department of Zoology', kn: 'ಪ್ರಾಣಿಶಾಸ್ತ್ರ ವಿಭಾಗ' },
        stream: { en: 'Life Sciences', kn: 'ಜೀವ ವಿಜ್ಞಾನ' },
        hod: 'Mrs. Manasa Shetty',
        iconName: 'Bug',
        about: {
          en: 'Teaches Zoology across B.Sc. CBCS (BZC, MCZ, BBZ) and NEP (Chemistry & Zoology, Biotechnology & Zoology, Microbiology & Zoology) streams.',
          kn: 'B.Sc. CBCS ಮತ್ತು NEP ಜೀವವಿಜ್ಞಾನ ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಪ್ರಾಣಿಶಾಸ್ತ್ರ ಬೋಧನೆ.',
        },
        faculty: [
          { name: 'Mrs. Manasa Shetty', designation: 'Lecturer & HOD', qualification: 'M.Sc.', experience: '11 yrs', email: 'manasa.shetty@basck.in' },
        ],
        labs: {
          en: 'Zoology laboratory and biological specimen resources.',
          kn: 'ಪ್ರಾಣಿಶಾಸ್ತ್ರ ಪ್ರಯೋಗಾಲಯ ಮತ್ತು ಜೈವಿಕ ಮಾದರಿಗಳ ಸಂಗ್ರಹ.',
        },
        achievements: {
          en: 'Supports life-science combinations BZC, MCZ, and BBZ across university examinations.',
          kn: 'BZC, MCZ ಮತ್ತು BBZ ವಿಭಾಗಗಳ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗದರ್ಶನ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'botany',
        slug: 'botany',
        name: { en: 'Department of Botany', kn: 'ಸಸ್ಯಶಾಸ್ತ್ರ ವಿಭಾಗ' },
        stream: { en: 'Life Sciences', kn: 'ಜೀವ ವಿಜ್ಞಾನ' },
        hod: 'Mrs. Rajani Mathew',
        iconName: 'Leaf',
        about: {
          en: 'Offers Botany in the B.Sc. CBCS BZC (Botany, Zoology, Chemistry) stream, enriched by the campus Botanical Garden.',
          kn: 'ಕ್ಯಾಂಪಸ್ ಸಸ್ಯೋದ್ಯಾನದೊಂದಿಗೆ B.Sc. BZC ವಿಭಾಗದಲ್ಲಿ ಸಸ್ಯಶಾಸ್ತ್ರ ಬೋಧನೆ.',
        },
        faculty: [
          { name: 'Mrs. Rajani Mathew', designation: 'Lecturer & HOD', qualification: 'M.Sc., B.Ed.', experience: '1 yr' },
        ],
        labs: {
          en: 'Botany laboratory and campus Botanical Garden (listed under campus learning resources).',
          kn: 'ಸಸ್ಯಶಾಸ್ತ್ರ ಪ್ರಯೋಗಾಲಯ ಮತ್ತು ಕ್ಯಾಂಪಸ್ ಸಸ್ಯೋದ್ಯಾನ.',
        },
        achievements: {
          en: 'Maintains Botanical Garden specimens supporting undergraduate taxonomy & ecology practicals.',
          kn: 'ಪದವಿ ಪ್ರಾಯೋಗಿಕ ಅಧ್ಯಯನಕ್ಕಾಗಿ ಕ್ಯಾಂಪಸ್ ಸಸ್ಯೋದ್ಯಾನ ನಿರ್ವಹಣೆ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'computer-science',
        slug: 'computer-science',
        name: { en: 'Department of Computer Applications / Computer Science', kn: 'ಕಂಪ್ಯೂಟರ್ ಅಪ್ಲಿಕೇಶನ್ಸ್ / ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ ವಿಭಾಗ' },
        stream: { en: 'Computer Applications & Science', kn: 'ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ' },
        hod: 'Mr. Ganesh K',
        iconName: 'Laptop',
        about: {
          en: 'Our largest academic department with 20 faculty members led by Mr. Ganesh K (27 yrs experience), housed in the dedicated Computer Science Block and supporting BCA and B.Sc. (PMCs, CS & Maths, CS & Physics).',
          kn: '27 ವರ್ಷ ಅನುಭವದ ಶ್ರೀ ಗಣೇಶ್ ಕೆ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ 20 ಮಂದಿ ಬೋಧಕರನ್ನು ಹೊಂದಿರುವ ವಿಭಾಗ; BCA ಮತ್ತು B.Sc. ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೋಧಿಸುತ್ತದೆ.',
        },
        faculty: [
          { name: 'Mr. Ganesh K', designation: 'Lecturer & HOD', qualification: 'B.E(CS), M.Tech(IT), NET, SLET', experience: '27 yrs', email: 'ganesh.k@basck.in', photo: 'https://basck.in/images/staff/GaneshK.jpg' },
          { name: 'Mrs. Vijayalaxmi N Shetty', designation: 'Lecturer', qualification: 'M.Sc(IT), M.Phil.', experience: '20 yrs', email: 'vijayalakshmi.shetty@basck.in' },
          { name: 'Mr. Krishna', designation: 'Lecturer', qualification: 'B.E(CS), M.Tech(IT), NET, SLET', experience: '20 yrs', email: 'krishna@basck.in' },
          { name: 'Mr. Ramachandra Achari', designation: 'Lecturer', qualification: 'M.C.A., P.G.D.C.A', experience: '16 yrs', email: 'ramachandra.achari@basck.in' },
          { name: 'Mr. Vinayanand Naik', designation: 'Lecturer', qualification: 'M.Sc.', experience: '12 yrs', email: 'vinayananda.naik@basck.in' },
          { name: 'Mr. Rajendra Hoblidar', designation: 'Lecturer', qualification: 'M.C.A', experience: '10 yrs', email: 'rajendra.hobalidar@basck.in' },
          { name: 'Mrs. Amratha C', designation: 'Lecturer', qualification: 'M.Sc, NET', experience: '9 yrs', email: 'amrathac@basck.in' },
          { name: 'Mr. Mukund Bhat', designation: 'Lecturer', qualification: 'M.C.A', experience: '8 yrs', email: 'mukunda@basck.in', photo: 'https://basck.in/images/staff/Mukund.JPG' },
          { name: 'Mrs. Chandrakala Sakalathi', designation: 'Lecturer', qualification: 'MSc, BEd', experience: 'past 13 + present 4.5 yrs' },
          { name: 'Ms. Shreenidhi Hegde', designation: 'Lecturer', qualification: 'MTech, MCA, BE', experience: 'past 6 + present 4 yrs' },
          { name: 'Mrs. Samhitha', designation: 'Lecturer', qualification: 'B.E', experience: 'past 5 + present 3 yrs' },
          { name: 'Mrs. Lakshmi', designation: 'Lecturer', qualification: 'MSc', experience: 'past 4 + present 3 yrs', email: 'Lakshmi@basck.in' },
          { name: 'Mrs. Roopa', designation: 'Lecturer', qualification: 'MCA, BE', experience: 'past 3.5 + present 4 yrs' },
          { name: 'Ms. Chethana', designation: 'Lecturer', qualification: 'MSc', experience: 'past 2 + present 4 yrs' },
          { name: 'Ms. Divya K', designation: 'Lecturer', qualification: 'MSc', experience: '4 yrs' },
          { name: 'Mrs. Priya R Shetty', designation: 'Lecturer', qualification: 'BE', experience: '1 yr' },
          { name: 'Ms. Keerthana', designation: 'Lecturer', qualification: 'MSc', experience: '1 yr' },
          { name: 'Ms. R Shreeraksha', designation: 'Lecturer', qualification: 'MSc', experience: '1 yr' },
          { name: 'Ms. Sahana', designation: 'Lecturer', qualification: 'MSc', experience: '1 yr' },
          { name: 'Mr. Adarsh', designation: 'Lecturer', qualification: 'MSc', experience: '1 yr' },
        ],
        labs: {
          en: 'Dedicated Computer Science Block (documented in IQAC Infrastructure archive), computer laboratories, and e-learning facilities.',
          kn: 'ಪ್ರತ್ಯೇಕ ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ ಬ್ಲಾಕ್, ಕಂಪ್ಯೂಟರ್ ಪ್ರಯೋಗಾಲಯಗಳು ಮತ್ತು ಇ-ಕಲಿಕಾ ಸೌಲಭ್ಯಗಳು.',
        },
        achievements: {
          en: 'Mangalore University 2025 BCA Ranks VIII (Ms. Shravya Shenoy) & IX (Ms. Rakshitha); faculty lead IIC (Mr. Ganesh K), NSS Unit II (Mr. Ramachandra Achari), Placement Cell (Mr. Rajendra Hoblidar, Coordinator), and IQAC.',
          kn: '2025 ರ ಮಂಗಳೂರು ವಿವಿ BCA VIII & IX ರ‍್ಯಾಂಕ್‌ಗಳು; IIC, NSS ಘಟಕ-II, ಉದ್ಯೋಗ ಕೋಶ ಮತ್ತು IQAC ನಲ್ಲಿ ಬೋಧಕರ ನೇತೃತ್ವ.',
        },
        events: {
          en: '⚠ Departmental event calendar not extracted from basck.in — confirm with HOD.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು HOD ಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'applied-bioscience-allied',
        slug: 'applied-bioscience-allied',
        name: { en: 'Applied Bioscience, Biotech, Biochem, Microbiology & Psychology', kn: 'ಅಪ್ಲೈಡ್ ಬಯೋಸೈನ್ಸ್, ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ, ಸೂಕ್ಷ್ಮಜೀವಶಾಸ್ತ್ರ ಮತ್ತು ಮನೋವಿಜ್ಞಾನ' },
        stream: { en: 'Allied Sciences & Social Sciences', kn: 'ಸಂಬಂಧಿತ ವಿಜ್ಞಾನ ಮತ್ತು ಸಮಾಜ ವಿಜ್ಞಾನ' },
        hod: '⚠ [Individual HODs not listed separately on staff page]',
        hodNotice: '⚠ Dr. Saritha V (Applied Bioscience) is confirmed via IQAC & YRC records. Separate faculty rosters for Biotechnology, Biochemistry, Microbiology, and Psychology were not listed on the extracted staff page—confirm with the college office.',
        iconName: 'Microscope',
        about: {
          en: 'Interdisciplinary streams offered in B.Sc. CBCS (MCZ, BBZ), B.Sc. NEP (Biochemistry, Biotechnology, Microbiology combinations), and B.A. CBCS (EJP — English, Journalism, Psychology).',
          kn: 'B.Sc. CBCS (MCZ, BBZ), NEP (ಜೀವರಸಾಯನ, ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ, ಸೂಕ್ಷ್ಮಜೀವಶಾಸ್ತ್ರ) ಮತ್ತು B.A. EJP (ಮನೋವಿಜ್ಞಾನ) ವಿಭಾಗಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.',
        },
        faculty: [
          { name: 'Dr. Saritha V', designation: 'Faculty · Applied Bioscience (IQAC & YRC Member)', qualification: 'Ph.D. (title Dr. confirmed)', experience: '⚠ Confirm yrs with office' },
          { name: '⚠ [Pending office confirmation]', designation: 'Biotechnology / Biochemistry / Microbiology / Psychology Faculty', qualification: 'Confirm full roster with office', experience: '—', isPlaceholder: true },
        ],
        labs: {
          en: 'Science laboratories supporting Microbiology, Biochemistry, and Biotechnology combinations.',
          kn: 'ಸೂಕ್ಷ್ಮಜೀವಶಾಸ್ತ್ರ, ಜೀವರಸಾಯನಶಾಸ್ತ್ರ ಮತ್ತು ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯಗಳು.',
        },
        achievements: {
          en: 'Dr. Saritha V serves on both IQAC and the Youth Red Cross (YRC) Executive Committee.',
          kn: 'ಡಾ. ಸರಿತಾ ವಿ. ಅವರು IQAC ಮತ್ತು ಯೂತ್ ರೆಡ್ ಕ್ರಾಸ್ ಕಾರ್ಯಕಾರಿ ಸಮಿತಿಯ ಸದಸ್ಯರಾಗಿದ್ದಾರೆ.',
        },
        events: {
          en: '⚠ Confirm departmental event calendar with college office.',
          kn: '⚠ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'physical-education',
        slug: 'physical-education',
        name: { en: 'Department of Physical Education', kn: 'ದೈಹಿಕ ಶಿಕ್ಷಣ ವಿಭಾಗ' },
        stream: { en: 'Sports & Athletics', kn: 'ಕ್ರೀಡೆ' },
        hod: '⚠ [Empty on old site · Sri Shankaranarayana listed in IQAC]',
        hodNotice: '⚠ The old site shows an empty "Staff Name" placeholder on the Physical Education department page; 2023–24 IQAC records list Sri Shankaranarayana as Physical Director. Confirm current details with the office.',
        iconName: 'Trophy',
        about: {
          en: 'Oversees the Prabhakar Tholar Indoor Games Complex, 200 m track and field, and multi-sport coaching across university, state, national, and international competitions.',
          kn: 'ಪ್ರಭಾಕರ್ ತೋಳಾರ್ ಒಳಾಂಗಣ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣ, 200 ಮೀ. ಟ್ರ್ಯಾಕ್ ಮತ್ತು ಕ್ರೀಡಾ ತರಬೇತಿಯನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.',
        },
        faculty: [
          {
            name: 'Sri Shankaranarayana (per IQAC 2023–24) / ⚠ [Confirm with office]',
            designation: 'Physical Director (empty placeholder on old dept page)',
            qualification: '⚠ Confirm with college office',
            experience: '—',
            isPlaceholder: true,
          },
        ],
        labs: {
          en: 'Prabhakar Tholar Indoor Games Complex (shuttle badminton, table tennis, chess, carrom, 20-station multi gym, weight/power lifting, wrestling ring, sports library) and outdoor 200 m track & courts.',
          kn: 'ಪ್ರಭಾಕರ್ ತೋಳಾರ್ ಒಳಾಂಗಣ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣ (20-ಸ್ಟೇಶನ್ ಜಿಮ್, ಬ್ಯಾಡ್ಮಿಂಟನ್, ಕುಸ್ತಿ) ಮತ್ತು 200 ಮೀ. ಕ್ರೀಡಾಂಗಣ.',
        },
        achievements: {
          en: 'Prizes won at university, state, inter-university, national & international levels in shuttle badminton, wrestling, swimming, netball, karate, best physique, ball badminton, chess, cricket, kabaddi, and table tennis.',
          kn: 'ಬ್ಯಾಡ್ಮಿಂಟನ್, ಕುಸ್ತಿ, ಈಜು, ನೆಟ್‌ಬಾಲ್, ಕರಾಟೆ, ಬೆಸ್ಟ್ ಫಿಸಿಕ್, ಕಬಡ್ಡಿ, ಕ್ರಿಕೆಟ್, ಚೆಸ್ ಮತ್ತು ಟೇಬಲ್ ಟೆನಿಸ್‌ನಲ್ಲಿ ರಾಷ್ಟ್ರೀಯ/ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದ ಪ್ರಶಸ್ತಿಗಳು.',
        },
        events: {
          en: 'Inter-collegiate tournaments, indoor/outdoor competitions, and annual sports meets (confirm current dates with office).',
          kn: 'ಅಂತರ-ಕಾಲೇಜು ಪಂದ್ಯಾವಳಿಗಳು ಮತ್ತು ವಾರ್ಷಿಕ ಕ್ರೀಡಾಕೂಟಗಳು.',
        },
      },
    ] as DepartmentItem[],
  },

  facilities: {
    pageTitle: { en: 'Facilities & Library', kn: 'ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಗ್ರಂಥಾಲಯ' },
    subtitle: {
      en: 'Central Library, Prabhakar Tholar Indoor Games Complex, Ladies Hostel, three Auditoria, Banking, Canteen, and Campus Infrastructure.',
      kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ, ಪ್ರಭಾಕರ್ ತೋಳಾರ್ ಒಳಾಂಗಣ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣ, ಮಹಿಳಾ ವಸತಿ ನಿಲಯ, ಸಭಾಂಗಣಗಳು ಮತ್ತು ಕ್ಯಾಂಪಸ್ ಸೌಲಭ್ಯಗಳು.',
    },
    tabs: [
      { id: 'overview', slug: '/facilities', label: { en: 'Overview', kn: 'ಸಮಗ್ರ ನೋಟ' } },
      { id: 'library', slug: '/facilities/library', label: { en: 'Central Library', kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ' } },
      { id: 'campus', slug: '/facilities/campus', label: { en: 'Campus Facilities', kn: 'ಕ್ಯಾಂಪಸ್ ಸೌಲಭ್ಯಗಳು' } },
    ],
    hoursCard: {
      title: { en: 'Opening Hours', kn: 'ತೆರೆದಿರುವ ಸಮಯ' },
      campusHours: {
        en: 'College Office Hours: ⚠ Not verified on old site — confirm exact office timings with administrative office (08254-230469)',
        kn: 'ಕಾಲೇಜು ಕಚೇರಿ ಸಮಯ: ⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ದೃಢೀಕರಿಸಿಲ್ಲ — ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ',
      },
      libraryHours: {
        en: 'Central Library: Mon–Fri 8:00 am – 5:15 pm · Sat 8:00 am – 1:30 pm · Closed Sundays & Holidays (⚠ Intro text says 8:30 AM — confirm with office)',
        kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ: ಸೋಮ–ಶುಕ್ರ ಬೆ. 8:00 – ಸಂ. 5:15 · ಶನಿ ಬೆ. 8:00 – ಮ. 1:30 · ಭಾನುವಾರ ರಜೆ (⚠ 8:30 AM ಉಲ್ಲೇಖವೂ ಇದೆ)',
      },
    },
    library: {
      heading: { en: 'Central Library & Information Centre', kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ ಮತ್ತು ಮಾಹಿತಿ ಕೇಂದ್ರ' },
      intro: {
        en: 'Spanning 3,500 sq. m. with seating for 300 readers and ~120 daily student visitors, the Central Library celebrates the annual library fest "Grantha Kuti Vaibhavam (GKV)".',
        kn: '3,500 ಚ.ಮೀ. ವಿಸ್ತೀರ್ಣ, 300 ಆಸನ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ದಿನನಿತ್ಯ ಸುಮಾರು 120 ವಿದ್ಯಾರ್ಥಿಗಳ ಭೇಟಿಯೊಂದಿಗೆ "ಗ್ರಂಥ ಕುಟಿ ವೈಭವಂ (GKV)" ಉತ್ಸವವನ್ನು ಆಚರಿಸುತ್ತದೆ.',
      },
      discrepancyNote: {
        en: '⚠ Figures from basck.in table & text: Collection table lists 97,286 books while intro text states "more than 95,500". Timings table states 8:00 am while intro states 8:30 AM. Confirm exact current figures with the Librarian.',
        kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದ ಪಟ್ಟಿಯಲ್ಲಿ 97,286 ಪುಸ್ತಕಗಳು ಮತ್ತು ಪಠ್ಯದಲ್ಲಿ 95,500+ ಎಂದು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ; ಸಮಯ 8:00 / 8:30 AM ಕುರಿತು ಗ್ರಂಥಪಾಲಕರಿಂದ ದೃಢೀಕರಿಸಿ.',
      },
      librarian: {
        name: 'Mr. Manohar Nagappayya',
        qualification: 'M.L.I.Sc',
        emails: ['librarian@basck.in', 'manohar@basck.in'],
        fest: 'Grantha Kuti Vaibhavam (GKV)',
      },
      collectionStats: [
        { label: { en: 'Total Books (⚠ intro says 95,500+)', kn: 'ಒಟ್ಟು ಪುಸ್ತಕಗಳು (⚠ 95,500+ ಉಲ್ಲೇಖ)' }, value: '97,286' },
        { label: { en: 'Library Area', kn: 'ಗ್ರಂಥಾಲಯ ವಿಸ್ತೀರ್ಣ' }, value: '3,500 sq. m.' },
        { label: { en: 'Seating Capacity', kn: 'ಆಸನ ಸಾಮರ್ಥ್ಯ' }, value: '300 Seats' },
        { label: { en: 'Daily Student Visitors', kn: 'ದೈನಂದಿನ ಭೇಟಿಗಾರರು' }, value: '~120 / day' },
        { label: { en: 'Digitized Books', kn: 'ಡಿಜಿಟಲ್ ಪುಸ್ತಕಗಳು' }, value: '180' },
        { label: { en: 'Print Periodicals', kn: 'ಮುದ್ರಿತ ನಿಯತಕಾಲಿಕೆಗಳು' }, value: '135' },
        { label: { en: 'Bound Journal Volumes', kn: 'ಬೌಂಡ್ ಜರ್ನಲ್ ಸಂಪುಟಗಳು' }, value: '265' },
        { label: { en: 'Project Reports & CDs', kn: 'ಪ್ರಾಜೆಕ್ಟ್ ವರದಿ ಮತ್ತು CD/DVD' }, value: '605 / 303' },
      ],
      physicalFacilities: {
        en: [
          'Individual study carrels & leisure reading area',
          '13 daily/weekly newspapers & all semester exam question papers archive',
          'Scanner, printer, photocopier, internet access, UPS backup, elevator, CCTV & RDS system',
        ],
        kn: [
          'ವೈಯಕ್ತಿಕ ಅಧ್ಯಯನ ಕೋಷ್ಟಕಗಳು ಮತ್ತು ವಿಶ್ರಾಂತಿ ವಾಚನಾಲಯ',
          '13 ದಿನಪತ್ರಿಕೆಗಳು ಮತ್ತು ಎಲ್ಲಾ ಸೆಮಿಸ್ಟರ್ ಪರೀಕ್ಷಾ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳ ಸಂಗ್ರಹ',
          'ಸ್ಕ್ಯಾನರ್, ಪ್ರಿಂಟರ್, ಫೋಟೋಕಾಪಿಯರ್, ಇಂಟರ್ನೆಟ್, UPS, ಲಿಫ್ಟ್, CCTV ಮತ್ತು RDS ವ್ಯವಸ್ಥೆ',
        ],
      },
      eResources: [
        { name: 'UGC N-LIST & OPAC', desc: { en: 'Barcode circulation, Online Public Access Catalogue (OPAC), and UGC N-LIST scholarly e-resources.', kn: 'ಬಾರ್‌ಕೋಡ್ ಸೇವೆ, OPAC ಮತ್ತು UGC N-LIST ಇ-ಸಂಪನ್ಮೂಲಗಳು.' } },
        { name: 'Book Bank & Overnight Borrowing', desc: { en: 'Book Bank facility for students, overnight issue, inter-library loan, and career information desk.', kn: 'ಬುಕ್ ಬ್ಯಾಂಕ್, ರಾತ್ರಿ ಎರವಲು, ಅಂತರ-ಗ್ರಂಥಾಲಯ ಸೇವೆ ಮತ್ತು ವೃತ್ತಿ ಮಾಹಿತಿ.' } },
        { name: 'Digitized & Multimedia Holdings', desc: { en: '180 digitized books, 303 CD/DVD-ROMs, 605 UGC/management-funded/student project reports & reprographic service.', kn: '180 ಡಿಜಿಟಲ್ ಪುಸ್ತಕಗಳು, 303 CD/DVDಗಳು, 605 ಪ್ರಾಜೆಕ್ಟ್ ವರದಿಗಳು.' } },
      ],
      rules: {
        en: [
          'Services include barcode circulation, OPAC search, book bank, overnight borrowing, inter-library loan, reprographic service, reference service, career information, and internet access.',
          'Open Mon–Fri 8:00 am – 5:15 pm & Sat 8:00 am – 1:30 pm; closed on Sundays and public holidays (⚠ verify 8:00 vs 8:30 AM opening with Librarian).',
          '⚠ Detailed borrowing limits and fine schedule were not extracted from basck.in — confirm with Librarian (librarian@basck.in).',
        ],
        kn: [
          'ಬಾರ್‌ಕೋಡ್ ಸೇವೆ, OPAC, ಬುಕ್ ಬ್ಯಾಂಕ್, ಅಂತರ-ಗ್ರಂಥಾಲಯ ಸೇವೆ, ಜೆರಾಕ್ಸ್ ಮತ್ತು ಇಂಟರ್ನೆಟ್ ಲಭ್ಯವಿದೆ.',
          'ಸೋಮ–ಶುಕ್ರ 8:00–5:15, ಶನಿ 8:00–1:30 ತೆರೆದಿರುತ್ತದೆ; ಭಾನುವಾರ ರಜೆ.',
          '⚠ ಪುಸ್ತಕ ಎರವಲು ಮಿತಿ ವಿವರಗಳಿಗಾಗಿ ಗ್ರಂಥಪಾಲಕರನ್ನು (librarian@basck.in) ಸಂಪರ್ಕಿಸಿ.',
        ],
      },
    },
    campusItems: [
      {
        title: { en: 'Prabhakar Tholar Indoor Games Complex', kn: 'ಪ್ರಭಾಕರ್ ತೋಳಾರ್ ಒಳಾಂಗಣ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣ' },
        desc: {
          en: 'Shuttle badminton court, table tennis rooms, carrom and chess, sports library, dressing rooms, weight-lifting & power-lifting area, 20-station multi gym, and wrestling ring.',
          kn: 'ಬ್ಯಾಡ್ಮಿಂಟನ್ ಕೋರ್ಟ್, ಟೇಬಲ್ ಟೆನಿಸ್, ಚೆಸ್, ಕೇರಂ, ಕ್ರೀಡಾ ಗ್ರಂಥಾಲಯ, ವೇಟ್ ಲಿಫ್ಟಿಂಗ್, 20-ಸ್ಟೇಶನ್ ಮಲ್ಟಿ ಜಿಮ್ ಮತ್ತು ಕುಸ್ತಿ ಅಖಾಡ.',
        },
        image: 'https://www.basck.in/images/facilities/indoor.jpg',
      },
      {
        title: { en: 'Ladies Hostel (36 Rooms · Capacity 54)', kn: 'ಮಹಿಳಾ ವಸತಿ ನಿಲಯ (36 ಕೊಠಡಿಗಳು)' },
        desc: {
          en: "36 rooms accommodating 54 students, complete with recreation hall, visitors' lounge, study room, dining hall, laundry room, cable TV, and indoor games.",
          kn: '54 ವಿದ್ಯಾರ್ಥಿನಿಯರಿಗೆ 36 ಕೊಠಡಿಗಳು, ಅಧ್ಯಯನ ಕೊಠಡಿ, ಭೋಜನ ಶಾಲೆ, ವಿಶ್ರಾಂತಿ ಕೋಣೆ, ಲಾಂಡ್ರಿ ಮತ್ತು ಒಳಾಂಗಣ ಕ್ರೀಡಾ ಸೌಲಭ್ಯ.',
        },
        image: 'https://www.basck.in/images/facilities/fr14.jpg',
      },
      {
        title: { en: 'Auditoria: R.N. Shetty Hall, Koya Kutti Hall & Madhava Mantapa', kn: 'ಸಭಾಂಗಣಗಳು: R.N. ಶೆಟ್ಟಿ ಹಾಲ್, ಕೋಯ ಕುಟ್ಟಿ ಹಾಲ್ ಮತ್ತು ಮಾಧವ ಮಂಟಪ' },
        desc: {
          en: 'R.N. Shetty Hall (1,500 seats), Koya Kutti Hall (300 seats), and Madhava Mantapa open-air theatre for college assemblies, cultural fests, and academic seminars.',
          kn: 'R.N. ಶೆಟ್ಟಿ ಹಾಲ್ (1,500 ಆಸನಗಳು), ಕೋಯ ಕುಟ್ಟಿ ಹಾಲ್ (300 ಆಸನಗಳು) ಮತ್ತು ಮಾಧವ ಮಂಟಪ ಬಯಲು ರಂಗಮಂದಿರ.',
        },
        image: 'https://www.basck.in/images/facilities/RNshettty.jpg',
      },
      {
        title: { en: 'Madhava Mantapa & Campus Learning Resources', kn: 'ಮಾಧವ ಮಂಟಪ ಮತ್ತು ಕಲಿಕಾ ಸಂಪನ್ಮೂಲಗಳು' },
        desc: {
          en: 'Book bank, botanical garden, subsidised internet, multimedia CDs/DVDs, LCD projectors, documentary archive, history museum, e-learning resource centre, and INFLIBNET.',
          kn: 'ಬುಕ್ ಬ್ಯಾಂಕ್, ಸಸ್ಯೋದ್ಯಾನ, ಸಬ್ಸಿಡಿ ಇಂಟರ್ನೆಟ್, LCD ಪ್ರೊಜೆಕ್ಟರ್, ಇತಿಹಾಸ ವಸ್ತುಸಂಗ್ರಹಾಲಯ, ಇ-ಕಲಿಕಾ ಕೇಂದ್ರ ಮತ್ತು INFLIBNET.',
        },
        image: 'https://www.basck.in/images/facilities/madhavmantap.jpg',
      },
      {
        title: { en: 'Canteen, Free Mid-Day Meal Scheme & Student Service Centre', kn: 'ಕ್ಯಾಂಟೀನ್, ಉಚಿತ ಮಧ್ಯಾಹ್ನದ ಭೋಜನ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಸೇವಾ ಕೇಂದ್ರ' },
        desc: {
          en: 'Campus canteen serving breakfast and lunch during working hours; Free Mid-Day Meal Scheme benefiting more than 300 students; Student Service Centre providing textbooks and stationery at concessional rates; plus 17 staff quarters and Principal quarters.',
          kn: 'ಕ್ಯಾಂಟೀನ್, 300+ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ ಮಧ್ಯಾಹ್ನದ ಭೋಜನ ಯೋಜನೆ, ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ಪಠ್ಯಪುಸ್ತಕ ಕೇಂದ್ರ ಮತ್ತು 17 ಸಿಬ್ಬಂದಿ ವಸತಿ ಗೃಹಗಳು.',
        },
        image: 'https://www.basck.in/images/gallery/1.JPG',
      },
      {
        title: { en: 'On-Campus Banking & Student/Staff Parking', kn: 'ಕ್ಯಾಂಪಸ್ ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ವಾಹನ ನಿಲುಗಡೆ' },
        desc: {
          en: 'Syndicate Bank (Vaderhobli branch) located on campus alongside dedicated parking facilities for students and staff.',
          kn: 'ಕ್ಯಾಂಪಸ್ ಆವರಣದಲ್ಲಿಯೇ ಸಿಂಡಿಕೇಟ್ ಬ್ಯಾಂಕ್ (ವಡೇರಹೋಬಳಿ ಶಾಖೆ) ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ-ಸಿಬ್ಬಂದಿ ವಾಹನ ನಿಲುಗಡೆ ಸೌಲಭ್ಯ.',
        },
        image: 'https://www.basck.in/images/facilities/bank.jpg',
      },
    ],
    infraPdfs: [
      { label: 'Administrative Block', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Auditorium', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Green Campus', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Buildings', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Museum', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'ICT Enabled Classroom & AV Hall', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Safety and Security', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Library', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Computer Science Block', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Arts, Commerce and Management', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Language', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Sports', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Support System', href: 'https://www.basck.in/IQAC/Infra/' },
      { label: 'Girls Hostel', href: 'https://www.basck.in/IQAC/Infra/' },
    ],
  },

  principal: {
    eyebrow: { en: "Principal's Message", kn: 'ಪ್ರಾಂಶುಪಾಲರ ಸಂದೇಶ' },
    name: 'Dr. Shubhakarachary',
    credentials: 'M.A., M.Phil., Ph.D.',
    role: { en: 'Principal', kn: 'ಪ್ರಾಂಶುಪಾಲರು' },
    photo: 'https://www.basck.in/images/staff/principal.jpeg',
    quote: {
      en: "I am happy to welcome students, parents, alumni, and well-wishers to take an active part in the progress of Bhandarkars' Arts and Science College as valued stakeholders. Since our founding in 1963, the institution has grown steadily in both quality and quantity, earning its place as a premier institution accredited by NAAC with an 'A' Grade.",
      kn: "ಭಂಡಾರ್ಕಾರ್ಸ್ ಕಲಾ ಮತ್ತು ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ, ಕುಂದಾಪುರದ ಪ್ರಗತಿಯಲ್ಲಿ ಪಾಲುದಾರರಾಗಿ ಭಾಗವಹಿಸಲು ವಿದ್ಯಾರ್ಥಿಗಳು, ಪೋಷಕರು, ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಹಿತೈಷಿಗಳನ್ನು ಸ್ವಾಗತಿಸಲು ನನಗೆ ಸಂತೋಷವಾಗಿದೆ. 1963 ರಲ್ಲಿ ಸ್ಥಾಪನೆಯಾದಾಗಿನಿಂದ ನಮ್ಮ ಸಂಸ್ಥೆಯು ಗುಣಮಟ್ಟ ಮತ್ತು ಪ್ರಮಾಣದಲ್ಲಿ ನಿರಂತರವಾಗಿ ಬೆಳೆದು NAAC 'A' ಶ್ರೇಣಿಯ ಪ್ರಮುಖ ವಿದ್ಯಾಸಂಸ್ಥೆಯಾಗಿ ರೂಪುಗೊಂಡಿದೆ.",
    },
    subParagraph: {
      en: 'Together with our dedicated faculty and management, we remain focused on nurturing ethical citizenship, academic curiosity, and holistic student development.',
      kn: 'ನಮ್ಮ ಬದ್ಧ ಬೋಧಕ ವರ್ಗ ಮತ್ತು ಆಡಳಿತ ಮಂಡಳಿಯೊಂದಿಗೆ ನೈತಿಕ ನಾಗರಿಕತ್ವ, ಶೈಕ್ಷಣಿಕ ಜಿಜ್ಞಾಸೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ಸರ್ವಾಂಗೀಣ ಅಭಿವೃದ್ಧಿಗೆ ನಾವು ಸದಾ ಶ್ರಮಿಸುತ್ತೇವೆ.',
    },
  },

  campusLife: {
    eyebrow: { en: 'Campus Life & Student Support', kn: 'ಕ್ಯಾಂಪಸ್ ಜೀವನ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ' },
    pageTitle: { en: 'Student Support Units', kn: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಘಟಕಗಳು' },
    heading: {
      en: 'Beyond the Classroom',
      kn: 'ತರಗತಿಯಾಚೆಗಿನ ಸಮಗ್ರ ವಿಕಾಸ',
    },
    subtitle: {
      en: 'Co-curricular cells, service units, scholarships & gold medals, and facilities built around student growth.',
      kn: 'ವಿದ್ಯಾರ್ಥಿಗಳ ಸಮಗ್ರ ಬೆಳವಣಿಗೆಗಾಗಿ ಸೇವಾ ಘಟಕಗಳು, ವಿದ್ಯಾರ್ಥಿವೇತನ, ಚಿನ್ನದ ಪದಕಗಳು ಮತ್ತು ಕ್ಯಾಂಪಸ್ ಸೌಲಭ್ಯಗಳು.',
    },
    items: [
      {
        id: 'placement',
        slug: 'campus-placement',
        title: { en: 'Campus Placement', kn: 'ಕ್ಯಾಂಪಸ್ ಉದ್ಯೋಗ ಕೋಶ' },
        description: {
          en: 'Career Guidance & Placement Cell empowering students from rural coastal Karnataka to connect with employers.',
          kn: 'ಗ್ರಾಮೀಣ ಕರಾವಳಿ ಕರ್ನಾಟಕದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಕ್ಯಾಂಪಸ್ ಉದ್ಯೋಗಾವಕಾಶ ಕಲ್ಪಿಸುವ ಘಟಕ.',
        },
        about: {
          en: 'Most students come from rural coastal Karnataka and agricultural families. The Career Guidance & Placement Cell works to place them in companies suited to their knowledge and skills through counselling, resume workshops, assessment preparation, and employer outreach.',
          kn: 'ಬಹುತೇಕ ವಿದ್ಯಾರ್ಥಿಗಳು ಗ್ರಾಮೀಣ ಕರಾವಳಿ ಮತ್ತು ಕೃಷಿ ಕುಟುಂಬಗಳಿಂದ ಬಂದವರಾಗಿದ್ದು, ಅವರ ಜ್ಞಾನ ಮತ್ತು ಕೌಶಲ್ಯಕ್ಕೆ ತಕ್ಕ ಉದ್ಯೋಗಗಳನ್ನು ಪಡೆಯಲು ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಕ್ಯಾಂಪಸ್ ನೇಮಕಾತಿ ಸೌಲಭ್ಯ ಒದಗಿಸುತ್ತದೆ.',
        },
        coordinator: 'Mr. Rajendra Hoblidhar (Computer Science)',
        contact: 'rajendra.hobalidar@basck.in',
        activities: {
          en: [
            'Career counselling, resume building, job search strategy, and interview preparation',
            'Workshops, seminars, and virtual/physical assessment resources',
            'Bridging employers and students while supporting higher-education planning',
            'Published Campus Selection 2024–25 report (official PDF linked below)',
          ],
          kn: [
            'ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ, ರೆಸ್ಯೂಮ್ ತಯಾರಿ ಮತ್ತು ಸಂದರ್ಶನ ಸಿದ್ಧತೆ',
            'ಕಾರ್ಯಾಗಾರಗಳು, ವಿಚಾರ ಸಂಕಿರಣಗಳು ಮತ್ತು ಮೌಲ್ಯಮಾಪನ ಸಂಪನ್ಮೂಲಗಳು',
            'ಉದ್ಯೋಗದಾತರು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ನಡುವೆ ಸೇತುವೆ ಹಾಗೂ ಉನ್ನತ ಶಿಕ್ಷಣ ಯೋಜನೆ',
            '2024–25 ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆ ವರದಿ PDF ಪ್ರಕಟಣೆ',
          ],
        },
        gallery: ['https://www.basck.in/images/gallery/2.JPG', 'https://www.basck.in/images/gallery/3.JPG'],
        iconName: 'BriefcaseBusiness',
        href: '/student-support/campus-placement',
      },
      {
        id: 'iic',
        slug: 'iic',
        title: { en: 'IIC (Innovation Cell)', kn: 'IIC ನಾವೀನ್ಯತಾ ಮಂಡಳಿ' },
        description: {
          en: "Institution's Innovation Council (MoE Innovation Cell) turning student ideas into prototypes and ventures.",
          kn: 'ವಿದ್ಯಾರ್ಥಿಗಳ ಹೊಸ ಆಲೋಚನೆಗಳನ್ನು ಪ್ರೋಟೋಟೈಪ್ ಮತ್ತು ಸ್ಟಾರ್ಟ್-ಅಪ್‌ಗಳನ್ನಾಗಿ ರೂಪಿಸುವ ನಾವೀನ್ಯತಾ ಮಂಡಳಿ.',
        },
        about: {
          en: "Vision: Encourage and support students to turn new ideas into prototypes. Mission: Foster an entrepreneurial learning environment, innovation and start-up ecosystem, industry-specific skills, and support for student, faculty, and alumni ventures under the MoE Innovation Cell.",
          kn: 'ದೃಷ್ಟಿ: ಹೊಸ ಆಲೋಚನೆಗಳನ್ನು ಮಾದರಿಗಳಾಗಿ ರೂಪಿಸಲು ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು. ಧ್ಯೇಯ: ಉದ್ಯಮಶೀಲ ಕಲಿಕಾ ಪರಿಸರ, ನಾವೀನ್ಯತೆ ಮತ್ತು ಸ್ಟಾರ್ಟ್-ಅಪ್ ಪರಿಸರ ವ್ಯವಸ್ಥೆಯನ್ನು ನಿರ್ಮಿಸುವುದು.',
        },
        coordinator: 'Mr. Ganesh K (Innovation Coordinator)',
        contact: 'ganesh.k@basck.in',
        activities: {
          en: [
            'IPR awareness led by Ms. Archana Aravind; Start-up activities by Mr. Arun A S',
            'Internship coordination (Ms. Suma G R) & ARIIA reporting (Mr. Annappa Poojari)',
            'External industry mentorship by Mr. Venkatesh Nayak, Mr. Sathyanarayana Udupa & Mr. Gurudas Prabhu',
          ],
          kn: [
            'IPR ಜಾಗೃತಿ ಮತ್ತು ಸ್ಟಾರ್ಟ್-ಅಪ್ ಚಟುವಟಿಕೆಗಳು',
            'ಇಂಟರ್ನ್‌ಶಿಪ್ ಮತ್ತು ARIIA ಸಮನ್ವಯ',
            'ಬಾಹ್ಯ ಕೈಗಾರಿಕಾ ಸಲಹೆಗಾರರ ಮಾರ್ಗದರ್ಶನ',
          ],
        },
        gallery: ['https://www.basck.in/images/gallery/3.JPG', 'https://www.basck.in/images/gallery/8.JPG'],
        iconName: 'Lightbulb',
        href: '/student-support/iic',
      },
      {
        id: 'ncc',
        slug: 'ncc',
        title: { en: 'NCC', kn: 'ಎನ್‌ಸಿಸಿ (NCC)' },
        description: {
          en: 'Army & Navy Wing National Cadet Corps instilling discipline, leadership, and service.',
          kn: 'ಆರ್ಮಿ ಮತ್ತು ನೇವಿ ವಿಭಾಗಗಳ ಮೂಲಕ ಶಿಸ್ತು, ನಾಯಕತ್ವ ಮತ್ತು ದೇಶಸೇವೆ ಬೆಳೆಸುವ ಘಟಕ.',
        },
        about: {
          en: 'Both Army Wing and Navy Wing operate actively on campus under trained Associate NCC Officers (ANOs), cultivating physical fitness, parade discipline, leadership, and civic service.',
          kn: 'ಕಾಲೇಜಿನಲ್ಲಿ ಭೂಸೇನೆ (Army Wing) ಮತ್ತು ನೌಕಾಪಡೆ (Navy Wing) ಎನ್‌ಸಿಸಿ ಘಟಕಗಳು ಸಕ್ರಿಯವಾಗಿವೆ.',
        },
        coordinator: 'Lt. Anjan Kumar A L (Army Wing) · Sub. Lt. Sharan S J (Navy Wing)',
        contact: 'anjankumar.al@basck.in / sharan.sj@basck.in',
        activities: {
          en: [
            'Army Wing training led by Lt. Anjan Kumar A L (ANO)',
            'Navy Wing training led by Sub. Lt. Sharan S J (ANO)',
            'Parades, leadership drills, and NCC camp participation (photos archived in /IQAC/NCC/)',
          ],
          kn: [
            'ಲೆ. ಅಂಜನ್ ಕುಮಾರ್ ಎ.ಎಲ್. ನೇತೃತ್ವದಲ್ಲಿ ಆರ್ಮಿ ವಿಂಗ್ ತರಬೇತಿ',
            'ಸಬ್ ಲೆ. ಶರಣ್ ಎಸ್.ಜೆ. ನೇತೃತ್ವದಲ್ಲಿ ನೇವಿ ವಿಂಗ್ ತರಬೇತಿ',
            'ಪಥಸಂಚಲನ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಶಿಬಿರಗಳಲ್ಲಿ ಭಾಗವಹಿಸುವಿಕೆ',
          ],
        },
        gallery: [
          'https://www.basck.in/IQAC/NCC/1.jpg',
          'https://www.basck.in/IQAC/NCC/11.jpg',
          'https://www.basck.in/IQAC/NCC/22.png',
        ],
        iconName: 'Shield',
        href: '/student-support/ncc',
      },
      {
        id: 'nss',
        slug: 'nss',
        title: { en: 'NSS', kn: 'ಎನ್‌ಎಸ್‌ಎಸ್ (NSS)' },
        description: {
          en: 'National Service Scheme (Units I & II) guided by the motto "Not Me But You".',
          kn: '"ನನಗಲ್ಲ ನಿನಗೆ" ಎಂಬ ಧ್ಯೇಯವಾಕ್ಯದೊಂದಿಗೆ ರಾಷ್ಟ್ರೀಯ ಸೇವಾ ಯೋಜನೆ (ಘಟಕ I ಮತ್ತು II).',
        },
        about: {
          en: 'Guided by the motto "Not Me But You", NSS Units I and II help students understand the community and develop social & civic responsibility, leadership, disaster readiness, and national integration.',
          kn: '"ನನಗಲ್ಲ ನಿನಗೆ" ಧ್ಯೇಯವಾಕ್ಯದೊಂದಿಗೆ ಸಮುದಾಯ ಅರಿವು, ನಾಗರಿಕ ಜವಾಬ್ದಾರಿ, ನಾಯಕತ್ವ, ವಿಪತ್ತು ಸಿದ್ಧತೆ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಏಕತೆ ಬೆಳೆಸುತ್ತದೆ.',
        },
        coordinator: 'Mr. Arun A S, M.Com (Unit I) · Mr. Ramachandra Achari, M.C.A (Unit II)',
        contact: 'arun.as@basck.in / ramachandra.achari@basck.in',
        activities: {
          en: [
            'Community understanding and social & civic responsibility programs',
            'Leadership, disaster readiness, and national integration drives',
            'Two active units led by Mr. Arun A S (Unit I) and Mr. Ramachandra Achari (Unit II)',
          ],
          kn: [
            'ಸಮುದಾಯ ಸೇವೆ ಮತ್ತು ನಾಗರಿಕ ಜವಾಬ್ದಾರಿ ಕಾರ್ಯಕ್ರಮಗಳು',
            'ನಾಯಕತ್ವ, ವಿಪತ್ತು ನಿರ್ವಹಣೆ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಭಾವೈಕ್ಯತಾ ಶಿಬಿರಗಳು',
            'ಶ್ರೀ ಅರುಣ್ ಎ ಎಸ್ (ಘಟಕ I) ಮತ್ತು ಶ್ರೀ ರಾಮಚಂದ್ರ ಆಚಾರಿ (ಘಟಕ II) ಮಾರ್ಗದರ್ಶನ',
          ],
        },
        gallery: [
          'https://www.basck.in/IQAC/NSS/Nss.jpg',
          'https://www.basck.in/IQAC/NSS/1.jpeg',
          'https://www.basck.in/IQAC/NSS/2.jpeg',
          'https://www.basck.in/IQAC/NSS/3.jpeg',
          'https://www.basck.in/IQAC/NSS/4.jpeg',
        ],
        iconName: 'HeartHandshake',
        href: '/student-support/nss',
      },
      {
        id: 'rovers',
        slug: 'rovers-and-rangers',
        title: { en: 'Rovers & Rangers', kn: 'ರೋವರ್ಸ್ ಮತ್ತು ರೇಂಜರ್ಸ್' },
        description: {
          en: 'Senior wing of Scouting and Guiding (founded by Lord Baden-Powell in 1918), dedicated to service to society.',
          kn: '1918 ರಲ್ಲಿ ಲಾರ್ಡ್ ಬೇಡನ್-ಪೊವೆಲ್ ಆರಂಭಿಸಿದ ಸ್ಕೌಟಿಂಗ್-ಗೈಡಿಂಗ್‌ನ ಹಿರಿಯ ವಿಭಾಗ; ಸಮಾಜ ಸೇವೆಯ ಧ್ಯೇಯ.',
        },
        about: {
          en: 'As the senior wing of Scouting and Guiding started by Lord Baden-Powell in 1918, Rovers & Rangers is guided by the motto of selfless service to society.',
          kn: '1918 ರಲ್ಲಿ ಲಾರ್ಡ್ ಬೇಡನ್-ಪೊವೆಲ್ ಪ್ರಾರಂಭಿಸಿದ ಸ್ಕೌಟಿಂಗ್ ಮತ್ತು ಗೈಡಿಂಗ್‌ನ ಹಿರಿಯ ವಿಭಾಗವಾಗಿದ್ದು, ಸಮಾಜ ಸೇವೆಯ ಧ್ಯೇಯ ಹೊಂದಿದೆ.',
        },
        coordinator: '⚠ [Unit Leader name not listed on basck.in — confirm with office]',
        coordinatorNotice: '⚠ Unit Leader name and contact details were not listed on the extracted page; confirm with the college office.',
        contact: '08254-230469 · principal@basck.in',
        activities: {
          en: [
            'Service-to-society scouting and guiding programs',
            'Outdoor resilience, teamwork, and civic service camps (archived under /IQAC/Rovers/)',
          ],
          kn: [
            'ಸಮಾಜ ಸೇವಾ ಸ್ಕೌಟಿಂಗ್ ಮತ್ತು ಗೈಡಿಂಗ್ ಚಟುವಟಿಕೆಗಳು',
            'ಶಿಬಿರಗಳು ಮತ್ತು ತಂಡದ ನಾಯಕತ್ವ ತರಬೇತಿ',
          ],
        },
        gallery: ['https://www.basck.in/images/gallery/4.JPG', 'https://www.basck.in/images/gallery/5.JPG'],
        iconName: 'Compass',
        href: '/student-support/rovers-and-rangers',
      },
      {
        id: 'yrc',
        slug: 'youth-red-cross',
        title: { en: 'Youth Red Cross', kn: 'ಯೂತ್ ರೆಡ್ ಕ್ರಾಸ್ (YRC)' },
        description: {
          en: 'Two active units (147 + 116 students) leading first aid training, blood donation, and disaster preparedness.',
          kn: 'ಘಟಕ I (147 ವಿದ್ಯಾರ್ಥಿಗಳು) ಮತ್ತು ಘಟಕ II (116 ವಿದ್ಯಾರ್ಥಿಗಳು) ಮೂಲಕ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಮತ್ತು ರಕ್ತದಾನ ಸೇವೆ.',
        },
        about: {
          en: 'Operating across two units—Unit I (147 students) and Unit II (116 students)—Youth Red Cross conducts volunteer orientation, first aid training, disaster preparedness, blood donation motivation, health & hygiene awareness, leadership training, and skills development.',
          kn: 'ಘಟಕ I ರಲ್ಲಿ 147 ಮತ್ತು ಘಟಕ II ರಲ್ಲಿ 116 ವಿದ್ಯಾರ್ಥಿಗಳೊಂದಿಗೆ ಸ್ವಯಂಸೇವಕ ತರಬೇತಿ, ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ, ವಿಪತ್ತು ಸಿದ್ಧತೆ, ರಕ್ತದಾನ ಪ್ರೇರಣೆ ಮತ್ತು ಆರೋಗ್ಯ ಜಾಗೃತಿ ನಡೆಸುತ್ತದೆ.',
        },
        coordinator: 'Prof. Sathyanarayana (Programme Coordinator) · Ms. Vidyarani (Sub-coordinator)',
        contact: 'sathyanarayana@basck.in',
        activities: {
          en: [
            'Unit I: 147 students · Unit II: 116 students',
            'Volunteer orientation, first aid training, and disaster preparedness',
            'Blood donation motivation, health & hygiene awareness, leadership & skills development',
          ],
          kn: [
            'ಘಟಕ I: 147 ವಿದ್ಯಾರ್ಥಿಗಳು · ಘಟಕ II: 116 ವಿದ್ಯಾರ್ಥಿಗಳು',
            'ಸ್ವಯಂಸೇವಕ ತರಬೇತಿ, ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಮತ್ತು ವಿಪತ್ತು ನಿರ್ವಹಣೆ',
            'ರಕ್ತದಾನ ಪ್ರೇರಣೆ ಮತ್ತು ಆರೋಗ್ಯ-ನೈರ್ಮಲ್ಯ ಜಾಗೃತಿ',
          ],
        },
        gallery: ['https://www.basck.in/images/gallery/2.JPG', 'https://www.basck.in/images/gallery/4.JPG'],
        iconName: 'HeartPulse',
        href: '/student-support/youth-red-cross',
      },
      {
        id: 'scholarships',
        slug: 'scholarships-and-endowments',
        title: { en: 'Scholarships & Gold Medals', kn: 'ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಚಿನ್ನದ ಪದಕಗಳು' },
        description: {
          en: '10 government, trust & merit scholarships plus 5 endowed gold medals for academic excellence.',
          kn: '10 ವಿದ್ಯಾರ್ಥಿವೇತನ ಯೋಜನೆಗಳು ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಸಾಧನೆಗೆ 5 ದತ್ತಿ ಚಿನ್ನದ ಪದಕಗಳು.',
        },
        about: {
          en: 'Students are supported through 10 national, state, trust, and charitable scholarships alongside 5 prestigious endowed Gold Medals recognizing top academic achievement across streams.',
          kn: 'ಅರ್ಹ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ 10 ಸರ್ಕಾರಿ, ಟ್ರಸ್ಟ್ ಮತ್ತು ದತ್ತಿ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು ಹಾಗೂ 5 ಪ್ರತಿಷ್ಠಿತ ಚಿನ್ನದ ಪದಕಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ.',
        },
        coordinator: '⚠ [Scholarship Nodal Officer name not listed on basck.in — contact office]',
        coordinatorNotice: '⚠ Contact the Administrative Office (08254-230469) for scholarship application windows and documentation.',
        contact: '08254-230469 · principal@basck.in',
        activities: {
          en: [
            '5 Gold Medals: Dr. T.M.A. Pai, Dr. H. Shantaram, Prof. T. Krishna Rao, Mrs. Poornima Devadas Kamath, and Kumbashi Radhabai Venkatramana Prabhu Memorial',
            '10 Scholarships covering SC/ST Post-Matric, OBC, Sir C.V. Raman (B.Sc.), Sanchi Honnamma, Physically Handicapped, E.B.L., Beedi Workers’ children, AGE, BASC Trust & Heggunje Rajeeva Shetty Society',
          ],
          kn: [
            '5 ಚಿನ್ನದ ಪದಕಗಳು: ಡಾ. ಟಿ.ಎಂ.ಎ. ಪೈ, ಡಾ. ಎಚ್. ಶಾಂತರಾಮ್, ಪ್ರೊ. ಟಿ. ಕೃಷ್ಣ ರಾವ್, ಶ್ರೀಮತಿ ಪೂರ್ಣಿಮಾ ಕಾಮತ್ ಮತ್ತು ಕುಂಭಾಶಿ ರಾಧಾಬಾಯಿ ಪ್ರಭು ಸ್ಮಾರಕ',
            '10 ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು: ಸಿ.ವಿ. ರಾಮನ್, ಸಂಚಿ ಹೊನ್ನಮ್ಮ, SC/ST, OBC, ದತ್ತಿ ಮತ್ತು ಟ್ರಸ್ಟ್ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು',
          ],
        },
        gallery: ['https://www.basck.in/images/gallery/8.JPG', 'https://www.basck.in/images/gallery/6.JPG'],
        iconName: 'Award',
        href: '/student-support/scholarships-and-endowments',
      },
      {
        id: 'fine-arts',
        slug: 'fine-arts',
        title: { en: 'Fine Arts', kn: 'ಲಲಿತ ಕಲೆಗಳು' },
        description: {
          en: 'Cultural clubs nurturing classical music, Yakshagana, theatre, literature, and visual arts.',
          kn: 'ಸಂಗೀತ, ಯಕ್ಷಗಾನ, ನಾಟಕ, ಸಾಹಿತ್ಯ ಮತ್ತು ಕಲೆಗಳಿಗೆ ವೇದಿಕೆ.',
        },
        about: {
          en: 'The Fine Arts Association provides a vibrant platform for coastal folk traditions, classical dance, music, theatre, and inter-collegiate cultural competitions. ⚠ Detailed Fine Arts committee page was not extracted from basck.in — confirm convener & schedule with the college office.',
          kn: 'ಯಕ್ಷಗಾನ, ಸಂಗೀತ, ನೃತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಸ್ಪರ್ಧೆಗಳಿಗೆ ವೇದಿಕೆ. ⚠ ಸಂಚಾಲಕರ ವಿವರವನ್ನು ಕಾಲೇಜು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
        coordinator: '⚠ [Fine Arts Convener not extracted from old site — ask college office]',
        coordinatorNotice: '⚠ The Fine Arts page was not extracted from basck.in; confirm convener name and annual cultural calendar with the office.',
        contact: '08254-230469 · principal@basck.in',
        activities: {
          en: [
            '⚠ Confirm Annual Talents Day, Yakshagana, and inter-collegiate cultural festival schedule with the college office',
          ],
          kn: [
            '⚠ ವಾರ್ಷಿಕ ಪ್ರತಿಭಾ ದಿನ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರವನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ',
          ],
        },
        gallery: ['https://www.basck.in/images/gallery/7.JPG', 'https://www.basck.in/images/gallery/2.JPG'],
        iconName: 'Palette',
        href: '/student-support/fine-arts',
      },
      {
        id: 'sports',
        slug: 'sports',
        title: { en: 'Sports', kn: 'ಕ್ರೀಡೆ' },
        description: {
          en: 'Prabhakar Tholar Indoor Games Complex, 200 m track & multi-sport grounds producing international & national medallists.',
          kn: 'ಪ್ರಭಾಕರ್ ತೋಳಾರ್ ಒಳಾಂಗಣ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣ, 200 ಮೀ. ಟ್ರ್ಯಾಕ್ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ-ಅಂತರರಾಷ್ಟ್ರೀಯ ಕ್ರೀಡಾ ಸಾಧನೆಗಳು.',
        },
        about: {
          en: 'Students train across indoor and outdoor disciplines and have won prizes at university, state, inter-university, national, and international levels—notably in shuttle badminton, wrestling, swimming, netball, karate, best physique, ball badminton, chess, cricket, kabaddi, and table tennis.',
          kn: 'ಒಳಾಂಗಣ ಮತ್ತು ಹೊರಾಂಗಣ ಕ್ರೀಡೆಗಳಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು ವಿಶ್ವವಿದ್ಯಾಲಯ, ರಾಜ್ಯ, ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದ ಪ್ರಶಸ್ತಿಗಳನ್ನು ಗೆದ್ದಿದ್ದಾರೆ.',
        },
        coordinator: '⚠ [Physical Education Director blank on dept page; IQAC 2023–24 lists Sri Shankaranarayana]',
        coordinatorNotice: '⚠ Confirm Physical Education Director contact details with the college office.',
        contact: '08254-230469 · principal@basck.in',
        activities: {
          en: [
            'Indoor: Shuttle badminton, table tennis, chess, carrom, gymnasium (20-station multi gym, weight lifting, power lifting, wrestling ring, best physique)',
            'Outdoor: 200 m track and field, volleyball, ball badminton, kabaddi, cricket, basketball, football, throwball, netball, kho-kho',
            'Prizes won at university, state, inter-university, national, and international levels',
          ],
          kn: [
            'ಒಳಾಂಗಣ: ಬ್ಯಾಡ್ಮಿಂಟನ್, ಟೇಬಲ್ ಟೆನಿಸ್, ಚೆಸ್, ಕೇರಂ, ಮಲ್ಟಿ ಜಿಮ್, ವೇಟ್ ಲಿಫ್ಟಿಂಗ್ ಮತ್ತು ಕುಸ್ತಿ',
            'ಹೊರಾಂಗಣ: 200 ಮೀ. ಟ್ರ್ಯಾಕ್, ವಾಲಿಬಾಲ್, ಕಬಡ್ಡಿ, ಕ್ರಿಕೆಟ್, ಬಾಸ್ಕೆಟ್‌ಬಾಲ್, ಫುಟ್‌ಬಾಲ್, ಥ್ರೋಬಾಲ್, ನೆಟ್‌ಬಾಲ್ ಮತ್ತು ಖೋ-ಖೋ',
            'ರಾಜ್ಯ, ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದ ಪ್ರಶಸ್ತಿಗಳು',
          ],
        },
        gallery: ['https://www.basck.in/images/facilities/indoor.jpg', 'https://www.basck.in/images/gallery/5.JPG'],
        iconName: 'Trophy',
        href: '/student-support/sports',
      },
      {
        id: 'library',
        slug: 'library',
        title: { en: 'Library', kn: 'ಗ್ರಂಥಾಲಯ' },
        description: {
          en: '97,286 books (⚠ 95,500+ in intro), 3,500 sq. m. floor space, 300 seats, and UGC N-LIST digital resources.',
          kn: '97,286 ಪುಸ್ತಕಗಳು, 3,500 ಚ.ಮೀ. ವಿಸ್ತೀರ್ಣ, 300 ಆಸನಗಳು ಮತ್ತು UGC N-LIST ಇ-ಸಂಪನ್ಮೂಲಗಳು.',
        },
        about: {
          en: 'Explore our Central Library collection, services, opening hours, and Grantha Kuti Vaibhavam (GKV) library fest.',
          kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯದ ಪುಸ್ತಕ ಸಂಗ್ರಹ, ಸೇವೆಗಳು ಮತ್ತು ತೆರೆದಿರುವ ಸಮಯವನ್ನು ನೋಡಿ.',
        },
        coordinator: 'Mr. Manohar Nagappayya (M.L.I.Sc)',
        contact: 'librarian@basck.in / manohar@basck.in',
        activities: { en: ['Grantha Kuti Vaibhavam (GKV) Library Fest', 'OPAC, Book Bank & UGC N-LIST Services'], kn: ['ಗ್ರಂಥ ಕುಟಿ ವೈಭವಂ (GKV)', 'OPAC, ಬುಕ್ ಬ್ಯಾಂಕ್ ಮತ್ತು N-LIST ಸೇವೆ'] },
        gallery: ['https://www.basck.in/images/gallery/6.JPG'],
        iconName: 'Library',
        href: '/facilities/library',
      },
      {
        id: 'facilities',
        slug: 'facilities',
        title: { en: 'Facilities', kn: 'ಕ್ಯಾಂಪಸ್ ಸೌಲಭ್ಯಗಳು' },
        description: {
          en: 'Prabhakar Tholar Indoor Complex, Ladies Hostel, three Auditoria, Canteen, Free Mid-Day Meals & Banking.',
          kn: 'ಒಳಾಂಗಣ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣ, ಮಹಿಳಾ ವಸತಿ ನಿಲಯ, ಸಭಾಂಗಣಗಳು, ಉಚಿತ ಮಧ್ಯಾಹ್ನದ ಭೋಜನ ಮತ್ತು ಬ್ಯಾಂಕ್.',
        },
        about: {
          en: 'View campus laboratories, auditoriums, indoor sports complex, ladies hostel, and student amenities.',
          kn: 'ಕ್ಯಾಂಪಸ್ ಪ್ರಯೋಗಾಲಯಗಳು, ಸಭಾಂಗಣಗಳು, ವಸತಿ ನಿಲಯ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಸೌಲಭ್ಯಗಳನ್ನು ನೋಡಿ.',
        },
        coordinator: 'College Administrative Office',
        contact: '08254-230469',
        activities: { en: ['Campus Infrastructure & Student Amenities'], kn: ['ಕ್ಯಾಂಪಸ್ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಸೌಲಭ್ಯಗಳು'] },
        gallery: ['https://www.basck.in/images/facilities/RNshettty.jpg'],
        iconName: 'Building2',
        href: '/facilities/campus',
      },
    ] as CampusSupportItem[],

    placementExtras: {
      notice: {
        en: '⚠ Aggregate placement counts and individual recruiter rosters are not listed as separate text tables on basck.in (sample placeholder student entries from the old site have been intentionally excluded). Official 2024–25 selections are published in the Campus Selection PDF below.',
        kn: '⚠ ನಿಖರ ಉದ್ಯೋಗ ಸಂಖ್ಯೆ ಮತ್ತು ಕಂಪನಿಗಳ ವಿವರಗಳಿಗಾಗಿ ಕೆಳಗಿನ 2024–25 ಅಧಿಕೃತ ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆ PDF ಅನ್ನು ವೀಕ್ಷಿಸಿ.',
      },
      placementPdfUrl: 'https://basck.in/IQAC/campus/Students%20placement%202024-25.pdf',
      placementPdfLabel: {
        en: 'Download Campus Selection 2024–25 (Official PDF)',
        kn: 'ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆ 2024–25 (ಅಧಿಕೃತ PDF ಡೌನ್‌ಲೋಡ್)',
      },
      objectives: [
        { en: 'Career counselling, resume building, job search strategy, and interview preparation', kn: 'ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ, ರೆಸ್ಯೂಮ್ ತಯಾರಿ, ಉದ್ಯೋಗ ಹುಡುಕಾಟ ತಂತ್ರ ಮತ್ತು ಸಂದರ್ಶನ ಸಿದ್ಧತೆ' },
        { en: 'Workshops and seminars to build student confidence and employability', kn: 'ಉದ್ಯೋಗಾರ್ಹತೆ ಹೆಚ್ಚಿಸಲು ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ವಿಚಾರ ಸಂಕಿರಣಗಳು' },
        { en: 'Bridge between recruiting employers and college students', kn: 'ಉದ್ಯೋಗದಾತರು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ನಡುವೆ ಸೇತುವೆ' },
        { en: 'Resources for virtual and physical placement assessments', kn: 'ಆನ್‌ಲೈನ್ ಮತ್ತು ನೇರ ಪರೀಕ್ಷಾ ಸಿದ್ಧತೆಗೆ ಸಂಪನ್ಮೂಲಗಳು' },
        { en: 'Developing industry-ready graduates alongside higher-education planning support', kn: 'ಉದ್ಯಮ-ಸಿದ್ಧ ಪದವೀಧರರ ನಿರ್ಮಾಣ ಮತ್ತು ಉನ್ನತ ಶಿಕ್ಷಣ ಮಾರ್ಗದರ್ಶನ' },
      ],
      committee: [
        { name: 'Mr. Rajendra Hoblidhar', department: 'Computer Science (Coordinator)', email: 'rajendra.hobalidar@basck.in' },
        { name: 'Mr. Prashanth S. Hegde', department: 'Business Administration (Management)', email: 'prashanth.hegde@basck.in' },
        { name: 'Mr. Annappa D', department: 'Commerce', email: 'annappa.poojari@basck.in' },
        { name: 'Mrs. Omshree', department: 'Commerce', email: 'omshree@basck.in' },
        { name: 'Mrs. Akshatha', department: 'Commerce', email: 'akshatha@basck.in' },
        { name: 'Mr. Rithin Kumar Shetty', department: 'Commerce', email: 'rithinkumar.shetty@basck.in' },
        { name: 'Mrs. Swapna', department: 'Statistics', email: 'swapna@basck.in' },
        { name: 'Mr. Durgaprasad Maiya', department: 'Economics', email: 'durgaprasad.mayya@basck.in' },
        { name: 'Mrs. Akshatha', department: 'Political Science' },
        { name: 'Ms. Chethana', department: 'Computer Science' },
        { name: 'Ms. Shreenidhi Hegde', department: 'Computer Science' },
        { name: 'Ms. Vaishanvi', department: 'Mathematics' },
      ] as readonly { name: string; department: string; email?: string }[],
    },

    yrcExtras: {
      units: [
        { label: { en: 'YRC Unit I', kn: 'YRC ಘಟಕ I' }, count: '147 Students' },
        { label: { en: 'YRC Unit II', kn: 'YRC ಘಟಕ II' }, count: '116 Students' },
      ],
      committee: [
        { name: 'Dr. Shubhakarachary', role: 'Chairman (Principal)' },
        { name: 'Prof. Sathyanarayana', role: 'Programme Coordinator (Chemistry)' },
        { name: 'Ms. Vidyarani', role: 'Sub-coordinator' },
        { name: 'Mrs. Sumana', role: 'Member' },
        { name: 'Ms. Deekshitha', role: 'Member' },
        { name: 'Mrs. Shwetha B', role: 'Member' },
        { name: 'Mr. Vidhyadhara', role: 'Member' },
        { name: 'Ms. Akshatha', role: 'Member' },
        { name: 'Dr. Saritha V', role: 'Member (Applied Bioscience)' },
      ],
    },

    iicExtras: {
      vision: {
        en: 'Encourage and support students to turn new ideas into prototypes.',
        kn: 'ಹೊಸ ಆಲೋಚನೆಗಳನ್ನು ಪ್ರೋಟೋಟೈಪ್‌ಗಳಾಗಿ ರೂಪಿಸಲು ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು ಮತ್ತು ಬೆಂಬಲಿಸುವುದು.',
      },
      mission: {
        en: 'Build an entrepreneurial learning environment, an innovation and start-up ecosystem, industry-specific skills, and structured support for student, faculty, and alumni ventures.',
        kn: 'ಉದ್ಯಮಶೀಲ ಕಲಿಕಾ ವಾತಾವರಣ, ನಾವೀನ್ಯತೆ ಮತ್ತು ಸ್ಟಾರ್ಟ್-ಅಪ್ ಪರಿಸರ ವ್ಯವಸ್ಥೆ ಹಾಗೂ ಉದ್ಯಮ-ನಿರ್ದಿಷ್ಟ ಕೌಶಲ್ಯಗಳನ್ನು ನಿರ್ಮಿಸುವುದು.',
      },
      team: [
        { name: 'Dr. Shubhakarachary', role: 'Honorary President (Principal)' },
        { name: 'Mr. Ganesh K', role: 'Innovation Coordinator (Computer Science)' },
        { name: 'Ms. Sumalatha Naik', role: 'Social Media Coordinator (Journalism)' },
        { name: 'Ms. Archana Aravind', role: 'IPR Coordinator (Business Administration)' },
        { name: 'Ms. Suma GR', role: 'Internship Coordinator (Commerce)' },
        { name: 'Mr. Arun AS', role: 'Start-up Coordinator (Commerce)' },
        { name: 'Mr. Annappa Poojari', role: 'ARIIA Coordinator (Commerce)' },
        { name: 'Mr. Venkatesh Nayak', role: 'External Member' },
        { name: 'Mr. Sathyanarayana Udupa', role: 'External Member' },
        { name: 'Mr. Gurudas Prabhu', role: 'External Member' },
      ],
    },

    scholarshipsAndMedals: {
      goldMedals: [
        {
          id: 'gm1',
          name: 'Dr. T.M.A. Pai Gold Medal',
          criteria: { en: "Best out-going student (instituted by Bhandarkars' College Trust)", kn: "ಅತ್ಯುತ್ತಮ ಅಂತಿಮ ವರ್ಷದ ವಿದ್ಯಾರ್ಥಿ (ಭಂಡಾರ್ಕರ್ಸ್ ಕಾಲೇಜು ಟ್ರಸ್ಟ್)" },
        },
        {
          id: 'gm2',
          name: 'Dr. H. Shantaram Gold Medal',
          criteria: { en: 'Endowed by well-wishers of Dr. H. Shantaram', kn: 'ಡಾ. ಎಚ್. ಶಾಂತರಾಮ್ ಅವರ ಹಿತೈಷಿಗಳಿಂದ ಸ್ಥಾಪಿತ ದತ್ತಿ ಪದಕ' },
        },
        {
          id: 'gm3',
          name: 'Prof. T. Krishna Rao Gold Medal',
          criteria: { en: 'Highest marks in III B.Com Advanced Accountancy (University exam)', kn: 'III B.Com ಅಡ್ವಾನ್ಸ್ಡ್ ಅಕೌಂಟೆನ್ಸಿ ವಿಶ್ವವಿದ್ಯಾಲಯ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಅಂಕ' },
        },
        {
          id: 'gm4',
          name: 'Mrs. Poornima Devadas Kamath Gold Medal',
          criteria: { en: 'Best out-going BCA student', kn: 'ಅತ್ಯುತ್ತಮ ಅಂತಿಮ ವರ್ಷದ BCA ವಿದ್ಯಾರ್ಥಿ' },
        },
        {
          id: 'gm5',
          name: 'Kumbashi Radhabai Venkatramana Prabhu Memorial Gold Medal',
          criteria: { en: 'Girl M.Com student with highest marks in Semesters I, II, and III', kn: 'ಸೆಮಿಸ್ಟರ್ I, II ಮತ್ತು III ರಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಅಂಕ ಪಡೆದ M.Com ವಿದ್ಯಾರ್ಥಿನಿ' },
        },
      ],
      scholarships: [
        { id: 'sc1', name: 'Sir C.V. Raman Scholarship', detail: { en: 'First-year B.Sc. students; 60% marks for SC/ST, 65% for others', kn: 'ಪ್ರಥಮ ವರ್ಷದ B.Sc. ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ; SC/ST ಗೆ 60%, ಇತರರಿಗೆ 65%' } },
        { id: 'sc2', name: 'Scholarship for Physically Handicapped Students', detail: { en: 'Financial assistance for differently-abled students', kn: 'ದಿವ್ಯಾಂಗ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆರ್ಥಿಕ ನೆರವು' } },
        { id: 'sc3', name: 'Sanchi Honnamma Scholarship', detail: { en: 'Women students with at least 45% in II PUC', kn: 'II PUC ಯಲ್ಲಿ ಕನಿಷ್ಠ 45% ಅಂಕ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿನಿಯರಿಗೆ' } },
        { id: 'sc4', name: 'Other Backward Class (OBC) Scholarship', detail: { en: "Parents' annual income up to Rs. 11,000", kn: 'ಪೋಷಕರ ವಾರ್ಷಿಕ ಆದಾಯ ರೂ. 11,000 ವರೆಗೆ (OBC)' } },
        { id: 'sc5', name: 'E.B.L. Scholarship', detail: { en: 'For Group-I students living within 5 km', kn: '5 ಕಿ.ಮೀ ಒಳಗೆ ವಾಸಿಸುವ Group-I ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ' } },
        { id: 'sc6', name: 'Smt. Seetha Bai Sridhar Godbole Memorial Scholarship', detail: { en: "Academy of General Education (AGE) scholarship on the Principal's recommendation", kn: 'ಪ್ರಾಂಶುಪಾಲರ ಶಿಫಾರಸಿನ ಮೇರೆಗೆ AGE ವಿದ್ಯಾರ್ಥಿವೇತನ' } },
        { id: 'sc7', name: 'Scholarship for Children of Beedi Workers', detail: { en: 'Welfare scholarship supporting families of beedi workers', kn: 'ಬೀಡಿ ಕಾರ್ಮಿಕರ ಮಕ್ಕಳಿಗಾಗಿ ವಿದ್ಯಾರ್ಥಿವೇತನ' } },
        { id: 'sc8', name: "Bhandarkars' College Trust Scholarship", detail: { en: 'Merit-based institutional scholarship', kn: 'ಪ್ರತಿಭಾ ಆಧಾರಿತ ಕಾಲೇಜು ಟ್ರಸ್ಟ್ ವಿದ್ಯಾರ್ಥಿವೇತನ' } },
        { id: 'sc9', name: 'Heggunje Rajeeva Shetty Charitable Society Scholarship', detail: { en: 'Merit-cum-means scholarship', kn: 'ಪ್ರತಿಭೆ ಮತ್ತು ಆರ್ಥಿಕ ಆಧಾರಿತ ವಿದ್ಯಾರ್ಥಿವೇತನ' } },
        { id: 'sc10', name: 'Post-Matric Scholarship for SC/ST Students', detail: { en: 'Government post-matric scholarship scheme for SC/ST students', kn: 'SC/ST ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮೆಟ್ರಿಕ್ ನಂತರದ ಸರ್ಕಾರಿ ವಿದ್ಯಾರ್ಥಿವೇತನ' } },
      ],
    },
  },

  associations: {
    pageTitle: { en: 'Associations & Committees', kn: 'ಸಂಘಗಳು ಮತ್ತು ಸಮಿತಿಗಳು' },
    subtitle: {
      en: 'Alumni Association, Staff Association, Parent-Teacher Association (PTA), and statutory campus committees.',
      kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಸಂಘ, ಬೋಧಕ ವೃಂದ ಸಂಘ, ಪೋಷಕ-ಶಿಕ್ಷಕ ಸಂಘ (PTA) ಮತ್ತು ಕಾಲೇಜು ಸಮಿತಿಗಳು.',
    },
    tabs: [
      { id: 'staff', slug: '/associations', label: { en: 'Staff Association', kn: 'ಬೋಧಕ ವೃಂದ ಸಂಘ' } },
      { id: 'alumni', slug: '/associations/alumni', label: { en: 'Alumni Association', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಸಂಘ' } },
      { id: 'pta', slug: '/associations/pta', label: { en: 'PTA (Parent-Teacher)', kn: 'ಪೋಷಕ-ಶಿಕ್ಷಕ ಸಂಘ (PTA)' } },
      { id: 'committees', slug: '/associations/committees', label: { en: 'Committees', kn: 'ಸಮಿತಿಗಳು' } },
    ],
    staffAssociation: {
      title: { en: 'College Staff Association', kn: 'ಕಾಲೇಜು ಬೋಧಕ ವೃಂದ ಸಂಘ' },
      desc: {
        en: 'Fostering collegiality, academic exchange, and faculty welfare. ⚠ Detailed Staff Association page was not extracted from basck.in — confirm current Secretary & Treasurer with the college office.',
        kn: 'ಬೋಧಕ ಮತ್ತು ಬೋಧಕೇತರ ಸಿಬ್ಬಂದಿಯ ನಡುವೆ ಸಹಕಾರ ಮತ್ತು ಕಲ್ಯಾಣ ಚಟುವಟಿಕೆಗಳು. ⚠ ಕಾರ್ಯದರ್ಶಿ ಮತ್ತು ಖಜಾಂಚಿ ಹೆಸರುಗಳನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
      },
      officeBearers: [
        { role: { en: 'President', kn: 'ಅಧ್ಯಕ್ಷರು' }, name: 'Dr. Shubhakarachary (Ex-officio Principal)' },
        { role: { en: 'Secretary', kn: 'ಕಾರ್ಯದರ್ಶಿ' }, name: '⚠ [Not extracted from old site — ask college office]' },
        { role: { en: 'Treasurer', kn: 'ಖಜಾಂಚಿ' }, name: '⚠ [Not extracted from old site — ask college office]' },
      ],
    },
    alumni: {
      title: { en: 'Old Students / Alumni Association', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಸಂಘ' },
      desc: {
        en: 'Connecting generations of graduates since June 1963 through alumni meets, endowment scholarships, and student mentorship.',
        kn: 'ಜೂನ್ 1963 ರಿಂದ ಇಲ್ಲಿಯವರೆಗಿನ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಸಮಾವೇಶ, ದತ್ತಿ ನಿಧಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ಬೆಸೆಯುವ ಸಂಘ.',
      },
      officeBearers: [
        { role: { en: 'President · Alumni Association', kn: 'ಅಧ್ಯಕ್ಷರು · ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಸಂಘ' }, name: 'Shri S. Shrihari Chathra' },
        { role: { en: 'Secretary · Alumni Association', kn: 'ಕಾರ್ಯದರ್ಶಿ · ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಸಂಘ' }, name: 'Sri Sandesh Shetty Salvadi' },
      ],
      formTitle: { en: 'Alumni Registration Form', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ನೋಂದಣಿ ಅರ್ಜಿ' },
      fields: {
        name: { en: 'Full Name', kn: 'ಪೂರ್ಣ ಹೆಸರು' },
        batch: { en: 'Graduation Batch / Year', kn: 'ಪದವಿ ಪೂರ್ಣಗೊಳಿಸಿದ ವರ್ಷ' },
        course: { en: 'Degree / Program', kn: 'ಕೋರ್ಸ್' },
        currentJob: { en: 'Current Occupation / Organization', kn: 'ಪ್ರಸ್ತುತ ಉದ್ಯೋಗ / ಸಂಸ್ಥೆ' },
        email: { en: 'Email Address', kn: 'ಇಮೇಲ್ ವಿಳಾಸ' },
        phone: { en: 'Phone / WhatsApp Number', kn: 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ' },
        submit: { en: 'Register as Alumni', kn: 'ನೋಂದಣಿ ಸಲ್ಲಿಸಿ' },
        successTitle: { en: 'Alumni Registration Submitted', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ನೋಂದಣಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ' },
        successBody: {
          en: "Thank you for registering with the Bhandarkars' College Alumni Network. Your details have been recorded.",
          kn: 'ಭಂಡಾರ್ಕರ್ಸ್ ಕಾಲೇಜು ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಸಂಘದಲ್ಲಿ ನೋಂದಾಯಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.',
        },
      },
    },
    pta: {
      title: { en: 'Parent-Teacher Association (PTA)', kn: 'ಪೋಷಕ-ಶಿಕ್ಷಕ ಸಂಘ (PTA)' },
      desc: {
        en: 'Parent-faculty partnership supporting student welfare and governance. Governing Council records list Parents’ Representatives below; ⚠ full PTA page details were not extracted from basck.in.',
        kn: 'ಪೋಷಕರು ಮತ್ತು ಅಧ್ಯಾಪಕರ ಸಹಭಾಗಿತ್ವ. ⚠ ಪೂರ್ಣ PTA ವಿವರಗಳನ್ನು ಕಾಲೇಜು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
      },
      highlights: {
        en: [
          "Parents' Representative President (Governing Council): Sri S. N. Sadananda Kamath",
          "Parents' Representative Secretary (Governing Council): Sri Sanjeeva Thekkatte",
          '⚠ Annual PTA General Body schedule not extracted from basck.in — confirm with college office',
        ],
        kn: [
          'ಪೋಷಕರ ಪ್ರತಿನಿಧಿ ಅಧ್ಯಕ್ಷರು: ಶ್ರೀ ಎಸ್. ಎನ್. ಸದಾನಂದ ಕಾಮತ್',
          'ಪೋಷಕರ ಪ್ರತಿನಿಧಿ ಕಾರ್ಯದರ್ಶಿ: ಶ್ರೀ ಸಂಜೀವ ತೆಕ್ಕಟ್ಟೆ',
          '⚠ ವಾರ್ಷಿಕ PTA ಸಭೆಯ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ',
        ],
      },
    },
    committees: [
      { name: { en: 'IQAC (2023–24)', kn: 'IQAC (2023–24)' }, convener: 'Prof. Sathyanarayana (⚠ verify current coordinator with office)' },
      { name: { en: 'Career Guidance & Placement Cell', kn: 'ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಉದ್ಯೋಗ ಕೋಶ' }, convener: 'Mr. Rajendra Hoblidhar (rajendra.hobalidar@basck.in)' },
      { name: { en: "Institution's Innovation Council (IIC)", kn: 'ನಾವೀನ್ಯತಾ ಮಂಡಳಿ (IIC)' }, convener: 'Mr. Ganesh K (ganesh.k@basck.in)' },
      { name: { en: 'Youth Red Cross (YRC)', kn: 'ಯೂತ್ ರೆಡ್ ಕ್ರಾಸ್ (YRC)' }, convener: 'Prof. Sathyanarayana (sathyanarayana@basck.in)' },
      { name: { en: 'Anti-Ragging / ICC / SC-ST / Grievance / Women Empowerment Cells', kn: 'ಶಾಸನಬದ್ಧ ಸಮಿತಿಗಳು (Anti-Ragging, ICC, SC/ST, Women Empowerment)' }, convener: '⚠ [Committee/Cell page not extracted from basck.in — confirm conveners with office]' },
    ],
  },

  research: {
    pageTitle: { en: 'Research & Development', kn: 'ಸಂಶೋಧನೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ (R&D)' },
    subtitle: {
      en: '⚠ Detailed R&D Committee, Publications & Minor Research Projects pages were not extracted from basck.in. Confirm official records with the college office.',
      kn: '⚠ R&D ಸಮಿತಿ, ಪ್ರಕಟಣೆಗಳು ಮತ್ತು ಮೈನರ್ ಸಂಶೋಧನಾ ಯೋಜನೆಗಳ ವಿವರಗಳನ್ನು ಕಾಲೇಜು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಬೇಕಾಗಿದೆ.',
    },
    tabs: [
      { id: 'committee', slug: '/research', label: { en: 'Research Committee', kn: 'ಸಂಶೋಧನಾ ಸಮಿತಿ' } },
      { id: 'publications', slug: '/research/publications', label: { en: 'Publications', kn: 'ಪ್ರಕಟಣೆಗಳು' } },
      { id: 'projects', slug: '/research/projects', label: { en: 'Minor Research Projects', kn: 'ಮೈನರ್ ಸಂಶೋಧನಾ ಯೋಜನೆಗಳು' } },
    ],
    committee: [
      { name: 'Dr. Shubhakarachary', role: { en: 'Principal (M.A., M.Phil., Ph.D.) · Institutional Head', kn: 'ಪ್ರಾಂಶುಪಾಲರು' } },
      { name: '⚠ [Not extracted from basck.in]', role: { en: 'Research Cell Coordinator — confirm with college office', kn: 'ಸಂಶೋಧನಾ ಕೋಶ ಸಂಯೋಜಕರು — ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ' } },
      { name: '⚠ [Not extracted from basck.in]', role: { en: 'Arts & Humanities Representative — confirm with office', kn: 'ಕಲಾ ವಿಭಾಗ ಪ್ರತಿನಿಧಿ — ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ' } },
      { name: '⚠ [Not extracted from basck.in]', role: { en: 'Science & Commerce Representative — confirm with office', kn: 'ವಿಜ್ಞಾನ-ವಾಣಿಜ್ಯ ಪ್ರತಿನಿಧಿ — ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ' } },
    ],
    publications: [
      { id: 'pub1', title: '⚠ [Faculty publications table not extracted from basck.in — ask college office]', author: '⚠ Pending office data', year: '2025', journal: 'Confirm UGC-CARE / peer-reviewed records with office' },
    ],
    projects: [
      {
        id: 'mrp1',
        title: '⚠ [Minor Research Projects list not extracted from basck.in]',
        investigator: '⚠ Confirm Principal Investigator with college office',
        agency: 'UGC / Management (note: Central Library holds 605 UGC/management-funded/student project reports)',
        year: '⚠ Confirm year',
        status: { en: '⚠ Pending office confirmation', kn: '⚠ ಕಚೇರಿ ದೃಢೀಕರಣ ಬಾಕಿ ಇದೆ' },
      },
    ],
  },

  naac: {
    pageTitle: { en: 'NAAC & IQAC', kn: 'NAAC ಮತ್ತು IQAC' },
    subtitle: {
      en: "Re-accredited with 'A' Grade by NAAC in 2017. SSR Cycle-IV document, IQAC composition (2023–24), and statutory portals.",
      kn: "2017 ರಲ್ಲಿ NAAC 'A' ಶ್ರೇಣಿ ಮಾನ್ಯತೆ. SSR ಸೈಕಲ್-IV, IQAC ಸಮಿತಿ (2023–24) ಮತ್ತು ದಾಖಲೆಗಳು.",
    },
    tabs: [
      { id: 'naac', slug: '/naac', label: { en: 'NAAC / IQAC Portal', kn: 'NAAC / IQAC ಪೋರ್ಟಲ್' } },
      { id: 'nirf', slug: '/nirf', label: { en: 'NIRF Disclosures', kn: 'NIRF ದಾಖಲೆಗಳು' } },
      { id: 'rti', slug: '/rti', label: { en: 'RTI Disclosures', kn: 'RTI ಮಾಹಿತಿ ಹಕ್ಕು' } },
    ],
    iqacOverview: {
      coordinator: 'Prof. Sathyanarayana (Chemistry, 2023–24) · ⚠ Search snippet also names Dr. Vijayakumar K M (Coordinator) & Dr. Yashavanthi (Co-coordinator) — confirm current list with office',
      established: 'Re-accredited Grade A (2017) · Past coordinators: M.B. Nataraj, Mr. Shashikanth Hathwar',
      summary: {
        en: 'The Internal Quality Assurance Cell (IQAC), chaired by Principal Dr. Shubhakarachary, oversees quality benchmarks, accreditation readiness, and institutional documentation across departments.',
        kn: 'ಪ್ರಾಂಶುಪಾಲ ಡಾ. ಶುಭಾಕರಾಚಾರಿ ಅವರ ಅಧ್ಯಕ್ಷತೆಯ ಆಂತರಿಕ ಗುಣಮಟ್ಟ ಭರವಸೆ ಕೋಶವು (IQAC) ಶೈಕ್ಷಣಿಕ ಗುಣಮಟ್ಟ ಮತ್ತು ಮಾನ್ಯತಾ ದಾಖಲೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತದೆ.',
      },
      members: [
        { name: 'Dr. Shubhakarachary', role: 'Chairperson (Principal)' },
        { name: 'Prof. Sathyanarayana', role: 'Coordinator (Chemistry · 2023–24; ⚠ verify current)' },
        { name: 'Sri K. Gopal', role: 'Member (History)' },
        { name: 'Dr. Saritha V', role: 'Member (Applied Bioscience)' },
        { name: 'Sri Shankaranarayana', role: 'Member (Physical Director)' },
        { name: 'Sri Manohar Nagappayya', role: 'Member (Librarian)' },
        { name: 'Sri Ganesh Kumar', role: 'Member (Commerce)' },
        { name: 'Sri Rajendra Hoblidar', role: 'Member (Computer Science)' },
        { name: 'Smt. Shaila Ramachandra', role: 'Member (English)' },
        { name: 'Smt. Sumalatha S. Naik', role: 'Member (Journalism)' },
        { name: 'Sri Abhinandan A Shetty', role: 'Management Representative (Industrialist)' },
      ],
    },
    iiqaAndSsr: [
      {
        id: 'iiqa',
        title: { en: 'IIQA (⚠ Individual IIQA file URL not extracted — check basck.in)', kn: 'IIQA (⚠ ಕೊಂಡಿಯನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ)' },
        year: '⚠ Pending',
        size: '—',
        href: 'https://www.basck.in',
      },
      {
        id: 'ssr-cycle-4',
        title: { en: 'Self Study Report (SSR) — Cycle-IV (available on basck.in)', kn: 'ಸ್ವಯಂ ಅಧ್ಯಯನ ವರದಿ (SSR) — ಸೈಕಲ್-IV' },
        year: 'Cycle-IV',
        size: 'basck.in',
        href: 'https://www.basck.in',
      },
    ] as DocumentItem[],
    webLinks: [
      { label: { en: 'Subject Details / Syllabus (IQACLink5)', kn: 'ವಿಷಯಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮ (IQACLink5)' }, href: 'https://basck.in/IQACLink5.html' },
      { label: { en: 'Institutional Organogram (6.2.2 PDF)', kn: 'ಆಡಳಿತ ರಚನಾ ನಕ್ಷೆ (Organogram PDF)' }, href: 'https://www.basck.in/IQAC/ORGANOGRAM/6.2.2%20ORGANOGRAM.pdf' },
      { label: { en: 'Perspective Plan 2022–2027 (PDF)', kn: 'ದೂರದೃಷ್ಟಿ ಯೋಜನೆ 2022–2027 (PDF)' }, href: 'https://www.basck.in/IQAC/BCK%20Perspective%20Plan%202022-2027.pdf' },
      { label: { en: 'Campus Selection 2024–25 (PDF)', kn: 'ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆ 2024–25 (PDF)' }, href: 'https://basck.in/IQAC/campus/Students%20placement%202024-25.pdf' },
    ],
    criteria: [
      { id: 'c1', number: 'Criterion 1', title: { en: 'Curricular Aspects', kn: 'ಪಠ್ಯಕ್ರಮದ ಅಂಶಗಳು' }, docs: [{ id: 'c1d1', title: { en: '⚠ Individual Criterion 1 metric links not extracted from basck.in — confirm with IQAC', kn: '⚠ ಮಾನದಂಡ 1 ದಾಖಲೆಗಳನ್ನು IQAC ನಿಂದ ದೃಢೀಕರಿಸಿ' }, year: '⚠ Pending', size: '—', href: 'https://www.basck.in' }] },
      { id: 'c2', number: 'Criterion 2', title: { en: 'Teaching-Learning and Evaluation', kn: 'ಬೋಧನೆ-ಕಲಿಕೆ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ' }, docs: [{ id: 'c2d1', title: { en: '⚠ Individual Criterion 2 metric links not extracted from basck.in — confirm with IQAC', kn: '⚠ ಮಾನದಂಡ 2 ದಾಖಲೆಗಳನ್ನು IQAC ನಿಂದ ದೃಢೀಕರಿಸಿ' }, year: '⚠ Pending', size: '—', href: 'https://www.basck.in' }] },
      { id: 'c3', number: 'Criterion 3', title: { en: 'Research, Innovations and Extension', kn: 'ಸಂಶೋಧನೆ, ನಾವೀನ್ಯತೆ ಮತ್ತು ವಿಸ್ತರಣೆ' }, docs: [{ id: 'c3d1', title: { en: '⚠ Individual Criterion 3 metric links not extracted from basck.in — confirm with IQAC', kn: '⚠ ಮಾನದಂಡ 3 ದಾಖಲೆಗಳನ್ನು IQAC ನಿಂದ ದೃಢೀಕರಿಸಿ' }, year: '⚠ Pending', size: '—', href: 'https://www.basck.in' }] },
      { id: 'c4', number: 'Criterion 4', title: { en: 'Infrastructure and Learning Resources', kn: 'ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಕಲಿಕಾ ಸಂಪನ್ಮೂಲಗಳು' }, docs: [{ id: 'c4d1', title: { en: 'Infrastructure Photo Archive (/IQAC/Infra/)', kn: 'ಮೂಲಸೌಕರ್ಯ ಛಾಯಾಚಿತ್ರ ಆರ್ಕೈವ್' }, year: 'IQAC', size: 'Archive', href: 'https://www.basck.in/IQAC/Infra/' }] },
      { id: 'c5', number: 'Criterion 5', title: { en: 'Student Support and Progression', kn: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಮತ್ತು ಪ್ರಗತಿ' }, docs: [{ id: 'c5d1', title: { en: 'Campus Selection 2024–25 PDF', kn: 'ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆ 2024–25 PDF' }, year: '2024–25', size: 'PDF', href: 'https://basck.in/IQAC/campus/Students%20placement%202024-25.pdf' }] },
      { id: 'c6', number: 'Criterion 6', title: { en: 'Governance, Leadership and Management', kn: 'ಆಡಳಿತ, ನಾಯಕತ್ವ ಮತ್ತು ನಿರ್ವಹಣೆ' }, docs: [{ id: 'c6d1', title: { en: 'Metric 6.2.2 Organogram & Perspective Plan 2022–2027 PDFs', kn: 'ಆಡಳಿತ ರಚನೆ ಮತ್ತು ದೂರದೃಷ್ಟಿ ಯೋಜನೆ PDF' }, year: '2022–27', size: 'PDF', href: 'https://www.basck.in/IQAC/ORGANOGRAM/6.2.2%20ORGANOGRAM.pdf' }] },
      { id: 'c7', number: 'Criterion 7', title: { en: 'Institutional Values and Best Practices', kn: 'ಸಂಸ್ಥೆಯ ಮೌಲ್ಯಗಳು ಮತ್ತು ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು' }, docs: [{ id: 'c7d1', title: { en: '⚠ Individual Criterion 7 metric links not extracted from basck.in — confirm with IQAC', kn: '⚠ ಮಾನದಂಡ 7 ದಾಖಲೆಗಳನ್ನು IQAC ನಿಂದ ದೃಢೀಕರಿಸಿ' }, year: '⚠ Pending', size: '—', href: 'https://www.basck.in' }] },
    ],
    aqarDocuments: [
      { id: 'aqar-1', title: { en: '⚠ AQAR PDF links not extracted from basck.in — confirm with IQAC Coordinator', kn: '⚠ AQAR ದಾಖಲೆ ಕೊಂಡಿಗಳನ್ನು IQAC ನಿಂದ ದೃಢೀಕರಿಸಿ' }, year: '⚠ Pending', size: '—', href: 'https://www.basck.in' },
    ] as DocumentItem[],
  },

  nirf: {
    pageTitle: { en: 'NIRF Disclosures', kn: 'NIRF ಪ್ರಕಟಣೆಗಳು' },
    subtitle: {
      en: '⚠ Individual NIRF PDF reports were not extracted from basck.in. Confirm latest NIRF submissions with the college office.',
      kn: '⚠ NIRF ದಾಖಲೆಗಳನ್ನು ಹಳೆಯ ಜಾಲತಾಣದಿಂದ ಪಡೆಯಲಾಗಿಲ್ಲ — ಕಾಲೇಜು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
    },
    documents: [
      { id: 'nirf-pending', title: { en: '⚠ NIRF Data Submissions (not extracted from basck.in — confirm with office)', kn: '⚠ NIRF ವರದಿಗಳು (ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ)' }, year: '⚠ Pending', size: '—', href: 'https://www.basck.in' },
    ] as DocumentItem[],
  },

  rti: {
    pageTitle: { en: 'RTI Disclosures', kn: 'RTI ಮಾಹಿತಿ ಹಕ್ಕು ಪ್ರಕಟಣೆಗಳು' },
    subtitle: {
      en: 'Statutory disclosures under the Right to Information Act, 2005. ⚠ Specific RTI manual & PIO page not extracted from basck.in — confirm with the office.',
      kn: 'ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆ 2005 ರ ಅಡಿಯಲ್ಲಿ ಪ್ರಕಟಣೆಗಳು. ⚠ RTI ವಿವರಗಳನ್ನು ಕಾಲೇಜು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
    },
    officers: [
      { role: { en: 'Public Information Officer (PIO)', kn: 'ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ ಅಧಿಕಾರಿ (PIO)' }, name: '⚠ [Not extracted from basck.in — ask college office]', contact: '08254-230469 · principal@basck.in' },
      { role: { en: 'First Appellate Authority', kn: 'ಪ್ರಥಮ ಮೇಲ್ಮನವಿ ಪ್ರಾಧಿಕಾರ' }, name: 'Dr. Shubhakarachary, Principal', contact: 'principal@basck.in' },
    ],
    documents: [
      { id: 'rti-manual', title: { en: '⚠ RTI Proactive Disclosure Manual (not extracted from basck.in — confirm with office)', kn: '⚠ RTI ಕೈಪಿಡಿ (ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ)' }, year: '⚠ Pending', size: '—', href: 'https://www.basck.in' },
    ] as DocumentItem[],
  },

  news: {
    eyebrow: { en: 'Campus Updates', kn: 'ಕಾಲೇಜು ಸುದ್ದಿಗಳು' },
    pageTitle: { en: 'News & Upcoming Events', kn: 'ಸುದ್ದಿ ಮತ್ತು ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು' },
    heading: {
      en: 'News & Upcoming Events',
      kn: 'ಸುದ್ದಿ ಮತ್ತು ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು',
    },
    visitBlog: {
      en: 'Visit College Blog',
      kn: 'ಕಾಲೇಜು ಬ್ಲಾಗ್ ನೋಡಿ',
    },
    blogUrl: 'https://events.basck.in/',
    categories: [
      { id: 'all', label: { en: 'All', kn: 'ಎಲ್ಲಾ' } },
      { id: 'academics', label: { en: 'Academics', kn: 'ಶೈಕ್ಷಣಿಕ' } },
      { id: 'sports', label: { en: 'Sports', kn: 'ಕ್ರೀಡೆ' } },
      { id: 'cultural', label: { en: 'Cultural', kn: 'ಸಾಂಸ್ಕೃತಿಕ' } },
      { id: 'nss-ncc', label: { en: 'NSS/NCC', kn: 'NSS/NCC' } },
      { id: 'alumni', label: { en: 'Alumni', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು' } },
    ] as const,
    pinnedBanner: {
      badge: { en: '⚠ Office Update Needed', kn: '⚠ ದಿನಾಂಕ ದೃಢೀಕರಣ ಬಾಕಿ' },
      title: { en: 'Real News & Event Dates Pending from College Office (see events.basck.in)', kn: 'ನೈಜ ಸುದ್ದಿ ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳ ದಿನಾಂಕಗಳನ್ನು ಕಚೇರಿಯಿಂದ ಸೇರಿಸಿ (events.basck.in ನೋಡಿ)' },
      date: { en: '⚠ Confirm dates', kn: '⚠ ದಿನಾಂಕ ದೃಢೀಕರಿಸಿ' },
    },
    items: [
      {
        id: 'rank-felicitation',
        slug: 'rank-holders-2025',
        title: { en: 'Mangalore University 2025 Rank Holders', kn: '2025 ರ ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ ರ‍್ಯಾಂಕ್ ವಿಜೇತರು' },
        dateLabel: { en: '2025 · ⚠ Confirm ceremony date', kn: '2025 · ⚠ ದಿನಾಂಕ ದೃಢೀಕರಿಸಿ' },
        status: { en: 'Published on basck.in', kn: 'basck.in ನಲ್ಲಿ ಪ್ರಕಟಿತ' },
        categoryKey: 'academics',
        category: { en: 'Academics', kn: 'ಶೈಕ್ಷಣಿಕ' },
        venue: { en: 'College Campus, Kundapura', kn: 'ಕಾಲೇಜು ಕ್ಯಾಂಪಸ್, ಕುಂದಾಪುರ' },
        summary: {
          en: 'Ms. Shravya Adiga (VI Rank, BBA), Ms. Shravya Shenoy (VIII Rank, BCA), and Ms. Rakshitha (IX Rank, BCA) secured top Mangalore University ranks.',
          kn: 'ಕು. ಶ್ರಾವ್ಯ ಅಡಿಗ (VI ರ‍್ಯಾಂಕ್, BBA), ಕು. ಶ್ರಾವ್ಯ ಶೆಣೈ (VIII ರ‍್ಯಾಂಕ್, BCA) ಮತ್ತು ಕು. ರಕ್ಷಿತಾ (IX ರ‍್ಯಾಂಕ್, BCA) ವಿವಿ ರ‍್ಯಾಂಕ್ ಗಳಿಸಿದ್ದಾರೆ.',
        },
        fullBody: {
          en: 'Celebrating Mangalore University 2025 rank holders featured on basck.in: Ms. Shravya Adiga (VI Rank, BBA), Ms. Shravya Shenoy (VIII Rank, BCA), and Ms. Rakshitha (IX Rank, BCA). ⚠ Note: Old basck.in blog posts contained generic SSC-CGL placeholders; confirm official upcoming event dates with the college office.',
          kn: '2025 ರ ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ ರ‍್ಯಾಂಕ್ ವಿಜೇತರಾದ ಕು. ಶ್ರಾವ್ಯ ಅಡಿಗ, ಕು. ಶ್ರಾವ್ಯ ಶೆಣೈ ಮತ್ತು ಕು. ರಕ್ಷಿತಾ ಅವರಿಗೆ ಅಭಿನಂದನೆಗಳು. ⚠ ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳ ದಿನಾಂಕಗಳನ್ನು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
      {
        id: 'placement-pdf-2024-25',
        slug: 'campus-selection-2024-25',
        title: { en: 'Campus Selection 2024–25 Placement Record Published', kn: '2024–25 ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆ ವರದಿ ಪ್ರಕಟಣೆ' },
        dateLabel: { en: '2024–25 · ⚠ Confirm drive dates', kn: '2024–25 · ⚠ ದಿನಾಂಕ ದೃಢೀಕರಿಸಿ' },
        status: { en: 'Official PDF', kn: 'ಅಧಿಕೃತ PDF' },
        categoryKey: 'academics',
        category: { en: 'Academics', kn: 'ಶೈಕ್ಷಣಿಕ' },
        venue: { en: 'Career Guidance & Placement Cell', kn: 'ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಉದ್ಯೋಗ ಕೋಶ' },
        summary: {
          en: 'Students Placement 2024–25 PDF is published under the Career Guidance & Placement Cell (coordinated by Mr. Rajendra Hoblidhar).',
          kn: '2024–25 ಸಾಲಿನ ವಿದ್ಯಾರ್ಥಿಗಳ ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆ ವರದಿ PDF ಉದ್ಯೋಗ ಕೋಶದಡಿ ಲಭ್ಯವಿದೆ.',
        },
        fullBody: {
          en: 'View the official 2024–25 placement record at https://basck.in/IQAC/campus/Students%20placement%202024-25.pdf. ⚠ Individual drive schedules and upcoming placement calendar should be confirmed with Mr. Rajendra Hoblidhar (rajendra.hobalidar@basck.in).',
          kn: 'ಅಧಿಕೃತ 2024–25 ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆ ಪಟ್ಟಿಯನ್ನು ಉದ್ಯೋಗ ಕೋಶ ಪುಟದಲ್ಲಿ ನೋಡಿ.',
        },
      },
      {
        id: 'grantha-kuti-vaibhavam',
        slug: 'library-fest-gkv',
        title: { en: 'Grantha Kuti Vaibhavam (GKV) Library Fest & Campus Updates', kn: 'ಗ್ರಂಥ ಕುಟಿ ವೈಭವಂ (GKV) ಮತ್ತು ಕ್ಯಾಂಪಸ್ ಸುದ್ದಿಗಳು' },
        dateLabel: { en: '⚠ Ask college office for dates', kn: '⚠ ದಿನಾಂಕವನ್ನು ಕಚೇರಿಯಿಂದ ಪಡೆಯಿರಿ' },
        status: { en: '⚠ Dates Pending', kn: '⚠ ದಿನಾಂಕ ಬಾಕಿ ಇದೆ' },
        categoryKey: 'cultural',
        category: { en: 'Cultural', kn: 'ಸಾಂಸ್ಕೃತಿಕ' },
        venue: { en: 'Central Library / R.N. Shetty Hall (1,500 seats)', kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ / R.N. ಶೆಟ್ಟಿ ಹಾಲ್' },
        summary: {
          en: '⚠ Real news & event dates were not on basck.in (old posts were generic templates). Check events.basck.in or contact the college office for current event dates.',
          kn: '⚠ ಹಳೆಯ ಜಾಲತಾಣದಲ್ಲಿ ನೈಜ ಕಾರ್ಯಕ್ರಮ ದಿನಾಂಕಗಳಿಲ್ಲ. ಪ್ರಸ್ತುತ ಕಾರ್ಯಕ್ರಮಗಳಿಗಾಗಿ events.basck.in ಅಥವಾ ಕಾಲೇಜು ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
        },
        fullBody: {
          en: 'The Central Library organizes Grantha Kuti Vaibhavam (GKV), and cultural/NSS/NCC/sports units host events in R.N. Shetty Hall (1,500 seats), Koya Kutti Hall (300 seats), and Madhava Mantapa. ⚠ Because the old basck.in "recent posts" contained placeholder posts, please obtain verified upcoming dates from the college office.',
          kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯದಿಂದ ಗ್ರಂಥ ಕುಟಿ ವೈಭವಂ (GKV) ಹಾಗೂ ವಿವಿಧ ಘಟಕಗಳ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ⚠ ನಿಖರ ದಿನಾಂಕಗಳನ್ನು ಕಾಲೇಜು ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ.',
        },
      },
    ] as NewsItem[],
  },

  rankHolders: {
    eyebrow: { en: 'Academic Distinction', kn: 'ಶೈಕ್ಷಣಿಕ ಶ್ರೇಷ್ಠತೆ' },
    heading: {
      en: 'Rank Holders 2025 · Mangalore University',
      kn: 'ರ‍್ಯಾಂಕ್ ವಿಜೇತರು 2025 · ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ',
    },
    subtitle: {
      en: 'Celebrating our students who secured top university ranks across undergraduate examinations.',
      kn: 'ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯದ ಪದವಿ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಉನ್ನತ ರ‍್ಯಾಂಕ್ ಪಡೆದ ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿನಿಯರು.',
    },
    items: [
      {
        id: 'shravya-adiga',
        name: 'Ms. Shravya Adiga',
        rank: { en: 'VI Rank', kn: '6ನೇ ರ‍್ಯಾಂಕ್' },
        program: 'BBA',
        university: { en: 'Mangalore University', kn: 'ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ' },
        year: '2025',
        initials: 'SA',
      },
      {
        id: 'shravya-shenoy',
        name: 'Ms. Shravya Shenoy',
        rank: { en: 'VIII Rank', kn: '8ನೇ ರ‍್ಯಾಂಕ್' },
        program: 'BCA',
        university: { en: 'Mangalore University', kn: 'ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ' },
        year: '2025',
        initials: 'SS',
      },
      {
        id: 'rakshitha',
        name: 'Ms. Rakshitha',
        rank: { en: 'IX Rank', kn: '9ನೇ ರ‍್ಯಾಂಕ್' },
        program: 'BCA',
        university: { en: 'Mangalore University', kn: 'ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ' },
        year: '2025',
        initials: 'R',
      },
    ] as RankHolderItem[],
  },

  media: {
    eyebrow: { en: 'Campus Voices & Film', kn: 'ಮಾಧ್ಯಮ ಮತ್ತು ಸಮುದಾಯ ರೇಡಿಯೋ' },
    heading: {
      en: 'Campus Media & Radio Kundapura 89.6 FM',
      kn: 'ಕ್ಯಾಂಪಸ್ ಮಾಧ್ಯಮ ಮತ್ತು ರೇಡಿಯೋ ಕುಂದಾಪುರ 89.6 FM',
    },
    subtitle: {
      en: 'Watch college highlights on demand and tune into our community radio station serving Kundapura.',
      kn: 'ಕಾಲೇಜಿನ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ಕುಂದಾಪುರದ ಸಮುದಾಯ ರೇಡಿಯೋ ಆಲಿಸಿ.',
    },
    videos: [
      {
        id: 'Ea9MLN0N7Ww',
        title: {
          en: "Bhandarkars' College Campus Showcase",
          kn: 'ಭಂಡಾರ್ಕಾರ್ಸ್ ಮಹಾವಿದ್ಯಾಲಯ ಕ್ಯಾಂಪಸ್ ಪರಿಚಯ',
        },
        subtitle: {
          en: 'Click to load & play YouTube video',
          kn: 'ವೀಡಿಯೊ ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
        },
      },
      {
        id: '4unfrk-OWXw',
        title: {
          en: 'Academic & Cultural Highlights',
          kn: 'ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ವಿಶೇಷತೆಗಳು',
        },
        subtitle: {
          en: 'Click to load & play YouTube video',
          kn: 'ವೀಡಿಯೊ ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
        },
      },
    ],
    radio: {
      frequency: '89.6 FM',
      name: { en: 'Radio Kundapura 89.6 FM', kn: 'ರೇಡಿಯೋ ಕುಂದಾಪುರ 89.6 FM' },
      tagline: {
        en: 'Community Radio Station of Bhandarkars’ Arts & Science College',
        kn: 'ಭಂಡಾರ್ಕಾರ್ಸ್ ಕಲಾ ಮತ್ತು ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ, ಕುಂದಾಪುರದ ಸಮುದಾಯ ಬಾನುಲಿ ಕೇಂದ್ರ',
      },
      description: {
        en: 'Broadcasting educational programs, local folklore, student voices, agriculture insights, and community news across Kundapura and surrounding coastal taluks.',
        kn: 'ಕುಂದಾಪುರ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಿಗೆ ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಕ್ರಮಗಳು, ಜಾನಪದ, ವಿದ್ಯಾರ್ಥಿ ಧ್ವನಿ ಮತ್ತು ಸಮುದಾಯ ಸುದ್ದಿಗಳನ್ನು ಪ್ರಸಾರ ಮಾಡುವ ರೇಡಿಯೋ ಕೇಂದ್ರ.',
      },
      cta: { en: 'Explore Radio Schedule', kn: 'ಕಾರ್ಯಕ್ರಮ ವಿವರ ನೋಡಿ' },
    },
  },

  gallery: {
    eyebrow: { en: 'Campus Gallery', kn: 'ಕ್ಯಾಂಪಸ್ ಚಿತ್ರಸಂಪುಟ' },
    heading: {
      en: 'Life at Kundapura Campus',
      kn: 'ಕುಂದಾಪುರ ಕ್ಯಾಂಪಸ್‌ನ ಕ್ಷಣಗಳು',
    },
    subtitle: {
      en: 'Select any photograph to open full-screen view.',
      kn: 'ಪೂರ್ಣ ಪರದೆಯಲ್ಲಿ ನೋಡಲು ಚಿತ್ರದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    },
    items: [
      { id: 'g1', src: 'https://www.basck.in/images/facilities/RNshettty.jpg', alt: { en: 'R.N. Shetty Hall auditorium on campus', kn: 'R.N. ಶೆಟ್ಟಿ ಸಭಾಂಗಣ' }, caption: { en: 'R.N. Shetty Hall (1,500 Seats)', kn: 'R.N. ಶೆಟ್ಟಿ ಸಭಾಂಗಣ (1,500 ಆಸನಗಳು)' }, aspectClass: 'aspect-[4/3]' },
      { id: 'g2', src: 'https://www.basck.in/images/facilities/indoor.jpg', alt: { en: 'Prabhakar Tholar Indoor Games Complex', kn: 'ಪ್ರಭಾಕರ್ ತೋಳಾರ್ ಒಳಾಂಗಣ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣ' }, caption: { en: 'Prabhakar Tholar Indoor Games Complex', kn: 'ಪ್ರಭಾಕರ್ ತೋಳಾರ್ ಒಳಾಂಗಣ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣ' }, aspectClass: 'aspect-[3/4]' },
      { id: 'g3', src: 'https://www.basck.in/images/facilities/madhavmantap.jpg', alt: { en: 'Madhava Mantapa open-air theatre', kn: 'ಮಾಧವ ಮಂಟಪ ಬಯಲು ರಂಗಮಂದಿರ' }, caption: { en: 'Madhava Mantapa Open-Air Theatre', kn: 'ಮಾಧವ ಮಂಟಪ ಬಯಲು ರಂಗಮಂದಿರ' }, aspectClass: 'aspect-square' },
      { id: 'g4', src: 'https://www.basck.in/IQAC/NSS/Nss.jpg', alt: { en: 'NSS Unit community activities', kn: 'NSS ಘಟಕದ ಚಟುವಟಿಕೆಗಳು' }, caption: { en: 'NSS Community Service', kn: 'NSS ಸಮುದಾಯ ಸೇವೆ' }, aspectClass: 'aspect-[4/3]' },
      { id: 'g5', src: 'https://www.basck.in/IQAC/NCC/1.jpg', alt: { en: 'NCC Army and Navy Wing cadets', kn: 'NCC ಕೆಡೆಟ್‌ಗಳ ಚಟುವಟಿಕೆ' }, caption: { en: 'NCC Army & Navy Wings', kn: 'NCC ಆರ್ಮಿ ಮತ್ತು ನೇವಿ ವಿಭಾಗ' }, aspectClass: 'aspect-[3/4]' },
      { id: 'g6', src: 'https://www.basck.in/images/gallery/6.JPG', alt: { en: 'Central Library and reading room', kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ' }, caption: { en: 'Central Library (97,286 Books)', kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ' }, aspectClass: 'aspect-[4/3]' },
      { id: 'g7', src: 'https://www.basck.in/images/facilities/fr14.jpg', alt: { en: 'Ladies Hostel building on campus', kn: 'ಮಹಿಳಾ ವಸತಿ ನಿಲಯ' }, caption: { en: 'Ladies Hostel (36 Rooms)', kn: 'ಮಹಿಳಾ ವಸತಿ ನಿಲಯ (36 ಕೊಠಡಿಗಳು)' }, aspectClass: 'aspect-square' },
      { id: 'g8', src: 'https://www.basck.in/images/facilities/parking.jpg', alt: { en: 'Campus parking and grounds', kn: 'ಕ್ಯಾಂಪಸ್ ವಾಹನ ನಿಲುಗಡೆ ಮತ್ತು ಆವರಣ' }, caption: { en: 'Campus Grounds & Parking', kn: 'ಕ್ಯಾಂಪಸ್ ಆವರಣ' }, aspectClass: 'aspect-[4/3]' },
    ] as GalleryItem[],
  },

  quickAccess: {
    eyebrow: { en: 'Institutional Resources', kn: 'ಸಂಸ್ಥೆಯ ಸಂಪನ್ಮೂಲಗಳು' },
    heading: {
      en: 'Quick Access Panel',
      kn: 'ತ್ವರಿತ ಪ್ರವೇಶ ಫಲಕ',
    },
    subtitle: {
      en: 'Direct access to accreditation records, syllabus details, student portal app, and institutional plans.',
      kn: 'ಗುಣಮಟ್ಟ ಮಾನ್ಯತೆ ದಾಖಲೆಗಳು, ಪಠ್ಯಕ್ರಮ, ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್ ಆ್ಯಪ್ ಮತ್ತು ಯೋಜನೆಗಳಿಗೆ ನೇರ ಪ್ರವೇಶ.',
    },
    items: [
      { id: 'iqac', title: { en: 'IQAC', kn: 'IQAC' }, subtitle: { en: 'Internal Quality Assurance Cell', kn: 'ಆಂತರಿಕ ಗುಣಮಟ್ಟ ಭರವಸೆ ಕೋಶ' }, href: '/naac', external: false, iconName: 'CheckCircle2' },
      { id: 'naac-criteria', title: { en: 'NAAC Criteria', kn: 'NAAC ಮಾನದಂಡಗಳು' }, subtitle: { en: 'Criterion-wise documentation', kn: 'ಮಾನದಂಡವಾರು ದಾಖಲೆಗಳು' }, href: '/naac#criteria', external: false, iconName: 'ClipboardCheck' },
      { id: 'ssr', title: { en: 'SSR Cycle-IV', kn: 'SSR ಸೈಕಲ್-IV' }, subtitle: { en: 'Self Study Report Cycle-IV', kn: 'ಸ್ವಯಂ ಅಧ್ಯಯನ ವರದಿ' }, href: '/naac#ssr', external: false, iconName: 'FileText' },
      { id: 'syllabus', title: { en: 'Subject Details / Syllabus', kn: 'ವಿಷಯಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮ' }, subtitle: { en: 'Official IQACLink5 syllabus page', kn: 'ಅಧಿಕೃತ ಪಠ್ಯಕ್ರಮ ಕೊಂಡಿ' }, href: 'https://basck.in/IQACLink5.html', external: true, iconName: 'BookMarked' },
      { id: 'placements-pdf', title: { en: 'Placements 2024–25 PDF', kn: 'ಉದ್ಯೋಗ ಆಯ್ಕೆ 2024–25 PDF' }, subtitle: { en: 'Campus Selection record', kn: 'ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆ ಪಟ್ಟಿ' }, href: 'https://basck.in/IQAC/campus/Students%20placement%202024-25.pdf', external: true, iconName: 'BarChart3' },
      { id: 'rti', title: { en: 'RTI Disclosures', kn: 'RTI (ಮಾಹಿತಿ ಹಕ್ಕು)' }, subtitle: { en: 'Right to Information disclosures', kn: 'ಮಾಹಿತಿ ಹಕ್ಕು ಪ್ರಕಟಣೆಗಳು' }, href: '/rti', external: false, iconName: 'Scale' },
      { id: 'uucms', title: { en: 'UUCMS Portal', kn: 'UUCMS ಪೋರ್ಟಲ್' }, subtitle: { en: 'Unified University & College system', kn: 'ಏಕೀಕೃತ ವಿಶ್ವವಿದ್ಯಾಲಯ ಪೋರ್ಟಲ್' }, href: 'https://uucms.karnataka.gov.in/', external: true, iconName: 'GraduationCap' },
      { id: 'organogram', title: { en: 'Organogram PDF', kn: 'ಆಡಳಿತ ರಚನೆ PDF' }, subtitle: { en: 'Metric 6.2.2 governance chart', kn: 'ಸಂಸ್ಥೆಯ ಆಡಳಿತ ನಕ್ಷೆ' }, href: 'https://www.basck.in/IQAC/ORGANOGRAM/6.2.2%20ORGANOGRAM.pdf', external: true, iconName: 'ShieldCheck' },
      { id: 'student-app', title: { en: 'Student Portal App', kn: 'ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್ ಆ್ಯಪ್' }, subtitle: { en: 'Google Play Android App', kn: 'Google Play ಆಂಡ್ರಾಯ್ಡ್ ಆ್ಯಪ್' }, href: 'https://play.google.com/store/apps/details?id=dev.shanbhag.studentportal', external: true, iconName: 'Smartphone' },
      { id: 'perspective-plan', title: { en: 'Perspective Plan 2022–2027', kn: 'ದೂರದೃಷ್ಟಿ ಯೋಜನೆ 2022–2027' }, subtitle: { en: 'Official 5-year strategic PDF', kn: 'ಐದು ವರ್ಷಗಳ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆ' }, href: 'https://www.basck.in/IQAC/BCK%20Perspective%20Plan%202022-2027.pdf', external: true, iconName: 'Map' },
    ] as QuickAccessItem[],
  },

  admissions: {
    eyebrow: { en: 'Admissions', kn: 'ಪ್ರವೇಶಾತಿ' },
    heading: {
      en: 'Admissions Enquiry',
      kn: 'ಪ್ರವೇಶಾತಿ ವಿಚಾರಣೆ',
    },
    subtitle: {
      en: 'Write to our administrative office for CBCS/NEP degree combinations, fee structure, eligibility, and admission dates (⚠ confirm admission dates & official form with office).',
      kn: 'ಪದವಿ ವಿಷಯ ಸಂಯೋಜನೆಗಳು, ಶುಲ್ಕ ವಿವರ, ಅರ್ಹತೆ ಮತ್ತು ಪ್ರವೇಶಾತಿ ದಿನಾಂಕಗಳಿಗಾಗಿ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    form: {
      nameLabel: { en: 'Full Name', kn: 'ಪೂರ್ಣ ಹೆಸರು' },
      namePlaceholder: { en: 'Enter your full name', kn: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ' },
      phoneLabel: { en: 'Phone Number', kn: 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ' },
      phonePlaceholder: { en: '+91 98XXXXXXXX', kn: '+91 98XXXXXXXX' },
      emailLabel: { en: 'Email Address', kn: 'ಇಮೇಲ್ ವಿಳಾಸ' },
      emailPlaceholder: { en: 'you@example.com', kn: 'you@example.com' },
      courseLabel: { en: 'Program of Interest', kn: 'ಆಸಕ್ತ ಕೋರ್ಸ್' },
      courseDefault: { en: 'Select a degree program', kn: 'ಪದವಿ ಕೋರ್ಸ್ ಆಯ್ಕೆಮಾಡಿ' },
      messageLabel: { en: 'Message / Query', kn: 'ಸಂದೇಶ / ಪ್ರಶ್ನೆ' },
      messagePlaceholder: {
        en: 'Ask about CBCS/NEP combinations, scholarships, ladies hostel, or admission schedule...',
        kn: 'ವಿಷಯ ಸಂಯೋಜನೆಗಳು, ವಿದ್ಯಾರ್ಥಿವೇತನ ಅಥವಾ ಪ್ರವೇಶಾತಿ ಕುರಿತು ಬರೆಯಿರಿ...',
      },
      submitLabel: { en: 'Submit Enquiry', kn: 'ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ' },
      successTitle: {
        en: 'Enquiry Received',
        kn: 'ವಿಚಾರಣೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ',
      },
      successBody: {
        en: "Thank you for contacting Bhandarkars' Arts and Science College, Kundapura. Our admissions desk will reach out shortly.",
        kn: 'ಭಂಡಾರ್ಕಾರ್ಸ್ ಕಲಾ ಮತ್ತು ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ, ಕುಂದಾಪುರವನ್ನು ಸಂಪರ್ಕಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.',
      },
      submitAnother: { en: 'Send another enquiry', kn: 'ಮತ್ತೊಂದು ವಿಚಾರಣೆ ಕಳುಹಿಸಿ' },
    },
    contactCard: {
      title: { en: 'Admissions & Administrative Office', kn: 'ಪ್ರವೇಶಾತಿ ಮತ್ತು ಆಡಳಿತ ಕಚೇರಿ' },
      hours: {
        en: '⚠ Office timings not verified on old site — confirm with administrative office (Library: Mon–Fri 8:00 am – 5:15 pm, Sat 8:00 am – 1:30 pm)',
        kn: '⚠ ಕಚೇರಿ ಸಮಯವನ್ನು ಆಡಳಿತ ಕಚೇರಿಯಿಂದ ದೃಢೀಕರಿಸಿ (ಗ್ರಂಥಾಲಯ: ಸೋಮ–ಶುಕ್ರ 8:00–5:15, ಶನಿ 8:00–1:30)',
      },
      address: {
        en: "Bhandarkars' Arts and Science College, Kundapura – 576201, Udupi District, Karnataka",
        kn: 'ಭಂಡಾರ್ಕಾರ್ಸ್ ಕಲಾ ಮತ್ತು ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ, ಕುಂದಾಪುರ – 576201, ಉಡುಪಿ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ',
      },
    },
  },

  contactPage: {
    pageTitle: { en: 'Contact Us', kn: 'ಸಂಪರ್ಕಿಸಿ' },
    subtitle: {
      en: 'Reach our campus administrative office, Principal, Librarian, or Department Heads in Kundapura.',
      kn: 'ಕುಂದಾಪುರದ ಕಾಲೇಜು ಕಚೇರಿ, ಪ್ರಾಂಶುಪಾಲರು, ಗ್ರಂಥಪಾಲಕರು ಅಥವಾ ವಿಭಾಗಾಧ್ಯಕ್ಷರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    deptTableTitle: {
      en: 'Department & Office Contact Directory',
      kn: 'ವಿಭಾಗ ಮತ್ತು ಕಚೇರಿ ಸಂಪರ್ಕ ಪಟ್ಟಿ',
    },
    deptContacts: [
      { dept: { en: 'Principal & Administrative Office', kn: 'ಪ್ರಾಂಶುಪಾಲರು ಮತ್ತು ಆಡಳಿತ ಕಚೇರಿ' }, head: 'Dr. Shubhakarachary (Principal)', contact: '08254-230469 / +91 8254230369 · principal@basck.in' },
      { dept: { en: 'Central Library', kn: 'ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ' }, head: 'Mr. Manohar Nagappayya (Librarian)', contact: 'librarian@basck.in · manohar@basck.in' },
      { dept: { en: 'Commerce (B.Com)', kn: 'ವಾಣಿಜ್ಯ (B.Com)' }, head: 'Mr. Arun A S (HOD)', contact: 'arun.as@basck.in' },
      { dept: { en: 'Business Administration (BBA)', kn: 'ವ್ಯವಹಾರ ಆಡಳಿತ (BBA)' }, head: 'Mrs. Archana Aravind (HOD)', contact: 'archana.aravind@basck.in' },
      { dept: { en: 'Computer Applications / CS (BCA)', kn: 'ಕಂಪ್ಯೂಟರ್ ಅಪ್ಲಿಕೇಶನ್ಸ್ (BCA)' }, head: 'Mr. Ganesh K (HOD)', contact: 'ganesh.k@basck.in' },
      { dept: { en: 'Campus Placement Cell', kn: 'ಕ್ಯಾಂಪಸ್ ಉದ್ಯೋಗ ಕೋಶ' }, head: 'Mr. Rajendra Hoblidhar (Coordinator)', contact: 'rajendra.hobalidar@basck.in' },
      { dept: { en: 'Physics (B.Sc)', kn: 'ಭೌತಶಾಸ್ತ್ರ (B.Sc)' }, head: 'Mr. Shashikanth Hathwar (HOD)', contact: 'shashikanth.hathwar@basck.in' },
      { dept: { en: 'Chemistry (B.Sc) & IQAC', kn: 'ರಸಾಯನಶಾಸ್ತ್ರ (B.Sc) ಮತ್ತು IQAC' }, head: 'Ms. Nisha M (HOD) / Prof. Sathyanarayana (IQAC)', contact: 'nisha.m@basck.in · sathyanarayana@basck.in' },
      { dept: { en: 'English & Journalism (B.A.)', kn: 'ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಪತ್ರಿಕೋದ್ಯಮ (B.A.)' }, head: 'Praveen (English HOD) / Mrs. Sumalatha S Naik (Journalism HOD)', contact: 'praveen@basck.in · sumalatha.naik@basck.in' },
      { dept: { en: 'Kannada & Hindi (B.A.)', kn: 'ಕನ್ನಡ ಮತ್ತು ಹಿಂದಿ' }, head: 'Mr. Manjunatha K.S / Ms. Prafulla B', contact: 'manjunatha.ks@basck.in · prafulla.b@basck.in' },
      { dept: { en: 'History, Economics & Political Science (B.A.)', kn: 'ಇತಿಹಾಸ, ಅರ್ಥಶಾಸ್ತ್ರ ಮತ್ತು ರಾಜ್ಯಶಾಸ್ತ್ರ' }, head: 'Mrs. Sneha S / Mr. Manjunatha / Mrs. Harshitha', contact: 'sneha.s@basck.in · manjunatha@basck.in · harshitha@basck.in' },
      { dept: { en: 'PUC Office', kn: 'ಪಿಯುಸಿ ಕಚೇರಿ' }, head: 'Dr. Saroja M (Principal, PU College — per Governing Council)', contact: '08254-235056' },
    ],
  },

  contact: {
    institution: "Bhandarkars' Arts and Science College, Kundapura",
    mobile: '+91 8254230369',
    phone: '08254-230469',
    pucOffice: '08254-235056',
    fax: '+91 8254 235043',
    email: 'principal@basck.in',
    social: {
      facebook: 'https://www.facebook.com/Bhandarkarssartsandsciencecollegekundapura',
      youtube: 'https://www.youtube.com/channel/UCVLHcVA9rAkKicJOcGQThXg',
    },
  },

  footer: {
    aboutColumnTitle: { en: 'About', kn: 'ಸಂಸ್ಥೆಯ ಬಗ್ಗೆ' },
    aboutSummary: {
      en: "Founded in June 1963 and managed by Bhandarkars' College Trust (Regd.) under the sponsorship of Academy of General Education (AGE), Manipal. NAAC 'A' Grade (2017) · Affiliated to Mangalore University.",
      kn: "ಜೂನ್ 1963 ರಲ್ಲಿ ಸ್ಥಾಪನೆಯಾದ, ಮಣಿಪಾಲದ AGE ಪ್ರಾಯೋಜಿತ ಮತ್ತು ಭಂಡಾರ್ಕರ್ಸ್ ಕಾಲೇಜು ಟ್ರಸ್ಟ್ ನಿರ್ವಹಣೆಯ NAAC 'A' ಶ್ರೇಣಿ ಕಾಲೇಜು.",
    },
    quickLinksTitle: { en: 'Quick Links', kn: 'ತ್ವರಿತ ಕೊಂಡಿಗಳು' },
    quickLinks: [
      { label: { en: 'About Us', kn: 'ನಮ್ಮ ಬಗ್ಗೆ' }, href: '/about' },
      { label: { en: 'Degree Programs', kn: 'ಪದವಿ ಕೋರ್ಸ್‌ಗಳು' }, href: '/programs' },
      { label: { en: 'Departments & Faculty', kn: 'ವಿಭಾಗಗಳು ಮತ್ತು ಬೋಧಕರು' }, href: '/departments' },
      { label: { en: 'Student Support', kn: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ' }, href: '/student-support' },
      { label: { en: 'NAAC / IQAC', kn: 'NAAC / IQAC' }, href: '/naac' },
      { label: { en: 'Contact & Admissions', kn: 'ಸಂಪರ್ಕ ಮತ್ತು ಪ್ರವೇಶಾತಿ' }, href: '/contact' },
    ],
    usefulLinksTitle: { en: 'Useful Links', kn: 'ಉಪಯುಕ್ತ ಕೊಂಡಿಗಳು' },
    usefulLinks: [
      { label: 'Official Subject Syllabus (IQACLink5)', href: 'https://basck.in/IQACLink5.html' },
      { label: 'Student Portal App (Google Play)', href: 'https://play.google.com/store/apps/details?id=dev.shanbhag.studentportal' },
      { label: 'UUCMS Portal', href: 'https://uucms.karnataka.gov.in/' },
      { label: 'UGC', href: 'https://www.ugc.gov.in/' },
      { label: 'NAAC', href: 'https://www.naac.gov.in/' },
    ],
    contactTitle: { en: 'Contact', kn: 'ಸಂಪರ್ಕ' },
    mapPlaceholderTitle: {
      en: 'Campus Location Map · Kundapura',
      kn: 'ಕ್ಯಾಂಪಸ್ ನಕ್ಷೆ · ಕುಂದಾಪುರ',
    },
    mapDirections: {
      en: 'Open in Google Maps (⚠ Verify exact map pin)',
      kn: 'ಗೂಗಲ್ ನಕ್ಷೆಯಲ್ಲಿ ತೆರೆಯಿರಿ',
    },
    copyright: "© Bhandarkars' Arts and Science College Kundapura. All rights reserved.",
  },
} as const;
