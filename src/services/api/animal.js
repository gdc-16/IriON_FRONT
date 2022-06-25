import { get } from '../instance'

export const animalOne = (id) =>
get(`animal?id=${id}`).catch((error) => {
    console.log(error)
    alert('없는 동물입니다')
  })
export const animalAll = (offset, limit) =>
get(`animals?offset=${offset}&limit=${limit}`).catch((error) => {
    console.log(error)
  })