// 문제: LeetCode 14. Longest Common Prefix
// 상태: 풀지 못함
// 접근: 첫 번째 문자열을 prefix 후보로 두고, 모든 문자열이 시작할 때까지 뒤에서 한 글자씩 줄인다.
// 시간복잡도: O(n * m^2)
// 공간복잡도: O(1)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
};
