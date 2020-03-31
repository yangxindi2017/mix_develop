import queryString from 'query-string'//解析成查询字符串
let rootUrl =  'https://www.fastmock.site/mock/965e809427b56112ba5f0e6c27ce2112/api';

let myFetch ={
    get(url,queryParams){
        url = rootUrl + url
        if(queryParams){
            url += "?"+queryString.stringify(queryParams);
        }
        return fetch(rootUrl+url)
        .then(res=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(res=>res.json()) 
        /**
         * res=>(箭头函数)
         * 
         * 如果后面没有大括号{}，则后面跟的就是这个函数的返回值
         * 
         * 若是后面跟大括号，里边写逻辑结构，
         * 要写return，才是此函数的返回值
         */
            
    }

}
export {myFetch};