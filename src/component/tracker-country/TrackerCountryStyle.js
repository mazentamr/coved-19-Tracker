import { createStyles, makeStyles } from '@mui/styles';

export const useTrackerCountryStyle = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: "100px",
            width: "250px",
            height: "500px",
            borderRadius: "10px",
            overflow: "hidden",
            overflowY: "scroll",
            background: "#130947",
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
        scrollBar: {
            // '&::-webkit-scrollbar': {
            //   width: '0.4em'
            // },
            // '&::-webkit-scrollbar-track': {
            //   '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            // },
            // '&::-webkit-scrollbar-thumb': {
            //   backgroundColor: 'rgba(0,0,0,.1)',
            //   outline: '1px solid slategrey'
            // }
        },
        row: {
            display: "flex",
            justifyContent: "space-between",
            color: "#fff",
        },
        country: {
            margin: "5px",
            color: "#fff",
        }
    }
    ),
);
