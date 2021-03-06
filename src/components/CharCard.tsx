import { useSelector } from "react-redux";
import { State } from "../interfaces/State";

export const CharCard = () => {

  const chars = useSelector((state: State) => state.chars);
  const show = useSelector((state: State) => state.show);

  const applyStyle = (image: string) => {
    const style: React.CSSProperties = {
      backgroundImage: `url(${image})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      height: "300px"
    }
    return style;
  }

  return (
    <div className="chars-card">
      <div className="card" style={applyStyle(chars[show].image)}>
        <div className="char-name"> {chars[show].name}</div>
        <div className="char-property"> <strong> Status : </strong> {chars[show].status} </div>
        <div className="char-property"> <strong> Specie : </strong> {chars[show].specie} </div>
        {chars[show].type !== "" &&
          <div className="char-property"> <strong> Type : </strong> {chars[show].type} </div>}
        <div className="char-property"> <strong> Gender : </strong> {chars[show].gender} </div>
      </div>
    </div>
  )
}