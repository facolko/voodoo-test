import React from 'react';

const FilterAuthor = ({ filterName, setFilterName }) => {
  const handlerChangeFilter = (e) => setFilterName(e.target.value);

  return (
    <div className="w-ft m-auto">
      <div className="input-group mb-5">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            🔍
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Filter by author"
          aria-label="Filter by author"
          aria-describedby="basic-addon1"
          value={filterName}
          onChange={handlerChangeFilter}
        />
      </div>
    </div>
  );
};

export default FilterAuthor;
