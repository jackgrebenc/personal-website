import { Title } from "../components/Title";

function About() {
  return (
    <div>
      <div className="headline">
        <Title title="About" />
      </div>
      <div className="box biography-box pt-3">
        <p>My name is Jack Grebenc and this is my website.</p>
      </div>
    </div>
  );
}
export default About;
