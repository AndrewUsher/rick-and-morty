import { useInfiniteQuery } from "react-query"

const fetchEpisodes = (page) => fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
  .then(response => response.json())

const useGetEpisodes = () => {
  return useInfiniteQuery('/episodes', ({ pageParam = 1 }) => fetchEpisodes(pageParam), { getNextPageParam: lastPage => lastPage.info.next?.slice(-1) })
}

export { useGetEpisodes }
