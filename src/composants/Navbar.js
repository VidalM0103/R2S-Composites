import { Link } from "react-router-dom"
import Dropdown from "./Dropdown";

const Navbar = () => {
      return (
            <nav className="bg-gray-900 border-gray-700 text-white font-semibold fixed w-full z-20 top-0 start-0 border-b font-poppins">
                  <div className="flex flex-wrap items-center justify-between">
                        <Link className="flex items-center space-x-3" to="/R2S-Composites">
                              <img src={process.env.PUBLIC_URL + "/R2S-Composites-Fond-Transparent.png"} className="h-24" alt="R2S Logo" />
                        </Link>
                        <ul className="flex flex-row font-medium p-4">
                              <li>
                                    <Link to="/R2S-Composites" className="block py-2 px-3 hover:text-yellow-300">Accueil</Link>
                              </li>
                              <li className="group inline-block relative">
                                    <Dropdown
                                          menuTitle="R2S Expertise"
                                          subMenus={
                                                [
                                                      { name: "Présentation", link: "/R2S-Composites/expertise" },
                                                      { name: "Demander un devis", link: "/R2S-Composites/expertise/devis" }
                                                ]
                                          } />
                              </li>
                              <li className="group inline-block relative">
                                    <Dropdown
                                          menuTitle="R2S Naval"
                                          subMenus={
                                                [
                                                      { name: "Présentation", link: "/R2S-Composites/naval" },
                                                      { name: "Réalisations", link: "/R2S-Composites/naval/realisations" },
                                                      { name: "Demander un devis", link: "/R2S-Composites/naval/devis" }
                                                ]
                                          } />
                              </li>
                              <li className="group inline-block relative">
                                    <Dropdown
                                          menuTitle="R2S Piscine"
                                          subMenus={
                                                [
                                                      { name: "Présentation", link: "/R2S-Composites/piscine" },
                                                      { name: "Projets  ", link: "/R2S-Composites/piscine/realisations" },
                                                      { name: "Demander un devis", link: "/R2S-Composites/piscine/devis" }
                                                ]
                                          } />
                              </li>
                              <li className="group inline-block relative">
                                    <Dropdown
                                          menuTitle="R2S Industrie"
                                          subMenus={
                                                [
                                                      { name: "Présentation", link: "/R2S-Composites/industrie" },
                                                      { name: "Réalisations", link: "/R2S-Composites/industrie/realisations" },
                                                      { name: "Demander un devis", link: "/R2S-Composites/industrie/devis" }
                                                ]
                                          } />
                              </li>
                              <li>
                                    <Link to="/R2S-Composites/contact" className="block py-2 px-3 hover:text-yellow-300">Contact</Link>
                              </li>
                        </ul>
                  </div>
            </nav >
      )
}

export default Navbar;