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
    //定义食物的显示
    //this.display = 'inline-block';
    //定义地图类的左边距和上边距
    this.left = 0;
    this.top =  0;
    //食物的定位
    this.position = POSITIONFOOD;
    //食物对象
    this._food = null ;
    //定义食物的方法  显示方法 移动方法
    //显示方法
    this.show = function(){
        if(this._food == null){
            //创建span盒子
            this._food = document.createElement('div');
            //定义背景颜色
            this._food.style.background = this.foodBgColor;
            //定义背景颜色
            //this._food.style.display = this.display;
            //定义宽高
            this._food.style.height = this.height*UNIT+'px';
            this._food.style.width = this.width*UNIT+'px';

            //把span盒子添加到div里面
            divMap._map.appendChild(this._food);
        }
        //定义位置
        this._food.style.position = this.position;
        //定义地图类的左边距和上边距
        this.left = Math.floor(Math.random()*divMap.width);
        this.top =  Math.floor(Math.random()*divMap.height);

        this._food.style.left = this.left*UNIT+'px';
        this._food.style.top = this.top*UNIT+'px';
    }

}