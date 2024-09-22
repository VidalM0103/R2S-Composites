import { Link } from "react-router-dom"
import Dropdown from "./Dropdown";
import React from "react";

const Navbar = () => {
      const navItems = [
            { type: 'link', title: 'Accueil', path: '/' },
            {
                  type: 'dropdown',
                  title: 'R2S Expertise',
                  items: [
                        { name: 'Présentation', link: '/expertise/' },
                        { name: 'Demander un devis', link: '/expertise/devis' }
                  ]
            },
            {
                  type: 'dropdown',
                  title: 'R2S Naval',
                  items: [
                        { name: 'Présentation', link: '/naval/' },
                        { name: 'Réalisations', link: '/naval/realisations/' },
                        { name: 'Demander un devis', link: '/naval/devis' }
                  ]
            },
            {
                  type: 'dropdown',
                  title: 'R2S Piscine',
                  items: [
                        { name: 'Présentation', link: '/piscine/' },
                        { name: 'Projets', link: '/piscine/realisations' },
                        { name: 'Demander un devis', link: '/piscine/devis' }
                  ]
            },
            {
                  type: 'dropdown',
                  title: 'R2S Industrie',
                  items: [
                        { name: 'Présentation', link: '/industrie/' },
                        { name: 'Réalisations', link: '/industrie/realisations' },
                        { name: 'Demander un devis', link: '/industrie/devis' }
                  ]
            },
            { type: 'link', title: 'Contact', path: '/contact/' }
      ];
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
      function toggleMenu() {
            const menu = document.getElementById('menu-toggle');
            if (menu) {
                  menu.checked = menu.checked ? false : true;
            }
            const listUl = document.getElementsByClassName("ulMenu");
            for (let i = 0; i < listUl.length; i++) {
                  listUl[i].style.display = "none";
            }
      }

      return (
            <nav className="fixed z-20 w-full top-0 start-0 bg-gray-900 border-gray-700 text-lg">
                  <div className="flex lg:flex-wrap lg:items-center lg:justify-between">
                        <input className="peer hidden" type="checkbox" id="menu-toggle" />
                        <svg
                              onClick={toggleMenu}
                              className="animate-[wiggle_2s_linear_infinite] fill-white cursor-pointer lg:hidden block absolute top-7 right-7"
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 20 20"
                        >
                              <title>menu</title>
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                        <Link onClick={closeMenu} to="/">
                              <img src={process.env.PUBLIC_URL + "/R2S-Composites-Fond-Transparent.png"} className="h-24" alt="R2S Logo" />
                        </Link>
                        <ul className="hidden lg:!flex lg:!flex-row lg:!static bg-slate-900 lg:!bg-none border-[calc(1px)] border-gray-800 lg:!border-none peer-checked:ml-0 peer-checked:flex peer-checked:flex-col peer-checked:absolute peer-checked:top-[calc(96px)] peer-checked:right-[calc(0px)] lg:p-4">
                              {navItems.map((item, index) => (
                                    <React.Fragment key={item.title}>
                                          {item.type === 'link' ? (
                                                <li>
                                                      <Link onClick={closeMenu} to={item.path} className="block p-4 hover:text-yellow-300">
                                                            {item.title}
                                                      </Link>
                                                </li>
                                          ) : (
                                                <li className="group inline-block relative">
                                                      <Dropdown ulId={index + 1} menuTitle={item.title} subMenus={item.items} />
                                                </li>
                                          )}
                                          {index < navItems.length - 1 && <hr className="block lg:hidden" />}
                                    </React.Fragment>
                              ))}
                        </ul>
                  </div>
            </nav>
      );
};

export default Navbar;