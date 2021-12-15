import { Link } from "react-router-dom";
//styles
import "../../styles/components/nav_principal.css";
function Nav() {
    return(
        <nav className="nav_principal">
            <ul className="nav_principal__ul">
                <li className="nav_principal__li"><Link to="/home" className="nav_principal__a">Pokemones</Link></li>
                <li className="nav_principal__li"><Link to="/moves" className="nav_principal__a">Moves</Link></li>
                <li className="nav_principal__li"><button type="button" className="nav_principal__a nav_principal__btn-music" ><i class="fas fa-music"></i></button></li>
            </ul>
        </nav>
    )
}

export default Nav;