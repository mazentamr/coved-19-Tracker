import icon1 from '../../images/icon6.png'
import { useFooterStyle } from "./FooterStyle";
import SendIcon from '@mui/icons-material/Send';
export default function Footer() {
    const classes = useFooterStyle();
    return (
        <div className={classes.root}>
            <div className={classes.headFooter}>
                <div>
                    <h1 className={classes.headFooterText}>Subscribe to Our Newsletter</h1>
                </div>
                <div className={classes.P_input}>
                    <input type="text" placeholder="enter your email address" className={classes.input} />
                    <button className={classes.button}><div>SUBSCRIBE NOW</div> <div><SendIcon /></div> </button>
                </div>
            </div>
            <div className={classes.footerFeed}>
                <div>
                    <div className={classes.Lift}>
                        <img src={icon1} alt="" className={classes.Lift_icon} />
                        <h4 className={classes.Lift_titel}>COVID-19</h4>
                    </div>
                    <p style={{ width: "300px" }}>
                        Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan.
                    </p>

                </div>

                <div>
                    <h4 className={classes.titelList}>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Doctors</li>
                        <li>FAQ's</li>
                        <li>Prevention</li>
                    </ul>
                </div>

                <div>
                    <h4 className={classes.titelList}>Contacts</h4>
                    <ul>
                        <li>Email: hello@cognizance.com</li>
                        <li>Phone: +44 587 154756</li>
                        <li>Fax: +55 785 4578964</li>
                    </ul>
                </div>

                <div>
                    <h4 className={classes.titelList}>Working Days</h4>
                    <ul>
                        <li>Monday: 8AM - 6PM</li>
                        <li>Tuesday: 8AM - 6PM</li>
                        <li>Wednesday: 8AM - 6PM</li>
                        <li>Thursday - Friday: 8AM - 6PM</li>
                        <li>Sunday: 8AM - 6PM</li>
                    </ul>
                </div>
            </div>
            <div className={classes.rootCopyright}>
                <div>Copyright © 2021 Cognizance. Designed by HiBootstrap</div>
            </div>
        </div>
    )
}