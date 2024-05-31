// import { useState } from "react";

const Navbar = () => {
    // const [isOpened, setIsOpened] = useState(false)
    return (
        <nav className="bg-black text-white absolute top-0 left-0 w-full">
            <ul className="flex items-center justify-between last:mr-4">
                <li className="navbar-item"> <img src="./logo.svg" alt="SportSee"/> </li>
                <li className="navbar-item">Accueil</li>
                <li className="navbar-item relative"> Profil</li>
                <li className="navbar-item">Réglage</li>
                <li className="navbar-item">Communauté</li>
            </ul>
        </nav>
    );
}

export default Navbar;