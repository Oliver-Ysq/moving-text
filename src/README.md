# Moving Text
## 项目简述
- 这是一篇会动的文字
- 可以以此为模板作为简历、或文稿展示。
- 涉及技术：HTML CSS 原生JavaScript
## 以下展示项目收获
### API
1. `str.substring(m,n)`：返回str的从第m个字符到第n个字符。
   - 例如:
    ```
    str="I love you";
    console.log(str.substring(2,6))//'LOVE'
    ```
   - 包含str[m]但不包含str[n]
2. `str.replace(s1,s2)`：将str的第一个s1字符（字符串）用s2替换
   - 例如：
    ```
    str.replace('\n','<br>');//替换第一个`\n`
    str.replace(/\n/g,'<br>'); //使用了正则表达式，替换所有`\n`
    ```
3. scrollTo(x,y)：将页面移动到坐标(x,y)处
### HTML
1. 空格在html中转译为`&nbsp;`
   - 常见转译：
    ```
        <：&lt;
        >：&gt;
        "：&quot;
        '：&apos;
        &：&amp;
        ©：&copy;
        #：&num;
        §：&sect;
        ¥：&yen;
        $：&dollar;
        £：&pound;
        ¢：&cent;
        %：&percnt;
        *：$ast;
        @：&commat;
        ^：&Hat;
        ±：&plusmn;
        空格：&nbsp;
    ```
### CSS
1. box-shadow:让元素边框产生阴影
   - 参数： x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色
   - 给出两个、三个或四个数字值的情况。
     - 如果只给出两个值, 这两个值将被浏览器解释为x轴上的偏移量 <offset-x> 和y轴上的偏移量 <offset-y>。
     - 如果给出了第三个值, 这第三个值将被解释为模糊半径的大小 <blur-radius>。
     - 如果给出了第四个值, 这第四个值将被解释为扩展半径的大小 <spread-radius>。
   - 例如：`box-shadow: 10px 5px 5px black;`
2. 居中技巧：
   ```
    left: 50%;
    transform: translateX(-50%);
   ```
3. `word-break`：元素中文本的换行方式。
   - `break-all`：到达最右端自动换行。
4. 媒体查询：@media(条件){ //样式 };
5. `animation`和`transform`的搭配使用：
   - `animation：1s linear move infinite reverse`
     - 分别对应：时间 方式 动画名 循环次数 循环方式
   - `transform： scale()/translate()/rotate()/skew()`
6. 进行移动端调试时，长度单位可以使用vh（视高，vw（视宽。某种程度上可以替代`height: 100%;`的写法
### Coding经验
1. .js文件中编辑多行字符串，需用反引号(`)标识。反引号可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
2. 使用parcel实现实时预览
3. 程序员的三大难题：（最好的解决方法就是:**试！**
   1. 要不要**"+1"** (one-offset)
   2. 怎么命名 (naming problem)
   3. 缓存失效 (cache problem)
4. setTimeout + 递归函数：可以实现setInterval的效果，并在指定条件退出函数。