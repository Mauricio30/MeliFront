export const apiData = {
    getProducts: {
        endpoint: (id) => `http://localhost:3001/api/items?q=${id}`,
        actionType: 'GETPRODUCTS',
        method: 'GET'
    },
    getProductDetail: {
        endpoint: (id) => `http://localhost:3001/api/items/${id}`,
        actionType: 'GETPRODUCT',
        method: 'GET'
    }
}