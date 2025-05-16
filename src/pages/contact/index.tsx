import { useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Envelope,
  Phone,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  Link,
  YoutubeLogo,
} from "@phosphor-icons/react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggeredFadeIn from "@/components/animations/StaggeredFadeIn";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Nexvibe - Kontak</title>
      </Head>
      <main className="mt-12 bg-gradient-to-b from-gray-200 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <FadeInOnScroll>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Hubungi Kami
                </span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Kami siap membantu Anda mewujudkan solusi digital yang inovatif
                dan transformatif untuk bisnis Anda
              </p>
            </div>
          </FadeInOnScroll>
        </section>

        {/* Contact Information & Form Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <StaggeredFadeIn direction="left">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-semibold mb-6 relative">
                    Informasi Kontak
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></div>
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Alamat Kantor
                        </h3>
                        <p className="text-gray-600 mt-1">
                          Jalan Ceuri Jalan Terusan Kopo No.KM 13.5, Katapang,
                          Kec. Katapang, Kabupaten Bandung, Jawa Barat 40971
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Envelope size={24} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600 mt-1">
                          dreamteam5183@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={24} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Telepon</h3>
                        <p className="text-gray-600 mt-1">+62 852-1507-3092</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-8">
                    <h3 className="font-medium text-gray-900 mb-4">
                      Ikuti Kami
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com/nexvibee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        <InstagramLogo size={24} className="text-blue-500" />
                      </a>
                      <a
                        href="https://tiktok.com/@nexvibee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        <TiktokLogo size={24} className="text-blue-500" />
                      </a>
                      <a
                        href="https://www.youtube.com/@nexvibee-5183"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        <YoutubeLogo size={24} className="text-blue-500" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-semibold mb-6 relative">
                    Lokasi Kami
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></div>
                  </h2>
                  <div className="aspect-video w-full rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.003756957643!2d107.54500637318047!3d-7.008839468648255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ee9f1c88006d%3A0xbadb406ee9e678ba!2sSMKN%201%20Katapang!5e0!3m2!1sid!2sid!4v1747142648697!5m2!1sid!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </StaggeredFadeIn>

            {/* Contact Form */}
            <FadeInOnScroll direction="right">
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-semibold mb-6 relative">
                    Kirim Pesan
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></div>
                  </h2>
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
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <FadeInOnScroll>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Siap untuk memulai proyek Anda bersama NexVibe?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Mari kita diskusikan bagaimana kami dapat membantu mewujudkan
                visi digital Anda
              </p>
              <a
                href="https://wa.me/6285215073092?text=Halo,%20saya%20tertarik%20untuk%20memulai%20proyek%20bersama%20NexVibe."
                target="_blank"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ajukan Proyek
              </a>
            </div>
          </FadeInOnScroll>
        </section>
      </main>
    </>
  );
};

export default Contact;
