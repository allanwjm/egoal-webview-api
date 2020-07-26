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
* [getDeviceMetadata](appinterface.md#getdevicemetadata)
* [getIMEI](appinterface.md#getimei)
* [getSerialNumber](appinterface.md#getserialnumber)
* [getVolume](appinterface.md#getvolume)
* [isWebviewApp](appinterface.md#iswebviewapp)
* [lockScreen](appinterface.md#lockscreen)
* [quitApp](appinterface.md#quitapp)
* [restartApp](appinterface.md#restartapp)
* [setBrightness](appinterface.md#setbrightness)
* [setStatusBarColor](appinterface.md#setstatusbarcolor)
* [setVolume](appinterface.md#setvolume)
* [unlockScreen](appinterface.md#unlockscreen)

## Methods

###  getAppVersion

▸ **getAppVersion**(): *string*

获取当前 Android APP 的版本号, 字符串形式，例如 `"1.0.0"`。

**Returns:** *string*

版本号

___

###  getAppVersionCode

▸ **getAppVersionCode**(): *number*

获取当前 Android APP 的版本号, 数字形式，例如 `1`，可用于比较。

**Returns:** *number*

版本号

___

###  getBrightness

▸ **getBrightness**(): *number*

获取当前屏幕亮度。\
**TODO: 该功能尚未实现。**

**Returns:** *number*

- 屏幕亮度

___

###  getDeviceMetadata

▸ **getDeviceMetadata**(): *[DeviceMetadata](devicemetadata.md)*

获取设备的其他信息。

**Returns:** *[DeviceMetadata](devicemetadata.md)*

设备信息

___

###  getIMEI

▸ **getIMEI**(`method?`: number): *Promise‹string | null›*

获取设备地 IMEI 码，异步版本，等待用户响应授权请求后返回。\
如果无法获取 (如系统版本或权限问题), 返回 `null`。\
**(!)** 如果缺少权限, 会提示用户授权，并在用户响应后返回结果。\
**(!)** 该方法返回的识别码可能因网络情况变化而变化，且不保证与真实值一致。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`method?` | number | 获取方式 |

**Returns:** *Promise‹string | null›*

___

###  getSerialNumber

▸ **getSerialNumber**(`method?`: number): *Promise‹string | null›*

获取设备的序列号 (Serial Number)，异步版本，等待用户响应授权请求后返回。\
如果无法获取 (如系统版本或权限问题), 返回 `null`。\
**(!)** 如果缺少权限, 会提示用户授权，并在用户响应后返回结果。\
**(!)** 该方法返回的序列号不保证与真实值一致。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`method?` | number | 获取方式 |

**Returns:** *Promise‹string | null›*

序列号，或 `null`

___

###  getVolume

▸ **getVolume**(): *number*

获取当前音量。\
**TODO: 该功能尚未实现。**

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
**(!)** 锁屏时会弹出 Android 系统的提示框, 需要用户点击同意后才会进入锁屏模式。

**Returns:** *void*

___

###  quitApp

▸ **quitApp**(): *void*

关闭退出 APP

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
**TODO: 该功能尚未实现。**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`brightness` | number | 要设置的屏幕亮度  |

**Returns:** *void*

___

###  setStatusBarColor

▸ **setStatusBarColor**(`color`: string): *void*

设置 APP 顶部状态栏的颜色。(时钟、信号显示区域的背景颜色)\
状态栏的文本会根据颜色自动调整暗色或亮色。\
颜色格式为 `#RRGGBB` 或 `#AARRGGBB`，也接受常见颜色名如 `red`，`blue` 等。\
详见 https://developer.android.com/reference/android/graphics/Color#parseColor(java.lang.String)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | string | 颜色字符串  |

**Returns:** *void*

___

###  setVolume

▸ **setVolume**(`volume`: number): *void*

设置音量。\
**TODO: 该功能尚未实现。**

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
