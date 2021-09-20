import { images } from '../../constants';
import { ScreenNames } from '../screenNames';
import { facebookUrl, instagramUrl, pinterestUrl, twitterUrl, youtubeUrl } from './links';

export interface IFooterData {
    id: string;
    title: string;
    route?: string;
    children: IFooterChildData[];
}   

export interface IFooterChildData {
    id: string;
    name: string;
    link?: string;
    onPress?: string;
}


export const footerData : IFooterData[]= [
  {
    id: 'F1',
    title: 'Preferred Customer Program',
    children: [
      {
        id: 'F11C',
        name: 'Become a Customer',
        link: 'https://shop.senegence.com/en-ca/',
      },
      {
        id: 'F12C',
        name: 'Find a Distributor',
        link: 'https://www.senegence.com/senegence/find_distributor.aspx?culture=en-CA',
      },
    ],
  },
  {
    id: 'F2',
    title: 'DISTRIBUTORS',
    children: [
      {
        id: 'F21C',
        name: 'Start a Business',
        link: 'https://seneweb.senegence.com/ca/career/',
      },
      {
        id: 'F22C',
        name: 'Startup Program',
        link: '',
      },
      {
        id: 'F23C',
        name: 'Distributor Login',
        link: 'http://integration-5ojmyuq-yhtn2v2qno5pk.us-a1.magentosite.cloud/distributor-login',
      },
    ],
  },
  {
    id: 'F3',
    title: 'About Us',
    route: ScreenNames.AboutUs,
    children: [
      {
        id: 'F31C',
        name: 'Meet the Founder',
        link: 'https://seneweb.senegence.com/ca/meet-the-founder/',
      },
      {
        id: 'F32C',
        name: 'Executive Management Team',
        onPress: ScreenNames.ExecutiveManagementTeam,
      },
      {
        id: 'F33C',
        name: 'Non-Profit Foundation',
        link: 'https://seneweb.senegence.com/us/company/non-profit-foundation/',
      },
      {
        id: 'F34C',
        name: 'Press',
        link: 'https://seneweb.senegence.com/ca/in-the-media/press-releases/',
      },
      {
        id: 'F35C',
        name: 'Contact Us',
        link: 'https://seneweb.senegence.com/ca/contact/',
      },
    ],
  },
  {
    id: 'F4',
    title: 'Blog',
    children: [
      {
        id: 'F41C',
        name: 'Beauty',
        link: 'https://blogsbysenegence.com/category/beauty/',
      },
      {
        id: 'F42C',
        name: 'Skincare',
        link: 'https://blogsbysenegence.com/category/skincare/',
      },
      {
        id: 'F43C',
        name: 'Business Building',
        link: 'https://blogsbysenegence.com/category/business-building/',
      },
      {
        id: 'F44C',
        name: 'Features',
        link: 'https://blogsbysenegence.com/category/features/',
      },
      {
        id: 'F45C',
        name: 'Lifestyle',
        link: 'https://blogsbysenegence.com/category/lifestyle/',
      },
      {
        id: 'F46C',
        name: 'About Us',
        link: 'https://blogsbysenegence.com/category/about-us/',
      }
    ],
  },
];


export interface IFooterSocialIcons {
    id: string;
    icon: any;
    link: string;
}

export const footerSocialIcons: IFooterSocialIcons[] = [
    {
        id: "facebook",
        link: facebookUrl,
        icon: images.facebook
    },
    {
        id: "twitter",
        link: twitterUrl,
        icon: images.twitter
    },
    {
        id: "instagram",
        link: instagramUrl,
        icon: images.instagram
    },
    {
        id: "pinterest",
        link: pinterestUrl,
        icon: images.pinterest
    },
    {
        id: "youtube",
        link: youtubeUrl,
        icon: images.youtube
    },
]