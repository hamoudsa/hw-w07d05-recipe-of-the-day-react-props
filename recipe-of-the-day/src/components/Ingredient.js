import React from 'react';


const Ingredient = (props) => {
    const ingredients = props.ingredient;
    return (
        <div className="Ingredient">
            <ul>
                <li>Ingredient: {ingredients.ingredient}</li>
                <li>Amount: {ingredients.amount}</li>
            </ul>
        </div>
    )
}

export default Ingredient;