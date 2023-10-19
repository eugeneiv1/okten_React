
const Launch = ({launch}) => {
    const {mission_name, launch_year, links} = launch

    return (
        <div>
            <h1>Mission: {mission_name}</h1>
            <p>Year: {launch_year}</p>
            <img src={links.mission_patch_small} alt=""/>
        </div>
    );
};

export {Launch};