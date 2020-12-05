import React from 'react'
import classes from './users.module.css'
import userPhoto from '../../../src/assets/user_no_image.png'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../types/types'

type PropsType = {
  user: UserType
  followingInProgress: number[]
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  key: number
}

const User: React.FC<PropsType> = ({
  user,
  followingInProgress,
  unfollow,
  follow,
  key,
}) => {
  return (
    <div key={key}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              alt='avatar'
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={classes.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </span>
      </span>
    </div>
  )
}

export default User
