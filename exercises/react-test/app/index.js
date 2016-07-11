var React = require("react"); 
var ReactDom = require("react-dom"); 

var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hello World!</h1> 
        )
    }
}); 

ReactDom.renderTo(
    <HelloWorld/>, document.getElementById("app")
)