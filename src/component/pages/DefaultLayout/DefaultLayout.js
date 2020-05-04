import React from 'react';
import {useState, useEffect} from 'react';
import style from './DefaultLayout.module.css';
import styleVar from '../../../index.module.css';
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
import pin from '../../../assets/pin.svg';

const event = '#0071B8';
const publication = ' #33622A';
const trend = '#49853E';
const program = '#009EDE';
const frameWork = '#58595B';

const backgrounds = {
  1950: {
    background: y1950,
    width: '185vw',
    left: '-75vw',
    top: '-124vh',
    year: 1950,
    infoBoxes: [
      {
        category: 'event',
        color: event,
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  1973: {
    background: y1973,
    width: '180vw',
    left: '-72vw',
    top: '-120vh',
    year: 1973,
    infoBoxes: [
      {
        category: 'publication',
        color: publication,
        top: '20%',
        left: '10%',
        info:
          '"Competence and adaptation in adult schizophrenic patients and children at risk" by Norman Garmezy',
        link:
          'https://www.annualreviews.org/doi/abs/10.1146/annurev.es.04.110173.000245',
      },
      {
        category: 'publication',
        color: publication,
        top: '40%',
        left: '40%',
        info:
          '“Resilience and Stability of Ecological Systems” by C.S. Holling',
        link:
          'https://www.annualreviews.org/doi/abs/10.1146/annurev.es.04.110173.000245',
      },
    ],
  },
  1983: {
    background: y1983,
    width: '175vw',
    left: '-69vw',
    top: '-118vh',
    year: 1983,
    infoBoxes: [
      {
        category: 'trend',
        color: trend,
        top: '50%',
        left: '50%',
        info: 'Ethiopia famine and hunger crisis',
        link: '',
      },
    ],
  },
  1985: {
    background: y1985,
    width: '170vw',
    left: '-65vw',
    top: '-113vh',
    year: 1985,
    infoBoxes: [
      {
        category: 'event',
        color: event,
        top: '50%',
        left: '50%',
        info: 'Famine Early Warning Systems Network (FEWSNET) created',
        link: '',
      },
    ],
  },
  1992: {
    background: y1992,
    width: '168vw',
    left: '-64vw',
    top: '-112vh',
    year: 1992,
    infoBoxes: [
      {
        category: 'trend',
        color: trend,
        top: '30%',
        left: '60%',
        info:
          'UN Conference on Environment and Development (UNCED) in Rio, Brazil',
        link: '',
      },
    ],
  },
  1995: {
    background: y1995,
    width: '165vw',
    left: '-62vw',
    top: '-112vh',
    year: 1995,
    infoBoxes: [
      {
        category: 'event',
        color: event,
        top: '60%',
        left: '60%',
        info: 'UN Millennium Development Goals (MDGs)',
        link: '',
      },
      {
        category: 'program, platform, investment initiative',
        color: program,
        top: '40%',
        left: '40%',
        info: 'Sustainable Livelihoods Framework',
        link:
          'https://hhi.harvard.edu/education/atha/content/sustainable-livelihoods-framework',
      },
    ],
  },
  1996: {
    background: y1996,
    width: '163vw',
    left: '-60vw',
    top: '-112vh',
    year: 1996,
    infoBoxes: [
      {
        category: 'trend',
        color: trend,
        top: '30%',
        left: '30%',
        info: 'Mobile phones and SMS enter the mainstream',
        link: '',
      },
    ],
  },
  1999: {
    background: y1999,
    width: '156vw',
    left: '-56vw',
    top: '-105vh',
    year: 1999,
    infoBoxes: [
      {
        category: 'program, platform, investment initiative',
        color: 'program',
        top: '20%',
        left: '30%',
        info: 'African Evaluation Association formed',
        link: 'https://afrea.org/',
      },
      {
        category: 'program, platform, investment initiative',
        color: program,
        top: '30%',
        left: '50%',
        info: 'Resilience Alliance formed',
        link: 'https://www.resalliance.org/background',
      },
    ],
  },
  2001: {
    background: y2001,
    width: '152vw',
    left: '-54vw',
    top: '-98vh',
    year: 2001,
    infoBoxes: [
      {
        category: 'publication',
        color: publication,
        top: '50%',
        left: '50%',
        info:
          '"Panarchy: Understanding Transformations in Systems of Humans and Nature"by Lance Gunderston & C.S. Holling',
        link: 'www.resalliance.org/index.php/panarchy',
      },
    ],
  },
  2004: {
    background: y2004,
    width: '152vw',
    left: '-56vw',
    top: '-98vh',
    year: 2004,
    infoBoxes: [
      {
        category: 'trend',
        color: trend,
        top: '30%',
        left: '30%',
        info: 'Facebook’s website launches',
        link: '',
      },
      {
        category: 'trend',
        color: trend,
        top: '20%',
        left: '40%',
        info: 'Indian Ocean tsunami',
        link: '',
      },
    ],
  },
  2005: {
    background: y2005,
    width: '150vw',
    left: '-56vw',
    top: '-92vh',
    year: 2005,
    infoBoxes: [
      {
        category: 'trend',
        color: trend,
        top: '18%',
        left: '10%',
        info:
          'Kyoto Protocol enters into force, UN Framework Convention on Climate Change (UNFCCC) COP10',
        link:
          'https://en.wikipedia.org/wiki/2005_United_Nations_Climate_Change_Conference',
      },
      {
        category: 'trend',
        color: trend,
        top: '40%',
        left: '20%',
        info:
          'CBA1: First conference on community-based adaptation to climate change',
        link:
          'https://www.iied.org/1st-international-conference-community-based-adaptation-cba1',
      },
      {
        category: 'trend',
        color: trend,
        top: '15%',
        left: '30%',
        info:
          'Hurricane Katrina, a category 5 event, makes landfall on the Gulf Coast of the US',
        link:
          'https://www.rand.org/blog/2015/09/what-hurricane-katrina-taught-us-about-community-resilience.html',
      },
      {
        category: 'event',
        color: event,
        top: '60%',
        left: '50%',
        info:
          'Government of Ethiopia launches the Productive Safety Net Programme (PSNP)',
        link: 'https://www.wfp.org/sites/default/files/PSNP%20Factsheet.pdf',
      },
      {
        category: 'framework: conceptual, evaluative, operational',
        color: frameWork,
        top: '10%',
        left: '60%',
        info:
          'Hyogo Framework for Action led by UN Office for Disaster Risk Reduction (UNISDR)',
        link: 'https://www.undrr.org/',
      },
    ],
  },
  2006: {
    background: y2006,
    width: '150vw',
    left: '-57vw',
    top: '-100vh',
    year: 2006,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2007: {
    background: y2007,
    width: '147vw',
    left: '-55vw',
    top: '-100vh',
    year: 2007,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2008: {
    background: y2008,
    width: '140vw',
    left: '-50vw',
    top: '-92vh',
    year: 2008,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2009: {
    background: y2009,
    width: '137vw',
    left: '-49vw',
    top: '-84vh',
    year: 2009,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2010: {
    background: y2010,
    width: '128vw',
    left: '-42vw',
    top: '-80vh',
    year: 2010,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2011: {
    background: y2011,
    width: '117vw',
    left: '-34vw',
    top: '-70vh',
    year: 2011,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2012: {
    background: y2012,
    width: '114vw',
    left: '-33vw',
    top: '-68vh',
    year: 2012,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2013: {
    background: y2013,
    width: '110vw',
    left: '-30vw',
    top: '-60vh',
    year: 2013,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2014: {
    background: y2014,
    width: '110vw',
    left: '-30vw',
    top: '-60vh',
    year: 2014,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2015: {
    background: y2015,
    width: '114vw',
    left: '-34vw',
    top: '-64vh',
    year: 2015,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2016: {
    background: y2016,
    width: '110vw',
    left: '-31vw',
    top: '-60vh',
    year: 2016,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2017: {
    background: y2017,
    width: '114vw',
    left: '-38vw',
    top: '-72vh',
    year: 2017,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2018: {
    background: y2018,
    width: '112vw',
    left: '-37vw',
    top: '-72vh',
    year: 2018,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
  2019: {
    background: y2019,
    width: '113vw',
    left: '-38vw',
    top: '-66vh',
    year: 2019,
    infoBoxes: [
      {
        category: 'event',
        color: '#0071B8',
        top: '50%',
        left: '50%',
        info:
          'Concept of resilience fi_x005F_x001f_rst noted in psychology, “Maternal care and mental health” by John Bowlby, WHO',
        link:
          'https://apps.who.int/iris/bitstream/handle/10665/40724/WHO_MONO_2_(part1).pdf;jsessionid=E24D41B690EEACD11A968BDB6359907F?sequence=1',
      },
    ],
  },
};

const DefaultLayout = () => {
  const [yearsArray, setYearsArrayState] = useState([]);
  const [clickedYear, setClickedYear] = useState('onload');
  const [selectedCategory, setSelectedCategory] = useState([]);

  const timelineData = APIFetch();

  // this function yearsToRender filters the images on the keys < or = clickedYear
  // and transforms the key and clickedYear from string to integer using parseInt()
  const yearsToRender = Object.entries(backgrounds).filter(
    ([key]) => parseInt(key) <= parseInt(clickedYear)
  );

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
      <div>
        {/* this function maps through the yearsToRender function, and renders all images < = to clickedYear  */}
        {yearsToRender.map(([, yearToRender]) => (
          <div>
            <img
              className={style.background}
              style={{
                width: yearToRender.width,
                left: yearToRender.left,
                top: yearToRender.top,
              }}
              src={yearToRender.background}
              alt=""
            />
            <p className={style.year}>{yearToRender.year}</p>
            {yearToRender.infoBoxes.map((infoBox) => (
              <div
                className={style.infoBox}
                style={{
                  top: `${infoBox.top}`,
                  left: `${infoBox.left}`,
                  backgroundColor: `${infoBox.color}`,
                }}
              >
                {infoBox.info}
              </div>
            ))}
          </div>
        ))}
      </div>
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
        {/* <div className={style.header}>
          <Header />
        </div> */}
        {/* <div className={style.informationLayout}>
          <InformationBoxLayout
            clickedYear={clickedYear}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div> */}
        <div className={style.filter}>
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <img className={style.pin} src={pin} alt="" />
        <div className={style.addbutton}>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
