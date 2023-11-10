import {useContext} from "react";
import {Context} from "../hoc/ContextProvider";

const useEpisodeContext = () => {
    const [episode, setEpisode] = useContext(Context);

    return {
        episode, setEpisode
    }
};

export {
    useEpisodeContext
}