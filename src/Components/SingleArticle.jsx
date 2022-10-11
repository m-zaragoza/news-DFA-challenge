import { useParams } from "react-router-dom";

const SingleArticle = ({ news }) => {

    const { id } = useParams();

    return (
        <>
            {news.filter((singleNews) => singleNews.fields.headline === id).map(singleNews => (
                <div key={singleNews.id} className="card" style={{ width: '90%' }}>
                    <img src={singleNews.fields.thumbnail} className="card-img-top" alt="" />
                    <div className="card-body">
                        <a href={singleNews.webUrl} target="_blank" rel="noreferrer">
                            <h2 className="card-text">{singleNews.fields.headline}</h2>
                        </a>
                        <p id="article" className="card-text">{singleNews.fields.bodyText}</p>
                    </div>
                </div>

            ))}
        </>
    );
};

export default SingleArticle; 