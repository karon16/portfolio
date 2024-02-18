import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

let root: any;

if(typeof window !== 'undefined' &&
window.document  ){
		root = window.document.documentElement;	
}
export interface ThemeState {
	currentTheme: string;
}

const initialState: ThemeState = {
	currentTheme: 'dark',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
			if(state.currentTheme === 'light'){
				localStorage.setItem('theme', 'light');
				root.classList.remove('dark');
				root.classList.add('light');
			}else{
				localStorage.setItem('theme', 'dark');
				root.classList.remove('light');
				root.classList.add('dark');
			}
		},
		initializeTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;

    }
		
	},
});

export const { initializeTheme,  toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.currentTheme;

export default themeSlice.reducer;
