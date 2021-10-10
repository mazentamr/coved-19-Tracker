import { useHeaderStyle } from './HeaderStyle'
import icon1 from '../../images/icon6.png'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

export default function Header() {
  const classes = useHeaderStyle();
  const [show, handlShow] = useState(false)
  const history = useHistory()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handlShow(true);
      } else handlShow(false);
    })
  }, [])

  const clickRoutTRACKER = () => {
    history.push('/tracker');
  }
  const clickRoutHOME = () => {
    history.push('/');
  }


  return (
    <div className={`${classes.root} ${show && classes.nave_black}`} >
      <div className={classes.headerLift}>
        <img src={icon1} alt="" className={classes.headerLift_icon} />
        <h4 className={classes.headerLift_titel}>COVID-19</h4>
      </div>
      <div className={classes.headerRigth}>
        <li className={classes.headerRigth_list} onClick={clickRoutHOME}>HOME</li>
        <li className={classes.headerRigth_list} onClick={clickRoutTRACKER}>COVID-19 TRACKER</li>
        <li className={classes.headerRigth_list}>home</li>
        <li className={classes.headerRigth_list}>home</li>
      </div>
    </div>
  )
}
