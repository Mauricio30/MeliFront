import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { StoreContext } from "../../context/storeContext";
import "./ProductList.scss";

const ProductList = () => {
  const { store } = useContext(StoreContext);
  const { products, productsIsLoading } = store;
  const navigate = useNavigate();
  const goToDetail = () => {
      console.log('products')
    navigate("/items/12345", { replace: true });
  }
  return (
    <section id="ProductList" className="ProductList">
      {products.categories && (
        <>
          <Breadcrumb paths={products.categories} />
          <div className="ProductList__card">
            {products.items.slice(0, 4).map((item) => (
              <div key={item.id} className="ProductList__card-item" onClick={goToDetail} >
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
