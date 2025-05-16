import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Clock,
  FolderOpen,
  Student,
  User,
  Users,
  DeviceMobile,
  Cloud,
  Code,
} from "@phosphor-icons/react";
import TestimoniesMarquee from "@/components/Testimonies";
import { TypeAnimation } from "react-type-animation";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggeredFadeIn from "@/components/animations/StaggeredFadeIn";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Nexvibe - Beranda</title>
      </Head>
      <main className="mt-12 bg-gradient-to-b from-gray-200 to-white">
        <section className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row gap-4 sm:gap-6 md:gap-8 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] items-center">
            <FadeInOnScroll
              direction="left"
              className="text-center md:text-left px-4 sm:px-6 md:px-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 flex flex-col items-center md:items-start text-center">
                <span className="text-gray-500">Hallo, kami adalah </span>
                <TypeAnimation
                  sequence={[
                    "NexVibe",
                    12000,
                    "Tech Partner",
                    4000,
                    "Digital Innovator",
                    4000,
                    "Problem Solver",
                    4000,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={50}
                  repeat={Infinity}
                  cursor={true}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                />
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                Kami adalah perusahaan teknologi yang berfokus pada pengembangan
                solusi digital inovatif untuk membantu bisnis Anda berkembang di
                era digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => router.push("/contact")}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Hubungi Kami
                </button>
                <button
                  onClick={() => router.push("/portfolio")}
                  className="w-full sm:w-auto border-2 border-blue-500 text-blue-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Portfolio
                </button>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll
              direction="right"
              className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] mt-8 md:mt-0"
            >
              <Image
                src="/undraw_web-developer_ggt0.svg"
                alt="Hero Image"
                fill
                className="object-contain rounded-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </FadeInOnScroll>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-center mb-4 relative">
              Layanan Kami
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Kami menyediakan berbagai layanan teknologi informasi yang
              komprehensif untuk memenuhi kebutuhan bisnis Anda
            </p>
          </FadeInOnScroll>

          <StaggeredFadeIn
            className="flex flex-col md:flex-row gap-8"
            staggerDelay={0.2}
          >
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 absolute -translate-y-16 border-2 border-gray-300 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-6">
                <Code size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pembuatan website modern dan responsif sesuai kebutuhan bisnis
                Anda
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Custom Website Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  E-commerce Solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  CMS Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Web Application
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 absolute -translate-y-16 border-2 border-gray-300 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-6">
                <DeviceMobile size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-4">
                Mobile Development
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pengembangan aplikasi mobile untuk Android dan iOS
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Native Android Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Native iOS Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Cross-platform Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Mobile UI/UX Design
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 absolute -translate-y-16 border-2 border-gray-300 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-6">
                <Cloud size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-4">
                Cloud Solutions
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Solusi cloud yang aman dan scalable untuk mengoptimalkan
                infrastruktur IT Anda
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Cloud Migration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Cloud Infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  DevOps Services
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  24/7 Monitoring
                </li>
              </ul>
            </div>
          </StaggeredFadeIn>
        </section>

        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="container mx-auto px-4">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold text-center mb-4 relative">
                Mengapa Memilih Kami?
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
                Kami berkomitmen untuk memberikan solusi terbaik dengan standar
                kualitas tinggi
              </p>
            </FadeInOnScroll>

            <StaggeredFadeIn
              className="flex flex-col justify-center md:flex-row gap-8"
              staggerDelay={0.15}
            >
              <div className="flex-1 text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">6 Bulan+</h3>
                <p className="text-gray-600">Pengalaman di sekolah</p>
              </div>
              <div className="flex-1 text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FolderOpen size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">5+</h3>
                <p className="text-gray-600">Proyek selesai</p>
              </div>
              <div className="flex-1 text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">15+</h3>
                <p className="text-gray-600">Klien puas</p>
              </div>
              <div className="flex-1 text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Student size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2+</h3>
                <p className="text-gray-600">Expert developer</p>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-center mb-4 relative">
              Testimonial Klien
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Apa kata klien tentang layanan kami
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <TestimoniesMarquee />
          </FadeInOnScroll>
        </section>

        <section className="container mx-auto px-4 py-20">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-center mb-4 relative">
              Hubungi Kami
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Kami siap membantu mewujudkan solusi digital untuk bisnis Anda
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <form
                method="POST"
                action="https://formsubmit.co/kevinsinatria8@gmail.com"
                className="space-y-6"
              >
                {/* Hidden Fields for FormSubmit */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Pesan Baru dari Website NexVibe"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://nexvibe.vercel.app/"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Terima kasih telah menghubungi NexVibe! Kami akan segera merespon pesan Anda."
                />

                {/* Nama */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Masukkan email Anda"
                  />
                </div>

                {/* Nomor Telepon */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Masukkan nomor telepon Anda"
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Tuliskan pesan Anda"
                  ></textarea>
                </div>

                {/* Tombol Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </FadeInOnScroll>
        </section>
      </main>
    </>
  );
}
