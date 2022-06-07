import { apiData } from "../utils/constants";

export const ApiService = (dispatch, options) => {
        const { type, query, steps } = options;
        dispatch(steps.request());
        const { endpoint, method } = apiData[type];
        fetch(endpoint(query), {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Connection: 'keep-alive',
            }
        }).then(response => response.json())
        .then(data => dispatch(steps.recieve(data)))
        .catch(err => {
            dispatch(steps.recieve(err));
        });
}