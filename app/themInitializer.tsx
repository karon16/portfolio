'use client';
import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch } from './lib/redux/hooks';
import { initializeTheme } from './lib/redux/features/theme/themeSlice';

interface ThemeInitializerProps {
	children: ReactNode;
}

const ThemeInitializer: React.FC<ThemeInitializerProps> = ({ children }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const root = window.document.documentElement;
			const theme = localStorage.getItem('theme');

			if (theme) {
				dispatch(initializeTheme(theme));
				if (theme === 'dark') {
					root.classList.add('dark');
					root.classList.remove('light');
				} else {
					root.classList.add('light');
					root.classList.remove('dark');
				}
			} else {
				dispatch(initializeTheme('dark'));
				localStorage.setItem('theme', 'dark');
				root.classList.add('dark');
			}
		}
	}, [dispatch]);

	return children;
};

export default ThemeInitializer;
