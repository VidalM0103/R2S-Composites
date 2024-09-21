import { Link } from "react-router-dom"

const Dropdown = ({ ulId, menuTitle, subMenus }) => {
    function closeMenu() {
        const menu = document.getElementById('menu-toggle');
        if (menu) {
            if (menu.checked)
                menu.checked = false;
        }
        const listUl = document.getElementsByClassName("ulMenu");
        for (let i = 0; i < listUl.length; i++) {
            listUl[i].style.display = "none";
        }
    }
    function openMenu(e) {
        const ul = document.getElementById(ulId);
        if (ul) {
            if (ul.style.display === "block") {
                ul.style.display = "none";
            } else {
                ul.style.display = "block";
            }
        }
    }

    return (
        <>
            <ul onClick={openMenu} className="inline-flex items-center justify-between w-56 lg:w-auto hover:text-yellow-300 p-4">
                {menuTitle}
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </ul>
            <ul id={ulId} className="ulMenu lg:!absolute hidden lg:!hidden lg:group-hover:!block bg-gray-700 w-56 border-t-2 border-yellow-300 lg:pl-0">
                {
                    subMenus.map((subMenu, index) => (
                        <>
                            <li className="flex items-center h-12 hover:bg-gray-800  pl-4 " key={index}>
                                <Link onClick={closeMenu} to={subMenu.link} className="block py-2 px-3 hover:text-yellow-300">{subMenu.name}</Link>
                            </li>
                        </>
                    ))
                }
            </ul>
        </>
    );
};

export default Dropdown;