import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {charactersService} from "../../../services/chractersService";
import {CharacterComponent} from "../Character/CharacterComponent";

const CharactersComponent = () => {
    const {idsList} = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        charactersService.getAll(idsList).then(({data}) => setCharacters(data))
    }, []);

    return (
        <div>
            {characters.map(character => <CharacterComponent key={character.id} character={character}/>)}
        </div>
    );
};

export {CharactersComponent};