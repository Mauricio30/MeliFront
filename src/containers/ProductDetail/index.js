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
                <h3 className="ProductDetail__description-title">
                  Descripción del producto
                </h3>
                <span className="ProductDetail__description-text">
                  {item.description}
                </span>
              </div>
            </div>
            <div className="ProductDetail__actions">
              <span className="ProductDetail__condition-text">{`${conditionProduct[item.condition]} | ${
                item.sold_quantity
              } vendidos`}</span>
              <span className="ProductDetail__title">{item.title}</span>
              <span className="ProductDetail__price">
                {formatCurrency(item.price.amount, item.price.currency)}{" "}
                <span className="ProductDetail__price-decimals">{item.price.decimals}</span>
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
