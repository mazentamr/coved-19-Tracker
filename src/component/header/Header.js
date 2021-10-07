import { useHeaderStyle } from './HeaderStyle'
import icon1 from '../../images/icon6.png'
export default function Header() {
    const classes = useHeaderStyle();
    return (
        <div className={classes.root}>
            <div className={classes.headerLift}>
                <img src={icon1} alt="" className={classes.headerLift_icon} />
                <h4 className={classes.headerLift_titel}>COVID-19</h4>
            </div>
            <div className={classes.headerRigth}>
                <li className={classes.headerRigth_list}>HOME</li>
                <li className={classes.headerRigth_list}>COVID-19 TRACKER</li>
                <li className={classes.headerRigth_list}>home</li>
                <li className={classes.headerRigth_list}>home</li>
            </div>
        </div>
    )
}
