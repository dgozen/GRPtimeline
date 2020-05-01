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
  1950: {
    year: y1950,
    width: '185vw',
    left: '-75vw',
    top: '-124vh',
  },
  1973: {
    year: y1973,
    width: '180vw',
    left: '-72vw',
    top: '-120vh',
  },
  1983: {
    year: y1983,
    width: '175vw',
    left: '-69vw',
    top: '-118vh',
  },
  1985: {
    year: y1985,
    width: '170vw',
    left: '-65vw',
    top: '-113vh',
  },
  1992: {
    year: y1992,
    width: '168vw',
    left: '-64vw',
    top: '-112vh',
  },
  1995: {
    year: y1995,
    width: '165vw',
    left: '-62vw',
    top: '-112vh',
  },
  1996: {
    year: y1996,
    width: '163vw',
    left: '-60vw',
    top: '-112vh',
  },
  1999: {
    year: y1999,
    width: '156vw',
    left: '-56vw',
    top: '-105vh',
  },
  2001: {
    year: y2001,
    width: '152vw',
    left: '-54vw',
    top: '-98vh',
  },
  2004: {
    year: y2004,
    width: '152vw',
    left: '-56vw',
    top: '-98vh',
  },
  2005: {
    year: y2005,
    width: '150vw',
    left: '-56vw',
    top: '-92vh',
  },
  2006: {
    year: y2006,
    width: '150vw',
    left: '-57vw',
    top: '-100vh',
  },
  2007: {
    year: y2007,
    width: '147vw',
    left: '-55vw',
    top: '-100vh',
  },
  2008: {
    year: y2008,
    width: '140vw',
    left: '-50vw',
    top: '-92vh',
  },
  2009: {
    year: y2009,
    width: '137vw',
    left: '-49vw',
    top: '-84vh',
  },
  2010: {
    year: y2010,
    width: '128vw',
    left: '-42vw',
    top: '-80vh',
  },
  2011: {
    year: y2011,
    width: '117vw',
    left: '-34vw',
    top: '-70vh',
  },
  2012: {
    year: y2012,
    width: '114vw',
    left: '-33vw',
    top: '-68vh',
  },
  2013: {
    year: y2013,
    width: '110vw',
    left: '-30vw',
    top: '-60vh',
  },
  2014: {
    year: y2014,
    width: '19vw',
    left: '-30vw',
    top: '-60vh',
  },
  2015: {
    year: y2015,
    width: '114vw',
    left: '-34vw',
    top: '-64vh',
  },
  2016: {
    year: y2016,
    width: '110vw',
    left: '-31vw',
    top: '-60vh',
  },
  2017: {
    year: y2017,
    width: '114vw',
    left: '-38vw',
    top: '-72vh',
  },
  2018: {
    year: y2018,
    width: '112vw',
    left: '-37vw',
    top: '-71vh',
  },
  2019: {
    year: y2019,
    width: '113vw',
    left: '-38vw',
    top: '-64vh',
  },
};

const DefaultLayout = () => {
  const [yearsArray, setYearsArrayState] = useState([]);
  const [clickedYear, setClickedYear] = useState('onload');
  const [selectedCategory, setSelectedCategory] = useState();
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
          <img
            className={style.background}
            style={{
              width: yearToRender.width,
              left: yearToRender.left,
              top: yearToRender.top,
            }}
            src={yearToRender.year}
            alt=""
          />
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
        <div className={style.informationLayout}>
          <InformationBoxLayout
            clickedYear={clickedYear}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className={style.filter}>
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className={style.addbutton}>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
