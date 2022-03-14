import unittest
from biggest_loss import largest_possible_loss
class TestBiggestLoss(unittest.TestCase):
    def test_biggest_loss(self):
        largest_loss = largest_possible_loss([234, 32, 3, 44, 64, 1])
        self.assertEqual(largest_loss, 29)
        self.assertEqual(largest_loss, 60)
        self.assertEqual(largest_loss, 202)

if __name__ == '__main__':
    unittest.main()
    print("Everything Passed")

 
