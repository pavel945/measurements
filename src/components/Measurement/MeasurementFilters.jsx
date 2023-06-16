import {useState} from "react";
import {useSearchParams} from "react-router-dom";

const MeasurementFilters = (props) => {

    /**
     * Initial dateickers state
     */
    const [date_gte, setDate_gte] = useState('');
    const [date_lte, setDate_lte] = useState('');

    /**
     * React search params hook
     */
    const [searchParams, setSearchParams] = useSearchParams();

    const setFiltersHandler = () => {

        const params = {};

        if(date_gte !== ''){

            params['date_gte'] = date_gte;
        }

        if(date_lte !== ''){

            params['date_lte'] = date_lte;
        }

        /**
         * When you set search params it will automatically set the search params in url
         */
        setSearchParams(params);

        props.reloadMeasurements();
    }

    /**
     * CLear search params and reload measurements from teh API
     */
    const clearFiltersHandler = () => {

        setSearchParams({});
        props.reloadMeasurements();
    }

    return(
        <>
            <div>
                <input type="date" name="date_gte" onChange={(e) => setDate_gte(e.target.value)}/>
                <input type="date" name="date_lte" onChange={(e) => setDate_lte(e.target.value)}/>
                <button onClick={setFiltersHandler}>Filters</button>
                <button onClick={clearFiltersHandler}>Clear</button>
            </div>
        </>
    );
}

export default MeasurementFilters;