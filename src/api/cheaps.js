import request from '@/utils/request'

export function fetchCity(query) {
  return request({
    url: 'api/cities/autocomplete',
    method: 'post',
  })
}
export function fetchAirlines(query) {
  return request({
    url: 'api/airlines/autocomplete',
    method: 'post',
  })
}
