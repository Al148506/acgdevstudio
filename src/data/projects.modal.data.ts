import videogamestore from "../images/videogameStore.png";
import inventorysystem from "../images/InventoryPage.png";
import chataisystem from "../images/ConversationLuke.png";
import moviessystem from "../images/Movies.png";
import inredtelecom from "../images/Inredtelecom/01HomePage.png"
import landingPageMartha from "../images/LandingPageMartha/01HomePage.png";
import pomodoroSempai from "../images/Pomodoro.png";
export interface ProjectModalData {
  id: string;
  titleKey: string;
  image: string;
  objectiveKey: string;
  technologies: string[];
  challengesKey: string;
  learningKey: string;
}

export const projectsModalData: ProjectModalData[] = [
  {
    id: "videogame-store",
    titleKey: "projectsSection.videogameStore.title",
    image: videogamestore,
    objectiveKey: "projectsSection.videogameStore.objective",
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Bootstrap",
      "Authentication & Authorization",
    ],

    challengesKey: "projectsSection.videogameStore.challenges",
    learningKey: "projectsSection.videogameStore.learning",
  },

  {
    id: "inventory-system",
    titleKey: "projectsSection.inventorySystem.title",
    image: inventorysystem,
    objectiveKey: "projectsSection.inventorySystem.objective",
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Razor Views",
      "Bootstrap",
    ],

    challengesKey: "projectsSection.inventorySystem.challenges",
    learningKey: "projectsSection.inventorySystem.learning",
  },

  {
    id: "chat-ai",
    titleKey: "projectsSection.chatAi.title",
    image: chataisystem,
    objectiveKey: "projectsSection.chatAi.objective",
    technologies: [
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "RESTful APIs",
      "Azure Deployment",
    ],

    challengesKey: "projectsSection.chatAi.challenges",
    learningKey: "projectsSection.chatAi.learning",
  },

  {
    id: "cinema-system",
    titleKey: "projectsSection.cinemaSystem.title",
    image: moviessystem,
    objectiveKey: "projectsSection.cinemaSystem.objective",
    technologies: [
      "Angular",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
    ],

    challengesKey: "projectsSection.cinemaSystem.challenges",
    learningKey: "projectsSection.cinemaSystem.learning",
  },
    {
    id: "inredtelecom",
    titleKey: "projectsSection.inredtelecom.title",
    image: inredtelecom,
    objectiveKey: "projectsSection.inredtelecom.objective",
    technologies: [
      "React",
      "Vite",
      "CSS",
      "Vercel",
    ],

    challengesKey: "projectsSection.inredtelecom.challenges",
    learningKey: "projectsSection.inredtelecom.learning",
  },
  {
    id: "martha-garcia-portfolio",
    titleKey: "projectsSection.martha-garcia-portfolio.title",
    image: landingPageMartha,
    objectiveKey: "projectsSection.martha-garcia-portfolio.objective",
    technologies: [
      "React",
      "Vite",
      "CSS",
      "Vercel",
    ],

    challengesKey: "projectsSection.martha-garcia-portfolio.challenges",
    learningKey: "projectsSection.martha-garcia-portfolio.learning",
  },
  {
    id: "kawaii-task-planner",
    titleKey: "projectsSection.kawaii-task-planner.title",
    image: pomodoroSempai,
    objectiveKey: "projectsSection.kawaii-task-planner.objective",
    technologies: [
      "React",
      "Vite",
      "CSS",
      "Vercel",
    ],

    challengesKey: "projectsSection.kawaii-task-planner.challenges",
    learningKey: "projectsSection.kawaii-task-planner.learning",
  }
];
