import { useState } from "react";
import { useDispatch } from "react-redux";
import ACTIONS from "../../redux/actions";
import "./Product.css";

const Product = ({ product, purchasable }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const { title, brand, color, price, discoundPercentage, imgSrc } = product;

  const discountedPrice = (price - (price * discoundPercentage) / 100).toFixed(
    2
  );
  function addItem() {
    dispatch({
      type: ACTIONS.ADD_ITEM_TO_BASKET,
      payload: product,
    });
  }

  return (
    <div
      className="product"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="product__img__container">
        <img
          className="product__img"
          src={process.env.PUBLIC_URL + `/imgs/${imgSrc}`}
          alt="product"
        />
      </div>
      <div style={{ opacity: !isShown ? 1 : 0 }}>
        <p className="product__title">{title}</p>
        <div className="product__filters">
          <p className="product__brand">
            <strong>Marka: </strong>
            {brand}
          </p>
          <p className="product__color">
            <strong>Renk: </strong>
            {color}
          </p>
        </div>
        <div className="product__priceWrapper">
          <p className="product__price__discounted">{discountedPrice} TL</p>
          <p className="product__price">
            {price} TL <span>%{discoundPercentage}</span>
          </p>
        </div>
      </div>
      {purchasable ? (
        <button
          onClick={addItem}
          className="product__add"
          style={{ opacity: isShown ? 1 : 0 }}
        >
          Sepete Ekle
        </button>
      ) : (
        <button
          className="product__add disabled"
          style={{ opacity: isShown ? 1 : 0 }}
        >
          Bu ürünü sepete ekleyemezsiniz.
        </button>
      )}
    </div>
  );
};

export default Product;
