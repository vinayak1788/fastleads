import { Facebook, LinkedIn, Instagram, Twitter } from "@mui/icons-material";

export const platformColors = {
  facebook: "#1877F2",
  twitter: "#1DA1F2",
  linkedin: "#0A66C2",
  instagram: "#E4405F",
};

export const feedItems = [
  {
    id: 1,
    platform: "linkedin",
    platformIcon: <LinkedIn sx={{ color: platformColors.linkedin }} />,
    user: "Kateryna Luibinskaya",
    time: "16h",
    content: "Hello, I am looking for a new career opportunity and would appreciate your support.",
    avatar: "/avatars/linkedin-avatar.jpg",
  },
  {
    id: 2,
    platform: "facebook",
    platformIcon: <Facebook sx={{ color: platformColors.facebook }} />,
    user: "Gen AI",
    time: "20 Jan",
    content: "InnovateAI is a cutting-edge technology firm specializing in artificial intelligence solutions.",
    avatar: "/avatars/facebook-avatar.jpg",
  },
  {
    id: 3,
    platform: "twitter",
    platformIcon: <Twitter sx={{ color: platformColors.twitter }} />,
    user: "Gen AI",
    time: "6d",
    content: "Our mission is to harness the power of AI to transform businesses and improve decision-making.",
    avatar: "/avatars/twitter-avatar.jpg",
  },
  {
    id: 4,
    platform: "instagram",
    platformIcon: <Instagram sx={{ color: platformColors.instagram }} />,
    user: "Gen_Ai",
    time: "3d",
    content: "Explore the latest innovations in AI technology and how it's shaping the future!",
    avatar: "/avatars/instagram-avatar.jpg",
  }
];
