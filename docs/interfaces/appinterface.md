[egoal-webview-api](../README.md) › [AppInterface](appinterface.md)

# Interface: AppInterface

系统与 APP 相关功能接口。

## Hierarchy

* **AppInterface**

## Index

### Methods

* [getAppVersion](appinterface.md#getappversion)
* [getAppVersionCode](appinterface.md#getappversioncode)
* [getBrightness](appinterface.md#getbrightness)
* [getIMEI](appinterface.md#getimei)
* [getSerialNumber](appinterface.md#getserialnumber)
* [getVolume](appinterface.md#getvolume)
* [isWebviewApp](appinterface.md#iswebviewapp)
* [lockScreen](appinterface.md#lockscreen)
* [restartApp](appinterface.md#restartapp)
* [setBrightness](appinterface.md#setbrightness)
* [setStatusBarColor](appinterface.md#setstatusbarcolor)
* [setVolume](appinterface.md#setvolume)
* [unlockScreen](appinterface.md#unlockscreen)

## Methods

###  getAppVersion

▸ **getAppVersion**(): *string*

获取当前 Android APP 的版本号, 字符串形式 (例如 `"1.0.0"`)。

**Returns:** *string*

版本号

___

###  getAppVersionCode

▸ **getAppVersionCode**(): *number*

获取当前 Android APP 的版本号, 数字形式 (例如 `1`)，可用于比较。

**Returns:** *number*

版本号

___

###  getBrightness

▸ **getBrightness**(): *number*

获取当前屏幕亮度。\
TODO: 该功能尚未实现。

**Returns:** *number*

- 屏幕亮度

___

###  getIMEI

▸ **getIMEI**(): *string | undefined*

获取设备的 IMEI 码。\
如果无法获取 (如系统版本或权限问题), 返回 `undefined`。\
(!) 如果缺少权限, 会提示用户授权, 但是本次调用将会返回 `undefined`。\
(!) 该方法返回的识别码可能因网络情况变化而变化。\
TODO: 实现对应的 async 版本 (处理异步的授权事件)?

**Returns:** *string | undefined*

IMEI

___

###  getSerialNumber

▸ **getSerialNumber**(): *string | undefined*

获取设备的序列号 (Serial Number)。\
如果无法获取 (如系统版本或权限问题), 返回 `undefined`。\
TODO: 实现对应的 async 版本 (处理异步的授权事件)?

**Returns:** *string | undefined*

序列号

___

###  getVolume

▸ **getVolume**(): *number*

获取当前音量。\
TODO: 该功能尚未实现。

**Returns:** *number*

- 音量

___

###  isWebviewApp

▸ **isWebviewApp**(): *boolean*

检查运行环境是否是 Egoal Webview APP。

**Returns:** *boolean*

___

###  lockScreen

▸ **lockScreen**(): *void*

进入锁屏状态, 阻止用户切换应用。\
(!) 锁屏时会弹出 Android 系统的提示框, 需要用户点击同意后才会进入锁屏模式。

**Returns:** *void*

___

###  restartApp

▸ **restartApp**(): *void*

重启 APP，即重新载入整个 Android activity。

**Returns:** *void*

___

###  setBrightness

▸ **setBrightness**(`brightness`: number): *void*

设置屏幕亮度。\
TODO: 该功能尚未实现。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`brightness` | number | 要设置的屏幕亮度  |

**Returns:** *void*

___

###  setStatusBarColor

▸ **setStatusBarColor**(`color`: string): *void*

设置 APP 顶部状态栏的颜色。(时钟、信号显示区域的背景颜色)\
状态栏的文本会根据颜色自动调整暗色或亮色。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | string | 要设置的颜色字符串, 如 `"#ff0000"`  |

**Returns:** *void*

___

###  setVolume

▸ **setVolume**(`volume`: number): *void*

设置音量。\
TODO: 该功能尚未实现。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`volume` | number | 要设置的音量  |

**Returns:** *void*

___

###  unlockScreen

▸ **unlockScreen**(): *void*

解除锁屏状态。

**Returns:** *void*
