

export default function SectionFour() {
    return (

<>
         <section id="proj" className="section projects">
            <div  data-aos="fade-up" data-aos-duration="3000" className="project-1 section-title" >
                <h2>پروژه‌ها</h2>
                <div className="underline"></div>
                <p className="projects-text">
                    در اینجا برخی از پروژه‌هایی که به عنوان برنامه‌نویس وب انجام داده‌ام، معرفی می‌شود.
                    این پروژه‌ها شامل طراحی و توسعه وب‌سایت‌های متنوع با تمرکز بر تجربه کاربری و عملکرد بهینه
                    هستند. هر پروژه نشان‌دهنده مهارت‌های من در استفاده از تکنولوژی‌های روز و توانایی حل مسائل
                    پیچیده می‌باشد.
                </p>
            </div>

            <div className="section-center projects-center">
                <a data-aos="fade-up" data-aos-duration="3000" className="project-1" href="https://nature-rose.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <article className="project">
                        <img
                            className="project-img"
                            src="./images/Screenshot 2025-04-27 051734.png"
                            alt="پروژه ۱"
                        />
                        <div className="project-info">
                            <h4>پروژه وب‌سایت  عکاسی</h4>
                            <p>توسعه یک وب‌سایت عکاسی و مدیریت موجودی.</p>
                        </div>
                    </article>
                </a>
                <a data-aos="fade-down" data-aos-duration="1500" data-aos-easing="linear" className="project-2" href="https://life-change-xm61.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <article className="project">
                        <img
                            className="project-img"
                            src="./images/Screenshot 2025-04-27 050914.png"
                            alt="پروژه ۲"
                        />
                        <div className="project-info">
                            <h4>پروژه وب‌سایت شخصی</h4>
                            <p>طراحی و پیاده‌سازی یک وب‌سایت شخصی برای نمایش نمونه کارها و خدمات.</p>
                        </div>
                    </article>
                </a>
                <a  data-aos="zoom-in-down" data-aos-easing="ease-in-sine" data-aos-offset="300" className="project-3" href="https://management-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <article className="project">
                        <img
                            className="project-img"
                            src="./images/Screenshot 2025-04-27 052109.png"
                            alt="پروژه ۳"
                        />
                        <div className="project-info">
                            <h4>پروژه اپلیکیشن وب</h4>
                            <p>توسعه یک اپلیکیشن وب برای مدیریت وظایف و یادآوری‌ها با قابلیت همگام‌سازی.</p>
                        </div>
                    </article>
                </a>
                <a data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" className="project-4" href="https://mediatel-front.webteamwork.ca/startup">
                    <article className="project">
                        <img
                            className="project-img"
                            src="./images/Screenshot 2025-05-07 112219.png"
                            alt="پروژه ۴"
                        />
                        <div className="project-info">
                            <h4>پروژه وب‌سایت خبری</h4>
                            <p>طراحی و توسعه یک وب‌سایت خبری با قابلیت انتشار و مدیریت مقالات.</p>
                        </div>
                    </article>
                </a>
            </div>

        </section> 
</>
    )
}