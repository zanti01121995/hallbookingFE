import { mongoUrl } from "./config";
let url = mongoUrl + "/bookroom";

export const bookRoom = async (data) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const book = await response.json();
  return book;
};

export const getAllBooks = async () => {
  const getUrl = url + "/allbookings";
  const response = await fetch(getUrl);
  const allBook = await response.json();
  return allBook;
};

export const getAllCustomer = async () => {
  const getUrl = url + "/customers";
  const response = await fetch(getUrl);
  const allBook = await response.json();
  return allBook;
};

export const getCustomer = async (val) => {
  const getUrl = url + `/customer/${val}`;
  const response = await fetch(getUrl);
  const customer = await response.json();
  return customer
};
