
export interface Tour {
    id: number;
    name: string;
    location: string;
    imgPath: string;
    description: string;
    price: number;
}

export const getTours = async(): Promise<Tour[]> => {
    const toursData = await fetch('http://localhost:3000/api/v1/tours')
    const result = await toursData.json()

    return result
}