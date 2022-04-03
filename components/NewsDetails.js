import React from 'react';

const NewsDetails = () => {
    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog-d-1-1.jpg" alt="" />

                            </div>
                            <div className="blog-one__content text-center">
                                <div className="blog-one__meta">
                                    <a data-toggle="tooltip" data-placement="top" title="" href="#"
                                       data-original-title="Posted On Jan 19"><i className="fa fa-calendar-alt"></i></a>
                                    <a data-toggle="tooltip" data-placement="top" title="" href="#"
                                       data-original-title="No Comments"><i className="fa fa-comments"></i></a>
                                    <a data-toggle="tooltip" data-placement="top" title="" href="#"
                                       data-original-title="Posted By Admin"><i className="fa fa-user"></i></a>
                                </div>
                                <h2 className="blog-one__title">Are you ready to become a best student

                                </h2>
                                <p className="blog-one__text">Aelltes port lacus quis enim var sed efficitur turpis
                                    gilla sed sit
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has
                                    been the industry’s standard dummy text ever since the 1500s, when an unknown
                                    printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived not
                                    only five
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged.
                                </p>
                                <p className="blog-one__text">It was popularised in the 1960s with the release of
                                    Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software
                                    like
                                    Aldus PageMaker including versions of lorem ipsum amet finibus eros. Lorem Ipsum is
                                    simply
                                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry’s
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                    type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also
                                    the leap into electronic typesetting.</p>
                                <p className="blog-one__text">It was popularised in the 1960s with the release of
                                    Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software
                                    like
                                    Aldus PageMaker including versions of lorem ipsum.</p>
                            </div>
                        </div>
                        <div className="share-block">
                            <div className="left-block">
                                <p>Tags: <a href="#">Business,</a> <a href="#">Agency,</a> <a href="#">Technology</a>
                                </p>
                            </div>
                            <div className="social-block">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-dribbble"></i></a>
                            </div>
                        </div>
                        <div className="blog-details__author">
                            <div className="blog-details__author-image">
                                <img src="/assets/images/author-1-1.jpg" alt="Awesome Image" />
                            </div>
                            <div className="blog-details__author-content">
                                <h3>Christine Eve</h3>
                                <p>Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry
                                    standard
                                    dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et
                                    not the
                                    aliquet.</p>
                            </div>
                        </div>
                        <h2 className="blog-details__content-title">2
                            Comments</h2>
                        <div className="comment-one">
                            <div className="comment-one__single">
                                <div className="comment-one__image">
                                    <div className="inner-block">
                                        <img src="/assets/images/comment-1-1.jpg" alt="Awesome Image" />
                                    </div>
                                </div>
                                <div className="comment-one__content">
                                    <div className="comment-one__content-top">
                                        <div className="comment-one__top-left">
                                            <h3 className="comment-one__author">Laquanda Bachmeier</h3>
                                            <p className="comment-one__date">20 April, 2019 <span
                                                className="comment-one__date-sep">-</span> 4:00 pm</p>
                                            <p className="comment-one__text">Lorem Ipsum is simply dummy text of the
                                                rinting and
                                                typesetting been the industry standard dummy text ever sincer
                                                condimentum purus.
                                                In non ex at ligula fringilla lobortis et not the aliquet.</p>
                                        </div>
                                        <div className="comment-one__top-right">
                                            <a href="#" className="thm-btn comment-one__reply">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-one__single">
                                <div className="comment-one__image">
                                    <div className="inner-block">
                                        <img src="/assets/images/comment-1-2.jpg" alt="Awesome Image" />
                                    </div>
                                </div>
                                <div className="comment-one__content">
                                    <div className="comment-one__content-top">
                                        <div className="comment-one__top-left">
                                            <h3 className="comment-one__author">Vicente
                                                Elmore</h3>
                                            <p className="comment-one__date">20 April, 2019 <span
                                                className="comment-one__date-sep">-</span> 4:00 pm</p>
                                            <p className="comment-one__text">Lorem Ipsum is simply dummy text of the
                                                rinting and
                                                typesetting been the industry standard dummy text ever sincer
                                                condimentum purus.
                                                In non ex at ligula fringilla lobortis et not the aliquet.</p>
                                        </div>
                                        <div className="comment-one__top-right">
                                            <a href="#" className="thm-btn comment-one__reply">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="blog-details__content-title">Leave a
                            Comment</h2>
                        <form action="#" className="reply-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Your name" className="reply-form__field" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Enter email" className="reply-form__field" />
                                </div>
                                <div className="col-lg-12">
                                    <textarea placeholder="Write message" className="reply-form__field"></textarea>
                                    <button className="reply-form__btn thm-btn" type="submit">Submit Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="text" name="search" placeholder="Search here..." />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Latest Posts</h3>
                                <div className="sidebar__post-wrap">
                                    <div className="sidebar__post__single">
                                        <div className="sidebar__post-image">
                                            <div className="inner-block"><img src="/assets/images/lp-1-1.jpg"
                                                                              alt="Awesome Image" /></div>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h4 className="sidebar__post-title"><a href="#">Pre launch mobile app
                                                marketing pitfalls</a></h4>
                                        </div>
                                    </div>
                                    <div className="sidebar__post__single">
                                        <div className="sidebar__post-image">
                                            <div className="inner-block"><img src="/assets/images/lp-1-2.jpg"
                                                                              alt="Awesome Image" /></div>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h4 className="sidebar__post-title"><a href="#">Social currency per-
                                                formance keywords or</a></h4>
                                        </div>
                                    </div>
                                    <div className="sidebar__post__single">
                                        <div className="sidebar__post-image">
                                            <div className="inner-block"><img src="/assets/images/lp-1-3.jpg"
                                                                              alt="Awesome Image" /></div>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h4 className="sidebar__post-title"><a href="#">Prioritize these items
                                                quarterly sales are at</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__single sidebar__category">
                                <h3 className="sidebar__title">Categories</h3>
                                <ul className="sidebar__category-list">
                                    <li className="sidebar__category-list-item"><a href="#">Business</a></li>
                                    <li className="sidebar__category-list-item"><a href="#">Introductions</a></li>
                                    <li className="sidebar__category-list-item"><a href="#">One Page Template</a></li>
                                    <li className="sidebar__category-list-item"><a href="#">Parallax Effects</a></li>
                                    <li className="sidebar__category-list-item"><a href="#">New Technologies</a></li>
                                    <li className="sidebar__category-list-item"><a href="#">Video Backgrounds</a></li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__tags">
                                <h3 className="sidebar__title">Tags</h3>
                                <ul className="sidebar__tags-list">
                                    <li className="sidebar__tags-list-item"><a href="#">Business,</a></li>
                                    <li className="sidebar__tags-list-item"><a href="#">Agency,</a></li>
                                    <li className="sidebar__tags-list-item"><a href="#">Technology,</a></li>
                                    <li className="sidebar__tags-list-item"><a href="#">Parallax,</a></li>
                                    <li className="sidebar__tags-list-item"><a href="#">Innovative,</a></li>
                                    <li className="sidebar__tags-list-item"><a href="#">Professional,</a></li>
                                    <li className="sidebar__tags-list-item"><a href="#">Experience,</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsDetails;
