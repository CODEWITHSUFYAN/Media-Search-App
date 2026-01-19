import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection  , removeToast } from "../redux/features/collectionSlice.js"

const CollectionCard = ({ item }) => {

  const dispatch = useDispatch()

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
  }


  return (
    <div className='w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)] xl:w-[18vw] relative h-64 sm:h-72 lg:h-80 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
        <a href={item.url} target="_blank" className='h-full block'>
          {item.type == "photo" ? <img src={item.src} className='h-full w-full object-cover object-center' alt="" /> : ""}
          {item.type == "video" ? <video autoPlay loop muted src={item.src} className='h-full w-full object-cover object-center'></video> : ""}
        </a>
        <div id='bottom' className='w-full flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 items-start sm:items-center px-3 sm:px-4 py-4 sm:py-6 absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent text-white'>
            <h2 className='text-sm sm:text-base lg:text-lg font-semibold capitalize h-12 sm:h-14 overflow-hidden line-clamp-2'>{item.title}</h2>
            <button
             onClick={()=>{
                removeFromCollection(item)
             }}
             className='bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded px-3 py-1 text-sm sm:text-base font-medium cursor-pointer whitespace-nowrap transition-colors flex-shrink-0'
            >Remove
            </button>
        </div>
    </div>
  )
}

export default CollectionCard