import unittest
from funtions import increment_dictionary_values

class TestIncrementDictionaryValues(unittest.TestCase):
    def test_increment_dictionary_values(self):
        d = {'a': 1}
        dd = increment_dictionary_values(d, 1)
        ddd = increment_dictionary_values(d, -1)
        print(ddd,d, dd)
        self.assertEqual(dd['a'], 2)
        self.assertEqual(ddd['a'], 0)

if __name__ == '__main__':
    unittest.main()

 