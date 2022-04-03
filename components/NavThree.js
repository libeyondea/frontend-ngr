import React, {Component} from 'react';
import Link from "next/link";

class NavThree extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }
    render() {
        return (
            <header className="site-header site-header__home-three ">
                <div className="topbar-one">
                    <div className="container">
                        <div className="topbar-one__left">
                            <a href="#">needhelp@kipso.com</a>
                            <a href="#">444 888 0000</a>
                        </div>
                        <div className="topbar-one__right">
                            <a href="#">Login</a>
                            <a href="#">Register</a>
                        </div>
                    </div>
                </div>
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="assets/images/logo-light.png" className="main-logo" width="128"
                                         alt="Awesome Image" />
                                </a>
                            </Link>
                            <button className="menu-toggler" data-target=".main-navigation">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/"><a>Home</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/"><a>Home 01</a></Link></li>
                                        <li><Link href="/index-2"><a>Home 02</a></Link></li>
                                        <li><Link href="/index-3"><a>Home 03</a></Link></li>
                                        <li><a href="#">Header Versions</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/"><a>Header 01</a></Link></li>
                                                <li><Link href="/index-2"><a>Header 02</a></Link></li>
                                                <li><Link href="/index-3"><a>Header 03</a></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                    <ul className="sub-menu">
                                        <li><Link href="/about"><a>About Page</a></Link></li>
                                        <li><Link href="/gallery"><a>Gallery</a></Link></li>
                                        <li><Link href="/pricing"><a>Pricing Plans</a></Link></li>
                                        <li><Link href="/faq"><a>FAQ'S</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="courses.html">Courses</a>
                                    <ul className="sub-menu">
                                        <li><Link href="/courses"><a>Courses</a></Link></li>
                                        <li><Link href="/course-details"><a>Courses Details</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="teachers.html">Teachers</a>
                                    <ul className="sub-menu">
                                        <li><Link href="/teachers"><a>Teachers</a></Link></li>
                                        <li><Link href="/teacher-details"><a>Teachers Details</a></Link></li>
                                        <li><Link href="/become-teacher"><a>Become Teacher</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="news.html">News</a>
                                    <ul className="sub-menu">
                                        <li><Link href="/news"><a>News Page</a></Link></li>
                                        <li><Link href="/news-details"><a>News Details</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/contact"><a>Contact</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <div className="header__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavThree;