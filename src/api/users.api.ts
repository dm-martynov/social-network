import { GetItemsType, instance, APIResponseType } from './index.api'

export const UsersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data
      })
  },
  deleteFollowing(userId: number) {
    return instance
      .delete<APIResponseType>(`follow/${userId}`)
      .then((res) => res.data)
  },
  addFollowing(userId: number) {
    return instance.post<APIResponseType>(`follow/${userId}`).then((res) => {
      return res.data
    })
  },
}
