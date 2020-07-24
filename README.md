易高 Webview APP 对应 JavaScript API
----------

### 接口文档
API 库以 TypeScript 写成，在 `src/interfaces` 目录中含有所有接口的类型定义可供查看和 IDE 自动补全。

- [api.app](./docs/interfaces/appinterface.md) - 系统与 APP 相关功能接口
- [api.bluetooth](./docs/interfaces/bluetoothinterface.md) - 蓝牙模块相关功能接口 (未实现)
- [api.camera](./docs/interfaces/camerainterface.md) - 相机与闪光灯相关功能接口 (未实现)
- [api.location](./docs/interfaces/locationinterface.md) - 地理定位相关功能接口 (未实现)
- [api.message](./docs/interfaces/messageinterface.md) - 消息提示相关功能接口
- [api.storage](./docs/interfaces/storageinterface.md) - 数据存储相关功能接口
- [api.webview](./docs/interfaces/webviewinterface.md) - 浏览器控件相关功能

另外原生 JavaScript 的 `alert()`, `confirm()` 和 `prompt()` 也由 APP 进行处理，弹出 Android 内置的弹窗。

### 安装使用

API 以库的形式发布在 GitHub 上，可以通过 `npm` 或 `yarn` 直接以依赖形式安装，无需复制粘贴源文件，可直接导入。

在以后的更新中会尽量保证同一大版本中的向后兼容。
可以在路径后指定具体的版本，例如 `egoal-webview-api.git#1.0.0`。
版本号与 git tag 对应，可以在 [Tags 页面](https://github.com/allanwjm/egoal-webview-api/tags) 查看可用的版本号。

```shell script
# 安装
yarn add https://github.com/allanwjm/egoal-webview-api.git

# 升级版本 (即重新安装最新版本)
yarn add https://github.com/allanwjm/egoal-webview-api.git --force
```

安装后可以直接以 ES6 module 的形式导入。导入的路径为 `egoal-webview-api/dist`。未测试过直接在浏览器中执行。
```javascript
// 可以 default 整体导入
import api from "egoal-webview-api/dist";
const sn = api.app.getSerialNumber();
api.message.toast("欢迎使用易高软件");

// 或单独导入需要的功能模块
import {app, message} from "egoal-webview-api/dist";
const sn = app.getSerialNumber();
message.toast("欢迎使用易高软件");
```

### 开发用浏览器版接口
为了方便开发，大多数接口也可以在浏览器 (而不是必须在 Android APP 中) 中进行调用而不至于崩溃，返回格式正确的虚拟返回值，并通过 `alert()` 或 `console` 等模拟一些事件。
每次调用均会通过 `console.debug` 显示调用情况 (在 Chrome Dev Tool 中，显示为 `Verbose`)。

### 调试信息
每次 API 的调用都会在 Logcat 中打印 `EgoalAPI` Tag 的调试信息 (包括调用的函数，参数和返回值)，方便调试和查错。

浏览器 `console` 的输出也会在 Logcat 中用 `WebConsole` 的 Tag 输出。

----------

### 更新记录

- 2020/07/24 - v1.0.0
  - 完成基本 APP 框架和基础的接口
