export default function SectionFive() {
    return (
        <>
        <section className="connect">
            <video
                className="video-container"
                autoPlay
                muted
                loop
                src="./AryanMedia BG (2).mp4"
            >
                <source src="./videos/connect.mp4" type="video/mp4" />
                متأسفانه، مرورگر شما نمایش ویدیو را ساپورت نمی‌کند.
            </video>

            <div className="video-banner">
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className="section-title">
                    <h2>ارتباط با من</h2>
                    <div className="underline"></div>
                </div>

                <p data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className="video-text">
                    من همیشه آماده‌ام تا به سؤالات شما پاسخ دهم و در مورد پروژه‌ها و همکاری‌های
                    جدید گفتگو کنم. با توجه به تجربیاتم در طراحی و توسعه وب، می‌توانم به شما
                    کمک کنم تا ایده‌هایتان را به واقعیت تبدیل کنید. برای اطلاعات بیشتر یا
                    مشاوره، خوشحال می‌شوم که با من تماس بگیرید.
                </p>
                <a data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" href="#" className="btn">تماس با من</a>
            </div>
        </section>
</>
    );
}
