import React from 'react';

const TeachersDetails = () => {
    return (
        <section className="team-details">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="team-details__content">
                            <h2 className="team-details__title">Read my story</h2>
                            <p className="team-details__text">Lorem Ipsum is simply dummy text of the printing and type
                                industry.
                                Lorem Ipsum has been the standard dummy text ever since the when an unknown was
                                popularised. It
                                has survived not only five centuries, but also the leap into electronic typesetting
                                remaining
                                unchanged.</p>
                            <h3 className="team-details__subtitle">Certificate</h3>
                            <ul className="list-unstyled team-details__certificate-list">
                                <li>
                                    <img src="/assets/images/certificate-1-1.png" alt="" />
                                </li>
                                <li>
                                    <img src="/assets/images/certificate-1-2.png" alt="" />
                                </li>
                            </ul>

                            <div className="progress-one__wrap">
                                <div className="progress-one__single">
                                    <div className="progress-one__top">
                                        <h3 className="progress-one__title">English</h3>
                                        <h3 className="progress-one__percent"><span className="counter">98</span>%
                                        </h3>
                                    </div>
                                    <div className="progress-one__bar">
                                        <span style={{width: `98%`}} className="wow slideInLeft"></span>
                                    </div>
                                </div>
                                <div className="progress-one__single">
                                    <div className="progress-one__top">
                                        <h3 className="progress-one__title">French</h3>
                                        <h3 className="progress-one__percent"><span className="counter">64</span>%
                                        </h3>
                                    </div>
                                    <div className="progress-one__bar">
                                        <span style={{width: `64%`}} className="wow slideInLeft"></span>
                                    </div>
                                </div>
                                <div className="progress-one__single">
                                    <div className="progress-one__top">
                                        <h3 className="progress-one__title">Spanish</h3>
                                        <h3 className="progress-one__percent"><span className="counter">34</span>%</h3>
                                    </div>
                                    <div className="progress-one__bar">
                                        <span style={{width: `34%`}} className="wow slideInLeft"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/team-d-1.jpg" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><a href="team-details.html">Adelaide Hunter</a></h2>
                                <p className="team-one__designation">Teacher</p>
                            </div>
                            <div className="team-one__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeachersDetails;
