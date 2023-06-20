"use client";

import { useState } from "react";
import PoemForm from "../components/PoemForm.js";
import PoemDisplay from "../components/PoemDisplay.js";
import { generatePoem } from "../services/poemService";
import "../styles/Index.css";

export default function Index() {
  return (
    <div className="container">
      <div className="poem-form-container">
        <div className="form-content">components</div>
      </div>
    </div>
  );
}
