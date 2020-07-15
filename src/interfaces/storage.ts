export interface StorageInterface {
  /**
   * 清除保存的所有数据
   */
  clearAll();

  /**
   * 清除一条数据
   * @param {string} key - 键
   */
  clear(key: string);

  /**
   * 检查一条数据是否存在 (被设为空也视为存在)
   * @param {string} key - 键
   * @returns {boolean} - 是否存在
   */
  exists(key: string): boolean;

  /**
   * 读取一条数据 (目前只支持 string 类型，可自行转换其它类型)
   * @param {string} key - 键
   * @param {string} _default - 数据不存在时的默认值
   * @returns {string} - 数据值，或默认值，或 undefined
   */
  get(key: string, _default?: string): string;

  /**
   * 保存一条数据 (目前只支持 string 类型，可自行转换其它类型)
   * @param {string} key - 键
   * @param {string} value - 值
   */
  set(key: string, value: string);
}
