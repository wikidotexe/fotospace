import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "Kami hadir untuk mempermudah hidup Anda dengan solusi penyimpanan cloud yang aman, praktis, dan fleksibel, sehingga file penting selalu bisa diakses kapan saja dan di mana saja.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Pricing",
      url: "#pricing",
    },
    // {
    //   text: "Testimonials",
    //   url: "#testimonials",
    // },
  ],
  email: "info@fotospace.my.id",
  telephone: "0895330931423",
  socials: {
    // // github: 'https://github.com',
    // // x: 'https://twitter.com/x',
    // twitter: "https://twitter.com/Twitter",
    // facebook: "https://facebook.com",
    // // youtube: 'https://youtube.com',
    // linkedin: "https://www.linkedin.com",
    // tiktok: "https://www.tiktok.com",
    // // threads: 'https://www.threads.net',
    instagram: "#",
  },
};
