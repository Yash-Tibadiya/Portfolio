import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:user",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "plura",
        title: "Plura",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/Plura/main/README.md",
        icon: "i-fa-solid:fire",
        excerpt: "A SaaS Website Builder, Project...",
        link: "https://github.com/Yash-Tibadiya/Plura"
      },
      {
        id: "portfolio",
        title: "Portfolio",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/Portfolio/main/README.md",
        icon: "i-fa-solid:briefcase",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/Yash-Tibadiya/Portfolio"
      },
      {
        id: "community",
        title: "Community",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/Community/main/README.md",
        icon: "i-fa-solid:globe",
        excerpt: "This project focuses on the development of versatile community...",
        link: "https://github.com/Yash-Tibadiya/Community"
      },
      {
        id: "memories",
        title: "Memories",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/Memories/main/README.md",
        icon: "i-fa-solid:memory",
        excerpt: "I created fully responsive FullStack or MERN Stack Social Media...",
        link: "https://github.com/Yash-Tibadiya/Memories"
      },
      {
        id: "fileflex",
        title: "FileFlex",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/FileFlex/main/README.md",
        icon: "i-fa-solid:file",
        excerpt: "Introducing FileFlex - your go-to online tool...",
        link: "https://github.com/Yash-Tibadiya/FileFlex"
      },
      {
        id: "discord-free-storage",
        title: "Free-Storage",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/discord-free-storage/main/README.md",
        icon: "i-fa-solid:database",
        excerpt: "This project is a Flask-based web application designed for...",
        link: "https://github.com/Yash-Tibadiya/discord-free-storage"
      },
      {
        id: "brainwave",
        title: "Brainwave",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/Brainwave-React/main/README.md",
        icon: "i-fa-solid:brain",
        excerpt: "Brainwave is a Modern UI/UX website, developed using React.js and...",
        link: "https://github.com/Yash-Tibadiya/Brainwave-React"
      },
      {
        id: "quill",
        title: "Quill",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/quill/main/README.md",
        icon: "i-fa-solid:file-pdf",
        excerpt: "This is a Python-based web application that allows users to...",
        link: "https://github.com/Yash-Tibadiya/quill"
      },
      {
        id: "2048",
        title: "2048",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/2048-game/main/README.md",
        icon: "i-fa-solid:gamepad",
        excerpt: "This is a simple implementation of the 2048 game using...",
        link: "https://github.com/Yash-Tibadiya/2048-game"
      },
      {
        id: "makepill",
        title: "Makepill",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/makepill/main/README.md",
        icon: "i-fa-solid:capsules",
        excerpt: "Welcome to the Makepill Website, a modern, visually appealing...",
        link: "https://github.com/Yash-Tibadiya/makepill"
      },
      {
        id: "yeti-login",
        title: "Yeti-Login",
        file: "https://raw.githubusercontent.com/Yash-Tibadiya/Yeti-Login/main/README.md",
        icon: "i-fa-solid:key",
        excerpt: "A modern and animated login form designed to provide a sleek user...",
        link: "https://github.com/Yash-Tibadiya/Yeti-Login"
      }
    ]
  }
];

export default bear;
