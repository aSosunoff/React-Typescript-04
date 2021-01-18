export interface IBookstoreServices {
    getBook(): any[]
}

export class BookstoreServices implements IBookstoreServices {
    getBook() {
        return [];
    }
}