// @refresh reset
import { useState } from "react";
const Recipes = () => {
    const mar = {
        cap: 'roggers',
        spider: 'peter',
        wolverine: 'logan'
    };
    
    const allHeros = {
        ...mar,
        batman: 'bruce',
        wonderWoman: 'diana',
        superMand: 'kent'
    };
    
    const [allHeross, setAllHeros] = useState({})
  console.log("allHeros", allHeros);
//   console.log([1,2,3,4].includes(1))

  return (
    <div>as
      recipes!!
      <ul>
      <button type="button" onClick={()=> setAllHeros(mar)} >Marvel</button>
      <button type="button" onClick={()=> setAllHeros(allHeros)} > All Heros</button>
        {Object.keys(allHeross).map((hero, heroIndex) => {
          return (
            <li key={`hero-${heroIndex}`}>
              {hero} : {allHeros[hero]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recipes;
