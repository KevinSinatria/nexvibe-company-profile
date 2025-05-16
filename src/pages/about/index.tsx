import { useEffect } from "react";
import Image from "next/image";
import {
  Users,
  Rocket,
  Gear,
  Leaf,
  ProjectorScreen,
  Code,
} from "@phosphor-icons/react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggeredFadeIn from "@/components/animations/StaggeredFadeIn";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Nexvibe - Tentang Kami</title>
      </Head>
      <main className="mt-12">
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-gradient-to-b from-blue-50 to-white py-20 scroll-mt-20"
        >
          <div className="container mx-auto px-4">
            <FadeInOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl py-2 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Tentang NexVibe
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Kami adalah perusahaan teknologi yang berdedikasi untuk
                  menciptakan solusi digital inovatif yang membantu bisnis
                  berkembang di era digital.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Company Section */}
        <section id="company" className="py-20 scroll-mt-12">
          <div className="container mx-auto px-4">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold text-center mb-12 relative">
                Company
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>
              </h2>
            </FadeInOnScroll>

            {/* Siapa Kami */}
            <div
              id="who-we-are"
              className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-mt-12"
            >
              <StaggeredFadeIn direction="left">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Users size={32} className="text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-semibold">Siapa Kami</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    NexVibe adalah perusahaan teknologi yang didirikan dengan
                    visi untuk menjadi pionir dalam transformasi digital di
                    Indonesia. Kami berkomitmen untuk memberikan solusi
                    teknologi yang inovatif dan berkelanjutan.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <h4 className="font-semibold mb-2 text-blue-600">Visi</h4>
                      <p className="text-gray-600">
                        Menjadi perusahaan teknologi terdepan yang mendorong
                        inovasi digital dan memberdayakan bisnis di Indonesia.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <h4 className="font-semibold mb-2 text-blue-600">Misi</h4>
                      <p className="text-gray-600">
                        Memberikan solusi teknologi yang inovatif,
                        berkelanjutan, dan berdampak positif bagi masyarakat.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggeredFadeIn>
              <FadeInOnScroll direction="right">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src="/nexvibe_team.jpg"
                    alt="NexVibe Team"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeInOnScroll>
            </div>

            {/* Apa yang Kami Lakukan */}
            <div
              id="what-we-do"
              className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-mt-12"
            >
              <FadeInOnScroll direction="left">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow order-2 md:order-1">
                  <Image
                    src="/undraw_team-collaboration_phnf.svg"
                    alt="Our Services"
                    fill
                    className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeInOnScroll>
              <StaggeredFadeIn direction="right">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Rocket size={32} className="text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      Apa yang Kami Lakukan
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Kami menyediakan berbagai layanan teknologi yang
                    komprehensif untuk membantu bisnis Anda berkembang:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white">•</span>
                      </div>
                      <p className="text-gray-600">
                        Pengembangan Website & Aplikasi Mobile
                      </p>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white">•</span>
                      </div>
                      <p className="text-gray-600">Solusi Cloud & DevOps</p>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white">•</span>
                      </div>
                      <p className="text-gray-600">Konsultasi Teknologi</p>
                    </li>
                  </ul>
                </div>
              </StaggeredFadeIn>
            </div>

            {/* Bagaimana Kami Beroperasi */}
            <div
              id="how-we-operate"
              className="grid md:grid-cols-2 gap-12 items-center scroll-mt-12"
            >
              <StaggeredFadeIn direction="left">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Gear size={32} className="text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      Bagaimana Kami Beroperasi
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Kami mengikuti metodologi yang terstruktur dan efisien dalam
                    setiap proyek:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-blue-600">
                          Analisis Kebutuhan
                        </h4>
                        <p className="text-gray-600">
                          Memahami kebutuhan dan tujuan bisnis klien secara
                          mendalam
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-blue-600">
                          Perencanaan & Desain
                        </h4>
                        <p className="text-gray-600">
                          Membuat rencana dan desain solusi yang sesuai
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-blue-600">
                          Pengembangan & Testing
                        </h4>
                        <p className="text-gray-600">
                          Mengembangkan dan menguji solusi secara menyeluruh
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-blue-600">
                          Implementasi & Dukungan
                        </h4>
                        <p className="text-gray-600">
                          Mengimplementasikan solusi dan memberikan dukungan
                          berkelanjutan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggeredFadeIn>
              <FadeInOnScroll direction="right">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src="/undraw_founding-team_8uhm.svg"
                    alt="Our Process"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="container mx-auto px-4">
            <FadeInOnScroll>
              <h2
                id="impact"
                className="text-3xl font-bold text-center mb-12 relative scroll-mt-12"
              >
                Impact
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>
              </h2>
            </FadeInOnScroll>

            {/* Keberlanjutan */}
            <div
              id="sustainability"
              className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-mt-12"
            >
              <StaggeredFadeIn direction="left">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Leaf size={32} className="text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-semibold">Keberlanjutan</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Kami berkomitmen untuk menciptakan dampak positif terhadap
                    lingkungan dan masyarakat:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white">•</span>
                      </div>
                      <p className="text-gray-600">
                        Menggunakan teknologi ramah lingkungan dalam operasional
                      </p>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white">•</span>
                      </div>
                      <p className="text-gray-600">
                        Program pelatihan teknologi untuk komunitas lokal
                      </p>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white">•</span>
                      </div>
                      <p className="text-gray-600">
                        Inisiatif pengurangan jejak karbon digital
                      </p>
                    </li>
                  </ul>
                </div>
              </StaggeredFadeIn>
              <FadeInOnScroll direction="right">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src="/undraw_eco-conscious_oqny.svg"
                    alt="Sustainability"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeInOnScroll>
            </div>

            {/* Proyek Berdampak */}
            <div
              id="impact-projects"
              className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-mt-12"
            >
              <FadeInOnScroll direction="left">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow order-2 md:order-1">
                  <Image
                    src="/undraw_growth-analytics_bhy7.svg"
                    alt="Impact Projects"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeInOnScroll>
              <StaggeredFadeIn direction="right">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <ProjectorScreen size={32} className="text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-semibold">Proyek Berdampak</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Beberapa proyek yang telah memberikan dampak signifikan:
                  </p>
                  <div className="space-y-6">
                    <div className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <h4 className="font-semibold mb-2 text-blue-600">
                        NeuroFin
                      </h4>
                      <p className="text-gray-600">
                        Aplikasi pengelolaan keuangan dengan fitur analisis data
                        dan pengelolaan keuangan.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <h4 className="font-semibold mb-2 text-blue-600">
                        Dziqqir
                      </h4>
                      <p className="text-gray-600">
                        Membantu 100+ UMKM dalam transformasi digital dan
                        peningkatan penjualan online.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <h4 className="font-semibold mb-2 text-blue-600">
                        Platform Pendidikan
                      </h4>
                      <p className="text-gray-600">
                        Menyediakan akses pendidikan digital untuk 1000+ siswa
                        di daerah terpencil.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggeredFadeIn>
            </div>

            {/* Pengembangan Sistem */}
            <div
              id="system-development"
              className="grid md:grid-cols-2 gap-12 items-center scroll-mt-12"
            >
              <StaggeredFadeIn direction="left">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Code size={32} className="text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      Pengembangan Sistem
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Kami terus berinovasi dalam pengembangan sistem dan
                    teknologi:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white">•</span>
                      </div>
                      <p className="text-gray-600">
                        Implementasi teknologi AI dan Machine Learning
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white">•</span>
                      </div>
                      <p className="text-gray-600">
                        Pengembangan sistem keamanan siber yang canggih
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white">•</span>
                      </div>
                      <p className="text-gray-600">
                        Optimasi performa dan skalabilitas sistem
                      </p>
                    </div>
                  </div>
                </div>
              </StaggeredFadeIn>
              <FadeInOnScroll direction="right">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src="/undraw_code-typing_laf4.svg"
                    alt="System Development"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
