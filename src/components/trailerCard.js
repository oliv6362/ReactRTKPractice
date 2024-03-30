function TrailerCard({ trailer }) {
    return (
        <div className="row justify-content-center align-items-center">
            <div className="trailer-card">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={trailer.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default TrailerCard;
