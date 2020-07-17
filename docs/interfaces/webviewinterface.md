[egoal-webview-api](../README.md) › [WebviewInterface](webviewinterface.md)

# Interface: WebviewInterface

## Hierarchy

* **WebviewInterface**

## Index

### Methods

* [clearHistory](webviewinterface.md#clearhistory)
* [gotoUrl](webviewinterface.md#gotourl)
* [reload](webviewinterface.md#reload)

## Methods

###  clearHistory

▸ **clearHistory**(): *void*

清除浏览器历史记录 (使返回键不再能返回上一页面)
(!) 该方法只在 Android APP 中有效。

**Returns:** *void*

___

###  gotoUrl

▸ **gotoUrl**(`url`: string): *void*

打开一个页面。效果等同 `window.location.href = url`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | 要打开的页面 URL  |

**Returns:** *void*

___

###  reload

▸ **reload**(): *void*

刷新当前页面。效果等同 `window.location.reload()`

**Returns:** *void*
