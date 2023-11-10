import {useEpisodeContext} from "../../hooks/useEpisodeContext";


const HeaderComponent = () => {
    const {episode} = useEpisodeContext();

    return (
        <div>
            <h1>Rick & Morty</h1>
            {
                episode && <p>Characters list of episode: {episode.id}  "{episode.name}"</p>
            }
        </div>
    );
};

export {HeaderComponent};