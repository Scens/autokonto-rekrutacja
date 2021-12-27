export interface Cookie {
    id?: number;
    userId: number;
    name: string;
    quantity: number;
    bakingDate: Date;
    veganFriendly: boolean;
    imgSrc?: string;
}