import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/header';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang='en'>
			<body
				className={`px-24 bg-lightBg text:lightText dark:bg-darkBg dark:text-darkText ${inter.className}`}
			>
				<header>
					<Header />
				</header>
				{children}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
