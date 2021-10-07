import { preventionDataNegative, preventionDataPositive } from "./data";
import { usePozetionStyle, useProtectionStyle } from "./ProtectionStyle"
import Fade from 'react-reveal/Fade';

export default function Protection() {
    const classes = useProtectionStyle();
    return (
        <div className={classes.root}>
            <div className={classes.titel}><h3>How to Protect Yourself</h3></div>
            <div className={classes.ProtectionApp}>
                <Fade left>

                    <div className={classes.Protection}>
                        <div className={classes.Protection_lifer}><h2>Things You Shouldn’t Do</h2></div>
                        {
                            preventionDataPositive.map(item => <Pozetion icon={item.icon} titel={item.titel} dis={item.dis} />)
                        }
                    </div>
                </Fade>
                <Fade right>

                    <div className={classes.Protection}>
                        <div className={classes.Protection_rigth}><h2>Things You Should Do</h2></div>
                        {
                            preventionDataNegative.map(item => <Pozetion icon={item.icon} titel={item.titel} dis={item.dis} />)
                        }
                    </div>
                </Fade>
            </div>
        </div>
    )
}

function Pozetion({ icon, titel, dis }) {
    const classes = usePozetionStyle()
    return (
        <div className={classes.root}>
            <div className={classes.iconApp}><img src={icon} alt="" className={classes.icon} /></div>
            <div className={classes.textApp} >
                <h3 className={classes.textTitel} >{titel}</h3>
                <p className={classes.text_P}>{dis}</p>
            </div>
        </div>
    )
}