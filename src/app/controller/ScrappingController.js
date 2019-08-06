const cheerio = require('cheerio');
const request = require('request-promise');
const interval = require('interval-promise');

const { Paper } = require('../models/');

class ScrappingController {
  async getChilds (req, res) {
    const papers = await Paper.findAll({
      where: {
        read: false
      }
    });
    if (papers) {
      res.send(papers)
    }
    else {
      res.status(404)
    }
  }
}

module.exports = new ScrappingController();