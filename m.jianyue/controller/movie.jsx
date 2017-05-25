
var MovieCell = React.createClass({
	
	render:function(){
		
		var cellStyle = {
			width:"100%",
			height:"150px",
			padding:"5px"
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
		
		var cellPStyle = {
			fontSize:"14px"
		}
		
		var spanStyle = {
			color:"#0091FF"
		}
		
		var imgStyle = {
			width:"100px",
			height:"150px"
		}
		
		var btnStyle = {
			border:"1px solid #0091FF",
			backgroundColor:"white",
			padding:"3px 10px",
			borderRadius:"3px",
			marginTop:"10px"
		}
		
		var linkStyle = {
			color:"black"
		}
		
		return (
			
			<Link to={"/MovieDetail/"+this.props.model.id} style={linkStyle}>
		
			<div style={cellStyle}>
				<div style={cellLeftStyle}>
					<img style={imgStyle} src={this.props.model.images.large} />
				</div>
				<div style={cellRightStyle}>
					<p style={cellPStyle}>
						<span style={spanStyle}>名称 : </span>
						{this.props.model.title}
					</p>
					<p style={cellPStyle}>
						<span style={spanStyle}>导演 : </span>
						{this.props.model.original_title}
					</p>
					<p style={cellPStyle}>
						<span style={spanStyle}>评分 : </span>
						{this.props.model.rating.average}
					</p>
					<p style={cellPStyle}>
						<span style={spanStyle}>年份 : </span>
						{this.props.model.year}
					</p>
					<p style={cellPStyle}>
						<span style={spanStyle}>标签 : </span>
						{this.props.model.genres}
					</p>
					<p style={cellPStyle}>
						<span style={spanStyle}></span>
						{this.props.model.price}
					</p>
					<button style={btnStyle}>去豆瓣</button>
				</div>
			</div>
			</Link>
			)
	}
})

var Movie = React.createClass({
	
	getInitialState:function(){
		return {"list":[]}
	},
	
	componentDidMount:function(){
		var self = this;
		var urlTo = movieListUrl+"bill&start=0&count=20";
		
		$.ajax({
			type:"GET",
			url:urlTo,
			dataType: "JSONP",
			success: function(dict) {
				var movies = dict.subjects;
				self.setState({
					list:movies
				})
			}
		})
	},
	
	render:function(){
		
		var paddingStyle = {
			paddingBottom:"50px"
		}
		
		return <div>
			<NavigationBar title="电影" />
			<SearchBar dealSearch={this.dealSearch} />
			<div style={paddingStyle}>
				{this.state.list.map(function(item){
					return <div >
						<MovieCell model={item} />
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
				"year":"",
				"genres":"",
				"summary":""
				}

	},
	
	componentDidMount:function(){
		var self = this;
		var urlTo = movieUrlPrefix+this.props.params.id;
		
		$.ajax({
			type:"GET",
			url:urlTo,
			dataType: "JSONP",
			success: function(dict) {
				self.setState({
					image:dict.image,
					title:dict.alt_title,
					actor:dict.title,
					grade:dict.rating.average,
					year:dict.attrs.year,
					genres:dict.attrs.movie_type,
					summary:dict.summary
				})
			}
		})
		
	},
	
	render:function(){
		
		var cellStyle = {
			width:"100%",
			height:"150px",
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
		
		var imgStyle = {
			height:"140px"
		}
		
		return <div>
			<NavigationBar title="电影详情" />
			
			<div style={cellStyle}>
				<div style={cellLeftStyle}>
					<img style={imgStyle} src={this.state.image} />
				</div>
				<div style={cellRightStyle}>
					<p style={cellFonts}>
						<span style={cellSpan}>名称 : </span>
						{this.state.title}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>导演 : </span>
						{this.state.actor}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>评分 :</span>
						{this.state.grade}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>年份 :</span>
						{this.state.year}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>标签 :</span>
						{this.state.genres}
					</p>
				</div>
			</div>
			<div style={boxStyle}>
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








