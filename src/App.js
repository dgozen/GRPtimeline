
import React from "react";
import Style from "./App.module.css";
import RouterComponent from "./component/pages/RouterComponent/RouterComponent";
import Filter from "./component/Filter/Filter";
import InformationBoxLayout from "./layouts/InformationBoxLayout/InformationBoxLayout";
import Header from './component/Header/Header';


export default function App() {
  // axios
  // 	.get('http://www.mocky.io/v2/5ea0850b3200006f0094afb5')
  // 	.then((response) => {
  // 		const responseData = response.data.timelineInfo[0];
  // 		const { category } = responseData;
  // 		console.log(category);
  // 	});
  return (
    <div>
	  <Header />
      <RouterComponent />
      <InformationBoxLayout />
	  <Filter />
    </div>
  );
}

