1. Update the package lists on your system by running the command:
   ```
   sudo apt update
   ```

2. Install the necessary dependencies for Docker using the command:
   ```
   sudo apt install apt-transport-https ca-certificates curl software-properties-common
   ```

3. Add the Docker repository GPG key to your system using the command:
   ```
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

4. Add the Docker repository to your system's software sources using the command:
   ```
   echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. Update the package lists again to include the Docker repository using the command:
   ```
   sudo apt update
   ```

6. Finally, install Docker using the command:
   ```
   sudo apt install docker-ce docker-ce-cli containerd.io
   ```

After these steps, Docker should be successfully installed on your system.

