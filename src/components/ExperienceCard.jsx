import { motion } from "framer-motion";

export default function ExperienceCard({ title, period, description }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-xl border border-gray-200
                 bg-gray-100/80 dark:bg-gray-700/50
                 p-6 shadow-lg backdrop-blur-sm
                 hover:shadow-xl transition"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{period}</p>
      <p className="mt-3 text-gray-700 dark:text-gray-300">{description}</p>
    </motion.article>
  );
}
