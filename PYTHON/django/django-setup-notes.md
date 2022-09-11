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
fspoo@ewooral:~$ python3 -v
import _frozen_importlib # frozen
import _imp # builtin
import '_thread' # <class '_frozen_importlib.BuiltinImporter'>
import '_warnings' # <class '_frozen_importlib.BuiltinImporter'>
import '_weakref' # <class '_frozen_importlib.BuiltinImporter'>
import '_io' # <class '_frozen_importlib.BuiltinImporter'>
import 'marshal' # <class '_frozen_importlib.BuiltinImporter'>
import 'posix' # <class '_frozen_importlib.BuiltinImporter'>
import '_frozen_importlib_external' # <class '_frozen_importlib.FrozenImporter'>
# installing zipimport hook
import 'time' # <class '_frozen_importlib.BuiltinImporter'>
import 'zipimport' # <class '_frozen_importlib.FrozenImporter'>
# installed zipimport hook
# /usr/lib/python3.10/encodings/__pycache__/__init__.cpython-310.pyc matches /usr/lib/python3.10/encodings/__init__.py
# code object from '/usr/lib/python3.10/encodings/__pycache__/__init__.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/codecs.cpython-310.pyc matches /usr/lib/python3.10/codecs.py
# code object from '/usr/lib/python3.10/__pycache__/codecs.cpython-310.pyc'
import '_codecs' # <class '_frozen_importlib.BuiltinImporter'>
import 'codecs' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc90fb2b0>
# /usr/lib/python3.10/encodings/__pycache__/aliases.cpython-310.pyc matches /usr/lib/python3.10/encodings/aliases.py
# code object from '/usr/lib/python3.10/encodings/__pycache__/aliases.cpython-310.pyc'
import 'encodings.aliases' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8eec880>
import 'encodings' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc90fb070>
# /usr/lib/python3.10/encodings/__pycache__/utf_8.cpython-310.pyc matches /usr/lib/python3.10/encodings/utf_8.py
# code object from '/usr/lib/python3.10/encodings/__pycache__/utf_8.cpython-310.pyc'
import 'encodings.utf_8' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc90fb010>
import '_signal' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/lib/python3.10/__pycache__/io.cpython-310.pyc matches /usr/lib/python3.10/io.py
# code object from '/usr/lib/python3.10/__pycache__/io.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/abc.cpython-310.pyc matches /usr/lib/python3.10/abc.py
# code object from '/usr/lib/python3.10/__pycache__/abc.cpython-310.pyc'
import '_abc' # <class '_frozen_importlib.BuiltinImporter'>
import 'abc' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8eecbe0>
import 'io' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8eec9d0>
# /usr/lib/python3.10/__pycache__/site.cpython-310.pyc matches /usr/lib/python3.10/site.py
# code object from '/usr/lib/python3.10/__pycache__/site.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/os.cpython-310.pyc matches /usr/lib/python3.10/os.py
# code object from '/usr/lib/python3.10/__pycache__/os.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/stat.cpython-310.pyc matches /usr/lib/python3.10/stat.py
# code object from '/usr/lib/python3.10/__pycache__/stat.cpython-310.pyc'
import '_stat' # <class '_frozen_importlib.BuiltinImporter'>
import 'stat' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8eeee00>
# /usr/lib/python3.10/__pycache__/_collections_abc.cpython-310.pyc matches /usr/lib/python3.10/_collections_abc.py
# code object from '/usr/lib/python3.10/__pycache__/_collections_abc.cpython-310.pyc'
import '_collections_abc' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8eef160>
# /usr/lib/python3.10/__pycache__/posixpath.cpython-310.pyc matches /usr/lib/python3.10/posixpath.py
# code object from '/usr/lib/python3.10/__pycache__/posixpath.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/genericpath.cpython-310.pyc matches /usr/lib/python3.10/genericpath.py# code object from '/usr/lib/python3.10/__pycache__/genericpath.cpython-310.pyc'
import 'genericpath' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8f29990>
import 'posixpath' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8eef1f0>
import 'os' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8eeda20>
# /usr/lib/python3.10/__pycache__/_sitebuiltins.cpython-310.pyc matches /usr/lib/python3.10/_sitebuiltins.py
# code object from '/usr/lib/python3.10/__pycache__/_sitebuiltins.cpython-310.pyc'
import '_sitebuiltins' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8eeeb00>
Processing user site-packages
Processing global site-packages
Adding directory: '/usr/local/lib/python3.10/dist-packages'
Adding directory: '/usr/lib/python3/dist-packages'
# /usr/lib/python3.10/__pycache__/sitecustomize.cpython-310.pyc matches /usr/lib/python3.10/sitecustomize.py
# code object from '/usr/lib/python3.10/__pycache__/sitecustomize.cpython-310.pyc'
import 'sitecustomize' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8f2a080>
import 'site' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8eed3f0>
Python 3.10.4 (main, Jun 29 2022, 12:14:53) [GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
# extension module 'readline' loaded from '/usr/lib/python3.10/lib-dynload/readline.cpython-310-x86_64-linux-gnu.so'
# extension module 'readline' executed from '/usr/lib/python3.10/lib-dynload/readline.cpython-310-x86_64-linux-gnu.so'
import 'readline' # <_frozen_importlib_external.ExtensionFileLoader object at 0x7fcfc8f29f90>
import 'atexit' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/lib/python3.10/__pycache__/rlcompleter.cpython-310.pyc matches /usr/lib/python3.10/rlcompleter.py# code object from '/usr/lib/python3.10/__pycache__/rlcompleter.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/inspect.cpython-310.pyc matches /usr/lib/python3.10/inspect.py
# code object from '/usr/lib/python3.10/__pycache__/inspect.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/ast.cpython-310.pyc matches /usr/lib/python3.10/ast.py
# code object from '/usr/lib/python3.10/__pycache__/ast.cpython-310.pyc'
import '_ast' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/lib/python3.10/__pycache__/contextlib.cpython-310.pyc matches /usr/lib/python3.10/contextlib.py
# code object from '/usr/lib/python3.10/__pycache__/contextlib.cpython-310.pyc'
# /usr/lib/python3.10/collections/__pycache__/__init__.cpython-310.pyc matches /usr/lib/python3.10/collections/__init__.py
# code object from '/usr/lib/python3.10/collections/__pycache__/__init__.cpython-310.pyc'
import 'itertools' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/lib/python3.10/__pycache__/keyword.cpython-310.pyc matches /usr/lib/python3.10/keyword.py
# code object from '/usr/lib/python3.10/__pycache__/keyword.cpython-310.pyc'
import 'keyword' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8fb3f40>
# /usr/lib/python3.10/__pycache__/operator.cpython-310.pyc matches /usr/lib/python3.10/operator.py
# code object from '/usr/lib/python3.10/__pycache__/operator.cpython-310.pyc'
import '_operator' # <class '_frozen_importlib.BuiltinImporter'>
import 'operator' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d2c040>
# /usr/lib/python3.10/__pycache__/reprlib.cpython-310.pyc matches /usr/lib/python3.10/reprlib.py
# code object from '/usr/lib/python3.10/__pycache__/reprlib.cpython-310.pyc'
import 'reprlib' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d2c130>
import '_collections' # <class '_frozen_importlib.BuiltinImporter'>
import 'collections' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8fb1b70>
# /usr/lib/python3.10/__pycache__/functools.cpython-310.pyc matches /usr/lib/python3.10/functools.py
# code object from '/usr/lib/python3.10/__pycache__/functools.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/types.cpython-310.pyc matches /usr/lib/python3.10/types.py
# code object from '/usr/lib/python3.10/__pycache__/types.cpython-310.pyc'
import 'types' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d2dba0>
import '_functools' # <class '_frozen_importlib.BuiltinImporter'>
import 'functools' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d2cee0>
import 'contextlib' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8fb0910>
# /usr/lib/python3.10/__pycache__/enum.cpython-310.pyc matches /usr/lib/python3.10/enum.py
# code object from '/usr/lib/python3.10/__pycache__/enum.cpython-310.pyc'
import 'enum' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8fb10c0>
import 'ast' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8f6c820>
# /usr/lib/python3.10/__pycache__/dis.cpython-310.pyc matches /usr/lib/python3.10/dis.py
# code object from '/usr/lib/python3.10/__pycache__/dis.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/opcode.cpython-310.pyc matches /usr/lib/python3.10/opcode.py
# code object from '/usr/lib/python3.10/__pycache__/opcode.cpython-310.pyc'
# extension module '_opcode' loaded from '/usr/lib/python3.10/lib-dynload/_opcode.cpython-310-x86_64-linux-gnu.so'
# extension module '_opcode' executed from '/usr/lib/python3.10/lib-dynload/_opcode.cpython-310-x86_64-linux-gnu.so'
import '_opcode' # <_frozen_importlib_external.ExtensionFileLoader object at 0x7fcfc8d805e0>
import 'opcode' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d80370>
import 'dis' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8f6cee0>
# /usr/lib/python3.10/collections/__pycache__/abc.cpython-310.pyc matches /usr/lib/python3.10/collections/abc.py
# code object from '/usr/lib/python3.10/collections/__pycache__/abc.cpython-310.pyc'
import 'collections.abc' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d81570>
# /usr/lib/python3.10/importlib/__pycache__/__init__.cpython-310.pyc matches /usr/lib/python3.10/importlib/__init__.py
# code object from '/usr/lib/python3.10/importlib/__pycache__/__init__.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/warnings.cpython-310.pyc matches /usr/lib/python3.10/warnings.py
# code object from '/usr/lib/python3.10/__pycache__/warnings.cpython-310.pyc'
import 'warnings' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d81150>
import 'importlib' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d813c0>
# /usr/lib/python3.10/importlib/__pycache__/machinery.cpython-310.pyc matches /usr/lib/python3.10/importlib/machinery.py
# code object from '/usr/lib/python3.10/importlib/__pycache__/machinery.cpython-310.pyc'
import 'importlib.machinery' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d80be0>
# /usr/lib/python3.10/__pycache__/linecache.cpython-310.pyc matches /usr/lib/python3.10/linecache.py
# code object from '/usr/lib/python3.10/__pycache__/linecache.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/tokenize.cpython-310.pyc matches /usr/lib/python3.10/tokenize.py
# code object from '/usr/lib/python3.10/__pycache__/tokenize.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/re.cpython-310.pyc matches /usr/lib/python3.10/re.py
# code object from '/usr/lib/python3.10/__pycache__/re.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/sre_compile.cpython-310.pyc matches /usr/lib/python3.10/sre_compile.py# code object from '/usr/lib/python3.10/__pycache__/sre_compile.cpython-310.pyc'
import '_sre' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/lib/python3.10/__pycache__/sre_parse.cpython-310.pyc matches /usr/lib/python3.10/sre_parse.py
# code object from '/usr/lib/python3.10/__pycache__/sre_parse.cpython-310.pyc'
# /usr/lib/python3.10/__pycache__/sre_constants.cpython-310.pyc matches /usr/lib/python3.10/sre_constants.py
# code object from '/usr/lib/python3.10/__pycache__/sre_constants.cpython-310.pyc'
import 'sre_constants' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d835b0>
import 'sre_parse' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d82da0>
import 'sre_compile' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d824a0>
import '_locale' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/lib/python3.10/__pycache__/copyreg.cpython-310.pyc matches /usr/lib/python3.10/copyreg.py
# code object from '/usr/lib/python3.10/__pycache__/copyreg.cpython-310.pyc'
import 'copyreg' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8dc4e50>
import 're' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d81c30>
# /usr/lib/python3.10/__pycache__/token.cpython-310.pyc matches /usr/lib/python3.10/token.py
# code object from '/usr/lib/python3.10/__pycache__/token.cpython-310.pyc'
import 'token' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8dc4d90>
import 'tokenize' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d806d0>
import 'linecache' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8d80940>
import 'inspect' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8f2a530>
import 'rlcompleter' # <_frozen_importlib_external.SourceFileLoader object at 0x7fcfc8f2a320>
>>> exit()
# clear builtins._
# clear sys.path
# clear sys.argv
# clear sys.ps1
# clear sys.ps2
# clear sys.last_type
# clear sys.last_value
# clear sys.last_traceback
# clear sys.path_hooks
# clear sys.path_importer_cache
# clear sys.meta_path
# clear sys.__interactivehook__
# restore sys.stdin
# restore sys.stdout
# restore sys.stderr
# cleanup[2] removing sys
# cleanup[2] removing builtins
# cleanup[2] removing _frozen_importlib
# cleanup[2] removing _imp
# cleanup[2] removing _thread
# cleanup[2] removing _warnings
# cleanup[2] removing _weakref
# cleanup[2] removing _io
# cleanup[2] removing marshal
# cleanup[2] removing posix
# cleanup[2] removing _frozen_importlib_external
# cleanup[2] removing time
# cleanup[2] removing zipimport
# destroy zipimport
# cleanup[2] removing _codecs
# cleanup[2] removing codecs
# cleanup[2] removing encodings.aliases
# cleanup[2] removing encodings
# destroy encodings
# cleanup[2] removing encodings.utf_8
# cleanup[2] removing _signal
# cleanup[2] removing _abc
# cleanup[2] removing abc
# cleanup[2] removing io
# cleanup[2] removing __main__
# cleanup[2] removing _stat
# cleanup[2] removing stat
# cleanup[2] removing _collections_abc
# cleanup[2] removing genericpath
# cleanup[2] removing posixpath
# cleanup[2] removing os.path
# cleanup[2] removing os
# cleanup[2] removing _sitebuiltins
# cleanup[2] removing sitecustomize
# destroy sitecustomize
# cleanup[2] removing site
# destroy site
# cleanup[2] removing readline
# cleanup[2] removing atexit
# cleanup[2] removing _ast
# destroy _ast
# cleanup[2] removing itertools
# cleanup[2] removing keyword
# destroy keyword
# cleanup[2] removing _operator
# cleanup[2] removing operator
# destroy operator
# cleanup[2] removing reprlib
# destroy reprlib
# cleanup[2] removing _collections
# cleanup[2] removing collections
# cleanup[2] removing types
# cleanup[2] removing _functools
# cleanup[2] removing functools
# cleanup[2] removing contextlib
# destroy contextlib
# cleanup[2] removing enum
# cleanup[2] removing ast
# cleanup[2] removing _opcode
# cleanup[2] removing opcode
# destroy opcode
# cleanup[2] removing dis
# cleanup[2] removing collections.abc
# cleanup[2] removing importlib._bootstrap
# cleanup[2] removing importlib._bootstrap_external
# cleanup[2] removing warnings
# cleanup[2] removing importlib
# cleanup[2] removing importlib.machinery
# cleanup[2] removing _sre
# cleanup[2] removing sre_constants
# destroy sre_constants
# cleanup[2] removing sre_parse
# cleanup[2] removing sre_compile
# cleanup[2] removing _locale
# cleanup[2] removing copyreg
# cleanup[2] removing re
# cleanup[2] removing token
# cleanup[2] removing tokenize
# cleanup[2] removing linecache
# cleanup[2] removing inspect
# cleanup[2] removing rlcompleter
# destroy rlcompleter
# destroy _signal
# destroy _sitebuiltins
# destroy posixpath
# destroy _stat
# destroy genericpath
# destroy stat
# destroy atexit
# destroy inspect
# destroy __main__
# destroy ast
# destroy dis
# destroy importlib
# destroy linecache
# destroy token
# destroy types
# destroy io
# destroy _opcode
# destroy warnings
# destroy importlib.machinery
# destroy os
# destroy tokenize
# destroy collections
# destroy itertools
# destroy re
# destroy enum
# destroy sre_compile
# destroy functools
# destroy copyreg
# destroy sre_parse
# destroy _sre
# destroy _locale
# cleanup[3] wiping importlib._bootstrap_external
# cleanup[3] wiping importlib._bootstrap
# cleanup[3] wiping collections.abc
# cleanup[3] wiping _functools
# cleanup[3] wiping _collections
# cleanup[3] wiping _operator
# cleanup[3] wiping readline
# cleanup[3] wiping _collections_abc
# cleanup[3] wiping abc
# cleanup[3] wiping _abc
# cleanup[3] wiping encodings.utf_8
# cleanup[3] wiping encodings.aliases
# cleanup[3] wiping codecs
# cleanup[3] wiping _codecs
# cleanup[3] wiping time
# cleanup[3] wiping _frozen_importlib_external
# cleanup[3] wiping posix
# cleanup[3] wiping marshal
# cleanup[3] wiping _io
# cleanup[3] wiping _weakref
# cleanup[3] wiping _warnings
# cleanup[3] wiping _thread
# cleanup[3] wiping _imp
# cleanup[3] wiping _frozen_importlib
# cleanup[3] wiping sys
# cleanup[3] wiping builtins
# destroy readline
# destroy posix
# destroy _frozen_importlib_external
# destroy _imp
# destroy io
# destroy marshal
# destroy time
# destroy _warnings
# destroy _frozen_importlib
# destroy codecs
# destroy encodings.aliases
# destroy encodings.utf_8
# destroy _codecs
# destroy abc
# destroy _abc
# destroy _collections_abc
# destroy sys
# destroy _weakref
# destroy _collections
# destroy collections.abc
# destroy builtins
# destroy _functools
# destroy _operator
# destroy _thread
# clear sys.audit hooks
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

Usage:
  pip <command> [options]

Commands:
  install                     Install packages.
  download                    Download packages.
  uninstall                   Uninstall packages.
  freeze                      Output installed packages in requirements format.
  list                        List installed packages.
  show                        Show information about installed packages.
  check                       Verify installed packages have compatible dependencies.
  config                      Manage local and global configuration.
  search                      Search PyPI for packages.
  cache                       Inspect and manage pip's wheel cache.
  index                       Inspect information available from package indexes.
  wheel                       Build wheels from your requirements.
  hash                        Compute hashes of package archives.
  completion                  A helper command used for command completion.
  debug                       Show information useful for debugging.
  help                        Show help for commands.

General Options:
  -h, --help                  Show help.
  --debug                     Let unhandled
                              exceptions propagate
                              outside the main
                              subroutine, instead
                              of logging them to
                              stderr.
  --isolated                  Run pip in an
                              isolated mode,
                              ignoring environment
                              variables and user
                              configuration.
  --require-virtualenv        Allow pip to only
                              run in a virtual
                              environment; exit
                              with an error
                              otherwise.
  -v, --verbose               Give more output.
                              Option is additive,
                              and can be used up
                              to 3 times.
  -V, --version               Show version and
                              exit.
  -q, --quiet                 Give less output.
                              Option is additive,
                              and can be used up
                              to 3 times
                              (corresponding to
                              WARNING, ERROR, and
                              CRITICAL logging
                              levels).
  --log <path>                Path to a verbose
                              appending log.
  --no-input                  Disable prompting
                              for input.
  --proxy <proxy>             Specify a proxy in
                              the form [user:passw
                              d@]proxy.server:port
                              .
  --retries <retries>         Maximum number of
                              retries each
                              connection should
                              attempt (default 5
                              times).
  --timeout <sec>             Set the socket
                              timeout (default 15
                              seconds).
  --exists-action <action>    Default action when
                              a path already
                              exists: (s)witch,
                              (i)gnore, (w)ipe,
                              (b)ackup, (a)bort.
  --trusted-host <hostname>   Mark this host or
                              host:port pair as
                              trusted, even though
                              it does not have
                              valid or any HTTPS.
  --cert <path>               Path to PEM-encoded
                              CA certificate
                              bundle. If provided,
                              overrides the
                              default. See 'SSL
                              Certificate
                              Verification' in pip
                              documentation for
                              more information.
  --client-cert <path>        Path to SSL client
                              certificate, a
                              single file
                              containing the
                              private key and the
                              certificate in PEM
                              format.
  --cache-dir <dir>           Store the cache data
                              in <dir>.
  --no-cache-dir              Disable the cache.
  --disable-pip-version-check
                              Don't periodically
                              check PyPI to
                              determine whether a
                              new version of pip
                              is available for
                              download. Implied
                              with --no-index.
  --no-color                  Suppress colored
                              output.
  --no-python-version-warning
                              Silence deprecation
                              warnings for
                              upcoming unsupported
                              Pythons.
  --use-feature <feature>     Enable new
                              functionality, that
                              may be backward
                              incompatible.
  --use-deprecated <feature>  Enable deprecated
                              functionality, that
                              will be removed in
                              the future.
(my-projects-env) fspoo@ewooral:~$ pipenv
-bash: pipenv: command not found
(my-projects-env) fspoo@ewooral:~$ pip3

Usage:
  pip3 <command> [options]

Commands:
  install                     Install packages.
  download                    Download packages.
  uninstall                   Uninstall packages.
  freeze                      Output installed packages in requirements format.
  list                        List installed packages.
  show                        Show information about installed packages.
  check                       Verify installed packages have compatible dependencies.
  config                      Manage local and global configuration.
  search                      Search PyPI for packages.
  cache                       Inspect and manage pip's wheel cache.
  index                       Inspect information available from package indexes.
  wheel                       Build wheels from your requirements.
  hash                        Compute hashes of package archives.
  completion                  A helper command used for command completion.
  debug                       Show information useful for debugging.
  help                        Show help for commands.

General Options:
  -h, --help                  Show help.
  --debug                     Let unhandled
                              exceptions propagate
                              outside the main
                              subroutine, instead
                              of logging them to
                              stderr.
  --isolated                  Run pip in an
                              isolated mode,
                              ignoring environment
                              variables and user
                              configuration.
  --require-virtualenv        Allow pip to only
                              run in a virtual
                              environment; exit
                              with an error
                              otherwise.
  -v, --verbose               Give more output.
                              Option is additive,
                              and can be used up
                              to 3 times.
  -V, --version               Show version and
                              exit.
  -q, --quiet                 Give less output.
                              Option is additive,
                              and can be used up
                              to 3 times
                              (corresponding to
                              WARNING, ERROR, and
                              CRITICAL logging
                              levels).
  --log <path>                Path to a verbose
                              appending log.
  --no-input                  Disable prompting
                              for input.
  --proxy <proxy>             Specify a proxy in
                              the form [user:passw
                              d@]proxy.server:port
                              .
  --retries <retries>         Maximum number of
                              retries each
                              connection should
                              attempt (default 5
                              times).
  --timeout <sec>             Set the socket
                              timeout (default 15
                              seconds).
  --exists-action <action>    Default action when
                              a path already
                              exists: (s)witch,
                              (i)gnore, (w)ipe,
                              (b)ackup, (a)bort.
  --trusted-host <hostname>   Mark this host or
                              host:port pair as
                              trusted, even though
                              it does not have
                              valid or any HTTPS.
  --cert <path>               Path to PEM-encoded
                              CA certificate
                              bundle. If provided,
                              overrides the
                              default. See 'SSL
                              Certificate
                              Verification' in pip
                              documentation for
                              more information.
  --client-cert <path>        Path to SSL client
                              certificate, a
                              single file
                              containing the
                              private key and the
                              certificate in PEM
                              format.
  --cache-dir <dir>           Store the cache data
                              in <dir>.
  --no-cache-dir              Disable the cache.
  --disable-pip-version-check
                              Don't periodically
                              check PyPI to
                              determine whether a
                              new version of pip
                              is available for
                              download. Implied
                              with --no-index.
  --no-color                  Suppress colored
                              output.
  --no-python-version-warning
                              Silence deprecation
                              warnings for
                              upcoming unsupported
                              Pythons.
  --use-feature <feature>     Enable new
                              functionality, that
                              may be backward
                              incompatible.
  --use-deprecated <feature>  Enable deprecated
                              functionality, that
                              will be removed in
                              the future.
(my-projects-env) fspoo@ewooral:~$ pip3 install pipenv

Collecting pipenv
  Downloading pipenv-2022.9.8-py2.py3-none-any.whl (3.3 MB)
     ━━━━━━━━━━━━━ 3.3/3.3 MB 368.3 kB/s eta 0:00:00Requirement already satisfied: setuptools>=36.2.1 in ./my-projects-env/lib/python3.10/site-packages (from pipenv) (59.6.0)
Collecting virtualenv-clone>=0.2.5
  Downloading virtualenv_clone-0.5.7-py3-none-any.whl (6.6 kB)
Collecting certifi
  Downloading certifi-2022.6.15.1-py3-none-any.whl (160 kB)
     ━━━━━━━━━━━━ 160.4/160.4 316.1 kB/s eta 0:00:00                  KB
Collecting virtualenv
  Downloading virtualenv-20.16.5-py3-none-any.whl (8.8 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 8.8/8.8 MB 396.6 kB/s eta 0:00:00
Collecting distlib<1,>=0.3.5
  Downloading distlib-0.3.6-py2.py3-none-any.whl (468 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 468.5/468.5 KB 422.4 kB/s eta 0:00:00
Collecting filelock<4,>=3.4.1
  Downloading filelock-3.8.0-py3-none-any.whl (10 kB)
Collecting platformdirs<3,>=2.4
  Downloading platformdirs-2.5.2-py3-none-any.whl (14 kB)
Installing collected packages: distlib, virtualenv-clone, platformdirs, filelock, certifi, virtualenv, pipenv
Successfully installed certifi-2022.6.15.1 distlib-0.3.6 filelock-3.8.0 pipenv-2022.9.8 platformdirs-2.5.2 virtualenv-20.16.5 virtualenv-clone-0.5.7
(my-projects-env) fspoo@ewooral:~$
(my-projects-env) fspoo@ewooral:~$ dir
library.csv  my-projects-env
(my-projects-env) fspoo@ewooral:~$ mkdir django
(my-projects-env) fspoo@ewooral:~$ cd django/
(my-projects-env) fspoo@ewooral:~/django$ pip install django
Collecting django
  Downloading Django-4.1.1-py3-none-any.whl (8.1 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━╸━━━━━━━━━━━━━━━ 5.0/8.1 MB 515.4 kB/s eta 0:00:06
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━╺━━━━━━━━━━━ 5.8/8.1 MB 518.9 kB/s eta 0:00:05                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━╸━━━━━━━━━━━ 5.8/8.1 MB 520.3 kB/s eta 0:00:05              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━╸━━━━━━━━━━━ 5.8/8.1 MB 520.5 kB/s eta 0:00:05             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━╸━━━━━━━━━━━ 5.8/8.1 MB 519.1 kB/s eta 0:00:05           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╺━━━━━━━━━━ 5.9/8.1 MB 518.3 kB/s eta 0:00:05         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╸━━━━━━━━━━ 6.0/8.1 MB 518.9 kB/s eta 0:00:05       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╸━━━━━━━━━━ 6.0/8.1 MB 518.4 kB/s eta 0:00:05            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╸ 8.0/8.1 MB 509.8 kB/s eta 0:00:01
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 8.1/8.1 MB 502.0 kB/s eta 0:00:00
Collecting sqlparse>=0.2.2
  Downloading sqlparse-0.4.2-py3-none-any.whl (42 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 42.3/42.3 KB 502.5 kB/s eta 0:00:00
Collecting asgiref<4,>=3.5.2
  Downloading asgiref-3.5.2-py3-none-any.whl (22 kB)
Installing collected packages: sqlparse, asgiref, django
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
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

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
Collecting Django==3.2.5
  Downloading Django-3.2.5-py3-none-any.whl (7.9 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 7.9/7.9 MB 461.0 kB/s eta 0:00:00Collecting django-crispy-forms==1.8.1
  Downloading django_crispy_forms-1.8.1-py2.py3-none-any.whl (108 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 108.2/108.2 KB 465.5 kB/s eta 0:00:00Collecting django-filter==2.2.0
  Downloading django_filter-2.2.0-py3-none-any.whl (69 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 69.6/69.6 KB 534.2 kB/s eta 0:00:00Collecting djangorestframework==3.11.2
  Downloading djangorestframework-3.11.2-py3-none-any.whl (911 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 911.2/911.2 KB 460.1 kB/s eta 0:00:00Collecting Markdown==3.1.1
  Downloading Markdown-3.1.1-py2.py3-none-any.whl (87 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 87.8/87.8 KB 499.2 kB/s eta 0:00:00Collecting social-auth-app-django==3.1.0
  Downloading social_auth_app_django-3.1.0-py3-none-any.whl (23 kB)
Collecting social-auth-core==3.3.3
  Downloading social_auth_core-3.3.3-py3-none-any.whl (326 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 326.0/326.0 KB 459.0 kB/s eta 0:00:00Collecting django-extensions==2.2.5
  Downloading django_extensions-2.2.5-py2.py3-none-any.whl (223 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 223.3/223.3 KB 387.1 kB/s eta 0:00:00Collecting django-taggit==1.3.0
  Downloading django_taggit-1.3.0-py3-none-any.whl (45 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 45.7/45.7 KB 435.3 kB/s eta 0:00:00Collecting six==1.16.0
  Downloading six-1.16.0-py2.py3-none-any.whl (11 kB)
Collecting pytz
  Downloading pytz-2022.2.1-py2.py3-none-any.whl (500 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 500.6/500.6 KB 420.1 kB/s eta 0:00:00Requirement already satisfied: asgiref<4,>=3.3.2 in /home/fspoo/my-projects-env/lib/python3.10/site-packages (from Django==3.2.5->-r requirements.txt (line 8)) (3.5.2)
Requirement already satisfied: sqlparse>=0.2.2 in /home/fspoo/my-projects-env/lib/python3.10/site-packages (from Django==3.2.5->-r requirements.txt (line 8)) (0.4.2)
Requirement already satisfied: setuptools>=36 in /home/fspoo/my-projects-env/lib/python3.10/site-packages (from Markdown==3.1.1->-r requirements.txt (line 12)) (59.6.0)
Collecting python3-openid>=3.0.10
  Downloading python3_openid-3.2.0-py3-none-any.whl (133 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.7/133.7 KB 592.2 kB/s eta 0:00:00Collecting PyJWT>=1.4.0
  Downloading PyJWT-2.4.0-py3-none-any.whl (18 kB)
Collecting cryptography>=1.4
  Downloading cryptography-38.0.1-cp36-abi3-manylinux_2_28_x86_64.whl (4.2 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 4.2/4.2 MB 438.2 kB/s eta 0:00:00Collecting requests>=2.9.1
  Downloading requests-2.28.1-py3-none-any.whl (62 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 62.8/62.8 KB 514.4 kB/s eta 0:00:00Collecting defusedxml>=0.5.0rc1
  Downloading defusedxml-0.7.1-py2.py3-none-any.whl (25 kB)
Collecting oauthlib>=1.0.3
  Downloading oauthlib-3.2.1-py3-none-any.whl (151 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 151.7/151.7 KB 240.4 kB/s eta 0:00:00Collecting requests-oauthlib>=0.6.1
  Downloading requests_oauthlib-1.3.1-py2.py3-none-any.whl (23 kB)
Collecting cffi>=1.12
  Downloading cffi-1.15.1-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (441 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 441.8/441.8 KB 342.8 kB/s eta 0:00:00Collecting urllib3<1.27,>=1.21.1
  Downloading urllib3-1.26.12-py2.py3-none-any.whl (140 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 140.4/140.4 KB 515.0 kB/s eta 0:00:00Requirement already satisfied: certifi>=2017.4.17 in /home/fspoo/my-projects-env/lib/python3.10/site-packages (from requests>=2.9.1->social-auth-core==3.3.3->-r requirements.txt (line 14)) (2022.6.15.1)
Collecting idna<4,>=2.5
  Downloading idna-3.3-py3-none-any.whl (61 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 61.2/61.2 KB 713.1 kB/s eta 0:00:00Collecting charset-normalizer<3,>=2
  Downloading charset_normalizer-2.1.1-py3-none-any.whl (39 kB)
Collecting pycparser
  Downloading pycparser-2.21-py2.py3-none-any.whl (118 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 118.7/118.7 KB 188.6 kB/s eta 0:00:00Installing collected packages: pytz, django-crispy-forms, urllib3, six, PyJWT, pycparser, oauthlib, Markdown, idna, Django, defusedxml, charset-normalizer, requests, python3-openid, djangorestframework, django-taggit, django-filter, django-extensions, cffi, requests-oauthlib, cryptography, social-auth-core, social-auth-app-django
  Attempting uninstall: Django
    Found existing installation: Django 4.1.1
    Uninstalling Django-4.1.1:
      Successfully uninstalled Django-4.1.1
Successfully installed Django-3.2.5 Markdown-3.1.1 PyJWT-2.4.0 cffi-1.15.1 charset-normalizer-2.1.1 cryptography-38.0.1 defusedxml-0.7.1 django-crispy-forms-1.8.1 django-extensions-2.2.5 django-filter-2.2.0 django-taggit-1.3.0 djangorestframework-3.11.2 idna-3.3 oauthlib-3.2.1 pycparser-2.21 python3-openid-3.2.0 pytz-2022.2.1 requests-2.28.1 requests-oauthlib-1.3.1 six-1.16.0 social-auth-app-django-3.1.0 social-auth-core-3.3.3 urllib3-1.26.12
(my-projects-env) fspoo@ewooral:~/dj4e-samples$ python3 manage.py check
When you want to use social login, please see dj4e-samples/github_settings-dist.py
Using registration/login.html as the login template
System check identified no issues (0 silenced).
(my-projects-env) fspoo@ewooral:~/dj4e-samples$ python3 manage.py migrateWhen you want to use social login, please see dj4e-samples/github_settings-dist.py
Using registration/login.html as the login template
Operations to perform:
  Apply all migrations: admin, auth, autos, bookmany, bookone, cats, chat, contenttypes, favs, favsql, form, forums, gview, many, myarts, pics, rest, sessions, social_django, taggit, tagme, tracks, users, well
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying autos.0001_initial... OK
  Applying bookmany.0001_initial... OK
  Applying bookone.0001_initial... OK
  Applying cats.0001_initial... OK
  Applying chat.0001_initial... OK
  Applying favs.0001_initial... OK
  Applying favsql.0001_initial... OK
  Applying form.0001_initial... OK
  Applying forums.0001_initial... OK
  Applying gview.0001_initial... OK
  Applying many.0001_initial... OK
  Applying myarts.0001_initial... OK
  Applying pics.0001_initial... OK
  Applying pics.0002_auto_20200321_1239... OK
  Applying rest.0001_initial... OK
  Applying sessions.0001_initial... OK
  Applying social_django.0001_initial... OK
  Applying social_django.0002_add_related_name... OK
  Applying social_django.0003_alter_email_max_length... OK
  Applying social_django.0004_auto_20160423_0400... OK
  Applying social_django.0005_auto_20160727_2333... OK
  Applying social_django.0006_partial... OK
  Applying social_django.0007_code_timestamp... OK
  Applying social_django.0008_partial_timestamp... OK
  Applying taggit.0001_initial... OK
  Applying taggit.0002_auto_20150616_2121... OK
  Applying taggit.0003_taggeditem_add_unique_index... OK
  Applying tagme.0001_initial... OK
  Applying tagme.0002_forum_tags... OK
  Applying tagme.0003_auto_20210410_0151... OK
  Applying tracks.0001_initial... OK
  Applying users.0001_initial... OK
  Applying well.0001_initial... OK
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
