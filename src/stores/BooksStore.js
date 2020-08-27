import { observable, decorate } from 'mobx';

const INITIAL_BOOKS_DATA = {
	list: [],
	activeCategory: null,
	categories: [
		{
			alias: 'psychology',
			name: 'психология',
			id: 1,
		},
		{
			alias: 'scienceTechnology',
			name: 'научные технологии',
			id: 2,
		},
		{
			alias: 'booksForChildren',
			name: 'книги для детей',
			id: 3,
		},
		{
			alias: 'businessLiterature',
			name: 'деловая литература',
			id: 4,
		},
		{
			alias: 'fantastic',
			name: 'Фантастика',
			id: 5,
		},
	],
};
class BooksStore {
	books = INITIAL_BOOKS_DATA;
	setActiveCategory(categoryAlias) {
		this.books.activeCategory = categoryAlias;
	}
	async fetchBooks() {
		const url =
			this.books.activeCategory !== null
				? `/api/books/${this.books.activeCategory}`
				: `/api/books`;
		const response = await fetch(url);
		this.books.list = await response.json();
	}
}

const DecoratedBooksStore = decorate(BooksStore, {
	books: observable,
});

const booksStore = new DecoratedBooksStore();
export default booksStore;
