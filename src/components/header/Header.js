import {useSelector} from "react-redux";


const Header = () => {
    const {chapter} = useSelector(store => store.episode);
    console.log(chapter);
    return (
        <div>
            <h1>Rick & Morty</h1>
            {
                chapter && <p>{chapter}</p>
            }
        </div>
    );
};

export {Header};