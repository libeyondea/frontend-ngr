import React from 'react';
import Link from 'next/link';

const Courses = () => {
    return (
        <section className="course-one course-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-1.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">development</a>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-1.jpg" alt="" />
                                    by <Link href="/teacher-details"><a>Lou Guerrero</a></Link>
                                </div>
                                <h2 className="course-one__title"><Link href="/course-details"><a>New react bootcamp</a></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                    <a href="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</a>
                                    <a href="/course-details">$18</a>
                                </div>
                                <a href="#" className="course-one__link">See Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-2.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">It &amp; Software</a>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-2.jpg" alt="" />
                                        by <Link href="/teacher-details"><a>Cora Diaz</a></Link>
                                </div>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Improve editing skills</a></Link></h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                    <a href="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</a>
                                    <a href="/course-details">$18</a>
                                </div>
                                <a href="#" className="course-one__link">See Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-3.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">marketing</a>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-3.jpg" alt="" />
                                        by <Link href="/teacher-details"><a>Ruth Becker</a></Link>
                                </div>
                                <h2 className="course-one__title">
                                    <Link href="/course-details"><a>Marketing strategies</a></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                    <a href="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</a>
                                    <a href="/course-details">$18</a>
                                </div>
                                <a href="#" className="course-one__link">See Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-4.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Photography</a>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-4.jpg" alt="" />
                                        by <Link href="/teacher-details"><a>Ernest Rodriquez</a></Link>

                                </div>
                                <h2 className="course-one__title">
                                    <Link href="/course-details"><a>Basics of photography</a></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                    <a href="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</a>
                                    <a href="/course-details">$18</a>
                                </div>
                                <a href="#" className="course-one__link">See Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-5.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">marketing</a>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-5.jpg" alt="" />
                                        by <Link href="/teacher-details"><a>Isabella Stanley</a></Link>
                                </div>
                                <h2 className="course-one__title">
                                   <Link href="/course-details"><a>Affiliate bootcamp</a></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                    <a href="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</a>
                                    <a href="/course-details">$18</a>
                                </div>
                                <a href="#" className="course-one__link">See Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-6.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Health &amp; Fitness</a>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-6.jpg" alt="" />
                                        by <Link href="/teacher-details"><a>Katherine Collins</a></Link>
                                </div>
                                <h2 className="course-one__title">
                                    <Link href="/course-details"><a>Healthy workout tips</a></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                    <a href="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</a>
                                    <a href="/course-details">$18</a>
                                </div>
                                <a href="#" className="course-one__link">See Preview</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-pagination">
                    <a href="#"><i className="fa fa-angle-double-left"></i></a>
                    <a className="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#"><i className="fa fa-angle-double-right"></i></a>
                </div>

            </div>
        </section>
    );
};

export default Courses;
