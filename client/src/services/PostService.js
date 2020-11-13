import ApiClient from './ApiClient'

export const __UploadPost = async (formData, userId) => {
    try {
        const res = await ApiClient.post(`/posts/${userId}`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetPosts = async (page, limit) => {
    try {
        const res = await ApiClient.get(`/posts`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetPost = async (postId) => {
    try {
        const res = await ApiClient.get(`/posts/${postId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __UpdatePost = async (formData, postId) => {
    try {
        const res = await ApiClient.put(`/posts/${postId}`, formData)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __DeletePost = async (postId) => {
    try {
        const res = await ApiClient.delete(`/posts/${postId}`)
        return res
    } catch (error) {
        throw error
    }
}
