# user-management

## How to run
1. Clone git repository using command `git clone https://github.com/BSkura98/user-management.git`
2. Create `.env` file in `server` directory with environment variables:
- `DB_NAME` - database name
- `DB_USER` - database user name
- `DB_PASSWORD` - database password

To make the process faster you can also download `.env` file from here https://drive.google.com/drive/u/0/folders/12n8KO_4Xmv0q3OYycHK1RESWJviooVxh and paste it to `server` directory

3. Run locally server:
* Open terminal in `server` directory
* Run `npm install` or `yarn install` to install all dependencies
* Run `npm build` or `yarn build` to build the app (compile from TS to JS)
* Run `npm run start` or `yarn start` to start the server app
4. Run locally client app:
* Open terminal in `client` directory
* Run `npm install` or `yarn install` to install all dependencies
* Run `npm run start` or `yarn start` to start the client app
