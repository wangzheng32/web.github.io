var NavigationBar = React.createClass({
	
	getDefaultProps:function(){
		
		return {
			leftItem:"left",
			title:"标题",
			rightItem:"right"
		}
	},
	
	render:function (){
		
		var barStyle = {
			width: "100%",
			height: "44px",
			backgroundColor:"#f1f1f1",
			textAlign:"center",
			lineHeight:"44px",
			borderBottom:"1px solid #ccc"
		}
		
		return <div style={barStyle}>
				{this.props.title}
		</div>;
	}
})


//封装一个搜索条组件，用于三个界面
var SearchBar = React.createClass({
	
	getInitialState:function(){
		return {"value":""}
	},
	
	render:function(){
		
		var searchBoxStyle = {
			width:"100%",
			height:"50px",
			borderBottom:"1px solid #ccc"
		}
		
		var searchInputStyle = {
			height:"72%",
			width:"70%",
			outline:"none",
			margin:"4px 0px 4px 5%"
		}
		
		var searchButtonStyle = {
			height:"77.5%",
			width:"20%",
			background:"blue",
			border:"none",
			color:"#fff"
		}
		
		return <div style={searchBoxStyle}>
			<input type="text" placeholder="请输入关键字" style={searchInputStyle} onChange={this.dealChange} value={this.state.value} />
			<input type="button" value="搜索" style={searchButtonStyle} onClick={this.myDealSearch} />
		</div>
	},
	dealChange:function(e){
		this.setState({
			value:e.target.value
		})
	},
	myDealSearch:function(){
		this.props.dealSearch(this.state.value);
	}
})