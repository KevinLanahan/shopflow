function Navbar() {
    return (
      <>
        <header
          style={{
            backgroundColor: "#131921",
            color: "white",
            padding: "0.9rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "2rem",
              fontWeight: "bold",
              minWidth: "180px",
            }}
          >
            ShopFlow
          </h1>
  
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <input
              type="text"
              placeholder="Search ShopFlow"
              style={{
                width: "100%",
                maxWidth: "650px",
                padding: "0.8rem 1rem",
                borderRadius: "8px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>
  
          <div
            style={{
              minWidth: "110px",
              textAlign: "right",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Cart (0)
          </div>
        </header>
  
        <div
          style={{
            backgroundColor: "#232f3e",
            color: "white",
            padding: "0.75rem 1.5rem",
            display: "flex",
            gap: "1.5rem",
            fontSize: "0.95rem",
            overflowX: "auto",
          }}
        >
          <span>Today's Deals</span>
          <span>Customer Service</span>
          <span>Registry</span>
          <span>Gift Cards</span>
          <span>Sell</span>
          <span>Apparel</span>
          <span>Footwear</span>
          <span>Accessories</span>
        </div>
      </>
    );
  }
  
  export default Navbar;