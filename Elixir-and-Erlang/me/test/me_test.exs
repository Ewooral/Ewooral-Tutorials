defmodule MeTest do
  use ExUnit.Case
  doctest Me

  test "greets the world" do
    assert Me.hello() == :world
  end
end
