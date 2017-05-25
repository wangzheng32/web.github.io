
var MusicCell = React.createClass({
	
	render:function(){
		
		var cellStyle = {
			width:"100%",
			border:"1px solid #E6E6E6",
			margin:"5px 10px",
			padding:"5px",
			textAlign:"center"
		}
		
		var cellBoxStyle = {
			width:"100%",
			height:"84px"
		}
		
		var cellLeftStyle = {
			float:"left",
			width:"50%",
			textAlign:"left"
		}
		
		var cellRightStyle = {
			float:"left",
			width:"50%",
			textAlign:"left"
		}
		
		var imgStyle = {
			width:"80px",
			height:"80px",
			borderRadius:"50%"
		}
		
		var fontSizeStyle = {
			fontSize:"15px"
		}
		
		var spanStyle = {
			color:"#007722"
		}
		
		var btnStyle = {
			padding:"3px 5px",
			backgroundColor:"#66BA9C",
			color:"white",
			borderRadius:"3px",
			marginTop:"5px",
			border:"none"
		}
		
		var linkStyle ={
			color:"black"
		}
		var boxStyle = {
				overflow:"hidden"
		}

		return (
		<Link to={"/MusicDetail/"+this.props.model.id} style={linkStyle}>
		
		<div style={cellStyle}>
			<div style={cellBoxStyle}>
				<img style={imgStyle} src={this.props.model.image} />
			</div>
			<div style={boxStyle}>
				<div style={cellLeftStyle}>
					<p style={fontSizeStyle}>
						<span style={spanStyle}>曲目 </span>
						{this.props.model.title}
					</p>
					<p style={fontSizeStyle}>
						<span style={spanStyle}>时间 </span>
						{this.props.model.attrs.pubdate}年
					</p>
				</div>
				<div style={cellRightStyle}>
					<p style={fontSizeStyle}>
						<span style={spanStyle}>演唱 </span>
						{this.props.model.author[0].name}
					</p>
					<p style={fontSizeStyle}>
						<span style={spanStyle}>评分 </span>
						{this.props.model.rating.average}
					</p>
				</div>
			</div>
				
			<button style={btnStyle}>去豆瓣</button>
		</div>
		</Link>
		)
	}
})


var Music = React.createClass({
	
	getInitialState:function(){
		return {"list":[]}
	},
	
	componentDidMount:function(){
		var self = this;
		var urlTo = musicListUrl+"jay&start=0&count=20";
		
		$.ajax({
			type:"GET",
			url:urlTo,
			dataType: "JSONP",
			success: function(dict) {
				var musics = dict.musics;
				self.setState({
					list:musics
				})
			}
		})
		
	},
	
	dealSearch:function(keyword){
		var self = this;
		var musicList = musicListUrl+keyword+"&start=1&count=10";
		$.ajax({
			type:"get",
			url:musicList,
			async:true,
			dataType:"jsonp",
			success:function(dict){
				var musics = dict.musics;
				self.setState({
					list:musics
				})
			}
			
		});
	},
	
	render:function(){
		var paddingStyle = {
			paddingBottom:"50px"
		}
		return <div>
			<NavigationBar title="音乐" />
			<SearchBar dealSearch={this.dealSearch} />
			<div style={paddingStyle}>
				{this.state.list.map(function(item){
					return <div >
						<MusicCell model={item} />
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
				"pubdate":"",
				"name":"",
				"average":"",
				"summary":""
				}

	},
	
	componentDidMount:function(){
		var self = this;
		var urlTo = musicUrlPrefix+this.props.params.id;
		
		$.ajax({
			type:"GET",
			url:urlTo,
			dataType: "JSONP",
			success: function(dict) {
				self.setState({
					image:dict.image,
					title:dict.title,
					pubdate:dict.attrs.pubdate,
					name:dict.author[0].name,
					average:dict.rating.average,
					summary:dict.summary
				})
			}
		})
		
	},
	
	render:function(){
		
		var cellStyle = {
			width:"100%",
			height:"100px",
			padding:"5px",
			borderBottom:"1px dotted #ccc"
		}
		
		var cellLeftStyle = {
			float:"left",
			width:"33%",
			height:"100%"
		}
		
		var cellRightStyle = {
			float:"left",
			width:"67%",
			height:"100%"
		}
		
		var cellFonts = {
			fontSize:"14px",
			paddingBottom:"5px"
		}
		
		var cellSpan = {
			color:"#0091FF"
		}
		
		var btnStyle = {
			padding:"5px 10px",
			margin:"5px",
			border:"1px solid #31BECB",
			backgroundColor:"white",
			color:"#31BECB",
			borderRadius:"5px"
		}
		
		var boxStyle = {
			paddingBottom:"150px"
		}
		
		return <div>
			<NavigationBar title="音乐详情" />
			
			<div style={cellStyle}>
				<div style={cellLeftStyle}>
					<img src={this.state.image} />
				</div>
				<div style={cellRightStyle}>
					<p style={cellFonts}>
						<span style={cellSpan}>曲目 </span>
						{this.state.title}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>时间 </span>
						{this.state.pubdate}年
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>演唱 </span>
						{this.state.name}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>评分 </span>
						{this.state.average}
					</p>
				</div>
			</div>
			<div>
				<div>
					<button style={btnStyle}>书籍详情</button>
				</div>
				<p>
					&nbsp;&nbsp;{this.state.summary}
				</p>
			</div>
		</div>
	}
	
})

