import React, { Component } from 'react';
import img1 from '../images/equipment/img-1.png';
import img2 from '../images/equipment/img-2.png';
import img3 from '../images/equipment/img-3.png';
import img4 from '../images/equipment/img-4.png';

export default class EquipmentCards extends Component {
    render() {
        return (
            <div className="equipment-cards">
                <p>Interested in our exciting iFit-enabled equipment?</p>
                <div className="cards-container">
                    <div className="card">
                        <div>
                            <div className="image-container"><img src={img1} alt="Treadmills"/></div>
                            <p>Treadmills</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="image-container"><img src={img2} alt="Bikes"/></div>
                            <p>Bikes</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="image-container"><img src={img3} alt="Ellipticals"/></div>
                            <p>Ellipticals</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="image-container"><img src={img4} alt="Strength"/></div>
                            <p>Strength</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}