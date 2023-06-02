import http from '@/utils/http'
import { UserOpts } from '@/models/login'
import { responseOpts } from '@/models/common'

// 登录
export const login = async (data: UserOpts) => {
    const response = await http.post('/login', data)
    console.log(response);
}

// 注册
export const register = async (data: UserOpts): Promise<responseOpts<any>> => {
    const response = await http.post('/register', data)
    return response.data
}