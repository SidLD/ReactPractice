import React from 'react'

function RecursiveComponent({data}) {
  return (
    <div style={{ paddingLeft: "20px", border: "1px solid red" }}>
        {data.map((parent, index) => {
        return (
          <div key={index}>
            <span>{parent.name}</span>
            <div>
              {parent.children && <RecursiveComponent data={parent.children} />}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default RecursiveComponent