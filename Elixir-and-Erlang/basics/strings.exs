IO.puts("Elixir string tutorial")

# concatenation
firstname = "Elijah"
lastname = "Boahen"
IO.puts(firstname <> " " <> lastname)

# Interpolation - placing a value in the middle of a string
noun = "name of a person, \"animals\", place or a thing"
IO.puts("Definition of a noun: #{noun}")

age = 30
address = "Ashaiman"
IO.puts("Age: #{30} and Address: #{address}")

IO.puts(String.bag_distance(String.at(firstname, 0), String.at(lastname, 3)))
