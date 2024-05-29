import {
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  yourlogo,
} from "../assets";
import Ben1 from '../assets/benefits/Ben1.png';
import Ben2 from '../assets/benefits/Ben2.png';
import Ben3 from '../assets/benefits/Ben3.png';
import back1 from '../assets/benefits/card-1.svg';
import back2 from '../assets/benefits/card-2.svg';
import back3 from '../assets/benefits/card-3.svg';
import GC1 from '../assets/GC1.png';
import GC2 from '../assets/GC2.jpg';
import GC3 from '../assets/GC3.jpg';
export const news = [
  {
    id: "0",
    ImgUrl: GC3,
  },
  {
    id: "1",
    ImgUrl: GC2,
  },
  {
    id: "2",
    ImgUrl: GC1,
  }
];

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#Home",
  },
  {
    id: "1",
    title: "News",
    url: "#News",
  },
  // {
  //   id: "2",
  //   title: "Program",
  //   url: "#Program",
  // },
  {
    id: "3",
    title: "About Us",
    url: "#AboutUs",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#ContactUs",
  }
];

export const heroIcons = [
  {
    id:"0",
    url:homeSmile,
    text:"+250"
  }, 
  {
    id:"1",
    url:file02,
    text:"+250"
    
  }, 
  {
    id:"2",
    url:searchMd,
    text:"+250"
    
  }, 
  {
    id:"3",
    url:plusSquare,
    text:"+250"
  }
];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  }
];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "GAME DEV Workshops",
    text: "Organize interactive workshops addressing pivotal themes in game development, offering insights into vital facets of game design, coding, and artistic innovation.",
    backgroundUrl: back1,
    iconUrl: Ben1,
  },
  {
    id: "1",
    title: "Creativity",
    text: "Promote an atmosphere conducive to creativity and imagination, where participants are encouraged to exchange ideas freely.",
    backgroundUrl: back2,
    iconUrl: Ben2,
    light: true,
  },
  {
    id: "2",
    title: "Communication",
    text: "Provides an opportunity to connect with various stakeholders in the game development industry and immerse oneself in the vibrant community.",
    backgroundUrl: back3,
    iconUrl: Ben3,
  }
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/ieee_cs_chapter_ensi/",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=61557709142103",
  },
];
