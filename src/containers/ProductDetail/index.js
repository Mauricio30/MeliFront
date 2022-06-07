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
    <section id="ProductDetail" className="product-detail">
      {item && (
        <>
          <Breadcrumb paths={item.categories} />
          <div className="product-detail__card">
            <div className="product-detail__content">
              <img
                className="product-detail__picture"
                src={item.picture}
                alt={item.title}
                loading="eager"
              />
              <div className="product-detail__description">
                <h3 className="product-detail__description-title">
                  Descripción del producto
                </h3>
                <span className="product-detail__description-text">
                  {item.description}
                </span>
              </div>
            </div>
            <div className="product-detail__actions">
              <span className="product-detail__condition-text">{`${conditionProduct[item.condition]} | ${
                item.sold_quantity
              } vendidos`}</span>
              <span className="product-detail__title">{item.title}</span>
              <span className="product-detail__price">
                {formatCurrency(item.price.amount, item.price.currency)}{" "}
                <span className="product-detail__price-decimals">{item.price.decimals}</span>
              </span>
              <Button name="Comprar" />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetail;
