import { useQuery } from "react-query"

const fetchCharacter = (id) => fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => response.json())

const useGetCharacter = (id) => {
  return useQuery(['/character', id], () => fetchCharacter(id), { enabled: !!id })
}

export { useGetCharacter }
