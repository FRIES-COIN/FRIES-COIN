import {
  IconTreadmill,
  IconArtboard,
  IconCameraBitcoin,
  IconProps,
  Icon,
} from "@tabler/icons";

import { FaRunning, FaCamera } from "react-icons/fa";
import { RiArtboard2Fill } from "react-icons/ri";

import {
  f_avatar2,
  f_avatatar1,
  m_avatar1,
  m_avatar2,
  podcast1,
  podcast2,
  podcast3,
  podcast4,
} from "./index";

interface Host {
  name: string;
  career: string;
  age: number;
  image: string;
}

interface Guest extends Host {
  company: string;
  skillSet: string[];
}

export interface Podcast {
  title: string;
  description: string;
  duration: Time;
  bannerImage: string;
  host: Host;
  guest: Guest;
  series?: string;
  episode?: number;
  releaseDate?: string;
}
interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

interface Author extends Guest {}

interface Blog {
  id: string;
  title: string;
  author: Author;
  readTime: Time;
  content: string;
  topics: string[];
  likes: number;
  reads: number;
  series: string;
  banner: string;
  publish: number;
}

export interface Topic {
  seriesName: "The First Mile" | "On the Block" | "The Art of Blockchain";
  podcasts: Podcast[];
  blogs: Blog[];
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  bgColor: string;
  textColor: string;
}

export const podcasts: Podcast[] = [
  {
    title: "Why the First Mile is like Monday Morning",
    description:
      "In this episode, we talk about the first mile and how it is like Monday morning. We discuss the importance of starting strong and how it can set the tone for the rest of the day.",
    duration: {
      hours: 0,
      minutes: 39,
      seconds: 40,
    },
    bannerImage: podcast1,
    host: {
      name: "Sylus Abel",
      career: "Software Developer",
      age: 22,
      image: m_avatar2,
    },
    guest: {
      name: "Lilly Smith",
      career: "Product Manager",
      age: 25,
      image: m_avatar1,
      company: "ChainLink",
      skillSet: ["Agile", "Scrum", "Kanban"],
    },
    series: "The First Mile",
    episode: 1,
    releaseDate: "2025-02-14",
  },
  {
    title: "Exploring Digital Art, Collectibles, and Culture.",
    description:
      "In this episode, we explore the world of digital art, collectibles, and culture. We discuss the impact of digital art on the art world and how it is changing the way we view art.",
    duration: {
      hours: 0,
      minutes: 35,
      seconds: 39,
    },
    bannerImage: podcast2,
    host: {
      name: "Extra Sauce",
      career: "Software Developer",
      age: 32,
      image: m_avatar2,
    },
    guest: {
      name: "Dancun Moore",
      career: "Software Developer",
      age: 36,
      image: m_avatar1,
      company: "Agix",
      skillSet: ["GO", "Solidity", "Rust"],
    },
    series: "On the Block",
    episode: 1,
    releaseDate: "2025-02-19",
  },
  {
    title: "Stories, Insights, and Trends from the NFT World.",
    description:
      "In this episode, we share stories, insights, and trends from the NFT world. We discuss the latest news and developments in the NFT space and how it is changing the way we create, share, and own digital assets.",
    duration: {
      hours: 0,
      minutes: 30,
      seconds: 55,
    },
    bannerImage: podcast4,
    host: {
      name: "Chriss",
      career: "Software Developer",
      age: 29,
      image: f_avatatar1,
    },
    guest: {
      name: "Allan Dwight",
      career: "Backend Engineer",
      age: 25,
      image: m_avatar2,
      company: "Synthetix",
      skillSet: ["Node.js", "Express", "Rust"],
    },
    series: "On the Block",
    episode: 2,
    releaseDate: "2025-02-24",
  },
  {
    title: "Why the First Mile is like Monday Morning",
    description:
      "In this episode, we talk about the first mile and how it is like Monday morning. We discuss the importance of starting strong and how it can set the tone for the rest of the day.",
    duration: {
      hours: 0,
      minutes: 39,
      seconds: 40,
    },
    bannerImage: podcast1,
    host: {
      name: "Sylus Abel",
      career: "Software Developer",
      age: 22,
      image: m_avatar2,
    },
    guest: {
      name: "Lilly Smith",
      career: "Product Manager",
      age: 25,
      image: m_avatar1,
      company: "ChainLink",
      skillSet: ["Agile", "Scrum", "Kanban"],
    },
    series: "The First Mile",
    episode: 1,
    releaseDate: "2025-02-14",
  },
];

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Art of Showing Up, For Developers",
    author: {
      name: "Adrian Msubi",
      career: "Software Developer & Fitness Enthusiat",
      age: 30,
      image: f_avatatar1,
      company: "Guilx",
      skillSet: ["Typescript", "React", "Rust", "Solidity"],
    },
    readTime: {
      hours: 0,
      minutes: 7,
      seconds: 0,
    },
    content: "",
    topics: ["Well-Being", "Motivational", "Software Engineering"],
    likes: 366,
    reads: 1089,
    series: "The First Mile",
    publish: 1,
    banner: "",
  },
  {
    id: "2",
    title: "Why Digital Art will be the Gold of Cyber World",
    author: {
      name: "0xsylus Abel",
      career: "Software Developer",
      age: 22,
      image: m_avatar1,
      company: "FRYS",
      skillSet: ["Typescript", "React", "GO", "Solidity"],
    },
    readTime: {
      hours: 0,
      minutes: 8,
      seconds: 0,
    },
    content: "",
    topics: ["NFTs", "Future Tech", "Software Engineering", "Engineering"],
    likes: 66,
    reads: 108,
    series: "On the Block",
    publish: 1,
    banner: "",
  },
  {
    id: "3",
    title: "How I landed my first Web3 Job",
    author: {
      name: "Mercy King",
      career: "Frontend Developer",
      age: 30,
      image: f_avatar2,
      company: "ENS",
      skillSet: ["Typescript", "React", "Swift", "Java"],
    },
    readTime: {
      hours: 0,
      minutes: 12,
      seconds: 0,
    },
    content: "",
    topics: ["Jobs", "Software Engineering"],
    likes: 3066,
    reads: 10892,
    series: "The First Mile",
    publish: 2,
    banner: "",
  },
  {
    id: "4",
    title: "Run Now, Complain Later, My Life Moto",
    author: {
      name: "John Frie",
      career: "Software Developer",
      age: 30,
      image: f_avatatar1,
      company: "Synthetix",
      skillSet: ["Typescript", "React", "Rust", "Solidity"],
    },
    readTime: {
      hours: 0,
      minutes: 5,
      seconds: 0,
    },
    content: "",
    topics: ["Well-Being", "Motivational", "GRIT"],
    likes: 36,
    reads: 89,
    series: "The First Mile",
    publish: 3,
    banner: "",
  },
];

export const topics: Topic[] = [
  {
    seriesName: "The First Mile",
    podcasts: [podcasts[0]],
    blogs: [blogs[1], blogs[0]],
    icon: IconTreadmill,
    bgColor: "#EDD9B8",
    textColor: "#000",
  },
  {
    seriesName: "On the Block",
    podcasts: [podcasts[1]],
    blogs: [blogs[2], blogs[3]],
    icon: IconArtboard,
    bgColor: "#E2DBEC",
    textColor: "#000",
  },
  {
    seriesName: "The Art of Blockchain",
    podcasts: [],
    blogs: [],
    icon: IconCameraBitcoin,
    bgColor: "#232223",
    textColor: "#fff",
  },
];
