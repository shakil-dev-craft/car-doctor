import { Link, NavLink } from "react-router-dom";
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
            <div className="flex justify-between max-w-7xl mx-auto items-center">
                {/* Logo */}
                <div>
                    <img className="w-16" src={logo} alt="" />
                </div>
                {/* menu */}
                <nav className="flex gap-10">
                    {
                        menulinks?.map(menu => 
                            (<NavLink key={menu?.route}
                            to={menu?.pathname}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active text-red-600" : ""
                            }
                            >
                            {menu?.route}
                            </NavLink>
                        ))
                    }
                </nav>
                {/* apartment btn */}
                <div className="flex items-center gap-5">
                    <i className=' text-lg bx bxs-shopping-bag'></i>
                    <i className=' text-lg bx bx-search-alt-2' ></i>
                    <Link to="/">
                        <button className="font-semibold rounded-md border border-[#FF3811] py-2 px-5 btn-outline text-[#FF3811] hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]">Apartment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;