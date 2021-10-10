import axios from "axios";
const url = 'https://disease.sh/v3';

export async function fetchTracker() {

    try {
        const data = await axios.get(`${url}/covid-19/all`)
        return data;

    } catch (error) {
        return error;
    }

}


export async function fetchTrackerCountry() {

    try {
        const data = await axios.get(`${url}/covid-19/countries`)
        return data;

    } catch (error) {
        return error;
    }

}
