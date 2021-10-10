import { createStyles, makeStyles } from '@mui/styles';

export const useTrackerCountryDisStyle = makeStyles((theme) =>
    createStyles({
        root: {
            height: "500px",
            overflow: "hidden",
            overflowY: "scroll",
            marginTop: "100px",
            '&::-webkit-scrollbar': {
                width: '0.4em'
            },
            '&::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#aaa',
                outline: '1px solid slategrey'
            }
        },
        flag: {
            width: "23px",
            height: "14px",
            marginLeft: "15px",
            marginRight: "15px",
        },
        country: {
            display: "flex",
            alignItems: "center",
        },
        table: {
            // background: "#130947 !important",
            color :"#fff !important "
        }
    }
    ),
);
