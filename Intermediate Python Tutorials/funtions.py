def increment_dictionary_values(d, i):
    
    for k, v in d.items():
        d[k] = v + i 
    return d

print(increment_dictionary_values({'a': 1}, 10))
# from unittest import TestCase
# class TestIncrementDictionaryValues(TestCase):
#      def test_increment_dictionary_values(self):
#          d = {'a': 1}
#          dd = increment_dictionary_values(d, 1)
#          ddd = increment_dictionary_values(d, -1)
#          self.assertEqual(dd['a'], 2)
#          self.assertEqual(ddd['a'], 0)


# assert sum([1, 2, 1]) == 6

