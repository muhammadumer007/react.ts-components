import React from 'react'
// import { AnyARecord } from 'dns';
type ButtonProp ={
  ok:Function;
  label:string;
   
}
let click=()=>{
  console.log("thank you");
  

}


export default function UMButton(props:ButtonProp ) {
  const {label ,ok}= props;
  return (
    <button  onClick={props.ok()} ></button >
  )
}
