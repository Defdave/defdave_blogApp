import axios from "axios"
import { useEffect, useState } from "react"

function useAxiosFetch(dataURL) {
    const [data, setData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchData = async (url) => {
            setIsLoading(true)

            try {
                const res = await axios.get(url, {
                    cancelToken: source.token
                })
                if (isMounted) {
                    setData(res.data)
                    setFetchError(null)
                }
            } catch (error) {
                if (isMounted) {
                    setFetchError(error.message)
                    setData([])
                }
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 2000)
            }
        }

        fetchData(dataURL)

        const cleanUp = () => {
            console.log("cleanUp function active")
            isMounted = false
            source.cancel()
        }

        return cleanUp
    }, [dataURL])

    return {data, fetchError, isLoading}
}

export default useAxiosFetch