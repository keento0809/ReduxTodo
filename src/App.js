import Main from "./components/Main/Main";

import "./App.css";

function App() {
  const obj = { a: "aa", b: "bb", c: "cc" };
  console.log(obj);
  console.log(obj.a);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
