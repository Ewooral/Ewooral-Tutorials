## Concatenation
Two lists can be concatenated or subtracted using the ++/2 and --/2 operators respectively:

iex> [1, 2, 3] ++ [4, 5, 6]
[1, 2, 3, 4, 5, 6]
iex> [1, true, 2, false, 3, true] -- [true, false]
[1, 2, 3, true]


        List operators never modify the existing list. 
        Concatenating to or removing elements from a list `returns a new list`. 
        We say that `Elixir data structures are immutable`. One advantage of immutability is
        that it leads to clearer code. You can freely pass the data around with 
        the guarantee no one will mutate it in memory - only transform it.


* Note: Keep in mind 'single-quoted' and 
"double-quoted" representations are not equivalent in Elixir as they are represented by different types:

        iex> 'hello' == "hello"
              false
