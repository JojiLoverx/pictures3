import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=HIbs4qIH8mS6EI2l88CK7llO2apuCUSq88zx9zLTJ48'
    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(term)
    console.log(response.data.results)

    return response.data.results
}

export default searchImage