import React, { useEffect, useState } from 'react'

const Products = () => {

const [allimages, setAllImages] = useState([])
const [search,setSearch] = useState('car')
const apikey = '3eDBHLYoensU3ckCXz1aMw3G0MjdXrTgFLDyjkjgQ8o'


    const fetchData = async () => {
        try{
         const response = await fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=${apikey}&per_page=30`)
         const data = await response.json()
         setAllImages(data.results)
         console.log(data.results)
        }
         catch(error){
         console.log(error)
         
        }
     
     }
 



  return (
    <div className='mt-4'>
      <div className="w-container mx-auto">
      <input
        className='border p-2 mb-10'
        type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>

        <button className='border p-2 ' onClick={fetchData}>Search</button>
        <div className='grid grid-cols-4  gap-4'>
        {
            allimages.map((images)=>{
                return(
                    <div key={images.id} >
                        <img
                        className="w-full h-40 object-cover"
                         src={images.urls.small} alt={images.description} ></img>
                    
                    </div>
                )
            })
        }
         </div>
      </div>
    </div>
  )
}

export default Products