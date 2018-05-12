import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    email: username,
    password: password
  }
  return request({
    url: '/api/auth',
    method: 'post',
    data
  })
}

export function registration(userInfo) {
  const data = {
    email: userInfo.email,
    password: userInfo.password,
    password_confirmation: userInfo.passwordConfirmation,
    name: userInfo.name
  }
  return request({
    url: '/api/v1/profile',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/api/v1/profile',
    method: 'get',
    params: { token }
  })
}
