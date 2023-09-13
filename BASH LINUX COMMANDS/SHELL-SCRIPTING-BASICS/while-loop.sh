# check if the value n is <= 5
# !/bin/bash

n=1
while [ $n -le 5 ]; do
   echo "Iteration number $n"
   ((n+=1))
done

