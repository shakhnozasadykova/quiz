import React from "react";

export const ListEmojiItem = ({itemId, itemText, emojiImg, emojiName, isSelected, onClick}) => {
    return (
        <li className="variant-wrapper" onClick={onClick}>
        <input required type="radio" name={itemId} id={itemId} checked={isSelected} />
        <label htmlFor={itemId}>
          <img src={emojiImg} alt={emojiName} />
          <p>{itemText}</p>
        </label>
      </li>
    )
}