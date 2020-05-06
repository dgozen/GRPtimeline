import React, { useState, useEffect } from "react";
import style from "./Filter.module.css";

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  const [allChecked, setAllChecked] = useState(true);
  // filter through input boxes, return ID's if selectedCategory is true

  const filterList = [
    {
      id: "Publication",
      label: "Publication",
      isChecked: true,
    },
    {
      id: "Trend",
      label: "Trend",
      isChecked: true,
    },
    {
      id: "Event",
      label: "Event",
      isChecked: true,
    },

    {
      id: "Program",
      label: "Program, platform or investment initiative",
      isChecked: true,
    },

    {
      id: "Framework",
      label: "Framework: conceptual, evaluative, operational",
      isChecked: true,
    },
  ];
  const [filterListState, setFilterListState] = useState(filterList);

  // const updateRenderList = () => {};

  const handleCategoryChange = (checked, categoryName) => {
    setFilterListState((prevState) => {
      let filterListState = prevState;

      if (categoryName === "AllCategories") {
        setAllChecked((prevState) => (prevState = !prevState));
        filterListState = filterListState.map((category) => ({
          ...category,
          isChecked: checked,
        }));
      } else {
        filterListState = filterListState.map((category) =>
          category.id === categoryName
            ? { ...category, isChecked: checked }
            : category
        );
        setAllChecked(filterListState.every((category) => category.isChecked));
      }
      return filterListState;
    });
  };

  return (
    <div className={style.filterStyle}>
      <div>
        <input
          onChange={(event) => {
            let checked = event.target.checked;
            let category = event.target.id;

            handleCategoryChange(checked, event.target.id);
          }}
          type="checkbox"
          id="AllCategories"
          checked={allChecked}
        />
        <label for="AllCategories">All Categories</label>
      </div>
      {filterListState.map((data) =>
        data.id ? (
          <div>
            <input
              onChange={(event) => {
                let checked = event.target.checked;
                let category = event.target.id;

                handleCategoryChange(checked, category);
              }}
              type="checkbox"
              id={data.id}
              checked={data.isChecked}
            ></input>{" "}
            <label for={data.id}>{data.label}</label>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Filter;
