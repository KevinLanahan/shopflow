function ProductCard({ product }) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ddd",
          padding: "0.8rem",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.14)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        }}
      >
        <div
          style={{
            height: "200px",
            backgroundColor: "#f7f7f7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            overflow: "hidden",
          }}
        >
          <img
            src={product.image_url}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
  
        <h3
          style={{
            fontSize: "1.2rem",
            color: "#0f1111",
            marginBottom: "0.5rem",
            lineHeight: "1.35",
            minHeight: "52px",
          }}
        >
          {product.name}
        </h3>
  
        <div
          style={{
            color: "#f08804",
            fontSize: "1rem",
            marginBottom: "0.6rem",
          }}
        >
          ★★★★☆ <span style={{ color: "#007185" }}>(124)</span>
        </div>
  
        <p
          style={{
            color: "#565959",
            fontSize: "0.95rem",
            lineHeight: "1.5",
            marginBottom: "1rem",
            flexGrow: 1,
          }}
        >
          {product.description}
        </p>
  
        <p style={{ color: "#565959", marginBottom: "0.4rem" }}>
          Category: {product.category}
        </p>
  
        <p style={{ color: "#565959", marginBottom: "0.8rem" }}>
          In stock: {product.stock_quantity}
        </p>
  
        <p
          style={{
            fontSize: "1.8rem",
            fontWeight: "500",
            color: "#0f1111",
            marginBottom: "1rem",
          }}
        >
          ${(product.price_cents / 100).toFixed(2)}
        </p>
  
        <button
          style={{
            backgroundColor: "#ffd814",
            border: "1px solid #fcd200",
            borderRadius: "999px",
            padding: "0.75rem 1rem",
            cursor: "pointer",
            fontWeight: "600",
            color: "#111",
            fontSize: "0.95rem",
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default ProductCard;