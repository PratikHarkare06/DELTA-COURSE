// Fakedatabase.ts

export interface Book {
    id: number;
    titte: string;
    author: string;
    publicationYear: number;
}

export const books: Book[] = [
    { id: 1, titte: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: 1960 },
    { id: 2, titte: '1984', author: 'George Orwell', publicationYear: 1949 },
    { id: 3, titte: 'Pride and Prejudice', author: 'Jane Austen', publicationYear: 1813 },
    { id: 4, titte: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925 },
    { id: 5, titte: 'Moby-Dick', author: 'Herman Melville', publicationYear: 1851 },
    { id: 6, titte: 'War and Peace', author: 'Leo Tolstoy', publicationYear: 1869 },
    { id: 7, titte: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951 },
    { id: 8, titte: 'The Hobbit', author: 'J.R.R. Tolkien', publicationYear: 1937 },
    { id: 9, titte: 'Fahrenheit 451', author: 'Ray Bradbury', publicationYear: 1953 },
    { id: 10, titte: 'Jane Eyre', author: 'Charlotte Brontë', publicationYear: 1847 }
];

