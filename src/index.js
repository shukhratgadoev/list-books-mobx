import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Server } from 'miragejs';
import { Provider as MobXProvider } from 'mobx-react';

import booksStore from './stores/BooksStore';
import { Books } from './books';

const stores = {
	booksStore,
};

new Server({
	routes() {
		this.namespace = '/api';
		this.get('/books', () => {
			return Books;
		});
		this.get('/books/:category', (scheme, request) => {
			if (request.params.category === null) {
				return Books;
			}
			return Books.filter((book) => book.category === request.params.category);
		});
	},
});

ReactDOM.render(
	<MobXProvider {...stores}>
		<App />
	</MobXProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
