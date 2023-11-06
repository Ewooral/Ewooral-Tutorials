1. git config --global credential.helper cache 
If you don't want to use SSH and prefer to authenticate with GitHub using HTTPS without being prompted for your username and password every time, you can use Git's credential helper to cache your credentials. Here's how to do it:

1. **Cache GitHub Credentials with Git Credential Helper:**

   Open your terminal and run the following command to enable Git's credential helper for caching your GitHub credentials:

   ```bash
   git config --global credential.helper cache
   ```

   This command configures Git to cache your credentials for a default duration of 15 minutes. You can adjust the duration by specifying the `--timeout` option (in seconds). For example, to cache credentials for 1 hour, you can use:

   ```bash
   git config --global credential.helper 'cache --timeout=3600'
   ```

   With this configuration, Git will store your GitHub credentials temporarily in memory, and you won't be prompted to enter them for the specified duration.

2. **Perform a Git Operation to Authenticate:**

   The next time you perform a Git operation that requires authentication (e.g., `git clone`, `git pull`, `git push`) with a GitHub repository, you will be prompted to enter your GitHub username and password. After providing your credentials once, Git will cache them, and you won't be prompted for your username and password for the specified duration.

Please note that while using the Git credential helper with HTTPS is a convenient way to avoid repetitive password prompts, it may not be as secure as using SSH keys, especially if your system is shared or not adequately protected. If security is a concern, you might want to consider using SSH keys for authentication, as they provide a more secure and recommended method for GitHub authentication.
