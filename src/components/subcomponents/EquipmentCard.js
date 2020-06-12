import React, { Component, createRef } from 'react';

export default class EquipmentCard extends Component {
    constructor(props) {
        super(props);
        this.cardRef = createRef();

        this.state = {
            initialTop: 0,
            visible: false
        }
    }
    // Offset interactivity not fully implemented due to top offset issue
    componentDidMount() {
        const topOffset = this.cardRef.current.getBoundingClientRect().top;
        this.setState({ topOffset })
        window.addEventListener('scroll', this.getOffset);
    }

    getOffset = () => {
        const { initialTop } = this.state;
        const currentTop = initialTop + window.pageYOffset;
        this.setState({ currentTop })
        if (this.state.currentTop >= this.state.topOffset && !this.state.visible) {
            this.setState({ visible: true })
            window.removeEventListener('scroll', this.getOffset);
        }
    }
    
    render() {
        const { img, name } = this.props;
        return (
            <div className="card" ref={this.cardRef}>
                <div className="card-interior">
                    <div className="image-container"><img src={img} alt={name}/></div>
                    <div className="equip-text"><p>{name}</p></div>
                </div>
            </div>
        )
    }
}
