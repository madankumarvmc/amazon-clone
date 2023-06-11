import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("This is the basket>>>", basket);

  const addToBasket = () => {
    //dispatch the items into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> &#9733;</p>
            ))}
          {rating < 5 && (
            <>
              {Array(5 - rating)
                .fill()
                .map((_, i) => (
                  <p> &#9734;</p>
                ))}
            </>
          )}
        </div>
      </div>
      <img class="product__image" src={image} />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;

// &#9734;
