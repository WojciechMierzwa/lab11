import ShareMeal from "../share/page";

// Define the dynamic paths for static generation
export async function generateStaticParams() {
    const mealNames = [
        "burger",
        "curry",
        "dumplings",
        "macncheese",
        "pizza",
        "schnitzel",
        "tomato-salad",
    ];

    return mealNames.map((someName) => ({
        someName,
    }));
}

export default function MealDetailPage({ params }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{params.someName.toUpperCase()}</h1>
            <p>Lets try some {params.someName}</p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "20px 0",
                }}
            >
                <img
                    src={`/images/${params.someName}.jpg`}
                    style={{ width: "300px", height: "auto" }}
                    alt={`Image of ${params.someName}`}
                />
                <ShareMeal />
            </div>
        </div>
    );
}
