import { NavLink } from 'react-router-dom';

const NewsCard = newsProps => {

    const { headline, image } = newsProps;

    return (

        <div className="card" style={{ width: '90%' }}>
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <NavLink to={`/${headline}`} >
                    <h2 className="card-text">{headline}</h2>
                </NavLink>
            </div>
        </div >

    );
};

export default NewsCard;