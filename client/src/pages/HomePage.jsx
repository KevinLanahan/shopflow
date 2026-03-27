import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#eaeded", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          height: "320px",
          background:
            "linear-gradient(to bottom, #cfe8ff 0%, #dbefff 35%, #eaeded 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#111",
              marginBottom: "1rem",
            }}
          >
            Discover deals across every category
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#333",
              maxWidth: "700px",
            }}
          >
            ShopFlow brings together apparel, footwear, accessories, and more
            in one clean storefront experience.
          </p>
        </div>
      </section>

      <main
        style={{
          maxWidth: "1600px",
          margin: "-80px auto 0 auto",
          padding: "0 1.5rem 2rem 1.5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "1.25rem 1.5rem",
            marginBottom: "1.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              color: "#111",
            }}
          >
            Featured Products
          </h2>
        </div>

        {error && <p>{error}</p>}

        {!error && products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;