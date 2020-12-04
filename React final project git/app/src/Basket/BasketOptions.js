import { ADD_TO_BASKET } from './basket options/basket_Options';

export const addToBasket = (BookID) => {
	return {
		type: ADD_TO_BASKET,
		BookID,
	};
};
