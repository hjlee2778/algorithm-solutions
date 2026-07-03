# 14. Longest Common Prefix

- 문제 링크: https://leetcode.com/problems/longest-common-prefix/
- 난이도: Easy
- 풀이 상태: 풀지 못함

## 문제 요약

문자열 배열 `strs`가 주어졌을 때, 모든 문자열이 공통으로 가지는 가장 긴 접두사를 반환한다.

공통 접두사가 없으면 빈 문자열 `""`을 반환한다.

## 접근 방법

첫 번째 문자열을 가장 긴 접두사 후보로 둔다.

이후 나머지 문자열을 하나씩 확인하면서, 현재 문자열이 `prefix`로 시작하지 않으면 `prefix`의 마지막 글자를 제거한다.

모든 문자열이 현재 `prefix`로 시작할 때까지 이 과정을 반복하면, 마지막에 남은 `prefix`가 정답이다.

예를 들어 `["flower", "flow", "flight"]`라면:

1. `prefix = "flower"`로 시작한다.
2. `"flow"`는 `"flower"`로 시작하지 않으므로 `"flow"`가 될 때까지 줄인다.
3. `"flight"`는 `"flow"`로 시작하지 않으므로 `"fl"`이 될 때까지 줄인다.
4. 모든 문자열이 `"fl"`로 시작하므로 정답은 `"fl"`이다.

## 코드

```javascript
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
```

## 시간복잡도

`n`을 문자열 개수, `m`을 문자열 최대 길이라고 하면 최악의 경우 `O(n * m^2)`이다.

`startsWith(prefix)`가 prefix 길이만큼 비교하고, prefix를 여러 번 줄일 수 있기 때문이다.

문제 제한이 `strs.length <= 200`, `strs[i].length <= 200`이라 충분히 통과 가능한 범위다.

## 공간복잡도

추가 자료구조를 사용하지 않으므로 `O(1)`이다.

## 가장 중요하게 기억해야 할 개념

- `String.prototype.startsWith(prefix)`: 문자열이 특정 접두사로 시작하는지 확인할 때 사용한다.
- `String.prototype.slice(0, end)`: 문자열의 앞부분만 남기거나, 뒤에서 한 글자씩 줄일 때 사용할 수 있다.
- 이 문제의 핵심은 공통 접두사를 새로 조립하는 것이 아니라, 가능한 가장 긴 후보를 잡고 조건에 맞을 때까지 줄이는 것이다.

## 헷갈렸던 점

- 공통 접두사를 새로 만들어가는 방식보다, 가장 긴 후보를 잡고 줄이는 방식이 더 단순하다.
- `strs` 길이는 최소 1이므로 `strs[0]`을 바로 기준으로 잡을 수 있다.
- 공통 접두사가 전혀 없으면 prefix가 `""`이 되는 순간 바로 반환하면 된다.

## 실수한 부분

- 못 푼 문제였기 때문에, 처음부터 정답 코드를 외우기보다 `prefix 후보를 줄인다`는 사고 과정을 기억하는 것이 중요하다.

## 리뷰 후 개선점

- 이 문제는 세로 비교 방식으로도 풀 수 있다. 첫 번째 문자열의 각 인덱스를 기준으로 모든 문자열의 같은 위치 문자를 비교하면 `O(n * m)`으로 설명하기 더 깔끔하다.
- 다만 현재 풀이는 직관적이고 구현이 짧아서 Easy 문제 풀이로 충분히 적합하다.
