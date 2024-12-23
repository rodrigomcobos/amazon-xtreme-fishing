import AboutMenuImg from '../../assets/images/aboutmenuimg.png';
import DestinationsMenuImg from '../../assets/images/destinationsmenuimg.png';
import ExperienceMenuImg from '../../assets/images/experiencemenuimg.png';
import SpeciesMenuImg from '../../assets/images/speciesmenuimg.png';
import GalleryMenuImg from '../../assets/images/gallerymenuimg.png';

export const menuItems = {
  About: {
    items: [
      { name: 'About Us', path: '/about-us' },
      { name: 'Welcome', path: '/welcome' },
      { name: 'Experience The Amazon', path: '/experience-the-amazon' },
      { name: 'Meet Your Host', path: '/meet-your-host' },
    ],
    image: AboutMenuImg,
    alt: 'About Us in the Amazon',
  },
  Destinations: {
    items: [
      { name: 'Our Destinations', path: '/destinations' },
      { name: 'The Zaltan Mothership', path: '/zaltan-mothership' },
      { name: 'The Zaltan Lodge', path: '/zaltan-lodge' },
      { name: 'Eco Lodge', path: '/ecolodge' },
      { name: 'Xingu Reservation', path: '/xingu' },
      { name: 'Headwaters Safari Camp', path: '/headwaters-camp' },
      { name: 'Peacock Bass Expeditions', path: '/peacock-bass-expeditions' },
    ],
    image: DestinationsMenuImg,
    alt: 'Our Amazon Destinations',
  },
  Experience: {
    items: [
      { name: 'Experience The Amazon', path: '/experience' },
      { name: 'Getting There', path: '/getting-there' },
      { name: 'Lures & Tackle', path: '/lures-and-tackle' },
      { name: 'Passport & Visa', path: '/passport-and-visa' },
      { name: 'Travel Insurance', path: '/travel-insurance' },
      { name: 'Why Us', path: '/why-us' },
      { name: 'FAQs', path: '/faq' },
    ],
    image: ExperienceMenuImg,
    alt: 'Amazon Experience',
  },
  Species: {
    items: [
      { name: 'All Fish Species', path: '/species' },
      { name: 'Peacock Bass', path: '/species/peacock-bass' },
      { name: 'Red Tail Catfish', path: '/species/red-tail-catfish' },
      { name: 'Goliath Catfish', path: '/species/goliath-catfish' },
      { name: 'Arapaima', path: '/species/arapaima' },
      { name: 'Piranha Species', path: '/species/piranha' },
      { name: 'Traira', path: '/species/traira' },
      { name: 'Arowana', path: '/species/arowana' },
      { name: 'Payara', path: '/species/payara' },
      { name: 'Giant Oscar', path: '/species/giant-oscar' },
      { name: 'Needle Jaw', path: '/species/needle-jaw' },
      { name: 'Aracu', path: '/species/aracu' },
      { name: 'Pacu', path: '/species/pacu' },
      { name: 'Bodo', path: '/species/bodo' },
      { name: 'Sorubim', path: '/species/sorubim' },
      { name: 'Tambaqui', path: '/species/tambaqui' },
    ],
    image: SpeciesMenuImg,
    alt: 'Amazon Fish Species',
  },
  Gallery: {
    items: [
      { name: 'Pictures', path: '/pictures' },
      { name: 'Videos', path: '/videos' },
    ],
    image: GalleryMenuImg,
    alt: 'Amazon Gallery',
  },
};
