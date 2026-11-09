import Logo from "../../assets/images/icons/logo-sm.png";
import Search from "../../assets/images/icons/search-icon-sm.png";
import Cart from "../../assets/images/icons/cart-sm.png";

function Header() {
    return (
        <>
            <div className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand mx-auto" href="#">
                            <img src={Logo} />
                        </a>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/mac/">
                                        Mac
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#">
                                        iphone
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#">
                                        ipad
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#">
                                        watch
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#">
                                        tv
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#">
                                        Music
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#">
                                        Support
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/search/">
                                        <img src={Search} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/cart/">
                                        <img src={Cart} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;
