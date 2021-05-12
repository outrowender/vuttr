import "./App.css";

function App() {
  return (
    <div className="App center">
      <h2>This is a title</h2>
      <p>This is a subtitle</p>
      <button className="primary">Primary button</button>
      <hr />
      <button className="secondary">Secondary button</button>
      <hr />
      <label>Um label qualquer</label>
      <hr/>
      <div className="form-input">
        <label>Meu input lindo</label>
        <input type="text" placeholder="Encontre o que procura..." />
        <p>Erro?</p>
      </div>

      <div className="form-input">
        <label>Meu input feinho</label>
        <input type="text" placeholder="Encontre o que procura..." />
        <p className="error">Erro?</p>
      </div>
    </div>
  );
}

export default App;
