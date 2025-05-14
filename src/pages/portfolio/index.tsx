import { useState } from "react";
import Image from "next/image";
import { ArrowRight, GithubLogo, Globe, User } from "@phosphor-icons/react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggeredFadeIn from "@/components/animations/StaggeredFadeIn";

// Tipe data untuk project
type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

// Data project
const projects: Project[] = [
  {
    id: 1,
    title: "NexVibe Website",
    category: "Web Development",
    description:
      "Website perusahaan teknologi dengan desain modern dan responsif",
    image: "/portfolio/nexvibe.jpg",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://nexvibe.vercel.app",
  },
  {
    id: 2,
    title: "NeuroFin",
    category: "Web Development",
    description:
      "Platform keuangan dengan fitur pencatatan transaksi dan analisis data",
    image: "/portfolio/neurofin.jpg",
    tags: ["React", "Node.js", "Vercel"],
    liveUrl: "https://neurofin-beta.vercel.app",
  },
  {
    id: 3,
    title: "Dream Shop",
    category: "Web Development",
    description:
      "Platform untuk mencari barang dengan harga terjangkau dan original",
    image: "/portfolio/dreamshop.jpg",
    tags: ["PHP Native", "MySQL", "InfinityFree"],
    liveUrl: "https://dreamshop.free.nf",
  },
  {
    id: 4,
    title: "Doa Bunda",
    category: "Web Development",
    description:
      "Flatform untuk sebuah perusahaan yang menjual barang-barang fashion",
    image: "/portfolio/doabunda.jpg",
    tags: ["PHP Native", "MySQL", "InfinityFree"],
    liveUrl: "https://doabunda.42web.io/",
  },
  {
    id: 5,
    title: "Dziqqir",
    category: "Web Development",
    description:
      "Flatform qurban dan aqiqah",
    image: "/portfolio/dziqqir.jpg",
    tags: ["PHP Native", "MySQL", "InfinityFree"],
    liveUrl: "https://dziqqir.free.nf/ ",
  },
];

// Kategori yang tersedia
const categories = ["All", "Web Development", "UI/UX"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects berdasarkan kategori
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="mt-12 bg-gradient-to-b from-gray-200 to-white">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-16">
        <FadeInOnScroll>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Hasil Karya Kami
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Kami berkomitmen untuk memberikan solusi digital yang inovatif dan
              transformatif untuk setiap proyek yang kami kerjakan
            </p>
          </div>
        </FadeInOnScroll>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <FadeInOnScroll>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInOnScroll>
      </section>

      {/* Project Grid */}
      <section className="container mx-auto px-4 py-16">
        <StaggeredFadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <GithubLogo size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <Globe size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </StaggeredFadeIn>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-4 py-16">
        <FadeInOnScroll>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <blockquote className="text-xl md:text-2xl font-medium mb-6">
                &quot;NexVibe telah membantu kami mengembangkan platform digital
                yang luar biasa. Tim mereka sangat profesional dan hasil kerjanya
                memuaskan.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                  <User size={48} className="text-black" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Kevin Sinatria Budiman</p>
                  <p className="text-white/80">CEO, Dream Shop</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <FadeInOnScroll>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tertarik bekerja dengan kami?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Mari kita diskusikan bagaimana kami dapat membantu mewujudkan visi
              digital Anda
            </p>
            <a
              href="https://wa.me/6285215073092?text=Halo,%20saya%20tertarik%20untuk%20memulai%20proyek%20bersama%20NexVibe."
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Hubungi Kami
              <ArrowRight size={20} />
            </a>
          </div>
        </FadeInOnScroll>
      </section>
    </main>
  );
};

export default Portfolio;
