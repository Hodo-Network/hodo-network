export type NFTProps = {
    id: string;
    group: string;
    img: string;
    name: string;
    rarity: string;
    description: string;
    cost: number;
    className?: string;
    location: {
        lat: number;
        lng: number;
        zoom: number;
    }
}
