async function hash(string) {
    // 将输入字符串编码为 UTF-8 格式
    const utf8 = new TextEncoder().encode(string);
    // 使用 SHA-256 算法计算输入字符串的哈希值，并等待结果
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    // 将哈希值转换为数组格式
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // 将哈希数组转换为十六进制字符串
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    // 返回十六进制字符串形式的哈希值
    return hashHex;
}