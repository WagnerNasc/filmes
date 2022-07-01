import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/countFavorites';
import { Link } from 'react-router-dom';

import image from '../../Assets/bell_icon2.svg';
import './header.css';

export default function Header() {

    const { favorites } = useContext(AuthContext);


    return(
        <header>
            <Link className="logo" to="/">Rengan Filmes</Link>
                 <Link className="icon-wrapper" to="/favoritos">
                {favorites > 0 &&
                    <span className="info">{favorites}</span>
                }
                <img src={image} alt="bell icon" className="bell-icon" />
            </Link>
        </header>
    )
}