import React from "react";
import { opportunitiesData } from "../../utils/data";
import css from "./Opportunities.module.scss"
import { motion } from 'framer-motion'
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
const Work = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="work"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">Oppurtunities</span>

        <div className={`flexCenter ${css.experiences}`}>
          {opportunitiesData.map((exp, i) => {
            return (
                <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                  <div className={css.post}>
                    <h1>{exp.place}</h1>
                    <p>{exp.tenure}</p>
                  </div>
                  <div className={css.role}>
                    <h1>{exp.role}</h1>
                    <p>{exp.detail}</p>
                  </div>


                </motion.div>
            );
          })}




        </div>
      </div>
    </motion.section>
  );
};

export default Work;
