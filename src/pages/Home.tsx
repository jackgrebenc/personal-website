import ProjectCarousel from "../components/ProjectCarousel";

const Home = () => {
  return (
    <div className="home-images">
      <img className="home-background" src="background.jpg" />
      <img className="home-headshot" src="headshot.png" />
      <div className="overlay-text box">
        Welcome to my digital space!
        <br /> I'm Jack, a Toronto-based software developer
      </div>
      <ProjectCarousel />
    </div>
  );
};
export default Home;
