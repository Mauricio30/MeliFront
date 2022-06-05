import { apiData } from "../constants";

export const useFetch = () => {
    const callService = (type, query) => {
        console.log(type, query);
        const { endpoint, method } = apiData[type];
        fetch(endpoint(query), {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Connection: 'keep-alive',
            }
        }).then(response => response.json())
        .then(data => console.log(data));
    }
    return { callService };
}