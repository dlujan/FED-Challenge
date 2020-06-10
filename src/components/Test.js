import React, { Component, createRef } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.testRef = createRef();

        this.state = {
            prevTop: window.innerHeight,
            visible: false
        }
    }
    componentDidMount() {
        const topOffset = this.testRef.current.offsetTop;
        this.setState({ topOffset })
        window.addEventListener('scroll', this.getOffset);
    }
    
    getOffset = () => {
        const { prevTop } = this.state;
        const currentTop = prevTop + window.pageYOffset;
        this.setState({ currentTop })
        if (this.state.currentTop >= this.state.topOffset && !this.state.visible) {
            console.log('in view')
            this.setState({ visible: true })
            window.removeEventListener('scroll', this.getOffset);
        }
    }
    render() {
        
        return (
            <div>
                <h1 className={`heading ${this.state.visible ? 'visible' : ''}`}ref={this.testRef}>TEST</h1>
            </div>
        )
    }
}
