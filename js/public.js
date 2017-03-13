/**
 * Created by Administrator on 17-3-12.
 */
//定义全局变量
//var pre = 'anonymous';
var divMap = null;
var spanFood = null;
var snake = null;
var id = null;
//定义基础单元格的大小
var UNIT = 20;
//定义食物的数量
var NUM = 100;

//定义地图的宽高
var MAPWIDTH = 60;
var MAPHEIGHT = 30;
//snake and food height width
var SFWIDTH = 1;
var SFHEIGHT = 1;
//定义地图的背景颜色
//var BACKGROUND = 'black';
var BACKGROUND = "url(./img/img3.jpg)no-repeat top center";
//定义食物的背景颜色
var BACKGROUNDFOOD = 'red url(./img/apple.jpg) no-repeat top center';
//定义食物的圆角
var BORDER_RADIUS=" 10px ";
//定义蛇头的颜色
var SKHDBGCOLOR = 'url(./img/head.jpg) no-repeat -23px -17px';
//定义蛇身的颜色
var SKBDBGCOLOR = 'yellow';
//定义地图类的位置
var POSITION = 'absolute';
//定义食物类的位置
var POSITIONFOOD = 'absolute';
//SNAKE POSITION
var POSITIONSK = 'absolute';

//定义地图类的左边距和上边距
var LEFT = 0;
var TOP =  0;
