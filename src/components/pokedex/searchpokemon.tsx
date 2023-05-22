import React, {useState} from "react";
import styles from './index.module.css'

const SearchPokemon = () => {
    const [search, setSearch] = useState();

    const onChangeHandler = (e: { target: { value: any; }; }) => {
        setSearch(e.target.value)
    }

    const onClickHandler = () =>{
        console.log("pokemon: ", search)
    }

    return (
        <div className={styles.searchbar_container}>
            <div className={styles.searchbar}>
                <input type="text" placeholder="Search pokemon" onChange={onChangeHandler}/>
                {search}
            </div>
            <div className={styles.searchbar_btn}> {/*esse aqui não vai ser botão, tem que se só através do enter*/}
                <button onClick={onClickHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default SearchPokemon 