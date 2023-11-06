1. sudo dpkg -i filename.deb

2. If errors are encountered for example:

        dpkg: dependency problems prevent configuration of zoom:
         zoom depends on libegl1-mesa; however:
          Package libegl1-mesa is not installed.
         zoom depends on libxcb-xtest0; however:
          Package libxcb-xtest0 is not installed.
         zoom depends on libxcb-cursor0; however:
          Package libxcb-cursor0 is not installed.

        dpkg: error processing package zoom (--install):
         dependency problems - leaving unconfigured
        Processing triggers for gnome-menus (3.36.0-1.1ubuntu1) ...
        Processing triggers for desktop-file-utils (0.26-1ubuntu5) ...
        Processing triggers for mailcap (3.70+nmu1ubuntu1) ...
        Processing triggers for shared-mime-info (2.2-1) ...
        Errors were encountered while processing:

use `sudo apt --fix-broken install` to resolve issues.



