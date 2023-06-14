import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

export default function ProductDetails(props) {
    return (
        <>
           {/* <!-- Breadcrumb Begin --> */}
    <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__links">
                        <Link to="/"><i className="fa fa-home"></i> Home</Link>
                        <Link to="#">Women’s </Link>
                        <span>Essential structured blazer</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Product Details Section Begin --> */}
    <section className="product-details spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="product__details__pic">
                        <div className="product__details__pic__left product__thumb nice-scroll">
                            <Link className="pt active" to="#product-1">
                                <img src="/img/product/details/thumb-1.jpg" alt=""/>
                            </Link>
                            <Link className="pt" to="#product-2">
                                <img src="/img/product/details/thumb-2.jpg" alt=""/>
                            </Link>
                            <Link className="pt" to="#product-3">
                                <img src="/img/product/details/thumb-3.jpg" alt=""/>
                            </Link>
                            <Link className="pt" to="#product-4">
                                <img src="/img/product/details/thumb-4.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="product__details__slider__content">
                            <OwlCarousel className="product__details__pic__slider" loop margin={10} items={1} nav>
                                <img data-hash="product-1" className="product__big__img" src="/img/product/details/product-1.jpg" alt=""/>
                                <img data-hash="product-2" className="product__big__img" src="/img/product/details/product-3.jpg" alt=""/>
                                <img data-hash="product-3" className="product__big__img" src="/img/product/details/product-2.jpg" alt=""/>
                                <img data-hash="product-4" className="product__big__img" src="/img/product/details/product-4.jpg" alt=""/>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product__details__text">
                        <h3>Essential structured blazer <span>Brand: SKMEIMore Men Watches from SKMEI</span></h3>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>( 138 reviews )</span>
                        </div>
                        <div className="product__details__price">$ 75.0 <span>$ 83.0</span></div>
                        <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                        magni lores eos qui ratione voluptatem sequi nesciunt.</p>
                        <div className="product__details__button">
                            <div className="quantity">
                                <span>Quantity:</span>
                                <div className="pro-qty">
                                    <input type="text" value="1"/>
                                </div>
                            </div>
                            <Link to="#" className="cart-btn"><span className="icon_bag_alt"></span> Add to cart</Link>
                            <ul>
                                <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                                <li><Link to="#"><span className="icon_adjust-horiz"></span></Link></li>
                            </ul>
                        </div>
                        <div className="product__details__widget">
                            <ul>
                                <li>
                                    <span>Availability:</span>
                                    <div className="stock__checkbox">
                                        <label for="stockin">
                                            In Stock
                                            <input type="checkbox" id="stockin"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Available color:</span>
                                    <div className="color__checkbox">
                                        <label for="red">
                                            <input type="radio" name="color__radio" id="red" checked/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label for="black">
                                            <input type="radio" name="color__radio" id="black"/>
                                            <span className="checkmark black-bg"></span>
                                        </label>
                                        <label for="grey">
                                            <input type="radio" name="color__radio" id="grey"/>
                                            <span className="checkmark grey-bg"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Available size:</span>
                                    <div className="size__btn">
                                        <label for="xs-btn" className="active">
                                            <input type="radio" id="xs-btn"/>
                                            xs
                                        </label>
                                        <label for="s-btn">
                                            <input type="radio" id="s-btn"/>
                                            s
                                        </label>
                                        <label for="m-btn">
                                            <input type="radio" id="m-btn"/>
                                            m
                                        </label>
                                        <label for="l-btn">
                                            <input type="radio" id="l-btn"/>
                                            l
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Promotions:</span>
                                    <p>Free shipping</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="product__details__tab">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link active" data-toggle="tab" to="#tabs-1" role="tab">Description</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#tabs-2" role="tab">Specification</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#tabs-3" role="tab">Reviews ( 2 )</Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <h6>Description</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                consequat massa quis enim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem.</p>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <h6>Specification</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                consequat massa quis enim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem.</p>
                            </div>
                            <div className="tab-pane" id="tabs-3" role="tabpanel">
                                <h6>Reviews ( 2 )</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                consequat massa quis enim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="related__title">
                        <h5>RELATED PRODUCTS</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/related/rp-1.jpg")'}}>
                            <div className="label new">New</div>
                            <ul className="product__hover">
                                <li><Link to="img/product/related/rp-1.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
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
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/related/rp-2.jpg")'}}>
                            <ul className="product__hover">
                                <li><Link to="img/product/related/rp-2.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
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
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/related/rp-3.jpg")'}}>
                            <div className="label stockout">out of stock</div>
                            <ul className="product__hover">
                                <li><Link to="img/product/related/rp-3.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
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
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" style={{backgroundImage:'url("img/product/related/rp-4.jpg")'}}>
                            <ul className="product__hover">
                                <li><Link to="img/product/related/rp-4.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
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
            </div>
        </div>
    </section>
    {/* <!-- Product Details Section End --> */}
        </>
    );
}