import './App.css';
import Carousel from './components/Carousel';
function App() {
  const imageUrls = [
    {
      url: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?cs=srgb&dl=pexels-krisof-1252890.jpg&fm=jpg",
      color: "bg-red-500",
    },
    {
      url: "https://cdn.mos.cms.futurecdn.net/AoWXgnHSxAAPxqymPQMQYL-1200-80.jpg",
      color: "bg-blue-500",
    },
    {
      url: "https://static.vecteezy.com/system/resources/thumbnails/050/671/266/small_2x/exploring-the-mesmerizing-beauty-of-a-cosmic-nebula-illuminated-by-vibrant-orange-and-yellow-hues-in-deep-space-photo.jpg",
      color: "bg-black-500",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsoFhqM7_QzkLmQboc60CzjuCqo3qPtmNjA&s",
      color: "bg-yellow-500",
    },
  ];


  return (
    <>
      <Carousel images={imageUrls} autoSlideInterval={4000} />
    </>
  );
}

export default App;
