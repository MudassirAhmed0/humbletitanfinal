
import logo_header from '../assets/imgs/HT-Standard-Logo.png';
import web_design from '../assets/imgs/web-design-menu-225x300.jpg';
import content_marketing_menu from '../assets/imgs/content-marketing-menu-225x300.jpg';
import seo_menu from '../assets/imgs/seo-menu-225x300.jpg';
import management_services from '../assets/imgs/management-service-menu-225x300.jpg';
import one_p from '../assets/imgs/1.png';
import technical_tram from '../assets/imgs/technical-tram-menu.jpg';
import authority_tram from '../assets/imgs/authority-tram-menu.jpg';
import relevent_tram from '../assets/imgs/relevance-tram-menu.jpg';
import monitoring_tram from '../assets/imgs/monitoring-tram-menu.jpg';
import tram_banner from '../assets/imgs/tram-banner-1.png';
import Image from 'next/image';
import { FaChevronDown, FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaBookReader, FaBars } from "react-icons/fa";
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <header className="abcd_Header">

                <div className="abcd_container abcd_container_menu ">
                    <div className="abcd_row abcd_justify-between abcd_relative abcd_align-center abcd_align-center">
                        <div className="abcd_col-2">
                            <div className="header_main_logo pointer_abcd">
                                <Link href={`/`}>
                                    {/* <img src="https://www.designinguru.com/imgs/HT-Standard-Logo.png" alt="Humble Titan Logo" /> */}
                                    <Image src={logo_header} alt="Humble Titan Logo" />
                                </Link>
                            </div>

                        </div>
                        <div className="abcd_col-10  mbl-display_abcd">
                            <div className="header__firstrow_abcd abcd_row p-1_abcd ">
                                <ul className="abcd_row mr-auto_abcd ul_abcd abcd_align-center">
                                    <li><a href="https://www.humbletitan.com/offices/" className="a_abcd">Offices</a></li>
                                    <li><a href="https://www.humbletitan.com/faqs/" className="a_abcd">FAQS</a></li>
                                    <li className="abcd_mainmenu abcd_relative"><a href="https://www.humbletitan.com/about/" className="a_abcd">About Us</a>
                                        <ul className="abcd_submenu ul_abcd" style={{ height: '44.39px', minWidth: '140px' }}>
                                            <li className="abcd_menu-politics" style={{ padding: "12px 20px" }}><a href="https://www.humbletitan.com/team/" className="a_abcd">THE TEAM</a> </li>
                                        </ul>
                                        <FaChevronDown style={{ position: 'relative', top: '3px', left: '1px', cursor: 'pointer' }} />

                                    </li>
                                </ul>
                                <div className="abcd_row abcd_align-center">
                                    <div className="header_search_input_wrapper_abcd">
                                        <FaSearch />
                                        <input type="text" placeholder="Search Stocks, Business & Politics" />
                                    </div>
                                    <ul className="abcd_row social_icons_abcd ml-1_abcd ul_abcd">
                                        <li className="li_abcd"> <a className="a_abcd" href="#">
                                            <FaFacebookF />
                                        </a>
                                        </li>
                                        <li className="li_abcd"> <a className="a_abcd" href="#">
                                            <FaTwitter />
                                        </a></li>
                                        <li className="li_abcd"> <a className="a_abcd" href="#">
                                            <FaInstagram />
                                        </a>
                                        </li>
                                        <li className="li_abcd"> <a className="a_abcd" href="#">
                                            <FaLinkedinIn />
                                        </a></li>
                                        <li className="li_abcd"> <a className="a_abcd" href="#">
                                            <FaYoutube />
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header__secondrow_abcd abcd_row p-1_abcd abcd_justify-between  ">
                                <div className="header_secondrow_logo_abcd displaynone_abcd">
                                    {/* <img src="https://www.designinguru.com/imgs/HT-Standard-Logo.png" alt="Humble Titan Logo" /> */}
                                    <Image src={logo_header} alt="Humble Titan Logo" />
                                </div>
                                <ul className="abcd_row abcd_justify-between abcd_nav abcd_align-center ul_abcd">
                                    <li>
                                        <a href="https://www.humbletitan.com/" className="a_abcd"> Home</a>
                                    </li>
                                    <li className="abcd_mainmenu abcd_relative">
                                        <a href="https://www.humbletitan.com/politics/" className="active a_abcd">Politics                                         <FaChevronDown style={{ position: 'relative', top: '3px', left: '1px' }} />
                                        </a>
                                        <ul className="abcd_submenu ul_abcd">
                                            <li className="abcd_menu-politics"><a href="https://www.humbletitan.com/due-diligence/abcd-stock/" className="a_abcd"> ABCD Stock</a></li>
                                            <li className="abcd_menu-politics"><a href="https://www.humbletitan.com/bayo-search-consultant/" className="a_abcd"> Founder & Consultant</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://www.humbletitan.com/education/" className="a_abcd">Education</a>
                                    </li>
                                    <li className="abcd_mainmenu">
                                        <a href="https://www.humbletitan.com/services/" className="a_abcd">Services                                         <FaChevronDown style={{ position: 'relative', top: '3px', left: '1px' }} />
                                        </a>
                                        <ul className="abcd_servicemenu abcd_row ul_abcd">
                                            <li className="abcd_servicemenu_li">
                                                <div className="abcd_menu_font"> <a href="https://www.humbletitan.com/services/web-design/" className="a_abcd"> Web Design</a></div>
                                                {/* <img src="https://www.designinguru.com/imgs/web-design-menu-225x300.jpg" alt="" /> */}
                                                <Image src={web_design} alt="Web designing" />
                                            </li>
                                            <li className="abcd_servicemenu_li">
                                                <div className="abcd_menu_font"><a href="https://www.humbletitan.com/services/content-marketing/" className="a_abcd"> Content Marketing</a></div>
                                                {/* <img src="https://www.designinguru.com/imgs/content-marketing-menu-225x300.jpg" alt="" /> */}
                                                <Image src={content_marketing_menu} alt="content marketing menu" />
                                            </li>
                                            <li className="abcd_servicemenu_li">
                                                <div className="abcd_menu_font"><a href="https://www.humbletitan.com/services/content-marketing/" className="a_abcd"> SEO Optimization</a></div>
                                                {/* <img src="https://www.designinguru.com/imgs/seo-menu-225x300.jpg" alt="" /> */}
                                                <Image src={seo_menu} alt="Seo menu" />
                                            </li>
                                            <li className="abcd_servicemenu_li">
                                                <div className="abcd_menu_font"><a href="https://www.humbletitan.com/services/web-performance-management/" className="a_abcd"> Managment Services</a></div>
                                                {/* <img src="https://www.designinguru.com/imgs/management-service-menu-225x300.jpg" alt="" /> */}
                                                <Image src={management_services} alt="management services" />
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="abcd_mainmenu">
                                        <a href="https://www.humbletitan.com/tram-seo/" className="a_abcd"><strong>TRAM SEO Course</strong> <span className="newbadge">New</span>                                        <FaChevronDown style={{ position: 'relative', top: '3px', left: '1px' }} /></a>
                                        <ul className="abcd_servicemenu abcd_row ul_abcd">
                                            <li className="abcd_servicemenu_li w60">
                                                <div className="abcd_row">
                                                    <div>
                                                        <div>
                                                            <FaBookReader />
                                                        </div>
                                                        <div className="abcd_button_free"><span className="abcd_free_font">Free</span>
                                                        </div>
                                                    </div>
                                                    <div className="abcd_font_terms"><a href="https://www.humbletitan.com/tram-seo-course/" className="a_abcd">Standard Package</a></div>
                                                </div>
                                                <div className="abcd_fontset_para mt-2_abcd">
                                                    Master the science and art of search. A comprehensive course that offers a
                                                    step-by-step guide to ranking your website on search engines like Google.
                                                </div>
                                                <br />
                                                <div className="abcd_row abcd_justify-between abcd_align-center">
                                                    <div className="abcd_fontset_para abcd_cursorpointer"><a href="https://www.humbletitan.com/due-diligence/abcd-stock/#" className="a_abcd">Passion Pakage</a> </div>
                                                    <div className="abcd_button_free abcd_coming2023"><span
                                                        className="abcd_free_font abcd_comingset">Coming 2023</span></div>
                                                </div>
                                                <br />
                                                <div className="abcd_row abcd_justify-between abcd_align-center">
                                                    <div className="abcd_fontset_para abcd_cursorpointer"><a href="https://www.humbletitan.com/due-diligence/abcd-stock/#" className="a_abcd">Professional Pakage</a></div>
                                                    <div className="abcd_button_free abcd_coming2023"><span
                                                        className="abcd_free_font abcd_comingset">Coming 2023</span></div>
                                                </div>
                                                <br />
                                                <div className="abcd_row abcd_justify-between abcd_align-center">
                                                    <div className="abcd_fontset_para abcd_cursorpointer"><a href="https://www.humbletitan.com/due-diligence/abcd-stock/#" className="a_abcd">About the course</a></div>
                                                </div>
                                                <br />
                                                <div className="abcd_row abcd_justify-between abcd_align-center">
                                                    <div className="abcd_fontset_para abcd_cursorpointer"><a href="https://www.humbletitan.com/due-diligence/abcd-stock/#" className="a_abcd">About the Founder</a></div>
                                                </div>
                                            </li>
                                            <li className="abcd_servicemenu_li">
                                                <div className="abcd_menu_font">
                                                    {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/1.png" alt="" /> */}
                                                    <Image src={one_p} alt="P One" />
                                                </div>
                                                <div className="abcd_menu_font">
                                                    {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/technical-tram-menu.jpg" alt="" /> */}
                                                    <Image src={technical_tram} alt="technical tram" />
                                                </div>
                                                <div className="abcd_16font abcd_cursorpointer "><a href="https://www.humbletitan.com/tram-seo-course/technical-course/" className="a_abcd">  Technical SEO</a></div>
                                                <div className="abcd_menu_font">
                                                    {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/authority-tram-menu.jpg" alt="" /> */}
                                                    <Image src={authority_tram} alt="Authority tram" />
                                                </div>
                                                <div className="abcd_16font abcd_cursorpointer "><a href="https://www.humbletitan.com/tram-seo-course/authority-course/" className="a_abcd">  Authority SEO</a></div>
                                            </li>
                                            <li className="abcd_servicemenu_li">
                                                <br /><br /><br />
                                                <div className="abcd_menu_font">
                                                    {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/relevance-tram-menu.jpg" alt="" /> */}
                                                    <Image src={relevent_tram} alt="Relevent tram" />
                                                </div>
                                                <div className="abcd_16font abcd_cursorpointer "><a href="https://www.humbletitan.com/tram-seo-course/ranking-course/" className="a_abcd">  Ranking SEO</a></div>
                                                <div className="abcd_menu_font">
                                                    {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/monitoring-tram-menu.jpg" alt="" /> */}
                                                    <Image src={monitoring_tram} alt="Monitoring tram" />
                                                </div>
                                                <div className="abcd_16font abcd_cursorpointer "><a href="https://www.humbletitan.com/tram-seo-course/monitoring-course/" className="a_abcd">  Monitoring SEO</a></div>
                                            </li>
                                            <li className="abcd_servicemenu_li w60 orangeBanner">
                                                {/* <img className="abcd_tramserach" src="https://www.designinguru.com/imgs/tram-banner-1.png" alt="" /> */}
                                                <Image src={tram_banner} alt="tram banner" />
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://www.humbletitan.com/news/" className="a_abcd">Magazine</a>
                                    </li>
                                    <li className="btn btn-primary">
                                        <a href="https://www.humbletitan.com/contact/" className="a_abcd">Hire Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topnav" id="myTopnav">
                    <div className="abcd_col-12 abcd_h-70 abcd_row justify-content">
                        <div className="header_main_logo reponsiveMenu abcd_row abcd_justify-between abcd_relative abcd_h-fit">
                            {/* <img className="abcd_pt-pl" src="https://www.designinguru.com/imgs/HT-Standard-Logo.png" alt="Humble Titan Logo" /> */}
                            <Image src={logo_header} alt="Humble Titan Logo" />
                        </div>
                        <div><a className="icon abcd_humberger">
                            <FaBars className=' icon-font' />
                        </a></div>
                    </div>

                    <a href="https://www.humbletitan.com/" className="abcd_my_head_color abcd_responsive_header_font">Home</a>
                    <button type="button" className="abcd_collapsible  abcd_menu_active"><a href="https://www.humbletitan.com/politics/"
                        className="active abcd_responsive_header_font">Politics <FaChevronDown style={{ position: 'relative', top: '3px', left: '1px' }} />
                    </a></button>
                    <div className="abcd_content">
                        <a href="https://www.humbletitan.com/due-diligence/abcd-stock/" className="abcd_my_head_color abcd_collapse_font">ABCD Stock</a>
                        <a href="https://www.humbletitan.com/bayo-search-consultant/" className="abcd_my_head_color abcd_collapse_font">Founder & Consultant</a>
                    </div>
                    <a href="https://www.humbletitan.com/education/" className="abcd_my_head_color abcd_responsive_header_font">Education</a>
                    <button type="button" className="abcd_collapsible"><a href="https://www.humbletitan.com/services/"
                        className="abcd_my_head_color abcd_responsive_header_font">Services <FaChevronDown style={{ position: 'relative', top: '3px', left: '1px' }} /></a></button>
                    <div className="abcd_content">
                        <a href="https://www.humbletitan.com/services/web-design/" className="abcd_my_head_color abcd_collapse_font">web design</a>
                        <a href="https://www.humbletitan.com/services/content-marketing/" className="abcd_my_head_color abcd_collapse_font">content Marketing</a>
                        <a href="https://www.humbletitan.com/services/search-engine-optimization/" className="abcd_my_head_color abcd_collapse_font">search engine optimization</a>
                        <a href="https://www.humbletitan.com/services/search-engine-optimization/" className="abcd_my_head_color abcd_collapse_font">Web Management</a>
                    </div>
                    <button type="button" className="abcd_collapsible"><a href="https://www.humbletitan.com/tram-seo/"
                        className="abcd_my_head_color abcd_responsive_header_font">Tram Seo Course <FaChevronDown style={{ position: 'relative', top: '3px', left: '1px' }} /></a></button>
                    <div className="abcd_content">
                        <div className="abcd_row abcd_justify-center abcd_align-center">
                            <a href="https://www.humbletitan.com/tram-seo/" className="abcd_my_head_color abcd_collapse_font">standar Package</a>
                            <div className="abcd_button_free .abcd_button_free" style={{ width: "110px" }}><span className="abcd_free_font abcd_comingset" >Free</span></div>
                        </div>
                        <div className="abcd_row abcd_justify-center abcd_align-center">
                            <a href="https://www.humbletitan.com/due-diligence/abcd-stock/#" className="abcd_my_head_color abcd_collapse_font">Passion Packages</a>
                            <div className="abcd_button_free abcd_coming2023"><span className="abcd_free_font abcd_comingset">Coming
                                2023</span></div>
                        </div>
                        <div className="abcd_row abcd_justify-center abcd_align-center">
                            <a href="https://www.humbletitan.com/due-diligence/abcd-stock/#" className="abcd_my_head_color abcd_collapse_font">Professional Packages</a>
                            <div className="abcd_button_free abcd_coming2023"><span className="abcd_free_font abcd_comingset">Coming
                                2023</span></div>
                        </div>
                        <a href="https://www.humbletitan.com/due-diligence/abcd-stock/#" className="abcd_my_head_color abcd_collapse_font">About the Course</a>
                        <a href="https://www.humbletitan.com/due-diligence/abcd-stock/#" className="abcd_my_head_color abcd_collapse_font">About the Founder</a>
                    </div>
                    <a href="https://www.humbletitan.com/news/" className="abcd_my_head_color abcd_responsive_header_font">Magazine</a>
                    <a href="https://www.humbletitan.com/contact/" className="abcd_my_head_color abcd_responsive_header_font">Hire us</a>
                </div>
            </header>
        </>
    );
}

export default Header;
