var BookCell = React.createClass({
	render:function(){
		var cellStyle = {
			width:"100%",
			height:"145px",
			padding:"10px 0px",
			borderBottom:"1px solid #ccc"
		}
		var leftStyle = {
			float:"left",
			height:"100%",
			width:"28%",
			marginLeft:"2%"
		}
		var rightStyle={
			float:"left",
			height:"100%",
			width:"65%",
			margin:"0 2.5%"
			
		}
		var imageStyle = {
			width:"100%",
			height:"100%"
		}
		var itemStyle = {
			overflow:"hidden",
			height:"25%",
			fontSize:"14px",
			paddingTop:"4px"
		}
		var priceStyle = {
			float:"left"
		}
		var pageStyle = {
			float:"right"
		}	
		var linkStyle = {
			color:"#000"
		}
		return <Link to={"/BookDetail/"+this.props.model.id} style={linkStyle}>
		<div style={cellStyle}>
			<div style={leftStyle}>
				<img style={imageStyle} src={this.props.model.image} />
			</div>
			<div style={rightStyle}>
				<p style={itemStyle}>{this.props.model.title}</p>
				<p style={itemStyle}>{this.props.model.author}</p>
				<p style={itemStyle}>{this.props.model.publisher}</p>
				<p style={itemStyle}>
					<span style={priceStyle}>{this.props.model.price}</span>
					<span style={pageStyle}>{this.props.model.pages+"页"}</span>
				</p>
			</div>
		</div>
		</Link>
	}
})
var Book = React.createClass({
	getInitialState:function(){
		return {"list":[]}
	},
	componentDidMount:function(){
		var self = this;
		var bookList = bookListUrl+"诛仙&start=1&count=10";
		$.ajax({
			type:"get",
			url:bookList,
			async:true,
			dataType:"jsonp",
			success:function(response){
				self.setState({
					list:response.books
				})
			}
			
		});
			
	},
	
	render:function(){
		return <div>
			<Navigationbar title="图书"/>
			<SearchBar dealSearch={this.dealSearch}/>
			<div>
				{this.state.list.map(function(item){
					return <div>
						<BookCell model={item}/>
					</div>
				})}
			</div>
		</div>
	},
	dealSearch:function(keyword){
		var bookList = bookListUrl+keyword+"&start=1&count=10";
		var self = this;
		$.ajax({
			type:"get",
			url:bookList,
			async:true,
			dataType:"jsonp",
			success:function(response){
				self.setState({
					list:response.books
				})
			}
			
		});
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
				"summary":"",
				"detail":this.props.params.id}
			},
			
			componentDidMount:function(){
				
				var self = this;
				var bookDetail = bookDetailUrl+this.state.detail;
				
				//下载数据
				$.ajax({
					url:bookDetail,
					type:"GET",
					dataType:"jsonp",
					success:function(response){
						//转化JSON为JS对象
						var dict = response;
						//React不要直接改界面, 通过修改state修改界面
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
					<Navigationbar title="书籍详情" />
					{/*this.props.prams 存放路由的参数*/}
					<div style={topStyle}>
						<img style={imgStyle} src={this.state.image} />
						<div className="bookMsg" style={msgStyle}>
							<p><span style={spanStyle}>书名 : </span>{this.state.title}</p>
							<p><span style={spanStyle}>作者 : </span>{this.state.author}</p>
							<p><span style={spanStyle}>出版社 : </span>{this.state.publisher}</p>
							<p><span style={spanStyle}>价格 : </span>{this.state.price}</p>
							<p><span style={spanStyle}>页码 : </span>{this.state.pages}页</p>
						</div>
					</div>
					
					<div style={infoStyle}>
						<button style={btnStyle}>书籍简介</button>
						<p style={summaryStyle}>{this.state.summary}</p>
					</div>
					
				</div>
			}
		})
