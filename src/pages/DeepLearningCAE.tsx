import { ProjectPage } from "../components/Projects";

const DeepLearningCAE = ({ title }: ProjectPage) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
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
    </div>
  );
};
export default DeepLearningCAE;
