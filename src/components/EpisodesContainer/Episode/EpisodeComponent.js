import {useNavigate} from "react-router-dom";

import css from './EpisodeComponent.module.css'
import {useEpisodeContext} from "../../../hooks/useEpisodeContext";
const EpisodeComponent = ({episode}) => {
    const navigate = useNavigate();
    const {id, name, episode:chapter, characters} = episode;

    const {setEpisode} = useEpisodeContext();
    const showCharacters = () => {
        const idsList = characters.map(character => character.split('/').slice(-1)[0]);
        setEpisode({id, name})
        navigate(`/characters/${idsList}`)
    }

    return (
        <div className={css.episodeContainer} onClick={showCharacters}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>chapter: {chapter}</p>
        </div>
    );
};

export {EpisodeComponent};