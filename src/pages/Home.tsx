import CardList from "../components/CardList";
import Categories from "../components/Category";
import Footer from "../components/Footer";
import LinksHome from "../components/LinksHome";
import Nav from "../components/Nav";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Nav />
      <Search />
      <Categories />
      <CardList />
      <LinksHome />
      <Footer />
     
    </>
  )
}