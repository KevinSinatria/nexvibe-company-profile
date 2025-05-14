import Image from "next/image";
import Link from "next/link";
import {
  InstagramLogo,
  TiktokLogo,
  Envelope,
  Phone,
  MapPin,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b px-2 from-gray-100 to-gray-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
      </div>

      <div className="relative mx-auto w-full max-w-screen-xl p-4 py-16 lg:py-20">
        <div className="md:flex md:justify-between md:gap-12">
          {/* Logo dan Deskripsi */}
          <div className="mb-12 md:mb-0 md:max-w-md">
            <Link href="/" className="flex items-center group">
              <div className="relative h-16 w-16 me-3 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/nexvibe_icon.png"
                  alt="NexVibe Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="self-center text-2xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                NexVibe
              </span>
            </Link>
            <p className="mt-6 px-4 max-w-xs text-gray-600 leading-relaxed">
              Solusi digital inovatif untuk membantu bisnis Anda berkembang di
              era digital.
            </p>
          </div>

          {/* Kontak */}
          <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <h2 className="mb-8 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Kontak Kami
              </h2>
              <ul className="text-gray-600 font-medium space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="mt-1">
                    <MapPin size={20} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="group-hover:text-blue-500 transition-colors duration-300">
                    Jalan Ceuri Jalan Terusan Kopo No.KM 13.5, Katapang, Kec.
                    Katapang, Kabupaten Bandung, Jawa Barat 40971
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <Phone size={20} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <Link
                    href="https://wa.me/6285215073092"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    +62 852-1507-3092
                  </Link>
                </li>
                <li className="flex items-center gap-4 group">
                  <Envelope size={20} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <Link
                    href="mailto:dreamteam5183@gmail.com"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    dreamteam5183@gmail.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <h2 className="mb-8 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Ikuti Kami
              </h2>
              <ul className="text-gray-600 font-medium space-y-6">
                <li>
                  <Link
                    href="https://www.instagram.com/nexvibee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <InstagramLogo size={24} className="text-blue-500" />
                    </div>
                    <span className="group-hover:text-blue-500 transition-colors duration-300">@nexvibee</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tiktok.com/@nexvibee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TiktokLogo size={24} className="text-blue-500" />
                    </div>
                    <span className="group-hover:text-blue-500 transition-colors duration-300">@nexvibee</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/@nexvibee-5183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                     <YoutubeLogo size={24} className="text-blue-500" />
                    </div>
                    <span className="group-hover:text-blue-500 transition-colors duration-300">@nexvibee</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-12 border-gray-200 sm:mx-auto lg:my-16" />
        
        {/* Copyright */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-600 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-blue-500 transition-colors duration-300">
              NexVibe™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-8 sm:justify-center sm:mt-0">
            <Link
              href="https://www.instagram.com/nexvibee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <InstagramLogo size={24} />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@nexvibee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <TiktokLogo size={24} />
              <span className="sr-only">TikTok page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
