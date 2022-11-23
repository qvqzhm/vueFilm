import request from "@/api/request";

export const reqHot = (id) =>request({
    // url:`https://m.maizuo.com/gateway?cityId=${id}&pageNum=1&pageSize=10&type=1&k=3324325`,
    // headers:{
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16620354251457183619284993","bc":"440100"}',
    //     'X-Host': 'mall.film-ticket.film.list'
    // }
    url:`/hot/api/hot?cityId=${id}`
})

export const reqComming = (id) =>request({
    url:`/comming/ajax/comingList?token=&limit=20&ci=${id}`
})

export const reqCinema = (cityid)=>request({
    url:`https://m.maizuo.com/gateway?cityId=${cityid}&ticketFlag=1&k=5672497`,
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16620354251457183619284993"}',
        'X-Host': 'mall.film-ticket.cinema.list'
    }
    // url:`/cinema/ajax/moreCinemas?movieId=0&day=2022-10-13&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1665640678355&cityId=20&optimus_uuid=768505603F0C11ED8BF9DBEE7C0930AEADE469DBBE3442C4ADB1EAEC6FB645F7&optimus_risk_level=71&optimus_code=10`
})

export const reqChangeCinema = (cityid)=>request({
    url:`/changeCinema/ajax/filterCinemas?ci=${cityid}&optimus_uuid=768505603F0C11ED8BF9DBEE7C0930AEADE469DBBE3442C4ADB1EAEC6FB645F7&optimus_risk_level=71&optimus_code=10`
})

export const reqCity = ()=>request({
    url:'/city/api/city'
})

export const reqMaizuoCity = () =>request({
    url:'https://m.maizuo.com/gateway?k=2650294',
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16620354251457183619284993","bc":"440100"}',
        'X-Host': 'mall.film-ticket.city.list'
    }
})

export const reqDetail = (filmId) =>request({
    // url:`https://m.maizuo.com/gateway?filmId=${filmId}&k=7673902`,
    // headers:{
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16620354251457183619284993"}',
    //     'X-Host': 'mall.film-ticket.film.info'
    // }
    // https://m.maoyan.com/ajax/detailmovie?movieId=1203734
    // url:`/detail/ajax/moreComingList?token=&movieIds=${filmId}&optimus_uuid=768505603F0C11ED8BF9DBEE7C0930AEADE469DBBE3442C4ADB1EAEC6FB645F7&optimus_risk_level=71&optimus_code=10`
    url:`/detail/ajax/detailmovie?movieId=${filmId}`
})

export const reqMore = (id) =>request({
    url:`/more/ajax/moreComingList?token=&movieIds=${id.join(',')}&optimus_uuid=768505603F0C11ED8BF9DBEE7C0930AEADE469DBBE3442C4ADB1EAEC6FB645F7&optimus_risk_level=71&optimus_code=10`
})

export const reqVideo = (fid,tid,os) =>request({
    url:`/video/asgard/asgardapi/sns/common/feed/channel/list.json?uuid=768505603F0C11ED8BF9DBEE7C0930AEADE469DBBE3442C4ADB1EAEC6FB645F7&channelId=4&feedChannelId=${fid}&timestamp=${tid}&offset=${os}&limit=15`
})

export const reqMVideo = () =>request({
    url:`/mv/asgard/asgardapi/sns/common/feed/channel/list.json?uuid=768505603F0C11ED8BF9DBEE7C0930AEADE469DBBE3442C4ADB1EAEC6FB645F7&channelId=4&feedChannelId=105&timestamp=1665727752150&offset=10`
})


export const reqRegister = (username,password) =>request({
    data:{
        username:username,
        password:password
    },
    method:'POST',
    url:'http://localhost:3000/api/register'
})