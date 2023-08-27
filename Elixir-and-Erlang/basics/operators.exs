defmodule Operators do
  @moduledoc """

  These operators can accept any type of arguments. Everything
  that is not false or nil gets evaluated to true

  """
  IO.puts(".....AND.....")
  IO.puts(true and false)
  IO.puts(false and true)
  IO.puts(true and "results")
  IO.puts(false and "results")

  IO.puts(".....OR.....")
  IO.puts(false or true)
  IO.puts(true or false)
  IO.puts(true or "results")
  IO.puts(false or "results")

  IO.puts("....NOT....")
  IO.puts(not false)
  IO.puts(not true)

  IO.puts(".... &&, ||, !, ===,  ....")

  IO.puts("results" && 12)
  IO.puts(false && 12)
  IO.puts(11 && 112)
  IO.puts(11 && 11)
  IO.puts(11 && 1)
  IO.puts(nil && 1)
  IO.puts(false && "results")
  IO.puts(false && true)
  IO.puts(true && false)
  IO.puts(100 || 11)
  IO.puts(11 || nil)
  IO.puts(!false)
  IO.puts(!nil)
  IO.puts(!true)
  IO.puts(1 === 1)
  IO.puts(1 == 1)
end
