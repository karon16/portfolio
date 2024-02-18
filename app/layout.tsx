import type { Metadata } from 'next';
import { Anek_Kannada } from 'next/font/google';
import './globals.css';
import Header from './ui/header';
import StoreProvider from './storeProvider';

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
			<html lang='en'>
				<body
					className={`px-28 bg-lightBg text:lightText dark:bg-darkBg dark:text-darkText ${anek.className}`}
				>
					<header>
						<Header />
					</header>
					{children}
					<footer>Footer</footer>
				</body>
			</html>
		</StoreProvider>
	);
}
