import { Tool } from "../../models/Tool";
import "./HomePage.css";

function HomePage() {
  const list = Tool.fake(5);

  return (
    <div>
      <header>
        <h2>VUTTR</h2>
        <p>Very Useful Tools to Remember</p>
      </header>
      <section>
        <div>
          <input type="text" placeholder="Find whatever you want..." />
          <input type="checkbox" /> <label>Only tags</label>
        </div>
        <button className="secondary">Add new</button>
      </section>
      {list.map((item, i)=><p key={i}>{item.toString()}</p>)}
    </div>
  );
}

export default HomePage;
