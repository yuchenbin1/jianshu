import styled from 'styled-components';

export const HomeWrapper=styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`

export const HomeLeft=styled.div`
    margin-left:15px;
    width:625px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:240px;
    }
`

export const HomeRight=styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper=styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-right:-18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem=styled.div`
    float:left;
    height:32px;
    line-height:32px;
    padding-right:10px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-right:18px;
    margin-bottom:10px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`
export const ListItem=styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    color:#999;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`
export const ListInfo=styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
    }
`

export const RecommendWrapper=styled.div`
    margin:30px 0;
    width:280px;
`

export const RecommendItem=styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`

export const WriterWrapper=styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
    line-height:300px;
    text-align:center;
`

export const WriterHeader=styled.div`
    line-height；14px;
    margin-bottom:20px;
    color:#969696;
    position:relative;
`
export const HeaderLeft=styled.span`
    font-size:14px;
`
export const HeaderRight=styled.span`
    position:absolute;
    right:0;
    font-size:14px;
`
export const WriterItem=styled.div`
    overflow:hidden;
    width:278px;
    height:60px;
    
`

export const WriterImg=styled.div`
    width:48px;
    height:48px;
    border:1px solid #ddd;
    border-radius:50%;
    background:url('https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp')
    background-size:100%;
    margin:5px 0;
    float:left;
`
export const WriterName=styled.div`
    border:1px solid #ddd;
    font-size:14px;
    
`
export const WriterIntro=styled.div`
    border:1px solid #ddd;
`
export const WriterFollow=styled.button`
    border:1px solid #ddd;
`


export const LoadMore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`
export const BackTop=styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
    cursor:pointer;
`