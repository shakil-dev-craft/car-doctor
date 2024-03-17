import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import logo from "../../assets/logo.svg"

const Navbar = () => {

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

    // console.log(menulinks);

    return (
        <div>
            <div className="flex justify-between max-w-7xl mx-auto items-center py-2 px-4 md:px-5 xl:px-0">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img className="w-16" src={logo} alt="" />
                    </Link>
                </div>
                {/* menu */}
                <nav className="flex gap-10 navbar_style">
                    {
                        menulinks?.map(menu => 
                            (<NavLink key={menu?.route}
                            to={menu?.pathname}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                            <li className="list-none font-bold">{menu?.route}</li>
                            </NavLink>
                        ))
                    }
                </nav>
                {/* apartment btn */}
                <div className="flex items-center gap-5">
                    <i className=' hover:text-blue-600 text-lg bx bxs-shopping-bag'></i>
                    <i className=' hover:text-blue-600 text-lg bx bx-search-alt-2' ></i>
                    <Link to="/">
                        <button className=" apartment_btn font-semibold rounded-md border py-2 px-5">Apartment</button>
                        {/* <button className=" apartment_btn font-semibold rounded-md border hover:border-[#0000FF] py-2 px-5 btn-outline hover:text-[#FF3811] text-[#0000FF] hover:bg-transparent transition-all">Apartment</button> */}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;