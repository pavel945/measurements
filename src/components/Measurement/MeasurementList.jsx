import {useEffect, useState} from "react";

import MeasurementFilters from "./MeasurementFilters.jsx";
import MeasurementTable from "./MeasurementTable.jsx";
import MeasurementChart from "./MeasurementChart.jsx";
import {useSearchParams} from "react-router-dom";

const MeasurementList = () => {

    const [measurements, setMeasurements] = useState([]);

    /**
     * Get measurements from API
     */
    const measurementHandler = () => {

        /**
         * send search params from the url (window.location.search)
         */
        fetch('http://localhost:3000/measurements' + window.location.search)
            .then(response => response.json())
            .then(data => setMeasurements(data));
    }

    useEffect(() => {

        /**
         * Load measurements on component initialisation
         */
        measurementHandler();
    }, []);

    return(
        <>
            <MeasurementFilters reloadMeasurements={measurementHandler}/>
            <MeasurementTable measurements={measurements}/>
            <MeasurementChart measurements={measurements}/>
        </>
    );

}

export default MeasurementList;