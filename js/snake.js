
/*
 * 定义蛇类
 * 属性:宽 高  定位  body蛇(背景颜色 左边距 上边距 盒子)
 每个蛇节一样的东西:宽 高 定位
 每个蛇节不一样的东西: 背景颜色 左边距 上边距 盒子
 将一个数组看做整个蛇的身体,数组里面由蛇节,再将蛇节看做一个
 数组,将不一样的属性值放入在蛇节数组元素中

 body=[
 //每个蛇节元素[左边距,上边距,背景颜色,盒子]
 [2,1,”red”,null],//蛇头
 [1,1,”white”,null].
 [0,1,”white”,null]
 ];

 取蛇头:body[0]
 取蛇头的颜色: body[0][2]
 取蛇头后面第一节的div盒子:body[1][3]
 取蛇头后面第二节的左边距:body[2][0]
 取蛇头后面第一节的上边距:body[1][1]
 方法:显示方法
 */
function Snake(){
    //定义蛇类的属性
    //定义蛇节的宽高
    this.width = SFWIDTH;
    this.height = SFHEIGHT;
    //给蛇添加移动方向
    this.direct = "RIGHT";
    //定位
    this.position = POSITIONSK;
    //定义蛇的身体 蛇节的构成 背景颜色 左边距 上边距 盒子
    this.body = [
        [-1,1,SKHDBGCOLOR,null],
        [-1,1,SKBDBGCOLOR,null],
        [-1,1,SKBDBGCOLOR,null]
    ];

    //显示方法
    this.show = function(){
        //显示蛇节
        for(var i=0;i<this.body.length;i++){
            //this.body[i][3] 表示蛇节的div盒子
            if(this.body[i][3]==null){
                //如果蛇节不存在,创建蛇节
                this.body[i][3] = document.createElement('div');
                //给盒子添加属性
                //宽高
                this.body[i][3].style.height = this.height*UNIT+'px';
                this.body[i][3].style.width = this.width*UNIT+'px';
                //定位
                this.body[i][3].style.position = this.position;
                //color
                this.body[i][3].style.background = this.body[i][2];
                //把蛇添加到地图中
                divMap._map.appendChild(this.body[i][3]);
            }
            this.body[i][3].style.left = this.body[i][0]*UNIT+'px';
            this.body[i][3].style.top = this.body[i][1]*UNIT+'px';
        }
    }

    //根据传入的keycode值改变方向
    this.changeDirect = function(keyCode){
        if((keyCode ==37 || keyCode ==72) && this.direct != "RIGHT"){
            this.direct = "LEFT";
        }else if((keyCode ==38 || keyCode ==75) && this.direct != "DOWN" ){
            this.direct = "UP";
        }else if((keyCode ==39 || keyCode ==76) && this.direct != "LEFT" ){
            this.direct ='RIGHT';
        }else if((keyCode ==40 || keyCode ==74) && this.direct != "UP"){
            this.direct = "DOWN";
        }else if(keyCode ==83){
        	start();
        }else if(keyCode ==80){
        	pause();
        }else if(keyCode == 73){
        	stop();
        }
    }
    //移动方法
    this.move = function () {
        //除了蛇头的蛇节部分的移动
        for(var i = this.body.length-1;i>0;i--){
            this.body[i][0] = this.body[i-1][0];
            this.body[i][1] = this.body[i-1][1];
        }
        //蛇头的移动
        /**
         * UP TOP-1
         * DOWN TOP+1
         * LEFT LEFT -1
         * RIGHT RIGHT +1
         */
        switch(this.direct){
            case 'RIGHT':
                this.body[0][0] = this.body[0][0]+1;
                break;
            case 'LEFT':
                this.body[0][0] = this.body[0][0]-1;
                break;
            case 'UP':
                this.body[0][1] -= 1;
                break;
            case 'DOWN':
                this.body[0][1] += 1;
                break;
        }
        //当蛇头的位置与食物的位置相同时,蛇吃到食物,自身增加一节,食物刷新
        for(var k=0;k<spanFood.left.length;k++){
        	if(this.body[0][0] ==spanFood.left[k] && this.body[0][1] ==spanFood.top[k] ){
	            //吃到食物,长度加1
	            var x = this.body[1][0];
	            var y = this.body[1][1]
	            var node = [x,y,SKBDBGCOLOR,null];
	            this.body.push(node);
	            //修改需要刷新的食物的下标
	            r = k;
	            console.dir(r);
	            //涮新食物
	            spanFood.show();
	        }
        }
        
        

        //如果蛇头撞到边界或自己,结束游戏
        if(this.body[0][0]<0 || this.body[0][1]<0 || this.body[0][0]>= divMap.width || this.body[0][1] >= divMap.height){
            var flag = confirm("撞到边界了,重新开始吗?");
            //关闭计时器 调用关闭定时器的函数
            pause();
            if(flag){
                //若flag为真 重新开始邮箱
                game.start();
            }else{
                alert("游戏结束");
            }

        }
        //如果蛇头撞到身体,游戏结束
        for( var j=1 ;j<this.body.length;j++){
            if(this.body[0][0] == this.body[j][0] &&  this.body[0][1] == this.body[j][1]){
                var flag = confirm("你咬到自己了,重新开始吗?");
                //关闭计时器 调用关闭定时器的函数
                pause();
                if(flag){
                    //若flag为真 重新开始邮箱
                    game.start();
                }else{
                    alert("游戏结束");
                }
            }
        }
        //调用显示蛇的方法
        this.show();
    }
}
