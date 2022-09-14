fspoo@ewooral:~$ mkvirtualenv django3 --python=/usr/bin/python3.10
-bash: mkvirtualenv: command not found
fspoo@ewooral:~$ /urs
-bash: /urs: No such file or directory
fspoo@ewooral:~$ cd usr
-bash: cd: usr: No such file or directory
fspoo@ewooral:~$ ls
library.csv
fspoo@ewooral:~$ cd ..
fspoo@ewooral:/home$ cd ..
fspoo@ewooral:/$ ls
bin   home   lib64       mnt   run   sys
boot  init   libx32      opt   sbin  tmp
dev   lib    lost+found  proc  snap  usr
etc   lib32  media       root  srv   var
fspoo@ewooral:/$ cd usr/local/bin/
fspoo@ewooral:/usr/local/bin$ ls
fspoo@ewooral:/usr/local/bin$ cd ..
fspoo@ewooral:/usr/local$ cd ../..
fspoo@ewooral:/$ ls
bin   home   lib64       mnt   run   sys
boot  init   libx32      opt   sbin  tmp
dev   lib    lost+found  proc  snap  usr
etc   lib32  media       root  srv   var
fspoo@ewooral:/$ cd home/
fspoo@ewooral:/home$ ls
error_file.txt  hello.py      streams_err.py
fspoo           new_file.txt
fspoo@ewooral:/home$ cd fspoo/
fspoo@ewooral:~$ python3
-bash: /usr/bin/python3: No such file or directory
fspoo@ewooral:~$ sudo apt install python3-venv
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
Get:3 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 python3.10 amd64 3.10.4-3ubuntu0.1 [488 kB]
Get:4 http://archive.ubuntu.com/ubuntu jammy/main amd64 libpython3-stdlib amd64 3.10.4-0ubuntu2 [6,990 B]
Get:5 http://archive.ubuntu.com/ubuntu jammy/main amd64 python3 amd64 3.10.4-0ubuntu2 [22.8 kB]
Get:6 http://archive.ubuntu.com/ubuntu jammy/main amd64 python3-lib2to3 all 3.10.4-0ubuntu1 [76.2 kB]
Get:7 http://archive.ubuntu.com/ubuntu jammy/main amd64 python3-distutils all 3.10.4-0ubuntu1 [138 kB]
Get:8 http://archive.ubuntu.com/ubuntu jammy/universe amd64 python3-pip-whl all 22.0.2+dfsg-1 [1,679 kB]Get:9 http://archive.ubuntu.com/ubuntu jammy/universe amd64 python3-setuptools-whl all 59.6.0-1.2 [788 kB]
Get:10 http://archive.ubuntu.com/ubuntu jammy-updates/universe amd64 python3.10-venv amd64 3.10.4-3ubuntu0.1 [5,668 B]
Get:11 http://archive.ubuntu.com/ubuntu jammy/universe amd64 python3-venv amd64 3.10.4-0ubuntu2 [1,050 B]
Fetched 5,488 kB in 50s (109 kB/s)
Setting up python3.10-venv (3.10.4-3ubuntu0.1) ...
Setting up python3-venv (3.10.4-0ubuntu2) ...
Processing triggers for man-db (2.10.2-1) ...
debconf: Unable to initialise frontend: Dialog
debconf: (Dialogue frontend requires a screen at least 13 lines tall and 31 columns wide.)
debconf: falling back to frontend: Readline
Scanning processes...
Scanning processor microcode...
Scanning linux images...

Failed to retrieve available kernel versions.

Failed to check for processor microcode upgrades.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu)
 binaries on this host.
fspoo@ewooral:~$ ls
library.csv
fspoo@ewooral:~$ python3
Python 3.10.4 (main, Jun 29 2022, 12:14:53) [GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> exit)
  File "<stdin>", line 1
    exit)
        ^
SyntaxError: unmatched ')'
>>> exit()

fspoo@ewooral:~$ python3 -V
Python 3.10.4
fspoo@ewooral:~$ mkvirtualenv django3 --python=/usr/bin/python3.10
-bash: mkvirtualenv: command not found
fspoo@ewooral:~$ python3 -m venv my-projects-env
fspoo@ewooral:~$ ls
library.csv  my-projects-env
fspoo@ewooral:~$ cd my-projects-env/
fspoo@ewooral:~/my-projects-env$ ls
bin  include  lib  lib64  pyvenv.cfg
fspoo@ewooral:~/my-projects-env$ cd ..
fspoo@ewooral:~$ source my-projects-env/bin/activate(my-projects-env) fspoo@ewooral:~$ pip

(my-projects-env) fspoo@ewooral:~$ pip3 install pipenv

(my-projects-env) fspoo@ewooral:~$
(my-projects-env) fspoo@ewooral:~$ dir
library.csv  my-projects-env
(my-projects-env) fspoo@ewooral:~$ mkdir django
(my-projects-env) fspoo@ewooral:~$ cd django/
(my-projects-env) fspoo@ewooral:~/django$ pip install django
Collecting django
  Downloading Django-4.1.1-py3-none-any.whl (8.1 MB)
Successfully installed asgiref-3.5.2 django-4.1.1 sqlparse-0.4.2
(my-projects-env) fspoo@ewooral:~/django$ workon
-bash: workon: command not found
(my-projects-env) fspoo@ewooral:~/django$ ls
(my-projects-env) fspoo@ewooral:~/django$ cd ..
(my-projects-env) fspoo@ewooral:~$ ls
django  library.csv  my-projects-env
(my-projects-env) fspoo@ewooral:~$ cd my-projects-env/
(my-projects-env) fspoo@ewooral:~/my-projects-env$ l
bin/  include/  lib/  lib64@  pyvenv.cfg
(my-projects-env) fspoo@ewooral:~/my-projects-env$ ;s
-bash: syntax error near unexpected token `;'
(my-projects-env) fspoo@ewooral:~/my-projects-env$ ls
bin  include  lib  lib64  pyvenv.cfg
(my-projects-env) fspoo@ewooral:~/my-projects-env$ python3 -m django --version
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
(my-projects-env) fspoo@ewooral:~$ ls
dj4e-samples  django  library.csv  my-projects-env
(my-projects-env) fspoo@ewooral:~$ cd dj4e-samples/
(my-projects-env) fspoo@ewooral:~/dj4e-samples$ pip install -r requirements.txt
  Applying auth.0001_initial... OK

(my-projects-env) fspoo@ewooral:~/dj4e-samples$ cd ~
(my-projects-env) fspoo@ewooral:~$ ls
dj4e-samples  django  library.csv  my-projects-env
(my-projects-env) fspoo@ewooral:~$ cd dj
dj4e-samples/ django/
(my-projects-env) fspoo@ewooral:~$ cd django/
(my-projects-env) fspoo@ewooral:~/django$ django-admin startproject mysite
(my-projects-env) fspoo@ewooral:~/django$ ls
mysite
(my-projects-env) fspoo@ewooral:~/django$ ls -la
total 16
drwxr-xr-x 4 fspoo fspoo 4096 Sep 10 22:33 .
drwxr-x--- 7 fspoo fspoo 4096 Sep 10 22:29 ..
drwxr-xr-x 7 fspoo fspoo 4096 Sep 10 22:27 .git
drwxr-xr-x 3 fspoo fspoo 4096 Sep 10 22:33 mysite
(my-projects-env) fspoo@ewooral:~/django$ cd ..
(my-projects-env) fspoo@ewooral:~$ ls -la
total 92
drwxr-x---  7 fspoo fspoo  4096 Sep 10 22:29 .
drwxr-xr-x  3 root  root   4096 Sep  9 06:00 ..
-rw-------  1 fspoo fspoo  3193 Sep 10 21:27 .bash_history
-rw-r--r--  1 fspoo fspoo   220 Jan  6  2022 .bash_logout
-rw-r--r--  1 fspoo fspoo  3771 Jan  6  2022 .bashrc
drwx------  3 fspoo fspoo  4096 Sep 10 21:42 .cache
drwxr-xr-x 38 fspoo fspoo  4096 Sep 10 22:32 dj4e-samples
drwxr-xr-x  4 fspoo fspoo  4096 Sep 10 22:33 django
-rw-r--r--  1 fspoo fspoo    39 Sep 10 22:27 .gitconfig
drwxr-xr-x  2 fspoo fspoo  4096 Sep  9 04:11 .landscape
-rw-------  1 fspoo fspoo    20 Sep 10 22:26 .lesshst
-rw-r--r--  1 fspoo fspoo 19495 Apr 20  2020 library.csv
-rw-r--r--  1 fspoo fspoo     0 Sep 10 18:25 .motd_shown
drwxr-xr-x  5 fspoo fspoo  4096 Sep 10 21:37 my-projects-env
-rw-r--r--  1 fspoo fspoo   807 Jan  6  2022 .profile
-rw-------  1 fspoo fspoo    45 Sep 10 21:35 .python_history
-rw-r--r--  1 fspoo fspoo     0 Sep  9 04:14 .sudo_as_admin_successful
-rw-------  1 fspoo fspoo 11022 Sep 10 21:18 .viminfo
-rw-r--r--  1 fspoo fspoo   173 Sep  9 04:17 .wget-hsts
(my-projects-env) fspoo@ewooral:~$ cd dj
-bash: cd: dj: No such file or directory
(my-projects-env) fspoo@ewooral:~$ cd django/
(my-projects-env) fspoo@ewooral:~/django$ ls
mysite
(my-projects-env) fspoo@ewooral:~/django$ ls -l
total 4
drwxr-xr-x 3 fspoo fspoo 4096 Sep 10 22:33 mysite
(my-projects-env) fspoo@ewooral:~/django$ cd mysite/
(my-projects-env) fspoo@ewooral:~/django/mysite$ ls
manage.py  mysite
(my-projects-env) fspoo@ewooral:~/django/mysite$ cd mysite/
(my-projects-env) fspoo@ewooral:~/django/mysite/mysite$ ls
asgi.py  __init__.py  settings.py  urls.py  wsgi.py
(my-projects-env) fspoo@ewooral:~/django/mysite/mysite$ ls -l
total 16
-rw-r--r-- 1 fspoo fspoo  389 Sep 10 22:33 asgi.py
-rw-r--r-- 1 fspoo fspoo    0 Sep 10 22:33 __init__.py
-rw-r--r-- 1 fspoo fspoo 3239 Sep 10 22:33 settings.py
-rw-r--r-- 1 fspoo fspoo  748 Sep 10 22:33 urls.py
-rw-r--r-- 1 fspoo fspoo  389 Sep 10 22:33 wsgi.py
(my-projects-env) fspoo@ewooral:~/django/mysite/mysite$ vim settings.py
(my-projects-env) fspoo@ewooral:~/django/mysite/mysite$ cd ..
(my-projects-env) fspoo@ewooral:~/django/mysite$ python3 manage.py check
System check identified no issues (0 silenced).
(my-projects-env) fspoo@ewooral:~/django/mysite$ ls
manage.py  mysite
(my-projects-env) fspoo@ewooral:~/django/mysite$ pwd
/home/fspoo/django/mysite
(my-projects-env) fspoo@ewooral:~/django/mysite$ ls
manage.py  mysite
(my-projects-env) fspoo@ewooral:~/django/mysite$ cd mysite/
(my-projects-env) fspoo@ewooral:~/django/mysite/mysite$ ls
asgi.py  __init__.py  __pycache__  settings.py  urls.py  wsgi.py
(my-projects-env) fspoo@ewooral:~/django/mysite/mysite$ vim wsgi.py
(my-projects-env) fspoo@ewooral:~/django/mysite/mysite$ vim wsgi.py
(my-projects-env) fspoo@ewooral:~/django/mysite/mysite$ cd ..
(my-projects-env) fspoo@ewooral:~/django/mysite$ ls
manage.py  mysite
(my-projects-env) fspoo@ewooral:~/django/mysite$ python3 manage.py check
System check identified no issues (0 silenced).
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





# How to push new Git branches to remote repos on GitHub or GitLab by example
github@branch/c/remote/push  (new-branch)
git clone https://github.com/learn-git-fast/git-branch-examples.git
cd git*
git checkout -b new-branch

github@branch/c/remote/push (new-branch)
git branch -a
touch devolution.jpg
git add .
git commit -m "Are we not gender neutral people? We are Devo?"
git push --set-upstream origin new-branch

github@branch/c/remote/push (new-branch)
touch eden.html
git add .
git commit -m "Eden added"
git push origin




# Caching your GitHub credentials in Git
* gh auth login
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Paste an authentication token
Tip: you can generate a Personal Access Token here https://github.com/settings/tokens
The minimum required scopes are 'repo', 'read:org', 'workflow'.
? Paste your authentication token: ****************************************
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as Ewooral


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


		
