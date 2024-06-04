import "../../index.css";
interface Props {
  items: string[];
  highlightIndex: number;
}

function WordBox({ items, highlightIndex }: Props) {
  return (
    <>
      <div className="box">
        <p>
          {items.map((item, index) => (
            <span
              className={
                highlightIndex > index
                  ? "text-success"
                  : highlightIndex === index
                  ? "text-secondary"
                  : ""
              }
            >
              {item + " "}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}
export default WordBox;
