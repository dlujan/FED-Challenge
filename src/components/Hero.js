import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <div className="content-container">
                    <h1>
                        <span>The best personal training,</span>
                        <span>right in your own home</span>
                    </h1>
                    <button>Join iFit Coach</button>
                </div>
            </div>
        )
    }
}
