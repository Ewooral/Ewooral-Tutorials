from name.name import hello

def test_hello():
    assert hello("Elijah") == "hello, Elijah"
    assert hello() == "hello, world"


