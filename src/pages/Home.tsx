import ProjectTiles from "../components/ProjectTiles";
import { Projects } from "../components/Projects";

function Home() {
  return (
    <div>
      <h1 className="title">Jack Grebenc</h1>
      <div className="box biography-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis
          dui, congue at lacus eget, dapibus lobortis quam. Suspendisse aliquam
          mi in nibh ornare accumsan. Vestibulum semper semper pulvinar. Cras
          nec neque libero. Quisque lacinia odio felis. Maecenas pharetra
          malesuada facilisis. Quisque id leo in ante pellentesque mollis. Duis
          sed justo felis. Integer vestibulum est in risus placerat, eget tempus
          enim dapibus. Vivamus vulputate, mi non pulvinar rutrum, sem dui
          placerat elit, vel laoreet sem nibh sit amet est. Sed sed urna
        </p>
        <p>
          ultrices, hendrerit purus a, accumsan diam. Curabitur tincidunt dui
          sit amet tincidunt sagittis. Quisque luctus ligula in nisl pharetra,
          eu porttitor justo imperdiet. Morbi ex enim, sollicitudin nec tempor
          ut, ornare a ante. Nunc id dolor erat. Proin ex orci, ornare in mollis
          vel, porta a eros. Praesent vitae est elementum, condimentum augue ac,
          interdum leo. Aenean non purus nec leo efficitur vehicula vel eu
          libero. Ut eu enim magna. Nam sollicitudin posuere massa, nec mollis
          est efficitur eu. Fusce vehicula nibh vitae velit mattis, quis
          fringilla urna tempus. Quisque felis sem, dapibus consectetur metus
          ut, rutrum maximus ex. Ut nunc mi, laoreet non tempus vitae, ornare
          vitae ex. Fusce hendrerit arcu at quam pellentesque accumsan. Sed sed
          nisl diam. Maecenas porttitor porta luctus. In non aliquam neque, eget
          faucibus nibh. Vestibulum ultricies ligula eu augue ornare finibus.
          Pellentesque consectetur blandit odio, ut pharetra arcu volutpat sed.
          Cras commodo, dolor vel luctus gravida, ipsum dui ullamcorper arcu,
          efficitur sodales velit lorem eget urna.
        </p>
      </div>
      <div className="d-block">
        {Projects.map((item) => (
          <span className="p-2">
            <ProjectTiles
              image={item.image}
              link={item.link}
              title={item.title}
            ></ProjectTiles>
          </span>
        ))}
      </div>
    </div>
  );
}
export default Home;
