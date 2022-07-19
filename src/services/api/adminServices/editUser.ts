import apiService from '../api'

export async function editUser(
  name: string | undefined,
  email: string | undefined,
  phone: string | undefined,
  state: string | undefined,
  city: string | undefined,
) {
  const userSuperAdmin = await localStorage.getItem('@eupescador/userSuperAdmin')

  if (userSuperAdmin === 'true') {
    const token: string = 'config.ADMIN_CONFIRMATION_CODE'
    const res = await apiService.put('/admin/', {
      name,
      email,
      phone,
      state,
      city,
      token,
    })
    return res
  } else {
    const token: string = 'não-sou-admin'
    const res = await apiService.put('/admin/', {
      name,
      email,
      phone,
      state,
      city,
      token,
    })
    return res
  }
}
