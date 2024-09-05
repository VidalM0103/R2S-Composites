import { Link } from "react-router-dom"

/* subMenus => double array(name,link)*/
const Dropdown = ({ menuTitle, subMenus }) => {
    return (
        <>
            <ul className="hover:text-yellow-300  py-2 px-4 inline-flex items-center">
                <Link to={subMenus[0].link}>{menuTitle}</Link>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </ul>
            <ul className="absolute hidden group-hover:block bg-gray-900 pt-1 w-48 border-t-2 border-yellow-300">
                {
                    subMenus.map((subMenu, index) => (
                        <li key={index}>
                            <Link to={subMenu.link} className="block py-2 px-3 hover:text-yellow-300">{subMenu.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <ul>

            </ul>
        </>
    );
};

export default Dropdown;