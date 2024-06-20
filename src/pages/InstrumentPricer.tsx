import { Title } from "../components/Title";
import { ProjectPage } from "../components/Projects";

const InstrumentPricer = ({ title }: ProjectPage) => {
  const buttonIcons = [
    {
      imageName: "fa-brands fa-github",
      link: "https://github.com/jackgrebenc/Optimized-CAE-using-YCbCr-colour-space",
      newPage: true,
      size: "40px",
    },
  ];
  return (
    <div>
      <div className="headline">
        <Title title={title} buttonIcons={buttonIcons} />
      </div>
      <div className="box biography-box pt-3">
        <p>
          <b>Project Specifications</b>
          <br /> This project involves a customized TickerPlant (TP) developed
          in q/kdb+, tailored for pricing a pseudo financial instrument. The
          project utilizes a unique pricing formula that incorporates variables
          like interest rates, reference rates (such as Libor), notional
          principal amounts, and specific day-count conventions to calculate the
          price over a defined period. The system ingests data from three
          distinct mock feeds: a legacy system from Frankfurt delivering slow
          instrument feeds in a fixed-width string format supporting EUR, a
          high-throughput system from London outputting JSON-formatted data in
          GBP, and a static account data feed in CSV format that refreshes
          daily. <br />
          <br />
          The TickerPlant processes these feeds and forwards the data to the
          InstrumentPricer, which normalizes and merges the data before applying
          the pricing formula in each system's native currency. Subsequently,
          the CalcEngine process executes further calculations, such as Volume
          Weighted Average Price, making the results available for downstream
          applications and analysis.
        </p>
      </div>
      <div className="box biography-box pt-3">
        <p>
          <b>Background on Language</b>
          <br />
          Q/kdb+ is a high-performance column-oriented database with an
          integrated query language. It is designed for handling large datasets
          and is widely used in finance, particularly for high-frequency trading
          applications.
        </p>
      </div>
    </div>
  );
};

export default InstrumentPricer;
