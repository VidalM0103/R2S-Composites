import { Link } from "react-router-dom"
import Dropdown from "./Dropdown";

const Navbar = () => {

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
            <nav className="bg-gray-900 border-gray-700 text-white font-semibold fixed w-full z-20 top-0 start-0 border-b font-poppins">
                  <div className="flex lg:flex-wrap lg:items-center lg:justify-between">
                        <input className="peer hidden" type="checkbox" id="menu-toggle" />

                        <svg onClick={toggleMenu}
                              className="animate-[wiggle_2s_linear_infinite] fill-white cursor-pointer lg:hidden block absolute top-7 right-7"
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 20 20"
                        >
                              <title>menu</title>
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                        <Link className="space-x-3" onClick={closeMenu} to="/R2S-Composites/">
                              <img src={process.env.PUBLIC_URL + "/R2S-Composites-Fond-Transparent.png"} className="h-24" alt="R2S Logo" />
                        </Link>
                        <ul className="hidden bg-slate-900 lg:!flex lg:!flex-row lg:!static lg:!bg-none peer-checked:ml-0 peer-checked:flex peer-checked:flex-col peer-checked:absolute peer-checked:top-[calc(96px)] peer-checked:right-[calc(0px)] font-medium lg:p-4 border-[calc(1px)] border-gray-800 lg:!border-none">
                              <li>
                                    <Link onClick={closeMenu} to="/R2S-Composites/" className="block py-4 px-4 hover:text-yellow-300">Accueil</Link>
                              </li>
                              <hr className="block lg:hidden text-white" />
                              <li className="group inline-block relative">
                                    <Dropdown ulId="1"
                                          menuTitle="R2S Expertise"
                                          subMenus={
                                                [
                                                      { name: "Présentation", link: "/R2S-Composites/expertise/" },
                                                      { name: "Demander un devis", link: "/R2S-Composites/expertise/devis" }
                                                ]
                                          } />
                              </li>
                              <hr className="block lg:hidden text-white" />
                              <li className="group inline-block relative">
                                    <Dropdown ulId="2"
                                          menuTitle="R2S Naval"
                                          subMenus={
                                                [
                                                      { name: "Présentation", link: "/R2S-Composites/naval/" },
                                                      { name: "Réalisations", link: "/R2S-Composites/naval/realisations/" },
                                                      { name: "Demander un devis", link: "/R2S-Composites/naval/devis" }
                                                ]
                                          } />
                              </li>
                              <hr className="block lg:hidden text-white" />
                              <li className="group inline-block relative">
                                    <Dropdown ulId="3"
                                          menuTitle="R2S Piscine"
                                          subMenus={
                                                [
                                                      { name: "Présentation", link: "/R2S-Composites/piscine/" },
                                                      { name: "Projets ", link: "/R2S-Composites/piscine/realisations" },
                                                      { name: "Demander un devis", link: "/R2S-Composites/piscine/devis" }
                                                ]
                                          } />
                              </li>
                              <hr className="block lg:hidden text-white" />
                              <li className="group inline-block relative">
                                    <Dropdown ulId="4"
                                          menuTitle="R2S Industrie"
                                          subMenus={
                                                [
                                                      { name: "Présentation", link: "/R2S-Composites/industrie/" },
                                                      { name: "Réalisations", link: "/R2S-Composites/industrie/realisations" },
                                                      { name: "Demander un devis", link: "/R2S-Composites/industrie/devis" }
                                                ]
                                          } />
                              </li>
                              <hr className="block lg:hidden text-white" />
                              <li>
                                    <Link onClick={closeMenu} to="/R2S-Composites/contact/" className="block py-4 px-4 hover:text-yellow-300">Contact</Link>
                              </li>
                        </ul>
                  </div>
            </nav >
      )
}

export default Navbar;