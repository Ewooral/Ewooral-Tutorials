from Calculator import square, hello
import pytest


def test_positive():
    assert square(2) == 4
    assert square(3) == 9
    assert square(6) == 36


def test_negative():
    assert square(-2) == 4
    assert square(-3) == 9
    assert square(-6) == 36


def test_zero():
    assert square(0) == 0


def test_str():
    with pytest.raises(TypeError):
        square("cat")


def test_hello():
    assert hello("Elijah") == "hello, Elijah"
    assert hello() == "hello, world"
