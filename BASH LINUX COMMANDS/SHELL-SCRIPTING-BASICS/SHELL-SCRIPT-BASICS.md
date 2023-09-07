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

