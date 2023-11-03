import {useNavigate} from "react-router-dom";

const UserDetailsComponent = ({user}) => {
    const {id, name, email, phone, address: {city} } = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h3>{id} - {name}</h3>
                <h4>{city}</h4>
                <p>email: {email}</p>
                <p>phone: {phone}</p>
                <button onClick={() => navigate(`posts`, {state: id})}>User posts</button>
            </div>
        </div>
    );
};

export {UserDetailsComponent};