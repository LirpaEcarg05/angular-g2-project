export interface Device {
    id?: number;
    name: string;
    brand: string;
    model: string;
    year: string;
    serial: string;
}

export interface Post{
    name: string;
    username: string;
    email: string;
}

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address:{
        street: string,
        suite: string,
        city: string,
        zipcode: string;
        geo:{
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company:{
        name: string;
        catchPhrase: string;
        bs: string;
    }
}