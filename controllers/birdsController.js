const axios = require('axios');

exports.get_bird_create = function(req, res) {
    res.render('birds/buildABird', { title: 'Create a Bird' });
  }
  

  exports.post_create_bird = function(req, res) {
     let birdData = req.body;
     let name = birdData.nickname;
     console.log(name);
    console.log(req.body);
    res.render('birds/birdCreateSuccess', { birdNickname: name, title: 'Bird Created'});
  }

  