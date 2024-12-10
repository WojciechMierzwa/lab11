import ShareMeal from "../share/page";

export default function MealDetailPage({ params }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{params.someName.toUpperCase()}</h1>
            <p>Let's try some {params.someName} !!!</p>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px 0"
            }}>
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
