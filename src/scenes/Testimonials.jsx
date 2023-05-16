import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
        Some of the recommendations that my coworkers gave me
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[500px] h-[400px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl">“ Tadeo Masso ”</p>
          <br />
          <p className="text-center text-s">
          Tuve la oportunidad de trabajar con Micalea en el proyecto final de SoyHenry. Y no hay duda de su capacidad para la resolucion de problemas, habilidades tecnicas y habilidades blandas. 
Con el tiempo y el desarrollo necesario se puede volver un gran pilar de futuros proyectos .
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[500px] h-[400px] flex flex-col justify-end p-16 mt-48 
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl">“ Leonardo Pischetz ”</p>
          <br />
          <p className="text-center text-s">
          Recomiendo plenamente trabajar con Mica! No solo trabajamos juntos en el Proyecto BeatConnect en su conjunto sino que específicamente desarrollamos algunos features entre los dos. La verdad que en esa experiencia me sorprendió su proactividad, su capacidad creativa y la facilidad para resolver problemas técnicos. Super recomendada!!
          </p>
        </motion.div>
      </div>
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-yellow max-w-[500px] h-[380px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl">“ Fabian Pacheco ”</p>
          <br />
          <p className="text-center text-s">
          Una gran compañera y un pilar importante en el desarrollo de BeatConnect, dedicandose horas a aventurarse en la implementacion de nuevas tecnologias para la aplicacion, asi tambien como buscando soluciones y maneras de optimizar la app, sin duda una gran FullStack developer
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red2 max-w-[500px] h-[380px] flex flex-col justify-end p-16 mt-48 
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl">“ Lucas Regner ”</p>
          <br />
          <p className="text-center text-s">
          Compartimos el proyecto de BeatConnect, momento donde descubrí lo buena persona, proactiva y empática que es Mica. Destaco su capacidad de enfrentar los problemas y no parar hasta resolverlos. Fue muy agradable compartir grupo con ella.
          </p>
        </motion.div>

        {/* <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
            
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
