export default function SectionTwo() {
    return (<>
         <section className="sections">
            <div className="section-center about-center">
                <article data-aos="zoom-in" className="about-imgs hidden md-hidd">
                    <img
                        className="about-photo   "
                        src="./images/Picsart_25-04-24_21-44-17-841.png"
                        alt="about-img"
                    />
                </article>

                <article id="about" data-aos="flip-up" className="about-info">
                    <div className="about-title">
                        <h2>درباره من</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                        به عنوان یک برنامه‌نویس وب با تجربه، من به طراحی و توسعه وب‌سایت‌های مدرن و واکنش‌گرا متعهد هستم.
                        با تسلط بر زبان‌های برنامه‌نویسی مانند HTML، CSS و JavaScript، و فریم‌ورک‌های معروف مانند React و 
                        توانسته‌ام پروژه‌های متنوعی را از مرحله طراحی تا پیاده‌سازی نهایی به انجام برسانم.
                        هدف من ارائه تجربه کاربری بی‌نظیر و افزایش تعامل کاربران با وب‌سایت‌ها است.
                    </p>
             

                    <a href="#" className="btn">درباره من</a>
                </article>
                <article data-aos="zoom-in" className=" flex justify-center w-full text-center items-center md:hidden ">
                    <img
                        className=" w-[400px] h-[400px] mx-auto"
                        src="./images/Picsart_25-04-24_21-44-17-841.png"
                        alt="about-img"
                    />
                </article>
            </div>
        </section> 
</>
    )
}