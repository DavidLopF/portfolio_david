import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br
                        from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900
                        dark:via-slate-800 dark:to-slate-900">
      {/* Halo decorativo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
                   from-blue-400/20 via-purple-400/10 to-transparent blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-screen-xl px-4 py-32 text-center lg:py-48"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold
                       tracking-tight leading-tight text-gray-900 dark:text-white">
          Hola, soy <span className="text-blue-600">David</span> 👋
        </h1>

        <p className="mt-6 text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
          <Typewriter
            words={[
              "Full‑stack Developer",
              "Spring Boot · NestJS",
              "Angular · React",
              "AWS · SQL · NoSQL",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#sobre-mi"
            className="px-6 py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800 shadow-md"
          >
            Conóceme
          </a>
          <a
            href="#experiencia"
            className="px-6 py-3 text-blue-700 border border-blue-700
                       rounded-lg hover:bg-blue-50 dark:hover:bg-blue-700/10 shadow-md"
          >
            Mi trayectoria
          </a>
        </div>
      </motion.div>
    </section>
  );
}
