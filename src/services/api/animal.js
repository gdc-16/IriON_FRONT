import { get } from '../instance'

export const animalOne = (id) =>
get(`animal?id=${id}`).catch((error) => {
    console.log(error)
    alert('없는 동물입니다')
  })

export const animalAll = () =>
get(`animals?offset=0&limit=15`).catch((error) => {
    console.log(error)
  })