import ApiClient from './ApiClient'

// this the AddNew - used in feedCreate
export const __UploadPost = async (formData) => {
    console.log(formData)
    try {
        const res = await ApiClient.post('/posts/add', formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetPosts = async (page) => {
    try {
        const res = await ApiClient.get(`/posts`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetPostById = async (postId) => {
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

