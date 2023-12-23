import React, { useState } from "react";
import { ProgressIndicator } from "../components/UI/ProgressIndicator";
import { Heading } from "../components/UI/Heading";
import { ListEmojiItem } from "../components/ListEmojiItem";
import { LinkButton } from "../components/LinkButton";

const mockData = [
  {
    variantId: 'variant-1',
    variantText: 'Ответ 1',
    variantEmoji: './img/laugh.png',
  },
  {
    variantId: 'variant-2',
    variantText: 'Ответ 2',
    variantEmoji: './img/hearts.png',
  },
  {
    variantId: 'variant-3',
    variantText: 'Ответ 3',
    variantEmoji: './img/smirk.png',
  },
  {
    variantId: 'variant-4',
    variantText: 'Ответ 4',
    variantEmoji: './img/fright.png',
  }
]

const StepThree = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressIndicator currentStep={3} />
          <div className="question">
          <Heading headingTag="h2" headingText="Вопрос номер 3" />
            <ul className="emoji-variants">
              {mockData.map((variant) => (
                <ListEmojiItem key={variant.variantId} itemId={variant.variantId} itemText={variant.variantText} emojiImg={variant.variantEmoji} isSelected={selectedItem === variant.variantId} onClick={() => setSelectedItem(variant.variantId)}/>
              ))}
            </ul>
            <LinkButton path="/step-four" isDisabled={!selectedItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
