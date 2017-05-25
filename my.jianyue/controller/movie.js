var MovieCell = React.createClass({
	render:function(){
		var titleStyle = {
			color:"green"
		}
		var cellStyle = {
			width:"98%",
			margin:"0 1%",
			background:"#fff",
			marginBottom:"10px",
			padding:"0 0 10px 0",
			overflow:"hidden"
			
		}
		var leftStyle = {
			float:"left",
			height:"100%",
			width:"28%",
			marginLeft:"2%"
		}
		var imageStyle = {
			width:"100%",
			height:"100%"
		}
		var movieMsgStyle = {
			float:"left",
			height:"100%",
			width:"65%",
			margin:"0 2.5%"
		}
		var movieItemStyle = {
			width:"100%",
			fontSize:"14px",
			color:"#888",
			height:"27px"
		}
		var btnStyle = {
			display:"block",
			background:"#fff",
			color:"#000",
			padding:"5px 15px",
			border:"1px solid #0091FF",
			borderRadius:"5px",
			outline:"none"
		}
		var linkStyle = {
			color:"#000",
			textDecoration:"none"
		}
		return <Link to={"/MovieDetail/"+this.props.model.id} style={linkStyle}>
		<div style={cellStyle}>
			<div style={leftStyle}><img style={imageStyle} src={this.props.model.images.large}/></div>
			<div style={movieMsgStyle}>
				<p style={movieItemStyle}><span style={titleStyle}>名称 </span>{this.props.model.title}</p>
				<p style={movieItemStyle}><span style={titleStyle}>演员 </span>{this.props.model.directors[0].name}</p>
				<p style={movieItemStyle}><span style={titleStyle}>评分 </span>{this.props.model.rating.average}</p>
				<p style={movieItemStyle}><span style={titleStyle}>年份 </span>{this.props.model.year+"年"}</p>
				<p style={movieItemStyle}><span style={titleStyle}>标签 </span>{this.props.model.genres.map(function(item){
					return <span>{item+" "}</span> 
				})}</p>
				<p style={movieItemStyle}><button style={btnStyle}>去豆瓣</button></p>
			</div>
		</div>
		</Link>
	}
})
var Movie = React.createClass({
				getInitialState:function(){
					return {"list":[]}
				},
				componentDidMount:function(){
					var url = movieListUrl;
					var self = this;
					$.get(url,function(data){
						var dict = JSON.parse(data).subjects;
						console.log(dict);
						self.setState({
							list:dict
						})
					})
				},
				render:function(){
					var tableViewStyle = {
						paddingBottom:"50px"
					}
					return <div style={tableViewStyle}>
						<Navigationbar title="电影"/>
						<SearchBar/>
						<div>
							{this.state.list.map(function(item){
								return <div>
									<MovieCell model={item}/>
								</div>
							})}
						</div>
					</div>
				}
			})
var MovieDetail = React.createClass({
	getInitialState:function(){
				return {"image":"",
				"title":"",
				"actor":"",
				"grade":"",
				"time":"",
				"sign":"",
				"summary":""}
	},
	componentDidMount:function(){
		var url = movieDetailUrl;
		var self = this;
		$.get(url,function(data){
			var dict = JSON.parse(data);
			console.log(dict)
			self.setState({
				image:imgPreFixUrl+dict.image,
				title:dict.title,
				actor:dict.attrs.director[0],
				time:dict.attrs.year[0],
				grade:dict.rating.average,
				sign:dict.attrs.movie_type,
				summary:dict.summary
			})
		})
	},
	render:function(){
		var spanStyle = {
			color:"#189DFF"
		}
		var imgStyle = {
			float:"left",
			width:"25%",
			height:"150px"
		}
		var msgStyle = {
			width:"72%",
			float:"left",
			height:"100%",
			paddingLeft:"3%"
		}
		var topStyle = {
			overflow:"hidden",
			padding:"10px",
			borderBottom:"1px dotted #ccc",
			background:"#fff",
			marginTop:"44px"
			
		}
		var btnStyle = {
			clear:"both",
			display:"block",
			background:"#fff",
			color:"#62D577",
			border:"1px solid #62D577",
			padding:"5px 10px",
			outline:"none",
			fontSize:"18px"
		}
		var infoStyle = {
			width:"100%",
			marginTop:"10px",
			background:"#fff"
		}
		var summaryStyle = {
			fontSize:"14px",
			padding:"5px 5px 50px 5px"
		}
		return <div>
			<Navigationbar title="电影详情"/>
				<div style={topStyle}>
					<img style={imgStyle} src={this.state.image} />
					<div className="bookMsg" style={msgStyle}>
						<p><span style={spanStyle}>名称 : </span>{this.state.title}</p>
						<p><span style={spanStyle}>演员 : </span>{this.state.actor}</p>
						<p><span style={spanStyle}>评分 : </span>{this.state.grade}</p>
						<p><span style={spanStyle}>年份 : </span>{this.state.time+"年"}</p>
						<p><span style={spanStyle}>标签 : </span>{this.state.sign+""}</p>
					</div>
				</div>
					
				<div style={infoStyle}>
					<button style={btnStyle}>电影简介</button>
					<p style={summaryStyle}>{this.state.summary}</p>
				</div>
		</div>
	}
})
