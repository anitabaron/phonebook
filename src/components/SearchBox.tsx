import { useDispatch, useSelector } from "react-redux";
import { setNameFilter, setNumberFilter } from "../redux/filters/filtersSlice";
import { useId } from "react";
import { selectFilter } from "../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const searchFieldId = useId();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();

    if (/^\d+$/.test(query)) {
      dispatch(setNumberFilter(query));
      dispatch(setNameFilter(""));
    } else {
      dispatch(setNameFilter(query));
      dispatch(setNumberFilter(""));
    }

    console.log("Filter updated:", {
      name: filter.name,
      number: filter.number,
    });
  };

  return (
    <>
      <h2>Search:</h2>
      <div className="search-bar">
        <label htmlFor={searchFieldId}>Find contacts by name or number</label>
        <input
          type="text"
          onChange={handleFilterChange}
          value={filter.name || filter.number}
          id={searchFieldId}
          placeholder="Search by name or number..."
        />
      </div>
    </>
  );
};

export default SearchBox;
