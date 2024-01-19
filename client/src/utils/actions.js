import axios from "axios";
import { formToObj, getToken } from "./helpers/common";

export async function sendSupportMessage(request) {
  const data = await formToObj(request)
  return await axios.post('/api/contact/', data, {
    validateStatus: () => true
  })
}

export async function createCoachingSession(request) {
  const data = await formToObj(request)
  return await axios.post('/api/coaching_sessions/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function loginUser(request) {
  try {
    console.log(request)
    const data = await formToObj(request)
    return await axios.post('/api/auth/login/', data, {
      validateStatus: () => true
    })
  } catch (error) {
    console.log(error)
    return error
  }
}