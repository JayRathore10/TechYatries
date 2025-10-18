import { motion } from 'framer-motion';
import './Cards.css';

export function Cards() {
const places = [
  { city: "Mumbai", name: "Gateway of India", img: "https://picsum.photos/id/1011/300/300" },
  { city: "Jaipur", name: "Hawa Mahal", img: "https://picsum.photos/id/1012/300/300" },
  { city: "Delhi", name: "Red Fort", img: "https://picsum.photos/id/1013/300/300" },
  { city: "Agra", name: "Taj Mahal", img: "https://picsum.photos/id/1014/300/300" },
  { city: "Varanasi", name: "Dashashwamedh Ghat", img: "https://picsum.photos/id/1015/300/300" },
];

  // to bypass the eslint error 
  motion.create(Cards);

  return (
    <div className="place-container">
      {places.map((place, index) => (
        <motion.div className="place-card" key={index}
          initial={{opacity:0 ,  y : 100}}
          whileInView={{opacity :1  , y : 0}}
          viewport={{once: true , amount:0.2}}
          transition={{duration:0.6}}
        >
          <img src={place.img} alt={place.name} className="place-img" />
          <div className="place-info">
            <h2 className="place-city">{place.city}</h2>
            <p className="place-name">{place.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
