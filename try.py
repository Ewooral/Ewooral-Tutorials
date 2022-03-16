def reverse(Str):
    if not Str or len(Str) < 2 or type(Str) != str:
        print("hmm... that's not a string")
    # return Str[::-1]
   
    
    reverse_words = [];
    last = len(Str) - 1
    for i in range(last, -1, -1):
        reverse_words.append(Str[i])
        
    return "".join(reverse_words)

print(reverse("t"))







 
