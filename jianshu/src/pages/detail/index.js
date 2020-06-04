import React ,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
    DetailWrapper,
    Header,
    Content
} from './style'

class Detail extends PureComponent{
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                   
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail();
    }
}

const mapStateToProps=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});

const mapDisPatchToProps=(dispatch)=>({
    getDetail(){
        dispatch(actionCreators.getDetail())
    }
});

export default connect(mapStateToProps,mapDisPatchToProps)(Detail);