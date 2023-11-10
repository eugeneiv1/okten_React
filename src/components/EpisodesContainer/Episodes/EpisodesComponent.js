import {useEffect, useState} from "react";

import {episodesService} from "../../../services/episodesService";
import {EpisodeComponent} from "../Episode/EpisodeComponent";

import css from './EpisodesComponent.module.css'
import {useSearchParams} from "react-router-dom";

const EpisodesComponent = () => {
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});
    const currentPage = page.get('page');


    useEffect(() => {
        episodesService.getAll(page.get('page')).then(({data: {results, info}}) => {
            setEpisodes(results);
            setPrevNext({
                prev: info.prev,
                next: info.next
            })
        });

    }, [currentPage]);

    const prevPage = () => {
        setPage(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
        })
    }

    const nextPage = () => {
        setPage(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
        })
    }

    return (
        <div className={css.wrapper}>
            <div className={css.episodesContainer}>
                {episodes.map(episode => <EpisodeComponent key={episode.id} episode={episode}/> )}
            </div>
            <div className={css.buttonContainer}>
                <button onClick={prevPage} disabled={!prevNext.prev}>Prev page</button>
                <button onClick={nextPage} disabled={!prevNext.next}>Next page</button>
            </div>
        </div>
    );
};

export {EpisodesComponent};