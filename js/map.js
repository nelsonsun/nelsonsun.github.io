/**
 * Created by Administrator on 17-3-12.
 */
//宽 高 左边距 上边距 定位 背景颜色  div的盒子
/*
 * 定义地图类
 */

function Map(){
    //定义地图类的属性
    //定义地图类的宽高
    this.height = MAPHEIGHT;
    this.width = MAPWIDTH;
    //console.debug(this.height);
    //定义地图类的背景颜色
    this.background = BACKGROUND;
    //定义地图类的位置
    this.position = POSITION;
    //定义地图类的左边距和上边距
    this.left = LEFT;
    this.top =  TOP;
    //div的盒子
    this._map = null;
    //定义地图类的方法 显示方法,将div的盒子按照属性的设置进行显示
    this.show = function(){
        //如果地图不存在则重建地图div
        //if(this._map == null){
            //创建div盒子
            this._map = document.createElement('div');
            //设置div盒子的属性
            //定义宽高
            this._map.style.height = this.height*UNIT+'px';
            this._map.style.width = this.width*UNIT+'px';
            //添加超出地图隐藏的属性
            this._map.style.overflow = 'hidden';
            //添加id的属性
            this._map.id = 'map';
            //定义背景颜色
            this._map.style.background = this.background;
            //定义位置
            this._map.style.position = this.position;
            this._map.style.left = this.left*UNIT+'px';
            this._map.style.top = this.top*UNIT+'px';
            //把div盒子添加到body里面
            document.body.appendChild(this._map);
        //}
    }
}
