# How to develop

## Develop

```sh
npm install
sh init.sh
npm run dev
```

## Run the extension

Open chrome://extensions/ on you chrome browser.
Please enable the developer mode
Load unpacked extension...
Add this project, at folder `addon`
Then open any Non-HTTPS page to see the addon.
Make sure `npm run dev` is running.

## Run the server

```sh
npm run build
npm start
```