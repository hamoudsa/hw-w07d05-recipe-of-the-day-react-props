import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';


class RecipeOfTheDay extends Component {

     renderIngredients(){
        const totalRecipeOfTheDay = recipeOfTheDay.ingredients.map((ingred, index) => {
            return (
                <Ingredient ingredient={ingred} key={index}/>
            )
        });
        return totalRecipeOfTheDay;
    };

    render() {
      return (
        <div className="header">
            <h1 className="title">Recipe of the Day</h1>
            <h2>{recipeOfTheDay.name}</h2>
            <h2>Description:</h2>
            <h2>{recipeOfTheDay.description}</h2>
            <h2>Ingredient</h2>
            {this.renderIngredients()}
        </div>
      )
    }
  }
  
  export default RecipeOfTheDay;
  