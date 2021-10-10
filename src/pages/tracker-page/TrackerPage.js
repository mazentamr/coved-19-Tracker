import { useEffect, useState } from "react";
// import Map from "../../component/map/Map";
import TrackerCountryDis from "../../component/tracker-country-dis/TrackerCountryDis";
import TrackerCountry from "../../component/tracker-country/TrackerCountry";
import { fetchTrackerCountry } from "../../services/fetchApi";
import { useTrackerPageStyle } from "./TrackerPageStyle";
import "leaflet/dist/leaflet.css";
import { Backdrop, CircularProgress } from "@mui/material";

export default function TrackerPage() {
    const classes = useTrackerPageStyle();
    const [tracker, setTracker] = useState({});
    const [loding, setLoding] = useState(true);
    const [mapCountries, setMapCountries] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom, setMapZoom] = useState(3);

    useEffect(() => {
        fetchTrackerCountry().then((res) => {
            setTracker(res.data);
            setLoding(false);
            setMapCenter(res.data);
        })

    }, [])
    console.log(tracker)
    if (loding) return(
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
        // onClick={()=>{}}
    >
        <CircularProgress color="inherit" />
    </Backdrop>)
    return (
        <div>
            <div className={classes.trackerTable}>
                <TrackerCountry countrys={tracker} />
                <TrackerCountryDis countrys={tracker} />
                {/* <Map
                    countries={mapCountries}
                    casesType={casesType}
                    center={mapCenter}
                    zoom={mapZoom}
                /> */}
            </div>
        </div>
    )
}