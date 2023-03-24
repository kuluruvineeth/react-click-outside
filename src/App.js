import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="App">
      <button ref={btnRef} onClick={() => setIsOpen((prev) => !prev)}>
        Options v
      </button>
      <div className={"dropdown " + (isOpen ? "open" : "closed")}>
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
        <a href="#">Option 3</a>
      </div>
    </div>
  );
}

export default App;
