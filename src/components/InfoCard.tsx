import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { State } from "../interfaces/State"
import { Buttons } from "./Buttons";

export const InfoCard = () => {

  const episodes = useSelector((state: State) => state.charEpisodes);
  const chars = useSelector((state: State) => state.chars);
  const show = useSelector((state: State) => state.show);

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
      <Buttons />
    </div>
  )
}