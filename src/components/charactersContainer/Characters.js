import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {episodeActions} from "../../store/slices/episodeSlice";
import {Character} from "./Character";

const Characters = () => {
    const {charactersIds, episodeCharacters} = useSelector(store => store.episode);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getCharacters({ids: charactersIds}));
    }, [charactersIds, dispatch]);
    return (
        <div>
            {episodeCharacters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};