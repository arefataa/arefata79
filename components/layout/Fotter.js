export default function Footer(params) {
    return (
        <footer className=" bg-[var(--clr-primary-2)] p-5 flex flex-col items-center">
            <h3 className="mb-2.5">موقعیت‌ها</h3>

            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start flex-wrap w-full max-w-[800px]">
                <div className="map-container rounded-[15px] w-[300px] h-[200px] overflow-hidden bg-black mb-5 sm:mb-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091406!2d144.9630579153166!3d-37.81362797975105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e4e3%3A0x5045675218ceed30!2sYour%20Address!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
                        width="300"
                        height="200"
                        className="border-0"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                </div>

                <div className="text-[--clr-primary-4] text-center sm:ml-5 flex flex-col items-center">
                    <ul className="flex flex-row sm:flex-col gap-2">
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
            </div>

            <p className="text-center mt-5">
                © <span id="date"></span> تمامی حقوق محفوظ است. طراحی و توسعه توسط <span className="text-[var(--clr-primary-5)]">ArefAta</span>
            </p>
        </footer>
    );
}
