import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hello, I am Yash. currently pursuing my B.Tech in Information Technology at
              P P Savani University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Web & App Development / Artificial Intelligence / Neural Network"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "I'm looking for a internship. I'm open to Work on projects."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tibadiyayash@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                tibadiyayash@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Yash-Tibadiya"
                target="_blank"
                rel="noreferrer"
              >
                @Yash-Tibadiya
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/yash-tibadiya-51a972249"
                target="_blank"
                rel="noreferrer"
              >
                Yash-Tibadiya
              </a>
            </li>
            <li>
              X:{" "}
              <a
                className="text-blue-300"
                href="https://x.com/Yash_Tibadiya"
                target="_blank"
                rel="noreferrer"
              >
                @Yash_Tibadiya
              </a>
            </li>
            <li>
              Figma:{" "}
              <a
                className="text-blue-300"
                href="https://www.figma.com/@yash_tibadiya"
                target="_blank"
                rel="noreferrer"
              >
                @yash_tibadiya
              </a>
            </li>
            <li>
              Bento:{" "}
              <a
                className="text-blue-300"
                href="https://bento.me/yash-1434"
                target="_blank"
                rel="noreferrer"
              >
                yash-1434
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
