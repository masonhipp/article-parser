/**
 * Testing
 * @ndaidong
 */

/* global describe it before */
/* eslint no-undefined: 0*/
/* eslint no-array-constructor: 0*/
/* eslint no-new-func: 0*/

'use strict';

var chai = require('chai');

chai.should();
var expect = chai.expect;

var AP = require('../../../src/article-parser');
var extract = AP.extract;

let samples = [
  'https://twitter.com/ndaidong/status/671648545896718337',
  'http://www.onextrapixel.com/2015/12/02/why-and-how-to-liven-up-your-site-animation-in-web-design/',
  'http://www.smashingapps.com/2015/12/01/8-free-productivity-tools-for-business-owners.html',
  'http://www.ted.com/talks/tony_robbins_asks_why_we_do_what_we_do',
  'https://soundcloud.com/wlrn/1104am-local-government-opposed-to-bill-that-would-streamline-elections-1',
  'https://www.youtube.com/watch?v=8jPQjjsBbIc',
  'https://vimeo.com/146753785',
  'http://codecondo.com/5-steps-learn-rock-twitter/',
  'https://googleblog.blogspot.com/2015/12/join-googleorg-to-help-make-education.html'
];


var testOne = (url) => {
  describe('.extract("' + url + '")', () => {

    let article;

    before((done) => {
      extract(url).then((art) => {
        article = art;
      }).catch((e) => {
        console.log(e);
        return false;
      }).finally(done);
    });

    describe('Checking result...', () => {

      it(' should be object', (done) => {
        expect(article).to.be.an('object');
        done();
      });

      it(' should match schema', (done) => {
        expect(article).to.have.all.keys('alias', 'url', 'canonicals', 'title', 'description', 'image', 'content', 'author', 'source', 'domain', 'duration');
        done();
      });

      it(' title must be shorter than 120 characters', (done) => {
        expect(article.title).to.have.length.below(120);
        done();
      });

      it(' description must be shorter than 160 characters', (done) => {
        expect(article.description).to.have.length.below(160);
        done();
      });

      it(' duration must be number > 0', (done) => {
        expect(article.duration).to.be.a('number');
        expect(article.duration).to.be.at.least(1);
        done();
      });

      it(' canonicals must be an array, not empty', (done) => {
        expect(article.canonicals).to.be.an('array');
        expect(article.canonicals).to.have.length.above(0);
        done();
      });

    });
  });
}

samples.map(testOne);