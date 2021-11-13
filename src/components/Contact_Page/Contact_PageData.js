import Facebook from '../../images/Icon/SocialMediaBlue/Facebook.png';
import Instagram from '../../images/Icon/SocialMediaBlue/Instagram.png';
import Twitter from '../../images/Icon/SocialMediaBlue/Twitter.png';
import Whatssap from '../../images/Icon/SocialMediaBlue/Whatssap.png';

////Exporting Information
export const BackUrl = '';

export const Form = {
  title: 'Nous contacter',
  input: [
    {
      placeholder: 'Nom et prénoms',
      type: 'text',
      classReact: 'input',
      id: 'box1',
    },
    { placeholder: 'E-mail', type: 'mail', classReact: 'input', id: 'box2' },
    { placeholder: 'Télephone', type: 'tel', classReact: 'input', id: 'box3' },
    { placeholder: 'Message', type: '', classReact: 'area', id: 'box4' },
  ],
  buttonContent: 'Envoyé votre message',
};

export const Contacts = [
  { title: 'Télephone', content: '+241 77 88 00 00 9', id: 'x1' },
  { title: 'E-mail', content: 'Info@jcea.com', id: 'x3' },
  {
    title: 'Réseau social',
    self: 'self',
    id: 'x4',
    logo: [
      { link: '', src: Facebook },
      { link: '', src: Instagram },
      { link: '', src: Twitter },
      { link: '', src: Whatssap },
    ],
  },
];
