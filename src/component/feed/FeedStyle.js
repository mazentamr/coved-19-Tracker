import { createStyles, makeStyles } from '@mui/styles';
import main from "../../images/main-banner4.jpg"
export const useFeedStyle = makeStyles((theme) =>
    createStyles({
        root: {
            width:"100vm",
            height:"100vh",
            backgroundImage:`url(${main})`,
            backgroundSize:"cover",
            backgroundAttachment:"fixed",
            display:"flex",
            alignItems:"center",
            justifyContent:"flex-end"
        },
        feed:{
            marginRight:"50px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
        },
        feedText:{
            color:"#fff",
            fontSize:"45px"
        },
        feedButton:{
            marginTop:"20px !important",
            backgroundColor:"#fff !important",
            color:"#fff",
        },      
        feed_p:{
            color:"#fff", 
        },
        video_youtube:{
            width:"100%",
            padding:"0px 0px",
        }
    }),
);
