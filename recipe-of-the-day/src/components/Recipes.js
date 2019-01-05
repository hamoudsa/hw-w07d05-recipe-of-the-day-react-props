import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';

class Recipes extends Component {

    renderRecipes() {
        const totalOfRecipes = recipes.map((post, index) => {
            return (
                <Recipe recipes={post} key={index}/>
            );
        });
        return totalOfRecipes;
    }

    render() {
        return (
            <div className="header">
                <h1 className="title">Recipes</h1>
                {this.renderRecipes()};
            </div>
        )
    }
}

export default Recipes;
