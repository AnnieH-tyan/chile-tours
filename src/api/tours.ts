export interface Tour {
  id: number;
  name: string;
  location: string;
  imgPath: string;
  description: string;
  price: number;
}

export const getTours = async (): Promise<Tour[]> => {
  const toursData = await fetch("http://localhost:3000/api/v1/tours");
  const result = await toursData.json();

  return result;
};

export const getToursInCart = async (productIDs: number[]): Promise<Tour[]> => {
  const toursInCart = await fetch("http://localhost:3000/api/v1/toursInCart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productIDs }),
  });
  const result = await toursInCart.json();

  return result;
};
