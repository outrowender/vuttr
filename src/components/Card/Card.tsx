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
          <span className="span-tag" key={i}>
            #{item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
