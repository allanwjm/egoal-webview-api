[egoal-webview-api](../README.md) › [StorageInterface](storageinterface.md)

# Interface: StorageInterface

数据存储相关功能接口。
目前简单实现了键值对的存储, 暂只支持 string 类型, 可以自行转换为其它类型 (包括 JSON)。

## Hierarchy

* **StorageInterface**

## Index

### Methods

* [clear](storageinterface.md#clear)
* [exists](storageinterface.md#exists)
* [get](storageinterface.md#get)
* [remove](storageinterface.md#remove)
* [set](storageinterface.md#set)

## Methods

###  clear

▸ **clear**(): *void*

清除保存的所有数据。

**Returns:** *void*

___

###  exists

▸ **exists**(`key`: string): *boolean*

检查一条数据是否存在 (被设为空字符串也视为存在)。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | 键 |

**Returns:** *boolean*

- 是否存在

___

###  get

▸ **get**(`key`: string, `_default?`: string): *string*

读取一条数据 (目前只支持 string 类型, 可自行转换其它类型)。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | 键 |
`_default?` | string | 数据不存在时的默认值 |

**Returns:** *string*

- 数据值, 或默认值, 或 undefined

___

###  remove

▸ **remove**(`key`: string): *void*

清除一条指定的数据。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | 键  |

**Returns:** *void*

___

###  set

▸ **set**(`key`: string, `value`: string): *any*

保存一条数据 (目前只支持 string 类型, 可自行转换其它类型)。

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | 键 |
`value` | string | 值  |

**Returns:** *any*
