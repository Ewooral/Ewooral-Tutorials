The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.

    https://tailwindcss.com/docs/installation

# TAILWIND CSS SYNTAX

To manipulate text using tailwind use the following

### Customize property

    text-["value"]
    h-[12px]
    w-[100vh]
    rounded-[5px]

### manipulate background color, spacing, margins, paddings, fonts, height, width ..

        - font-property = changes font family eg. font-bold, font-mono
        - w-property = add property to width eg w-6, w-full
        - h-property = changes height eg. h-10, h-full
        - bg-property = changes the background color eg. bg-violet-300 (-300 sets how deep it should be)
        - m-property = sets margin eg. ml-4, mr-2, mx-4 (left and right), my-2 (top and bottom)
        - border-property = sets border color eg. border-violet
        - rounded-property = set border radius eg. rounded-full, rounded-lg

### LAYOUT AND FLEXBOX

- LAYOUT:
  is the arrangement and positioning of elements on the website

* Position

        - fixed, sticky, top-property, bottom-property, relative, absolute

- DISPLAY:
  determines how the element behaves in terms of layout and visibility within the document
  it controls how elements are displayed

        - block, inline, inline block, none, flex, grid

        flex = justify-property, space-property(space-x, space-y)
        grid = gap-property, grid-col, grid-row

### MEDIA QUERIES
