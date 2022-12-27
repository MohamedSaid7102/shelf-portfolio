import project1Image from '@assets/images/project1.png';
import project2Image from '@assets/images/project2.png';
import project3Image from '@assets/images/project3.png';
import project4Image from '@assets/images/project4.png';
import project5Image from '@assets/images/project5.png';
import project6Image from '@assets/images/project6.jpg';
import project7Image from '@assets/images/project7.png';
import { filterTagType, projectDataType } from '@myTypes/';
import { v4 as uuidv4 } from 'uuid';

export const HTMLTag: filterTagType = {
  name: 'html',
  id: uuidv4(),
  selected: false,
};
export const CSSTag: filterTagType = {
  name: 'css',
  id: uuidv4(),
  selected: false,
};
export const JSTag: filterTagType = {
  name: 'js',
  id: uuidv4(),
  selected: false,
};
export const REACTJSTag: filterTagType = {
  name: 'react.js',
  id: uuidv4(),
  selected: false,
};
export const GAMETag: filterTagType = {
  name: 'game',
  id: uuidv4(),
  selected: false,
};

// Projects Data
export const projectsData: projectDataType[] = [
  {
    title: 'Rotation Text',
    desc: 'Rotating Text around an image',
    imgSrc: project1Image,
    imgAlt: 'mohamed shelf standing with iron man suit',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/abKrevV',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/abKrevV',
    tagsList: [HTMLTag, CSSTag, JSTag],
  },
  {
    title: 'Browser Welcomming Page',
    desc: `you can enter your name in this Page and your today's task & your info will be saved into localstorage.`,
    imgSrc: project2Image,
    imgAlt: 'mountains pic with text at the middle',
    demoLink: 'https://website-browser-welcomming-page.vercel.app/',
    codeLink:
      'https://github.com/MohamedSaid7102/website--browser-welcomming-page',
    tagsList: [HTMLTag, CSSTag, JSTag],
  },
  {
    title: 'Fancy Cursor Hover',
    desc: 'Fancy mouse hover effect, with only css image slider',
    imgSrc: project3Image,
    imgAlt: 'photo of a website',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/gOKNOpo',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/gOKNOpo',
    tagsList: [HTMLTag, CSSTag, JSTag],
  },
  {
    title: 'Before&After',
    desc: 'Before&After Image slider, with support for mobile swipes on.',
    imgSrc: project5Image,
    imgAlt: 'photo of a before & after image',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/abGVLpO',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/abGVLpO',
    tagsList: [HTMLTag, CSSTag, JSTag],
  },
  {
    title: `Google's Theme Switcher`,
    desc: 'Theme switch dark&light.',
    imgSrc: project6Image,
    imgAlt: 'photo of a theme switch',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/jOxxXZO',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/jOxxXZO',
    tagsList: [HTMLTag, CSSTag, JSTag],
  },
  {
    title: 'Mind Game',
    desc: 'Before&After Image slider, with support for mobile swipes on it.',
    imgSrc: project7Image,
    imgAlt: 'photo of a mind game cards',
    demoLink: 'https://codepen.io/mohamedsaid7102/full/xxPJqOz',
    codeLink: 'https://codepen.io/mohamedsaid7102/pen/xxPJqOz',
    tagsList: [HTMLTag, CSSTag, JSTag, GAMETag],
  },
  {
    title: 'Old Web Resume',
    desc: 'Web version Resume, This is an old one',
    imgSrc: project4Image,
    imgAlt: 'photo of a resume',
    demoLink: 'https://website-old-resume.vercel.app/',
    codeLink: 'https://github.com/MohamedSaid7102/website--old--resume',
    tagsList: [HTMLTag, CSSTag],
  },
];
