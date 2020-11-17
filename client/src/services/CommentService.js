import ApiClient from './ApiClient'

export const __CreateComment = async (formData) => {
  console.log('create comment', formData)
  try {
    const res = await ApiClient.post('/comments/', formData)
    return res.data
  } catch (error) {
    throw error
  }
}