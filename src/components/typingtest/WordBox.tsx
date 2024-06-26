import "../../index.css";
interface Props {
  items: string[];
  highlightIndex: number;
}

function WordBox({ items, highlightIndex }: Props) {
  return (
    <div className="box word-box">
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
            key={index}
          >
            {item + " "}
          </span>
        ))}
      </p>
    </div>
  );
}
export default WordBox;
