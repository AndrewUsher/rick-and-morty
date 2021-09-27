import { useInfiniteQuery } from 'react-query'

const fetchCharacters = (page) => fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  .then(response => response.json())

const useGetCharacters = () => {
  return useInfiniteQuery('/characters', ({ pageParam = 1 }) => fetchCharacters(pageParam), { getNextPageParam: lastPage => lastPage.info.next?.slice(-1) })
}

export { useGetCharacters }
