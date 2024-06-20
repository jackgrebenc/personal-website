import ProjectCarousel from "../components/ProjectCarousel";
import nameBlink from "../assets/nameBlink.gif";
const Home = () => {
  return (
    <>
      <div className="home-images">
        <img className="home-headshot" src="headshot.png" />
        <div className="overlay-text box">Welcome to my website!</div>
      </div>
      <br />

      <ProjectCarousel />
    </>
  );
};
export default Home;
