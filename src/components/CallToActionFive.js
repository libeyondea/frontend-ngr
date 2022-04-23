import React from 'react';

const CallToActionFive = () => {
    return (
        <section className="cta-five">
            <img src="/assets/images/team-1-1.jpg" className="cta-five__members-1" alt="" />
            <img src="/assets/images/team-1-2.jpg" className="cta-five__members-2" alt="" />
            <img src="/assets/images/team-1-3.jpg" className="cta-five__members-3" alt="" />
            <img src="/assets/images/team-1-4.jpg" className="cta-five__members-4" alt="" />
            <img src="/assets/images/team-1-5.jpg" className="cta-five__members-5" alt="" />
            <img src="/assets/images/team-1-6.jpg" className="cta-five__members-6" alt="" />
            <div className="cta-five__bubble-1"><i className="fas fa-rocket"></i></div>
            <div className="cta-five__bubble-2"><i className="fas fa-bolt"></i></div>
            <div className="container text-center">
                <h2 className="cta-five__title">Start growing with <br />
                    the community</h2>
                <p className="cta-five__text">Duis aute irure dolor in reprehenderit in velit
                    esse</p>
                <a href="#" className="thm-btn cta-five__btn">Learn More</a>
            </div>
        </section>
    );
};

export default CallToActionFive;
