import MeasurementList from "./components/Measurement/MeasurementList.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MeasurementList/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
