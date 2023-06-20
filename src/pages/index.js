"use client";

import { useState } from "react";
import PoemForm from "../components/PoemForm.js";
import PoemDisplay from "../components/PoemDisplay.js";
import { generatePoem } from "../services/poemService";
import "../styles/Index.css";

export default function Index() {
  const [poem, setPoem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    try {
      const generatedPoem = await generatePoem(formData);
      setPoem(generatedPoem);
    } catch (error) {
      console.error("Failed to generate poem:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="poem-form-container">
        <div className="form-content">
          <PoemForm onSubmit={handleFormSubmit} />
          {loading ? (
            <div className="loading-message">Generating...</div>
          ) : (
            poem && (
              <div className="poem-display">
                <PoemDisplay poem={poem} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
