import { ProjectPage } from "../components/Projects";
import YCbCr_Results from "../assets/YCbCr_Results.png";
import mandrill from "../assets/mandrill.gif";
import StandardizedImage from "../components/StandardizedImage";
const DeepLearningCAE = ({ title }: ProjectPage) => {
  return (
    <div className="main-contents">
      <h1 className="title">{title}</h1>
      <div className="box biography-box pt-3">
        <div
          style={{
            display: "grid",

            gridTemplateColumns: "0.1fr 0.5fr 0.1fr",
            columnGap: "5px",
          }}
        >
          <img
            src={mandrill}
            alt="loading..."
            style={{ width: "100px", height: "auto" }}
          />
          <p>
            Project available on{" "}
            <a
              href="https://github.com/jackgrebenc/Optimized-CAE-using-YCbCr-colour-space?tab=readme-ov-file"
              target="_blank"
            >
              GitHub{" "}
            </a>
            <br />
            <br />
            <a href="https://github.com/user-attachments/files/15551890/CISC.499.Report.pdf">
              Click here to download PDF of written report
            </a>
          </p>
        </div>
      </div>
      <div className="box biography-box">
        <p>
          <b>Abstract</b>
          <br /> Image compression employs methods to reduce the cost of storage
          and transmission of digital images. Historical methods in lossy image
          compression have included JPEG, JPEG-200, BPG, as well as many others.
          This work focuses on lossy image compression and the use of deep
          learning methods, specifically convolutional autoencoders (CAE). The
          CIFAR-100 dataset was used for the training and testing of all
          architectures. A CAE architecture that uses the YCbCr colour space is
          compared to an identical RGB architecture to explore the performance
          differences of using different color spaces. An optimized CAE for the
          YCbCr colour space is then implemented with three architectures that
          produce varying bits per pixel (bpp) compression rates. The results of
          using YCbCr were promising for these architectures and it is possible
          that changing colour spaces can improve the performances of other
          image-based models.
        </p>
      </div>
      <div className="box biography-box">
        <p>
          <b>Highlighted Results</b>
          <br />
          The results of YCbCr when compared to RGB were promising for this CAE
          model. The SSIM of reconstructed images on the test set is
          consistently higher in YCbCr compared to the RGB images after 20
          epochs of training, as shown in Figure 4. The training was re-run 10
          times, with similar results. In all 10 runs of the program, YCbCr
          outperformed the RGB model. Increasing the number of epochs did not
          greatly improve the difference between either model.
          <br />
          <br />
          In the below diagram, Mean Squared Error (MSE) and Structural
          Similarity Index Measure (SSIM) are used to measure the accuracy of
          the reconstructed image to the original. Better image quality is
          attributed to a low MSE and a high SSIM.
          <br />
        </p>
        <div className="text-center">
          <img src={YCbCr_Results} className=" showFig"></img>
        </div>
      </div>
    </div>
  );
};
export default DeepLearningCAE;
