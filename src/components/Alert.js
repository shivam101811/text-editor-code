import React from 'react'

function Alert(props) {
 const capitalize = (word)=>{
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
 }


  return (
    props.text && //if you enter this statement ---> it means the other side will not work until it gets true
    <div className={`alert alert-${props.text.type} alert-dismissible fade show `} role="alert">
    <strong>{capitalize(props.text.type)}</strong> : {props.text.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
 

