import axios from "axios";

const baseURL = 'https://api.github.com/users/'

const token_git = 'Bearer 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'

const api = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: token_git
    }
})

export default api