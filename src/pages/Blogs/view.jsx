import React, { useEffect, useState } from 'react'
import BlogDetails from '../../components/BlogDetails'
import { getData } from '../../lib/api'

export default function Blogs() {
    const [data, setData] = useState([])
    useEffect(() => {
       getData().then(
        (res) => {
            setData(res.data)
        }
       )
    },[])
    const handleSearch = async(e) => {
        let resData
        await getData().then(
            (res) => {
                resData = res.data
            }
        )
        const result  = e.target.value.toLowerCase()
        let filter = resData.filter( d => {
            return d.title.toLowerCase().includes(result) && d
        })
        setData(filter)
    }
  return (
    <div>
        <h2>Blogs</h2>
        <label>Search</label>
        <input onChange={handleSearch} />
        <div className="blog-container">
            {data.map((blog, index) => {
                return(
                    <BlogDetails title={blog.title} content={blog.body} key={index} />
                )
            })}
        </div>
    </div>
  )
}
