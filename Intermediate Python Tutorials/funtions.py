def increment_dictionary_values(d, i):
    
    for k, v in d.items():
        d[k] = v + i 
    return d



d = {"a":1, "b":2, "c":3}
result = increment_dictionary_values(d, 2)
print(result)
