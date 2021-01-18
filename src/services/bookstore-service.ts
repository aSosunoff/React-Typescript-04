export interface IBookstoreServices {
    getBook(): any[]
}

export class BookstoreServices implements IBookstoreServices {
    getBook() {
        return [1, 2, 3];
    }
}