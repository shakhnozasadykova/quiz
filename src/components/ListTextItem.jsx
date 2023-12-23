import React from "react";

export const ListTextItem = ({itemId, itemText, isSelected, onClick}) => {

    return (
        <li className="variant-wrapper" onClick={onClick}>
        <input required type="radio" name={itemId} id={itemId} checked={isSelected} />
        <label htmlFor={itemId}>{itemText}</label>
      </li>  
    )
}