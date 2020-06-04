import React ,{PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {actionCreators} from './store'; 
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        className="banner-img" 
                        src="http://upload-images.jianshu.io/upload_images/9073718-961643f4ce827225.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                        alt=""
                    />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null
                }
                </HomeWrapper>
        )
    }
    componentDidMount(){
            this.props.changeHomeData();
            this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    componentWillUnmount(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    }

const mapStateToProps=(state)=>({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatchToProps=(dispatch)=>({
    changeHomeData(){
        const action=actionCreators.getHomeInfo();
        dispatch(action);//返回的是一个函数
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home)