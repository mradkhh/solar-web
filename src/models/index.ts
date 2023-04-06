
export type Category = {
    id: number;
    name: string;
    photo: {
        link: string
    }
};

export interface ILogin {
    password: string
    phoneNumber: string
}