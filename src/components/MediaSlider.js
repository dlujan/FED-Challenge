import React, { Component } from 'react';
import gearjunkie from '../images/logos/gear-junkie-logo.svg';
import wired from '../images/logos/wired-logo.svg';
import mashable from '../images/logos/mashable-logo.svg';

export default class MediaSlider extends Component {
    constructor() {
        super();

        this.state = {
            cardsArr: [
                {logo: gearjunkie, text: 'You focus on putting in the work, and the technology handles the rest.'},
                {logo: wired, text: 'Literally transports you from home to wherever you choose to run.'},
                {logo: mashable, text: 'Breathes new life into a tired, old running routine.'}
            ]
        }
    }
    
    render() {
        return (
            <div className="cards-slider">
                <div className="cards-slider-wrapper">
                    {
                        this.state.cardsArr.map((card, index) => {
                            return (
                                <div className="card" key={index}>
                                    <img src={card.logo} alt="Logo"/>
                                    <p>"{card.text}"</p>
                                </div>
                            )
                        })
                    }
                    <div className="arrow left"><span className="arrow-left"></span></div>
                    <div className="arrow right"><span className="arrow-right"></span></div>
                </div>
            </div>
        )
    }
}
