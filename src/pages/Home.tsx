import ProjectCarousel from "../components/ProjectCarousel";

const Home = () => {
  return (
    <>
      <div className="home-images">
        <img className="home-headshot" src="headshot.png" />
        <div className="overlay-text box">
          Welcome to my digital space!
          <br /> I'm Jack, a Toronto-based software developer
        </div>
      </div>
      <br />

      <ProjectCarousel />
    </>
  );
};
export default Home;
