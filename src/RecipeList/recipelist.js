import { FormControlStatic } from "react-bootstrap";

export function getrecipelist() {
  var recipelist = [
    {
    recipeid:0,
    type:'Bread',
    title:'White Bread Loaf',
    subtitle:'This is a recipe for a standard loaf',
    description:'A round bread loaf is one of the simplest loaves to get right, as long as you are prepared to be patient',
    imagedescription:'this is an alt text',
    imageUrl:'/whiteboule.jpg',
    basehydration:65,
    flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
    watercomponents:[{id:1,ratio:78},{id:9,ratio:19},{id:10,ratio:4}],
    autolysecomponents:[{id:0},{id:1}],
    leavencomponents:[{id:2,ratio:100,hydration:65}],
    ingredients: [
      {
        ratio:80,
        name: 'flour',
        quantity: 0,
        unit: 'g',
        id: 0,
      },
      {
        ratio:56,
        name: 'water',
        quantity: 30,
        unit: 'g',
        id: 1
      },
      {
        ratio:75,
       name: 'starter at 65% hydration',
        quantity: 30,
        unit: 'g',
        id: 2
      },
      {
        ratio:2,
        name: 'salt',
        quantity: 30,
        unit: 'g',
        id: 3
      },
      {
        ratio:0,
        name: 'dryyeast',
        quantity: 30,
        unit: 'g',
        id: 4
      },
      {
        ratio:0,
        name: 'oil',
        quantity: 30,
        unit: 'g',
        id: 5
      },
      {
        ratio:0,
        name: 'butter',
        quantity: 30,
        unit: 'g',
        id: 6
      },
      {
        ratio:0,
        name: 'eggs',
        quantity: 30,
        unit: 'g',
        id: 7
      },
      {
        ratio:20,
        name: 'flour to refresh leaven',
        quantity: 0,
        unit: 'g',
        id: 8,
      },
      {
        ratio:14,
        name: 'water for leaven mix',
        quantity: 0,
        unit: 'g',
        id: 9,
      },
      {
        ratio:4,
        name: 'water for salt mix',
        quantity: 0,
        unit: 'g',
        id: 10,
      },

    ],
    instructions: [
      {
        id: 0,
        title:'leaven mix',
        description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 1,
        title:'Autolyse mix',
        description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 2,
        title:'Salt mix',
        description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 3,
        title: 'knead',
        description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
        temp: 0,
        start: '00:02',
        duration: '00:10'
      },
      {
        id: 4,
        title: 'wait for the first rise',
        description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 5,
        title: 'shape',
        description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
        temp: 0,
        start: '00:02',
        duration: '00:20'
      },
      {
        id: 6,
        title: 'second proof',
        description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
        temp: 0,
        start: '00:02',
        duration: '00:15'
      },
      {
        id: 7,
        title: 'bake',
        description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
        temp: 230,
        start: '00:02',
        duration: '00:35'
      }
    ]
  }
,
{
  recipeid:1,
  type:'Pizza',
  title:'Pizza',
  subtitle:'the best slow pizza dough',
  description:'Pizza dough is best prepared a day or two before you need it, and then left to prove in the fridge',
  imagedescription:'this is an alt text',
  imageUrl:'/pizza.jpg',
  basehydration:65,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'00 Pasta Flour - about 14% protein'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:70},{id:9,ratio:20},{id:10,ratio:10}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    { 
      ratio:80,
      name: 'flour',
      quantity: 80,
      unit: 'g',
      id: 0,
    },
    {
      ratio:56,
      name: 'water',
      quantity: 50,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 75,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 2,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 0,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 0,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 0,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 0,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 20,
      unit: 'g',
      id: 8,
    },
    {
      ratio:10,
      name: 'water for leaven mix',
      quantity: 10,
      unit: 'g',
      id: 9,
    },
    {
      ratio:4,
      name: 'water for salt',
      quantity: 4,
      unit: 'g',
      id: 10,
    },
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, briefly mix the leaven, autolyse and salt mixtures together, and once roughly mixed you can place in a sealed container in the fridge for up to around 40 hours - but allow around 1-2 hours at the end for the shaping process',
      temp: 0,
      start: '00:02',
      duration: '40:00'
    },
    {
      id: 4,
      title: 'Folding the dough',
      description: 'During the time in the fridge, you can fold and stretch the dough to develop some additional structure. This helps the rising process to happen evenly throughout the dough, and develops the glutento make it nicely stretchy. With wet hands, slide your fingers down and underneath the dough, and when you fingers meet and overlap underneath the doughball, lift the dough up, and stretch it as far as it will come, before folding it back onto itself in a ball. Then place the dough back into the container. Allow the dough to rest for at least 10-15 minutes before repeating this process, but you are looking to do this maybe 5-10 times during the total dough rise process ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape the pizza 1',
      description: 'Portion the dough into appropriate quantities for the size and type of pizza you are making. A 9-inch napoletana style will need around 210-220g dough. Dust the surface very lightly with flour, then shape the dough into a ball with the seam underneath, cover and leave for around an hour to rise. Then using the tips of your fingers flatten the centre of the ball into a disc about 5mm (1/4inch thick) leaving a thicker edge of about 10-15mm (1/2 inch) thick and 15-20mm (3/4 inch) all round the outside of the pizza. leave for 15-20 mins',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'Shape the pizza 2',
      description: 'After 15-20 mins, dust the top surface lightly with flour, and then flip it over and dust the other side with flour. You can then gently stretch the disc in a variety of ways - passing the disc back and forth between two hands is traditional, or gently stretching the disc by placing the heel of one hand against the thicker edge crust on one side, and then grasping the opposite thick edge, and pulling your two hands awy from each other, and then moving both hands round the circle and repeating, or by just using your finger tips to push down the central area to flatten in back out, and then gently stretching the edge/rim. There are lots of options, just try not to stretch too much, and then cover the dough and allow it to rest again for 15-20 mins. Get your oven ready by preheating to its maximum temperature at this point. Commercial Pizza ovens are really hot - 375 - 425 centigrade. It is unlikely you can replicate this exactly at home, so just go with the hottest you can. I bake with a pizza steel at 275 centigrade and it gives good results, and cooks in around 7 minutes  ',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'Shape the pizza 3',
      description: 'After another 15-20 mins, dust the top surface lightly with flour, and then flip it over and dust the other side with flour. You can then gently stretch the disc one finally time, before placing on a peel and applying a small quantity of toppings- tomato sauce, mozzarella and whatever toppings are your favorite',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 8,
      title: 'bake',
      description: 'slide the pizza into the oven on to a pizza stone or steel and bake until cooked. I find 7 minutes at 275 centigrade works for me on my pizza steel, but ovens and equipment vary. I recommend cooking as hot as you can, to get a good crisp base without burning the toppings',
      temp: 230,
      start: '00:02',
      duration: '00:07'
    }
  ]
},
{
  recipeid:2,
  type:'Bread',
  title:'White Bread Rolls',
  subtitle:'This is a recipe for a bread rolls',
  description:'Bread rolls are pretty easy, and you dont need to be that patient',
  imagedescription:'this is an alt text',
  imageUrl:'/rolls.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:100}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:56,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:14,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:3,
  type:'Bread',
  title:'Bagels',
  subtitle:'This is a recipe for bagels',
  description:'A good chewy bagel is not too hard, but can take a bit of time to do right',
  imagedescription:'this is an alt text',
  imageUrl:'/bagels.jpg',
  basehydration:50,
  flourcomponents:[{id:0,ratio:7,flourType:0,flourTypeName:'White Bread Flour' },{id:1,ratio:92,flourType:0,flourTypeName:'White Bread Flour' },],
  watercomponents:[{id:4,ratio:85},{id:5,ratio:10},{id:8,ratio:3},],
  autolysecomponents:[{id:1},{id:4},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:'strong white bread flour',quantity: 50, unit : 'g' ,id: 0  , ratio: 8  },
    { name:'strong white bread flour for autolyse',quantity: 600, unit : 'g' ,id: 1  , ratio: 92  },
    { name:'sugar',quantity: 30, unit : 'g' ,id: 2  , ratio: 5  },
    { name: 'wheat starter at 65% hydration',quantity: 275, unit : 'g' ,id: 3  , ratio: 42  },
    { name:'water for autolyse',quantity: 275, unit : 'g' ,id: 4  , ratio: 42  },
    { name:'water ',quantity: 25, unit : 'g' ,id: 5  , ratio: 4  },
    { name:'diastatic malt',quantity: 20, unit : 'g' ,id: 6  , ratio: 3  },
    { name:'salt',quantity: 15, unit : 'g' ,id: 7  , ratio: 2  },
    { name:'water for salt',quantity: 10, unit : 'g' ,id: 8  , ratio: 2  },
    { name:'baking soda',quantity: 10, unit : 'g' ,id: 9  , ratio: 2  }
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:3} of starter, or equivalent yeast, and add {id:0} flour and {id:5} lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix {id:1} flour  and {id:4} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:7} salt in {id:8} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix {id:5} oil, the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice - but don\'t add any additional flour - the mix is wet for a good reason. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 250,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:4,
  type:'Bread', 
  title:'Wholewheat Boule',
  subtitle:'This is a recipe for a a simple whole wheat loaf',
  description:'Whole wheat goodness - this is a simple brown bread recipe - the whole grains really soak up the water, just give it time',
  imagedescription:'this is an alt text',
  imageUrl:'/boule.jpg',
  basehydration:72,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'Whole Wheat Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'Whole Wheat Flour'}],
  watercomponents:[{id:1,ratio:77},{id:9,ratio:18},{id:10,ratio:5}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:52,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:12,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },
    {
      ratio:4,
      name: 'water for salt mix',
      quantity: 0,
      unit: 'g',
      id: 10,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:2} starter , or equivalent yeast, and add {id:8} flour and {id:9} lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix {id:0} flour and  {id:1} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:3} salt in {id:10} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:5,
  title:'Baguette',
  type:'Bread', 
  subtitle:'Need to test this recipe',
  description:'The classic French baguette is made with less strong flour, so that the bread gets a nice fluffy open structure',
  imagedescription:'this is an alt text',
  imageUrl:'/baguette.jpg',
  basehydration:73,
  flourcomponents:[{id:0,ratio:75,flourType:3,flourTypeName:'Plain White Flour' },{id:1,ratio:25,flourType:0,flourTypeName:'White Bread Flour' },], 
  watercomponents:[{id:4,ratio:4},{id:5,ratio:43},{id:6,ratio:52},],
  autolysecomponents:[{id:1},{id:5},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:' French bread flour or Plain four',quantity: 750, unit : 'g' ,id: 0  , ratio: 75  },
    { name:'Strong Bread Flour',quantity: 250, unit : 'g' ,id: 1  , ratio: 25  },
    { name:'salt',quantity: 20, unit : 'g' ,id: 2  , ratio: 2  },
    { name: 'wheat starter at 65% hydration',quantity: 200, unit : 'g' ,id: 3  , ratio: 20  },
    { name:'water for salt',quantity: 40, unit : 'g' ,id: 4  , ratio: 4  },
    { name:'water for autolyse',quantity: 160, unit : 'g' ,id: 5  , ratio: 16  },
    { name:'water for leaven',quantity: 460, unit : 'g' ,id: 6  , ratio: 46  }
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:3} starter, or yeast, and add {id:0} flour and {id:6} lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix {id:1} flour and {id:5} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:2} salt in {id:4} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough into a sausage - first create a flat rectangle, then fold only the longest sides top third down to beyond the middle, bottom third up to beyond the  middle and seal, rotate 180 degress then reeat once more, finally roll out the sausage from the centre. Try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. Prove the baguettes for no more than an hour, in well floured linen tea towels lining a scalloped tin (or improvise as needed). ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in.',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake ',
      description: 'carefully transfer the loaf to the oven. Add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake for 20 mins before removing the tray with the water, turn down the over by 20 degrees C and  bake for another 20 mins until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 250,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:6,
  type:'Bread', 
  title:'Ciabatta',
  subtitle:'This is great as a sandwich or used as toastie bread ',
  description:'Ciabatta was invented relatively recently in Italy - it is a  wet (slack) dough, so needs to be handled carefully and benefits from a slow rise and minimal gentle shaping to ensure the air bubbles aren\'t lost',
  imagedescription:'Ciabatta slices',
  imageUrl:'/ciabatta.jpg',
  basehydration:70,
  flourcomponents:[{id:11,ratio:40, flourType:0,flourTypeName:'White Bread Flour'},{id:0,ratio:40, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Flour'}],
  watercomponents:[{id:1,ratio:62}, {id:9,ratio:10},{id:10,ratio:4}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:40,
      name: 'strong bread flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:40,
      name: 'French bread flour or all purpose flour',
      quantity: 0,
      unit: 'g',
      id: 11,
    },
    {
      ratio:62,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:5,
      name: 'oil',
      quantity: 0,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:10,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },
    {
      ratio:4,
      name: 'water for salt mix',
      quantity: 0,
      unit: 'g',
      id: 10,
    }
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:2} of starter, or equivalent yeast, and add {id:8} flour and {id:9} lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the 2 types of flour - {id:0} and {id:11} and {id:1} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:4} salt in {id:10} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix {id:5} oil, the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice - but don\'t add any additional flour - the mix is wet for a good reason. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 250,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:7,
  type:'Bread', 
  title:'Focaccia',
  difficulty:'Easy',
  subtitle:'This is great as a starter, and you can top with a variety of ingredients depending on your taste',
  description:'Foccacia is a really easy as there is no shaping of dough - it is a very wet (slack) dough, and really tasty',
  imagedescription:'Focaccia slices',
  imageUrl:'/foccacia.jpg',
  basehydration:60,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:100}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:40,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:13,
      name: 'oil',
      quantity: 0,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:10,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },
    {
      ratio:4,
      name: 'water for salt mix',
      quantity: 0,
      unit: 'g',
      id: 10,
    }
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:2} starter, or yeast, and add {id:8} flour and {id:9} lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the {id:0} flour and {id:1} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:3} salt in {id:10} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the oil, the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:8,
  type:'Bread', 
  title:'Bannock',
  subtitle:'This is a recipe for a bread rolls',
  description:'Bread rolls are pretty easy, and you dont need to be that patient',
  imagedescription:'this is an alt text',
  imageUrl:'/rolls.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:100}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:56,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:14,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:9,
  type:'Bread', 
  title:'Black Bread',
  subtitle:'This is a recipe for black rye bread',
  description:'Needs to be tested ',
  imagedescription:'this is an alt text',
  imageUrl:'/blackbread.jpg',
  basehydration:80,
  flourcomponents:[{id:0,ratio:100,flourType:4,flourTypeName:'Rye Flour' },],
  watercomponents:[{id:5,ratio:95},{id:7,ratio:5},],
  autolysecomponents:[],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:'rye flour',quantity: 500, unit : 'g' ,id: 0  , ratio: 100  },
    { name:'molasses or treacle',quantity: 25, unit : 'g' ,id: 1  , ratio: 5  },
    { name:'pumpkin or sunflower seeds',quantity: 50, unit : 'g' ,id: 2  , ratio: 10  },
    { name: 'rye starter at 65% hydration',quantity: 200, unit : 'g' ,id: 3  , ratio: 40  },
    { name:'cracked rye or rye flakes',quantity: 50, unit : 'g' ,id: 4  , ratio: 10  },
    { name:'water ',quantity: 380, unit : 'g' ,id: 5  , ratio: 76  },
    { name:'salt',quantity: 10, unit : 'g' ,id: 6  , ratio: 2  },
    { name:'water for salt',quantity: 20, unit : 'g' ,id: 7  , ratio: 4  }
  ],
  instructions: [
    {
    id: 0,
    title:'leaven mix',
    description: 'Take {id:3} of starter, or equivalent yeast, and add {id:0} flour and {id:5} lukewarm water to it and mix thoroughly to make it active. ',
    temp: 0,
    start: '00:02',
    duration: '00:05'
  },
  {
      id: 1,
      title:'Mix in the Other ingredients apart from the salt',
      description: 'Add {id:1} molasses or treacle,  {id:2} seeds and {id:4} cracked rye or rye flakes and mix thoroughly - but don\'t bother to spend time kneading as there is insufficient gluten in rye flour to make any difference ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:6}  salt in {id:7} water, but do not add this to the rest of mix yet, as it can slow down the yeast development',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'Mix in the Salt',
      description: 'After about 30-60 mins, mix the flour and salt mixtures together, and once roughly mixed leave rise in a bowl with a plate over it to keep drafts off',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately increased by 50% in size (it\'s not going to double as rye just doesn\'t)',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, with rye bread you have limited options as essentially it will just pour into whatever shape container you have available - there is no gluten to provide any \'tightness\' to the dough ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:10,
  type:'Bread', 
  title:'Borodinksy',
  subtitle:'This is a recipe for Borodinsky Bread',
  description:'This is a classic Russian black rye bread recipe with coriander, red rye malt and molasses providing the rich flavours',
  imagedescription:'this is an alt text',
  imageUrl:'/borodinsky.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:10,flourType:4,flourTypeName:'Rye Flour' },{id:1,ratio:80,flourType:4,flourTypeName:'Rye Flour' },{id:11,ratio:10,flourType:5,flourTypeName:'Red Rye Malt Flour' },],
  watercomponents:[{id:4,ratio:75},{id:5,ratio:20},{id:8,ratio:4},],
  autolysecomponents:[{id:1},{id:4},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:'rye flour',quantity: 50, unit : 'g' ,id: 0  , ratio: 10  },
    { name:'rye flour for autolyse',quantity: 400, unit : 'g' ,id: 1  , ratio: 80  },
    { name:'sugar',quantity: 20, unit : 'g' ,id: 2  , ratio: 4  },
    { name: 'rye starter at 65% hydration',quantity: 80, unit : 'g' ,id: 3  , ratio: 16  },
    { name:'water for autolyse',quantity: 270, unit : 'g' ,id: 4  , ratio: 56  },
    { name:'water ',quantity: 70, unit : 'g' ,id: 5  , ratio: 10  },
    { name:'salt',quantity: 20, unit : 'g' ,id: 7  , ratio: 2  },
    { name:'water for salt',quantity: 10, unit : 'g' ,id: 8  , ratio: 4  },
    { name:'molasses',quantity: 50, unit : 'g' ,id: 9  , ratio: 10  },
    { name:'coriander',quantity: 5, unit : 'g' ,id: 10  , ratio: 1  },
    { name:'red rye malt flour',quantity: 50, unit : 'g' ,id: 11  , ratio: 10  }
    ],
    instructions: [
      {
        id: 0,
        title:'leaven mix',
        description: 'Take {id:3} starter , or equivalent yeast, and add {id:0} flour and {id:5} lukewarm water to it and mix thoroughly to make it active. Then add  {id:9} molasses , {id:2} sugar, {id:10} coriander and {id:11} red rye malt flour and mix again ',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 1,
        title:'Autolyse mix',
        description: 'Mix {id:1} flour and  {id:4} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 2,
        title:'Salt mix',
        description: 'Dissolve {id:7} salt in {id:8} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 3,
        title: 'knead',
        description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once thoroughly mixed, that is about as much as you need to do. The small amount of gluten in Rye flour means that kneading is not productive, and your dough will have the consistency of mashed potato or a thick cake mix. Have faith in the recipe - it is supposed to be this way ',
        temp: 0,
        start: '00:02',
        duration: '00:10'
      },
      {
        id: 4,
        title: 'wait for the first rise',
        description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has increased in size by about 50-75%',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 5,
        title: 'shape',
        description: 'shape the dough as required, Your options are pretty limited, due to the consistency of the dough. You may find it helps a little to use a little oil on your hands but placing it in a loaf tin is the easiest',
        temp: 0,
        start: '00:02',
        duration: '00:20'
      },
      {
        id: 6,
        title: 'second proof',
        description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and you won\'t need to slash your loaf as you do not get much oven spring. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
        temp: 0,
        start: '00:02',
        duration: '00:15'
      },
      {
        id: 7,
        title: 'bake',
        description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
        temp: 230,
        start: '00:02',
        duration: '00:35'
      }
    ]
}
,
{
  recipeid:11,
  type:'Bread', 
  title:'Boule',
  subtitle:'This is a recipe for a boule ',
  description:'It is a rustic loaf shape that can be made of any type of flour, in the shape of a squashed ball',
  imagedescription:'this is an alt text',
  imageUrl:'/seededboule.jpg',
  basehydration:74,
  flourcomponents:[{id:0,ratio:60,flourType:2,flourTypeName:'Whole Wheat Flour'},{id:1,ratio:40,flourType:2,flourTypeName:'Whole Wheat Flour'},],
  watercomponents:[{id:4,ratio:5},{id:5,ratio:54},{id:6,ratio:40},],
  autolysecomponents:[{id:0},{id:5},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
    ingredients: [
      { name:'whole wheat flour for autolyse',quantity: 300, unit : 'g' ,id: 0  , ratio: 60  },
      { name:'whole wheat flour for leaven',quantity: 200, unit : 'g' ,id: 1  , ratio: 40  },
      { name:'salt',quantity: 10, unit : 'g' ,id: 2  , ratio: 2  },
      { name: 'wheat starter at 65% hydration',quantity: 100, unit : 'g' ,id: 3  , ratio: 20  },
      { name:'water for salt',quantity: 20, unit : 'g' ,id: 4  , ratio: 4  },
      { name:'water for autolyse',quantity: 200, unit : 'g' ,id: 5  , ratio: 40  },
      { name:'water for leaven',quantity: 150, unit : 'g' ,id: 6  , ratio: 30  },
      { name:'optional seeds - sesame, sunflower or pumpkin',quantity: 20, unit : 'g' ,id: 7  , ratio: 4  }

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:3} starter, or yeast, and add {id:1} flour and {id:6} lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix {id:0} flour and {id:5} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:2} salt in {id:4} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. Roll the dough in the seeds. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:12,
  type:'Bread', 
  title:'Brioche',
  subtitle:'This is a recipe for a brioche rolls',
  description:'These are a rich roll, perfect for burger buns',
  imagedescription:'this is an alt text',
  imageUrl:'/burgerbaps.jpg',
  basehydration:30,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:10},{id:11,ratio:10},{id:9,ratio:3},{id:10,ratio:5},{id:13,ratio:2}],
  autolysecomponents:[{id:0},{id:1},{id:11}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:9,
      name: 'water',
      quantity: 9,
      unit: 'g',
      id: 1
    },
    {
      ratio:9,
      name: 'milk for autolyse',
      quantity: 9,
      unit: 'g',
      id: 11
    },
    {
      ratio:50,
     name: 'starter at 65% hydration',
      quantity: 50,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 2,
      unit: 'g',
      id: 3
    },
    {
      ratio:2,
      name: 'water for the salt',
      quantity: 2,
      unit: 'g',
      id: 13
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:35,
      name: 'butter',
      quantity: 35,
      unit: 'g',
      id: 6
    },
    {
      ratio:40,
      name: 'eggs',
      quantity: 40,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 20,
      unit: 'g',
      id: 8,
    },
    {
      ratio:2,
      name: 'water for leaven mix',
      quantity: 1,
      unit: 'g',
      id: 9,
    },
    {
      ratio:4,
      name: 'milk for leaven mix',
      quantity: 3,
      unit: 'g',
      id: 10,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:2} of starter , or equivalent yeast, and add {id:8} flour and {id:9} water and {id:10} milk to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the {id:0} flour, {id:11} milk ,  {id:1} water and {id:7} eggs for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:3} salt in {id:13} water , but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof.  ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade for Fan Ovens maybe 20 Centigrade more for non Fan Assisted) and then brush the top of the brioche with a little egg or milk. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in',
      temp: 240,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the rolls to the oven. Add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the rolls are done (the centre of the roll will reach about 100 degrees centrigrade',
      temp: 240,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:13,
  type:'Bread', 
  title:'Sourdough Chapati',
  subtitle:'This is a recipe for a chapati',
  description:'Flat breads are a staple to accompany curries',
  imagedescription:'this is an alt text',
  imageUrl:'/seededboule.jpg',
  basehydration:69,
  flourcomponents:[{id:0,ratio:80,flourType:2,flourTypeName:'Whole Wheat Flour'},{id:1,ratio:20,flourType:3,flourTypeName:'Plain White Flour' },],
  watercomponents:[{id:4,ratio:5},{id:5,ratio:72},{id:6,ratio:21},],
  autolysecomponents:[{id:0},{id:5},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:' Wholemeal strong bread flour or Atta flour',quantity: 400, unit : 'g' ,id: 0  , ratio: 80  },
    { name:'plain flour',quantity: 100, unit : 'g' ,id: 1  , ratio: 20  },
    { name:'salt',quantity: 10, unit : 'g' ,id: 2  , ratio: 2  },
    { name: 'wheat starter at 65% hydration',quantity: 200, unit : 'g' ,id: 3  , ratio: 40  },
    { name:'water for salt',quantity: 20, unit : 'g' ,id: 4  , ratio: 4  },
    { name:'water for autolyse',quantity: 250, unit : 'g' ,id: 5  , ratio: 50  },
    { name:'water for leaven',quantity: 75, unit : 'g' ,id: 6  , ratio: 15  },
    { name:'green fennel seeds',quantity: 35, unit : 'g' ,id: 7  , ratio: 7  }
  ]
  ,
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:3} of starter to {id:1} plain flour and {id:6} water and mix them together',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the {id:0} wholemeal flour and {id:5} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:2} salt in {id:4} water , but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 60 mins, mix the leaven, autolyse salt mixtures with {id:7} fennel seeds, and once roughly mixed, roll into a ball ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'Rest the dough',
      description: 'Rest the dough for 30 mins, then divide into 100g balls',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: ' On a floured surface and with a floured rolling pin, roll out each ball of dough into a thin circle, about 15cm in diameter. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'Prepare the skillet',
      description: 'Meanwhile, heat a skillet until very hot, then brush oil or ghee on the skillet',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'Cook',
      description: ' Cook Chapati until puffed and lightly charred in places, about  2 minutes. Flip over and cook the other side',
      temp: 0,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:14,
  type:'Bread',
  title:'Cottage Loaf',
  subtitle:'This is a recipe for a bread rolls',
  description:'Bread rolls are pretty easy, and you dont need to be that patient',
  imagedescription:'this is an alt text',
  imageUrl:'/seededboule.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:100}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:56,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:14,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:15,
  type:'Bread',
  title:'Fougasse',
  subtitle:'A simple French bread from Provence',
  description:'Fougasse is associated with Provence. It\'s often are shaped as an ear of wheat.',
  imagedescription:'this is an alt text',
  imageUrl:'/fougasse.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:40},{id:9,ratio:10},{id:10,ratio:4}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:40,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 0,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:10,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },
    {
      ratio:4,
      name: 'water for salt mix',
      quantity: 0,
      unit: 'g',
      id: 10,
    }
    ],
    instructions: [
      {
        id: 0,
        title:'leaven mix',
        description: 'Take {id:2} starter, or equivalent yeast, and add {id:8} flour and {id:9} lukewarm water to it and mix thoroughly to make it active. ',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 1,
        title:'Autolyse mix',
        description: 'Mix {id:0} flour and {id:1} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 2,
        title:'Salt mix',
        description: 'Dissolve {id:2} salt in {id:10} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 3,
        title: 'knead',
        description: 'After about 30-60 mins, mix the oil, the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
        temp: 0,
        start: '00:02',
        duration: '00:10'
      },
      {
        id: 4,
        title: 'wait for the first rise',
        description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
        temp: 0,
        start: '00:02',
        duration: '00:05'
      },
      {
        id: 5,
        title: 'shape',
        description: 'shape the dough into a flatish shape, and cut  vertical slits into the dough like leaf veins  and spread it out to open them up, . try to be gentle,. Allow the bread to rise for 10-15 mins in the second proof.  ',
        temp: 0,
        start: '00:02',
        duration: '00:20'
      },
      {
        id: 6,
        title: 'second proof',
        description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
        temp: 0,
        start: '00:02',
        duration: '00:15'
      },
      {
        id: 7,
        title: 'bake',
        description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
        temp: 250,
        start: '00:02',
        duration: '00:12'
      }
    ]
}
,
{
  recipeid:16,
  type:'Bread',
  title:'Milk Loaf',
  subtitle:'This is a recipe for milk loaf',
  description:'Milk Loaf has a beautifully soft and fluffy crumb ',
  imagedescription:'this is an alt text',
  imageUrl:'/milkloaf.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:4,flourType:0,flourTypeName:'White Bread Flour' },{id:1,ratio:95,flourType:0,flourTypeName:'White Bread Flour' },],
  watercomponents:[{id:4,ratio:10},{id:5,ratio:34},{id:6,ratio:28},{id:8,ratio:26},],
  autolysecomponents:[{id:0},{id:5},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:'white bread flour for autolyse',quantity: 133, unit : 'g' ,id: 0  , ratio: 51  },
    { name:'white bread flour for leaven',quantity: 130, unit : 'g' ,id: 1  , ratio: 49  },
    { name:'salt',quantity: 2, unit : 'g' ,id: 2  , ratio: 1  },
    { name:'wheat starter',quantity: 30, unit : 'g' ,id: 3  , ratio: 11  },
    { name:'milk for salt',quantity: 20, unit : 'g' ,id: 4  , ratio: 8  },
    { name:'milk for autolyse',quantity: 65, unit : 'g' ,id: 5  , ratio: 25  },
    { name:'milk for leaven',quantity: 55, unit : 'g' ,id: 6  , ratio: 21  },
    { name:'sugar',quantity: 40, unit : 'g' ,id: 7  , ratio: 15  },
    { name:'eggs',quantity: 50, unit : 'g' ,id: 8  , ratio: 19  },
    { name:'butter',quantity: 40, unit : 'g' ,id: 9  , ratio: 15  }
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:3} of the starter, or yeast, and add {id:1} flour and {id:6} milk to it and mix thoroughly to make it active. This will appear to be quite dry - don\'t worry about this - there\'s more liquid coming along later',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the {id:5} milk and {id:0} flour for the autolyse ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:2} salt in {id:4} milk, but do not add this to either the autolyse or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and add {id:9} butter , {id:7} sugar and {id:8} egg and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough into 65g portions, try to be gentle, but stretch the dough a little to form a skin over the top, and tuck the fold underneath. Place about 2-3 cm apart on a greased high sided baking tin',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof - about 45min , (this is a good time to switch on the oven, as it needs to be hot - about 200 deg Centigrade). Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the buns go in',
      temp: 0,
      start: '00:02',
      duration: '00:45'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 200,
      start: '00:02',
      duration: '00:22'
    }
  ]
}
,
{
  recipeid:17,
  type:'Bread',
  title:'Paratha',
  subtitle:'This recipe needs to be fixed',
  description:'Bread rolls are pretty easy, and you dont need to be that patient',
  imagedescription:'this is an alt text',
  imageUrl:'/seededboule.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:76},{id:9,ratio:24}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:56,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:14,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:18,
  type:'Bread',
  title:'Milk Rolls',
  subtitle:'This is a recipe for a bread rolls - aka Hokaiddo',
  description:'Milk Bread rolls are really soft and fluffy',
  imagedescription:'this is an alt text',
  imageUrl:'/milkrolls.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:4,flourType:0,flourTypeName:'White Bread Flour' },{id:1,ratio:95,flourType:0,flourTypeName:'White Bread Flour' },],
  watercomponents:[{id:4,ratio:10},{id:5,ratio:34},{id:6,ratio:28},{id:8,ratio:26},],
  autolysecomponents:[{id:0},{id:5},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:'white bread flour for TangZhong',quantity: 13, unit : 'g' ,id: 0  , ratio: 5  },
    { name:'white bread flour for leaven',quantity: 250, unit : 'g' ,id: 1  , ratio: 95  },
    { name:'salt',quantity: 2, unit : 'g' ,id: 2  , ratio: 1  },
    { name:'wheat starter',quantity: 30, unit : 'g' ,id: 3  , ratio: 11  },
    { name:'milk for salt',quantity: 20, unit : 'g' ,id: 4  , ratio: 8  },
    { name:'milk for TangZhong',quantity: 65, unit : 'g' ,id: 5  , ratio: 25  },
    { name:'milk for leaven',quantity: 55, unit : 'g' ,id: 6  , ratio: 21  },
    { name:'sugar',quantity: 40, unit : 'g' ,id: 7  , ratio: 15  },
    { name:'eggs',quantity: 50, unit : 'g' ,id: 8  , ratio: 19  },
    { name:'butter',quantity: 40, unit : 'g' ,id: 9  , ratio: 15  }
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:3} of the starter, or yeast, and add {id:1} flour and {id:6} milk to it and mix thoroughly to make it active. This will appear to be quite dry - don\'t worry about this - there\'s more liquid coming along later',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'TangZhong mix',
      description: 'Warm the {id:5} milk and  {id:0} flour for the TangZhong in a pan, gradually bringing it to around 60-75 deg Celcius - stirring all the time - it will get thicken as the gluten develops , and like a roux this will happen significantly more at around 65 deg C, until it forms a sticky paste. Take it off the heat and allow to cool ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:2} salt in {id:4} milk, but do not add this to either the TangZhong or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, TangZhong and salt mixtures together, and add {id:9} butter , {id:7} sugar and {id:8} egg and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough into 65g portions, try to be gentle, but stretch the dough a little to form a skin over the top, and tuck the fold underneath. Place about 2-3 cm apart on a greased high sided baking tin',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof - about 45min , (this is a good time to switch on the oven, as it needs to be hot - about 200 deg Centigrade). Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the buns go in',
      temp: 0,
      start: '00:02',
      duration: '00:45'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 200,
      start: '00:02',
      duration: '00:22'
    }
  ]
}
,
{
  recipeid:19,
  title:'Boule6',
  subtitle:'This is a recipe for a bread rolls',
  description:'Bread rolls are pretty easy, and you dont need to be that patient',
  imagedescription:'this is an alt text',
  imageUrl:'/seededboule.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:100}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:56,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
     name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:14,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:20,
  type:'Bread',
  title:'Pistolet',
  subtitle:'This is a recipe for pistolet',
  description:'Pistolet is a crusty bread roll common in Belgium and the Netherlands and sometimes shaped as a bâtard',
  imagedescription:'this is an alt text',
  imageUrl:'/pistolet.jpg',
  basehydration:68,
  flourcomponents:[{id:0,ratio:60,flourType:0,flourTypeName:'White Bread Flour' },{id:1,ratio:40,flourType:0,flourTypeName:'White Bread Flour' },],
  watercomponents:[{id:4,ratio:5},{id:5,ratio:48},{id:6,ratio:45},],
  autolysecomponents:[{id:0},{id:5},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:'flour for autolyse',quantity: 300, unit : 'g' ,id: 0  , ratio: 60  },
    { name:'flour for leaven',quantity: 200, unit : 'g' ,id: 1  , ratio: 40  },
    { name:'salt',quantity: 10, unit : 'g' ,id: 2  , ratio: 2  },
    { name: 'wheat starter at 65% hydration',quantity: 100, unit : 'g' ,id: 3  , ratio: 20  },
    { name:'water for salt',quantity: 20, unit : 'g' ,id: 4  , ratio: 4  },
    { name:'water for autolyse',quantity: 160, unit : 'g' ,id: 5  , ratio: 33  },
    { name:'water for leaven',quantity: 150, unit : 'g' ,id: 6  , ratio: 31  },
    { name:'honey',quantity: 20, unit : 'g' ,id: 7  , ratio: 4  },
    { name:'butter at room temperature',quantity: 20, unit : 'g' ,id: 9  , ratio: 4  }


  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:3} starter, or yeast, and add {id:1} flour, {id:6} lukewarm water and {id:7} honey to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix {id:0} flour and {id:5} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:2} salt in {id:4} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the butter, leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 210,
      start: '00:02',
      duration: '00:35'
    }
  ]
}
,
{
  recipeid:21,
  type:'Bread',
  title:'Maneesh',
  subtitle:'This is a recipe for maneesh with za\'atar',
  description:'A fantastically flavoured flat bread from the middle east',
  imagedescription:'this is an alt text',
  imageUrl:'/maneesh.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:16,flourType:0,flourTypeName:'White Bread Flour' },{id:1,ratio:83,flourType:0,flourTypeName:'White Bread Flour' },],  
  watercomponents:[{id:4,ratio:76},{id:5,ratio:18},{id:8,ratio:5},],
  autolysecomponents:[{id:1},{id:4},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:'strong white bread flour',quantity: 50, unit : 'g' ,id: 0  , ratio: 17  },
    { name:'strong white bread flour for autolyse',quantity: 250, unit : 'g' ,id: 1  , ratio: 83  },
    { name:'sugar',quantity: 10, unit : 'g' ,id: 2  , ratio: 3  },
    { name: 'wheat starter at 65% hydration',quantity: 200, unit : 'g' ,id: 3  , ratio: 67  },
    { name:'water for autolyse',quantity: 145, unit : 'g' ,id: 4  , ratio: 48  },
    { name:'water ',quantity: 30, unit : 'g' ,id: 5  , ratio: 10  },
    { name:'olive oil',quantity: 20, unit : 'g' ,id: 6  , ratio: 7  },
    { name:'salt',quantity: 10, unit : 'g' ,id: 7  , ratio: 3  },
    { name:'water for salt',quantity: 10, unit : 'g' ,id: 8  , ratio: 3  }
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'Shape the dough  into a flat disc, about 0.5cm thick, but even unlike a pizza, as there is no topping to make sure the thinnest parts aren\'t too crispy, and then dimple with your finger tips. Mix the herb and spice mix - 5 part sesame seeds, 2 parts thyme,2 parts oregano, 1 part sumac, a good pinch of salt and 2 parts olive oil. Once mixed, spread over the dimpled surface of the bread ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'Wait for the second proof, (this is a good time to switch on the oven, as it needs to be hot, but not as hot as for pizza - like 200-230 deg Centigrade) . Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in.',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'Carefully transfer the loaf to the oven (on a cast iron skillet for flt bread). Add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake for approx 7-8 mins',
      temp: 210,
      start: '00:02',
      duration: '00:07'
    }
  ]
},
{
  recipeid:22,
  type:'Bread',
  title:'Pitta',
  subtitle:'This is a recipe for pita bread',
  description:'It is a rustic loaf shape that can be made of any type of flour, in the shape of a squashed ball',
  imagedescription:'this is an alt text',
  imageUrl:'/seededboule.jpg',
  basehydration:60,
  flourcomponents:[{id:0,ratio:16,flourType:0,flourTypeName:'White Bread Flour' },{id:1,ratio:83,flourType:0,flourTypeName:'White Bread Flour' },],  
  watercomponents:[{id:4,ratio:76},{id:5,ratio:18},{id:8,ratio:5},],
  autolysecomponents:[{id:1},{id:4},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:'strong white bread flour',quantity: 50, unit : 'g' ,id: 0  , ratio: 17  },
    { name:'strong white bread flour for autolyse',quantity: 250, unit : 'g' ,id: 1  , ratio: 83  },
    { name:'wheat starter at 65% hydration',quantity: 200, unit : 'g' ,id: 3  , ratio: 67  },
    { name:'water for autolyse',quantity: 145, unit : 'g' ,id: 4  , ratio: 48  },
    { name:'water ',quantity: 30, unit : 'g' ,id: 5  , ratio: 10  },
    { name:'olive oil',quantity: 20, unit : 'g' ,id: 6  , ratio: 7  },
    { name:'salt',quantity: 10, unit : 'g' ,id: 7  , ratio: 3  },
    { name:'water for salt',quantity: 10, unit : 'g' ,id: 8  , ratio: 3  }
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the {id:3} starter, or yeast, and add {id:0} flour and {id:5} lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the {id:1} flour and {id:4} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the {id:7} salt in the {id:8} water, and add the {id:6} oil but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'Shape the dough  into a flat disc, about 0.5cm thick, but even unlike a pizza, as there is no topping to make sure the thinnest parts aren\'t too crispy, and then dimple with your finger tips. Mix the herb and spice mix - 5 part sesame seeds, 2 parts thyme,2 parts oregano, 1 part sumac, a good pinch of salt and 2 parts olive oil. Once mixed, spread over the dimpled surface of the bread ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'Wait for the second proof, (this is a good time to switch on the oven, as it needs to be hot, but not as hot as for pizza - like 200-230 deg Centigrade) . Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in.',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'Carefully transfer the loaf to the oven (on a cast iron skillet for flt bread). Add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake for approx 7-8 mins',
      temp: 210,
      start: '00:02',
      duration: '00:07'
    }
  ]
},
{
  recipeid:23,
  type:'Bread',
  title:'Pretzel',
  subtitle:'This is a recipe for a traditional pretzel',
  description:'A fantastically flavoured salty chewy bread frrom central europe',
  imagedescription:'this is an alt text',
  imageUrl:'/pretzels.jpg',
  basehydration:50,
  flourcomponents:[{id:0,ratio:7,flourType:0,flourTypeName:'White Bread Flour' },{id:1,ratio:92,flourType:0,flourTypeName:'White Bread Flour' },],
  watercomponents:[{id:4,ratio:85},{id:5,ratio:10},{id:8,ratio:3},],
  autolysecomponents:[{id:1},{id:4},],
  leavencomponents:[{id:3,ratio:100,hydration:65},],
  ingredients: [
    { name:'strong white bread flour',quantity: 50, unit : 'g' ,id: 0  , ratio: 8  },
    { name:'strong white bread flour for autolyse',quantity: 600, unit : 'g' ,id: 1  , ratio: 92  },
    { name:'butter',quantity: 30, unit : 'g' ,id: 2  , ratio: 3  },
    { name:'wheat starter at 65% hydration',quantity: 275, unit : 'g' ,id: 3  , ratio: 42  },
    { name:'water for autolyse',quantity: 275, unit : 'g' ,id: 4  , ratio: 42  },
    { name:'water ',quantity: 25, unit : 'g' ,id: 5  , ratio: 4  },
    { name:'salt',quantity: 15, unit : 'g' ,id: 7  , ratio: 3  },
    { name:'water for salt',quantity: 10, unit : 'g' ,id: 8  , ratio: 3  },
    { name:'baking soda',quantity: 10, unit : 'g' ,id: 9  , ratio: 4  }
  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take {id:3} of starter, or equivalent yeast, and add {id:0} flour and {id:5} lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour {id:1}  and {id:4} water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve {id:7} salt in {id:8} water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix {id:3} butter, the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice - but don\'t add any additional flour - the mix is wet for a good reason. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough by first rolling into balls of about 65g, resting for a few minutes, and then rolling to a long sausage shape - about 50-70cm long and 2cm thick. Shape as a large \'U\' then twist about 10cm from the ends over each over twice and fold that back up to touch the sides of the \'U\'  to make the traditional shape   ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'cover and wait for the second proof - about 60 mins, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'scald in water with bicarbonate of soda',
      description: 'bring a large pan of water to the boil with about 20g bicarbonate of soda dissolved per litre of water and briefly scald the pretzels for about 15-30 seconds each ',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'Sprinkle with sesame or poppy seeds and then slash the thickest bit of the pretzel (the middle of the U to allow for expansion). Then tranfer to the oven and bake until the pretzel is done. (the centre of the pretzel will reach about 100 degrees centrigrade',
      temp: 220,
      start: '00:02',
      duration: '00:17'
    }
  ]
},
{
  recipeid:24,
  type:'Bread',
  title:'Teacake',
  subtitle:'This is a recipe for a bread rolls',
  description:'Bread rolls are pretty easy, and you dont need to be that patient',
  imagedescription:'this is an alt text',
  imageUrl:'/seededboule.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:100}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:56,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
      name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:14,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
},
{
  recipeid:25,
  type:'Bread',
  title:'Tortilla',
  subtitle:'This is a recipe for a bread rolls',
  description:'Bread rolls are pretty easy, and you dont need to be that patient',
  imagedescription:'this is an alt text',
  imageUrl:'/seededboule.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:100}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:56,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
      name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:14,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
},
{
  recipeid:26,
  type:'Bread',
  title:'Flat',
  subtitle:'This is a recipe for a bread rolls',
  description:'Bread rolls are pretty easy, and you dont need to be that patient',
  imagedescription:'this is an alt text',
  imageUrl:'/seededboule.jpg',
  basehydration:70,
  flourcomponents:[{id:0,ratio:80, flourType:0,flourTypeName:'White Bread Flour'},{id:8,ratio:20, flourType:0,flourTypeName:'White Bread Flour'}],
  watercomponents:[{id:1,ratio:100}],
  autolysecomponents:[{id:0},{id:1}],
  leavencomponents:[{id:2,ratio:100,hydration:65}],
  ingredients: [
    {
      ratio:80,
      name: 'flour',
      quantity: 0,
      unit: 'g',
      id: 0,
    },
    {
      ratio:56,
      name: 'water',
      quantity: 30,
      unit: 'g',
      id: 1
    },
    {
      ratio:75,
      name: 'starter at 65% hydration',
      quantity: 30,
      unit: 'g',
      id: 2
    },
    {
      ratio:2,
      name: 'salt',
      quantity: 30,
      unit: 'g',
      id: 3
    },
    {
      ratio:0,
      name: 'dryyeast',
      quantity: 30,
      unit: 'g',
      id: 4
    },
    {
      ratio:0,
      name: 'oil',
      quantity: 30,
      unit: 'g',
      id: 5
    },
    {
      ratio:0,
      name: 'butter',
      quantity: 30,
      unit: 'g',
      id: 6
    },
    {
      ratio:0,
      name: 'eggs',
      quantity: 30,
      unit: 'g',
      id: 7
    },
    {
      ratio:20,
      name: 'flour to refresh leaven',
      quantity: 0,
      unit: 'g',
      id: 8,
    },
    {
      ratio:14,
      name: 'water for leaven mix',
      quantity: 0,
      unit: 'g',
      id: 9,
    },

  ],
  instructions: [
    {
      id: 0,
      title:'leaven mix',
      description: 'Take the starter, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. ',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 1,
      title:'Autolyse mix',
      description: 'Mix the flour and water for the autolyse - this helps develop the gluten and should not be mixed with the leaven or salt for around 30 minutes to an hour',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 2,
      title:'Salt mix',
      description: 'Dissolve the salt in the water, but do not add this to either the leaven or starter mix yet, as it can slow down the yeast development, or gluten production',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 3,
      title: 'knead',
      description: 'After about 30-60 mins, mix the leaven, autolyse and salt mixtures together, and once roughly mixed, use the knead method of your choice. The slower your dough rise (either because of low temperature, or low leaven quantity) the less important this is. Richard Bertinet describes a process that works well with sticky doughs (and these rise the best) - which is throw the dough at the table, use your hands as two scoops, and bring your finger tips together under the dough from the left and right side. lift the dough off the table again and do something else ',
      temp: 0,
      start: '00:02',
      duration: '00:10'
    },
    {
      id: 4,
      title: 'wait for the first rise',
      description: 'Depending on the temperature and the ratio of starter or yeast to flour, you need to wait for a while until the dough has approximately doubled in size',
      temp: 0,
      start: '00:02',
      duration: '00:05'
    },
    {
      id: 5,
      title: 'shape',
      description: 'shape the dough as required, and this process may require you to squeeze some of the air out of your bread. try to be gentle, but stretching the dough at this point will build tension in the skin and allow the bread to retain its shape. You may need to shape this a couple of times if you are allowing the bread to rise for more than 10-15 mins in the second proof. Proofing baskets work well if you are not confident about this, but flour them generously to avoid the dough sticking to them. ',
      temp: 0,
      start: '00:02',
      duration: '00:20'
    },
    {
      id: 6,
      title: 'second proof',
      description: 'wait for the second proof, (this is a good time to switch on the oven, as it needs to be really really hot - like 230-250 deg Centigrade) and then slash the loaf to allow it to expand. Boil a kettle now. Add a tray for water to the oven as well, but leave empty until the loaf goes in, or use a cast iron casserole dish (make sure it is preheated with the oven)',
      temp: 0,
      start: '00:02',
      duration: '00:15'
    },
    {
      id: 7,
      title: 'bake',
      description: 'carefully transfer the loaf to the oven or cast iron casserole dish and add the lid for the first 20 mins. if not using a casserole, add the boiling water to the tray in the oven (not the shelf the bread will be on) and bake until the loaf is done (the centre of the loaf will reach about 100 degrees centrigrade',
      temp: 230,
      start: '00:02',
      duration: '00:35'
    }
  ]
},


];
return recipelist
}



export function  validateRecipe(recipe,mass,startermass, hydrationpercent,raisingagenttype)
{
  var hydrationtouse = hydrationpercent;
  try {

    // this current mechanism is problematic with the salt at high starter ratios
    // particlarly if then using dry yeast when the detail could be adjusted more 
    const remainingmass= mass-startermass;
    var sumwater=0;
    let sum = (sum, ingredientWaterContent) => {
      return sum + ingredientWaterContent;
    }
    let hydrationContent = (leavenComponent)=>{
      return leavenComponent.ratio*leavenComponent.hydration/100;
    }
    let Content = (ingredient)=>{
      return ingredient.ratio;
    }
    let isWaterComponent = (ingredient) => {
      return recipe.watercomponents.filter(item => item.id === ingredient.id).length>0;
    }
    let isFlourComponent = (ingredient) => {
      return recipe.flourcomponents.filter(item => item.id === ingredient.id).length>0;
    }
    let isNotLeavenComponent = (ingredient) => {
      return recipe.leavencomponents.filter(item => item.id === ingredient.id).length===0;
    }
    var starterhydration=   recipe.leavencomponents.map(hydrationContent).reduce(sum)
    if (starterhydration !== hydrationpercent && raisingagenttype==='Sourdough') 
    {
      console.log( ' average starter hydration ' + recipe.title + starterhydration );
      var waterinstarter = startermass * starterhydration/(100+starterhydration);
      console.log( 'water in starter ' + waterinstarter);
      console.log('startermass ' + startermass);
      var waterrequiredinremainingmass = (mass * (hydrationtouse/(100+hydrationtouse)))-waterinstarter;
      console.log (' waterrequiredinremainingmass ' + waterrequiredinremainingmass) 
      console.log ('remainingmass ' + remainingmass)
      console.log(' desired hydration ' + hydrationpercent )
      var newhydrationtouse = (100*waterrequiredinremainingmass/(remainingmass-waterrequiredinremainingmass));
      console.log( 'adjust hydrationtouse from ' + hydrationtouse + ' to ' +  newhydrationtouse )
      hydrationtouse = newhydrationtouse;
    }
    sumwater = recipe.ingredients.filter(isWaterComponent).map(Content).reduce(sum);

    var sumflour=0;
    sumflour = recipe.ingredients.filter(isFlourComponent).map(Content).reduce(sum);
    //adjust the ratio to make the hydration correct    
   for ( var i = 0, _len = recipe.ingredients.length; i < _len; i++ ) {
      //exclude starter from ratio
      if (isWaterComponent(recipe.ingredients[i]) )
      {
        recipe.ingredients[i]['ratio'] = hydrationtouse/100* sumflour * recipe.ingredients[i]['ratio'] / sumwater ;
      }
    }
    

    //sum ratios (should be standardis on 100?)
    var sumratio = 0;
    sumratio = recipe.ingredients.filter(isNotLeavenComponent).map(Content).reduce(sum);
    console.log ("sumratio (sum of non leaven) is " + sumratio)

    if (sumratio>0){
      //reset quantity
      recipe.ingredients.forEach(element => {
        //if this is not the starter then adjust the quantity
        if (recipe.leavencomponents.filter(leavencomponent => leavencomponent.id === element.id).length===0)
        {
          if (isWaterComponent(element) || isFlourComponent(element))
          {
            element.quantity=Math.round(element.ratio*remainingmass/sumratio);
          }   
          else
          {
            console.log ('element is' + element.name + ' ; mass is ' + mass + '; ratio is ' + element.ratio + '; sumratio is ' + sumratio)
            element.quantity=Math.round(element.ratio*mass/100);
            console.log ('element quantity is now ' + element.quantity);
          }
        }
        else
        {
          element.quantity = startermass;
          element.ratio = 0;
        }
      });
    }
  }
  catch
  {
     console.log("Error in validateRecipe");
  }
  return recipe
}
