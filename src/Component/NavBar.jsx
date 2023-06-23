import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      {/* <!-- Page Preloder --> */}
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}

      {/* <!-- Offcanvas Menu Begin --> */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__close">+</div>
        <ul className="offcanvas__widget">
          <li>
            <span className="icon_search search-switch"></span>
          </li>
          <li>
            <Link to="#">
              <span className="icon_heart_alt"></span>
              <div className="tip">2</div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon_bag_alt"></span>
              <div className="tip">2</div>
            </Link>
          </li>
        </ul>
        <div className="offcanvas__logo">
          <Link to="/">
            <img src="/img/logo.png" alt="" />
          </Link>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__auth">
          <Link to="#">Login</Link>
          <Link to="#">Register</Link>
        </div>
      </div>
      {/* <!-- Offcanvas Menu End --> */}

      {/* <!-- Header Section Begin --> */}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div
                className="header__logo banner__text "
                style={{ margin: "-20px 0px" }}
              >
                {/* <Link to="./index.html">
                  <img src="/img/logo.png" alt="" />
                </Link> */}
                <h1 style={{ fontSize: "50px" }}>Vanny</h1>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop/Female/All/All">Women’s</Link>
                  </li>
                  <li>
                    <Link to="/shop/Male/All/All">Men’s</Link>
                  </li>
                  <li>
                    <Link to="/shop/Kids/All/All">Kid's</Link>
                  </li>
                  <li>
                    <Link to="/shop/All/All/All">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/productdetails">Product Details</Link>
                      </li>
                      <li>
                        <Link to="/cart">Shop Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/adminhome">Admin</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
            <nav className="header__menu">
                <ul>
                  <li className="ml-5">
                    <Link to="#">User Name</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <button className="btn text-light pl-3 btn-sm">Logout</button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End --> */}
    </>
  );
}
