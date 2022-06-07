/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { StoreContext } from "../../context/storeContext";
import { getProductDetailSteps } from "../../context/storeActions";
import { formatCurrency } from "../../utils";
import { conditionProduct } from "../../utils/constants";
import "./ProductList.scss";

const ProductList = () => {
  const [productId, setProductId] = useState();
  const [numberProducts, setNumberProducts] = useState(4);
  const { store, getDataAction } = useContext(StoreContext);
  const { products, productDetail } = store;
  const navigate = useNavigate();
  useEffect(() => {
    console.log(productDetail);
    if (productDetail.item) navigate(`/items/${productId}`, { replace: true });
  }, [productDetail]);
  const changeNumberProducts = () => {
    console.log("change", numberProducts);
    const newMaxProducts = numberProducts + 4;
    if (newMaxProducts > products.items.length)
      setNumberProducts(products.items.length);
    else {
      setNumberProducts(newMaxProducts);
    }
  };
  const getProductDetail = (itemId) => {
    const options = {
      type: "getProductDetail",
      query: itemId,
      steps: getProductDetailSteps,
    };
    getDataAction(options);
    setProductId(itemId);
  };
  return (
    <section id="ProductList" className="product-list">
      {products.categories && (
        <>
          <Breadcrumb paths={products.categories} />
          <div className="product-list__card">
            {products.items.slice(0, numberProducts).map((item) => (
              <div
                key={item.id}
                className="product-list__card-item"
                onClick={() => getProductDetail(item.id)}
              >
                <img
                  src={item.picture}
                  alt={item.id}
                  width={160}
                  height={160}
                  loading="eager"
                />
                <div className="product-list__detail-content">
                  <h4 className="product-list__currency">
                    {formatCurrency(item.price.amount, item.price.currency)}{" "}
                    {item.free_shipping && (
                      <span className="product-list__circle" />
                    )}
                  </h4>
                  <span className="product-list__title">{item.title}</span>
                </div>
                <span className="product-list__detail-product">
                  {conditionProduct[item.condition]}
                </span>
              </div>
            ))}
          </div>
          <button className="product-list__link" onClick={changeNumberProducts}>
            Ver más
          </button>
        </>
      )}
    </section>
  );
};

export default ProductList;
