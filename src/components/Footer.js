import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="links">
                        <div>
                            <span>Company</span>
                            <ul>
                                <li><a href="!#">About</a></li>
                                <li><a href="!#">Contact Us</a></li>
                                <li><a href="!#">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <span>Account</span>
                            <ul>
                                <li><a href="!#">LogIn</a></li>
                                <li><a href="!#">Create Account</a></li>
                            </ul>
                        </div>
                        <div>
                            <span>Support</span>
                            <ul>
                                <li><a href="!#">Help Center</a></li>
                                <li><a href="!#">Accessibility</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
