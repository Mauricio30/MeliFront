/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { StoreContext } from "../../context/storeContext";
import Icon from "../../assets/icons/meli-icon.svg";
import InputCustom from "../../components/InputCustom";
import { getProductsSteps } from '../../context/storeActions';
import "./SearchBox.scss";

const SearchBox = () => {
  const { store } = useContext(StoreContext);
  const { products } = store;
  const [textToSearch, setTextToSearch] = useState("");
  const { getDataAction } = useContext(StoreContext);
  const navigate = useNavigate();

  const changeTextSearch = (e) => {
    const {
      target: { value },
    } = e;
    setTextToSearch(value);
  };

  const getProducts = () => {
    const options = {
      type: "getProducts",
      query: textToSearch,
      steps: getProductsSteps
    };
    getDataAction(options);
  };

  useEffect(() => {
      console.log(products);
    if (products.items) navigate(`/items?search=${textToSearch}`, { replace: true });
  }, [products])

  const inputProps = {
    placeholder: "Nunca dejes de buscar",
    value: textToSearch,
    type: "search",
    icon: "search",
  };
  return (
    <section id="search-box" className="search-box">
      <img
        className="search-box__logo"
        src={Icon}
        alt="MeliIcon"
        width={35}
        height={35}
      />
      <InputCustom
        {...inputProps}
        onChange={changeTextSearch}
        onClick={getProducts}
      />
    </section>
  );
};

export default SearchBox;
