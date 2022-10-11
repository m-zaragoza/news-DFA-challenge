import NewsCard from './NewsCard';

const AllHeadlines = ({ news }) => {


    return (
        <>
            {news.map(singleNews => (
                <NewsCard
                    key={singleNews.id}
                    image={singleNews.fields.thumbnail}
                    headline={singleNews.fields.headline}
                />
            ))}
        </>
    );
};

export default AllHeadlines;
