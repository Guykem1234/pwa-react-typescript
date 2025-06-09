const { default: SelectInput } = require('@mui/material/Select/SelectInput');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);

const sid = "866763b0-ce4e-4d7a-87e3-80f02d8a55b0"

async function sendToTranseferList(id) {
  fetch("https://utas.external.s2.fut.ea.com/ut/game/fifa22/item", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en,he;q=0.9,zh-CN;q=0.8,zh;q=0.7",
      "content-type": "application/json",
      "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ut-sid": sid
    },
    "referrer": "https://www.ea.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{\"itemData\":[{\"id\":${id},\"pile\":\"trade\"}]}`,
    "method": "PUT",
    "mode": "cors",
    "credentials": "omit"
  });
}

async function deletePlayer(id) {
  fetch(`https://utas.external.s2.fut.ea.com/ut/game/fifa22/item/${id}`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en,he;q=0.9,zh-CN;q=0.8,zh;q=0.7",
      "content-type": "application/json",
      "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ut-sid": sid
    },
    "referrer": "https://www.ea.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "DELETE",
    "mode": "cors",
    "credentials": "omit"
  });
}

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

(async function test() {
  a = await fetch("https://utas.external.s2.fut.ea.com/ut/game/fifa22/club", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en,he;q=0.9,zh-CN;q=0.8,zh;q=0.7",
      "content-type": "application/json",
      "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ut-sid": sid
    },
    "referrer": "https://www.ea.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"count\":91,\"sort\":\"desc\",\"level\":\"gold\",\"sortBy\":\"value\",\"start\":0,\"type\":\"player\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });
  players = await a.json();
}())

  (async function sendToTranseferListPlayers() {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      await sendToTranseferList(player.id)
      await sleep(2000)
    }
  })