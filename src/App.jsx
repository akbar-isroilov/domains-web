import "./App.css";

import { FaTelegram } from "react-icons/fa";

function App() {
  const domains = [
    "dragons.uz",
    "ishber.uz",
    "ishqidir.uz",
    "jobfind.uz",
    "oeliks.uz",
  ];

  return (
    <>
      <h1>Domain sotiladi</h1>
      <div>
        <a href="https://t.me/akbarjon_dev" target="_blank">
          <FaTelegram size={80} />
        </a>
      </div>
      <div className="domains">
        {domains.map((domain) => (
          <p>{domain}</p>
        ))}
      </div>
    </>
  );
}

export default App;
