@doc """
Anonymous functions

Elixir also provides anonymous functions. Anonymous functions allow us to
store and pass executable code around as if it was an integer or a string.
They are delimited by the keywords fn and end:

iex> add = fn a, b -> a + b end
"""

add = fn a, b -> a + b end
IO.puts(add.(10, 20))
# Note that a dot (.) between the variable and parentheses
# is required to invoke an anonymous function

substract = fn c, d -> c - d end
IO.puts(substract.(7, 5))

# anonymous functions can also access variables that are in scope when the function is defined
double = fn a -> add.(a, a) end
IO.puts(double.(50))
