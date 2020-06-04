import React ,{PureComponent} from 'react';
import {
    WriterWrapper,
    WriterHeader,
    HeaderLeft,
    HeaderRight,
    WriterItem,
    WriterImg,
    WriterName,
    WriterIntro,
    WriterFollow
} from '../style';

class Writer extends PureComponent{
    render() {
        return (
            <>
                <WriterHeader>
                    <HeaderLeft>推荐作者</HeaderLeft>
                    <HeaderRight>换一换</HeaderRight>
                </WriterHeader>
                <WriterWrapper>
                    <WriterItem>
                        <WriterImg/>
                        <WriterName></WriterName>    
                        <WriterIntro></WriterIntro>
                        <WriterFollow>关注</WriterFollow>
                    </WriterItem>  
                </WriterWrapper>
            </>
    )
    }
}
export default Writer;