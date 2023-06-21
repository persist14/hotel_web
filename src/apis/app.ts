/*
 * @Description: 
 * @Author: 
 * @Date: 2023-06-21 11:13:06
 * @LastEditTime: 2023-06-21 14:48:32
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import http from '@/utils/http'
import { RespinsePosiOpts } from '@/models/common'
export const transPos = async (params: any) => {
    const response: RespinsePosiOpts = await http.get('/trans', {
        params: {
            ...params
        }
    })
    return {
        response
    }
    
}