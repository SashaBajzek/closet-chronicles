import * as types from './actionTypes';

export function addItem(item) {
	return { type: types.ADD_ITEM, item}
}

export function deleteItem(itemId) {
	return { type: types.DELETE_ITEM, itemId}
}

export function editItem(item) {
	return { type: types.EDIT_ITEM, item}
}

export function addOutfit(outfit) {
	return { type: types.ADD_OUTFIT, outfit}
}

export function deleteOutfit(outfitId) {
	return { type: types.DELETE_OUTFIT, outfitId}
}

export function editOutfit(outfit) {
	return { type: types.EDIT_OUTFIT, outfit}
}

export function setTopTypeFilter(filter) {
	return { type: types.SET_TOP_TYPE_FILTER, filter}
}

export function setBottomTypeFilter(filter) {
	return { type: types.SET_BOTTOM_TYPE_FILTER, filter}
}

export function setShoeTypeFilter(filter) {
	return { type: types.SET_SHOE_TYPE_FILTER, filter}
}

export function setCoatTypeFilter(filter) {
	return { type: types.SET_COAT_TYPE_FILTER, filter}
}

export function setAccessoryTypeFilter(filter) {
	return { type: types.SET_ACCESSORY_TYPE_FILTER, filter}
}

export function setColorFilter(filter) {
	return { type: types.SET_COLOR_FILTER, filter}
}

export function setPatternFilter(filter) {
	return { type: types.SET_PATTERN_FILTER, filter}
}

export function setOccassionFilter(filter) {
	return { type: types.SET_OCCASION_FILTER, filter}
}

export function setSleeveLengthFilter(filter) {
	return { type: types.SET_SLEEVELENGTH_FILTER, filter}
}