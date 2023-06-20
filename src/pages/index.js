"use client";

import { useState } from "react";
import PoemForm from "../components/PoemForm.js";
import PoemDisplay from "../components/PoemDisplay.js";
import { generatePoem } from "../services/poemService";
import "../styles/Index.css";

export default function Index() {
  const [poem, setPoem] = useState('');

  const handleFormSubmit = async (formData) => {
    try {
      const generatedPoem = await generatePoem(formData);
      setPoem(generatedPoem);
    } catch (error) {
      console.error('Failed to generate poem:', error);
    }
  };

  return (
    <div className="container">
      <div className="poem-form-container">
        <div className="form-content">
          <PoemForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
}
