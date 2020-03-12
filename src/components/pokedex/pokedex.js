import React, { useState, useEffect } from "react";
import {useFetch} from './../../hooks/fetch';
import './pokedex.scss';

function Pokedex(props) {

    const [search, setSearch] = useState("");
    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    // };

    const fecthUrl = `https://pokeapi.co/api/v2/pokemon/${search}`;
    const res = useFetch(fecthUrl, {});
    const data = res.response;
    const error = res.error;
    console.log(data);



    const renderStats= () => {
        return data.stats.map((stat, index) => {
            return( <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
            );
        });
    };

    const renderTypes= () => {
        return data.types.map((type, index) => {
            return( <li key={index}>{type.type.name}</li>
            );
        });
    };

    const renderAbilities= () => {
        return data.abilities.map((ability, index) => {
            return( <li key={index}>{ability.ability.name}</li>
            );
        });
    };


    return (
        <div className="pokedex">
            <h1>Dex</h1>


            <p>Searching for: {search}</p>
            <form className="form-input">
                <label>
                    <input onChange={e => setSearch(e.target.value)}  type="text" name="pokemon" />
                </label>
            </form>

            {
                !data &&
                <h1>Loading...</h1>
            }
            {
                error && !data.name && search !== '' &&
                    <span>
                        No Results Found
                    </span>
            }
            {
                data && data.name &&
                    <div className="pokeInfo">
                        <h1>{data.name}</h1>
                        <div className="poke-num">
                            {data.id}
                        </div>
                        <img src={data.sprites.front_default} alt=""/>
                        <hr/>
                        <div className="types-wrapper">
                            <h3>Types</h3>
                            {renderTypes()}
                        </div>
                        <div className="stats-wrapper">
                            <h3>Stats</h3>
                            {renderStats()}
                        </div>
                        <div className="abilities-wrapper">
                            <h3>Abilities</h3>
                            {renderAbilities()}
                        </div>


                    </div>
            }

        </div>
    );
}

export default Pokedex;
