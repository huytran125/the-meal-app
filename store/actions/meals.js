export const TOGGLE_FAVORITE='TOGGLE_FAVORITE';
export const FILTER_MEALS= 'FILTER_MEALS';
export const toggleFavorite=(id)=>{
    console.log('hello');
    return {type: TOGGLE_FAVORITE,mealId: id}
}

export const filterMeals=(filteritem) =>{
    return {type: FILTER_MEALS, filteritem: filteritem}
}