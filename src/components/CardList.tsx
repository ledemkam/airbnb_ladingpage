import { useDispatch, useSelector } from "react-redux";
import { selectCards, setCards } from "../lib/redux/sliceCard";
import { useEffect } from "react";
import  data  from "../lib/data/data.json";
//import { CardItem} from "../types";
import Card from "./Card";



const CardList =()=>{
   const dispath = useDispatch();
   const cards = useSelector(selectCards)
   console.log(cards);
   

   useEffect(( ) => {
    dispath(setCards(data ))
   }, [dispath])


return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center items-center p-10 border-b-2">
      {cards.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
)
}
export default CardList;