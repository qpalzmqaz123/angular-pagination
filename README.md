# angular-pagination
angularjs 分页插件

## 效果图
![](https://github.com/qpalzmqaz123/angular-pagination/raw/master/img/p1.png)

## 使用方法
引入js和css(文件位于src目录)
```html
<link rel="stylesheet" href="./src/pagination.css" />
<script type="text/javascript" src="./src/pagination.js"></script>
```
在合适的位置添加元素
```html
<pagination pg-item-cnt="ctrl.itemCnt" pg-current="ctrl.currentPage" pg-on-change="ctrl.onChange()"></pagination>
```

## 属性说明
#### pg-item-cnt [int]
所有条目的数量

#### pg-current [int]
当前页面位置

#### pg-item-cnt-each-page [int]
每页所显示的条目数量，可不填，默认10条

#### pg-max-btn-cnt [int]
最多同时显示多少个分页按钮，可不填，默认7个

#### pg-on-change [function]
当跳转分页时，调用该函数，可不填

#### pg-home-text [string]
设置首页的字符串，可不填，默认'Home'

#### pg-end-text [string]
设置尾页的字符串，可不填，默认'End'

## 例程参考index.html
