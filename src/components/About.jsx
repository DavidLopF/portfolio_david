import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="bg-gray-50 dark:bg-gray-800 py-24 border-y border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-5xl mx-auto px-4 md:flex md:items-center md:gap-12">
        {/* Imagen rectangular */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-10 md:mb-0 md:mx-0"
        >
          <motion.img
            whileHover={{ scale: 1.03, y: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            src="/images/profile.jpg" /* tu imagen */
            alt="Foto de David López"
            className="w-70 md:w-78 lg:w-90 h-auto        /* ⬅️ más ancho */
             rounded-lg object-cover object-center
             shadow-xl ring-4 ring-blue-600/40 dark:ring-blue-500/40"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Sobre mí
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Desarrollador Fullstack con más de 3 años de experiencia en backend
            con Spring Boot y Node.js (NestJS / Express) y frontend con Angular.
            Experto en bases de datos SQL &amp; NoSQL (PostgreSQL, PL/SQL,
            MongoDB, Redis), pruebas de carga con JMeter, accesibilidad con
            Selenium y metodologías ágiles como Scrum y SAFe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
