import { ButtonIcon, ButtonIconProps } from "./ButtonIcon";

interface TitleProps {
  title: string;
  buttonIcons?: ButtonIconProps[];
}

export const Title = ({ title, buttonIcons }: TitleProps) => {
  return (
    <>
      <h1 className="title">
        {title}{" "}
        {buttonIcons?.map((buttonIcon, index) => (
          <ButtonIcon
            key={index}
            imageName={buttonIcon.imageName}
            newPage={buttonIcon.newPage}
            link={buttonIcon.link}
          />
        ))}
      </h1>
    </>
  );
};
