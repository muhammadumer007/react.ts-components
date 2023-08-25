import React from 'react'
type inputProp ={
    type:string;
    onChange:Function;
    value?:any

    
}

export default function UMinput(props:inputProp) {
    const{ type, onChange,value} =props
  return (
    <>
    <input placeholder='Enter you name' onChange={(e)=>{
        props.onChange(e.target.value)
    }}
     
    />
    </>
  )
}
