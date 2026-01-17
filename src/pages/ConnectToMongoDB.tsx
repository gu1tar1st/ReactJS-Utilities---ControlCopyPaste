export function ConnectToMongoDB() {
    return (
        <>
            <button onClick={async () => {
                const res = await fetch("http://localhost:5000/connect");
                const data = await res.json();

                if (data.success) {
                    alert("Connected to MongoDB successfully!");
                } else {
                    alert("Failed to connect to MongoDB.");
                }
            }} className="btn btn-primary">Connect to MongoDB</button>
        </>
    );
}