'use strict'

const DataStore = require("./../DataStore");

/**
 * No Logic here, you can delete this class and work with DataStore 
 * But it's the most clean way to create a NOSQL structure, one "table" => one class.
 */
class Article extends DataStore{

    constructor(){
        super("articles")
    }

    newArticle(article ){
        const newArticle = this.addOne(article);
        //console.log(newArticle);
        return newArticle;
    }
    getAllArticles(){
        const articles = this.findAll();
        console.log(articles);
        return articles;
    }
}

module.exports = Article;