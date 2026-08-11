import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav style={{padding:"10px", background:"#ddd"}}>

        <Link to="/" style={{marginRight:"10px"}}>Home</Link>
        <Link to="/about" style={{marginRight:"10px"}} >About</Link>
        <Link to="/contact" style={{marginRight:"10px"}}>Contact</Link>

    </nav>
  )
}
