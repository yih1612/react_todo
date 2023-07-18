import React from "react";
import styles from "./Header.module.css";
import dayjs from "dayjs";
import { useDarkMode } from "../../context/DarkModeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <div className={styles.darkday}>
        <button className={styles.toggle}>
          <DarkModeSwitch
            checked={!darkMode}
            onChange={toggleDarkMode}
            moonColor={"#22243b"}
            sunColor={"#e49b5a"}
            size={20}
          />
        </button>
        <div className={styles.day}>{dayjs().format("YYYY.MM.DD.ddd")}</div>
      </div>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
