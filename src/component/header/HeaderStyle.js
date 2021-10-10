import { createStyles, makeStyles } from '@mui/styles';

export const useHeaderStyle = makeStyles((theme) =>
    createStyles({
        root: {
            height: "70px",
            width: "100%",
            display:"flex",
            justifyContent:"space-between",
            position:"fixed",
            top:"0",
            bottom:"0",
            right:"0",
            zIndex:"9999",
            transition:"all 0.5s ease-in",
        },
        nave_black:{
            backgroundColor:"#130947",
            color:"#fff"
        },
        headerLift: {
            marginTop:"5px",
            marginBottom:"5px",
            display: "flex",
            alignItems:"center"
        },
        headerLift_icon: {
            marginLeft:"20px",
            marginRight:"20px",
            width: "40px",
            height:"40px",
        },
        headerLift_titel:{
            color:"#fff",
            fontSize:"27px",
        },
        headerRigth:{
            display:"flex",
            alignItems:"center",
            marginRight:"30px",
        },
        headerRigth_list:{
            listStyleType:"none",
            marginLeft:"20px",
            fontSize:"15px",
            cursor:"pointer",
            color:"#fff"
        }
    }),
);
