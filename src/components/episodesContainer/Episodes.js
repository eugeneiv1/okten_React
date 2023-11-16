import {useEffect} from "react";
import {episodeActions} from "../../store/slices/episodeSlice";
import {useDispatch, useSelector} from "react-redux";
import {Episode} from "./Episode";
import styled from "styled-components";

const Episodes = () => {
    let {allEpisodes, prevPage, nextPage, currentPage} = useSelector(store => store.episode)
    const dispatch = useDispatch();

    const toNextPage = () => {
        const next = +currentPage + 1
        dispatch(episodeActions.setCurrentPage(`${next}`))
    }
    const toPrevPage = () => {
        const next = +currentPage - 1
        dispatch(episodeActions.setCurrentPage(`${next}`))
    }

    useEffect(() => {
        dispatch(episodeActions.getAll({page: currentPage}));
    }, [dispatch, currentPage]);

    return (
        <Styled>
            {allEpisodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            <button disabled={!prevPage} onClick={toPrevPage}>Prev page</button>
            <button disabled={!nextPage} onClick={toNextPage}>Next page</button>
        </Styled>
    );
};

export {Episodes};

const Styled = styled.div`
display: flex;
flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`