#! /bin/bash

age=18
if [ $age -ge 18 ]; then
    echo "You are eligible to vote."
else
    echo "You are not eligible to vote yet."
fi

value=5

if ![ $value -le 6 ]; then
    ((value++))
    echo "Value is incremented to $value"
else
    echo "Value is not incremented"
fi

echo "Value: $value"