import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { getProductDetailSteps } from "../../context/storeActions";
import { StoreContext } from "../../context/storeContext";

const ProductDetail = () => {
    const { store, getDataAction } = useContext(StoreContext);
    const { productDetail } = store;
    const location = useLocation();
    useEffect(() => {
        const { pathname } = location;
        if (!productDetail.item) {
            const productId = pathname.split('/')[2];
            const options = {
                type: "getProductDetail",
                query: productId,
                steps: getProductDetailSteps
              };
              getDataAction(options);
        }
    }, [])
    return <spa>Hola description</spa>
}

export default ProductDetail;