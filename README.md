易高 Webview APP 对应 JavaScript API
---

### 安装使用

API 以库的形式发布在 GitHub 上，可以通过 `npm` 或 `yarn` 直接以依赖形式安装，无需复制粘贴源文件，可直接导入。

在以后的更新中会尽量保证同一大版本中的向后兼容。
可以在路径后指定具体的版本，例如 `egoal-webview-api.git#1.0.0`。
版本号与 git tag 对应，可以在 [tags 页面](https://github.com/allanwjm/egoal-webview-api/tags) 查找

```shell script
# 安装
yarn add https://github.com/allanwjm/egoal-webview-api.git

# 升级版本
yarn upgrade https://github.com/allanwjm/egoal-webview-api.git
```

安装后可以直接以 ES6 module 的形式导入。导入的路径为 `egoal-webview-api/dist`。
```javascript
// 可以整体导入
import api from "egoal-webview-api/dist";
const sn = api.app.getSerialNumber();

// 或单独导入
import {app} from "egoal-webview-api/dist";
const sn = app.getSerialNumber();
```

### 接口文档
API 库以 TypeScript 写成，在 `src/interfaces` 目录中含有所有接口的类型定义可供查看和 IDE 自动补全。
待接口定义稳定后会添加单独的接口文档。
