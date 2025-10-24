import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="nmf-theme-toggle">
      <button
        aria-label="Toggle theme"
        title={theme === "light" ? "Switch to dark" : "Switch to light"}
        onClick={toggleTheme}
        className={"nmf-toggle-btn " + (theme === "dark" ? "dark" : "light")}
      >
        <span className="nmf-icon">{theme === "light" ? "🌙" : "☀️"}</span>
      </button>
    </div>
  );
}
