import { Title } from "../components/Title";
import { ProjectPage } from "../components/Projects";

const InstrumentPricer = ({ title }: ProjectPage) => {
  const buttonIcons = [
    {
      imageName: "fa-brands fa-github",
      link: "https://github.com/jackgrebenc/Optimized-CAE-using-YCbCr-colour-space",
      newPage: true,
    },
  ];
  return (
    <div>
      <div className="headline">
        <Title title={title} buttonIcons={buttonIcons} />
      </div>
      <div className="box biography-box pt-3">
        <p>Put Instrument Pricer info here</p>
      </div>
    </div>
  );
};

export default InstrumentPricer;
