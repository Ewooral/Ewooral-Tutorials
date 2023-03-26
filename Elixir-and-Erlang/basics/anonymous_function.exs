add = fn a, b -> a + b end
IO.puts(add.(10, 20))

substract = fn c, d -> c - d end
IO.puts(substract.(7, 5))

# anonymous functions can also access variables that are in scope when the function is defined
double = fn a -> add.(a, a) end
IO.puts(double.(50))
