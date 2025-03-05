import Cookies from "universal-cookie";
const cookies = new Cookies();

const token=localStorage.getItem('tokenAdmin')
const cabezeraSinToken = {
  "Content-Type": "application/json",
};

const cabezeraConToken = {
  "Content-Type": "application/json",
  "authorization": `Bearer ${token}`,
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
        headers: cabezeraConToken,
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
  update: async function (id, raw) {
    try {
      const url = APIURL + `/cats/${id}`;
      console.log(url)
      const requestOptions = {
        method: "PUT",
        body: raw,
        headers: cabezeraConToken,
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
  updateImg: async function (id, raw) {
    try {
      const url = APIURL + `/cats/${id}/images`;
      console.log(url)
      const requestOptions = {
        method: "POST",
        body: raw,
        headers: cabezeraConToken,
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
