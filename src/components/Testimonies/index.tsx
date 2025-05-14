import { User } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Testimonial = [
  {
    name: "Azzam Sahal Al Ghiffary",
    company: "Owner, Doa Bunda",
    testimonial:
      "Tim developer yang sangat profesional dan responsif. Hasil kerja mereka melampaui ekspektasi kami.",
  },
  {
    name: "Waqqir Humaid Al-Qais",
    company: "CEO, Dziqqir",
    testimonial:
      "Aplikasi yang dikembangkan sangat membantu efisiensi operasional bisnis kami.",
  },
  {
    name: "Yassir Al-Hakim",
    company: "Owner, Wahyep Store",
    testimonial:
      "Sangat memuaskan dengan hasil kerja yang telah dilakukan oleh tim developer NexVibe.",
  },
];

const TestimoniesMarquee = () => {
  const cards = [
    ...Testimonial,
    ...Testimonial,
    ...Testimonial,
    ...Testimonial,
  ];

  return (
    <div className="overflow-hidden w-full py-10 shadow-lg bg-gray-50 rounded-2xl">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        whileHover={{
          transition: {
            duration: 180,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {cards.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-80 hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <User
                size={50}
                className="border-2 border-gray-200 rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">{item.company}</p>
              </div>
            </div>
            <p className="text-gray-600">&ldquo;{item.testimonial}&rdquo;</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimoniesMarquee;
