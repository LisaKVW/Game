import ApiClient from './ApiClient'

export const __CreateComment = async (formData) => {
  console.log(formData)
  try {
    const res = await ApiClient.post('/comment/:post_id', formData)
    return res.data
  } catch (error) {
    throw error
  }
}