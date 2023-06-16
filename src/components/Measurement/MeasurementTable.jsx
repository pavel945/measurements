const MeasurementTable = (props) => {

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserID</th>
                        <th>Weight</th>
                        <th>Biceps</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.measurements.map((measurement) => {
                            return <tr key={measurement.id}>
                                <td>{measurement.id}</td>
                                <td>{measurement.userId}</td>
                                <td>{measurement.weight}</td>
                                <td>{measurement.biceps}</td>
                                <td>{measurement.date}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default MeasurementTable;