import { createStyles, makeStyles } from '@mui/styles';

export const useQuestionStyle = makeStyles((theme) =>
    createStyles({
        root: {
            width:"100%",
            backgroundColor:"#f9f9f9",
        },
        Questions:{
            display:"flex",
            justifyContent:"space-evenly",
            flexWrap:"wrap",
        },
        titel: {

            textAlign: "center",
            marginTop: "20px",
            marginBottom:"40px",
            color: "#130947",
            fontSize: "25px",
        },
      
    }),
);


export const useQuestionsFeed = makeStyles((theme) =>
    createStyles({
        root: {
            margin:"15px",
        },
        QuestionsFeed:{
            width:"550px",
            // height:"80px"
        }
    }),
);