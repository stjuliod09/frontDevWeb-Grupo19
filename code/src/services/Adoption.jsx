import Cookies from 'universal-cookie';
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
const APIURL = ` ${Url}/solicitudes`;
const APIURL2 = ` ${Url}`;


const AdoptionService = {
  create: async function (raw) {
    try {
      const url = APIURL + "/solicitudes";
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
  getAll: async function () {
    try {
      const url = APIURL + "/solicitudes";
      const requestOptions = {
        method: "GET",
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
  updateAdoption: async function (id, raw) {
    try {
      const url = APIURL2 + `/cats/cats/${id}/status`;
      const requestOptions = {
        method: "PATCH",
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

export default AdoptionService;
