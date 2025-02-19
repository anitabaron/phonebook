import { useDispatch, useSelector } from "react-redux";
import { setNameFilter, setNumberFilter } from "../redux/filters/filtersSlice";
import { useId, useEffect } from "react";
import { selectFilter } from "../redux/filters/selectors";
import { AppDispatch } from "../redux/store";

const SearchBox = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(selectFilter);
  const searchNameId = useId();
  const searchNumberId = useId();

  const handleFilterNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value.trim();
    dispatch(setNameFilter(query));
  };

  const formatNumber = (number: string) => {
    return `${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
  };

  const handleFilterNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const rawNumber = event.target.value.trim();

    const formattedNumber = /^\d{10}$/.test(rawNumber)
      ? formatNumber(rawNumber)
      : rawNumber;

    dispatch(setNumberFilter(formattedNumber));
  };

  useEffect(() => {
    console.log("Filter updated:", {
      name: filters.name,
      number: filters.number,
    });
  }, [filters]);

  return (
    <>
      <h2>Search:</h2>
      <div className="search-bar-box">
        <div className="search-bar">
          <label htmlFor={searchNameId}>Find contacts by name</label>
          <input
            type="text"
            onChange={handleFilterNameChange}
            value={filters.name}
            id={searchNameId}
            placeholder="Search by name or name..."
          />
        </div>
        <div className="search-bar">
          <label htmlFor={searchNumberId}>Find contacts by number</label>
          <input
            type="text"
            onChange={handleFilterNumberChange}
            value={filters.number}
            id={searchNumberId}
            placeholder="Search by name or number..."
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
