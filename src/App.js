import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Row, Col, Container, CardDeck } from 'react-bootstrap';

import { Menu } from './components/Menu';
import { Book } from './components/Book';

const AppComponent = observer(
	class App extends Component {
		componentDidMount() {
			const { booksStore } = this.props;
			booksStore.fetchBooks();
		}
		render() {
			const { booksStore } = this.props;

			return (
				<div style={{ margin: 40, display: 'flex' }}>
					<Row>
						<Col>
							<h2>Книги</h2>
							<Menu
								fetchBooks={() => {
									booksStore.fetchBooks();
								}}
								setActiveCategory={(alias) => {
									booksStore.setActiveCategory(alias);
								}}
								categories={booksStore.books.categories}
								activeCategory={booksStore.books.activeCategory}
							/>
						</Col>
					</Row>
					<Container>
						<CardDeck>
							{booksStore.books.list.length > 0 ? (
								booksStore.books.list.map((book) => (
									<Book key={book.id} book={book} />
								))
							) : (
								<p>
									Нечего не найдено{' '}
									<span role='img' aria-label='jsx-a11y/aria-proptypes'>
										😢
									</span>
								</p>
							)}
						</CardDeck>
					</Container>
				</div>
			);
		}
	}
);

export default inject('booksStore')(AppComponent);
