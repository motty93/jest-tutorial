import axios from 'axios'

export const fetchData = (n) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${n}`)
}
