---
title: Create a Bash alias for a Terminal command
permalink: /create-a-bash-alias-for-a-terminal-command
status: published
---

Do you find yourself frequently typing out the same command in Terminal? One simple way to make your workflow more efficient is to create a Bash alias.

### Follow these simple steps
- Open your terminal emulator of choice. I use the macOS default **Terminal**.

![Step 1](assets/img/create-an-alias/step-1.png)

- Type in the command `bash sudo nano .bash_profile` then press **Enter**. This command will open **.bash_profile** in the Nano text editor. You may be prompted for your password.

![Step 2](assets/img/create-an-alias/step-2.png)

- Once **.bash_profile** is open, type in `alias` followed by the alias name you would like to use. Now, add an `=` sign and place the desired command between two `'` characters. In the example below, I created an alias called `youraliasname` and assigned it `cd cats/tabbies`.

![Step 3](assets/img/create-an-alias/step-3.png)

- Press **CTRL+X** to exit Nano and save your changes to **.bash_profile**. If everything looks right, press **Y**.

![Step 4](assets/img/create-an-alias/step-4.png)

- Nano will ask you to confirm the file name to write the changes to. Press **Enter** to overwrite the previous version of **.bash_profile**.

![Step 5](assets/img/create-an-alias/step-5.png)

- Close and reopen **Terminal** (or your chosen emulator) to use your new alias. Test out your new alias by typing the alias name and pressing **Enter**.

![Step 6](assets/img/create-an-alias/step-7.png)

You're all set! 🚀
