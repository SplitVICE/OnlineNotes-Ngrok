# Online Notes + Ngrok
Simple Node script that starts a Ngrok process and automatically posts the resulting URL into a private note in http://onlinenotes.ml . Script also puts the generated url into a txt file at root of the folder.
### Deployment
- npm install
- npm start

Run `npm start` when operating system starts to automatically start a connection and to publish it into Online Notes.

### Environment variables
Use `/.env.template` to set environment variables

Note: the Ngrok auth token is taken by current computer system. It is not needed to be set.