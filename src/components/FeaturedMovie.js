import React from 'react';
import './FeaturedMovie.css'

export default ({item}) => {



    let firstDate = new Date(item.first_air_date);
    let generos = [];
    for(let i in item.genres) {
        generos.push( item.genres[i].name );
    }

    let description = item.overview;
    if (description > 200){
        description = description.substring(0,200)+"..."
    }

    return(
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's': ''}</div>
                    </div>
                    <div className="featured--descricao">{description}</div>
                <div className="featured--botoes">
                    <a href= {`watch/${item.id}`} className="featured--botaoassis">Assistir</a>
                    <a href={`list/add/${item.id}`} className="featured--botaolista">+ Minha Lista</a>

                </div>
                <div className="featured--generos"><strong>Generos: {generos.join(', ')}</strong></div>

                </div>
                
            </div>
        </section>
    );
}