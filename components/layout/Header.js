"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link'; // وارد کردن Link از Next.js

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // state برای کنترل سایدبار

    useEffect(() => {
        const navbar = document.querySelector("#nav");
        const handleScroll = () => {
            if (window.scrollY > 80) {
                navbar.classList.add("navbar-fixed");
            } else {
                navbar.classList.remove("navbar-fixed");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen); // تغییر وضعیت سایدبار
    };

    return (
        <>
            <nav id="nav" className="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        <h3>AREFATA</h3>
                        <button id="nav-btn" className="nav-btn" onClick={toggleSidebar}>
                            <i className="bi bi-list-nested"></i>
                        </button>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link href="#hiro">صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link href="#about">درباره من</Link>
                        </li>
                        <li>
                            <Link href="#proj">پروژه ها</Link>
                        </li>
                        <li>
                            <Link href="#cards">تجربیات شغلی</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <aside id="sidebar" className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
                <div>
                    <button id="close-btn" className="close-btn" onClick={toggleSidebar}>
                        <i className="bi bi-x"></i>
                    </button>
                    <ul className="sidebar-links">
                        <li>
                            <Link href="#hiro">صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link href="#about">درباره من</Link>
                        </li>
                        <li>
                            <Link href="#proj">پروژه ها</Link>
                        </li>
                        <li>
                            <Link href="#cards">مقالات</Link>
                        </li>
                    </ul>
                    <ul className="social-icons">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100068660676263&ref=ig_profile_ac" className="social-icon">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </li>
                        <li>
                            <a href="https://rubika.ir/arefata007" className="social-icon">
                                <i className="bi bi-chat-left-dots"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/[https://t.me/aref0121]"
                                target="_blank"
                                className="social-icon">
                                <i className="bi bi-telegram"></i>
                            </a>
                        </li>

                        <li>
                            <a className="social-icon" href="https://wa.me/09940692930?text=سلام%20سوالی%20داشتم"
                                target="_blank">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/arefata0121/" className="social-icon">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Header;
