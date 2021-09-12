import { useInfiniteQuery } from 'react-query'

const fetchEpisode = (page) => fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
  .then(response => response.json())

const useGetLocations = () => {
  return useInfiniteQuery('/locations', ({ pageParam = 1 }) => fetchEpisode(pageParam), { getNextPageParam: lastPage => lastPage.info.next?.slice(-1) })
}

export { useGetLocations }
