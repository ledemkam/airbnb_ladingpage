import React from 'react';

const LinksHome: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-[1200px] m-auto py-8">
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-3">Assistance</h4>
      <ul className="flex flex-col gap-3">
        <li><a href="#" className="hover:underline">Hilfe-Center</a></li>
        <li><a href="#" className="hover:underline">AirCover</a></li>
        <li><a href="#" className="hover:underline">Anti-discriminierung</a></li>
        <li><a href="#" className="hover:underline">Barrierefreiheit</a></li>
        <li><a href="#" className="hover:underline">Stornierungsmöglichkeiten</a></li>
      </ul>
    </div>
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-3">Gastgeben</h4>
      <ul className="flex flex-col gap-3">
        <li><a href="#" className="hover:underline">Nachbarschaft: Problem melden</a></li>
        <li><a href="#" className="hover:underline">Kostenlose Kurse zum Thema Gastgeben</a></li>
        <li><a href="#" className="hover:underline">AirCover für Gastgeber:innen</a></li>
        <li><a href="#" className="hover:underline">Als Gastgeber:in loslegen</a></li>
        <li><a href="#" className="hover:underline">Community-Forum</a></li>
      </ul>
    </div>
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-3">Airbnb</h4>
      <ul className="flex flex-col gap-3">
        <li><a href="#" className="hover:underline">Newsroom</a></li>
        <li><a href="#" className="hover:underline">Neuen Funktionen</a></li>
        <li><a href="#" className="hover:underline">Karrierer</a></li>
        <li><a href="#" className="hover:underline">Investor:innenInvestor:innen</a></li>
        <li><a href="#" className="hover:underline">Geschenkkarten</a></li>
      </ul>
    </div>
  </div>
  
  );
};

export default LinksHome;