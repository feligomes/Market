export const getProducts = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products?limit=18"
  ).then((response) => response.json());
  return response;
};
