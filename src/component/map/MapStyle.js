import { createStyles, makeStyles } from '@mui/styles';

export const useMapStyle = makeStyles((theme) =>
    createStyles({
        root: {
            height:"500px",
            background:"",
            padding:"1rem",
            borderRadius:"20px",
            marginTop:"16px",
            boxShadow:"0 0 8px -4px rgba(0, 0, 0, 0.5)"
        },
    }),
);


// .map {
//     height: 500px;
//     background-color: white;
//     padding: 1rem;
//     border-radius: 20px;
//     margin-top: 16px;
//     box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
//   }
  
//   .map .leaflet-container {
//     height: 100%;
//     border-radius: 12px;
//   }
  
//   .info-flag img {
//     width: 100px;
//     border-radius: 5px;
//   }
  
//   .info-name {
//     font-size: 20px;
//     font-weight: bold;
//     color: #555;
//   }
  
//   .info-container {
//     width: 150px;
//   }
  
//   .info-flag {
//     height: 80px;
//     width: 100%;
//     background-size: cover;
//     border-radius: 8px;
//   }
  
//   .info-confirmed,
//   .info-recovered,
//   .info-deaths {
//     font-size: 16px;
//     margin-top: 5px;
//   }