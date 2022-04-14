import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/bell_icon2.svg';
import './header.css';

export default function Header() {
    const [count, setCount] = useState([]);

    // Use Effect para ciclo de vida e acessar localStorage e useState por conta dos estados

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setCount(JSON.parse(minhaLista).length || []);
        let teste = count;
    }, [])

    return(
        <header>
            <Link className="logo" to="/">Rengan Filmes</Link>
            <Link className="icon-wrapper" to="/favoritos" data-number= {count}>
                <img src={image} alt="" className="bell-icon"/>
            </Link>
        </header>
    )
}