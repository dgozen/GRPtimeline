import React from 'react';
import {useState, useEffect} from 'react';
import style from './DefaultLayout.module.css';
import Header from '../../Header/Header';
import ButtonArrowSmall from '../../Buttons/ButtonArrowSmall/ButtonArrowSmall';
import InformationBoxLayout from '../../InformationBoxLayout/InformationBoxLayout';
import Filter from '../../Filter/Filter';
import APIFetch from '../../APIFetch/APIFetch';
import AddButton from '../../Buttons/AddButton/AddButton';
import y1950 from '../../../assets/1950.svg';
import y1973 from '../../../assets/1973.svg';
import y1983 from '../../../assets/1983.svg';
import y1985 from '../../../assets/1985.svg';
import y1992 from '../../../assets/1992.svg';
import y1995 from '../../../assets/1995.svg';
import y1996 from '../../../assets/1996.svg';
import y1999 from '../../../assets/1999.svg';
import y2001 from '../../../assets/2001.svg';
import y2004 from '../../../assets/2004.svg';
import y2005 from '../../../assets/2005.svg';
import y2006 from '../../../assets/2006.svg';
import y2007 from '../../../assets/2007.svg';
import y2008 from '../../../assets/2008.svg';
import y2009 from '../../../assets/2009.svg';
import y2010 from '../../../assets/2010.svg';
import y2011 from '../../../assets/2011.svg';
import y2012 from '../../../assets/2012.svg';
import y2013 from '../../../assets/2013.svg';
import y2014 from '../../../assets/2014.svg';
import y2015 from '../../../assets/2015.svg';
import y2016 from '../../../assets/2016.svg';
import y2017 from '../../../assets/2017.svg';
import y2018 from '../../../assets/2018.svg';
import y2019 from '../../../assets/2019.svg';

// ToDo:

// - Export each layer as an SVG with the year it’s representing as name and place in assets folder. Default color: white

// - Place all images in an array.

// - Use inline styling and if else statements to decide which background to show onClick on each year.

// let background=” ”

// backgroundArray = [
// img(src=””),
// img(),
// img(),
// ]

// const backroundHandler = ()
//  => {
// if(year state === 1999) {
// background = [0, 9]
// }};

// background: background onClick=backgroundHandler

// CSS:

// - fix the size and placement of the images (absolut positioning, z-index)

// -  Look up how to change colors on SVG:s
const backgrounds = {
  1950: y1950,
  1973: y1973,
  1983: y1983,
  1985: y1985,
  1992: y1992,
  1995: y1995,
  1996: y1996,
  1999: y1999,
  2001: y2001,
  2004: y2004,
  2005: y2005,
  2006: y2006,
  2007: y2007,
  2008: y2008,
  2009: y2009,
  2010: y2010,
  2011: y2011,
  2012: y2012,
  2013: y2013,
  2014: y2014,
  2015: y2015,
  2016: y2016,
  2017: y2017,
  2018: y2018,
  2019: y2019,
};

const DefaultLayout = () => {
  const [yearsArray, setYearsArrayState] = useState([]);
  const [clickedYear, setClickedYear] = useState('');
  const timelineData = APIFetch();

  const yearsToRender = Object.entries(backgrounds).filter(
    ([key]) => parseInt(key) <= parseInt(clickedYear)
  );

  // backgroundArray;

  // if (clickedYear > backgroundsToDisplay) {
  //   backgroundsToDisplay = backgroundsToDisplay++;
  // } else {
  //   backgroundsToDisplay = backgroundsToDisplay--;
  // }

  // console.log('This is the clickedYear!', clickedYear);

  // console.log('this is the Object!!!!!', Object.values(backgrounds));

  console.log(clickedYear);
  useEffect(() => {
    timelineData.then((data) => {
      let yearsArrays = [];
      for (let item of data.timelineInfo) {
        yearsArrays.push(item.year);
      }

      setArray(yearsArrays);
    });
  }, []);

  const setArray = (array) => {
    const passArray = new Set(array);
    const oneOfEachYear = [...passArray];
    setYearsArrayState(oneOfEachYear);
  };

  return (
    <div>
      {clickedYear !== '' &&
        yearsToRender.map(([, yearToRender]) => (
          <img className={style.background} src={yearToRender} alt="" />
        ))}
      <div className={style.container}>
        <div className={style.timeline}>
          <div className={style.buttonArrowUp}>
            <ButtonArrowSmall />
          </div>
          {yearsArray.map((item, index) => (
            <button
              key={index}
              className={style.buttonYear}
              onClick={() => {
                setClickedYear(item);
              }}
            >
              {item}
            </button>
          ))}

          <div className={style.buttonArrowDown}>
            <ButtonArrowSmall />
          </div>
        </div>
        <div className={style.header}>
          <Header />
        </div>
        <InformationBoxLayout clickedYear={clickedYear} />
        <div className={style.filter}>
          <Filter />
        </div>
        <div className={style.addbutton}>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
