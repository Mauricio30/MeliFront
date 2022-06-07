/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import { getProductDetailSteps } from "../../context/storeActions";
import { StoreContext } from "../../context/storeContext";
import { formatCurrency } from "../../utils";
import { conditionProduct } from "../../utils/constants";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { store, getDataAction } = useContext(StoreContext);
  const {
    productDetail: { item },
  } = store;
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    if (!item) {
      const productId = pathname.split("/")[2];
      const options = {
        type: "getProductDetail",
        query: productId,
        steps: getProductDetailSteps,
      };
      getDataAction(options);
    }
  }, []);
  return (
    <section id="ProductDetail" className="ProductDetail">
      {item && (
        <>
          <Breadcrumb paths={item.categories} />
          <div className="ProductDetail__card">
            <div className="ProductDetail__content">
              <img
                className="ProductDetail__picture"
                src={item.picture}
                alt={item.title}
                loading="eager"
              />
              <div className="ProductDetail__description">
                <h3 className="ProductDetail__description-title">Descripción del producto</h3>
                <span className="ProductDetail__description-text">{item.description}</span>
              </div>
            </div>
            <div className="ProductDetail__actions">
              <span>{`${conditionProduct[item.condition]} Vendidos ${
                item.sold_quantity
              }`}</span>
              <span>{item.title}</span>
              <h4>
                {formatCurrency(item.price.amount, item.price.currency)} <span>{item.price.decimals}</span>
              </h4>
              <Button name='Comprar' />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetail;
