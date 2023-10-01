import './App.css';
import Card from './components/card';
import pic1 from "./components/images/pic1.jpg"
import pic2 from "./components/images/pic2.jpg"
import pic3 from "./components/images/pic3.jpg"
import pic4 from "./components/images/pic4.jpg"
import pic5 from "./components/images/pic5.jpg"
import pic6 from "./components/images/pic6.jpg"



function App() {
     
  const images = [
    {
      title:'the evoltuion of design thinking:insights and perspectives',
      imgSrc:pic1,
      category:'Thoughts',
      timeToRead:'4 mins',
    },
    {
      title:'Mastering the art of design tools:a guide for product designers',
      imgSrc:pic2,
      category:'Tools',
      timeToRead:'3mins',
    },{
      title:'Side projects:from passion to portfolio-worthy designs',
      imgSrc:pic3,
      category:'Side projects',
      timeToRead:'6 mins',
    },{
      title:'Streamlining design workflows with design systems',
      imgSrc:pic4,
      category:'Design systems',
      timeToRead:'4 mins',
    },{
      title:'How side projects fuel personal growth for designers',
      imgSrc:pic5,
      category:'Aide projects',
      timeToRead:'3 mins',
    },{
      title:'Building an effective design sytem:best practices and key consdierations',
      imgSrc:pic6,
      category:'Design systems',
      timeToRead:'4 mins',
    }
  ];

  return (

    
      <div className='container'>
        {images.map((image)=>(
            <Card
               title={image.title} imgSrc={image.imgSrc} category={image.category} timeToRead={image.timeToRead}
            />
      ))}
      </div>
  );
}

export default App;
