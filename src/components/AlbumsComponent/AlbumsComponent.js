import {useEffect, useState} from "react"

import {commonService} from "../../services/commonService";
import {AlbumComponent} from "../AlbumComponent/AlbumComponent";


const AlbumsComponent = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        commonService.getAlbums().then(({data}) => setAlbums(data))
    }, [])
    return (
        <div>
            {albums.map( album => <AlbumComponent key={album.id} album={album}/>)}
        </div>
    );
};

export {AlbumsComponent};