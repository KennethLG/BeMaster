import { useState } from "react";
import Logo from "../images/logotipo.png";
import Logo2 from "../images/logotipo2.png";

export const Bar = () => {
  const [inputFilter, setInputFilter] = useState("");

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFilter(e.target.value);
  }

  return(
    <div className="Bar">
      <img className="Bar-bemaster" src={Logo}/>
      <img className="Bar-title" src={Logo2}/>
      <input type="text" placeholder="Filter" value={inputFilter} onChange={(e) => updateInput(e)}/>
      <button></button>
    </div>
  )
}