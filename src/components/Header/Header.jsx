import React from "react";
import styles from "./Header.module.css";
import dayjs from "dayjs";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <div className={styles.darkday}>
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
