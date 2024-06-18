interface StandardizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const StandardizedImage: React.FC<StandardizedImageProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  const containerStyle = {
    width: `${width}vw`,
    height: `${height}vh`,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative" as "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as "cover",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={containerStyle}>
      <img src={src} alt={alt} style={imageStyle} />
    </div>
  );
};

export default StandardizedImage;
