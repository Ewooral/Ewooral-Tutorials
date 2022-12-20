# How Do I Add a Directory to PATH in ZSH
	
Linux is very respectful of the file system and file organization. Typically, when you run a 
command such as Bash, ls, cd, and others, you execute the executable file associated with the command.

Most Linux commands have their executable files in specific directories such as /bin, /sbin, /usr/bin, /usr/local/bin, and /usr/local/sbin. 
The Linux system recognizes that these directories contain the executable for the commands you run using the path variable.

However, what if the executable you want to run is not in the directories above? What should you do then? The answer 
is pretty straightforward: you can add the path to your target directory to the $PATH variable


`This guide will teach you how to add a directory to the $PATH variable, allowing you to run executables in the 
specific directory from anywhere in the filesystem. Before we learn how to add directories to the path, let us understand the $PATH variable.`
	
	
	
# Understanding $PATH
The `$PATH` environment variable is a list of colon-separated directories where the Linux system searches 
for executable files every time you run a command in the terminal.

To view the directories that are part of the $PATH variable, use the printenv command as:

	`printenv | grep PATH`
	
	You will get an example output similar to the one shown below:

	`PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin`
	
Each directory is separated by a colon.
	
	
# How to Add A Directory to Path
To add a directory to the $PATH variable, we can use the export command. For example, let’s say you have a directory /custom/bin.

	You can do:
	`export PATH="/custom/bin:$PATH"`
	
	
Using the export command, we export the modified variable to the shell child process environments.
	
	
	
You can verify that the directory has been added to the $PATH using echo as:

	`echo $PATH | grep custom`
	
You will get an output similar to the one below:

/custom/bin:/usr/local/sbin:/…




*Unfortunately*, adding a directory to the path using this method is temporary and only exists within the current session.

To make the path variable persistent changes, we can use the shell configuration files loaded at each shell startup.
	
	
# In Bash, you can add the $PATH variable in the `~/.bashrc` file. 
If you are on `ZSH`, you can add the $PATH in the ~/.zshrc file.

For example, to add the directory to the path in the .zshrc file, we can edit the file and add the entry as:

	 vim ~/.zshrc

	`export PATH="/custom/bin:$PATH"`
	

# Once done, save the file and load the changes using the source command as:

	source ~/.zshrc
	
## ALTERNATIVE
1. You can add your directory path to the `~/.bash_profile` file 
	
	PATH=/home/ewooral/.my-secret-bowl:$PATH OR
	export="$HOME/.my-secret-bowl:$PATH"


2. After that, load the path environment in the `~/.zshrc` file by adding it at the beginning of the file.
	
	source /home/ewooral/.bash_profile 

