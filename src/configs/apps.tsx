import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "finder",
    title: "Finder",
    desktop: true,
    width: 860,
    height: 500,
    show: true,
    y: -40,
    img: "img/icons/Finder.png",
    content: <Bear />
  },
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad3.png"
  },
  {
    id: "typora",
    title: "Typora",
    desktop: true,
    width: 600,
    height: 580,
    y: -20,
    img: "img/icons/typora.png",
    content: <Typora />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    x: -20,
    img: "img/icons/safari2.png",
    content: <Safari />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    img: "img/icons/facetime.png",
    width: 500 * 1.7,
    height: 500 + appBarHeight,
    minWidth: 350 * 1.7,
    minHeight: 350 + appBarHeight,
    aspectRatio: 1.7,
    x: -80,
    y: 20,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: "img/icons/terminal2.png",
    content: <Terminal />
  },
  {
    id: "playground",
    title: "Playground",
    desktop: true,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    x: -20,
    img: "img/icons/playground.png",
    content: <Playground />
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github2.png",
    link: "https://github.com/Yash-Tibadiya/Portfolio"
  }
];

export default apps;
