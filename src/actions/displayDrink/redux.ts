import { createDraft, Draft } from 'immer';
import { createReducerCase } from '@base/features/base-decorator';
import { createReducer, createActions } from 'reduxsauce';
import {
	TypesNames, ActionCreator, Display, GetDisplayDrinkAction,
} from './interface';

// TODO: Do not for get add your reducer to index file

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getDisplayDrink: ['data'], // handle by saga
	getRandomDrink: ['data'] // handle by saga
});

export const DisplayDrinkTypes = TypesNames;
export const DisplayDrinkActions = Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = createDraft<Display>({
	display: {
		idDrink: '',
		strDrink: '',
		strCategory: '',
		ingredient: [],
		dateModified: '',
		strGlass: '',
		strInstructions: '',
	}
});

/* ------------- Selectors ------------- */

export const displayDrinkSelector = {
	getDisplayDrink: (state: Display) => state.display
};

/* ------------- Reducers ------------- */

const getDisplayDrinkReducer = (draft: Draft<Display>, action: GetDisplayDrinkAction) => {
	const { data } = action;
	draft.display = data;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[TypesNames.GET_DISPLAY_DRINK]: createReducerCase(getDisplayDrinkReducer)
});
