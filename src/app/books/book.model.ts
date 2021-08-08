export class Book {
    constructor (
        public title: string, 
        public author: string,
        public coverPhotoURL: string,
        public isbnNumber: number,
        public price: number,
        public language: string, 
        public id?: number
        ) {

    }
}