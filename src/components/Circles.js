import React, { useEffect, useState } from "react";
import avocado from "../assest/media/funny.avif";
import avo2 from "../assest/media/angryAvocado.webp";

const Circles = () => {
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState("");
  const [timer, setTimer] = useState(50);
  // to rep. the index of the current mole image

  const images = [
    { img: avocado, value: 1 },
    { img: avo2, value: 0 },
    { img: avocado, value: 1 },
    { img: avo2, value: 0 },
    { img: avocado, value: 1 },
  ];

  useEffect(() => {
    const getRandomAvocado = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setMoleIndex(randomIndex);
      setTimer((timer) => timer - 1);
    }, 1000);

    //to clear the interval.

    return () => {
      clearInterval(getRandomAvocado);
    };
  }, []);

  //moleIndex
  const handleMole = (index) => {
    if (index === moleIndex) {
      if (images[moleIndex].value == 1) {
        setScore((prevScore) => prevScore + 10);
      } else {
        setScore((prevScore) => prevScore - 5);
      }
    } else {
      setScore((prevScore) => prevScore - 100);
    }
    setMoleIndex("");
  };
  // setMoleIndex("");
  if (timer == 0) {
    alert(`Game over your score: ${score}`);
  }
  return (
    <div className="start">
      <p>Score: {score}</p>
      <p>Timer: {timer}</p>
      <div className="circle-container">
        {[...Array(5)].map((_, index) => {
          // const randomIndex = getRandomAvocado();
          return (
            <div
              key={index}
              className="circule"
              onClick={() => handleMole(index)}
            >
              {index === moleIndex && (
                <img src={images[moleIndex].img} alt="Random Image" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Circles;
