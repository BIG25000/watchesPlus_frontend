import { useContext } from 'react'
import { SearchContext } from '../features/search/context/SearchContext'

export default function useSearch() {
    return useContext(SearchContext)
}
