import {
  AddressBookTabs,
  Briefcase,
  CaretDown,
  FolderOpen,
  Headset,
  House,
  InstagramLogo,
  List,
  TiktokLogo,
  Users,
  X,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isAnyDropdownOpen = isDropdownOpen !== null;
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isAnyDropdownOpen && (
        <div className="fixed inset-0 z-30 backdrop-blur-sm bg-black/10 transition-opacity duration-300"></div>
      )}

      <header
        className={`shadow-[0_4px_30px_rgba(255,255,255,1.0)] fixed w-full top-0 z-50 h-12 transition-all ${
          isAnyDropdownOpen
            ? "bg-white"
            : "bg-white/50 border-b border-gray-300 backdrop-blur-xl"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-10 h-full flex justify-between items-center">
          <h1>
            <Link href="/">
              <Image
                src="/nexvibe_logo_light.png"
                alt="logo"
                width={120}
                height={120}
              />
            </Link>
          </h1>
          <button
            className="md:hidden flex items-center justify-center"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center h-full gap-4">
            <Link
              href="/"
              className={`py-3 px-4 hover:bg-gray-100/80 transition-all flex items-center h-full gap-2 ${
                pathname === "/" ? "text-blue-500 font-semibold" : ""
              }`}
            >
              <House size={24} />
              <span>Beranda</span>
            </Link>
            <div
              onMouseEnter={() => setIsDropdownOpen("about")}
              onMouseLeave={() => setIsDropdownOpen(null)}
            >
              <button
                className={`py-3 px-4 flex items-center h-full gap-2 ${
                  isDropdownOpen === "about" ? "text-blue-500" : ""
                } ${pathname === "/about" ? "text-blue-500 font-semibold" : ""}`}
                onClick={() => {
                  router.push("/about#hero");
                  setIsDropdownOpen(null);
                }}
              >
                <Users size={24} />
                <span className="whitespace-nowrap">Tentang Kami</span>
                <CaretDown
                  size={16}
                  className={`transition-all duration-300 ${
                    isDropdownOpen === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 top-full w-screen bg-white shadow-lg py-8 border-t z-40 transition-all duration-300 ease-out transform
                            ${
                              isDropdownOpen === "about"
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-4 pointer-events-none"
                            }
                          `}
              >
                <div className="container mx-auto px-10">
                  <div className="grid grid-cols-3 divide-gray-200 divide-x gap-8">
                    <div className="px-4">
                      <div
                        className="flex items-center gap-2 mb-4 cursor-pointer"
                        onClick={() => {
                          router.push("/about#company");
                          setIsDropdownOpen(null);
                        }}
                      >
                        <Image
                          src="/company_icon.png"
                          alt="company icon"
                          width={24}
                          height={24}
                        />
                        <h3 className="font-semibold uppercase">Company</h3>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Link
                          href="/about#who-we-are"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(null);
                          }}
                        >
                          Siapa Kami
                        </Link>
                        <Link
                          href="/about#what-we-do"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(null);
                          }}
                        >
                          Apa yang Kami Lakukan
                        </Link>
                        <Link
                          href="/about#how-we-operate"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(null);
                          }}
                        >
                          Bagaimana Kami Beroperasi
                        </Link>
                      </div>
                    </div>

                    <div className="px-4">
                      <div
                        className="flex items-center gap-2 mb-4 cursor-pointer"
                        onClick={() => {
                          router.push("/about#impact");
                          setIsDropdownOpen(null);
                        }}
                      >
                        <Image
                          src="/impact_icon.png"
                          alt="services icon"
                          width={24}
                          height={24}
                        />
                        <h3 className="font-semibold uppercase">Impact</h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link
                          href="/about#sustainability"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(null);
                          }}
                        >
                          Keberlanjutan
                        </Link>
                        <Link
                          href="/about#impact-projects"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(null);
                          }}
                        >
                          Proyek Berdampak
                        </Link>
                        <Link
                          href="/about#system-development"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(null);
                          }}
                        >
                          Pengembangan Sistem
                        </Link>
                      </div>
                    </div>

                    <div className="px-4">
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="font-semibold text-gray-400">
                          Follow Us
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link
                          href="https://www.instagram.com/nexvibee/"
                          className="text-gray-600 flex gap-3 items-center hover:bg-gray-100 px-4 py-2 rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(null);
                          }}
                        >
                          <InstagramLogo size={24} /> <span>Instagram</span>
                        </Link>
                        <Link
                          href="https://www.tiktok.com/@nexvibee"
                          className="text-gray-600 flex gap-3 items-center hover:bg-gray-100 px-4 py-2 rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(null);
                          }}
                        >
                          <TiktokLogo size={24} /> <span>Tiktok</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div
              onMouseEnter={() => setIsDropdownOpen("services")}
              onMouseLeave={() => setIsDropdownOpen(null)}
            >
              <button
                className={`py-3 px-4 flex items-center h-full gap-2 ${
                  isDropdownOpen === "services" ? "text-blue-500" : ""
                }`}
              >
                <Headset size={24} />
                <span>Layanan</span>
                <CaretDown
                  size={16}
                  className={`transition-all duration-300 ${
                    isDropdownOpen === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 top-full w-screen bg-white shadow-lg py-8 border-t z-40 transition-all duration-300 ease-out transform
                            ${
                              isDropdownOpen === "services"
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-4 pointer-events-none"
                            }
                          `}
              >
                <div className="container mx-auto px-10">
                  <div className="grid grid-cols-3 divide-gray-200 divide-x gap-8">
                    <div className="px-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Image
                          src="/company_icon.png"
                          alt="company icon"
                          width={24}
                          height={24}
                        />
                        <h3 className="font-semibold uppercase">Company</h3>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Link
                          href="/about"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                        >
                          Siapa Kami
                        </Link>
                        <Link
                          href="/about"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                        >
                          Apa yang Kami Lakukan
                        </Link>
                        <Link
                          href="/about"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                        >
                          Bagaimana Kami Beroperasi
                        </Link>
                      </div>
                    </div>

                    <div className="px-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Image
                          src="/impact_icon.png"
                          alt="services icon"
                          width={24}
                          height={24}
                        />
                        <h3 className="font-semibold uppercase">Impact</h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link
                          href="/services"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                        >
                          Keberlanjutan
                        </Link>
                        <Link
                          href="/services"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                        >
                          Proyek Berdampak
                        </Link>
                        <Link
                          href="/services"
                          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                        >
                          Pengembangan Sistem
                        </Link>
                      </div>
                    </div>

                    <div className="px-4">
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="font-semibold text-gray-400">
                          Follow Us
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link
                          href="/portfolio"
                          className="text-gray-600 flex gap-3 items-center hover:bg-gray-100 px-4 py-2 rounded-md"
                        >
                          <InstagramLogo size={24} /> <span>Instagram</span>
                        </Link>
                        <Link
                          href="/portfolio"
                          className="text-gray-600 flex gap-3 items-center hover:bg-gray-100 px-4 py-2 rounded-md"
                        >
                          <TiktokLogo size={24} /> <span>Tiktok</span>
                        </Link>
                        <Link
                          href="/portfolio"
                          className="text-gray-600 flex gap-3 items-center hover:bg-gray-100 px-4 py-2 rounded-md"
                        >
                          <YoutubeLogo size={24} /> <span>Youtube</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <Link
              href="/portfolio"
              className={`py-3 px-4 hover:bg-gray-100 transition-all flex items-center h-full gap-2 ${
                pathname === "/portfolio" ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => {
                setIsDropdownOpen(null);
              }}
            >
              <Briefcase size={24} />
              <span>Portofolio</span>
            </Link>
            <Link
              href="/contact"
              className={`py-3 px-4 hover:bg-gray-100 transition-all flex items-center h-full gap-2 ${
                pathname === "/contact" ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => {
                setIsDropdownOpen(null);
              }}
            >
              <AddressBookTabs size={24} />
              <span>Kontak</span>
            </Link>
          </nav>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex flex-col" : "hidden"
          } md:hidden fixed top-12 left-0 w-full bg-white shadow-lg py-6 px-4 gap-4 z-40`}
        >
          <Link
            href="/"
            className={`flex items-center gap-2 py-3 px-4 rounded-md ${
              pathname === "/" ? "text-blue-500 font-semibold" : "text-gray-600"
            } hover:bg-gray-100`}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <House size={24} />
            <span>Beranda</span>
          </Link>

          <div className="w-full">
            <button
              onClick={() =>
                setIsDropdownOpen(isDropdownOpen === "about" ? null : "about")
              }
              className={`w-full flex items-center justify-between py-3 px-4 rounded-md ${
                isDropdownOpen === "about" ? "text-blue-500" : "text-gray-600"
              } hover:bg-gray-100`}
            >
              <div className="flex items-center gap-2">
                <Users size={24} />
                <span>Tentang Kami</span>
              </div>
              <CaretDown
                size={16}
                className={`transition-transform duration-300 ${
                  isDropdownOpen === "about" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`${
                isDropdownOpen === "about" ? "max-h-[500px]" : "max-h-0"
              } overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <div className="py-2 px-4 space-y-2">
                <div className="border-b pb-4">
                  <div
                    className="flex items-center gap-2 mb-2"
                    onClick={() => {
                      router.push("/about#company");
                      setIsMenuOpen(false);
                      setIsDropdownOpen(null);
                    }}
                  >
                    <Image
                      src="/company_icon.png"
                      alt="company icon"
                      width={24}
                      height={24}
                    />
                    <h3 className="font-semibold uppercase">Company</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/about#who-we-are"
                      className="text-gray-600 py-2 px-4 hover:bg-gray-100 rounded-md"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(null);
                      }}
                    >
                      Siapa Kami
                    </Link>
                    <Link
                      href="/about#what-we-do"
                      className="text-gray-600 py-2 px-4 hover:bg-gray-100 rounded-md"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(null);
                      }}
                    >
                      Apa yang Kami Lakukan
                    </Link>
                    <Link
                      href="/about#how-we-operate"
                      className="text-gray-600 py-2 px-4 hover:bg-gray-100 rounded-md"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(null);
                      }}
                    >
                      Bagaimana Kami Beroperasi
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-400 mb-2">
                    Follow Us
                  </h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/portfolio"
                      className="text-gray-600 flex gap-3 items-center hover:bg-gray-100 px-4 py-2 rounded-md"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(null);
                      }}
                    >
                      <InstagramLogo size={24} /> <span>Instagram</span>
                    </Link>
                    <Link
                      href="/portfolio"
                      className="text-gray-600 flex gap-3 items-center hover:bg-gray-100 px-4 py-2 rounded-md"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(null);
                      }}
                    >
                      <TiktokLogo size={24} /> <span>Tiktok</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className={`flex items-center gap-2 py-3 px-4 rounded-md text-gray-600 hover:bg-gray-100 ${
              pathname === "/portfolio" ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => {
              setIsMenuOpen(false);
              setIsDropdownOpen(null);
            }}
          >
            <Briefcase size={24} />
            <span>Portofolio</span>
          </Link>
          <Link
            href="/contact"
            className={`flex items-center gap-2 py-3 px-4 rounded-md text-gray-600 hover:bg-gray-100 ${
              pathname === "/contact" ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => {
              setIsMenuOpen(false);
              setIsDropdownOpen(null);
            }}
          >
            <AddressBookTabs size={24} />
            <span>Kontak</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
