export interface ButtonIconProps {
  imageName: string;
  link: string;
  newPage?: boolean;
  size?: string;
}

export const ButtonIcon = ({
  imageName,
  link,
  newPage = false,
  size = "3vw",
}: ButtonIconProps) => {
  return (
    <a href={link} className="button-icon" target={newPage ? "_blank" : ""}>
      <i className={imageName} style={{ fontSize: size }}></i>
    </a>
  );
};
