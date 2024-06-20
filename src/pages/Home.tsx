import ProjectCarousel from "../components/ProjectCarousel";

const Home = () => {
  return (
    <>
      <ProjectCarousel />
      <div className="home-screen">
        <img className="home-headshot" src="headshot.png" />
        <div className="home-box box biography-box">
          <b>Welcome</b>
          <br />
          My name is Jack and I am a Toronto based Software Developer.
          <br />
          <br />I have highlighted three projects showcasing some of my skills.
          These can be viewed via the carousel at the top of this page or by
          using the Navigation Bar.
          <br />
          <br />
          Thank you for visiting my website.
        </div>
      </div>
    </>
  );
};
export default Home;
