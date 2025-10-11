// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Some projects I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-ubc-vancouver",
              title: "UBC Vancouver",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ubc/";
              },
            },{id: "dropdown-eth-zurich",
              title: "ETH Zurich",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/eth/";
              },
            },{id: "experiences-robotics-engineer-avestec",
          title: 'robotics engineer @ avestec',
          description: "",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/avestec/";
            },},{id: "experiences-robotics-engineer-insporos",
          title: 'robotics engineer @ insporos',
          description: "",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/insporos/";
            },},{id: "experiences-quantitative-energy-analyst-powerex",
          title: 'quantitative energy analyst @ powerex',
          description: "",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/powerex/";
            },},{id: "projects-rf-box",
          title: 'RF Box',
          description: "UBC Capstone Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/capstone1/";
            },},{id: "projects-multiagent-rl-project",
          title: 'Multiagent RL project',
          description: "UBC Capstone Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/capstone2/";
            },},{id: "projects-autonomous-racing-robot",
          title: 'Autonomous Racing Robot',
          description: "1st Place Winner.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/enph253/";
            },},{id: "projects-self-navigating-ml-agent",
          title: 'Self Navigating ML Agent',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/enph353/";
            },},{id: "projects-self-navigating-spaceship",
          title: 'Self Navigating Spaceship',
          description: "ETH pdm4ar",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eth_pdm1/";
            },},{id: "projects-lane-switching",
          title: 'Lane Switching',
          description: "ETH pdm4ar",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eth_pdm2/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%65%6C%69%70%65%67%61%72%61%76%65%6C%6C%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pepogara", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/felipegaravelli", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
