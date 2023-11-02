import {Link, useNavigate} from "react-router-dom";


const HomePageComponent = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div><Link to='/todos'>ToDos list</Link></div>
            <div><Link to='/albums'>Show Albums</Link></div>
            <div><Link to='/comments'>Show Comments</Link></div>
            <button onClick={() => navigate(-1)}>prevPage</button>
            <button onClick={() => navigate(1)}>nextPage</button>
        </div>
    );
};

export {HomePageComponent};