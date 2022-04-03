import React from 'react';

const SliderThree = () => {

    return (
        <section className="slider-three">
            <img src="/assets/images/slider-3-icon-1-1.png" className="slider-three__icon-1" alt="" />
            <img src="/assets/images/slider-3-icon-1-2.png" className="slider-three__icon-2" alt="" />
            <img src="/assets/images/slider-3-icon-1-3.png" className="slider-three__icon-3" alt="" />
            <img src="/assets/images/slider-3-icon-1-4.png" className="slider-three__icon-4" alt="" />
            <img src="/assets/images/slider-3-icon-1-5.png" className="slider-three__icon-5" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="slider-three__content">
                            <p className="slider-three__tag-line">we can teach you
                                anything</p>
                            <h2 className="slider-three__title">Start learning
                                with us now</h2>
                            <p className="slider-three__text">You need to be sure there isn't
                                anything hidden in the middle of text
                                lorem ipsum on the Internet.</p>
                            <form action="#" className="slider-three__search">
                                <input type="text" placeholder="Search courses" />
                                    <button type="submit"><i
                                        className="kipso-icon-magnifying-glass"></i>
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderThree;
