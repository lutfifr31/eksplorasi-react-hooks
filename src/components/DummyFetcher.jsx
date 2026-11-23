import { useState, useEffect } from "react";

export default function DummyFetcher() {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`Effect berjalan: mengambil data untuk User ID ${userId}`);
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 3)); // Ambil 3 artikel teratas saja biar rapi
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data:", err);
        setLoading(false);
      });
  }, [userId]); // Effect jalan pas web dibuka (mount) DAN tiap kali userId berubah

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", marginBottom: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <h2 style={{ margin: 0 }}>3. Fetch Data Dummy (useEffect)</h2>
        
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <span style={{ fontSize: "0.9rem" }}>User ID:</span>
          {[1, 2, 3].map((id) => (
            <button
              key={id}
              onClick={() => setUserId(id)}
              style={{
                fontWeight: userId === id ? "bold" : "normal",
                backgroundColor: userId === id ? "#2563eb" : "#e5e7eb",
                color: userId === id ? "white" : "black",
                border: "none",
                padding: "4px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p style={{ color: "gray" }}>Memuat data dari API...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{
                padding: "10px",
                backgroundColor: "#f9fafb",
                border: "1px solid #eee",
                borderRadius: "6px",
                marginBottom: "8px",
              }}
            >
              <strong style={{ display: "block", marginBottom: "4px", textTransform: "capitalize" }}>
                {post.title}
              </strong>
              <span style={{ fontSize: "0.9rem", color: "#4b5563" }}>{post.body}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}