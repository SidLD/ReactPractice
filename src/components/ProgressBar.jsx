import React, {useState} from 'react'
import { Progress, Tooltip } from 'antd';


function ProgressBar() {
    const [progress, setProgress] = useState(0)
    const toogleProgress = () => {
        if(progress < 100){
            setProgress(progress+20)
        }
    }
    const resetProgress = () => {
        setProgress(0)
    }
  return (
    <div>
        <h3>ProgressBar</h3>
        <Tooltip title="3 done / 3 in progress / 4 to do">
         <Progress style={{
            width:"100px"
         }} percent={100} success={{ percent: progress }} />
        </Tooltip>
    <button onClick={toogleProgress}>Progress</button>
    <button onClick={resetProgress}>Reset</button>
    </div>
  )
}

export default ProgressBar