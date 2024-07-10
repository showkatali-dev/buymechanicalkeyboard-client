import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-accent text-primary-content pt-8 pb-6 border-t footer footer-center">
      <div className="container">
        <div className="pb-6 border-b gap-x-12 footer">
          <nav className="text-start max-sm:text-xs">
            <Link to="/" className="flex items-center gap-1">
              <img
                src="/images/logo.webp"
                alt=""
                className="w-12"
                width={48}
                height={48}
              />
              <span className="text-3xl uppercase font-medium">
                <span className="font-extrabold">Buy</span> Keyboard
              </span>
            </Link>
            <p>Dhaka, Bangladesh</p>

            <p>
              Email{" "}
              <a
                href="mailto:info@buymechanicalkeyboard.com"
                target="_blank"
                rel="noopener"
                className="text-secondary"
              >
                info@buymechanicalkeyboard.com
              </a>
            </p>
            <p>
              Phone <span className="text-secondary">+123 456 789</span>
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.facebook.com/buymechanicalkeyboard"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center p-1 text-white rounded-full bg-primary-content/10 backdrop-blur-sm"
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://www.instagram.com/buymechanicalkeyboard"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center p-1 text-white rounded-full bg-primary-content/10 backdrop-blur-sm"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.linkedin.com/company/buymechanicalkeyboard"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center p-1 text-white rounded-full bg-primary-content/10 backdrop-blur-sm"
              >
                <RiLinkedinFill />
              </a>
              <a
                href="https://www.youtube.com/@buymechanicalkeyboard"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center p-1 text-white rounded-full bg-primary-content/10 backdrop-blur-sm"
              >
                <RiYoutubeFill />
              </a>
            </div>
          </nav>

          <nav className="max-sm:text-xs">
            <header className="text-sm normal-case opacity-100 sm:text-lg footer-title">
              Information
            </header>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/about-us" className="link link-hover">
              About us
            </Link>
            <Link to="/contact-us" className="link link-hover">
              Contact us
            </Link>
          </nav>
          <nav className="max-sm:text-xs">
            <header className="text-sm normal-case opacity-100 sm:text-lg footer-title">
              Offline Shop
            </header>

            <p>Mirpur 10</p>
            <p>Shop 14, Road 6, Block C</p>
            <p>Dhaka, Bangladesh</p>
          </nav>
          <nav className="ml-auto max-sm:text-xs">
            <header className="text-sm normal-case opacity-100 sm:text-lg footer-title">
              Payment Accept
            </header>

            <div>
              <img
                src="/images/logo-stripe3.png"
                className="w-full border rounded"
                alt="Stripe"
              />
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p className="max-sm:text-xs">
          Copyright © {new Date().getFullYear()} Showkat Ali - All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
