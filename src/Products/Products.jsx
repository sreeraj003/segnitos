import Card from "../Card/Card"
import "./Products.css"
import { useSearch } from "../Context/searchContext";
function Products() {

    const { searchString } = useSearch();
    const list = [
        {
            link: "../../public/c_vit-removebg-preview.png",
            brand: "Minimalist",
            name: "Vitamin c serum",
            price: 345,
            product:"vitamin c"
        },
        {
            link: "../../public/oil-free-moisturizer-removebg-preview.png",
            brand: "Deram",
            name: "Moisturizer cream",
            price: 150,
            product:"moisturizer"
        },
        {
            link: "../../public/sun-removebg-preview.png",
            brand: "Skin Secrets",
            name: "Suncare 360",
            price: 250,
            product:"suncare cream"
        },
        {
            link: "../../public/face-removebg-preview.png",
            brand: "Minimalist",
            name: "Sepicalm",
            price: 250,
            product:"moistutizer"
        },
        {
            link: "../../public/mama-removebg-preview.png",
            brand: "Mama Earth",
            name: "Honey Malai",
            price: 230,
            product:"facewash"
        },
    ]
    return (
        <div className="row contain">
            <div className="banner">
                <img className="m_image" src="https://www.simpleskincare.in/cdn/shop/collections/1200x400-Vitamin-C-Collection-banner_1200x400.jpg?v=1680516064" alt="" />
                <img className="s_image" src="../../public/30.png" alt="" />
            </div>
            <hr />
            {searchString ? (
                list
                    .filter((el) => el.product.toLowerCase().includes(searchString.toLowerCase()))
                    .map((el, index) => (
                        <div className="col-lg-3 col-6 card_div" key={index}>
                            <Card data={el} />
                        </div>
                    ))
            ) : (
                list.map((el, index) => (
                    <div className="col-lg-3 col-6 card_div" key={index}>
                        <Card data={el} />
                    </div>
                ))
            )}
        </div>
    )
}

export default Products