var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
  	data: [
  		{
  			date: '11.05.2017',
  			items: [
  				{
  					title: 'Пивас',
  					price: 600
  				},
  				{
  					title: 'Проезд',
  					price: 100
  				},
  				{
  					title: 'Одежда',
  					price: 6000
  				}
  			]
  		},
  		{
  			date: '10.05.2017',
  			items: [
  				{
  					title: 'Пивас',
  					price: 600
  				},
  				{
  					title: 'Проезд',
  					price: 100
  				},
  				{
  					title: 'Одежда',
  					price: 6000
  				}
  			]
  		},
  		{
  			date: '09.05.2017',
  			items: [
  				{
  					title: 'Пивас',
  					price: 600
  				},
  				{
  					title: 'Проезд',
  					price: 100
  				},
  				{
  					title: 'Одежда',
  					price: 6000
  				}
  			]
  		},
  		{
  			date: '08.05.2017',
  			items: [
  				{
  					title: 'Пивас',
  					price: 600
  				},
  				{
  					title: 'Проезд',
  					price: 100
  				},
  				{
  					title: 'Одежда',
  					price: 6000
  				}
  			]
  		},
  		{
  			date: '07.05.2017',
  			items: [
  				{
  					title: 'Пивас',
  					price: 600
  				},
  				{
  					title: 'Проезд',
  					price: 100
  				},
  				{
  					title: 'Одежда',
  					price: 6000
  				}
  			]
  		},
  		{
  			date: '06.05.2017',
  			items: [
  				{
  					title: 'Пивас',
  					price: 600
  				},
  				{
  					title: 'Проезд',
  					price: 100
  				},
  				{
  					title: 'Одежда',
  					price: 6000
  				}
  			]
  		},
  		{
  			date: '05.05.2017',
  			items: [
  				{
  					title: 'Пивас',
  					price: 600
  				},
  				{
  					title: 'Проезд',
  					price: 100
  				},
  				{
  					title: 'Одежда',
  					price: 6000
  				}
  			]
  		},
  		{
  			date: '04.05.2017',
  			items: [
  				{
  					title: 'Пивас',
  					price: 600
  				},
  				{
  					title: 'Проезд',
  					price: 100
  				},
  				{
  					title: 'Одежда',
  					price: 6000
  				}
  			]
  		},
  		{
  			date: '03.05.2017',
  			items: [
  				{
  					title: 'Пивас',
  					price: 600
  				},
  				{
  					title: 'Проезд',
  					price: 100
  				},
  				{
  					title: 'Одежда',
  					price: 6000
  				}
  			]
  		}
  	]
  });
});

module.exports = router;
