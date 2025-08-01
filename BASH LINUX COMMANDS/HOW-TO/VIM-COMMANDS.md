necessary vim commands:

    i - go to insert mode starting before the current cursor position
    a - go to insert mode starting after the current cursor position
    o - go to insert mode after adding a new blank line after the current one
    :w - write file
    :q - quit
    :x - write file, then quit
    u - undo last edit
    ctrl-r - redo
    / - search forward in the file
    ? - search backward in the file 

splitscreen editing:

    :sp - split window and open same file in that sub-window (useful for comparing two sections of the same file)
    :sp anotherfile - split window and open anotherfile in that sub-window
    ctrl-w down-arrow - switch focus to sub-window below
    ctrl-w up-arrow - switch focus to sub-window above
    :q - quit the sub-window that's currently in focus 

moving around:

    :0 - go to line zero
    :3476 - go to line 3476
    :+34 - go 34 lines forward
    :-76 - go 76 lines backward
    G - go to last line of file
    w - move ahead one word
    W - move ahead one whitespace-delimited word
    b - move back one word
    B - move back one whitespace-delimited word
    } - move ahead one paragraph (to the next empty line without any whitespace)
    { - move back one paragraph (to the next empty line without any whitespace) 

spellcheck:

    ]s - go to next misspelled word
    [s - go to previous misspelled word
    zg - add word under the cursor to (good) wordlist file
    z= - suggest alternatives
    :spellrepall - repeat the replacement done by z= everywhere 

indenting:

    V}

    select the following paragraph (ones delimited by empty lines)

    >

    to add indentation

    3>

    to add three levels of indentation

    <

    to remove indentation

    gv

    to select the same block of text again 

commenting/uncommenting lines:

    ctrl-v

    to start visual mode

    }

    to select the following paragraph (ones delimited by empty lines)

    I

    to go to insert mode

    --

    or

    //

    or whatever to comment one of the lines

    Esc-Esc

    to apply to all and escape from that mode 

autocomplete:

    in insert mode, use ctrl-n to show a list of suggestions
    more info on autocomplete here 

copy/paste/delete:

    dd - delete current line (and put them in the same buffer that yank would have)
    W - move ahead one word, delineated by whitespace only
    B - move back one word, delineated by whitespace only
    Y - yank (copy) the current line
    P - paste before the current cursor position (or full line)
    p - paste starting after the current cursor position (or full line)
    ]p - paste starting after the current cursor position, but indent each line of the inserted text to the level of the current cursor position
    ctrl-v - go to rectangular block visual mode; move up/down/left/right with cursor keys, then y to yank; then go somewhere else and give p to paste (but will paste in the rectangular block mode)
    "sY - yank into named buffer "s" (ditto with any other character)
    "sP - paste from named buffer "s" (ditto with any other character) 

other useful vim commands:

    cw - change word (does dw, then puts you in insert mode)
    . - repeat command - do cw, then go to another location in the file (perhaps with a / or ? search) and do the change word there, too

    :so $MYVIMRC

    reload ~/.vimrc settings (~/_vimrc in win32)
    guw - convert to lowercase (gu) next word (w)
    gUw - convert to uppercase (gU) next word (w)
    J - combine current and next lines, removing all whitespace that would have appeared between the lines and replacing it with a single space
    gJ - combine current and next lines, removing all whitespace that would have appeared between the lines
    :s/blah/asdf/ - search on the current line for the first occurrence of blah and replace it with asdf
    :s/blah/asdf/g - search on the current line for all occurrences of blah and replace them with asdf
    :.,+34s/blah/asdf/g - search from the current line through the following 34 lines (.,+34) for all occurances of blah and replace them with asdf
    :.,$s/in/out/g - search from the current line to the end of file, replacing all occurances of in with out
    :%s/third base/i don't know/g - perform replacement on all lines in the file
    :s/

    \/where wolf/<\pre> - search for whole word "werewolf" and replace with "where wolf"
    		
    # - search backwords for this whole word
    		
    * - search forwards for this whole word
    		
    30d - scroll down 30 lines
    		
    24u - scroll up 24 lines
    	

Many of the move commands can be combined with the yank/delete/other commands so that fairly complicated operations only take a couple of keyboard commands (moving or copying and then pasting entire paragraphs, for instance):

    d3} and then P to cut three paragraphs and then paste them somewhere else
    3w - move ahead three words
    3b - move back three words
    3} - move ahead three paragraphs (delineated by lines that have nothing on them - not even whitespace)
    3dd - delete current line and the following two (and put them in the same buffer that yank would have)
    d3w - delete the next three words (and put them in the same buffer that yank would have)
    d} - delete the following paragraph (delineated by lines without anything on them - not even whitespace)
    3Y - yank the current line and the following two lines
    Y} - yank the following paragraph (delineated by lines without anything on them - not even whitespace)
    yw - yank the next word
    y3w - yank the next three words
    y/ - yank until the next occurrence of the most recent search
    gU3w - convert to uppercase (gU) next three (3) words (w) 

modeline

    set modeline
    in any file, near the top or bottom, give this:
    # vim: set ts=9:
    // vim: set ts=9:
    to set the tabstop to 9 for that file only 

contents of ~/.vimrc (~/_vimrc in win32):

" comments start with these quotes for some reason
syn on	" turn on syntax highlighting
set tabstop=4	" set tab width
set nu	" show line numbers to left of text
set ruler	" show row, col in lower-right corner
set ignorecase	" case-insensitive search (/ and ?)
set spell	" use spell-checking
set spellfile=c:\\mza\\PC\\vimspell.add
set nocompatible	" vim-specific mode
set backspace=2	" set backspace key to work like most other editors
set scrolloff=5	" keep at least 5 lines above/below
"set nohls	" don't highlight the search
set hlsearch	" highlight the search
set directory=c:\\temp\\ " location of swap files

" restore cursor to last position in file:
autocmd BufReadPost *
	\ if line("'\"") > 1 && line("'\"") <= line("$") |
	\   exe "normal! g`\"" |
	\ endif

" vim: set ts=17: