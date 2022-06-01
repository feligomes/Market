export const getProducts = async (limit) => {
  const response = await fetch(
    `https://fakestoreapi.com/products?limit=${limit}`
  ).then((response) => response.json());
  return response;
};
