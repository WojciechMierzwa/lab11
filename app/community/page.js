import ShareMeal from "../meals/share/page";

function CommunityPage() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh", 
                textAlign: "center",
            }}
        >
            <h1>Community Page</h1>
            <ShareMeal />
        </div>
    );
}

export default CommunityPage;
