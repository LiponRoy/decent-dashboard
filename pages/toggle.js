import React from 'react';
import { ThemeContext } from './getInitialTheme';

const toggle = () => {
	const [theme, setTheme] = React.useContext(ThemeContext);
	return theme === 'dark' ? (
		<>
			<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Bakom 1</button>
		</>
	) : (
		<>
			<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Bakom 2</button>
		</>
	);
};

export default toggle;
