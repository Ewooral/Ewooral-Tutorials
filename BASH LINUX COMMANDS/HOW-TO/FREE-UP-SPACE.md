Below there is a script (it is an extract from a personal script that I use to 
perform a general "spring cleaning" of the root partition) that reduces the overall size of snaps working in three directions:

reduce the maximum numbers of revisions stored in your system (line snap set system refresh.retain=2 of the script)
clean the oldest revisions when you have snap revisions that exceed the maximum number defined in the previous point (while loop in the script)
Clean the snap cache directory (rm /var/lib/snapd/cache/* command in the script)
#!/bin/bash

# Error status variables
STATUS_OK=0
STATUS_ERROR=1

# Color settings
YELLOW_COLOR="\033[1;33m"
RED_COLOR="\033[0;31m"
OFF_COLOR="\033[0m"

# Set English language
LANG=en_US.UTF-8

# Execute it as root user
if [ "${USER}" != root ]; then
  echo -e "${RED_COLOR}ERROR: must be root! Exiting...${OFF_COLOR}"
  exit "${STATUS_ERROR}"
fi

# Current status
USED_BEFORE="$(df -k / | awk 'NR>1 {print $3}')"

# snapd revisions clean
if [ -n "$(command -v snap)" ]; then
  # shellcheck disable=SC2162
  read -p "→ Do you want to remove unused snapd revisions? [Y/n] " KEY
  KEY="${KEY:0:1}" && KEY="${KEY,,}"
  if [ "${KEY}" = "y" ] || [ "${KEY}" = "" ]; then
    # remove unused snapd revisions
    echo "Removing unused snapd revisions..."
    snap set system refresh.retain=2
    # shellcheck disable=SC2162
    snap list --all | awk '/disabled/ {print $1, $3}' |
    while read SNAP_NAME SNAP_REV; do
      snap remove "${SNAP_NAME}" --revision="${SNAP_REV}";
    done
    if [ -d /var/lib/snapd/cache ] && [ -n "$(ls -A /var/lib/snapd/cache)" ]; then
      rm /var/lib/snapd/cache/*
    fi
    echo "Nothing unused to uninstall"
  else
    echo "Task skipped"
  fi
fi

# Current status
USED_AFTER="$(df -k / | awk 'NR>1 {print $3}')"

# Summary
echo -e "${YELLOW_COLOR}Freed up space: $(( (USED_BEFORE - USED_AFTER)/1024 )) MB${OFF_COLOR}"
exit "${STATUS_OK}"
Save the above code in a file, for example snap-cleanup.sh
Put it in a folder defined in $PATH, for example $HOME/.local/bin
Make it executable by chmod +x $HOME/.local/bin/snap-cleanup.sh
Call it by sudo bash `$HOME/.local/bin/snap-cleanup.sh`
As a general consideration, size is a weakeness of the snap format, because shared 
libraries/dependencies are "duplicated" inside every snap. What you can do, if this is 
really a problem for you, consists in using the .deb version of an application (from apt install) instead of the snap version.

You can also remove completely snapd, but consider that for the GNOME variant of Ubuntu the number of 
packages distributed as snap is increasing, and for some of them the decision has been taken not by 
Canonical but by the package distributor itself (for instance, Mozilla for firefox). In the future the removal of snapd may not be harmless.
