let html = document.querySelector('#html');
let style = document.querySelector('#style');
    //string用来展示最终结果
let string = '' 
    //str用来缓存未处理的文本
let str = ` 
/*
 * 你好呀~
 * 我是北邮计算机学院的大二学生杨盛淇
 * 下面我要开始加样式了
 */
body{
    color: #456789;
}
/*
 * 下面就是见证菜鸡的时刻！
 * 先搞起一个div
 */
#div {
    border: 2px solid skyblue;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成一个太极图
 * 注意看好了！
 * 首先把div变成一个圆
 */
#div {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}
/* 两条阴阳鱼
* 一副太极图
*/
#div {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div::before{
    background: white;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div::after{
    background: black;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);

}
/* 天呐页面好乱
 * 整理一下再继续吧
*/
#html{
    margin-left: 10%;
    width: 80%;
    color: rgba(120,0,0,.5);
}
/* 太极图好美呀哈哈哈哈哈
 * 什么？你觉得它太单调了？
 * 天哪……
 * 好吧…… 我们让它转起来好了！
 */
@keyframes Rotate {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
#div {
    animation: linear 2.5s Rotate infinite reverse;
}
/* 你看，它转起来了！
 * 不妨再加一些功能？
 */
@keyframes Big {
    0%{
      transform: scale(1) rotate(0);
    }
    50%{
        transform: scale(1.3) rotate(180deg);
    }
    100%{
      transform: scale(1) rotate(360deg);
    }
  }
#div:hover {
    animation: 1.5s Big infinite reverse;
}
/* 尝试把鼠标/手指放在太极图上吧~
*/
`;
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if(str[n] === '\n'){
            //如果是回车就把str[n]替换为<br>
            string +=  '<br>';
        }else if(str[n] === ' '){
            string += '&nbsp;'
        }else{
            //不是回车就照搬
            string +=  str[n];
        }
            //html css同步变化
        html.innerHTML = string;
        style.innerHTML = str.substring(0,n);
        window.scrollTo(0,999999);
        html.scrollTo(0,999999);
        n++;
        if(n<str.length){
            step();
        }else{
            return;
        }
    },0);
};

step();
