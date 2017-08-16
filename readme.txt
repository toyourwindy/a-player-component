这是一个可以移入任何页面的播放器组件。
使用方法：
  1. 把所有文件copy进你的项目，新建id="app" class="app"的div；
  2. 在div中引入语句 <my-card v-bind:obj="mycard"></my-card>
  3. head中导入：
    <script type="text/javascript" src="vue.js"></script>
    <link href="singcard.css" rel="stylesheet" /> 

     body内部的最后导入：
    <script type="text/javascript" src="mycomponent.js"></script>
    <script type="text/javascript" src="data.js"></script>
    <script type="text/javascript" src="singcard.js"></script> 
  4.自定义播放设置，打开data.js，修改参数
	card: 主题名,
	name: 歌曲名称,
	pic_url: 图片文件路径,
	media_url: 歌曲文件路径
