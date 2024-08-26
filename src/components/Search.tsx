import { IoIosSearch } from "react-icons/io";


export default function Search() {
  return (
   <div className="border-b-2 pb-5">
     <div className="max-w-[670px] shadow-md rounded-full m-auto border border-gray-300 flex items-center gap-3 overflow-hidden">
      <button className="flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold">Ziel</p>
        <span className="text-sm">Suche nach einem Ziel</span>
      </button>
      <button className="flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold">Ankunft</p>
        <span className="text-sm">Wann ?</span>
      </button>
      <button className="flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold ">Abfahrt</p>
        <span className="text-sm">Wann ?</span>
      </button>
      <button className="flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold">Reisender</p>
        <span className="text-sm">Reisenden hinzufügen</span>
      </button>
      <button className="rounded-full bg-[#FF5A5F] hover:bg-[#FC642D] text-white text-2xl p-3"><IoIosSearch/> </button>
    </div>
   </div>
  )
}