
import { createStyles, makeStyles } from '@mui/styles';

export const useProtectionStyle = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",
            backgroundColor: "#130947",
            display: "flex",
            flexDirection: "column",
        },
        titel: {

            textAlign: "center",
            marginTop: "20px",
            marginBottom: "40px",
            color: "#fff",
            fontSize: "25px",
        },
        ProtectionApp: {
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginBottom:"30px",
        },
        Protection: {
            border: "1px solid #20256f",
        },
        Protection_lifer: {
            height: "50px",
            backgroundColor: "#c35362",
            color: "#fff",
            textAlign: "center",
            paddingTop: "10px",
        },
        Protection_rigth: {
            height: "50px",
            backgroundColor: "#4f87fb",
            color: "#fff",
            textAlign: "center",
            paddingTop: "10px",
        },
    }),
);

export const usePozetionStyle = makeStyles((theme) =>
    createStyles({
        root: {
            width: "500px",
            height: "120px",
            backgroundColor: "#130947",
            display: "flex",
            justifyContent: "space-evenly",
            borderBottom: "1px solid #20256f",
            alignItems: "center",
            margin: "15px"
        },
        titel: {
            width: "100%",
            textAlign: "center",
            marginTop: "20px",
            color: "#fff",
            fontSize: "25px"
        },
        icon: {
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            backgroundColor: "#1b195e",
            margin: "5px",


        },
        textApp: {
            color: "#fff",
        },
        text_P: {
            color: "#bbb",
            fontSize: "13px",
            padding: "7px",

        },
        iconApp: {
            borderRadius: "50%",
            border: "1px solid #1b195e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }),
);
