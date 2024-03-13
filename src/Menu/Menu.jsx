import { useNavigate } from "react-router-dom"
import "./Menu.css"
function Menu() {
    const history = useNavigate()
    return (
        <div className="menu row">
            <div className="head">
                <div className="glass">
                </div>

                <button className="butn cont Home" onClick={() => history("/")}>
                    <span><i className=" menu-item fa-solid fa-house"></i><div className="tip">Home</div></span>
                    <span className="menu-name">Home</span>
                </button>
                <button className="butn  cont About" onClick={() => history("/about")}>
                    <span><i className="menu-item fa-solid fa-circle-question"></i><div className="tip">About</div></span>
                    <span className="menu-name">About</span>
                </button>
                <button className="butn  cont Products" onClick={() => history("/products")}>
                    <span><i className="menu-item fa-solid fa-wine-bottle"></i><div className="tip">Products</div></span>
                    <span className="menu-name">Products</span>
                </button>
                <button className="butn cont Contact" onClick={() => history("/contact")}>
                    <span><i className="menu-item fa-solid fa-address-card"></i><div className="tip">Contact</div></span>
                    <span className="menu-name">Contact</span>
                </button>
                <button className="butn cont Testimonials" onClick={() => history("/testimonials")}>
                    <span><i className="menu-item fa-solid fa-comments"></i><div className="tip">Testimonials</div></span>
                    <span className="menu-name">Testimonials</span>
                </button>
            </div>
        </div>
    )
}

export default Menu