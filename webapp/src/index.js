import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
// import App2 from './components/app/App2';
import ErrorBoundary from './components/app/ErrorBoundary';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
			{/* <App2 /> */}
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root'),
);
