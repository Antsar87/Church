import Logo from '../../images/Logo/LogoALT.png';

import Facebook from '../../images/Icon/SocialMedia/Facebook.png';
import Instagram from '../../images/Icon/SocialMedia/Instagram.png';
import Twitter from '../../images/Icon/SocialMedia/Twitter.png';
import Whatssap from '../../images/Icon/SocialMedia/Whatssap.png';

//Contact
import Mail from '../../images/Icon/Contact/Mail.png';
import Phone from '../../images/Icon/Contact/Phone.png';

////

///Live
import IconLive from '../../images/Icon/Icon_Header/LIVE.png';

//Exporting Data

export const Main = {
  Logo,
  Title: 'Suivez-nous sur les réseaux !',
  SocialMedia: [
    { img: Facebook, link: '', alt: 'Facebook' },
    { img: Instagram, link: '', alt: 'Instagram' },
    { img: Twitter, link: '', alt: 'Twitter' },
    { img: Whatssap, link: '', alt: 'Whatssap' },
  ],
};

///// Menu

export const Menu = 'Menu';

//// Contact

export const Contact = {
  Title: 'Á propos de nous',
  Content: 'Contactez-nous',
  Information: [
    { img: Mail, content: 'info@jcea.org', alt: 'Mail' },
    { img: Phone, content: '002421 77 80 15 13', alt: 'Phone' },
  ],
};

///
export const ButtonInformation = {
  IconLive,
  Link: '',
  Content: 'Live streaming',
};
