import React from "react";
import "../../../assets/css/client/checkout.css"
import Navbar from "../layout/Navbar";
import Breadcrumb from "../course/Breadcrumb";
import Footer from "../layout/Footer";

const CheckOut = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <section className="checkout-section">
                <h2>Checkout</h2>
                <div className="checkout-section-main-div">
                    <div className="form-container">
                        <form>
                            <div className="form-group">
                                <label htmlFor="full-name">Full name<span className="required"> *</span></label>
                                <input type="text" id="full-name" placeholder="Enter full name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address<span className="required"> *</span></label>
                                <input type="email" id="email" placeholder="Enter email address" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone number<span className="required"> *</span></label>
                                <input type="tel" id="phone" placeholder="Enter phone number" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country<span className="required"> *</span></label>
                                <select id="country" required>
                                    <option value="">Choose country</option>
                                    <option value="In">India</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>

                                </select>
                            </div>
                            <div className="form-group-grid">
                                <div className="form-group">
                                    <label htmlFor="enter-city">City</label>
                                    <input type="text" id="enter-city" placeholder="Enter city" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <input type="text" id="state" placeholder="Enter state" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip-code">Zip Code</label>
                                    <input type="text" id="zip-code" placeholder="Enter ZIP code" required />
                                </div>

                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">I have read and agree to the Terms and Conditions.</label>
                            </div>
                        </form>
                    </div>

                    <div className="checkout-review-cart-section">
                        <div className="cart-container">
                            <h3>Review your cart</h3>
                            <div className="course-cart-content">
                                <img
                                    src={require("../../../assets/image/course-thumbnail.png")}
                                    alt="logo"
                                />
                                <div className="course-cart-details">
                                    <span className="course-cart-name block pb-1 font-normal">DuoComfort Sofa Premium</span>
                                    <span className="course-cart-quantity">1x</span>
                                    <div className="course-cart-price pt-4 font-semibold">$20.00</div>
                                </div>
                            </div>
                            <div className="course-payment-section">
                                <div className="discount-code">
                                    <i className="fa-solid fa-ticket"></i>
                                    <input type="text" placeholder="Discount code" />
                                    <button className="course-payment-btn">Apply</button>
                                </div>
                                <div className="price-summary">
                                    <div className="price-row">
                                        <span>Subtotal</span>
                                        <span className="subtotal-price">$45.00</span>
                                    </div>
                                    <div className="price-row">
                                        <span>Discount</span>
                                        <span className="discount-price">-$10.00</span>
                                    </div>
                                    <div className="price-row total">
                                        <span>Total</span>
                                        <span>$35.00</span>
                                    </div>
                                </div>
                                <div className="pay-now-btn">
                                    <button>Pay Now</button>
                                </div>
                                <div className="secure-checkout">
                                    <span><i className="fa-solid fa-lock"></i>Secure Checkout - SSL Encrypted</span>
                                    <p>Ensuring your financial and personal details are secure
                                        during every transaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CheckOut;
