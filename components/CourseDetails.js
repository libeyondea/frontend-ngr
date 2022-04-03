import React from 'react';

const CourseDetails = () => {
    return (
        <section className="course-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="course-details__content">
                            <p className="course-details__author">
                                <img src="/assets/images/team-1-1.jpg" alt="" />
                                    by <a href="#">Addie Walters</a>
                            </p>

                            <div className="course-details__top">
                                <div className="course-details__top-left">
                                    <h2 className="course-details__title">Improve editing skills</h2>
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
                                </div>
                                <div className="course-details__top-right">
                                    <a href="#" className="course-one__category">marketing</a>
                                </div>
                            </div>
                            <div className="course-one__image">
                                <img src="/assets/images/course-d-1.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>

                            <ul className="course-details__tab-navs list-unstyled nav nav-tabs" role="tablist">
                                <li>
                                    <a className="active" role="tab" data-toggle="tab" href="#overview">Overview</a>
                                </li>
                                <li>
                                    <a className="" role="tab" data-toggle="tab" href="#curriculum">Curriculum</a>
                                </li>
                                <li>
                                    <a className="" role="tab" data-toggle="tab" href="#review">Reviews</a>
                                </li>
                            </ul>
                            <div className="tab-content course-details__tab-content ">
                                <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                    <p className="course-details__tab-text">Aelltes port lacus quis enim var sed
                                        efficitur turpis
                                        gilla
                                        sed sit Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem
                                        Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It
                                        has
                                        survived
                                        not only five centuries, but also the leap into electronic typesetting,
                                        remaining
                                        essentially unchanged.</p>
                                    <br />
                                        <p className="course-details__tab-text">It was popularised in the 1960s with the
                                            release of
                                            Letraset
                                            sheets containing Lorem Ipsum passages, and more recently with desktop
                                            publishing
                                            software
                                            like Aldus PageMaker including versions of lorem ipsum amet finibus eros.
                                            Lorem Ipsum is
                                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                            been the
                                            industry’s standard dummy text ever since the 1500s, when an unknown printer
                                            took a
                                            galley
                                            of type and scrambled it to make a type specimen book. It has survived not
                                            only five
                                            centuries, but also the leap into electronic typesetting.</p>
                                        <br />
                                            <ul className="list-unstyled course-details__overview-list">
                                                <li>It has survived not only five centuries</li>
                                                <li>Lorem Ipsum is simply dummy text of the new design</li>
                                                <li>Printng and type setting ipsum</li>
                                                <li>Take a look at our round up of the best shows</li>
                                            </ul>
                                </div>
                                <div className="tab-pane  animated fadeInUp" role="tabpanel" id="curriculum">
                                    <h3 className="course-details__tab-title">Starting beginners level course</h3>
                                    <br />
                                        <p className="course-details__tab-text">Aelltes port lacus quis enim var sed
                                            efficitur turpis
                                            gilla
                                            sed sit Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem
                                            Ipsum has been the industry’s standard dummy text ever since.</p>
                                        <br />
                                            <ul className="course-details__curriculum-list list-unstyled">
                                                <li>
                                                    <div className="course-details__curriculum-list-left">
                                                        <div className="course-details__meta-icon video-icon">
                                                            <i className="fas fa-play"></i>
                                                        </div>
                                                        <a href="#">Introduction to Editing</a> <span>Preview</span>
                                                    </div>
                                                    <div className="course-details__curriculum-list-right">16 minutes
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="course-details__curriculum-list-left">
                                                        <div className="course-details__meta-icon video-icon">
                                                            <i className="fas fa-play"></i>
                                                        </div>
                                                        <a href="#">Overview of Editing</a> <span>Preview</span>
                                                    </div>
                                                    <div className="course-details__curriculum-list-right">10 minutes
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="course-details__curriculum-list-left">
                                                        <div className="course-details__meta-icon file-icon">
                                                            <i className="fas fa-folder"></i>
                                                        </div>
                                                        <a href="#">Basic Editing Technology</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="course-details__curriculum-list-left">
                                                        <div className="course-details__meta-icon quiz-icon">
                                                            <i className="fas fa-comment"></i>
                                                        </div>
                                                        <a href="#">Quiz</a>
                                                    </div>
                                                    <div className="course-details__curriculum-list-right">6 questions
                                                    </div>
                                                </li>
                                            </ul>
                                            <br /><br />
                                                <h3 className="course-details__tab-title">Intermediate Level</h3>
                                                <br />
                                                    <p className="course-details__tab-text">Aelltes port lacus quis enim
                                                        var sed efficitur turpis
                                                        gilla
                                                        sed sit Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem
                                                        Ipsum has been the industry’s standard dummy text ever
                                                        since.</p>
                                                    <br />
                                                        <ul className="course-details__curriculum-list list-unstyled">
                                                            <li>
                                                                <div className="course-details__curriculum-list-left">
                                                                    <div
                                                                        className="course-details__meta-icon video-icon">
                                                                        <i className="fas fa-play"></i>
                                                                    </div>
                                                                    <a href="#">Introduction to Editing</a>
                                                                    <span>Preview</span>
                                                                </div>
                                                                <div
                                                                    className="course-details__curriculum-list-right">16
                                                                    minutes
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="course-details__curriculum-list-left">
                                                                    <div
                                                                        className="course-details__meta-icon file-icon">
                                                                        <i className="fas fa-folder"></i>
                                                                    </div>
                                                                    <a href="#">Basic Editing Technology</a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="course-details__curriculum-list-left">
                                                                    <div
                                                                        className="course-details__meta-icon quiz-icon">
                                                                        <i className="fas fa-comment"></i>
                                                                    </div>
                                                                    <a href="#">Quiz</a>
                                                                </div>
                                                                <div className="course-details__curriculum-list-right">6
                                                                    questions
                                                                </div>
                                                            </li>
                                                        </ul>
                                </div>
                                <div className="tab-pane  animated fadeInUp" role="tabpanel" id="review">
                                    <div className="row">
                                        <div className="col-xl-7 d-flex">
                                            <div className="course-details__progress my-auto">
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">Excellent</p>
                                                    <div className="course-details__progress-bar">
                                                        <span style={{width: `95%`}}></span>
                                                    </div>
                                                    <p className="course-details__progress-count">5</p>
                                                </div>
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">Very Good</p>
                                                    <div className="course-details__progress-bar">
                                                        <span style={{width: `65%`}}></span>
                                                    </div>
                                                    <p className="course-details__progress-count">2</p>
                                                </div>
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">Average</p>
                                                    <div className="course-details__progress-bar">
                                                        <span style={{width: `33%`}}></span>
                                                    </div>
                                                    <p className="course-details__progress-count">1</p>
                                                </div>
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">Poor</p>
                                                    <div className="course-details__progress-bar">
                                                        <span style={{width: `0%`}} className="no-bubble"></span>
                                                    </div>
                                                    <p className="course-details__progress-count">0</p>
                                                </div>
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">Terrible</p>
                                                    <div className="course-details__progress-bar">
                                                        <span style={{width: `0%`}} className="no-bubble"></span>
                                                    </div>
                                                    <p className="course-details__progress-count">0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                                            <div className="course-details__review-box">
                                                <p className="course-details__review-count">4.6</p>
                                                <div className="course-details__review-stars">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half"></i>
                                                </div>
                                                <p className="course-details__review-text">30 reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-details__comment">
                                        <div className="course-details__comment-single">
                                            <div className="course-details__comment-top">
                                                <div className="course-details__comment-img">
                                                    <img src="/assets/images/team-1-1.jpg" alt="" />
                                                </div>
                                                <div className="course-details__comment-right">
                                                    <h2 className="course-details__comment-name">Steven Meyer</h2>
                                                    <div className="course-details__comment-meta">
                                                        <p className="course-details__comment-date">26 July, 2019</p>
                                                        <div className="course-details__comment-stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star star-disabled"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="course-details__comment-text">Lorem ipsum is simply free text
                                                used by
                                                copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed
                                                inventore
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </div>
                                        <div className="course-details__comment-single">
                                            <div className="course-details__comment-top">
                                                <div className="course-details__comment-img">
                                                    <img src="/assets/images/team-1-2.jpg" alt="" />
                                                </div>
                                                <div className="course-details__comment-right">
                                                    <h2 className="course-details__comment-name">Lina Kelley</h2>
                                                    <div className="course-details__comment-meta">
                                                        <p className="course-details__comment-date">26 July, 2019</p>
                                                        <div className="course-details__comment-stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star star-disabled"></i>
                                                            <i className="fa fa-star star-disabled"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="course-details__comment-text">Lorem ipsum is simply free text
                                                used by
                                                copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed
                                                inventore
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </div>
                                    </div>
                                    <form action="#" className="course-details__comment-form">
                                        <h2 className="course-details__title">Add a
                                            review</h2>
                                        <p className="course-details__comment-form-text">Rate this Course? <a href="#"
                                                                                                              className="fas fa-star"></a><a
                                            href="#" className="fas fa-star"></a><a href="#"
                                                                                    className="fas fa-star"></a><a
                                            href="#" className="fas fa-star"></a><a href="#"
                                                                                    className="fas fa-star"></a>
                                        </p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Your Name" />
                                                <input type="text" placeholder="Email Address" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea placeholder="Write Message"></textarea>
                                                <button type="submit"
                                                        className="thm-btn course-details__comment-form-btn">Leave a
                                                    Review
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-details__price">
                            <p className="course-details__price-text">Course
                                price </p>
                            <p className="course-details__price-amount">$18.00</p>
                            <a href="#" className="thm-btn course-details__price-btn">Buy This Course</a>
                        </div>

                        <div className="course-details__meta">
                            <a href="#" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="far fa-clock"></i>
                                </span>
                                Durations: <span>10 hours</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="far fa-folder-open"></i>
                                </span>
                                Lectures: <span>6</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="far fa-user-circle"></i>
                                </span>
                                Students: <span>Max 4</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="fas fa-play"></i>
                                </span>
                                Video: <span>8 hours</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="far fa-flag"></i>
                                </span>
                                Skill Level: <span>Advanced</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="far fa-bell"></i>
                                </span>
                                Language: <span>English</span>
                            </a>
                        </div>
                        <div className="course-details__list">
                            <h2 className="course-details__list-title">New
                                Courses</h2>
                            <div className="course-details__list-item">
                                <div className="course-details__list-img">
                                    <img src="/assets/images/lc-1-1.jpg" alt="" />
                                </div>
                                <div className="course-details__list-content">
                                    <a className="course-details__list-author" href="#">by <span>Lydia Byrd</span></a>
                                    <h3><a href="#">Marketing strategies</a></h3>
                                    <div className="course-details__list-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <span>4.8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="course-details__list-item">
                                <div className="course-details__list-img">
                                    <img src="/assets/images/lc-1-2.jpg" alt="" />
                                </div>
                                <div className="course-details__list-content">
                                    <a className="course-details__list-author" href="#">by <span>Lydia Byrd</span></a>
                                    <h3><a href="#">Marketing strategies</a></h3>
                                    <div className="course-details__list-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <span>4.8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="course-details__list-item">
                                <div className="course-details__list-img">
                                    <img src="/assets/images/lc-1-3.jpg" alt="" />
                                </div>
                                <div className="course-details__list-content">
                                    <a className="course-details__list-author" href="#">by <span>Lydia Byrd</span></a>
                                    <h3><a href="#">Marketing strategies</a></h3>
                                    <div className="course-details__list-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <span>4.8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
