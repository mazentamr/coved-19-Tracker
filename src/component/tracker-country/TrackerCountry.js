import { useTrackerCountryStyle } from "./TrackerCountryStyle";

export default function TrackerCountry({ countrys }) {
    const classes = useTrackerCountryStyle();
    return (
        <div className={`${classes.root}`} style={{

        }}>
            <h3>Cases by Country</h3>
            {
                countrys.map((item,i) => <div key={i} className={classes.row}>
                    <div className={classes.country}>
                        {item.country}
                    </div>
                    <div  className={classes.country}>
                        {item.cases}
                    </div>
                </div>
                )
            }
        </div>
    )
}