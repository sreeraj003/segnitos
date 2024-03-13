import "./Card.css";

function Card({data}) {

    return (
        <div className="container">
            <div className="card">
                <div className="glass">
                    <div className="img">
                        <img src={data.link} alt="product" />
                    </div>
                    <div className="brand_name">
                        <h6>{data.brand}</h6>
                    </div>
                    <div className="name">
                        <h5>{data.name}</h5>
                    </div>
                    <div className="price">
                        <b><span>Rs.{data.price}/-</span></b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
