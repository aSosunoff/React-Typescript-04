import { IBook } from "../interfaces/IBook";

export interface IBookstoreServices {
    getBook(): IBook[]
}

export class BookstoreServices implements IBookstoreServices {
    getBook() {
        return [{
            id: 1,
            title: 'Production-Ready Mictoservices',
            author: 'Susan J. Fowler'
        }, {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard'
        }];
    }
}