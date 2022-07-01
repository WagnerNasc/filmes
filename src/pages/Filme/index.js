import { useEffect, useState } from 'react';
import { useParams, useHistory  } from 'react-router-dom';
import api from '../../services/api';

import { toast } from 'react-toastify';
import './filme-info.css';

export default function Filme() {
    const { id } = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`);
            // console.log(response.data);
            setLoading(false);

            if(response.data.length === 0) {
                // tenta acessa um ID inexistente e direciona para home
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }
        
        loadFilme();

        /*QUANDO DESMONTAR A PAGINA*/
        return () => {
            console.log('COMPONENTE DESMONTADO!');
        }

    }, [history, id]);

    function salvaFilme() {
        /*Pega todos os filmes se tiver no localStorage*/
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || []; // se não tiver nada na lista passa um array vazio

        // Se o filme já tiver salvo deve ignorar

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id) 

        // Some devolve TRUE or false
        
        if(hasFilme) {
            toast.error('Filme já está na lista!');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!');
    }

    if(loading) {
        return(
            <div className="filme-info">
                <h1>Carregando seu filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <div className="content-info">

                <h1>{filme.nome}</h1>
                <img src={filme.foto} alt={filme.nome}/>

                <h3>Sinopse</h3>
                <p>{filme.sinopse}</p>

                <div>
                    <button onClick={salvaFilme}>Salvar</button>
                    <button>
                        <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>
                            Trailer
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}