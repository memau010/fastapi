import {CTabs,CTabList,CTab,CTabContent,CTabPanel,} from '@coreui/react'
import Contact from "./App-tabs-contact/Contact";
import WeatherWidget from '../Weather'

import Reservations from './App-tabs-reservations/Reservations';
import "./Tabs.css";

const tabs = [
  { key: 'reservation', label: 'Reservation', content: (<div style={{ display: 'flex', gap: '2rem' }}><Reservations /></div> )},
  { key: 'about', label: 'About As', content: 'Profile tab content' },
  { key: 'contact', label: 'Contact', content: <Contact /> },


]

export const Tabs = () => {
  return (
    <CTabs defaultActiveItemKey="home" className="w-100 d-flex flex-column">
      {" "}
      <CTabList variant="tabs" className="d-flex justify-content-between">
        {" "}
        {tabs.map((tab) => (
          <CTab
            key={tab.key}
            itemKey={tab.key}
            className="flex-fill text-center"
          >
            {tab.label}
          </CTab>
        ))}{" "}
      </CTabList>{" "}
      <CTabContent className="flex-grow-1 border-none">
        {" "}
        {tabs.map((tab) => (
          <CTabPanel key={tab.key} itemKey={tab.key} className="">
            {tab.content}
          </CTabPanel>
        ))}{" "}
      </CTabContent>{" "}
    </CTabs>
  );
};

export default Tabs;
