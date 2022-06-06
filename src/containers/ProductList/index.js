/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { StoreContext } from "../../context/storeContext";
import { getProductDetailSteps } from "../../context/storeActions";
import "./ProductList.scss";

const ProductList = () => {
  const [ productId, setProductId ] = useState(); 
  const { store, getDataAction } = useContext(StoreContext);
  const { products, productDetail } = store;
  const navigate = useNavigate();
  useEffect(() => {
    console.log(productDetail);
  if (productDetail.item) navigate(`/items/${productId}`, { replace: true });
}, [productDetail])
  const getProductDetail = (itemId) => {
    const options = {
      type: "getProductDetail",
      query: itemId,
      steps: getProductDetailSteps
    };
    getDataAction(options);
    setProductId(itemId);
  };
  return (
    <section id="ProductList" className="ProductList">
      {products.categories && (
        <>
          <Breadcrumb paths={products.categories} />
          <div className="ProductList__card">
            {products.items.slice(0, 4).map((item) => (
              <div key={item.id} className="ProductList__card-item" onClick={() => getProductDetail(item.id)} >
                <img src={item.picture} alt={item.id} width={160} height={160} loading="eager" />
                <div>
                  <h4>{item.title}</h4>
                  <span>{item.price.amount}</span>
                </div>
                <span>{item.condition}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductList;
