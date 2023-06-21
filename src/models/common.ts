/*
 * @Description: 
 * @Author: 
 * @Date: 2023-06-02 16:38:32
 * @LastEditTime: 2023-06-21 14:45:52
 * @LastEditors: 
 * @Reference: 
 */
export declare interface response {
    code: number
    success: boolean
    msg: string
}
export declare interface responseOpts<T> extends response {
    data: T
}

export declare interface RespinsePosiOpts extends response {
    data: {
        locations: []
    }
}