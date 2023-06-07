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
      const randomIndex = Math.floor(Math.random() * 5);
      setMoleIndex(randomIndex);
      setTimer((timer) => timer - 1);
    }, 1000);

    //to clear the interval.

    return () => {
      clearInterval(getRandomAvocado);
    };
  }, [images.length]);

  //moleIndex
  const handleMole = (index) => {
    if (index === moleIndex) {
      if (images[moleIndex].value === 1) {
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
  if (timer === 0) {
    alert(`Game Over your score: ${score}`);
  }
  const restart = () => {
    setScore(0);
    setTimer(50);
    setMoleIndex("");
  };
  //   const sound = () => {
  //     new Audio(sound).sound();
  //   };

  return (
    <div className="flex flex-col  ">
      <div className="mt-4">
        <div className="flex flex-row justify-center justify-items-center space-x-4">
          <p className="font-bold w-[150px] text-center order-solid border-2 border-lime-600 rounded shadow-md">
            Score: {score}
          </p>
          <p className="font-bold w-[150px] text-center order-solid border-2 border-lime-600 rounded shadow-md">
            Timer: {timer}
          </p>
        </div>
        <div className="flex flex-row justify-center justify-items-center mt-4">
          <botton
            onClick={restart}
            className="font-bold w-[150px] text-center order-solid border-2 border-lime-600 rounded shadow-md"
          >
            Restart
          </botton>
        </div>
      </div>

      <div className="">
        <div className="flex flex-wrap md:flex-wrap justify-center justify-items-center mt-8 border-2 border-green-900 shadow-md">
          {[...Array(5)].map((_, index) => {
            // const randomIndex = getRandomAvocado();

            return (
              <div
                key={index}
                //   className="circule"
                className="rounded-full w-[120px] h-[120px] bg-black m-[20px]"
                onClick={() => handleMole(index)}
              >
                {index === moleIndex && (
                  <img src={images[moleIndex].img} alt="" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Circles;
