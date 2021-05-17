import { useState } from "react";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { Tool } from "../../models/Tool";
import "./HomePage.css";

const HomePage = () => {
  const list = Tool.fake(5);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
          <button className="secondary" onClick={() => setModalOpen(true)}>
            Add new
          </button>
        </section>
        {list.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            content={item.description}
            tags={item.tags}
          />
        ))}
      </div>
      <Modal show={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default HomePage;
