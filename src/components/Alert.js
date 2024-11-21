import React from 'react'

export default function Alert(props) {

  const capitalize = (Word) => {
    const lower = Word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
      <div style={{ height: "60px" }}> 
      {props.alert && <div className={`alert alert-${props.alert.Type}`} role="alert">
      <strong>{capitalize(props.alert.Type)}</strong>{props.alert.msg}
      </div>}
      </div>

    
  )
}
