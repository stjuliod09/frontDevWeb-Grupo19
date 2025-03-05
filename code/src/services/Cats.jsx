import Cookies from "universal-cookie";
const cookies = new Cookies();

const cabezeraSinToken = {
  "Content-Type": "application/json",
};
const Url = import.meta.env.VITE_URL_BACK;
const APIURL = ` ${Url}/cats`;
console.log(APIURL);
const CatService = {
  getAll: async function () {
    try {
      const url = APIURL + "/cats";
      console.log(url);
      const requestOptions = {
        method: "GET",
        headers: cabezeraSinToken,
        redirect: "follow",
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  create: async function (raw) {
    try {
      const url = APIURL + "/cats";
      const requestOptions = {
        method: "POST",
        headers: cabezeraSinToken,
        body: raw,
        redirect: "follow",
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  getId: async function (id) {
    try {
      const url = APIURL + `/cats/${id}`;
      console.log(url)
      const requestOptions = {
        method: "GET",
        headers: cabezeraSinToken,
        redirect: "follow",
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default CatService;
