/**
 * Created by Administrator on 17-3-12.
 */
//游戏封装类
function Game(){
    //封装开始方法
    this.start = function () {
        //调用函数移除之前的游戏数据
        clear();
        //实例化地图类
        divMap = new Map();
        //调用地图类的显示地图的方法
        divMap.show();
        //实例化食物类
        spanFood = new Food();
        //显示食物
        //setInterval('spanFood.show()',1000);
        for( var m=0;m<NUM;m++){
        	setTimeout('spanFood.show()',10)
        };
        //实例化蛇类
        snake = new Snake();
        //显示蛇
        snake.show();
        //然蛇动起来 调用开启定时器的函数
        pause();
        //当键盘的按键按下时,调用改变方向的方法
        document.onkeydown = function (event) {
            var code = event.which;
            snake.changeDirect(code);
        }
    }
}
/**
 * 调用开始游戏的方法
 * @type {Game}
 */
var game = new Game();
function start(){
    if(divMap == null){
        game.start();
    }
}
/**
 * 定义清除游戏信息的函数
 */
function clear(){

    //如果有,清除游戏数据
    if(divMap != null){
        document.getElementById('map')
        //console.dir(divMap._map);
        //删除页面上的地图标签
        //if(document.getElementById('map'))
        document.body.removeChild(divMap._map);
        //console.dir(divMap._map);
        document.getElementById('map')
        divMap = null;
    }
}
/**
 * 定义暂停游戏的函数
 */
function pause(){
    //console.dir(id);
    if(id != null){
        //清除定时器 并且把id的值设置为空
        clearInterval(id);
        id = null;
    }else if(id ==null && divMap !=null){
        id = setInterval("snake.move()",200);
    }
}
/**
 * 定义结束游戏的函数
 */
function stop(){
    //调用清除游戏数据的函数
    clear();
    //调用清除定时器的函数
    pause();
}
