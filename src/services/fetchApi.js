import axios from "axios";
const url = 'https://covid19.mathdro.id/api';



export default async function fetchTracker() {

    try {
        const data = await axios.get(url)
        return data;

    } catch (error) {
        return error;
    }

}