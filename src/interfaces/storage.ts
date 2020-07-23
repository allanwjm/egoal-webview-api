/**
 * 数据存储相关功能接口。\
 * 目前简单实现了键值对的存储, 暂只支持 string 类型, 可以自行转换为其它类型 (包括 JSON)。
 */
export default interface StorageInterface {
  /**
   * 清除保存的所有数据。
   */
  clear(): void;

  /**
   * 清除一条指定的数据。
   * @param {string} key - 键
   */
  remove(key: string): void;

  /**
   * 检查一条数据是否存在 (被设为空字符串也视为存在)。
   * @param {string} key - 键
   * @returns {boolean} - 是否存在
   */
  exists(key: string): boolean;

  /**
   * 读取一条数据 (目前只支持 string 类型, 可自行转换其它类型)。
   * @param {string} key - 键
   * @param {string} _default - 数据不存在时的默认值
   * @returns {string} - 数据值, 或默认值, 或 undefined
   */
  get(key: string, _default?: string): string;

  /**
   * 保存一条数据 (目前只支持 string 类型, 可自行转换其它类型)。
   * @param {string} key - 键
   * @param {string} value - 值
   */
  set(key: string, value: string);
}
