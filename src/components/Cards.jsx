import { motion } from 'framer-motion';
import './Cards.css';

export function Cards() {
const places = [
  {
    city: "Mumbai",
    name: "Gateway of India",
    img: "https://media.gettyimages.com/id/522676626/photo/gateway-of-india-is-in-the-heart-of-mumbais-tourist-district-and-is-the-cittys-most-famous.jpg?s=612x612&w=0&k=20&c=tmDQS6so5xDpxCmvjQ_SZIux4N-TxKreIxVbgoTldEc="
  },
  {
    city: "Jaipur",
    name: "Hawa Mahal",
    img: "https://media.gettyimages.com/id/1194867518/photo/indian-man-drives-auto-rickshaw-india.jpg?s=612x612&w=0&k=20&c=Au5U6jKafsFFwRr5keISDFPaFUa3MwQw8dMJDnW5S2c="
  },
  {
    city: "Delhi",
    name: "Red Fort",
    img: "https://media.gettyimages.com/id/1811317869/photo/red-fort-in-old-delhi.jpg?s=612x612&w=0&k=20&c=-zrau3w_Q8T021F9jMcZns7wDlLyzBvDd3Tstr6YmMo="
  },
  {
    city: "Agra",
    name: "Taj Mahal",
    img: "https://media.gettyimages.com/id/623586586/photo/taj-mahal-agra-uttar-pradesh-rajasthan-india-asia.jpg?s=612x612&w=0&k=20&c=8V5A2bx2y4w9qiBx9AA2wUHvH_k0MoKmEtflxZEuI3s="
  },
  {
    city: "Varanasi",
    name: "Dashashwamedh Ghat",
    img: " https://media.gettyimages.com/id/2195858631/photo/hindu-priests-perform-evening-prayers-on-the-banks-of-the-ganges-river-at-dashashwamedh-ghat.jpg?s=612x612&w=0&k=20&c=2uBum1jfaYylHEjHaBVubSYa-iKR-glj9-BmBIIKIWo= "
  },
];


  // to bypass the eslint error 
  motion.create(Cards);

  return (
    <div className="place-container">
      {places.map((place, index) => (
        <motion.div className="place-card" key={index}
          initial={{opacity:0 ,  y : 100 }}
          whileInView={{opacity :1  , y : 0 }}
          viewport={{once: true , amount:0.25}}
          // transition={{duration:1 ,  ease: [0.25, 0.1, 0.25, 1]}}
          transition={{duration :1 , ease : "linear"}}
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
