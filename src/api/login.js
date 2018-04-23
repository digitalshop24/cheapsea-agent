import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    email: username,
    password: password
  }
  return request({
    url: 'https://cheapsea.net/auth/sign_in',
    method: 'post',
    data
  })
}

export function registration(userInfo) {
  const data = {
    email: userInfo.email,
    password: userInfo.password,
    password_confirmation: userInfo.passwordConfirmation,
    confirm_success_url: '/login'
  }
  return request({
    url: 'https://cheapsea.net/auth',
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
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
