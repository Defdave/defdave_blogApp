import { createContext, useEffect, useState } from 'react'
import useAxiosFetch from '../hooks/useAxiosFetch'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResult] = useState([])
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:5000/posts')

    useEffect(() => {
        setPosts(data)
    }, [data])

    useEffect(() => {
        const filteredPost = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()))

        setSearchResult(filteredPost.reverse())
    }, [posts, search])
    return (
        <DataContext.Provider value={
            {
                posts, setPosts,
                search, setSearch,
                searchResults, fetchError, isLoading
            }
        }>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext