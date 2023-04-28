import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Team from "./components/Team";

function App() {
  const [reverseOrder, setReverseOrder] = useState(false);
  const team = <Team reverseOrder={reverseOrder} setReverseOrder={setReverseOrder} />
  const hero = <Hero reverseOrder={reverseOrder}  setReverseOrder={setReverseOrder}/>

  return (
    <>
      {reverseOrder ? (
        <section>
          {team}
          {hero}
        </section>
      ) : (
        <section>
          {hero}
          {team}
        </section>
      )}
    </>
  );
}

export default App;
