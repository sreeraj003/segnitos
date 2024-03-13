import { useRef } from "react"
import "./Nav.css"
import { useSearch } from "../Context/searchContext"
import { useNavigate } from "react-router-dom";
function Nav() {
  const { setSearchString } = useSearch();
  const inputRef = useRef()
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchString(inputRef.current.value);
    history('/products')
  };
  return (
    <div className="nav">
      <div className="glass" style={{zIndex:0}}>

      </div>
      <div className="emb">
        <img src="./../../public/skin-removebg-preview.png" alt="" className="res" />
        </div>
      <form className=" formData" role="search">
        <input className="form-control search me-1" ref={inputRef} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn ms-1 input" type="submit" onClick={(e) => handleSubmit(e)}><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  )
}

export default Nav