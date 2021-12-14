import './App.css';
import image_1 from './assets/image_1.jpg'
import image_2 from './assets/image_2.jpg'
import image_3 from './assets/image_3.jpg'
import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Hero imageSrc={image_1} />
      <Slider 
        imageSrc={image_2} 
        title={"Lets Explore"} 
        subtitle={"Forest area in Europe has increased since 1990 by 17 million hectares (ha) of which more than half are planted forests."} 
      />
      <Slider 
        imageSrc={image_3} 
        title={"Make Memories"} 
        subtitle={"The flower forest variant has fewer trees than the regular forest, but boasts large quantities of flowers across its landscape."} 
        flipped={true}
      />
    </div>
  );
}

export default App;
