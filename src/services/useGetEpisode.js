import { useQuery } from 'react-query'

const fetchEpisode = (id) => fetch(`https://rickandmortyapi.com/api/episode/${id}`)
  .then(response => response.json())

const useGetEpisode = (id) => {
  return useQuery(['/episode', id], () => fetchEpisode(id), { enabled: !!id })
}

export { useGetEpisode }
