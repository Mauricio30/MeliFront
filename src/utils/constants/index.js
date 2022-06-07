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

export const countryCurrencyDictionary = {
    USD: 'en-US',
    ARS: 'es-AR'
}

export const conditionProduct = {
    new: 'Nuevo',
    used: 'Usado',
    not_specified: 'No especificado'
}