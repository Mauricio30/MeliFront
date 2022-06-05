export const apiData = {
    getProducts: {
        endpoint: (id) => `http://localhost:3001/api/items?q=${id}`,
        actionType: 'GETPRODUCTS',
        method: 'GET'
    }
}