import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
export default function Home(props) {
    return (
        <>
             {/* <!-- Categories Section Begin --> */}
    <section className="categories">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="categories__item categories__large__item set-bg"
                    style={{backgroundImage:'url("img/categories/category-1.jpg")'}}>
                    <div className="categories__text">
                        <h1>Women’s fashion</h1>
                        <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
                        edolore magna aliquapendisse ultrices gravida.</p>
                        <Link to="#">Shop now</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div className="categories__item set-bg" style={{backgroundImage:'url("img/categories/category-2.jpg")'}}>
                            <div className="categories__text">
                                <h4>Men’s fashion</h4>
                                <p>358 items</p>
                                <Link to="#">Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div className="categories__item set-bg" style={{backgroundImage:'url("img/categories/category-3.jpg")'}}>
                            <div className="categories__text">
                                <h4>Kid’s fashion</h4>
                                <p>273 items</p>
                                <Link to="#">Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div className="categories__item set-bg" style={{backgroundImage:'url("img/categories/category-4.jpg")'}}>
                            <div className="categories__text">
                                <h4>Cosmetics</h4>
                                <p>159 items</p>
                                <Link to="#">Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div className="categories__item set-bg" style={{backgroundImage:'url("img/categories/category-5.jpg")'}}>
                            <div className="categories__text">
                                <h4>Accessories</h4>
                                <p>792 items</p>
                                <Link to="#">Shop now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Categories Section End --> */}

{/* <!-- Product Section Begin --> */}
<section className="product spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4">
                <div className="section-title">
                    <h4>New product</h4>
                </div>
            </div>
            <div className="col-lg-8 col-md-8">
                <ul className="filter__controls">
                    <li className="active" data-filter="*">All</li>
                    <li data-filter=".women">Women’s</li>
                    <li data-filter=".men">Men’s</li>
                    <li data-filter=".kid">Kid’s</li>
                    <li data-filter=".accessories">Accessories</li>
                    <li data-filter=".cosmetic">Cosmetics</li>
                </ul>
            </div>
        </div>
        <div className="row property__gallery">
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/product-1.jpg")'}}>
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><Link to="img/product/product-1.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                            <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                            <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><Link to="#">Buttons tweed blazer</Link></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix men">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/product-2.jpg")'}}>
                        <ul className="product__hover">
                            <li><Link to="img/product/product-2.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                            <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                            <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><Link to="#">Flowy striped skirt</Link></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/product-3.jpg")'}}>
                        <div className="label stockout">out of stock</div>
                        <ul className="product__hover">
                            <li><Link to="img/product/product-3.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                            <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                            <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><Link to="#">Cotton T-Shirt</Link></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/product-4.jpg")'}}>
                        <ul className="product__hover">
                            <li><Link to="img/product/product-4.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                            <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                            <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><Link to="#">Slim striped pocket shirt</Link></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/product-5.jpg")'}}>
                        <ul className="product__hover">
                            <li><Link to="img/product/product-5.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                            <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                            <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><Link to="#">Fit micro corduroy shirt</Link></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item sale">
                    <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/product-6.jpg")'}}>
                        <div className="label sale">Sale</div>
                        <ul className="product__hover">
                            <li><Link to="img/product/product-6.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                            <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                            <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><Link to="#">Tropical Kimono</Link></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/product-7.jpg")'}}>
                        <ul className="product__hover">
                            <li><Link to="img/product/product-7.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                            <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                            <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><Link to="#">Contrasting sunglasses</Link></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item sale">
                    <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/product-8.jpg")'}}>
                        <div className="label">Sale</div>
                        <ul className="product__hover">
                            <li><Link to="img/product/product-8.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                            <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                            <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><Link to="#">Water resistant backpack</Link></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Product Section End --> */}

{/* <!-- Banner Section Begin --> */}
<section className="banner set-bg" style={{backgroundImage:'url("img/banner/banner-1.jpg")'}}>
    <div className="container">
        <div className="row">
            <div className="col-xl-7 col-lg-8 m-auto">
                <OwlCarousel  loop navText={(1)} margin={10} items={1} style={{justifyContent:"center",margin:"200px 0"}}>
                    <div className="banner__item">
                        <div className="banner__text text-center">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <Link to="#">Shop now</Link>
                        </div>
                    </div>
                    <div className="banner__item">
                        <div className="banner__text text-center">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <Link to="#">Shop now</Link>
                        </div>
                    </div>
                    <div className="banner__item">
                        <div className="banner__text text-center">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <Link to="#">Shop now</Link>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </div>
</section>
{/* <!-- Banner Section End --> */}

{/* <!-- Trend Section Begin --> */}
<section className="trend spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                    <div className="section-title">
                        <h4>Hot Trend</h4>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="img/trend/ht-1.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Chain bucket bag</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="img/trend/ht-2.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Pendant earrings</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="img/trend/ht-3.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Cotton T-Shirt</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                    <div className="section-title">
                        <h4>Best seller</h4>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="img/trend/bs-1.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Cotton T-Shirt</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="img/trend/bs-2.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="img/trend/bs-3.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Round leather bag</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                    <div className="section-title">
                        <h4>Feature</h4>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="img/trend/f-1.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Bow wrap skirt</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="img/trend/f-2.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Metallic earrings</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="img/trend/f-3.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Flap cross-body bag</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Trend Section End --> */}

{/* <!-- Discount Section Begin --> */}
<section className="discount">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 p-0">
                <div className="discount__pic">
                    <img src="img/discount.jpg" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 p-0">
                <div className="discount__text">
                    <div className="discount__text__title">
                        <span>Discount</span>
                        <h2>Summer 2019</h2>
                        <h5><span>Sale</span> 50%</h5>
                    </div>
                    <div className="discount__countdown" id="countdown-time">
                        <div className="countdown__item">
                            <span>22</span>
                            <p>Days</p>
                        </div>
                        <div className="countdown__item">
                            <span>18</span>
                            <p>Hour</p>
                        </div>
                        <div className="countdown__item">
                            <span>46</span>
                            <p>Min</p>
                        </div>
                        <div className="countdown__item">
                            <span>05</span>
                            <p>Sec</p>
                        </div>
                    </div>
                    <Link to="#">Shop now</Link>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Discount Section End --> */}

{/* <!-- Services Section Begin --> */}
<section className="services spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                    <i className="fa fa-car"></i>
                    <h6>Free Shipping</h6>
                    <p>For all oder over $99</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                    <i className="fa fa-money"></i>
                    <h6>Money Back Guarantee</h6>
                    <p>If good have Problems</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                    <i className="fa fa-support"></i>
                    <h6>Online Support 24/7</h6>
                    <p>Dedicated support</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                    <i className="fa fa-headphones"></i>
                    <h6>Payment Secure</h6>
                    <p>100% secure payment</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Services Section End --> */}

{/* <!-- Instagram Begin --> */}
<div className="instagram">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" style={{backgroundImage:'url("img/instagram/insta-1.jpg")'}}>
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <Link to="#">@ ashion_shop</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" style={{backgroundImage:'url("img/instagram/insta-2.jpg")'}}>
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <Link to="#">@ ashion_shop</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" style={{backgroundImage:'url("img/instagram/insta-3.jpg")'}}>
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <Link to="#">@ ashion_shop</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" style={{backgroundImage:'url("img/instagram/insta-4.jpg")'}}>
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <Link to="#">@ ashion_shop</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" style={{backgroundImage:'url("img/instagram/insta-5.jpg")'}}>
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <Link to="#">@ ashion_shop</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" style={{backgroundImage:'url("img/instagram/insta-6.jpg")'}}>
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <Link to="#">@ ashion_shop</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Instagram End --> */}
        </>
    );
}