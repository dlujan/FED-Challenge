import React, { Component } from 'react';
import EquipmentCard from './subcomponents/EquipmentCard';
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
                    <EquipmentCard img={img1} name={'Treadmills'}/>
                    <EquipmentCard img={img2} name={'Bikes'}/>
                    <EquipmentCard img={img3} name={'Ellipticals'}/>
                    <EquipmentCard img={img4} name={'Strength'}/>
                </div>
            </div>
        )
    }
}
