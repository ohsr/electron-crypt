'use strict'

const path = require('path')
const { app, ipcMain } = require('electron')

const Window = require('./Window')
const Article = require("./classes/services/Article");

require('electron-reload')(__dirname)

const article = new Article();

//Articles creation
for(let i=1; i<=10; i++){
  article.newArticle({
    id: i,
    title: `Article N°${i}`,
    content: "Ceci est un test",
    createdAt: new Date()
  })
}
//GET of Articles
article.getAllArticles();


function main () {
  // todo list window
  let mainWindow = new Window({
    file: path.join('renderer', 'index.html')
  })

  // initialize with articles
  mainWindow.once('show', () => {
    //mainWindow.webContents.send('articles', article.getAllArticles()) //send Data
  })
}

app.on('ready', main)

app.on('window-all-closed', function () {
  app.quit()
})