# Users

This document is designed for Users that wish to deploy the system.

Download the latest release binaries of the CLI and Server from Main at: https://github.com/getcouragenow/main/releases

- CLI binary allows you to remotely talk to the server from your laptop.
	- Upload the encrypted config and bootstrappers.
	- Activate a bootstrap that you uploaded to the server

- Server binary is the only binary needed for the server. There are no other dependences like databases etc, because the server has an embedded encrypted database.

---

Download the latest booty from Main at: https://github.com/getcouragenow/main/releases.

- Booty helps you to locally configure the system.
	- encrypt the config before you uplaod it to the server.
	- encode the images into the bootstrap.


## Learning the system

Its best to get familiar with the system by playing with the Demo that is deployed by the dev team each day.

We call it org-y, and is all machine generated. The config and bootstrap data is at: https://github.com/getcouragenow/main/tree/master/deploy/projects/org-y

Its is deployed to https://org-y.getcouragenow.org/

The Server boots with a hardcoded superadmin account that is hardcoded into the code. When you login and change it, the new one will be saved into the encrypted DB, and the one hard coded into the code will be ignored.

The bootstrap data has all the data, including all accounts other than super admin.

superadmin role:

- username: superadmin@getcouragenow.org
- password: superadmin

orgadmin

- username: ?@email.org
- password: ?

projectadmin:

- username: ?@email.org
- password: ?


After you have played with the Live demo, you should move on to "Running it locally".

## Running it locally

Running it the Booty, CLi and Server locally is a good way to check everything works before you Deploy to the Server.

You should make a folder on your laptop or in git for your project.

Grab an example project:

You can start with one of our templates:
- org-y is all machine generated: https://github.com/getcouragenow/main/tree/master/deploy/projects/org-y
- org-x is hand customise: https://github.com/getcouragenow/main/tree/master/deploy/projects/org-x


Proejcts contain the following files:

- bootstrap-data 
- config

Then edit the config for your needs:

- blah blah.. 

Then edit the bootstap data:

- blah blah...

After you have gotten it running locally, you should move on to "Deploy local to Server".

## Deploy local to Server