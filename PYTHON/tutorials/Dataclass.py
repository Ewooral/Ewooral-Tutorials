from dataclasses import dataclass


@dataclass
class LongestList:
    my_list: list
    # encapsulation
    _max_length: int = 0
    _index: int = 0
    _word: str = None

    # O(1) T, O(1) S
    def find_longest_list_v2(self) -> str:
        word = max(self.my_list, key=len, default="")
        return word

    # O(n) T, O(1) S
    def find_longest_list(self):
        word = None
        max_length = 0
        for s in self.my_list:
            if len(s) > max_length:
                word = s
        return word

    # helper function
    # O(1) T, O(1) S
    def _notEndOfLoop(self) -> int:
        if self._index < len(self.my_list):
            return True
        else:
            return False

    # O(n) T, O(1) S
    def longestString(self) -> str:
        while self._notEndOfLoop():
            if len(self.my_list[self._index]) > self._max_length:
                self._word = self.my_list[self._index]
                self._index += 1
        return self._word


def main():
    # longest string
    longest_string = LongestList(["I", "like", "Python", " And Dictionary as well"])

    print("Approach 1: ", longest_string.find_longest_list())
    print("Approach 2: ", longest_string.find_longest_list_v2())
    print("Approach 3: ", longest_string.longestString())


if __name__ == '__main__':
    main()

# Solution
'''
Approach 1:   And Dictionary as well
Approach 2:   And Dictionary as well
Approach 3:   And Dictionary as well
'''