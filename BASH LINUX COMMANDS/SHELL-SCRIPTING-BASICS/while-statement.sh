#! /bin/bash

count=0
limit=8
found=false

# while [[ $count -lt $limit && $limit -eq 8 ]]; do
while [ $count -lt $limit ] && [ $limit -eq 8 ]; do
: '
-lt = less than
-eq = equal to
-gt = greater than
'   
 echo "$count"
    
    # Some condition to check
    if [ $count -eq 3 ]; then
        found=true
        break
    fi

    ((count++))
done

if $found; then
    echo "Value 3 found!"
else
    echo "Value 3 not found!"
fi

: '
In this example, the  while  loop iterates until the condition  
$count -lt $limit  is true. If a specific condition is met (in this case, when  $count  equals 3),
we set the  found  variable to  true  and break out of the loop using  break . 
After the  while  loop, we can use an  if  statement to check the value of  found 
and execute the corresponding code block. 
 
So, while there is no direct  else  clause for the  while  loop, you can 
achieve similar behavior by using additional conditional statements within the loop.
'
