export interface ButtonIconProps {
  imageName: string;
  link: string;
  newPage?: boolean;
}

export const ButtonIcon = ({
  imageName,
  link,
  newPage = false,
}: ButtonIconProps) => {
  return (
    <a href={link} className="button-icon" target={newPage ? "_blank" : ""}>
      <i className={imageName}></i>
    </a>
  );
};
