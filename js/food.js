/**
 * Created by Administrator on 17-3-12.
 */

/*
 * 定义食物类
 */
function Food(){
    //定义食物的属性
    //定义食物类的宽高
    this.height = 1;
    this.width = 1;
    //食物背景颜色
    this.foodBgColor = BACKGROUNDFOOD;
    //设置食物的圆角属性
    this.border_radius = '10px';
    //定义食物的显示
    //this.display = 'inline-block';
    //定义地图类的左边距和上边距
    this.left = new Array();
    this.top =  new Array();
    //食物的定位
    this.position = POSITIONFOOD;
    //食物对象
    //this._food = null ;
    this._food = new Array();
    //定义食物的方法  显示方法 移动方法
    //显示方法
    this.show = function(){
        if(this._food.length<NUM){
            //创建span盒子
            r = this._food.length;
            this._food.splice(r,0,document.createElement('div'));
            console.dir(this._food)
            //定义背景颜色
            this._food[r].style.background = this.foodBgColor;
            //给食物添加圆角属性
            //this._food[r].style.border-radius = this.border_radius;
            //定义背景颜色
            //this._food.style.display = this.display;
            //定义宽高
            this._food[r].style.height = this.height*UNIT+'px';
            this._food[r].style.width = this.width*UNIT+'px';

            //把span盒子添加到div里面
            divMap._map.appendChild(this._food[r]);
        }
        //如果小标变量r未定义则随机获取
        if(r==undefined){
        	r = Math.floor(Math.random()*5);
        }
        //console.dir(r);
        //定义位置
        this._food[r].style.position = this.position;
        //定义地图类的左边距和上边距
        this.left[r] = Math.floor(Math.random()*divMap.width);
        this.top[r] =  Math.floor(Math.random()*divMap.height);

        this._food[r].style.left = this.left[r]*UNIT+'px';
        this._food[r].style.top = this.top[r]*UNIT+'px';
    }

}
