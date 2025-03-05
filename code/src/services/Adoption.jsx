import Cookies from 'universal-cookie';
const cookies = new Cookies();

const cabezeraSinToken = {
  "Content-Type": "application/json",
};
const Url = import.meta.env.VITE_URL_BACK;
const APIURL = ` ${Url}/solicitudes`;

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
      console.log(requestOptions)
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
