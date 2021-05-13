import { useState } from "react"
import { useDispatch } from "react-redux";
import { setFilter } from "../actions";

export const Filters = () => {

  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  });

  const dispatch = useDispatch();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  }

  const sendFilter = () => {
    dispatch(setFilter(filters));
  }

  return (
    <div className="filters">
      <input type="text" name="name" placeholder="Name" value={filters.name} onChange={(e) => change(e)}/>
      <input type="text" name="status" placeholder="Status" value={filters.status} onChange={(e) => change(e)}/>
      <input type="text" name="species" placeholder="Species" value={filters.species} onChange={(e) => change(e)}/>
      <input type="text" name="type" placeholder="Type" value={filters.type} onChange={(e) => change(e)}/>
      <input type="text" name="gender" placeholder="Gender" value={filters.gender} onChange={(e) => change(e)}/>
      <button onClick={sendFilter}>Filter</button>
    </div>
  )
}