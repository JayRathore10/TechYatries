import { motion } from 'framer-motion';
import './CardsHeading.css';

export function CardsHeading(){
  // just to bypass the eslint error 
  motion.create(CardsHeading);
  return(
    <>
      <motion.h1
        initial={{opacity:0 , x : -100}}
        whileInView={{opacity:1 , x : 0}}
        viewport={{once: true , amount:0.5}}
        transition={{duration:1}}
        className='next-trip-heading'
      >Book Your Next Trip Now!</motion.h1>
    </>
  );
}