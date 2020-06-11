import React, { Component } from 'react';
import bg1 from '../images/library/background/bg-1.png';
import bg2 from '../images/library/background/bg-2.png';
import bg3 from '../images/library/background/bg-3.png';
import bg4 from '../images/library/background/bg-4.png';
import bg5 from '../images/library/background/bg-5.png';
import bg6 from '../images/library/background/bg-6.png';
import bg7 from '../images/library/background/bg-7.png';
import bg8 from '../images/library/background/bg-8.png';
import thmb1 from '../images/library/thumbnail/thmb-1.png';
import thmb2 from '../images/library/thumbnail/thmb-2.png';
import thmb3 from '../images/library/thumbnail/thmb-3.png';
import thmb4 from '../images/library/thumbnail/thmb-4.png';
import thmb5 from '../images/library/thumbnail/thmb-5.png';
import thmb6 from '../images/library/thumbnail/thmb-6.png';
import thmb7 from '../images/library/thumbnail/thmb-7.png';
import thmb8 from '../images/library/thumbnail/thmb-8.png';

import timer from '../images/logos/icon-timer.svg';
import dist from '../images/logos/icon-distance.svg';


export default class CardsLibrary extends Component {
    constructor() {
        super();

        this.state = {
            cardsArr: [
                {img: bg1, title: 'Lake Inniscarra, Ireland--Pyramid', thmb: thmb1, time: '30:53', distance: '6,248'},
                {img: bg2, title: 'Performance Series', thmb: thmb2, workouts: '9'},
                {img: bg3, title: 'Slow Pulls and Fast Intervals', thmb: thmb3, time: '44:13', distance: '9,948'},
                {img: bg4, title: '20 Minutes to Toned', thmb: thmb4, workouts: '12'},
                {img: bg5, title: 'Charles Race, Boston, Massachusetts', thmb: thmb5, time: '36:22', distance: '8,648'},
                {img: bg6, title: 'Full-Body HIIT Series', thmb: thmb6, workouts: '12'},
                {img: bg7, title: 'Kafue River, Zambia--Power Stroke Pyramid', thmb: thmb7, time: '22:22', distance: '4,660'},
                {img: bg8, title: 'Shred & Burn Series', thmb: thmb8, workouts: '16'},
            ]
        }
    }
    render() {
        return (
            <div className="cards-library">
                <div className="cards-container">
                    {
                        this.state.cardsArr.map((card, index) => {
                            return (
                                <div key={index} className="card">
                                    <div className="card-inner">
                                        <div className="image-container"><img src={card.img} alt={`${card.title}`}/>
                                            {card.workouts && (
                                                <div className="workouts">
                                                    <div>{card.workouts}</div>
                                                    <span>WORKOUTS</span>
                                                    <div>X</div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="content-container">
                                            <div className="text">
                                                <h3>{card.title}</h3>
                                                {card.time && (
                                                    <p>
                                                        <span><img src={timer} alt="clock icon"/> {card.time}</span>
                                                        <span><img src={dist} alt="distance icon"/> {card.distance} M</span>
                                                    </p>
                                                )}
                                            </div>
                                            <div className="thumbnail"><img src={card.thmb} alt="card thumbnail"/></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
