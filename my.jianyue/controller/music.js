var MusicCell = React.createClass({
	render:function(){
		var titleStyle = {
			color:"green"
		}
		var cellStyle = {
			width:"98%",
			margin:"0 1%",
			background:"#fff",
			marginBottom:"10px",
			padding:"0 0 10px 0"
			
		}
		var imgStyle = {
			display:"block",
			height:"100px",
			width:"100px",
			borderRadius:"50%",
			margin:"0 auto"
		}
		var songMsgStyle = {
			width:"100%",
			overflow:"hidden",
			fontSize:"14px"
		}
		var songItemStyle = {
			marginLeft:"20%",
			width:"30%",
			float:"left",
			fontSize:"14px",
			whiteSpace:"nowrap",
			textOverflow:"ellipsis",
			overflow:"hidden",
			color:"#888"
		}
		var btnStyle = {
			display:"block",
			background:"#4CD964",
			color:"#fff",
			padding:"8px 15px",
			margin:"0 auto",
			border:"none",
			borderRadius:"5px",
			outline:"none"
		}
		var linkStyle = {
			color:"#000",
			textDecoration:"none"
		}
		return <Link to={"/MusicDetail/"+this.props.model.id} style={linkStyle}>
		<div style={cellStyle}>
			<img style={imgStyle} src={this.props.model.image}/>
			<div style={songMsgStyle}>
				<p style={songItemStyle}><span style={titleStyle}>曲目 </span>{this.props.model.title}</p>
				<p style={songItemStyle}><span style={titleStyle}>演唱 </span>{this.props.model.author[0].name}</p>
				<p style={songItemStyle}><span style={titleStyle}>时间 </span>{this.props.model.attrs.pubdate}</p>
				<p style={songItemStyle}><span style={titleStyle}>评分 </span>{this.props.model.rating.average}</p>
			</div>
			<button style={btnStyle}>去豆瓣</button>
		</div>
		</Link>
	}
})
var Music = React.createClass({
				getInitialState:function(){
					return {"list":[]}
				},
				componentDidMount:function(){
					var musicList = music_list+"张杰&start=1&count=10";
					var self = this;
					$.ajax({
						type:"get",
						url:musicList,
						async:true,
						dataType:"jsonp",
						success:function(response){
							self.setState({
								list:response.musics
							})
						}
						
					});
				},
				dealSearch:function(keyword){
					var musicList = music_list+keyword+"&start=1&count=10";
					var self = this;
					$.ajax({
						type:"get",
						url:musicList,
						async:true,
						dataType:"jsonp",
						success:function(response){
							self.setState({
								list:response.musics
							})
						}
						
					});
				},
				render:function(){
					var tableViewStyle = {
						paddingBottom:"50px"
					}
					return <div style={tableViewStyle}>
						<Navigationbar title="音乐"/>
						<SearchBar dealSearch={this.dealSearch}/>
						<div>
							{this.state.list.map(function(item){
								return <div>
									<MusicCell model={item}/>
								</div>
							})}
						</div>
					</div>
				}
			})
var MusicDetail = React.createClass({
	getInitialState:function(){
				return {"image":"",
				"title":"",
				"author":"",
				"time":"",
				"grade":"",
				"summary":"",
				"detail":this.props.params.id}
	},
	componentDidMount:function(){
		var musicDetail = music_detail+this.state.detail;
		var self = this;
		$.ajax({
			type:"get",
			url:musicDetail,
			dataType:"jsonp",
			success:function(dict){
				self.setState({
					image:dict.image,
					title:dict.title,
					author:dict.attrs.singer,
					time:dict.attrs.pubdate,
					grade:dict.rating.average,
					summary:dict.summary
				})
			}
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
			<Navigationbar title="音乐详情"/>
				<div style={topStyle}>
					<img style={imgStyle} src={this.state.image} />
					<div className="bookMsg" style={msgStyle}>
						<p><span style={spanStyle}>歌名 : </span>{this.state.title}</p>
						<p><span style={spanStyle}>歌手 : </span>{this.state.author}</p>
						<p><span style={spanStyle}>时间 : </span>{this.state.time}</p>
						<p><span style={spanStyle}>评分 : </span>{this.state.grade}</p>
					</div>
				</div>
					
				<div style={infoStyle}>
					<button style={btnStyle}>歌曲简介</button>
					<p style={summaryStyle}>{this.state.summary}</p>
				</div>
		</div>
	}
})
