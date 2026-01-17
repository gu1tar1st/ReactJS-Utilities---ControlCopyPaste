export function Home() {
    return (
        <>
            <title>ControlCopyPaste - Home</title>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="mt-5">ControlCopyPaste - A repository dedicated to facilitate full-stack development process, especially MERN stack.</h1>
                        <p className="lead">URLs to features</p>
                        <div className="list-group">
                            <a href="/" className="list-group-item list-group-item-action active">Home</a>
                            <a href="/connect-to-mongodb" className="list-group-item list-group-item-action">Connect to MongoDB  
                                <span className="badge bg-primary rounded-pill">Backend</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}