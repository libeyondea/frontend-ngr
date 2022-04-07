import React, {Component} from 'react';
import Countdown from 'react-countdown';

const CountdownKipso = () => {

    return (
        <section className="countdown-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="countdown-one__content">
                            <h2 className="countdown-one__title">Register now </h2>
                            <p className="countdown-one__tag-line">get premium online courses for free!</p>
                            <p className="countdown-one__text">Là một công ty tư vấn du học hàng đầu ở Việt Nam, 
                            được các lãnh sự Mỹ, Úc, Canada tin cậy, là đại diện chính thức cho các trường trong 
                            hệ thống giáo dục của Mỹ, Anh, Úc, Canada, New Zealand, Singapore….New GOLDEN ROAD luôn đồng hành 
                            cùng du học sinh trong suốt chặn đường học tập tại các nước trên thế giới, đồng thời phối 
                            hợp cùng nhà trường, và các tổ chức giáo dục trên thế giới để hổ trợ các vấn đề khó khăn
                             mà du học sinh gặp phải..</p>
                            <div className="countdown-one__list list-unstyled">

                                <Countdown date={Date.now() + 5000000000} />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Get free courses
                                </h2>
                            </div>
                            <form action="#" method="POST" className="become-teacher__form-content contact-form-validated">
                                <input type="text" placeholder="Your Name" name="name" />
                                <input type="text" placeholder="Email Address" name="email" />
                                <input type="text" placeholder="Phone Number" name="phone" />
                                <input type="text" placeholder="Comment" name="message" />
                                <button type="submit"
                                        className="thm-btn become-teacher__form-btn">Apply For It
                                </button>
                            </form>
                            <div className="result text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CountdownKipso;