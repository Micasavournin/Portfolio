import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import beatconnect from "../assets/beatconnect2.png"
import BreedFinder from "../assets/BreedFinder3.png"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Check out some of my recet works
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">BeatConect</p>
        <p className="mt-7">
           Marketplace de compra y venta de beats musicales.
        </p>
        <a href="https://pf-beat-connect.vercel.app/landing"
         target="_blank"
         rel="noreferrer"
         >
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Deploy
          </button>
        </a>
      </div>
      <img src={beatconnect} alt={beatconnect} />
    </motion.div>

    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">BreedFinder</p>
        <p className="mt-7">
          SPA donde podes encontrar todas las razas de perros, filtrarlas, ordenarlas, ver el detalle de cada raza y crear tu propio perro!
        </p>
        <a href="https://client-flame-beta.vercel.app/"
         target="_blank"
         rel="noreferrer"
         >
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Deploy
          </button>
        </a>
      </div>
      <img src={BreedFinder} alt={BreedFinder} />
    </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
