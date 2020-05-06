import React, { useState, useEffect } from "react";
import style from "./Filter.module.css";

const filterList = [
  {
    id: "AllCategories",
    label: "All Categories",
    isChecked: true,
  },
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

const Filter = ({ setSelectedCategory }) => {
  const [filterListState, setFilterListState] = useState(filterList);

  const handleCategoryChange = ({ id: checkedID }) => {
    let updatedCategory = [];

    updatedCategory = filterListState.map(({ id, isChecked, ...rest }) => {
      let category = { ...rest, id, isChecked };
      if (checkedID !== "AllCategories" && id === "AllCategories") {
        category = { ...category, isChecked: false };
      }
      if (id === checkedID) {
        category = { ...category, isChecked: !isChecked };
      }
      return category;
    });

    if (checkedID === "AllCategories") {
      const { isChecked } = updatedCategory.find(
        ({ id }) => id === "AllCategories"
      );
      updatedCategory = checkAll(isChecked);
    }
    setFilterListState(updatedCategory);
  };

  const checkAll = (isChecked) => {
    return filterListState.map((category) => ({
      ...category,
      isChecked,
    }));
  };

  useEffect(() => {
    handleUpdate();
  }, [filterListState]);

  const handleUpdate = () => {
    const idArray = filterListState.reduce((accumulator, currentValue) => {
      return currentValue.isChecked
        ? [...accumulator, currentValue.id]
        : accumulator;
    }, []);

    console.log(idArray);
    setSelectedCategory(idArray);
  };

  return (
    <div className={style.filterStyle}>
      {filterListState.map((data) => (
        <div>
          <input
            onChange={(event) => {
              handleCategoryChange(event.target);
            }}
            type="checkbox"
            id={data.id}
            checked={data.isChecked}
          ></input>{" "}
          <label for={data.id}>{data.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
