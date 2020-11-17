import ApiClient from './ApiClient'

export const __CreateComment = async (formData) => {
  console.log('create comment', formData)
  try {
    const res = await ApiClient.post('/comments/add', formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetComments = async (page) => {
  try {
    const res = await ApiClient.get(`/comments`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __RemoveComment = async (commentId) => {
  try {
    const res = await ApiClient.delete(`/comments/${commentId}`)
    return res
  } catch (error) {
    throw error
  }
}