import { useState } from "react";
import "../styles/PoemForm.css";

const PoemForm = ({ onSubmit }) => {
  const [language, setLanguage] = useState("");
  const [length, setLength] = useState("");
  const [rhymes, setRhymes] = useState(false);
  const [style, setStyle] = useState("");
  const [theme, setTheme] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ language, length, rhymes, style, theme });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="input-field">
          Choose a language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
          </select>
        </label>
        <label className="input-field">
          Length of the rhymes:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            required
          />
        </label>
        <label className="checkbox-field">
          Include rhymes:
          <input
            type="checkbox"
            checked={rhymes}
            onChange={(e) => setRhymes(e.target.checked)}
          />
        </label>
        <label className="input-field">
          Style of the poem:
          <input
            type="text"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            required
          />
        </label>
        <label className="input-field">
          Theme of the poem:
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            required
          />
        </label>
        <button type="submit">Generate poem</button>
      </form>
    </div>
  );
};

export default PoemForm;
