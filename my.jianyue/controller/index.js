var {Router,Route,IndexRoute,IndexLink,Link} = ReactRouter;
			var App = React.createClass({
				render:function(){
					var tabbarStyle={
						width:"100%",
						position:"fixed",
						bottom:0,
						height:"49px",
						background:"#000"
					}
					var itemStyle = {
						float:"left",
						width:"33.3%",
						height:"100%",
						lineHeight:"49px",
						color:"#fff",
						textAlign:"center",
						textDecoration:"none"
					}
					return <div>
						<div>
							{this.props.children}
						</div>
						<div style={tabbarStyle}>
							<IndexLink style={itemStyle} to="/">图书</IndexLink>
							<Link style={itemStyle} to="/music">音乐</Link>
							<Link style={itemStyle} to="/movie">电影</Link>
						</div>
					</div>
				}
			})
			ReactDOM.render(
				<Router>
					<Route path="/" component={App}>
						<IndexRoute component={Book} />
						<Route path="/Music" component={Music} />
						<Route path="/BookDetail/:id" component={BookDetail} />
						<Route path="/MusicDetail/:id" component={MusicDetail} />
						<Route path="/MovieDetail/:id" component={MovieDetail} />
						<Route path="/Movie" component={Movie} />
					</Route>
				</Router>,
				document.getElementById("example")			
			);