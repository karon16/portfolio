import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

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
		},
		lightMode: (state) => {
			state.currentTheme = 'light';
		},
		darkMode: (state) => {
			state.currentTheme = 'dark';
		},
	},
});

export const { lightMode, darkMode, toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.currentTheme;

export default themeSlice.reducer;
