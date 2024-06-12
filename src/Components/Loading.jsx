import React from 'react'
import { BounceLoader, ClipLoader } from 'react-spinners'


const Loading = () => {
  return (
    <div>
        <ClipLoader
            color='#fff'
            size={20}
            loading={true}
        />
    </div>
  )
}


export default Loading
