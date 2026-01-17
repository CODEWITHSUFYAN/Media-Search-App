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
    <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
        <a href={item.url} target="_blank" className='h-full'>
          {item.type == "photo" ? <img src={item.src} className='h-full w-full object-cover object-center' alt="" /> : ""}
          {item.type == "video" ? <video autoPlay loop muted src={item.src} className='h-full w-full object-cover object-center'></video> : ""}
        </a>
        <div id='bottom' className='w-full flex justify-between gap-3 items-center px-4 py-6 absolute bottom-0 text-white'>
            <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
            <button
             onClick={()=>{
                removeFromCollection(item)
             }}
             className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 font-medium cursor-pointer'
            >Remove
            </button>
        </div>
    </div>
  )
}

export default CollectionCard