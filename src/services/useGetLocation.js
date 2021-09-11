import { useQuery } from "react-query"

const fetchLocation = (id) => fetch(`https://rickandmortyapi.com/api/location/${id}`)
  .then(response => response.json())

const useGetLocation = (id) => {
  return useQuery(['/location', id], () => fetchLocation(id), { enabled: !!id })
}

export { useGetLocation }
