import "./Card.css";

const Card = (props: { title: string; content?: string; tags?: string[] }) => {
  return (
    <div className="card">
      <div className="card-title">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <span>{props.content}</span>
      </div>
      <div className="card-footer">
        {props.tags?.map((item, i) => (
          <button className="secondary" disabled key={i}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
