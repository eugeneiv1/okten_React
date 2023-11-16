import styled from "styled-components";
import {useDispatch} from "react-redux";
import {episodeActions} from "../../store/slices/episodeSlice";
import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const {id, name, episode:chapter, characters} = episode;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const showCharacters = () => {
        const characterIds = characters.map(character => character.split('/').slice(-1)[0]);
        dispatch(episodeActions.setCharacters(characterIds));
        dispatch(episodeActions.setChapter(chapter))
        navigate(`/characters/${characterIds}`);
    }

    return (
        <StyledEpisode onClick={showCharacters}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>chapter: {chapter}</p>
        </StyledEpisode>
    );
};

export {Episode};

const StyledEpisode = styled.div`
  width: calc(23% - 5px);
  
  border: 1px solid black;
  text-align: center;
`
