[egoal-webview-api](../README.md) › [MessageInterface](messageinterface.md)

# Interface: MessageInterface

消息提示相关功能接口。

## Hierarchy

* **MessageInterface**

## Index

### Methods

* [alert](messageinterface.md#alert)
* [beep](messageinterface.md#beep)
* [confirm](messageinterface.md#confirm)
* [dismissToast](messageinterface.md#dismisstoast)
* [prompt](messageinterface.md#prompt)
* [toast](messageinterface.md#toast)

## Methods

###  alert

▸ **alert**(`message?`: any): *void*

用法同 JavaScript alert()。
会调用 APP 内的弹窗而不是浏览器的弹窗。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message?` | any | 要显示的内容  |

**Returns:** *void*

___

###  beep

▸ **beep**(): *void*

发出蜂鸣声。

**Returns:** *void*

___

###  confirm

▸ **confirm**(`message?`: string): *boolean*

用法同 JavaScript confirm()。
会调用 APP 内的弹窗而不是浏览器的弹窗。

**Parameters:**

Name | Type |
------ | ------ |
`message?` | string |

**Returns:** *boolean*

___

###  dismissToast

▸ **dismissToast**(): *void*

收起当前显示的 toast。

**Returns:** *void*

___

###  prompt

▸ **prompt**(`message?`: string, `_default?`: string): *string*

用法同 JavaScript prompt()。
会调用 APP 内的弹窗而不是浏览器的弹窗。

**Parameters:**

Name | Type |
------ | ------ |
`message?` | string |
`_default?` | string |

**Returns:** *string*

用户输入的内容

___

###  toast

▸ **toast**(`message`: string): *void*

显示底部弹出消息 (toast), 该消息同时只能显示一条。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | 要显示的内容  |

**Returns:** *void*
