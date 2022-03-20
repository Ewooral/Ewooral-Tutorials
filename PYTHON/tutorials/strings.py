# STRINGS FORMATTING 
name = 'Elijah';
errno = 50159747054;

# Old fashioned
print('Hello %s' % name);

# Here, I’m using the %x format specifier to convert an int value to a
# string and to represent it as a hexadecimal number:
print('%x' % errno);


print('Hey %s, there is a 0x%x error!' % (name, errno))
