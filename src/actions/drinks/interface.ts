import { Action } from 'redux';

/* ------------- Define Actions and State ------------- */

export interface DrinksState {
	drinksArr: Drink[];
	filterArr: Drink[];
}

export enum TypesNames {
	GET_DRINKS = 'GET_DRINKS',
	SET_DRINKS = 'SET_DRINKS',
	FILTER_BY_INGREDIENT = 'FILTER_BY_INGREDIENT',
	GET_DEATAILS_DRINKS = 'GET_DEATAILS_DRINKS',
	FILTER_ARR = 'FILTER_DRINKS',
	SORT_BY_NAME= 'SORT_BY_NAME',
	SORT_BY_DATE= 'SORT_BY_DATE',
	RESET_FILTER_ARR= 'RESET_FILTER_ARR'

}

export declare function GetDrinksFunction(data: string): GetDrinksAction;
export declare function SetDrinksFunction(data: Drink[]): SetDrinksAction;
export declare function FilterByIngredientFunction(data: string): FilterByIngredientAction;
export declare function GetDeatailsDrinksFunction(): GetDeatailsDrinksAction;
export declare function filterArrFunction(data: FilterInp): FilterArrAction;
export declare function SortBYNameFunction(): SortBYNameAction;
export declare function SortBYDateFunction(): SortBYDateAction;
export declare function ResetFilterArrFunction(data: Drink[]): ResetFilterArrAction;

export interface ActionCreator {
	getDrinks: typeof GetDrinksFunction;
	setDrinks: typeof SetDrinksFunction;
	filterByIngredient: typeof FilterByIngredientFunction;
	getDeatailsDrinks: typeof GetDeatailsDrinksFunction;
	FilterArr: typeof filterArrFunction;
	sortBYName: typeof SortBYNameFunction;
	sortBYDate: typeof SortBYDateFunction;
	resetFilterArr: typeof ResetFilterArrFunction;

}

export interface GetDrinksAction extends Action<TypesNames.GET_DRINKS> {
	data: string;
}
export interface SetDrinksAction extends Action<TypesNames.SET_DRINKS> {
	data: Drink[];
}
export interface FilterByIngredientAction extends Action<TypesNames.FILTER_BY_INGREDIENT> {
	data: string;
}
export interface GetDeatailsDrinksAction extends Action<TypesNames.GET_DEATAILS_DRINKS> {
	data: Drink[];
}
export interface FilterArrAction extends Action<TypesNames.FILTER_ARR> {
	data: Drink[];
}
export interface SortBYNameAction extends Action<TypesNames.SORT_BY_NAME> {
	data: Drink[];
}
export interface SortBYDateAction extends Action<TypesNames.SORT_BY_DATE> {
	data: Drink[];
}
export interface ResetFilterArrAction extends Action<TypesNames.RESET_FILTER_ARR> {
	data: Drink[];
}

/* ------------- Define Any Interfaces ------------- */

export interface Drink{
	idDrink: string;
	strDrink: string;
	strCategory: string;
	ingredient: string[];
	dateModified: string;
	strDrinkThumb: string;
	strGlass: string;
	strInstructions: string;
	strTags: string;
}

export interface FilterInp{
	mainSearch: string;
	ingredient: string;
}

