import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/bell_icon2.svg';
import './header.css';

export default function Header() {
    const [count, setCount] = useState([]);

    // Use Effect para ciclo de vida e acessar localStorage e useState por conta dos estados

    useEffect(() => {
        
        const minhaLista = JSON.parse(localStorage.getItem('filmes')).length;

        if(minhaLista > 0)
            setCount(minhaLista);
        else {
            setCount(0);
        }

    }, [])

    function handleMouseMove() {
        const getCountFilmes = JSON.parse(localStorage.getItem('filmes')).length || [];
        console.log(getCountFilmes); //Sei que não é a melhor forma rs!
        if(count != getCountFilmes) {
            setCount(getCountFilmes);
        }
    }

    return(
        <header>
            <Link className="logo" to="/">Rengan Filmes</Link>
            <Link className="icon-wrapper" to="/favoritos" data-number= {count} onMouseMove={() => handleMouseMove()}>
                <img src={image} alt="" className="bell-icon" />
            </Link>
        </header>
    )
}