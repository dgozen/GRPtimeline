import React, { useState, useEffect } from "react";
import style from "./Filter.module.css";

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  const filterList = [
    {
      key: 0,
      id: "Publication",
      label: "Publication",
      select: true,
    },
    {
      key: 1,
      id: "Trend",
      label: "Trend",
      select: true,
    },
    {
      key: 2,
      id: "Event",
      label: "Event",
      select: true,
    },

    {
      key: 3,
      id: "Program",
      label: "Program, platform or investment initiative",
      select: true,
    },

    {
      key: 4,
      id: "Framework",
      label: "Framework: conceptual, evaluative, operational",
      select: true,
    },
  ];

  const [isChecked, setIsChecked] = useState(
    filterList.map((d) => {
      return d.select;
    })
  );

  const [isAllChecked, setIsAllChecked] = useState(true);

 

  const toggleChange = (key2) => {
    setIsChecked(
      ...filterList.map((d) => {
        if (key2 === d.key) {
          setIsAllChecked(false);
          return d.select;
        } else {
          return !d.select
        }
      })
    );
  };

  const toggleAllChange = () => {
    setIsAllChecked(!isAllChecked);

    setIsChecked(filterList.map((d) => {
      d.select = !isAllChecked
      // pushToArray();
      
      return d.select;
      
    }));
   
  }


// const pushToArray = () => {
//   filterList.map(d => {
//     const selectedCategoryArray = [...selectedCategory];
//     if (d.select) {
//       selectedCategoryArray.push(d.id);
//     } else if (!d.select) {
//       selectedCategoryArray.splice(selectedCategoryArray.indexOf(d.id), 1);
//     }
//     setSelectedCategory(selectedCategoryArray);
//   })
// }

  // filter through input boxes, return ID's if selectedCategory is true
  const editCategoryArray = (checked, id) => {
    const selectedCategoryArray = [...selectedCategory];
    if (checked) {
      selectedCategoryArray.push(id);
    } else if (!checked) {
      selectedCategoryArray.splice(selectedCategoryArray.indexOf(id), 1);
    }
   

    setSelectedCategory(selectedCategoryArray);
  };

  //needed: function so allcategories check all boxes on click

  return (
    <div className={style.filterStyle}>
      <input
        checked={isAllChecked}
        onChange={() => {
        toggleAllChange();
        
        }}
        id="AllCategories"
        type="checkbox"
      ></input>
      <label for="AllCategories">All Categories</label>

      {filterList.map((data) => (
        <div>
          <input
            checked={isChecked[data.key]}
            onChange={(e) => {
              const checked = e.target.checked;
              editCategoryArray(checked, data.id);
              toggleChange(data.key);
            }}
            type="checkbox"
            id={data.id}
          ></input>{" "}
          <label for={data.id}>{data.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
