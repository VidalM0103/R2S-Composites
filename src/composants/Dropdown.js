import { NavLink } from "react-router-dom"
import React from "react"

const Dropdown = ({ ulId, menuTitle, path, subMenus }) => {

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

    function closeOtherMenu(ulId) {
        const listUl = document.getElementsByClassName("ulMenu");
        for (let i = 0; i < listUl.length; i++) {
            if (listUl[i].id !== ulId)
                listUl[i].style.display = "none";
        }
    }

    function toggleMenu() {
        const ul = document.getElementById(ulId);
        if (ul) {
            if (ul.style.display === "block") {
                ul.style.display = "none";
            } else {
                closeOtherMenu(ulId);
                ul.style.display = "block";
            }
        }
    }

    return (
        <>
            <NavLink onClick={toggleMenu} to={path} className="inline-flex items-center justify-between w-56 lg:w-auto hover:text-primary p-4" style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : ""
                };
            }}>
                {menuTitle}
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </NavLink>
            <ul id={ulId} className="animate-fadeInUp ulMenu lg:!absolute hidden lg:!hidden lg:group-hover:!block bg-gray-700 w-56 border-t-2 border-primary">
                {
                    subMenus.map((subMenu, index) => (
                        <React.Fragment key={index}>
                            <li className="flex flex-col items-center justify-center h-14 hover:bg-black hover:text-primary" key={index}>
                                <NavLink onClick={closeMenu} to={subMenu.link} className="h-14 w-56 flex items-center justify-center">{subMenu.name}</NavLink>
                            </li>
                            {index < subMenus.length - 1 && <hr className="block" />}
                        </React.Fragment>
                    ))
                }
            </ul>
        </>
    );
};

export default Dropdown;