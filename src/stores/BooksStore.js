import { observable, action,  /*computed */ } from 'mobx';

const INITIAL_BOOKS_DATA =  {
    fetchedBooks: [],
    activeCategory: null,
    categories: [
        {
            alias: "psychology",
            name: "психология",
            id: 1
        },
        {
            alias: "scienceTechnology",
            name: "научные технологии",
            id: 2
        }, 
        {
            alias: "booksForChildren",
            name: "книги для детей",
            id: 3
        }, 
        {
            alias: "businessLiterature",
            name: "деловая литература",
            id: 4
        }
    ]
}
class BooksStore {
    // eslint-disable-next-line no-undef
    @observable books = INITIAL_BOOKS_DATA;
}
  
const booksStore = new BooksStore();
export default BooksStore;
