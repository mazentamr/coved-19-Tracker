import { createStyles, makeStyles } from '@mui/styles';

export const useTrackerStyle = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",

        },
        titel: {
            width: "100%",
            textAlign: "center",
            marginTop: "30px",
            color: "#130947",
            fontSize: "25px"
        },
        tracer_list: {
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap:"wrap",
            marginTop: "20px",
            marginBottom:"50px"
        }
    }
    ),
);

export const useStatisticsStyle = makeStyles((theme) =>
    createStyles({
        root: {
            height: "70px",
            width: "210px",
            border: "1px solid #d9e1f2",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "5px",
            margin:"10px",
        },
        titel: {

        },
        statistics_num: {
            color: (props) => props.color,
        },
        dis: {
            color: "#6f9dfc",

        }
    }
    ),
);
