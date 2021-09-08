import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
      </div>
      <div>
        <footer>
          <a
            href="https://github.com/ffionwyn/dictionary-project-react"
            target="_blank"
          >
            Open source code
          </a>
          <span> by Ffion Griffiths hosted on Netlify</span>
        </footer>
      </div>
    </div>
  );
}
