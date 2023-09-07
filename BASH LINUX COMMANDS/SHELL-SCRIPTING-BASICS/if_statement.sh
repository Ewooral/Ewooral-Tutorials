count = 0
limit = 9


if [count -eq limit]; then
    count += 1
fi


age=18
if [ $age -ge 18 ]; then
    echo "You are eligible to vote."
else
    echo "You are not eligible to vote yet."
fi