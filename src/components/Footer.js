import React, { Component } from 'react';
import youtube from '../images/logos/socials/icon-youtube.svg';
import pinterest from '../images/logos/socials/icon-pinterest.svg';
import facebook from '../images/logos/socials/icon-fb.svg';
import twitter from '../images/logos/socials/icon-twitter.svg';
import instagram from '../images/logos/socials/icon-insta.svg';

export default class Footer extends Component {
    constructor() {
        super();

        this.state = {
            companyOpen: false,
            accountOpen: false,
            supportOpen: false,
            language: 'English',
            languageMenuOpen: false
        }
    }

    // If I used a form I could use the 'name' attribute to just have one method but this will work
    //Conditionals check if user is on mobile
    handleCompanyOpen = () => {
        if (window.innerWidth < 768) {
            this.setState({ companyOpen: !this.state.companyOpen })
        }
    }
    handleAccountOpen = () => {
        if (window.innerWidth < 768) {
            this.setState({ accountOpen: !this.state.accountOpen })
        }
    }
    handleSupportOpen = () => {
        if (window.innerWidth < 768) {
            this.setState({ supportOpen: !this.state.supportOpen })
        }
    }

    handleLanguageMenu = () => {
        this.setState({ languageMenuOpen: !this.state.languageMenuOpen })
    }

    changeLanguage = (lang) => {
        this.setState({ 
            language: lang,
            languageMenuOpen: !this.state.languageMenuOpen
        })
    }

    // Check if screen is larger than mobile
    componentDidMount() {
        if (window.innerWidth >= 768) {
            this.setState({
                companyOpen: true,
                accountOpen: true,
                supportOpen: true
            })
        }
    }

    render() {
        return (
            <div>
                <footer>
                    <div className="links">
                        <div className="menu-container">
                            <div className="menu-button" onClick={this.handleCompanyOpen}>
                                <span>Company</span>
                                <span><i className={`footer-arrow ${this.state.companyOpen ? 'menu-open' : ''}`}></i></span>
                            </div>
                            <ul style={{display: this.state.companyOpen ? '' : 'none'}}>
                                <li><a href="!#">About</a></li>
                                <li><a href="!#">Contact Us</a></li>
                                <li><a href="!#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="menu-container">
                            <div className="menu-button" onClick={this.handleAccountOpen}>
                                <span>Account</span>
                                <span><i className={`footer-arrow ${this.state.accountOpen ? 'menu-open' : ''}`}></i></span>
                            </div>
                            <ul style={{display: this.state.accountOpen ? '' : 'none'}}>
                                <li><a href="!#">Log In</a></li>
                                <li><a href="!#">Create Account</a></li>
                            </ul>
                        </div>
                        <div className="menu-container">
                            <div className="menu-button" onClick={this.handleSupportOpen}>
                                <span>Support</span>
                                <span><i className={`footer-arrow ${this.state.supportOpen ? 'menu-open' : ''}`}></i></span>
                            </div>
                            <ul style={{display: this.state.supportOpen ? '' : 'none'}}>
                                <li><a href="!#">Help Center</a></li>
                                <li><a href="!#">Accessibility</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href="https://www.youtube.com/">
                                <div className="circle"><img src={youtube} alt="youtube"/></div>
                            </a></li>
                            <li><a href="https://www.pinterest.com/">
                                <div className="circle"><img src={pinterest} alt="pinterest"/></div>
                            </a></li>
                            <li><a href="https://www.facebook.com/">
                                <div className="circle"><img src={facebook} alt="facebook"/></div>
                            </a></li>
                            <li><a href="https://www.twitter.com/">
                                <div className="circle"><img src={twitter} alt="twitter"/></div>
                            </a></li>
                            <li><a href="https://www.instagram.com/">
                                <div className="circle"><img src={instagram} alt="instagram"/></div>
                            </a></li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <div className="language">
                            <div className="language-button" onClick={this.handleLanguageMenu}>
                                <span>{this.state.language}</span>
                                <span><i className="footer-arrow" style={{transform: 'rotate(45deg)', marginBottom: '4px'}}></i></span>
                            </div>
                            <div className="language-menu" 
                                style={{opacity: this.state.languageMenuOpen ? '1' : '0', pointerEvents: this.state.languageMenuOpen ? 'all' : 'none'}}>
                                <ul>
                                    <li onClick={() => this.changeLanguage('English')}>English</li>
                                    <li onClick={() => this.changeLanguage('Espanol')}>Espanol</li>
                                    <li onClick={() => this.changeLanguage('Francais')}>Francais</li>
                                    <li onClick={() => this.changeLanguage('Italiano')}>Italiano</li>
                                </ul>
                            </div>
                        </div>
                        <div className="legal">
                            <span>&copy; iFit.com. All Rights Reserved</span>
                            <span><a href="!#">Privacy Policy</a></span>
                            <span><a href="!#">Terms of Use</a></span>
                        </div>
                        {/* Yes this is kinda cheaty, using it to align the other two properly*/}
                        <div style={{opacity: '0'}} className="language">
                            <select> 
                                <option value="0">English</option>
                                <option value="1">Espanol</option>
                                <option value="2">Francais</option>
                                <option value="3">Italiano</option>
                            </select>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
