import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';

export default function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    // Use Effect para ciclo de vida e acessar localStorage e useState por conta dos estados

    useEffect(() => {
        const myList = localStorage.getItem('filmes');

        setFilmes(JSON.parse(myList) || []);
        
    },[])

    function handleDelete(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.success('Filme excluído com sucesso!');
    }


    return (
        <div id="meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && 
                <span>Você não possui filmes salvos </span>
            } 
            <ul>
                {filmes.map((item) =>{
                    return(
                        <li key={item.id}>
                            <span className="textFavorites">{item.nome}</span>
                        
                        <div>
                            <Link to={`./filme/${item.id}`}>Ver detalhes</Link>
                            <button className="btn-favorites" onClick={() => {handleDelete(item.id)}}>Excluir</button>
                        </div>
                        
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}