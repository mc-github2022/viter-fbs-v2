import React from "react";

const FilterPublishDraft = ({
  filterData,
  setFilterData,
  setIsFilter,
  setPage,
}) => {
  const handleChangefilterData = (e) => {
    setFilterData(e.target.value);
    setIsFilter(false);
    if (e.target.value !== "all") {
      setIsFilter(true);
    }
    setPage(1);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="relative w-28 ">
          <label>Status</label>
          <select
            name="status"
            value={filterData}
            onChange={(e) => handleChangefilterData(e)}
            className="text-xs py-[0px] "
          >
            <option value="all">All</option>
            <option value="1">Published</option>
            <option value="0">Draft</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterPublishDraft;
