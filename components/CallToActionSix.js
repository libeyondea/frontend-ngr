import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class CallToActionSix extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="cta-six thm-gray-bg">
                <img src="/assets/images/line-stripe-2.png" className="cta-six__line" alt="" />
                    <div className="container-fluid clearfix">
                        <div className="cta-six__left">
                            <div className="cta-six__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Start online learning
                                        anything</h2>
                                </div>
                                <img src="assets/images/fact-1-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="cta-six__right">
                            <img src="/assets/images/fact-1-2.jpg" alt="" />
                                <h2 className="cta-six__title">More than <span className="counter">
                                    <VisibilitySensor onChange={this.onVisibilityChange} delayedCall><CountUp end={this.state.startCounter ? 7840 : 0} /></VisibilitySensor>
                                </span> students are
                                    registered</h2>
                        </div>
                    </div>
            </section>
        );
    }
}

export default CallToActionSix;
