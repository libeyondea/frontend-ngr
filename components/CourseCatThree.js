import React from 'react';

const CourseCatThree = () => {
    return (
        <section className="course-category-three">
            <img src="/assets/images/circle-stripe.png" className="course-category-three__circle" alt="" />
                <div className="container">
                    <div className="block-title">
                        <h2 className="block-title__title">Browse online <br />
                            course categories</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/course-category-1-1.png" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><a href="#">IT & Software </a></h3>
                                        <p className="course-category-three__text">Over 752 Courses</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/course-category-1-2.png" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><a href="#">Development </a></h3>
                                        <p className="course-category-three__text">Over 752 Courses</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/course-category-1-3.png" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><a href="#">Photography</a></h3>
                                        <p className="course-category-three__text">Over 752 Courses</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/course-category-1-4.png" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><a href="#">Marketing</a></h3>
                                        <p className="course-category-three__text">Over 752 Courses</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="thm-btn course-category-three__more-link">View All Categories</a>
                    </div>
                </div>
        </section>
    );
};

export default CourseCatThree;
