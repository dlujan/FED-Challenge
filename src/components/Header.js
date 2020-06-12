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
            <div>
                <header ref={this.headerRef}>
                    <nav className="product-nav">
                        <ul>
                            <li style={{borderLeft: 'solid 1px #D5D6D6'}}><a href="!#">Blog</a></li>
                            <li style={{borderLeft: 'solid 1px #D5D6D6', borderRight: 'solid 1px #D5D6D6'}}><a href="!#">Nourish</a></li>
                            <li style={{borderRight: 'solid 1px #D5D6D6'}}><a href="!#">Shop</a></li>
                        </ul>
                    </nav>
                    <nav className="main-nav">
                        <div className="mobile-nav">
                            <div><a href="!#"><img src={iFitLogo} alt="iFit logo"/></a></div>
                            <div className={`burger-toggle ${this.state.mobileMenuOpen ? 'mobile-menu-open' : ''}`} onClick={this.handleMenuOpen}>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="full-nav" style={{transform: this.state.mobileMenuOpen ? 'translateX(0%)' : ''}}>
                            <div><a href="!#"><img src={iFitLogo} alt="iFit logo"/></a></div>
                            <ul>
                                <li><a href="!#" onClick={this.handleMenuOpen}>Exercise</a></li>
                                <li><a href="!#" onClick={this.handleMenuOpen}>Nutrition</a></li>
                                <li><a href="!#" onClick={this.handleMenuOpen}>Activity</a></li>
                                <li><a href="!#" onClick={this.handleMenuOpen}>Sleep</a></li>
                            </ul>
                            <div className="signup-btn">
                                <button>Sign Up</button>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
