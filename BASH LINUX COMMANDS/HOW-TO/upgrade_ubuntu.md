# Upgrade Ubuntu From Command Line

* To only upgrade the packages, use the commands below.

	$ sudo apt-get update && sudo apt-get upgrade
	
* To upgrade the whole version, start by checking the current Ubuntu version you are running.

	$ lsb_release -a

* Open your terminal and enter the command below.

	$ sudo apt install update-manager-core
	
* For the upgrade to work, ensure the upgrade policy is 

	set to “Prompt=Its” or “Prompt=normal” in the /etc/update-manager/release-upgrades file.
	
* Note that this guide assumes you are upgrading your desktop Ubuntu version. However, if you are working 
  remotely over ssh, you will need to temporarily open port 1022 for the upgrade to work, especially if you are running a firewall.

	$ sudo iptables -I INPUT -p tcp --dport 1022 -j ACCEPT
	
* Install Pending Package Updates
  It’s a good habit to install any pending software updates before upgrading the whole system.

	$ sudo apt update && sudo apt dist-upgrade
	
* Start the Upgrade
  With a stable connection to save time, run the command below to download the needed files and upgrade your Ubuntu to the latest version.
  The download size is around 1.8 GB. Therefore, your internet speed determines how fast it takes.

	$ sudo do-release-upgrade
	
* You can verify the upgrade by checking the current version, as shown.

	$ lsb_release -a
