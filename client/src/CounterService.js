import axios from "axios";
const url = 'http://localhost:5000/api/counter/';

class CounterService {
  //Get Counter
  static getCounter() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;

        resolve(
          data.map(value => value)
        );
      } catch (err) {
        reject(err);
      }
    })
  }

  //Update Counter
  static updateCounter(id, number) {
    return axios.put(`${url}${id}`, {
      _id: id,
      counter: number,
    })
  }
}

export default CounterService;