
var Navigationbar = React.createClass({
	getDefaultProps:function(){
		return {
			title:"标题",
			leftItem:"",
			rightItem:""
		}
	},
	dealLeftClick:function(){
		
	},
	dealRightClick:function(){
		
	},
	render:function(){
		var navStyle = {
			width:"100%",
			height:"44px",
			backgroundColor:"#f1f1f1",
			borderBottom:"1px solid #ccc",
			position:"fixed",
			top:"0px"
		};
		var leftStyle={
			float:"left",
			height:"100%",
			lineHeight:"44px",
			textAlign:"center",
			width:"15%"
		}
		var titleStyle={
			float:"left",
			height:"100%",
			lineHeight:"44px",                                
			textAlign:"center",
			width:"70%"
		}
		var rightStyle={
			float:"left",
			height:"100%",
			lineHeight:"44px",
			textAlign:"center",
			width:"15%"
		}
		
		return <div style={navStyle}>
			<div style={leftStyle} onClick={this.dealLeftClick}>{this.props.leftItem}</div>
			<div style={titleStyle}>{this.props.title}</div>
			<div style={rightStyle} onClick={this.dealRightClick}>{this.props.rightItem}</div>
		</div>
	}
})

var SearchBar = React.createClass({
	getInitialState:function(){
		return {"value":""}
	},
	render:function(){
		var btnStyle = {
			height:"83.5%",
			width:"20%",
			background:"blue",
			border:"none",
			color:"#fff"
		}
		var txtStyle = {
			height:"72%",
			width:"70%",
			outline:"none",
			margin:"4px 0px 4px 5%"
		}
		var boxStyle={
			width:"100%",
			height:"50px",
			borderBottom:"1px solid #ccc",
			marginTop:"44px"
		}
		return <div style={boxStyle}>
				<input style={txtStyle} type="text" placeholder="请输入关键字" onChange={this.dealChange} value={this.state.value}/>
				<input style={btnStyle} type="button" value="搜索"  onClick={this.myDealSearch} />
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
