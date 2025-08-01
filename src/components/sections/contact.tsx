export default function Contact() {
  return (
    <section>
      <h2>Контакти</h2>
      <div className="container mx-auto flex items-center gap-4 px-4 py-8">
        {/* Facebook */}
        <a href="https://facebook.com">
          <img
            className="w-10 [filter:hue-rotate(310deg)] transition-all hover:brightness-75 hover:grayscale"
            src="/images/social-icons/facebook-logo.svg"
            alt="Facebook Icon"
          />
        </a>

        {/* Instagram */}
        <a href="https://instagram.com">
          <img
            className="w-10 [filter:hue-rotate(180deg)] transition-all hover:brightness-75 hover:grayscale"
            src="/images/social-icons/instagram-logo.svg"
            alt="Instagram Icon"
          />
        </a>

        {/* Gmail */}
        <a href="mailto:example@gmail.com">
          <img
            className="w-10 [filter:hue-rotate(180deg)] transition-all hover:brightness-75 hover:grayscale"
            src="/images/social-icons/gmail-logo.svg"
            alt="Gmail Icon"
          />
        </a>

        {/* Messenger */}
        <a href="https://m.me/yourusername">
          <img
            className="w-10 [filter:hue-rotate(250deg)] transition-all hover:brightness-75 hover:grayscale"
            src="/images/social-icons/messenger-logo.svg"
            alt="Messenger Icon"
          />
        </a>

        {/* Telegram */}
        <a href="https://t.me/yourusername">
          <img
            className="w-10 [filter:hue-rotate(340deg)] transition-all hover:brightness-75 hover:grayscale"
            src="/images/social-icons/telegram-logo.svg"
            alt="Telegram Icon"
          />
        </a>

        {/* Viber */}
        <a href="viber://chat?number=%2B1234567890">
          <img
            className="w-10 [filter:hue-rotate(290deg)] transition-all hover:brightness-75 hover:grayscale"
            src="/images/social-icons/viber-logo.svg"
            alt="Viber Icon"
          />
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/1234567890">
          <img
            className="w-10 [filter:hue-rotate(50deg)] transition-all hover:brightness-75 hover:grayscale"
            src="/images/social-icons/whatsapp-logo.svg"
            alt="WhatsApp Icon"
          />
        </a>

        {/* YouTube */}
        <a href="https://youtube.com/@yourchannel">
          <img
            className="w-10 [filter:hue-rotate(180deg)] transition-all hover:brightness-75 hover:grayscale"
            src="/images/social-icons/youtube-logo.svg"
            alt="YouTube Icon"
          />
        </a>
      </div>
    </section>
  )
}
