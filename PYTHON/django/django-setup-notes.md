# DOWNLOAD VENV FOR PYTHON 

fspoo@ewooral:~$ `sudo apt install python3-venv`
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:  libpython3-stdlib python3 python3-distutils
  python3-lib2to3 python3-minimal python3-pip-whl
  python3-setuptools-whl python3.10
  python3.10-minimal python3.10-venv
Suggested packages:
  python3-doc python3-tk python3.10-doc
  binfmt-support
The following NEW packages will be installed
  libpython3-stdlib python3 python3-distutils
  python3-lib2to3 python3-minimal python3-pip-whl
  python3-setuptools-whl python3-venv python3.10
  python3.10-minimal python3.10-venv
0 to upgrade, 11 to newly install, 0 to remove and 20 not to upgrade.
Need to get 5,488 kB of archives.
After this operation, 10.9 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 python3.10-minimal amd64 3.10.4-3ubuntu0.1 [2,258 kB]
Get:2 http://archive.ubuntu.com/ubuntu jammy/main amd64 python3-minimal amd64 3.10.4-0ubuntu2 [24.4 kB]

 
# CREATE A VIRTUAL ENVIRONMENT

fspoo@ewooral:~$ python3 -m venv my-projects-env
fspoo@ewooral:~$ ls
library.csv  my-projects-env
fspoo@ewooral:~$ cd my-projects-env/
fspoo@ewooral:~/my-projects-env$ ls
bin  include  lib  lib64  pyvenv.cfg

# ACTIVATE YOUR VIRTUAL ENV.
fspoo@ewooral:~$ `source my-projects-env/bin/activate`

# DOWNLOAD DJANGO
(my-projects-env) fspoo@ewooral:~$ mkdir django
(my-projects-env) fspoo@ewooral:~$ cd django/
(my-projects-env) fspoo@ewooral:~/django$ `pip install django`
Collecting django
  Downloading Django-4.1.1-py3-none-any.whl (8.1 MB)
Successfully installed asgiref-3.5.2 django-4.1.1 sqlparse-0.4.2

# CHECK DJANGO VERSION
(my-projects-env) fspoo@ewooral:~/my-projects-env$ `python3 -m django --version`
4.1.1
(my-projects-env) fspoo@ewooral:~/my-projects-env$ cd ~
(my-projects-env) fspoo@ewooral:~$ git

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialise an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
(my-projects-env) fspoo@ewooral:~$ git add .
fatal: not a git repository (or any of the parent directories): .git
(my-projects-env) fspoo@ewooral:~$ ls
django  library.csv  my-projects-env
(my-projects-env) fspoo@ewooral:~$ cd django/
(my-projects-env) fspoo@ewooral:~/django$ ls
(my-projects-env) fspoo@ewooral:~/django$ git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
Initialised empty Git repository in /home/fspoo/django/.git/
(my-projects-env) fspoo@ewooral:~/django$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
(my-projects-env) fspoo@ewooral:~/django$ git branch
(my-projects-env) fspoo@ewooral:~/django$  git config --global init.defaultBranch django-project
(my-projects-env) fspoo@ewooral:~/django$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
(my-projects-env) fspoo@ewooral:~/django$ ls
(my-projects-env) fspoo@ewooral:~/django$ cd ..
(my-projects-env) fspoo@ewooral:~$ dir
django  library.csv  my-projects-env
(my-projects-env) fspoo@ewooral:~$ git clone https://github.com/csev/dj4e-samples
Cloning into 'dj4e-samples'...
remote: Enumerating objects: 3629, done.
remote: Counting objects: 100% (3622/3622), done.
remote: Compressing objects: 100% (1287/1287), done.
remote: Total 3629 (delta 2157), reused 3584 (delta 2139), pack-reused 7
Receiving objects: 100% (3629/3629), 484.94 KiB | 366.00 KiB/s, done.
Resolving deltas: 100% (2157/2157), done.
(my-projects-env) fspoo@ewooral:~$ ls
dj4e-samples  django  library.csv  my-projects-env



# DOWNLOAD PYTHON DEPENDENCIES FOR YOUR DJANGO PROJECT
(my-projects-env) fspoo@ewooral:~$ ls
dj4e-samples  django  library.csv  my-projects-env
(my-projects-env) fspoo@ewooral:~$ cd dj4e-samples/
(my-projects-env) fspoo@ewooral:~/dj4e-samples$ `pip install -r requirements.txt`
  Applying auth.0001_initial... OK



# START A DJANGO PROJECT
(my-projects-env) fspoo@ewooral:~/django$ django-admin startproject mysite
(my-projects-env) fspoo@ewooral:~/django$ ls
mysite


# CHECK FOR ERRORS
(my-projects-env) fspoo@ewooral:~/django/mysite$ python3 manage.py check
System check identified no issues (0 silenced).


# RUN DJANGO SERVER
(my-projects-env) fspoo@ewooral:~/django/mysite$ python manage.py runserv
er 3000
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
September 10, 2022 - 22:44:48
Django version 3.2.5, using settings 'mysite.settings'
Starting development server at http://127.0.0.1:3000/
Quit the server with CONTROL-C.
[10/Sep/2022 22:45:07] "GET / HTTP/1.1" 200 10697
[10/Sep/2022 22:45:07] "GET /static/admin/css/fonts.css HTTP/1.1" 200 423
[10/Sep/2022 22:45:07] "GET /static/admin/fonts/Roboto-Bold-webfont.woff HTTP/1.1" 200 86184
[10/Sep/2022 22:45:07] "GET /static/admin/fonts/Roboto-Regular-webfont.woff HTTP/1.1" 200 85876
[10/Sep/2022 22:45:08] "GET /static/admin/fonts/Roboto-Light-webfont.woff HTTP/1.1" 200 85692
Not Found: /favicon.ico
[10/Sep/2022 22:45:08] "GET /favicon.ico HTTP/1.1" 404 2110




# DJANGO MODELS
* Creating a Table - Users

* models.py

from django.db import models 

class User(models.Model):
      name = models.CharField(max_length=128)
      email = models.CharField(max_length=128)

* After defining the schema, push it to the Database
- python3 manage.py makemigrations
- python3 manage.py migrate


		
# DJANGO SHELL FOR DATABASE


❯ python manage.py check                                                     ─╯
When you want to use social login, please see dj4e-samples/github_settings-dist.py
Using registration/login.html as the login template
System check identified no issues (0 silenced).

    ~/Dev/Ewooral-Tutorials/PY/dj/dj4e-samples  on   main 
❯ python manage.py shell                                                     ─╯
When you want to use social login, please see dj4e-samples/github_settings-dist.py
Python 3.10.6 (main, Aug 10 2022, 11:40:04) [GCC 11.3.0]
Type 'copyright', 'credits' or 'license' for more information
IPython 8.5.0 -- An enhanced Interactive Python. Type '?' for help.

In [1]: from tracks.models import Artist, Genre, Album, Track;

In [2]: Artist.objects.values()
Out[2]: <QuerySet [{'id': 1, 'name': 'Elijah Boahen'}, {'id': 2, 'name': 'Black Sherif'}, {'id': 3, 'name': 'Justin Bieber'}]>

In [3]: Genre.objects.values()
Out[3]: <QuerySet [{'id': 1, 'name': 'Rock'}, {'id': 2, 'name': 'Metal'}, {'id': 3, 'name': 'Pop'}]>

In [4]: Album.objects.all().values()
Out[4]: <QuerySet [{'id': 1, 'title': 'the villain i never was', 'artist_id': 2}, {'id': 2, 'title': 'Purpose', 'artist_id': 3}]>

In [5]: album3 = Album(title='God chose you', artist=
   ...: )
  Cell In [5], line 2
    )
    ^
SyntaxError: invalid syntax


In [6]: album3 = Album(title='God chose you', artist=artist1)
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
Cell In [6], line 1
----> 1 album3 = Album(title='God chose you', artist=artist1)

NameError: name 'artist1' is not defined

In [7]: artist1 = Artist(name='Elijah Boahen')

In [8]: artist1.save()

In [9]: album3 = Album(title='God chose you', artist=artist1)

In [10]: album3.save()

In [11]: Album.objects.all().values()
Out[11]: <QuerySet [{'id': 1, 'title': 'the villain i never was', 'artist_id': 2}, {'id': 2, 'title': 'Purpose', 'artist_id': 3}, {'id': 3, 'title': 'God chose you', 'artist_id': 4}]>

In [12]: Artist.objects.values()
Out[12]: <QuerySet [{'id': 1, 'name': 'Elijah Boahen'}, {'id': 2, 'name': 'Black Sherif'}, {'id': 3, 'name': 'Justin Bieber'}, {'id': 4, 'name': 'Elijah Boahen'}]>

In [13]: Artist.objects.filter(name='Elijah Boahen').update(name='Luke Martins')
    ...: 
Out[13]: 2

In [14]: Artist.objects.values()
Out[14]: <QuerySet [{'id': 1, 'name': 'Luke Martins'}, {'id': 2, 'name': 'Black Sherif'}, {'id': 3, 'name': 'Justin Bieber'}, {'id': 4, 'name': 'Luke Martins'}]>

In [15]: Artist.objects.filter(id=1, name='Luke Martins').update(name='Elijah Bo
    ...: ahen')
Out[15]: 1

In [16]: Artist.objects.values()
Out[16]: <QuerySet [{'id': 1, 'name': 'Elijah Boahen'}, {'id': 2, 'name': 'Black Sherif'}, {'id': 3, 'name': 'Justin Bieber'}, {'id': 4, 'name': 'Luke Martins'}]>


