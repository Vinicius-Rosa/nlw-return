import bugImg from "../assets/images/bug.svg";
import ideaImg from "../assets/images/idea.svg";
import thoughtImg from "../assets/images/thought.svg";

export const FEEDBACK_TYPES = {
    BUG: {
      title: "Problema",
      image: {
        source: bugImg,
        alt: "Imagem de um inseto",
      },
    },
    IDEA: {
      title: "Ideia",
      image: {
        source: ideaImg,
        alt: "Imagem de uma lâmpada",
      },
    },
    OTHER: {
      title: "Outro",
      image: {
        source: thoughtImg,
        alt: "Imagem de uma nuvem de pensamento",
      },
    },
  };
  