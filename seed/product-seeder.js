var Product=require('../models/products');
var mongoose=require('mongoose');
//open product-seeder and run node product-seeder.js after removing comments
mongoose.connect('mongodb://abhi3:abcde@ds137957.mlab.com:37957/shopabhi',(err)=>{

if(err)throw err;
else{console.log('shop');}
});

var products=[

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg' ,
  title:'The Alchemist',
  description:'The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho which was first published in 1988.',
  price:200
}),

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/54/Manual_of_the_Warrior_of_Light_%28cover%29.jpg' ,
  title:'Manual of the Warrior Light',
  description:'Manual of the Warrior of Light is a 1997 collection of Paulo Coelho \'s teachings originally published in various Brazilian newspapers between 1993 and 1996.',
  price:280
}),

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Aleph_book.jpg/220px-Aleph_book.jpg' ,
  title:'Aleph',
  description:'Aleph is a 2011 novel by the Brazilian writer Paulo Coelho. An autobiographical account of Coelho, it is his fourteenth major book, and touches on the theme of spirituality.',
  price:300
}),

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Adultery_%28novel%29.jpg/220px-Adultery_%28novel%29.jpg' ,
  title:'Adultery',
  description:'Aleph is a 2011 novel by the Brazilian writer Paulo Coelho. An autobiographical account of Coelho, it is his fourteenth major book, and touches on the theme of spirituality.',
  price:100
}),

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Paulo_Coelho_-_Brida.jpeg' ,
  title:'Brida',
  description:'Aleph is a 2011 novel by the Brazilian writer Paulo Coelho. An autobiographical account of Coelho, it is his fourteenth major book, and touches on the theme of spirituality.',
  price:300
}),

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/The_Zahir_%28novel%29.jpg/220px-The_Zahir_%28novel%29.jpg' ,
  title:'TheZahir',
  description:'Aleph is a 2011 novel by the Brazilian writer Paulo Coelho. An autobiographical account of Coelho, it is his fourteenth major book, and touches on the theme of spirituality.',
  price:200
}),

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Adultery_%28novel%29.jpg/220px-Adultery_%28novel%29.jpg' ,
  title:'Adultery',
  description:'Aleph is a 2011 novel by the Brazilian writer Paulo Coelho. An autobiographical account of Coelho, it is his fourteenth major book, and touches on the theme of spirituality.',
  price:100
}),

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Paulo_Coelho_-_Brida.jpeg' ,
  title:'Brida',
  description:'Aleph is a 2011 novel by the Brazilian writer Paulo Coelho. An autobiographical account of Coelho, it is his fourteenth major book, and touches on the theme of spirituality.',
  price:300
}),

new Product({
imagePath: 'https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg' ,
  title:'The Alchemist',
  description:'The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho which was first published in 1988.',
  price:200
}),

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/54/Manual_of_the_Warrior_of_Light_%28cover%29.jpg' ,
  title:'Manual of the Warrior Light',
  description:'Manual of the Warrior of Light is a 1997 collection of Paulo Coelho \'s teachings originally published in various Brazilian newspapers between 1993 and 1996.',
  price:280
}),

new Product({

imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Aleph_book.jpg/220px-Aleph_book.jpg' ,
  title:'Aleph',
  description:'Aleph is a 2011 novel by the Brazilian writer Paulo Coelho. An autobiographical account of Coelho, it is his fourteenth major book, and touches on the theme of spirituality.',
  price:300
})
];
var done=0;

for(var i=0;i < products.length;i++){
	var x=products[i];
	products[i].save(function(err){
		
      if(err)throw err;
      else{done++;
      if(done==products.length){
      	exit();
      }}
	});
}

function exit(){

	mongoose.disconnect();
}