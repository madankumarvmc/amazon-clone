import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="op"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/ssserene/OPmarble/D66357764_WLD_OnePlus_Salami_NewLaunch_DesktopTallHero_3000x1200._CB588027582_.jpg"
          data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/ssserene/OPmarble/D66357764_WLD_OnePlus_Salami_NewLaunch_DesktopTallHero_3000x1200._CB588027582_.jpg"
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Age of Empire"
            price={149}
            image='https://m.media-amazon.com/images/I/61dlLf-4WIL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/61dlLf-4WIL._AC_SY400_.jpg'
            rating={4}
          />
          <Product
            id="2"
            title="An Uncertain Glory"
            price={249}
            image="https://m.media-amazon.com/images/I/81LsL6WeGFL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="3"
            title="India in the Persianate Age"
            price={299}
            image="https://m.media-amazon.com/images/I/91m9s8bXLFL._AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Democrats And Dissenters"
            price={299}
            image="https://m.media-amazon.com/images/I/71+9IsbHRGL._AC_SY200_.jpg"
            rating={4}
          />
          {/* Product  */}
          {/* Product  */}
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
          {/* Product  */}
          {/* Product  */}
          {/* Product  */}
        </div>
        <div className="home__row">
          <Product />
          {/* Product  */}
        </div>
      </div>
    </div>
  );
}

export default Home;
