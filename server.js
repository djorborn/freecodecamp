require('express')()
.set('view engine', 'pug')
.use(require('express').static(__dirname + '/public'))

.use(function(req, res){
  if(req._parsedUrl.path !== '/'){
    res.render('numbers', {
      data: {'unix': 123456, 'normal': 'Dec 1 2017'}
    });
  } else {
    res.render('main');
  }
})

.use(function(req, res){
  res.send("meow");
})

.listen(8080);
