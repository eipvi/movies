import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MoviesCard.jsx';

import './MoviesGrid.css';
import '../components/MoviesCard.css'
import '../components/MoviesCard.jsx'


const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
const [searchParams] = useSearchParams();
const [movies, setMovies] = useState([]);
const query = searchParams.get('q');

const getSearchedMovies = async (url) => {
    //const é usada para declarar uma constante chamada res 
    // fetch, ele retorna uma Promise que resolve com um objeto de resposta 
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results);
 }

useEffect(() => {
    const searchWithqueryURL = `${searchURL}?${apiKey}&query=${query}`;
    
    getSearchedMovies(searchWithqueryURL);
}, []);

    return(
        <div className="container">
            <h2 className='title'>Resultado para: <span className="query-text">{query}</span></h2>
            <div className="movies-container">
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length > 0 && movies.map((movie) => ( 
                 <MovieCard key={movie.id} movie={movie} />
            ))} 
            </div>
        </div>
    );
};

export default Search;