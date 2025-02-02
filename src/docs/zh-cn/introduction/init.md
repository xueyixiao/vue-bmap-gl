# 初始化

---

## 引入地图

一般项目中，对于 vue-bmap-gl 的初始化只需要调用 `initBMapApiLoader` 方法即可。

NPM 安装：

```javascript
import VueBMap from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css'

Vue.use(VueBMap);
VueBMap.initBMapApiLoader({
  ak: 'YOUR_KEY',
  v: '1.0'
});
```

## Promise

在**定制化程度较高**的项目中，开发者可能只想通过 vue-bmap-gl 引入百度地图，而部分实例化的操作直接基于百度地图的 sdk 完成。这个时候就需要 `lazyBMapApiLoaderInstance`。

NPM 安装：

```javascript
import VueBMap from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css'
import { lazyBMapApiLoaderInstance } from 'vue-bmap-gl';

Vue.use(VueBMap);
VueBMap.initBMapApiLoader({
  ak: 'YOUR_KEY',
  v: '1.0',
  plugins: 'Lushu,TrackAnimation'
});

lazyBMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new BMapGL.Map('bmapContainer', {
    center: new BMapGL.Point(121.59996, 31.197646)
  });
});
```


## 参数

参数名  | 类型  |  默认值 | 描述 |
--- | --- | --- | --- |
ak | `String` | '' | 百度 Key |
v | `String` | `1.0` | SDK 版本 |
plugins | `String` | '' | BMapGLLib扩展库，以逗号隔开，可使用的扩展见下面列表。[gitee地址](https://gitee.com/mirrors_huiyan-fe/BMapGLLib)
offline | `boolean` | `undefined` | 是否离线加载地图JS，设置为true时，需要手动在html里加上JS的加载，示例 `<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=您的密钥"></script>`

## 扩展库列表
库名 | 描述
--- | --- |
DrawingManager | [鼠标绘制工具条库](http://mapopen.bj.bcebos.com/github/BMapGLLib/DrawingManager/examples/index.html)
DistanceTool | [测距工具](http://mapopen.bj.bcebos.com/github/BMapGLLib/DistanceTool/examples/index.html)
GeoUtils | [测距工具](http://mapopen.bj.bcebos.com/github/BMapGLLib/DistanceTool/examples/index.html)
TrackAnimation | [视角轨迹动画](https://mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation/examples/index.html)
AreaRestriction | [区域限制](https://mapopen.bj.bcebos.com/github/BMapGLLib/AreaRestriction/examples/index.html)
InfoBox | 自定义信息窗口  [顶部展示示例](https://mapopen.bj.bcebos.com/github/BMapGLLib/InfoBox/examples/top.html)  [底部展示示例](https://mapopen.bj.bcebos.com/github/BMapGLLib/InfoBox/examples/bottom.html)
RichMarker | 富标注 [示例1](https://bj.bcebos.com/v1/mapopen/github/BMapGLLib/RichMarker/examples/RichMarker.html)  [示例2](https://bj.bcebos.com/v1/mapopen/github/BMapGLLib/RichMarker/examples/RichMarker_Advanced.html)
Lushu | [路书](https://bj.bcebos.com/v1/mapopen/github/BMapGLLib/Lushu/examples/index.html)
