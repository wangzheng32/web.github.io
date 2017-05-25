//文艺范后台接口
//
//通用参数
//	m表示模块(main,read,music,movie,user,favorite,search)
//	a表示动作
//所有接口的前缀
var urlPrefix = "http://211.159.157.145/api/artist/public/";
//图片,视频,音乐URL的前缀
var imagePrefix = "http://211.159.157.145/api/artist/";


//首页列表
//参数:
//	无
var mainListUrl = urlPrefix+"index.php?m=main&a=list";


//轮播图列表
//参数:
//	无
var adsUrl = urlPrefix+"index.php?m=main&a=ads";

//阅读列表
//参数:
//	start 从哪个序号开始, 范围 0~MAX, 可以不写, 默认0
//	count 一次获取多少个数据, 可以不写, 默认10
//示例:
//http://127.0.0.1/api/artist/public/index.php?m=read&a=list
var readListUrl = urlPrefix+"index.php?m=read&a=list";

//阅读详情
//参数detailId, 详情id
//示例:
//http://127.0.0.1/api/artist/public/index.php?m=read&a=detail&detailId=10
var readDetailUrl = urlPrefix+"index.php?m=read&a=detail";

//音乐列表
//参数:
//	start 从哪个序号开始, 范围 0~MAX, 可以不写, 默认0
//	count 一次获取多少个数据, 可以不写, 默认10
//示例:
//http://127.0.0.1/api/artist/public/index.php?m=music&a=list
var musicListUrl = urlPrefix+"index.php?m=music&a=list";

//音乐详情
//参数detailId, 详情id
//示例:
//http://127.0.0.1/api/artist/public/index.php?m=music&a=detail&detailId=10
var musicDetailUrl = urlPrefix+"index.php?m=music&a=detail";

//影视列表
//参数:
//	start 从哪个序号开始, 范围 0~MAX, 可以不写, 默认0
//	count 一次获取多少个数据, 可以不写, 默认10
//示例:
//http://127.0.0.1/api/artist/public/index.php?m=movie&a=list
var movieListUrl = urlPrefix+"index.php?m=movie&a=list";

//影视详情
//参数detailId, 详情id
//示例:
//http://127.0.0.1/api/artist/public/index.php?m=movie&a=detail&detailId=10
var movieDetailUrl = urlPrefix+"index.php?m=movie&a=detail";

//用户登录
//参数
//	username, 用户名
//	password, 密码
//
//示例
//http://127.0.0.1/api/artist/public/index.php?m=user&a=login&username=zz&password=21212
var loginUrl = urlPrefix+"index.php?m=user&a=login";

//注册接口
//	username, 用户名
//	password, 密码
//	phone 电话号码
//示例
//http://127.0.0.1/api/artist/public/index.php?m=user&a=register&username=aa&password=21212&phone=13611111111
var registerUrl = urlPrefix+"index.php?m=user&a=register";

//修改密码
//参数
//	userId 用户id
//	password 原密码
//	newPassword 新密码
//示例
//http://127.0.0.1/api/artist/public/index.php?m=user&a=changePassword&userId=20&password=21212&newPassword=3333
var changePassword = urlPrefix+"index.php?m=user&a=changePassword";

//获取收藏
//参数
//	userId  用户id
//	type   收藏类型
//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=getFavorite&userId=1&type=1   阅读
//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=getFavorite&userId=1&type=4   音乐
//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=getFavorite&userId=1&type=5   影视
var getFavoriteUrl = urlPrefix+"index.php?m=favorite&a=getFavorite";

//添加收藏
//参数
//	userId  用户id
//	itemId  收藏对象id
//	type   收藏类型
//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=saveFavorite&userId=6&itemId=1&type=1
var saveFavoriteUrl = urlPrefix+"index.php?m=favorite&a=saveFavorite";
//article  10787,10790


//取消收藏
//参数
//	userId  用户id
//	itemId  收藏对象id
//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=cancelFavorite&userId=6&itemId=1
var cancleFavoriteUrl = urlPrefix+"index.php?m=favorite&a=cancelFavorite";

//一个项目是否收藏
//参数
//	userId  用户id
//	itemId  收藏对象id
//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=isFavorite&userId=20&itemId=1
var ifFavoriteUrl = urlPrefix+"index.php?m=favorite&a=isFavorite";

//搜索数据
//参数: 
//	keyword 搜索关键字, 数据对象中title如果包含关键,返回
//http://127.0.0.1/api/artist/public/index.php?m=search&a=search&userId=1&keyword=121
var searchUrl = urlPrefix+"index.php?m=search&a=search";

