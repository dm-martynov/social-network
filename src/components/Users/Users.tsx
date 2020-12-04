import React from 'react'
import { UserType } from '../../types/types'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({
  currentPage,
  pageSize,
  totalUsersCount,
  users,
  onPageChanged,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
      />
      <div>
        {users.map((user) => (
          <User
            user={user}
            key={user.id}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
