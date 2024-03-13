import { useNavigate } from "react-router-dom"
import "./Home.css"
function Home() {
  const history = useNavigate()
  return (
    <div className="home mx-auto">
      <img src="../../public/skin-removebg-preview.png" alt="" />
      <p>
Welcome to Ecora, your premier destination for authentic skincare essentials tailored for women aged 22 to 55. Discover a curated selection of premium skincare products meticulously crafted to address the diverse needs of your skin journey. From rejuvenating serums to nourishing cleansers, each item in our collection is handpicked for its exceptional quality and proven efficacy. Our user-friendly platform offers a seamless shopping experience, with personalized recommendations to guide you towards your skincare goals. Embrace confidence and radiance with Ecora, where innovation meets integrity. Elevate your self-care routine and unlock the secret to timeless beauty with our exclusive range of skincare solutions.</p>
<div className="btn btn-outline-primary" onClick={()=>history('/products')}>Checkout Products</div>
    </div>
  )
}

export default Home