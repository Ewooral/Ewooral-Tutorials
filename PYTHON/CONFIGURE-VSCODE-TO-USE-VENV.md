## Configure VS Code to Use the Virtual Environment

By default, VS Code will use the global (system-wide) Python environment when you run Jupyter Notebook. 
To configure VS Code to use the virtual environment you just created, follow these steps:

*  Open VS Code
* Click on the “Command Palette” icon in the left-hand side menu (or press Ctrl+Shift+P on Windows or Cmd+Shift+P on Mac)
* Type “Python: Select Interpreter” in the search bar and select it
* A list of available Python interpreters will appear.
*  Select the interpreter associated with your virtual environment (it should be located in the <name_of_virtual_environment>/bin directory)
* VS Code will now use the selected interpreter when you run Jupyter Notebook
