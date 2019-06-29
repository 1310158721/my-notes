import { httpGet, httpPost } from './request'

// 菜单列表信息
interface MenuList {
    user?: string;
}
export async function getMenuList(params: MenuList = {}) {
    const url = 'getMenuList'
    const res = await httpGet(url, params)
    const menuList = res.data.Menu
    return menuList
}

export async function testPost(params: MenuList = {}) {
    const url = 'testPost'
    const res = await httpPost(url, params)
    console.log(res)
}
