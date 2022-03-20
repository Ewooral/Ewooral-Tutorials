
# 1- STRINGS FORMATTING 

name = 'Elijah';
errno = 50159747054;

# Old fashioned
print('Hello %s' % name);

# Here, I’m using the %x format specifier to convert an int value to a
# string and to represent it as a hexadecimal number:
print('%x' % errno);


print('Hey %s, there is a 0x%x error!' % (name, errno))

print('Hey %(name)s, there is a 0x%(errno)x error!' 
      % { "name": name, "errno": errno})


# NEW STYLE STRING FORMATTING

name = 'Elijah'
errno = 50159747054


# 2 – “New Style” String Formatting
print('Hello, {}'.format(name))

# 3 – Literal String Interpolation (Python 3.6+)
def greet(name, question):
 return f"Hello, {name}! How's it {question}?"


print(greet('Bob', 'going'))

print(f"Hey {name}, there's a {errno:#x} error!")


# 4 – Template Strings
from string import Template
t = Template('Hey, $name!')
t.substitute(name=name)
