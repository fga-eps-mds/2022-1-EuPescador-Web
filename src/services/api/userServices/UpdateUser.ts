import { ResI } from '../interfaces'
import { userService } from './userService'

export interface UserI {
    admin: boolean
    city: string
    email: string
    id: string
    name: string
    password?: string
    phone: string
    state: string
    superAdmin: boolean
}

export async function UpdateUser(user_id: string, token: string, user: UserI) {
    const userToken = `Bearer ${token}`
    const res: ResI = await userService.put(
        `/user/${user_id}`,
        {
            user_id: user_id,
            ...user
        },
        { headers: { Authorization: userToken } },
    )
    return res.data

}




