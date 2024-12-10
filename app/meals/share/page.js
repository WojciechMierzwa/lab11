"use client"; // This makes the component a Client Component

export default function ShareMeal({ imageName }) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <button 
                onClick={() => alert('Meal shared!')}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#007BFF"}
            >
                Share This Meal
            </button>
        </div>
    );
}
