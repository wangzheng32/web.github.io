var Navigationbar = React.createClass({
				getDefaultProps:function(){
					return {
						title:"标题",
						leftItem:"left",
						rightItem:"right"
					}
				},
				dealLeftClick:function(){
					alert(this.props.leftItem);
				},
				dealRightClick:function(){
					alert(this.props.rightItem);
				},
				render:function(){
					var navStyle = {
						width:"100%",
						height:"44px",
						backgroundColor:"#f1f1f1",
						borderBottom:"1px solid #ccc"
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