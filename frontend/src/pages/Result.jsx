

import { assets } from '../assests/assets'
import { useState } from 'react'


const Result = () => {

  const [image,setImage] = useState(assets.sample_img_1)
  const [IsImageLoaded,setIsImageLoaded]=useState(false)
  const [loading,setLoading]=useState(false)
  const [text,setText]=useState('')

  const handleSubmit = async (e) => {
  e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col minh-[90vh] justify-center items-center">
      <div>
        <div className='relative'>
          <img src={image} alt="" className='max-w-sm rounded' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 
          ${!loading ? 'w-0' : 'w-full transition-all duration-[10s]'}`} />
        </div>
        <p className={!loading ? 'hidden' : 'block text-black text-sm mt-2'}>Loading.....</p>
      </div>
      {!IsImageLoaded ?
      <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
        <input 
        value={text} onChange={(e)=>setText(e.target.value)}
        type="text" placeholder="describe what do you want to generate "
        className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"/>
        <button type='submit' className="bg-zinc-900 px-10 sm:px-16 p-3 rounded-full">Generate</button>
      </div>
    :
        
      <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
        <p onClick={()=>setIsImageLoaded(false)} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>
        Generate Another
      </p>
        <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>
           Download
         </a>
      </div>
    }

    </form>
  )
}

export default Result

