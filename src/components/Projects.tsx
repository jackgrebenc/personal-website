interface Project {
  image: string;
  link: string;
  title: string;
  description: string;
}

//Page only needs a subset of Project props
export interface ProjectPage {
  title: string;
}

export const typingTest: Project = {
  image:
    "https://img.livestrong.com/-/photos.demandstudios.com/getty/article/217/10/183705123.jpg",
  link: "/typing-test",
  title: "Typing Test",
  description:
    "Browser based web app for testing words per minute on randomly generated text",
};

export const deepLearningCAE: Project = {
  image:
    "https://miro.medium.com/v2/resize:fit:900/1*jbfAi9yVWv7J4FtdwSZnpw.png",
  link: "/deep-learning-cae",
  title: "CAE Image Compression",
  description:
    "Convolutional autoencoder using YCbCr colour space for lossy image compression",
};

export const instrumentPricer: Project = {
  image:
    "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F492538%2Fstock-market-data-on-led-screen.jpg&op=resize&w=700",
  link: "/instrument-pricer",
  title: "Instrument Pricer",
  description: "Simulated instrument pricer using a q/kdb+ tick architecture",
};
export const Projects: Project[] = [
  typingTest,
  deepLearningCAE,
  instrumentPricer,
];
