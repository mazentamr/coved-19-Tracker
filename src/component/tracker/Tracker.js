import { useStatisticsStyle, useTrackerStyle } from "./TrackerStyle";
import icon5 from '../../images/icon5.png'
import icon6 from '../../images/icon6.png'
import icon7 from '../../images/icon7.png'
import icon8 from '../../images/icon8.png'
import fetchTracker from "../../services/fetchApi";
import { useEffect, useState } from "react";
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';

export default function Tracer() {
    const classes = useTrackerStyle();
    const [tracker, setTracker] = useState({});
    const [loding, setLoding] = useState(true);

    useEffect(() => {
        fetchTracker().then((res) => {
            setTracker(res.data);
            setLoding(false);
        })

    }, [])
    console.log(tracker)
    if (loding) return <p>.....</p>;
    return (
        <div className={classes.root}>
            <div className={classes.titel}><h1>COVID-19 Statistics</h1></div>
            <div className={classes.tracer_list}>
                <Statistics Icon={icon5} dis={"Recovered"} num={tracker.recovered.value} color={"#557d20"} />
                <Statistics Icon={icon6} dis={"Deaths"} num={tracker.deaths.value} color={"#af1a1b"} />
                <Statistics Icon={icon7} dis={"Confirmed Cases"} num={tracker.confirmed.value} color={"#ba9500"} />
                <Statistics Icon={icon8} dis={"Total Country"} num={"1456677"} color={"#130947"} />
            </div>
        </div>
    )
}

function Statistics({ Icon, num, dis, color }) {
    const classes = useStatisticsStyle({ color });

    return (
        <Fade bottom>
            <div className={classes.root}>
                <img src={Icon} alt="" />
                <div>
                    <h2 className={classes.statistics_num}><CountUp start={0} end={num} duration={2.75} separator="," /></h2>
                    <p className={classes.dis}>{dis}</p>
                </div>
            </div>
        </Fade>
    )
}