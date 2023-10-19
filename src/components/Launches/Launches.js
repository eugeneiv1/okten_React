import {useEffect, useState} from "react";

import {launchService} from "../../services/launchService";
import {Launch} from "../Launch/Launch";


const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll().then(({data}) => setLaunches(data.filter(el => +el.launch_year !== 2020)));
    }, [])

    return (
        <div>
            {
                launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)
            }
        </div>
    );
};

export {Launches};