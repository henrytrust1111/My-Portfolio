import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/Intro-page.png';
import Work2 from './assets/Docmate.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Henry',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Trust',
  },

  {
    id: 3,
    title: 'Phone : ',
    description: '+234 815 401 2262',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Nigerian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Lagos',
  },

  {
    id: 7,
    title: 'Hobbies : ',
    description: 'Learning, Travelling, Swimming',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'henrytrust1111@gmail.com',
  },

  {
    id: 9,
    title: 'linkedIn : ',
    description: 'henrytrust',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, yoruba, !bibio',
  },
];

export const stats = [
  {
    id: 1,
    no: 2,
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: 12,
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: 10,
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: 2,
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Freelance </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Certified Frontend Enginneer <span> The Curve Africa </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Bachelor Degree <span> Madonna University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Engineering Degree (A+) <span> New Horizons (NHS) </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Twailwind',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Figma',
    percentage: '50',
  },

  {
    id: 6,
    title: 'Typescript',
    percentage: '75',
  },

  {
    id: 7,
    title: 'ReactNative',
    percentage: '50',
  },

  {
    id: 8,
    title: 'React',
    percentage: '90',
  },
  {
    id: 8,
    title: 'Nextjs',
    percentage: '70',
  },
  {
    id: 8,
    title: 'Redux',
    percentage: '70',
  },
  {
    id: 8,
    title: 'Github',
    percentage: '60',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Library Management',
    link: 'https://this-is-my-lib-app-managenment.vercel.app/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Reactjs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'librix.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Docmate',
    link: 'https://docmate-tau.vercel.app/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Healthcare',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Hackathon',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'docmate.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
