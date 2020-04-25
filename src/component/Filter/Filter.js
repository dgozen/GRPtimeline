import React from "react";
import style from "./Filter.module.css"

const Filter = () => {
    return (
        <div className={style.filterStyle}>
            <input type="radio" id="AllCategories" name="Category" value="AllCategories"/>
            <label for="AllCategories">All Categories</label>

            <input type="radio" id="Publication" name="Category" value="Publication"/>
            <label for="Publication">Publication</label>

            <input type="radio" id="Trend" name="Category" value="Trend"/>
            <label for="Trend">Trend</label>
           
            <input type="radio" id="Event" name="Category" value="Event"/>
            <label for="Event">Event</label>

            <input type="radio" id="Program" name="Category" value="Program"/>
            <label for="Program">Program, platform or <br></br>investment initiative</label>

            <input type="radio" id="Framework" name="Category" value="Framework"/>
            <label for="Framework">Framework: conceptual, <br></br> evaluative, operational</label>
          
        </div>
    );
};

export default Filter;