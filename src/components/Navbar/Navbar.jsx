import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import logo from "../../assets/logo.svg"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const [clicked, setClicked] = useState(false);

    const menulinks = [
        {
            route: "Home",
            pathname: "/"
        },
        {
            route: "About",
            pathname: "/about"
        },
        {
            route: "Services",
            pathname: "/services"
        },
        {
            route: "Blog",
            pathname: "/blog"
        },
        {
            route: "Contact",
            pathname: "/contact"
        },
    ]

    // menu icons change btn
    const handleClick = () => {
        setClicked(!clicked);
    };

    // sign out
    const handleSignout = () => {
        console.log('hit sign out');

        // sign out
        logOut()
        .then( () => {
            console.log('Sign out successfully!');
        })
        .catch((error) => {
            console.log(error?.message);
        })
    };

    // Set clicked state to false when scrolling
    useEffect(() => {
        const handleScroll = () => {
            setClicked(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nav_area">
            <div className="flex justify-between max-w-7xl mx-auto items-center py-2 px-4 md:px-5 xl:px-0">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img className=" w-12 md:w-16" src={logo} alt="" />
                    </Link>
                </div>
                {/* menu */}
                {/* <nav id="navbar" className="flex gap-6 md:gap-10 navbar_style"> */}
                <nav id="navbar" className={clicked ? "#navbar active flex gap-6 md:gap-10 navbar_style" : "#navbar flex gap-6 md:gap-10 navbar_style"}>
                    {
                        menulinks?.map(menu => 
                            (<NavLink onClick={handleClick} key={menu?.route}
                            to={menu?.pathname}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                            <li className="list-none font-bold">{menu?.route}</li>
                            </NavLink>
                        ))
                    }
                    {
                        !user?.email ? <NavLink onClick={handleClick}
                        to="/signin"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                        <li className="list-none font-bold">Sign in</li>
                        </NavLink>
                        :
                        <li onClick={handleSignout} className=" sign_out list-none font-bold">Sign out</li>
                    }
                </nav>
                {/* apartment btn */}
                <div id="mobile_apartment" className="flex items-center gap-5">
                    <i className=' hidden lg:block hover:text-blue-600 text-lg bx bxs-shopping-bag'></i>
                    <i className=' hidden lg:block hover:text-blue-600 text-lg bx bx-search-alt-2' ></i>
                    <Link to="/">
                        <button className=" apartment_btn font-semibold rounded-md border border-[#E8E8E8] py-2 px-5">Apartment</button>
                        {/* <button className=" apartment_btn font-semibold rounded-md border hover:border-[#0000FF] py-2 px-5 btn-outline hover:text-[#FF3811] text-[#0000FF] hover:bg-transparent transition-all">Apartment</button> */}
                    </Link>
                </div>
                {/* menu bar icons */}
                <div id="mobile" onClick={handleClick}>
                    <i className={clicked ? "bx bx-x text-red-500" : "bx bx-menu"}></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;