interface Project {
  image: string;
  link: string;
  title: string;
  description: string;
}

//Page only needs a subst of Project props
export interface ProjectPage {
  title: string;
}

export const typingTest: Project = {
  image:
    "https://as2.ftcdn.net/v2/jpg/01/07/15/57/1000_F_107155766_OWfm9pfbU8xCEFDkhbXYjNAQomqddULr.jpg",
  link: "/typing-test",
  title: "Typing Test",
  description: "Typing Test Description",
};

export const deepLearningCAE: Project = {
  image:
    "https://miro.medium.com/v2/resize:fit:900/1*jbfAi9yVWv7J4FtdwSZnpw.png",
  link: "/deep-learning-cae",
  title: "CAE Image Compression",
  description: "Deep Learning CAE Description",
};

export const finInstrumentPricer: Project = {
  image:
    "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F492538%2Fstock-market-data-on-led-screen.jpg&op=resize&w=700",
  link: "/fin-instrument-pricer",
  title: "Instrument Pricer",
  description: "Instrument Pricer Description",
};
export const Projects: Project[] = [
  typingTest,
  deepLearningCAE,
  finInstrumentPricer,
];
