import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { config } from "../config";
import { State } from "../interfaces/State"

export const InfoCard = () => {

  const [episodes, setEpisodes] = useState<any>([]);

  const chars = useSelector((state: State) => state.chars);
  const show = useSelector((state: State) => state.show);

  useEffect(() => {
    let episodesList: any[] = [];
    chars[show].episode.map(async (i: any) => {
      const response = await axios.get(i);
      episodesList.push(response.data);
    });
    setEpisodes(episodesList);
    console.log(episodes);
  }, [chars]);

  return (
    <div className="info-card">
      <div className="card">
        <div className="char-property"> <strong> Origin : </strong> {chars[show].origin.name} </div>
        <div className="char-property"> <strong> Date : </strong> {format(new Date(chars[show].created), "yyyy/dd/mm")} </div>
        <div className="episodes">
          <table>
            <thead className="episodes-head">
              <tr>
                <th>Name</th>
                <th>Air date</th>
              </tr>
            </thead>
            <tbody>
              {
                episodes.length !== 0 && episodes.map((episode: any) =>
                  <tr key={episode.id} className="episode">
                    <td >{episode.name}</td>
                    <td>{episode.air_date}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}