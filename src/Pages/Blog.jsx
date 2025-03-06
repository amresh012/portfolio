import { Divider } from '@mui/material'
import  { useState } from 'react'
import { IoFunnelOutline, IoSearch } from 'react-icons/io5'
import Card from '../Component/Card'
const filteredProjects = [] // Replace with actual filtered projects logic

const  Blog = () => {
      const [search, setSearch] = useState('')
      const [selectedFilter, setSelectedFilter] = useState('All')
  return (
   <>
    <main className='w-full p-10'>
      <div className="p-4">
        <div className="w-full flex justify-between "> 
        <h1 className='text-4xl font-bold'>Recent Blogs</h1>
        <div className="bg-gray-200 items-center justify-center flex  p-2 rounded-lg">
          <input
            type="search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search" 
            className="outline-none bg-gray-200"/>
          <button type="button" className="text-2xl"><IoSearch /></button>
      </div>
        </div>
        <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint minima vitae consequatur eius ipsa vel cum tempore suscipit veritatis magnam quod, aliquam illum qui, in ut quisquam excepturi ex?</p>
      </div>
      {/* filter */}
      <div className="p-4">
        <ul className="flex flex-wrap gap-4 items-center">
          <div className="font-bold">
            <IoFunnelOutline/>
          </div>
          {
            ["All","Recent Blog","Old Blog"].map((item,i)=>(
              <div  onClick={() => setSelectedFilter(item)} className="bg-gray-200 hover:bg-indigo-200 cursor-pointer duration-300 hover:border-b-2 hover:border-indigo-600 hover:text-indigo-700 rounded-md capitalize " key={i}>
                <li className="p-2 text-xs">{item}</li>
              </div>
            ))
          }
        </ul>
      </div>
      <Divider orientation="horizontal"/>
      {/* project card */}
      <div className="grid grid-cols-2 gap-2 pt-4">
        {
          filteredProjects.map((item,i)=>(
            <Card key={i} props={item}/>
          ))
        }
      </div>
    </main>
   </>
  )
}

export default Blog
