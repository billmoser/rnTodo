# Nice demo project for React Native

## Run the app on Android

Next, to start metro server in development mode, check that you are using node version 16 (`node --version`), then run:

```
npx react-native start
```

Open another terminal window and run

```
npx react-native run-android
```

## Run tests on Android

Run

```
npm test
```

Tests should always pass!

These tests use enzyme and jest for testing.

## Get started

To start, clone the project.

```
git clone git@github.com:billmoser/rnTodo.git
```

Next, make sure that JDK 11 is installed.

```
java --version
openjdk 11.0.13 2021-10-19
OpenJDK Runtime Environment (build 11.0.13+8-Ubuntu-0ubuntu1.21.04)
OpenJDK 64-Bit Server VM (build 11.0.13+8-Ubuntu-0ubuntu1.21.04, mixed mode, sharing)
```

If it's not installed, you will have to install it. I installed it by running `sudo apt-get install openjdk-11-jdk` on my Ubuntu 21.04 computer.

# Git tips

[Information about merge vs rebase (Atlassian)](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

[Simple git workflow (Atlassian)](https://www.atlassian.com/git/articles/simple-git-workflow-is-simple)

How to contribute to this project

```
# Start your feature branch
git checkout -b <123-my-feature-branch>
# Do some work...
# Do these first two steps in the case where we have not yet pushed our feature branch to remote
git checkout main
git pull
# Checkout your feature branch again
git checkout <123-my-feature-branch>
git fetch origin
git rebase origin/main
git push origin <123-my-feature-branch>
# Then create your PR
```

# Troubleshooting

If you see this error when running npx commands ...

```
info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 936 file(s) to forward-jetify. Using 12 workers...
info JS server already running.
info Installing the app...

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup.
Error: spawn ./gradlew EACCES
    at Process.ChildProcess._handle.onexit (node:internal/child_process:282:19)
    at onErrorNT (node:internal/child_process:480:16)
    at processTicksAndRejections (node:internal/process/task_queues:83:21)
info Run CLI with --verbose flag for more details.
```

... then try running `sudo chmod 755 android/gradlew`. [See StackOverflow for info.](https://stackoverflow.com/questions/54541734/spawnsync-gradlew-eacces-error-when-running-react-native-project-on-emulator-u)

Of course, you will need a device attached in USB debugging mode or you will need to have an Android emulator running.

