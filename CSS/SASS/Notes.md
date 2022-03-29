## A CSS preprocessor 
is a program that lets you generate CSS from the preprocessor’s own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don’t exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

## Why use preprocessors?

The primary advantages are as follows:

    Cleaner code thanks to variables and nesting.
    Greater ease of maintenance and organisation as we can separate our files into modules.
    Ability to implement logic and calculation in our stylesheets.
    Overall improvement in workflow, which will save hours of development time!

Of all the preprocessors, **SASS (Syntactically Awesome Style Sheets )** is by far the most popular within the developer community.


## What is SASS?#

SASS (Syntactically Awesome Style Sheets ) is a scripting language that provides us with features and tools that regular CSS doesn’t have.

Using SASS we can write more readable, maintainable and reusable code. Think of it as an extension that adds power and elegance to CSS.

It gives us various features such as:

    Variables
    Nesting
    Mixins
    Functions
    Partials & Imports
    Inheritance (Extend functionality)
    Control directives

In other words, SASS helps us organize large stylesheets in a more maintainable way.

And we’ll be looking into all of these features throughout this course!
SCSS or Sass?


## Variables 
    in Sass are a way to store information that you want to reuse throughout your stylesheet.

    They allow us to store values for colors, fonts or really any CSS value that you want to reuse!

    We use the ＄ symbol when we wish to make something a variable.
    Example#

In our SCSS, let’s define a color variable:

    ```scss
    $color-primary: #ffff00; // Yellow

    body {
    background-color: $color-primary;
    }
    ```

This will of course, set our background-color to yellow. It’s that simple!

    Note: You can use single line comments in Sass with //.

    When we then run our compile*, it’ll output the following CSS:
```scss
body {
color: #ffff00;
}
```
This becomes extremely powerful when working on large projects!

If you wish to make a change to a colour used throughout your stylesheets, it’s much simpler to alter if the color is defined in one location as a single variable.

The alternative to changing the value of one variable defined at one location is finding and replacing every reference to the value you want to change. This is a much more tedious task, especially if you want to implement a quick change to test out a different color or font.

Next up let’s look at the nesting syntax!

* Later in the course we’ll examine this process in detail. For now it’s good to know that when we save our code into **sass/main.scss**, 
it’ll automatically compile into the **css/style.css** file!





# NESTING

In this lesson, we'll be introducing the SASS nesting syntax.
We'll cover the following

        Definition
        Example 

When you observe the structure of an HTML file, you’ll notice it has a very clear hierarchy:

<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>

As you can see, HTML has a structure that makes it quite easy to read.

CSS, on the other hand, lacks this visual structure. Which is why it has a tendency to become disorganized quite quickly. Enter Sass nesting!
Definition#

Using nesting, we can nest child selectors inside of the parent selector.

This results in much cleaner and less repetitive code.
Example#

Take the following HTML:

<nav class="navbar">
  <ul>
    <li>Home</li>
    <li>Store</li>
    <li>Contact Us</li>
  </ul>
</nav>

Using regular CSS, we would write this like so:

```css
.navbar {
  background-color: orangered;
  padding: 1rem;
}
.navbar ul {
  list-style: none;
}
.navbar li {
  text-align: center;
  margin: 1rem;
}
```

There’s a lot of repetition here. Each time we want to style a child of navbar, we have to repeat the class name.

    With Sass, we can write much cleaner code.

    Like so:

``` scss
.navbar {
  background-color: orangered;
  padding: 1rem;
  ul {
    list-style: none;
  }
  li {
    text-align: center;
    margin: 1rem;
  }
}
```


Mixins

In this lesson, we'll be looking at the SASS mixin syntax.
We'll cover the following

        Definition
        Example 

Definition#

Another powerful feature of Sass are mixins. Using mixins, you can group together multiple CSS declarations for reuse throughout your project.
Example#

Say we want to create a mixin to hold the vendor prefixes for a transform property.

in SASS, we’d code it like so:
``` SCSS
@mixin transform {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

To add the mixin into our code, we then use the @include directive, like so:

.navbar {
  background-color: orangered;
  padding: 1rem;
  ul {
    list-style: none;
  }
  li {
    text-align: center;
    margin: 1rem;
    @include transform;
  }
}
```
Note: Don’t worry too much about where to put your mixin code for now. This will be explained in the next chapter. For now, just take note of the general idea!

All the code in the transform mixin will now be applied to the li element. You can also pass values into your mixins to make them even more flexible.

Instead of adding a specified value, add a name (using a variable, like property) to represent the value like so:

```SCSS
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

Now we can pass in whatever value we like, whenever we call the mixin:

@include transform (rotate(20deg));

In our next lesson, we’ll take a look at the function syntax.
