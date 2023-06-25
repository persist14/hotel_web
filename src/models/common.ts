/*
 * @Description: 
 * @Author: 
 * @Date: 2023-06-02 16:38:32
 * @LastEditTime: 2023-06-25 14:47:40
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
export declare interface response {
    code: number
    success: boolean
    msg: string
}
export declare interface responseOpts<T> extends response {
    data: T
    access_token: string
}

export declare interface RespinsePosiOpts extends response {
    data: {
        locations: []
    }
}