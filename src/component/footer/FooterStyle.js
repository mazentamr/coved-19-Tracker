import { createStyles, makeStyles } from '@mui/styles';

export const useFooterStyle = makeStyles((theme) =>
    createStyles({
        root: {
            width:"100%",
            backgroundColor: "#130947",
        },
        headFooter:{
            width:"100%",
            height:"200px",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-evenly",
            borderBottom:"1px solid #1b1b60"
        },
        headFooterText:{
            color:"#fff",
        },
        P_input:{
            height:"50px",
            display:"flex",
        },
        input:{
            height:"48px",
            width:"500px",
            border:"none",
            borderBottomLeftRadius:"5px",
            borderTopLeftRadius:"5px",
        },
        button:{
            width:"180px",
            height:"100%",
            border:"none",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-evenly",
            color:"#fff",
            background:"#3f50b5",
            borderBottomRightRadius:"5px",
            borderTopRightRadius:"5px",
            cursor:"pointer",
        },
        rootCopyright:{
            width:"100%",
            height:"80px",
            backgroundColor:"#07002b",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"#fff",
        },
        footerFeed:{
            color:"#fff",
            display:"flex",
            justifyContent:"space-evenly",
            marginTop:"50px",
            marginBottom:"50px",

        },
        Lift: {
            marginTop:"5px",
            marginBottom:"5px",
            display: "flex",
            alignItems:"center"
        },
        Lift_icon: {
            marginLeft:"20px",
            marginRight:"20px",
            width: "40px",
            height:"40px",
        },
        Lift_titel:{
            color:"#fff",
            fontSize:"27px",
        },
        titelList:{
            marginBottom:"20px",
                       
        }
    })
)