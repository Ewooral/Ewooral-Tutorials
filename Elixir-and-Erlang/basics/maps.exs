# create a map
employee = %{"first name" => "Elijah", "last name" => "Boahen"}
IO.puts(employee["first name"])

# update
john = %{employee | "first name" => "Samuel", "last name" => "Steele"}
IO.puts(john["first name"])

# using atoms as keys on maps
letters = %{:a => "A", :b => "B", :c => "C", :d => "D"}
IO.puts(letters.a)
