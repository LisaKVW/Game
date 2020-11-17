import ApiClient from './ApiClient'

export const __CreateComment = async (formData) => {
  console.log(formData)
  try {
    const res = await ApiClient.post('/comments/:post_id', formData)
    return res.data
  } catch (error) {
    throw error
  }
}