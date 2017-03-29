# permutations
Javascript library that returns an array of all possible permutations of the given array.

To Use:

var permutation = require('./permutations');

var perms = permutation(['Dog', 7, 99, 'Something else']);

returns the following as the result (as perms):

[
    ["Dog", 7, 99, "Something else"],
    ["Dog", 7, "Something else", 99],
    ["Dog", 99, 7, "Something else"],
    ["Dog", 99, "Something else", 7],
    ["Dog", "Something else", 7, 99],
    ["Dog", "Something else", 99, 7],
    [7, "Dog", 99, "Something else"],
    [7, "Dog", "Something else", 99],
    [7, 99, "Dog", "Something else"],
    [7, 99, "Something else", "Dog"],
    [7, "Something else", "Dog", 99],
    [7, "Something else", 99, "Dog"],
    [99, "Dog", 7, "Something else"],
    [99, "Dog", "Something else", 7],
    [99, 7, "Dog", "Something else"],
    [99, 7, "Something else", "Dog"],
    [99, "Something else", "Dog", 7],
    [99, "Something else", 7, "Dog"],
    ["Something else", "Dog", 7, 99],
    ["Something else", "Dog", 99, 7],
    ["Something else", 7, "Dog", 99],
    ["Something else", 7, 99, "Dog"],
    ["Something else", 99, "Dog", 7],
    ["Something else", 99, 7, "Dog"]
]
