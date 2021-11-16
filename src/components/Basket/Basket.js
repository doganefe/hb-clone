import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ACTIONS from "../../redux/actions";
import "./Basket.css";

const BasketItem = ({ item, removeItem }) => {
  return (
    <div className="basket__basketItem">
      <div className="basket__basketItem__imgContainer">
        <img
          className="basket__basketItem__img"
          src={`${process.env.PUBLIC_URL}/imgs/${item.imgSrc}`}
          alt="basketItem"
        />
      </div>
      <div className="basket__basketItem__info">
        <p className="basket__basketItem__info__title">{item.title}</p>
        <button
          onClick={() => removeItem(item.id, item.title)}
          className="basket__basketItem__info__btn"
        >
          Kaldır
        </button>
      </div>
    </div>
  );
};

const Basket = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const basketItems = useSelector((state) => state.basketItems);
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const dispatch = useDispatch();
  const basketRef = useRef();

  //outside detection
  useEffect(() => {
    function outsideClick(e) {
      if (
        isBasketOpen &&
        !isModalOpen &&
        !basketRef.current.contains(e.target) &&
        e.target.className !== "basket__basketItem__info__btn"
      ) {
        setIsBasketOpen(false);
      }
    }
    window.addEventListener("click", outsideClick);

    return () => window.removeEventListener("click", outsideClick);
  }, [isBasketOpen, isModalOpen]);

  function toggleBasket() {
    setIsBasketOpen((prev) => !prev);
  }

  function modalKapat() {
    dispatch({
      type: ACTIONS.SET_DIALOG,
      payload: {
        dialog: {},
        isModalOpen: false,
      },
    });
  }

  function removeItem(id, title) {
    dispatch({
      type: ACTIONS.SET_DIALOG,
      payload: {
        isModalOpen: true,
        dialog: {
          description: title,
          confirm: () => {
            dispatch({
              type: ACTIONS.REMOVE_ITEM_FROM_BASKET,
              payload: id,
            });
            modalKapat();
          },
          reject: modalKapat,
        },
      },
    });
  }

  return (
    <div className="basket" ref={basketRef}>
      <div
        className="basket__inner"
        onClick={toggleBasket}
        style={{ borderBottom: isBasketOpen ? "0" : "1px solid #B0B0B0" }}
      >
        <p>Sepetim</p>
      </div>
      <div className="basket__badge">
        <p>{basketItems.length}</p>
      </div>
      {isBasketOpen && (
        <div className="basket__rectangle">
          {basketItems.map((item, i) => {
            return <BasketItem key={i} item={item} removeItem={removeItem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Basket;
