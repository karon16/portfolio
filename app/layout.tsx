import type { Metadata } from 'next';
import { Anek_Kannada } from 'next/font/google';
import './globals.css';
import Header from './ui/header';
import StoreProvider from './storeProvider';
import ThemeInitializer from './themInitializer';

const anek = Anek_Kannada({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Portfolio Christopher Buhendwa',
	description:
		'Welcome to my portfolio, I am a frontend developer and AI student currently studying in South Korea.',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<StoreProvider>
			<ThemeInitializer>
				<html lang='en'>
					<body
						className={`px-36 bg-lightBg text:lightText dark:bg-darkBg dark:text-darkText ${anek.className}`}
					>
						<header>
							<Header />
						</header>
						{children}
						<footer>Footer</footer>
					</body>
				</html>
			</ThemeInitializer>
		</StoreProvider>
	);
}
