const [a, b, ...rest] = [1, 3, 5, 9, 10]

console.log(a)
console.log(b)
console.log(rest)

const {c, d, ...chest} = {c:"name", d:"age", e:"address", f:"education background", f:"grade" }
console.log(c)
console.log(d)
console.log(chest)
console.log(chest["e"])