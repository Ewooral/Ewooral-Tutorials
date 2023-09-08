#!/bin/bash 
Always begin your script with the above command

## Print message
    echo "message"

## Show contents of a message
    cat "filename" or "message"

## Redirect contents to a file
    command > filename
if the filename does not exits, it will be created, if it does
its contents will be overwritten

## Append to a file
    command >> filename

## Delete all contents of a folder
    rm *
## know your shells
 cat /etc/shells

## create a copy of a file and rename it
    cp elia.txt kb.txt

## rename a file to another name
    mv elia.txt elia.pdf

## change permission of a file
    chmod

## open a pdf file 
    evince 'filename.pdf'
make sure terminal path points to the location of the file

## COMMENTS
oneline comments
E.g. #..............

multi-line commenting

: '
  .......
  ......
  ........
  '

## HERE DOCUMENT DELIMITER
In Bash scripting, the here document (here doc) is a way to redirect 
input to a command or script using a block of text. The here doc delimiter 
is used to indicate the start and end of the block. It allows you to easily 
pass multiple lines of input to a command or script without the need for external files. 

```bash
command << DELIMITER
  text
DELIMITER

cat <<USERNAME
 firstname = elijah
 lastname = boahen
USERNAME

```


## DECLARE A VARIABLE
variable_name = "value"
```bash
name = "John"
age = 30
```


## SHELL OPERATORS

1. Arithmetic Operators: 
   - Addition:  +  
   - Subtraction:  -  
   - Multiplication:  *  
   - Division:  /  
   - Modulo (Remainder):  %  
   - Increment:  ++  
   - Decrement:  --  
 
2. Comparison Operators: 
   - Equal to:  -eq 
   - Not equal to:  !=  
   - Greater than:  -gt  
   - Less than: -lt  
   - Greater than or equal to:  -ge  
   - Less than or equal to:  -le  
 
3. String Operators: 
   - Concatenation:  +  
   - Equality:  =  
   - Inequality:  !=  
   - Length:  ${#string}  
 
4. Logical Operators: 
   - AND:  -a  or  &&  
   - OR:  -o  or  ||  
   - NOT:  !  
 
5. Assignment Operators: 
   - Assign value:  =  
   - Add and assign:  +=  
   - Subtract and assign:  -=  
   - Multiply and assign:  *=  
   - Divide and assign:  /=  
   - Modulo and assign:  %=  
 
6. File Operators: 
   - Existence:  -e  
   - Regular file:  -f  
   - Directory:  -d  
   - Readable:  -r  
   - Writable:  -w  
   - Executable:  -x  
 
These are just a few examples of the operators available in Bash scripting. They are used for arithmetic calculations, comparisons, string manipulations, logical conditions, and file operations.
Question :

and their usage in code
Answer :

Share icon
Thank you for clarifying the default language. I'll continue to respond in English unless specified otherwise. 
 
Regarding the usage of operators in code, here are a few examples to demonstrate their usage in Bash scripting: 
 
1. Arithmetic Operators:
bash
# Addition
result=$((2 + 3))
echo $result  # Output: 5

# Increment
value=5
((value++))
echo $value  # Output: 6
2. Comparison Operators:
bash
# Equal to
if [ $value -eq 5 ]; then
    echo "Value is equal to 5"
fi

# Greater than
if [ $value -gt 10 ]; then
    echo "Value is greater than 10"
fi
3. String Operators:
bash
# Concatenation
name="John"
greeting="Hello, "$name"!"
echo $greeting  # Output: Hello, John!

# Equality
if [ "$name" = "John" ]; then
    echo "Name is John"
fi
4. Logical Operators:
bash
# AND
if [ $value -gt 0 ] && [ $value -lt 10 ]; then
    echo "Value is between 0 and 10"
fi

# OR
if [ $value -eq 0 ] || [ $value -eq 10 ]; then
    echo "Value is either 0 or 10"
fi

# NOT
if ! [ $value -eq 5 ]; then
    echo "Value is not equal to 5"
fi

## CONDITIONAL STATEMENTS
    executes a statement based on some conditions
 
 1. IF SYNTAX.......................................................

    if [ condition ]; then
        # code to be executed if condition is true
    else
        # code to be executed if condition is false
    fi
 The  if  keyword marks the start of the if statement. 
- The condition is enclosed within square brackets  [ ] . 
It can be a command, an expression, or a comparison. 
- The  then  keyword marks the start of the code block to 
be executed if the condition is true. 
- The code block to be executed if the condition is true is written 
after the  then  keyword and before the  else  keyword (if present). 
- The  else  keyword marks the start of the code block to be executed 
if the condition is false. 
- The code block to be executed if the condition is false is written 
after the  else  keyword and before the  fi  keyword. 
- The  fi  keyword marks the end of the if statement. 

```bash
isTrue = "Yes"
count = 12
if [ $count -eq 12 ]
then
    echo $isTrue 

fi
```

2. WHILE SYNTAX........................................................

    while [ condition ]
    do
        # code to be executed
    done

- The  while  keyword marks the start of the while loop. 
- The condition is enclosed within square brackets  [ ] . It can be a command, an expression, or a comparison. 
- The  do  keyword marks the start of the code block to be executed as long as the condition is true. 
- The code block to be executed is written after the  do  keyword and before the  done  keyword. 
- The  done  keyword marks the end of the while loop. 

```bash
#!/bin/bash

count=0
limit=8

while [ $count -lt $limit ]; do
    echo $count
    ((count++))
done
```


