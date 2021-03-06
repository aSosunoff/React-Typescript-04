import { IBook } from "../interfaces/IBook";

export interface IBookstoreServices {
    getBook: () => Promise<IBook[]>
}

export class BookstoreServices implements IBookstoreServices {
    date = [{
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 32,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard',
        price: 45,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    }];

    getBook = () => {
        return new Promise<IBook[]>((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Возникла ошибка'));
                } else {
                    resolve(this.date);
                }
            }, 700);
        });
    }
}