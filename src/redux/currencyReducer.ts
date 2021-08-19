

interface currencyState {
	currency: any[];
	loading: boolean;
	error: null | string;
}

const initialState: currencyState = {
	currency: [],
	loading: false,
	error: null
}

export const currencyReducer = (state = initialState, action) => {
	switch (action.type) {

	}
}