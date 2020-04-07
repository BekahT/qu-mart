export const Shipping: Shipping[] = [
    {
        "type": "Overnight",
        "price": 25.55
    },
    {
        "type": "Two-Day",
        "price": 10.75
    },
    {
        "type": "Regular",
        "price": 5.99
    }
];

export interface Shipping {
    type: string;
    price: number;
}
