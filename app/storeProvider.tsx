'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './lib/redux/store';
// import { themeSlice } from './lib/redux/features/theme/themeSlice';

export default function StoreProvider({
	// theme,
	children,
}: {
	// theme: string;
	children: React.ReactNode;
}) {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		// Create the store instance the first time this renders
		storeRef.current = makeStore();
		// storeRef.current.dispatch();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
