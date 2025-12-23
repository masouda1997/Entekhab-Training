import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <main className="flex justify-center items-center">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <h1 dir="rtl" className="p-4 text-teal-600">
        پروژه بیس React
      </h1>
    </main>
  );
}

export default App;
