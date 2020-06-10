import React, { Component } from 'react';
import iFitLogo from '../images/logos/ifit-coach-logo.svg';

export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            mobileMenuOpen: false
        }
    }

    handleMenuOpen = () => {
        this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen })
    }

    render() {
        return (
            <div className="Header">
                <nav className="product-nav">
                    <ul>
                        <li><a href="!#">Blog</a></li>
                        <li><a href="!#">Nourish</a></li>
                        <li><a href="!#">Shop</a></li>
                    </ul>
                </nav>
                <nav className="main-nav">
                    <div className="mobile-nav">
                        <div><img src={iFitLogo} alt="iFit logo"/></div>
                        <div className={`burger-toggle ${this.state.mobileMenuOpen ? 'mobile-menu-open' : ''}`} onClick={this.handleMenuOpen}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="full-nav" style={{transform: this.state.mobileMenuOpen ? 'translateX(0%)' : ''}}>
                        <div><img src={iFitLogo} alt="iFit logo"/></div>
                        <ul>
                            <li><a href="!#">Exercise</a></li>
                            <li><a href="!#">Nutrition</a></li>
                            <li><a href="!#">Activity</a></li>
                            <li><a href="!#">Sleep</a></li>
                        </ul>
                        <div className="signup-btn">
                            <button>Sign Up</button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
