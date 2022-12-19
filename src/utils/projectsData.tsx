import project1Image from '@assets/images/project-1.png';
import project2Image from '@assets/images/project-2.png';
import project3Image from '@assets/images/project-3.png';
import project4Image from '@assets/images/project-4.png';
import project5Image from '@assets/images/project-5.png';
import project6Image from '@assets/images/project-6.jpg';
import project7Image from '@assets/images/project-7.png';
import { projectDataType } from '@myTypes/';
import { v4 as uuidv4 } from 'uuid';

// Tags, I think it's worong to use it like this...↘️
// const htmlTag: projectTagType = { name: 'html', id: uuidv4() };
// const cssTag: projectTagType = { name: 'css', id: uuidv4() };
// const jsTag: projectTagType = { name: 'js', id: uuidv4() };
// const GAMETag: projectTagType = { name: 'game', id: uuidv4() };

// Projects Data
export const projectsData: projectDataType[] = [
  {
    title: 'Rotation Text',
    desc: 'Rotating Text around an image',
    imgSrc: project1Image,
    imgAlt: 'mohamed shelf standing with iron man suit',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/abKrevV',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/abKrevV',
    tagsList: [
      { name: 'html', id: uuidv4(), selected: false },
      { name: 'css', id: uuidv4(), selected: false },
      { name: 'js', id: uuidv4(), selected: false },
    ],
  },
  {
    title: 'Browser Welcomming Page',
    desc: `you can enter your name in this Page and your today's task & your info will be saved into localstorage.`,
    imgSrc: project2Image,
    imgAlt: 'mountains pic with text at the middle',
    demoLink: 'https://website-browser-welcomming-page.vercel.app/',
    codeLink:
      'https://github.com/MohamedSaid7102/website--browser-welcomming-page',
    tagsList: [
      { name: 'html', id: uuidv4(), selected: false },
      { name: 'css', id: uuidv4(), selected: false },
      { name: 'js', id: uuidv4(), selected: false },
    ],
  },
  {
    title: 'Fancy Cursor Hover',
    desc: 'Fancy mouse hover effect, with only css image slider',
    imgSrc: project3Image,
    imgAlt: 'photo of a website',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/gOKNOpo',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/gOKNOpo',
    tagsList: [
      { name: 'html', id: uuidv4(), selected: false },
      { name: 'css', id: uuidv4(), selected: false },
      { name: 'js', id: uuidv4(), selected: false },
    ],
  },
  {
    title: 'Before&After',
    desc: 'Before&After Image slider, with support for mobile swipes on.',
    imgSrc: project5Image,
    imgAlt: 'photo of a before & after image',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/abGVLpO',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/abGVLpO',
    tagsList: [
      { name: 'html', id: uuidv4(), selected: false },
      { name: 'css', id: uuidv4(), selected: false },
      { name: 'js', id: uuidv4(), selected: false },
    ],
  },
  {
    title: `Google's Theme Switcher`,
    desc: 'Theme switch dark&light.',
    imgSrc: project6Image,
    imgAlt: 'photo of a theme switch',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/jOxxXZO',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/jOxxXZO',
    tagsList: [
      { name: 'html', id: uuidv4(), selected: false },
      { name: 'css', id: uuidv4(), selected: false },
      { name: 'js', id: uuidv4(), selected: false },
    ],
  },
  {
    title: 'Mind Game',
    desc: 'Before&After Image slider, with support for mobile swipes on it.',
    imgSrc: project7Image,
    imgAlt: 'photo of a mind game cards',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/xxPJqOz',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/xxPJqOz',
    tagsList: [
      { name: 'html', id: uuidv4(), selected: false },
      { name: 'css', id: uuidv4(), selected: false },
      { name: 'js', id: uuidv4(), selected: false },
      { name: 'game', id: uuidv4(), selected: false },
    ],
  },
  {
    title: 'Old Web Resume',
    desc: 'Web version Resume, This is an old one',
    imgSrc: project4Image,
    imgAlt: 'photo of a resume',
    demoLink: 'https://website-old-resume.vercel.app/',
    codeLink: 'https://github.com/MohamedSaid7102/website--old--resume',
    tagsList: [
      { name: 'html', id: uuidv4(), selected: false },
      { name: 'css', id: uuidv4(), selected: false },
    ],
  },
];
