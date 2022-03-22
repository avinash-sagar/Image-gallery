import React,{useState, useEffect} from 'react'
import ImageCard from './components/ImageCard';
import SearchItems from './components/SearchItems';
function App() {

  const [images, setImages] = useState([])
  const [isLoading, setIsloading]= useState(true)
  const [terms, setTerms] = useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=25579239-7370988b4a1eebb134ede9386&q=${terms}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      console.log(data)
      setIsloading(false);
    })
    .catch(err => {console.log(err)})
  },[terms])

  return (
      <> 
      <SearchItems searchText={(a)=> setTerms(a)}/>
      {!isLoading && images.length === 0 ? <h1 className='text-5xl text-center mx-auto mt-36'>No Images found !!!</h1> : null}
       {isLoading ? <h1 className='text-6xl text-center mx-auto mt-36'>Loading...</h1>: <div className="container mx-auto grid grid-cols-3 gap-4">
          {images.map(image=>(
            <ImageCard key={image.id} image={image}/>
          ))}
        </div>}
      </>

  )
}

export default App



