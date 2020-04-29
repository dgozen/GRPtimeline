import React, { useState } from "react";
import style from "./Filter.module.css";

const Filter = () => {
  const selectedCategoryArray = () => {
    // filter through input boxes, return ID's if selectedCategory is true
  };

  const filterList = [{ type: checkbox }, {}];

  //needed: function so allcategories check all boxes on click

  return (
    <div className={style.filterStyle}>
      <input
        type="checkbox"
        id="AllCategories"
        name="Category"
        value="AllCategories"
        onChange={setSelectedCategory}
      />
      <label for="AllCategories">All Categories</label>

      <input
        type="checkbox"
        id="Publication"
        name="Category"
        value="Publication"
        onChange={}
      />
      <label for="Publication">Publication</label>

      <input
        type="checkbox"
        id="Trend"
        name="Category"
        value="Trend"
        onChange={setSelectedCategory}
      />
      <label for="Trend">Trend</label>

      <input
        type="checkbox"
        id="Event"
        name="Category"
        value="Event"
        onChange={setSelectedCategory}
      />
      <label for="Event">Event</label>

      <input
        type="checkbox"
        id="Program"
        name="Category"
        value="Program"
        onChange={setSelectedCategory}
      />
      <label for="Program">
        Program, platform or <br></br>investment initiative
      </label>

      <input
        type="checkbox"
        id="Framework"
        name="Category"
        value="Framework"
        onChange={setSelectedCategory}
      />
      <label for="Framework">
        Framework: conceptual, <br></br> evaluative, operational
      </label>
    </div>
  );
};

export default Filter;
