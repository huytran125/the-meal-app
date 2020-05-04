import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE,FILTER_MEALS } from '../../store/actions/meals'
const initialState = {
    meals: MEALS,
    favoriteMeals: [],
    filterMeals: MEALS
};

const mealsReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case TOGGLE_FAVORITE: {

            const favMeals = [...state.favoriteMeals];
            const indexToHandler = favMeals.findIndex(meal => meal.id === actions.mealId)
            if (indexToHandler >= 0) {

                favMeals.splice(indexToHandler, 1);

                return { ...state, favoriteMeals: favMeals };

            } else {
                const favoritesMeal = state.meals.find(meal => meal.id === actions.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(favoritesMeal) };
            }


        }

        default: return state;
        case FILTER_MEALS: {
            const apliedFilter=actions.filteritem;
            const updatedFilterMeal= state.meals.filter(meal =>{
                if (apliedFilter.glutenFree && !meal.isGlutenFree)
                return false;
                if (apliedFilter.lactoseFree && !meal.isLactoseFree)
                return false;
                if (apliedFilter.vegan && !meal.isVegan)
                return false;
                if (apliedFilter.vegetarian && !meal.isVegetarian)
                return false;
                return true;
            })
            return {...state, filterMeals: updatedFilterMeal};
            
        }
    }

}


export default mealsReducer;