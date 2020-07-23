[egoal-webview-api](../README.md) › [MessageInterface](messageinterface.md)

# Interface: MessageInterface

消息提示相关功能接口。

## Hierarchy

* **MessageInterface**

## Index

### Methods

* [beep](messageinterface.md#beep)
* [dismissToast](messageinterface.md#dismisstoast)
* [toast](messageinterface.md#toast)

## Methods

###  beep

▸ **beep**(): *void*

发出蜂鸣声。

**Returns:** *void*

___

###  dismissToast

▸ **dismissToast**(): *void*

收起当前显示的 toast。

**Returns:** *void*

___

###  toast

▸ **toast**(`message`: string): *void*

显示底部弹出消息 (toast), 该消息同时只能显示一条。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | 要显示的内容  |

**Returns:** *void*
