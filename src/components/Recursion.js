import React from 'react'
import RecursiveComponent from './RecursiveComponent'

function Recursion({children}) {
    const data = [
        {
            name: "Huwa",
            children: [
                {
                    name: "ja",
                    children: [
                        {
                            name:"sdasd"
                        },
                        {
                            name:"sdasd"
                        }
                    ]
                }
            ]
        },
        {
            name: "Huwa",
            children: [
                {
                    name: "ja",
                    children: [
                        {
                            name:"sdasd"
                        },
                        {
                            name: "ja",
                    children: [
                        {
                            name:"sdasd"
                        },
                        {
                            name:"sdasd"
                        }
                    ]
                        }
                    ]
                }
            ]
        }
    ]
   
  return (
    <div>
        <RecursiveComponent data={data} />
    </div>
  )
}

export default Recursion