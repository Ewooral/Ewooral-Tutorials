from dataclasses import dataclass


@dataclass
class LongestList:
    my_list: list
    _another: int = 100

    def find_longest_list(self):
        word = None
        max_length = 0
        for s in self.my_list:
            if len(s) > max_length:
                word = s
        print(word)

    def find_longest_list_v2(self):
        word = max(self.my_list, key=len, default=" ")
        return word

    # encapsulation
    def calculus(self):
        return self._another * 2


def main():
    # longest string
    longest_string = LongestList(["I", "like", "Python", "Dictionary is it"])
    longest_string.find_longest_list()
    print(longest_string.find_longest_list_v2())
    print(longest_string.calculus())


if __name__ == '__main__':
    main()
