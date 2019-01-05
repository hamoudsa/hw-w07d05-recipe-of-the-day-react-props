import React from 'react';


const Recipe = (props) => {
    const totalOfRecipes = props.recipes;
    console.log(totalOfRecipes);
    return (
        <div className="Recipe">
            <h3>Name: {totalOfRecipes.name}</h3>
            <h3>Servings: {totalOfRecipes.servings}</h3>
            <h3>Category: {totalOfRecipes.category}</h3>
        </div>
    )
}

export default Recipe;