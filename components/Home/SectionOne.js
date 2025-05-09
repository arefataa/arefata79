
export default function SectionOne() {


  return (
    <header id="hiro" className="hero pt-8">
      <div className="section-center hero-center">
        <article data-aos="zoom-in" className="hero-info fade-left">
          <div className="underline"></div>
          <h2>برنامه‌نویس وب</h2>
          <h4>تخصص در طراحی و توسعه وب‌سایت‌های کاربرپسند و بهینه</h4>
          <a href="" className="btn hero-btn fade-left">تماس با من</a>

          <ul className="social-icons hero-icons fade-left">
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
        </article>

        <article data-aos="zoom-in" className="hero-img">
          <img data-aos="fade-right"
            className="hero-photo max-md:rounded-lg"
            src="./images/Picsart_25-04-24_19-09-15-607.jpg"
            alt="hero-img"
          />
        </article>
      </div>
    </header>
  )
}
