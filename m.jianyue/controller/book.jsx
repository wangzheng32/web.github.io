
var BookCell = React.createClass({
	
	render:function(){
		
		var cellStyle = {
			width:"100%",
			height:"150px",
			borderBottom:"1px solid #E6E6E6",
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
		
		var marginStyle = {
			marginBottom:"10px"
		}
		
		var leftStyle = {
			float:"left",
			width:"40%"
		}
		
		var rightStyle = {
			float:"right",
			width:"40%",
			textAlign:"right"
		}
		
		var linkStyle = {
			color:"black"
		}
		
		var imgStyle={
			width:"102px",
			height:"144px"
		}
		
		
		return (
		<Link to={"/BookDetail/"+this.props.model.id} style={linkStyle}>
		
		<div style={cellStyle}>
			<div style={cellLeftStyle}>
				<img style={imgStyle} src={this.props.model.image} />
			</div>
			<div style={cellRightStyle}>
				<p>{this.props.model.title}</p>
				<p>{this.props.model.author}</p>
				<p style={marginStyle}>
					{this.props.model.publisher}
				</p>
				<div style={leftStyle}>
					{this.props.model.price}
				</div>
				<div style={rightStyle}>
					{this.props.model.pages} 页
				</div>
			</div>
		</div>
		</Link>
		)
	}
})


var Book = React.createClass({
	
	getInitialState:function(){
		return {"list":[]}
	},
	
	componentDidMount:function(){
		var self = this;
		var urlTo = bookListUrl+"C&start=0&count=20";
		
		$.ajax({
			type:"GET",
			url:urlTo,
			async:true,
			dataType: "jsonp",
			success: function(dict) {
				var books = dict.books;
				self.setState({
					list:books
				})
			}
		})
		
	},
	
	dealSearch:function(keyword){
		var self = this;
		var bookList = bookListUrl+keyword+"&start=1&count=10";
		$.ajax({
			type:"get",
			url:bookList,
			async:true,
			dataType:"jsonp",
			success:function(dict){
				var books = dict.books;
				self.setState({
					list:books
				})
			}
			
		});
	},
	
	render:function(){
		
		var paddingStyle = {
			paddingBottom:"50px"
		}
		
		return <div>
			<NavigationBar title="图书" />
			<SearchBar dealSearch={this.dealSearch} />
			<div style={paddingStyle}>
				{this.state.list.map(function(item){
					return <div >
						<BookCell model={item} />
					</div>
				})}
			</div>
		</div>
	}
	
})

var BookDetail = React.createClass({
	
	getInitialState:function(){
		return {"image":"",
				"title":"",
				"author":"",
				"publisher":"",
				"price":"",
				"pages":"",
				"summary":""
				}

	},
	
	componentDidMount:function(){
		var self = this;
		var urlTo = bookUrlPrefix+this.props.params.id;
		
		$.ajax({
			type:"GET",
			url:urlTo,
			dataType: "JSONP",
			success: function(dict) {
				self.setState({
					image:dict.image,
					title:dict.title,
					author:dict.author,
					publisher:dict.publisher,
					price:dict.price,
					pages:dict.pages,
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
		
		return <div>
			<NavigationBar title="图书详情" />
			
			<div style={cellStyle}>
				<div style={cellLeftStyle}>
					<img src={this.state.image} />
				</div>
				<div style={cellRightStyle}>
					<p style={cellFonts}>
						<span style={cellSpan}>书名: </span>
						{this.state.title}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>作者: </span>
						{this.state.author}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>出版社: </span>
						{this.state.publisher}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>价格: </span>
						{this.state.price}
					</p>
					<p style={cellFonts}>
						<span style={cellSpan}>页码: </span>
						{this.state.pages}
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
