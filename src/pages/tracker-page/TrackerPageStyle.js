import { createStyles, makeStyles } from '@mui/styles';

export const useTrackerPageStyle = makeStyles((theme) =>
    createStyles({
        root: {
            

        },
        trackerTable:{
            display:"flex",
            justifyContent:"space-evenly",
            flexWrap:"wrap",
        }
    }
    ),
);
