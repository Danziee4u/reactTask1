let container = document.getElementById('container');  


class Myh1 extends React.Component{
    render(){
        return React.createElement('h1',null, this.props.linkText);
    }
}

var task1 = React.createElement(Myh1,{linkText:'Hazrat Abu Ubaida Bin Jarrah RZ'});


ReactDOM.render(
    React.createElement('div',null,task1),
    container);