import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const tambah = () => {
    setCount((prev) => prev + 1);
  };

  const kurang = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", marginBottom: "20px" }}>
      <h2>1. Counter (useState)</h2>
      <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "10px 0" }}>{count}</p>
      
      {count === 0 && <p style={{ color: "gray", fontSize: "0.9rem" }}>Angka sudah di batas minimal (0)</p>}

      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        <button onClick={kurang}>- Kurang</button>
        <button onClick={reset}>Reset</button>
        <button onClick={tambah}>+ Tambah</button>
      </div>
    </div>
  );
}