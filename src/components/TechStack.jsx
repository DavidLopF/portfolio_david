import { motion } from "framer-motion";

const stack = [
    { name: "Spring Boot / Java", logo: "/icons/java.svg", level: 90 },
    { name: "Node.js",            logo: "/icons/node.png", level: 90 },
    { name: "NestJS",             logo: "/icons/nest.png", level: 80 },
    { name: "Angular",            logo: "/icons/angular.png", level: 80 },
    { name: "React",              logo: "/icons/react.png", level: 75 },
    { name: "PostgreSQL",         logo: "/icons/postgres.png", level: 85 },
    { name: "MongoDB",            logo: "/icons/mongo.svg", level: 80 },
    { name: "AWS",                logo: "/icons/aws.png", level: 70 },
  ];
  

export default function TechStack() {
  return (
    <section
      id="stack"
      className="bg-gray-50 dark:bg-gray-800 py-24 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Tech&nbsp;Stack
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map(({ name, logo, level }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-lg bg-gray-900/70 dark:bg-gray-900/70
                         p-6 shadow border border-gray-700"
            >
              <div className="flex items-center gap-4">
                <img src={logo} alt={name} className="h-10 w-10 object-contain" />
                <span className="font-semibold text-white">{name}</span>
              </div>

              <div className="mt-4">
                {/* barra de fondo */}
                <div className="h-3 w-full rounded bg-gray-600 overflow-hidden">
                  {/* barra animada */}
                  <motion.div
                    className="h-full rounded bg-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
                <p className="mt-1 text-sm text-right text-gray-400">{level}%</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
