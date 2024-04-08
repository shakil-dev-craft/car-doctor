import { Link, NavLink } from "react-router-dom";
import './NavbarSecond.css';
import logo from "../../assets/logo.svg"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavbarSecond = () => {

    const {user, logOut} = useContext(AuthContext);

    const [clicked, setClicked] = useState(false);

    const menulinks = [
        {
            route: "Order",
            pathname: "/"
        },
        {
            route: "Order Review",
            pathname: "/"
        },
        {
            route: "Manage Inventory",
            pathname: "/"
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
                {/* menu bar icons */}
                <div id="mobile" onClick={handleClick}>
                    <i className={clicked ? "bx bx-x text-red-500" : "bx bx-menu"}></i>
                </div>
            </div>
        </div>
    );
};

export default NavbarSecond;