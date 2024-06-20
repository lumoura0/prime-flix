import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import './home.css'
// /movie/now_playing??api_key=7fbaa3f5932ee13bd66b1de7e60fea8a&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: '7fbaa3f5932ee13bd66b1de7e60fea8a',
          language: 'pt-BR',
          page: 1
        }
      })

      // console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10))
    }
    loadFilmes()
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="loading">Carregando filmes...</div>
    )
  }
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}

      </div>
    </div>
  )
}

export default Home;
