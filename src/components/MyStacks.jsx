import { FiArrowRight } from "react-icons/fi"; // Para la flecha


const tools = [
  {
    name: "Figma",
    description: "Interface Design Tool",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/500px-Figma-logo.svg.png",
    link: "https://www.figma.com/"
  },
  {
    name: "Microsoft Clarity",
    description: "User Study Behavior y CRO",
    icon: "https://store-images.s-microsoft.com/image/apps.29332.512b1d3d-80ec-4aec-83bb-411008d2f7cd.76371b6f-9386-463f-bfb0-b75cffb86a4f.bd99f4b1-b18e-4380-aa79-93768763c90d.png",
    link: "https://clarity.microsoft.com/"
},
  {
    name: "Notion",
    description: "Control de proyectos y productividad.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    link: "https://www.notion.com/es-es"
  },
  {
    name: "Slack",
    description: "Software comunicación de equipos.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
    link: "https://slack.com/intl/es-es/"
  },
  {
    name: "Adobe",
    description: "Software según necesidades",
    icon: "https://companieslogo.com/img/orig/ADBE-fb158b30.png?t=1740130206",
    link: "https://www.adobe.com/home"
  },
  {
    name: "Framer",
    description: "Software de Diseño No Code",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-framer-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-3-pack-logos-icons-3030143.png",
    link: "www.framer.com"
  },
  
  {
    name: "Visual Studio Code",
    description: "Sofware de programación.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    link: "https://code.visualstudio.com/"
  },
  {
    name: "GitHub",
    description: "Repositorios y features con IT.",
    icon: "https://img.icons8.com/m_sharp/512/FFFFFF/github.png",
    link: "www.github.com"
  },
];

const MyStacks = () => {
  return (
    <section className="my-stacks">
      <h2 className="title">Herramientas que impulsan mi flujo de trabajo</h2>
      <p className="subtitle">
        Un stack en constante evolución, enfocado en eficiencia, diseño intuitivo y desarrollo moderno.
    </p>

      <div className="tool-list">
        {tools.map((tool, index) => (
          <a
          key={index}
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-card"
        >
            <div className="tool-info">
              <img src={tool.icon} alt={tool.name} className="tool-icon" />
              <div>
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
              </div>
            </div>
            <FiArrowRight className="arrow-icon" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyStacks;
