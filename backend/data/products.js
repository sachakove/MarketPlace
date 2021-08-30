const products = [
  {
    name: "White Rabbit The Garlicky Focaccine 2x135g",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8050114/1/300x300.jpg",
    description: `A gluten free bread topped with garlic flavoured dairy alternative spread and parsley.
      100% Plant-Based Vegan Spread + Parsley Italian with Edge Dairy, Soy, and Gluten Free Suitable for Vegans, Vegetarians & Coeliacs Garlic Bread is Back on the Menu with Our Raised Crust, Gluten Free Focaccine Topped with Garlicky Vegan Spread and Finished with Parsley.
      Box is 100% plastic-free. Find out more at whiterabbitpizza.co.uk/packaging. Crossed Grain Symbol - CUK-M-256 Box is 100% plastic-free. Find out more at whiterabbitpizza.co.uk/packaging. How to Recycle Box suitable for home recycling. Film can be recycled with bags at larger stores. Crossed Grain Symbol
      im`,
    category: "Frozen",
    subCategory: "Doughs",
    amount: 0,
  },
  {
    name: "Brew City Mac N Jack Kegs 290g",
    price: 2.75,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7990982/1/300x300.jpg",
    description: `A blend of macaroni pasta, Monterey Jack and processed cheese, formed and coated in an IPA Batter. Macaroni and Monterey jack in a crispy IPA batter Bites for beer Proper bar snacks We are Brew City When you're with your mates and the munchies set in after a few drinks, we'll be there too. Our food is proper tasty and goes brilliantly with beer It's beermunch!`,
    category: "Frozen",
    subCategory: "Doughs",
    amount: 0,
  },
  {
    name: "Goodfella's Pepperoni Pizza Pockets x2 250g",
    price: 2.0,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8034383/1/300x300.jpg",
    description: ` Pizza Sandwich with Pepperoni, Mozzarella and Edam Cheese Filling.
      Microwave in 2 mins Soft folded base Loaded with tasty pepperoni No artificial colours or flavours Goodfellas Pizza Pockets - The delicious pizza snack that takes 2 minutes in the microwave! Pop one in today to get that melty cheese deliciousness into your life. Goodfellas... delicious Italian American Style Pizza from the original frozen pizza people.
      `,
    category: "Frozen",
    subCategory: "Doughs",
    amount: 0,
  },
  {
    name: "Chicago Town Sub Meat Supreme Pizzas x2 (250g)",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7646470/1/300x300.jpg",
    description: `Crispy bread base topped with Edam cheese, red onions, cooked ham, pepperoni and mushrooms on a tomato sauce.
  Fan oven cook in 13 mins A super crispy sub that is loaded with tasty toppings and a whole lotta cheese Eat your heart out`,
    category: "Frozen",
    subCategory: "Doughs",
    amount: 0,
  },
  {
    name: "Chicago Town Deep Dish Four Cheese Pizzas x2 (310g)",
    price: 1.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7555955/1/300x300.jpg",
    description: `A deep dish pizza base topped with tomato sauce, a blend of mozzarella, mature Cheddar, Monterey Jack and Emmental cheeses.
  Made with our signature sauce Oven cook in 20 mins Suitable for vegetarians We raise the crust high, add a boatload of our signature tomato sauce, and then go full-on with mouth-watering toppings and a loada cheese. Welcome to pizza heaven my friend. In Chicago Town, we don't just make pizza, we go to town on it. Just like some downtown genius did way back in '43 when they raised the crusts higher and made history with the Deep Dish Pizza. It's this kind of thinking outside the pizza box that inspires us to bring you a taste of Chicago. Check out our range Chicago Town Tiger Crust Chicago Town Takeaway Tomato Stuffed Crust`,
    category: "Frozen",
    subCategory: "Doughs",
    amount: 0,
  },
  {
    name: "Sainsbury's Mango, Papaya & Pineapple Smoothie Mix",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7832694/1/300x300.jpg",
    description: ` A mix of frozen mango chunks, pineapple chunks & papaya chunks`,
    category: "Frozen",
    subCategory: "Frozen fruits and vegetables",
    amount: 0,
  },
  {
    name: "Sainsbury's Frozen Berry Banana Smoothie Mix Strawberry & Banana ",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7832811/1/300x300.jpg",
    description: `A mix of frozen strawberry & banana slices`,
    category: "Frozen",
    subCategory: "Frozen fruits and vegetables",
    amount: 0,
  },
  {
    name: "Sainsbury's Petits Pois 910g",
    price: 1.3,
    image: "https://assets.sainsburys-groceries.co.uk/gol/113168/1/300x300.jpg",
    description: `Petits Pois Picked and frozen in season Suitable for Vegetarians and Vegans  1 of your 5 a-day: an 80g serving counts as 1 of your 5 a-day. Aim for at least 5 different portions of fruit or veg a day. Fresh, frozen, dried, canned and juice all count. 
  Source of Folic Acid: Folate contributes to reduction of tiredness and fatigue.  Source of Vitamin A: Vitamin A contributes to the maintenance of normal skin. Source of Vitamin C: Vitamin C contributes to the normal function of the immune system  Enjoy as part of a varied and balanced diet and a healthy lifestyle.`,
    category: "Frozen",
    subCategory: "Frozen fruits and vegetables",
    amount: 0,
  },
  {
    name: "Sainsbury's Mixed Vegetables 1kg",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1368420/1/300x300.jpg",
    description: `A mix of diced carrot, peas, cut green beans and sweetcorn kernels.
 Picked and frozen in season Suitable for Vegetarians and Vegans  1 of your 5 a-day: an 80g serving counts as 1 of your 5 a-day. Aim for at least 5 different portions of fruit or veg a day. Fresh, frozen, dried, canned and juice all count.`,
    category: "Frozen",
    subCategory: "Frozen fruits and vegetables",
    amount: 0,
  },
  {
    name: "Aunt Bessie's Honey Glazed Parsnips 500g",
    price: 1.75,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7170041/1/300x300.jpg",
    description: `Parsnips Coated in Batter and Prefried with a Honey Glaze.
  Made with orange blossom honey Real good food in just 25 minutes made properly Suitable for vegetarians Make room on the plate for some Honey Glazed Parsnips - this humble root veg drizzled in orange blossom honey will add a rather special touch to any roast dinner.`,
    category: "Frozen",
    subCategory: "Frozen fruits and vegetables",
    amount: 0,
  },
  {
    name: "Sainsbury's Sorbet Raspberry 500ml",
    price: 2.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7423995/1/300x300.jpg",
    description: `Raspberry sorbet`,
    category: "Frozen",
    subCategory: "Ice cream and popsicles",
    amount: 0,
  },
  {
    name: "Sainsbury's Greek Style Frozen Yogurt 500ml",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7875190/1/300x300.jpg",
    description: `Greek style frozen yogurt`,
    category: "Frozen",
    subCategory: "Ice cream and popsicles",
    amount: 0,
  },
  {
    name: "Magnum Ice Cream Classic Chocolate 4x110ml",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7733657/1/300x300.jpg",
    description: `Ice cream with vanilla from Madagascar coated with milk chocolate (26%)
 Magnum Classic: the perfect balance of cracking Magnum chocolate and velvety smooth vanilla ice cream Made with the highest quality cocoa beans, this ice cream is certified by the Rainforest Alliance to satisfy every chocolate expert This vanilla ice cream stick with a chocolate coating is a sweet treat for pleasure seekers Magnum Classic Ice Cream is a gluten free dessert This gluten free ice cream is made from the highest quality ingredients by expert hands with passion and precision Each pack contains 4 Magnum Classic ice cream bars`,
    category: "Frozen",
    subCategory: "Ice cream and popsicles",
    amount: 0,
  },
  {
    name: "Ben & Jerry's Ice Cream Cookie Dough 465ml",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/3449370/1/300x300.jpg",
    description: `Vanilla Dairy Ice Cream with Chunks of Chocolate Chips Cookie Dough (16%) and Chocolatey Chunks (1%)
  Ben & Jerry's Cookie Dough ice cream tub Vanilla ice cream with chunks of chocolate chip cookie dough and chocolatey chunks Ben & Jerry's operates on a mission that aims to create linked prosperity for everyone connected to our ice cream business: suppliers, employees, farmers, franchisees, customers and neighbours alike This frozen dessert includes Fairtrade certified cocoa, sugar, and vanilla Ben & Jerry’s ice cream is Kosher & Halal certified Ben & Jerry’s uses responsibly sourced packaging for this ice cream tub Big delicious chunks of chocolate-chip cookie dough surrounded by creamy vanilla ice cream. It seems like such a no-brainer today, but in 1984 it was revolutionary. The Ben & Jerry's Cookie Dough ice cream you know and love started with a simple suggestion: What if you put chunks of chocolate-chip cookie dough into vanilla ice cream? That was the fantastic anonymous idea submitted way back in the early days of our first Burlington, Vermont, USA, Scoop Shop.`,
    category: "Frozen",
    subCategory: "Ice cream and popsicles",
    amount: 0,
  },
  {
    name: "Cornetto Classico Ice Cream Cones 6x90ml",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7896300/1/300x300.jpg",
    description: `Vanilla flavour ice cream in a wafer cone (12%) with chocolate flavour coating (13%) and hazelnut pieces (2.5%) The Cornetto Classico ice cream cone features a crunchy wafer coated with a chocolate flavour layer, wrapped around vanilla flavour ice cream, and topped with hazelnut pieces Crispy baked wafer coated from top to bottom with a chocolatey layer, combined with vanilla flavour ice cream and topped with hazelnut and meringue pieces Featuring a legendary chocolately tip at the base of the cone When smooth meets crunchy – you just can’t beat the perfect combo of ice cream, a crunchy cone, and a chocolatey tip These smooth ice cream cones come in a pack of 6 and make for the perfect refreshing treat to share with your friends on a summer's day Bring people together and make those cone-ections with just one Cornetto`,
    category: "Frozen",
    subCategory: "Ice cream and popsicles",
    amount: 0,
  },
  {
    name: "Häagen-Dazs Ice Cream Salted Caramel 460ml",
    price: 4.2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7651168/1/300x300.jpg",
    description: `Caramel ice cream with salted caramel swirl (10%) and salted caramel brittle (8%).
 Made with real cream
 Gluten-free
 Kosher - D
 Haagen-Dazs ice cream tubs. Real indulgence with just four ingredients: real cream, milk, eggs and sugar.
 Haagen-Dazs is blended with carefully selected ingredients, to create a luxury ice cream with a unique velvety texture and unforgettable taste.
 Indulge in our extraordinary Haagen-Dazs Vanilla Ice Cream or treat yourself to a unique dessert with our Salted Caramel Ice Cream recipe.
 460ml = 400g`,
    category: "Frozen",
    subCategory: "Ice cream and popsicles",
    amount: 0,
  },

  {
    name: "Young's Admirals Pie 300g",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6884837/1/300x300.jpg",
    description: `Pieces of Alaska Pollock Fillet in a Butter Sauce, Topped with Partially Reconstituted Mashed Potato and Cheddar Cheese
  Fish Fillet Pieces in a Creamy Butter Sauce, Topped with Mash & Cheddar Cheese
  290 Calories Per Pie
  Responsibly sourced fish for life®`,
    category: "Frozen",
    subCategory: "Prepared Food",
    amount: 0,
  },
  {
    name: "Birds Eye Stir Your Senses Spanish Chicken & Prawn Paella 350g",
    price: 2.2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7772703/1/300x300.jpg",
    description: `Cooked yellow rice with marinated cooked chicken, king prawns and rich tomato sauce.
  Stir cook 7 minutes from frozen No artificial colours, flavours or preservatives Spanish Style Paella with Chicken & Prawns We've partnered succulent chicken and prawns with vibrant red peppers and a sprinkle of garlic, oregano and chilli. You know that feeling - It's the middle of the week, you get home and you've got the same old meals in the kitchen. But we believe that your mid-week deserves more! That's why we created Birds Eye Inspirations; a collection of mouth-watering dishes made with only the freshest, finest ingredients.`,
    category: "Frozen",
    subCategory: "Prepared Food",
    amount: 0,
  },
  {
    name: "Bisto Classic Shepherd's Pie Ready Meal 375g (Serves 1)",
    price: 1.4,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7242097/1/300x300.jpg",
    description: ` Shepherd's Pie made with minced lamb, peas and carrots in a rich thick gravy topped with mashed potato.
With Bisto Gravy
Made with 100% Minced Beef
40 Mins Oven Cook
11 1/2 Mins Microwave
Minced lamb, peas and carrots in gravy, topped with reconstituted mashed potato.
Card - Carton - widely recycled
Plastic - Film - not currently recycled
Plastic - Tray - check local recycling`,
    category: "Frozen",
    subCategory: "Prepared Food",
    amount: 0,
  },
  {
    name: "Stamford Street Chicken Curry 400g (Serves 1)",
    price: 1.7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7645632/1/300x300.jpg",
    description: `Chicken breast pieces in a mild curry sauce with white long grain rice`,
    category: "Frozen",
    subCategory: "Prepared Food",
    amount: 0,
  },
  {
    name: "Bisto Roast Chicken Dinner Ready Meal 400g (Serves 1)",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7575189/1/300x300.jpg",
    description: `Chicken dinner with a whole chicken breast, roast potatoes, peas, carrots and a sage and onion stuffing ball in a rich gravy.
 With Bisto Gravy
 50 Mins Oven Cook
 12 1/2 Minutes Microwave
 Made with 100% Cooked Chicken Breast*
 *Why does it say 98% Chicken if it is made with 100% Cooked Chicken Breast? 100% means we only use Chicken breast in our product. The other 2% are ingredients used to help give you a delicious meal every time.
 Card - Carton - widely recycled
 Plastic - Film - Not currently recycled
 Plastic - Tray - check local recycling`,
    category: "Frozen",
    subCategory: "Prepared Food",
    amount: 0,
  },
  {
    name: "Aunt Bessie's Meat Free Toad in the Hole 190g",
    price: 1.85,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/3088005/1/300x300.jpg",
    description: `Meat Free Lincolnshire Style Sausages in a Yorkshire Pudding Batter.
    Real good food made properly in just 25 minutes
    Suitable for vegetarians
    A meat-free twist on a traditional favourite, this is a prefect Toad in the Hold made with tasty vegetarian sausages and Yorkshire pudding batter. Just pop it in the oven and you've got a delicious and satisfying mid-week meal.`,
    category: "Frozen",
    subCategory: "Prepared Food",
    amount: 0,
  },

  {
    name: "Sainsbury's Little Ones Bottle & Teat Cleaning Brush",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7853769/1/300x300.jpg",
    description: `bottle and teat brush
    Dishwasher safe 
    BPA free  
    From newborn to toddler, our feeding and weaning accessories are designed to support you and your little one every step of the way. 
    Our two-in-one brush is cleverly designed with an extra-wide brush for the bottle and a smaller one for the teat. Suitable for standard and wide-neck feeding bottles.`,
    category: "Baby Care",
    subCategory: "Baby Accessories",
    amount: 0,
  },
  {
    name: "Bathtime Buddies Fun Sponge",
    price: 1.1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7755397/1/300x300.jpg",
    description: `Fun Sponge
 Fun & educational
 
 name: Tommee Tippee Closer To Nature Fun Soother, 6-18 Months
 price: 6
 image: https://assets.sainsburys-groceries.co.uk/gol/7683046/1/300x300.jpg
 description: Soother with traditional shield style featuring understated designs, ideal for newborn babies and everyday use
 Symmetrical orthodontic shape designed to support natural oral development
 Reversible soother baglet, make it easier for babies to correctly insert the soother
 Available in 3 age stages, 0-6, 6-18, 18-36 months
 All soothers are available in packs of 2
 Mums know there's nothing more wonderful than a calm, content baby so tommee tippee has developed a new range of soothers that are approved by babies. The symmetrical orthodontic teat has been specially designed to help optimise baby acceptance and in independent tests more babies accepted these new soothers first time.* So when you need to turn screams and sobs into smiles and sleep, simply pick up a Closer to Nature® soother.
 Who is Tommee Tippee?
 50 years ago, two Californian brothers created a weighted base ‘non tip' cup and named it after their dog Tommee. A British businessman loved the cup and brought Tommee Tippee back to the UK, where we're now the number 1 feeding brand. For 50 years, we've made award-winning, innovative products that are designed to make life a little bit easier for parents. Today we're in families' homes in over 50 countries around the world. #ParentOn.
 Baby Approved Teat
 Babies can become attached to their favourite style of soother teat. That's why all of the new closer to nature soothers have the same baby approved* teat, so you can easily switch between different shield styles within the range without causing baby any confusion.
 Supports Natural Oral development
 The Symmetrical Orthodontic Shaped teat has been designed to improve balance making it easier for babies to hold the soother in their mouth and supports natural oral development
 Close to a Bottle Teat
 The teat shape on the soother is more like a bottle teat for a more familiar feeling for a baby. All the Tommee Tippee Closer to Nature soothers are BPA-free for total reassurance.
 `,
    category: "Baby Care",
    subCategory: "Baby Accessories",
    amount: 0,
  },
  {
    name: "Munchkin 360 Trainer Cup",
    price: 6.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7809303/1/300x300.jpg",
    description: `Dentist recommended
 Spill-Proof
 Soft, silicone, suave
 Just like an open cup, but with no spills!
 360° edge allows drinking from any side of the cup- simply tilt the cup and suck on the valve's edge
 Reseals automatically until the next sip
 Toddler cup with dentist-recommended spoutless design
 Spill proof
 Easy to clean
 Top rack dishwasher-safe
 BPA free
 6+ months
 Miracle 360° Trainer Cup 207ml 6m+
 Things You Should Know:
 100% Leak proof. 100% Spill proof.
 360° design - allows drinking anywhere around the rim.
 Spout free technology is better for teeth & helps transition to an open cup.
 Spill proof valve seals automatically after drinking.
 Removable valve for easy cleaning.`,
    category: "Baby Care",
    subCategory: "Baby Accessories",
    amount: 0,
  },
  {
    name: "Tommee Tippee Baby Scissors",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7275927/1/300x300.jpg",
    description: `Baby Scissors
   Shaped for little nails
   Materials listing: Stainless Steel and ABS
   Copyright© Jackel International Limited 2014
   Jackel International Limited retains all intellectual property rights to this product, packaging and printed or electronic media, including all two and three dimensional designs, graphic images, logos and text.
   Any manufacture, publication, copying, hiring, lending and reproduction of any materials is strictly prohibited and constitutes infringement.
   Tommee Tippee is a registered trademark of Jackel International Limited.`,
    category: "Baby Care",
    subCategory: "Baby Accessories",
    amount: 0,
  },
  {
    name: "Tommee Tippee Brush & Comb",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7275925/1/300x300.jpg",
    description: `Super soft bristles

  Materials listing: PP and Nylon
  
  Jackel International Limited retains all intellectual property rights to this product.`,
    category: "Baby Care",
    subCategory: "Baby Accessories",
    amount: 0,
  },

  {
    name:
      "Quinola Organic Kids Mediterranean Quinoa Tomatoes Carrots & Courgettes 190g",
    price: 1.6,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8031662/1/300x300.jpg",
    description: `Mediterranean Quinoa

Suitable for children on solids

Organic

Ready in 60 seconds

1 of your 5 a day

Natural ingredients only

Ethically sourced

Plastic neutral

Gluten-free

Suitable for vegans

Pssst. Having trouble getting veggies down the kids? Try some of this! Quinola has made them tasty and fun. Introduce new flavours to your children with our Big Yum Monsters.
This pre-cooked quinoa with juicy tomatoes, crunchy carrots, and fresh courgettes is a well-balanced meal for kids' fussy palates yet bursting with nutritious vegetables and slow-release carbs.
Plus, the pouch is plastic-neutral, we offset carbon, we know our farmers and pay everyone fairly.
Why not meet Terry and learn more...to read all of Terry's story head to www.quinola.com
I'm Terry
The Happy Bigyum Monster. I'm almost always happy, especially when helping others. It's a superpower I discovered when my friends and family needed me most. Mediterranean food - bursting with the sunshine flavours of tomatoes, carrots and courgettes - fills me with joy because my mum and dad grow them at home.`,
    category: "Baby Care",
    subCategory: "Baby Food",
    amount: 0,
  },
  {
    name: "Hipp Organic Vegetable Cannelloni for Little Grown Ups Tray Meal",
    price: 1.65,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8056431/1/300x300.jpg",
    description: `Cannelloni pasta with mixed vegetables & tomatoes

    Perfect for little grown ups
    
    Made with rolled organic Italian pasta
    
    Not chopped, so you can cut to the perfect size
    
    Can help toddlers learn to feed themselves
    
    No added salt
    
    No GM or preservatives*
    *as required by law
    
    Organic rolled Italian Cannelloni pasta with mixed vegetables & tomatoes
    
    Why choose HiPP Organic?
    Stefan Hipp, one of the fourth generation family owners of HiPP Organic, personally guarantees every product we make, just as his family have done for over 120 years. HiPP Organic quality is something particularly special and very important to us.
    We don't just meet EU organic standards, we exceed them. To achieve this, we work with nature rather than against it, in a sustainable way that protects biodiversity, helping us to produce the best possible organic ingredients.
    HiPP Organic - good natured since 1899.
    
    We only use the very best, yummiest organic ingredients in everything we do.
    
    Certified organic
    All our ingredients are of the highest quality and exceed EU organic standards - guaranteed.`,
    category: "Baby Care",
    subCategory: "Baby Food",
    amount: 0,
  },
  {
    name:
      "Annabel Karmel Tomato & Mascarpone Pasta With Hidden Veggies Toddler",
    price: 2.45,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7295978/1/300x300.jpg",
    description: `Ditali Rigati pasta with a vegetable, tomato, Mascarpone and cheese sauce.

    From the No.1 Children's Cookery Author
    
    Made for Mums Awards 2020 - Gold
    
    2 of your 5 a day
    
    Cook from Frozen
    
    Ready in minutes
    
    Red pepper, tomato, carrot and squash
    
    Low in salt
    
    No artificial colours or preservatives
    
    Suitable for Vegetarians
    
    Good food feeds imaginations! With over 25 years of recipe expertise, I know how important it is for toddlers and children to enjoy delicious meals made with just the right ingredients, even on those busy days! Whatever they dream of being when they grow-up, let them refuel on my trusty cookbook-inspired recipes.
    Low in salt and a tasty way towards their 5 a day.
    Annabel Karmel.`,
    category: "Baby Care",
    subCategory: "Baby Food",
    amount: 0,
  },
  {
    name: `Ella's Kitchen Organic Strawberries and Apples Baby Pouch`,
    price: 1.05,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6851808/1/300x300.jpg",
    description: `Organic Strawberries and Apples Baby Pouch

100% I'm organic

No added water

I do not contain gluten

Hello, I'm 100% organic pureed strawberries, apples + a dash of lemon juice - with nothing else added.

Who am I made for? My ingredients are suitable from 4 months. I'm also great when mixed into chunkier food for babies who are ready for more texture. The Government advises that you don't need to wean your little one until they are 6 months. Every baby is different!

- I'm just yummy organic food for babies
- Super smooth puree with no big lumps + nothing artificial
- Perfect for little ones from 4+ months
- No added sugar or salt
- I contain naturally occuring sugars`,
    category: "Baby Care",
    subCategory: "Baby Food",
    amount: 0,
  },
  {
    name: "Yeo Valley Organic Little Yeos Fruity Favourites Yogurt",
    price: 1.65,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6921042/1/300x300.jpg",
    description: `Organic Yogurt Blended with A Smooth Fruit Purée

  4 Pots of Organic Yogurt
  
  Organic British Milk
  
  Real Fruit Purée
  
  Never Any Nasties
  
  Source of Calcium
  
  Gluten free
  
  Suitable for vegetarians
  
  Collect 10 Yeokens Inside the Sleeve
  UK, 18+. See inside or yeovalley.co.uk/yeokens for details.
  Look inside for fun & games with or friends form Timmy time™
  
  Did You Know... ?
  Organic farms are home to up to 50% more wildlife
  We never use chemical pesticides, which helps heaps more insects, birds and animals to thrive.
  Thanks for choosing organic and putting nature first.`,
    category: "Baby Care",
    subCategory: "Baby Food",
    amount: 0,
  },
  {
    name: "Organix Carrot Cake Soft Oaty Bars",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6031092/1/300x300.jpg",
    description: `Organic carrot cake soft oaty bars containing a blend of wholegrain oats, raisins, carrot juice and orange oil

 I'm organic
 
 On the go
 
 No junk promise
 
 Nothing artificial
 
 Contains naturally occurring sugars
 
 We're here to create deliciously tasty, utterly organic foods that little ones love.`,
    category: "Baby Care",
    subCategory: "Baby Food",
    amount: 0,
  },

  {
    name: "Johnson's Baby Cotton Buds",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7521953/1/300x300.jpg",
    description: `For cleaning delicate areas around eyes & outer ear

Designed to clean delicate and difficult to reach areas

Soft & gentle for use on delicate skin

Naturally absorbent with 100% pure cotton tips & 100% paper sticks

© Johnson & Johnson S.p.A.`,
    category: "Baby Care",
    subCategory: "Baby Hygiene",
    amount: 0,
  },
  {
    name: "Johnson's Baby Bedtime Bath ",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/3597545/1/300x300.jpg",
    description: `No more tears

Active baby

With soothing NaturalCalm™ essences

Clinically proven routine to help baby sleep better

Free from parabens, sulphates and dyes

Routine tested with baby sleep experts

Gently cleanses to leave delicate skin feeling healthy

When baby sleeps better, parents sleep better too

Bedtime Bath

Did you know? A soothing nightly ritual can help send your growing baby to dreamland. Our bedtime routine can help them fall asleep faster & stay asleep longer.

We only choose high quality ingredients that are gentle for baby. That's why we've rejected over 400 ingredients that don't meet our Best for Baby™ Standards

Green Dot

© Johnson & Johnson GmbH 2018`,
    category: "Baby Care",
    subCategory: "Baby Hygiene",
    amount: 0,
  },
  {
    name: "Johnson's Baby Powder",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/2051581/1/300x300.jpg",
    description: `Clinically mildness proven

 Free from parabens, dyes & phthalates
 
 Absorbs moisture to keep skin comfortable, dry & feeling healthy all day
 
 Made with purified talc, fully evaluated by scientific and medical experts
 
 Helps protect skin from rubbing & chafing
 
 Leaves skin soft, dry and feeling healthy
 
 When a baby is born, their skin is at its most delicate. That's why we perfected our formulas over 125 years so they're now even more gentle for all.
 
 Hypoallergenic* & dermatologist tested
 *formulated to minimise the risk of allergies.
 
 We only choose high quality ingredients that are gentle for baby. That's why we've rejected over 400 ingredients that don't meet our Best for Baby™ Standards
 
 Green Dot
 
 © Johnson & Johnson GmbH 2018`,
    category: "Baby Care",
    subCategory: "Baby Hygiene",
    amount: 0,
  },
  {
    name: "Lansinoh Disposable Breast Pads",
    price: 5.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7253530/1/300x300.jpg",
    description: `Quickly absorbs milk to keep you feeling fresh & dry

 Comfortable & leak-proof
 
 Discreet, ultra-thin, contoured fit
 
 Individually wrapped for hygiene
 
 Voted no.1 for baby*
 *Independently rated as the No 1 brand of disposable nursing pads. Based on 1400 parent ratings (Jan. 2020)
 
 Soft, contoured and super absorbent, our breast pads keep you protected and comfortable for worry-free wear
 
 Soft and breathable
 Suitable for even sensitive skin
 
 Blue Lock™ Technology quickly absorbs milk to keep you dry & fresh, day or night
 
 Leak-proof outer lining ensures your clothes stay dry
 
 Naturally contoured & discreet - fits all breast sizes
 
 Two non-slip tapes keep the pad in place
 
 Works with our family of products
 Care, Pump, Store, Feed`,
    category: "Baby Care",
    subCategory: "Baby Hygiene",
    amount: 0,
  },
  {
    name: "Bepanthen Nappy Rash Cream Ointment",
    price: 7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7484781/1/300x300.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque diam, commodo et elementum et, dictum ac leo. Nulla sed efficitur velit. Maecenas congue metus sit amet tempor vulputate. Integer facilisis, tellus eu eleifend blandit, justo justo commodo orci, efficitur hendrerit turpis neque eget tortor. Vestibulum ac consequat dui. In hac habitasse platea dictumst. Curabitur consequat dui dapibus ipsum venenatis, rutrum posuere nisi ultrices. Nam vel mauris ornare, porta sem vel, finibus eros.",
    category: "Baby Care",
    subCategory: "Baby Hygiene",
    amount: 0,
  },
  {
    name: "Danjou Pear",
    price: 80,
    image: "../frontend/src/assets/items/DanjouPear.png",
    description: `Easy-to-use tube

  Gentle everyday care and protection from the causes of nappy rash
  
  Clinically Proven with Pro Vitamin B5
  
  Contains no colours, fragrances, preservatives or antiseptics
  
  Bepanthen® Nappy Care Ointment works in two ways to protect from the causes of nappy rash and care for your baby's delicate skin.
  Bepanthen Protects
  Bepanthen® works by forming a transparent, breathable layer, helping to protect even the most delicate skin from irritants and rubbing. Bepanthen® is so gentle, it can be used at every nappy change to help the most sensitive of skins, including that of premature babies.`,
    category: "Baby Care",
    subCategory: "Baby Hygiene",
    amount: 0,
  },

  {
    name: "Johnson's Baby Soap",
    price: 1.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7734552/1/300x300.jpg",
    description: `Clinically proven mildness®

With honey extract

Gently cleanses delicate skin, leaving it feeling soft

Free from parabens, sulphates & alcohol

Ideal for baby's delicate skin

Dermatologist tested

When a baby is born, their skin is at its most delicate. That's why we perfected our formulas over 125 years so they're now even more gentle for all.

We only choose high quality ingredients that are gentle for baby. That's why we've rejected over 400 ingredients that don't meet our Best for Baby™ Standards

Green Dot

© Johnson & Johnson GmbH 2018`,
    category: "Baby Care",
    subCategory: "Baby Hygiene",
    amount: 0,
  },
  {
    name: "Sainsbury's Moisturising Baby Soap",
    price: 0.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6600331/1/300x300.jpg",
    description: `Little Ones Moisturising Baby Soap

 

Suitable for newborn skin. Dermatologist Approved. Delicately fragranced.  

Little Ones vegetable based baby soap is enriched with Shea Butter, known for its moisturising properties, helping to keep your little ones delicate skin clean and nourished. 

We frequently check with mums and dads to make sure that all our products meet their exacting standards, so that every pack of Little ones has their seal of approval.`,
    category: "Baby Care",
    subCategory: "Baby Hygiene",
    amount: 0,
  },
  {
    name: "Hovis Soft Medium Sliced White Bread",
    price: 1.1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/3067161/1/300x300.jpg",
    description: `Medium Sliced White Bread

Suitable for vegetarians & vegans

Kosher - KLBD

At Hovis®, our expert bakers have been baking bread for 130 years, so they've learnt a thing or two about making a great loaf. Our Hovis® Soft White loaves are specially made for softness so they are just perfect for that bacon sandwich or hot buttered toast.

This bag is 100% recyclable
Recycle with Bags at Larger Stores - Check locally Kerbside

Made by Hovis Ltd. Designs and trademarks appearing on pack are owned by Hovis Ltd.`,
    category: "Bakery",
    subCategory: "Bread",
    amount: 0,
  },
  {
    name: "Kingsmill Medium Sliced 50/50 Bread",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6528180/1/300x300.jpg",
    description: `Soft White Bread made with 50% Wholemeal Wheat Flour (33% of the baked loaf)

Source of fibre

Low in sugar and fat

Suitable for vegetarians and vegans

Halal

Kosher - SKA

50% wholemeal. 50% white. 100% delicious!

50% of your daily wholegrain in 2 slices.
*based on US Dietary Guidelines of 48g whole grain a day
Soft White Bread made with 50% Wholemeal Wheat Flour (33% of the baked loaf)

Kingsmill…Loafs' Good!

Carbon Trust Logo, reducing CO2.`,
    category: "Bakery",
    subCategory: "Bread",
    amount: 0,
  },
  {
    name: "Hovis Seed Sensations Seven Seeds Medium Sliced Seeded Bread",
    price: 1.6,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7583476/1/300x300.jpg",
    description: `Multiseeded Sliced Bread

Omega 3 from Seeds

Source of Protein

A Tasty Blend of Sensational Seeds

Suitable for Vegetarians & Vegans

Kosher - KLBD

A Tasty Blend of Sensational Seeds
A scrumptious blend of seeds including toasted brown linseeds, toasted sunflower, pumpkin, golden linseeds, millet and poppy seeds giving an unmistakeable flavour and texture.

At Hovis® our expert bakers created Seed Sensations®, a range of seriously tasty loaves. All are baked with a blend of seeds including brown linseed, sunflower, pumpkin, millet, golden linseed and poppy seeds - we toast some to give an even richer flavour.

Recycle with Bags at Larger Stores - Check locally Kerbside
This Bag is 100% Recyclable

Made by Hovis Ltd. Designs and trademarks appearing on pack are owned by Hovis Ltd.`,
    category: "Bakery",
    subCategory: "Bread",
    amount: 0,
  },
  {
    name: "Sainsbury's Soft Multiseed Farmhouse Thick Sliced Wholemeal Bread",
    price: 1.1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1318180/1/300x300.jpg",
    description: `Sliced soft wholemeal seeded bread

Topped with sunflower seeds & brown linseeds 

Packed with 14% seeds 

Full of old-fashioned flavour, this malty wholemeal farmhouse loaf is packed with sunflower seeds, brown linseed, millet and poppy seeds and baked to our special recipe for an irresistibly soft texture and nutty taste.......that's why you can taste the difference.  

High Fibre: Enjoy as part of a varied and balanced diet and a healthy lifestyle. 

Source of Protein: Protein supports the growth and maintenance of muscle mass.`,
    category: "Bakery",
    subCategory: "Bread",
    amount: 0,
  },
  {
    name: "Warburtons Medium Sliced Wholemeal Bread",
    price: 0.85,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/2048178/1/300x300.jpg",
    description: `Sliced Wholemeal Bread

Halal - HFA Approved

Kosher - KLBD

Suitable for Vegans and Vegetarians

Got a thing for fibre and wholemeal flavour? This is the loaf for your basket. 100% Wholemeal
High Fibre
No Added Sugar - Contains Naturally Occurring Sugars

Vegetarian Society Approved - Vegan`,
    category: "Bakery",
    subCategory: "Bread",
    amount: 0,
  },
  {
    name: "Sainsbury's Crusty White Baguette 400g",
    price: 0.85,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6540425/1/300x300.jpg",
    description: `White baguette`,
    category: "Bakery",
    subCategory: "Bread",
    amount: 0,
  },

  {
    name: "Napolina 50/50 Spaghetti 500g",
    price: 1.4,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7855217/1/300x300.jpg",
    description: `50/50 Spaghetti No 350

Made with 50% durum wheat and 50% whole wheat durum semolina. Our regular durum wheat semolina pasta with hidden whole wheat. Suitable for vegetarians. Napolina's wide range of pasta comes in all shapes and sizes and is made with quality ingredients from Italy. Our commitment to using quality ingredients for the best results has led us to become the UK’s No. 1 pasta brand

Our regular durum wheat semolina pasta with hidden whole wheat.

Napolina means 'Little Naples' which is where our brand was created in 1965. Inspired by the Italian love for life, family and fantastic food, we always have and always will put quality and simplicity first. That's the Italian way.
Crafted from the finest durum wheat, our pasta is simply made and slowly dried to deliver the best product to your table. For a true taste of Italy, serve al dente. Buon appetito!

Find more recipes at www.napolina.com/recipes

Italy Flag

Napolina is a registered trademark.`,
    category: "Bakery",
    subCategory: "Pastry",
    amount: 0,
  },
  {
    name: "Sainsbury's Fusilli 1kg",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1226270/1/300x300.jpg",
    description: `Dried durum wheat semolina pasta

made with 100% Italian durum wheat 

Originally from Naples. These twists are suitable for any sauce.`,
    category: "Bakery",
    subCategory: "Pastry",
    amount: 0,
  },
  {
    name: "Napolina Penne 500g",
    price: 1.3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/4041030/1/300x300.jpg",
    description: `Penne

Made with 100% durum wheat semolina. Prepared and packed in Italy. Suitable for vegetarians. Napolina's wide range of pasta comes in all shapes and sizes and is made with quality ingredients from Italy. Our commitment to using quality ingredients for the best results has led us to become the UK’s No. 1 pasta brand.

Napolina have selected Italian durum wheat semolina to bring you a delicious, versatile pasta that is easy to prepare.

Italy Flag

Napolina is a registered trademark of Napolina Ltd.`,
    category: "Bakery",
    subCategory: "Pastry",
    amount: 0,
  },
  {
    name: "De Cecco Spaghetti 500g",
    price: 1.65,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/2564852/1/300x300.jpg",
    description: `Spaghetti No 12

Traditional production method that has remained true to our family recipe for more than 130 years

1 Since 1886 we have been selecting the best durum wheat grown in Italy and in the rest of the world, milled in our plant in Fara S. Martino (CH) Italy, to guarantee a pasta with unique qualities and a superior cooking performance
2 Before being milled our wheat must pass strict quality controls in quality assurance laboratories
3 We use "coarse" durum wheat semolina to preserve the gluten integrity and obtain a signature pasta with a distinctive taste
4 We knead the semolina with cool water at a temperature of less than 15°C to ensure our pasta maintains its firmness after cooking
5 We use bronze drawplates to create a rough surface on the pasta to better retain sauce
6 We dry our pasta slowly at low temperature to preserve the flavour of our wheat

From father to son
Since 1886, we have maintained an important responsibility: carrying on over 130 years of tradition in making high quality pasta, to bring the pleasure of authentic Italian cuisine to dining tables around the world.

De Cecco respects the environment from start to finish

De Cecco quality is an inherited passion

Food Safe

Italy Flag`,
    category: "Bakery",
    subCategory: "Pastry",
    amount: 0,
  },
  {
    name: "Sainsbury's Lasagne Sheets 500g",
    price: 0.65,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1066005/1/300x300.jpg",
    description: `Dried durum wheat semolina pasta

made with 100% Italian durum wheat 

For baked dishes layered with sauce. Originally from the Emilia Romagna region`,
    category: "Bakery",
    subCategory: "Pastry",
    amount: 0,
  },
  {
    name: "Napolina Fusilli 500g",
    price: 1.3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/4041061/1/300x300.jpg",
    description: `Fusilli

  Perfect for Textured Sauces
  
  No.56
  We Craft and Number Each Pasta Die to Ensure You Get the Perfect Shape & Size for Every Meal
  
  Crafted from the finest durum wheat, our pasta is simply made and slowly dried to deliver the best product to your table. For a true taste of Italy, serve al dente.
  Buon appetito!
  
  Napolina means 'Little Naples' which is where our brand was created in 1965. Inspired by the Italian love for life, family and fantastic food, we always have and always will put quality and simplicity first.
  That's the Italian way.
  
  Find more recipes at www.napolina.com/recipes
  
  Recycle
  
  Napolina is a registered trademark.
  
  Made with 100% durum wheat semolina. Prepared and packed in Italy. Suitable for vegetarians. Napolina's wide range of pasta comes in all shapes and sizes and is made with quality ingredients from Italy. Our commitment to using quality ingredients for the best results has led us to become the UK’s No. 1 pasta brand. Prepared and packed in Italy. Suitable for vegetarians. Napolina's wide range of pasta comes in all shapes and sizes and is made with quality ingredients from Italy. Our commitment to using quality ingredients for the best results has led us to become the UK’s No. 1 pasta brand.
  
  Italy Flag`,
    category: "Bakery",
    subCategory: "Pastry",
    amount: 0,
  },

  {
    name: "Nescafé Azera Americano Instant Coffee 100g",
    price: 4.6,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7620344/1/300x300.jpg",
    description: `Soluble coffee with finely ground roasted coffee.

Discover barista-style instant coffee with NESCAFÉ AZERA Americano

Crafted from a selection of Arabica and Robusta beans

A special blend of instant and finely ground roasted coffee

Enjoy a layer of velvety coffee crema with every cup

Savour a fruity aroma and a well-balanced flavour

Discover our limited edition designs, created in partnership with students at University of the Creative Arts!

Experience barista-style coffee moments at home. NESCAFÉ AZERA Americano is a carefully crafted blend of Arabica and Robusta beans that have been made into a premium instant coffee.

It All Starts With a NESCAFÉ

NESCAFÉ is the world's favourite coffee brand, enjoyed in over 180 countries worldwide. With over 75 years of experience in selecting, roasting and blending the very best coffee, it's no surprise that over 5,500 cups of NESCAFÉ coffee are drunk every second!

Great coffee starts with respect, which is why our coffee has been grown, made and packaged in a way that respects the environment and the people who farm our coffee beans.
From working with coffee farmers around the world supporting them in growing healthy, higher yielding crops to our commitment to make 100% of our packaging recyclable or reusable, we're working to protect the planet with every cup of NESCAFÉ. The result is high quality coffee that comes from sources you can trust.
So put the kettle on. Our stories are best enjoyed with a NESCAFÉ, because respect is something you can taste in every cup. Find out more about Cup of Respect at www.nescafe.com/gb/cup-of-respect

Why not explore the rest of our barista-style range? Discover a full-bodied coffee with NESCAFÉ AZERA Intenso, a premium cappuccino with NESCAFÉ AZERA Cappuccino and enjoy an americano when you're out and about with NESCAFÉ AZERA Coffee To Go Americano.

Discover our Instagram @nescafeazera
Follow us on Twitter @nescafeazera
Join us at facebook.com/NescafeUK
Visit nescafe.co.uk/azera

Our coffee may settle in transit.
Packaged in a Protective Atmosphere

Nutritional Compass ®
® Reg. Trademark of Société des Produits Nestlé S.A.`,
    category: "Beverages",
    subCategory: "Hot Drink",
    amount: 0,
  },
  {
    name: "Nescafé Gold Blend Instant Coffee 200g",
    price: 7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/2035475/1/300x300.jpg",
    description: `Freeze-dried soluble coffee with finely ground roasted coffee.

Discover a premium coffee experience with NESCAFÉ GOLD BLEND

Contains mountain-grown Arabica beans ground 10 times finer

Savour the smooth, well-rounded taste of our recipe

A quality instant coffee for all coffee-drinking occasions

Enjoy memorable coffee moments with NESCAFÉ GOLD BLEND

NESCAFÉ GOLD BLEND is a premium instant coffee with a smooth, distinctive flavour and rich aroma. Our recipe contains mountain-grown Arabica beans ground 10 times finer, to unlock the soul of the bean. So prepare a cup, sit back and savour the moment with this quality blend.

It All Starts With a NESCAFÉ

NESCAFÉ is the world's favourite coffee brand, enjoyed in over 180 countries worldwide. With over 75 years of experience in selecting, roasting and blending the very best coffee, it's no surprise that over 5,500 cups of NESCAFÉ coffee are drunk every second!

The NESCAFÉ Plan

Did you know? As part of the NESCAFÉ Plan, we work directly with farmers and provide them with training and local assistance. Find out more about the NESCAFÉ Plan at www.nescafe.co.uk/nescafe-plan.

Why not explore the rest of our range? Discover a smooth, crema-topped coffee with NESCAFÉ GOLD BLEND Smooth or unwind with our decaff blend, NESCAFÉ GOLD BLEND Decaff.

Check out our YouTube Channel at Youtube.com/user/UKNescafe
Join us at facebook.com/NescafeUK
Follow us @nescafegolduki
Visit Nescafe.co.uk

Packaged in a protective atmosphere.`,
    category: "Beverages",
    subCategory: "Hot Drink",
    amount: 0,
  },
  {
    name: "Yorkshire Tea Tea Bags x80",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/2028217/1/300x300.jpg",
    description: `Black Tea

Outstanding Tea Since 1886

A proper brew

Black, everyday tea bags

Great quality

Tastes lovely

Kind to people and planet

100% Carbon Neutral

Suitable for vegetarians and vegans

A proper brew

When we say our tea's proper, we mean it's really good quality, it tastes lovely, and it's kind to people and planet.

Oh, and like all our products, it's completely CarbonNeutral.®

We work hard to make a brew you'll be proud of and because of you, we've been able to do lots of good stuff around the world - like planting millions of trees, investing in our tea growing communities and supporting grassroots cricket.

Our box is recyclable.
We want our environmental impact to be positive and part of this is making our packaging as recyclable, reusable and compostable as possible. To find out more, visit www.yorkshiretea.co.uk/packaging
Share your brew @yorkshiretea on Facebook, Instagram & Twitter

Rainforest Alliance Certified - Rainforest Alliance certification helps protect the environment and ensure sustainable livelihoods
Forest Stewardship Council®, The Forest Stewardship Council is a global, not-for-Profit organisation dedicated to the promotion of responsible forest management worldwide.
FSC - Mix, Packaging from responsible sources, FSC® C112718, www.fsc.org
Ethical Tea Partnership - Improving the lives of tea workers and their environment
Good Housekeeping Award - Best tasting tea brand 2020 as voted for by Good Housekeeping readers
Certified Carbon Neutral® Product

Yorkshire Tea is a registered trade mark of Bettys & Taylors Group Ltd.

By Appointment to HRH The Prince of Wales Suppliers of Beverages, Taylors of Harrogate North Yorkshire.

FSC

Rainforest Alliance`,
    category: "Beverages",
    subCategory: "Hot Drink",
    amount: 0,
  },
  {
    name: "Tetley Everyday Tea Bags, Softpack x240",
    price: 4,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/3124932/1/300x300.jpg",
    description: `Black Tea

 Tetley Original Black Everyday Tea - full flavoured, vibrant and refreshing
 
 Suitable for Vegetarians
 
 Today our master blenders continue to hand select the finest tea leaves from around the world to guarantee the same great taste in every cup.
 
 Our tea leaves are carefully picked from around the world, creating the unique Tetley colour and taste. The tea leaves are simply picked, cut and dried, making them 100% natural.
 
 Kettle on, it's time for Tetley. For as long as we can remember, we've been blending the perfect cuppa for every moment of your day. Now We're Talking!
 
 Great Taste Award 2018 Winning! Great Taste is the largest and most trusted accreditation scheme for fine food and drink, with over 500 expert judges. 1-star means our product is 'simply delicious - a drink that delivers fantastic flavour.'
 
 100% Rainforest Alliance Certified™ and Founding Member of the Ethical Tea Partnership - From crop to cup, Tetley work to ensure our tea improves the lives of the people who grow and pick it, just as much as the people who drink it.
 We are committed to working with the Rainforest Alliance™ and The Ethical Tea Partnership, supporting projects that help benefit tea growing communities and the environment.
 
 100% Rainforest Alliance Certified™ Teas, and we are a member of the Ethical Tea Partnership
 
 Tetley Buyers and Blenders have been crossing the globe for over 180 years to source the freshest, tastiest ingredients to make the perfect tea blends and infusions.
 
 Rainforest Alliance`,
    category: "Beverages",
    subCategory: "Hot Drink",
    amount: 0,
  },
  {
    name: "PG tips Original Biodegradable Black Tea Bags x160",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/2826769/1/300x300.jpg",
    description: `Black tea

Whether it’s a morning wake up or a bedtime cuppa, the signature taste of PG tips black tea is sure to hit the spot when you need it most!

PG tips pyramid biodegradable tea bags are cleverly designed to give the tea leaves more room to move, releasing the great PG tips taste

To brew the perfect cuppa, pop your pyramid tea bag in hot water, let the flavour infuse for 1-3 minutes, add milk and sugar if preferred, then enjoy!

PG tips black tea is made with tea leaves from Rainforest Alliance Certified Estates

We support our lovely tea farmers, ensuring that they earn just wages, with access to decent housing, medical care and education for their children

Why not try our other delicious teas? Like our Tasty Decaf blend which has a rich, rounded taste, or Perfect with Dairy-Free that’s specially blended for dairy-free alternatives

At PG tips, we have been making a quality tasting cuppa for 85 years. When it comes to tea, we know our stuff and that’s why PG tips is Britain’s No.1 tea brand*. Our pyramid biodegradable tea bags let our tea roam free. They act as a mini teapot allowing our finest tea leaves room to move and infuse to give you a great tasting cuppa, time after time. It's pyramid perfection. PG tips are proud to say that we were the first tea in the UK to carry the Rainforest Alliance seal which means that we’re working to look after the environment and support our cherished tea farmers. Our tea is farmed by workers earning a decent wage, with access to good quality housing, medical care and education for their children. Plus, our black tea bags are plant-based and completely recyclable. The best way to enjoy our tasty tea: pop your pyramid tea bag into hot water and let it brew to your favourite strength. Add in a spoonful of sugar and a splash of milk if preferred. Mmm… but wait, there’s more... We have lots of other tasty brews for you to try. Want to cut the caffeine? Try our new Tasty Decaf tea blend which has a rich, rounded taste. Enjoy vegan drinks? Try our Perfect with Dairy-Free tea bags which are specially blended for dairy alternatives. Like a strong tea? Make our Extra Strong tea bags your new everyday tea. Or indulge in something extra special with our delicious Gold blend – which is no ordinary tea! If you love PG tips tea bags and loose tea and think it's the best black tea, don't keep it a secret! Write a review and share your favourite cuppa with the world. *Nielsen Total Market Volume (kg) MAT 22.02.20.`,
    category: "Beverages",
    subCategory: "Hot Drink",
    amount: 0,
  },
  {
    name: "Sainsbury's Gold Roast Instant Coffee 200g",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1398410/1/300x300.jpg",
    description: `Instant coffee`,
    category: "Beverages",
    subCategory: "Hot Drink",
    amount: 0,
  },

  {
    name: "Sainsbury's Smooth Pure Orange Juice 1L",
    price: 0.95,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1192926/1/300x300.jpg",
    description: `orange juice from concentrate

Made with 100% fruit `,
    category: "Beverages",
    subCategory: "Soft Drink",
    amount: 0,
  },
  {
    name: "Sainsbury's 100% Pressed Apple Juice, Not From Concentrate 1L",
    price: 1.3,
    image: "https://assets.sainsburys-groceries.co.uk/gol/283960/1/300x300.jpg",
    description: `Apple juice not from concentrate

 

100% pressed juice  

 

never from concentrate 

The secret of 

our fruity taste: 

Sainsbury’s never from concentrate 

juice is made by sourcing the 

best quality fruits, carefully 

pressing them then pasteurising 

the juice to bring you the freshest 

and most delicious taste! 

 

100% fruit juice... 

How do we do it? 

Combining special apple 

varieties, we create this crisp 

sweet and well balanced apple 

juice, with slight acidity to help 

deliver a fresh and rounded 

apple flavour.`,
    category: "Beverages",
    subCategory: "Soft Drink",
    amount: 0,
  },
  {
    name:
      "Sainsbury's 100% Pure Squeezed Smooth Orange Juice, Not From Concentrate",
    price: 1.3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1305333/1/300x300.jpg",
    description: `Orange juice not from concentrate

 

100% squeezed juice  

 

never from concentrate 

The secret of 

our fruity taste: 

Sainsbury’s never from concentrate 

juice is made by sourcing the 

best quality fruits, carefully 

squeezing the juice then 

pasteurising to bring you the freshest 

and most delicious taste! 

 

100% fruit juice... 

How do we do it? 

Our exclusive blend 

of oranges gives a refreshing and 

balanced orange juice with just 

the right amount of natural 

sweetness and acidity 

with a subtle tang, giving a 

fresher fruity flavour.`,
    category: "Beverages",
    subCategory: "Soft Drink",
    amount: 0,
  },
  {
    name: "Innocent Orange Juice Smooth 1.35L",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7437991/1/300x300.jpg",
    description: `Orange juice smooth

Pure fruit juice, nothing else

Pasteurised

Never ever from concentrate

1 serving contains 1 of your 5-a-day

Suitable for vegans

This juice is a source of Vitamin C which contributes to the normal function of the immune system. Enjoy as part of n healthy lifestyle and balanced diet. PS Eat your greens.

The innocent promise
Tastes good. Does good.
Tasty healthy products
Sourced sustainably

Everyone has a Spirit Animal
Ours is the wild mountain gout. It tells us to forage for fruit & veg in places they grow best. To always source our ingredients in a way that's good to the planet. And to grow beards that make others envious. So, we've done just that. It also tells us to wrap this up so you can get on and drink this delicious juice. You goat it.

An innocent guide to Befriending Fruit & Veg
1 Go for a drink with them, reveal too much
2 Have a deep, meaningful chinwag, find out you're both Libras born in the moon of Taurus
3 Become running buddies, realise you can't talk and run
4 Pay them a visit, have a nose around their home
We visit our fruit and veg from time to time to make sure they're being grown in a way that's kind to the planet and everyone on it. We also check the people growing them are working in a safe place. And if something doesn't seem right, we do our best to sort it out. Because, well, that's what friends are for.

Our Favourite
Who knew it? Lots of great things start with a B. And lately, our favourite one is the B Corp seal of approval. This recognises all the good stuff we've always done as a business. Like sourcing fruit & veg the right way and giving 10% of our profits to charity. B-rilliant.

Back for Good
Boomerangs. Lost property. The memory of last night's office party. Some things that come back to you are great. Some things not so much. But when our bottles come back it's always a good thing. It means responsible fruit drinkers like you have recycled them by popping them in the right bin. So do our planet a favour and recycle this one too. You never know when you might see it again.

Déjà Ooo
We discover things about the people we work with every day here in Fruit Towers. That we have a Phil Mitchell and a Michelle Pfeiffer working with us. That Lukasz is a semi-professional ballroom dancer. And that Carly has never had déjà vu. Turns out, only 70% of people ever do. The closest she, and the other fine 30%, will ever come to déjà vu is seeing bottles like this again and again because great folk like you recycle them. So, go on, put this bottle in the right bin. Do it for them. (Do it for Carly.)

10% of profits to charity see innocentdrinks.com/promise

(Orange blossom not included)

This battle is made from 30% or more recycled plastic. Please recycle it (be sure to drink it first).
Widely Recycled

© = Clifftop
© = Chums
™ = Top Marks
™ = Trash Monitor

Certified B Corporation

Vegan Society`,
    category: "Beverages",
    subCategory: "Soft Drink",
    amount: 0,
  },
  {
    name: "Sainsbury's Pure Apple Juice 6x200ml",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6611608/1/300x300.jpg",
    description: `Apple juice from concentrate

 

made with 100% fruit juice `,
    category: "Beverages",
    subCategory: "Soft Drink",
    amount: 0,
  },
  {
    name: "Innocent Apple Juice 1.35L",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7551244/1/300x300.jpg",
    description: `Apple Juice

Pure fruit juice, nothing else

Pasteurised

Never ever from concentrate

1 serving contains 1 of your 5-a-day

Suitable for vegans

This juice is a source of Vitamin C which contributes to the normal function of the immune system. Enjoy as part of a healthy lifestyle and balanced diet. PS Eat your greens.

The innocent promise
Tastes good. Does good.
Tasty healthy products
Sourced sustainably

Everyone has a Spirit Animal
Ours is the wild mountain goat. It tells us to forge for fruit & veg in juices they grow best. To always source our ingredients in a way that's good to the planet. And to grow beards that make others envious. So, we've done just that. It also tells us to wrap this up so you can get on and drink this delicious juice. You goat it.

An innocent guide to Befriending Fruit & Veg
1 Go for a drink with them, reveal too much
2 Have a deep, meaningful chinwag, find out you're both Libras born in the moon of Taurus
3 Become running buddies, realise you can't talk and run
4 Pay them a visit, have a nose around their home
We visit our fruit and veg from time to time to make sure they're being grown in a way that's kind to the planet and everyone on it. We also check the people growing them are working in a safe place. And if something doesn't seem right, we do our best to sort it out. Because, well, that's what friends are for.

Our Favourite Bs
Bees, border collies, bananas
Who knew it? Lots of great things start with a B. And lately, our favourite one is the B Corp seal of approval. This recognises all the good stuff we've always done as a business. Like sourcing fruit & veg the right way and giving 10% of our profits to charity. B-rilliant.

Back for Good
Boomerangs. Lost property. The memory of last night's office party. Some things that come back to you are great. Some things not so much. But when our bottles come back it's always a good thing. It means responsible fruit drinkers like you have recycled them by popping them in the right bin. So do our planet a favour and recycle this one too. You never know when you might see it again.

Déjà Ooo
We discover things about the people we work with every day here in Fruit Towers. That we have a Phil Mitchell and a Michelle Pfeiffer working with us. That Lukasz is a semi-professional ballroom dancer. And that Carly has never had déjà vu. Turns out, only 70% of people ever do. The closest she, and the other fine 30%, will ever come to déjà vu is seeing bottles like this again and again because great folk like you recycle them. So, go on, put this bottle in the right bin. Do it for them. (Do it for Carly.)

10% of profits to charity see innocentdrinks.com/promise

This bottle is made from 30% or more recycled plastic. Please recycle it (be sure to drink it first).
Widely Recycled

© = Clifftop
© = Chums
™ = Top Marks
™ = Trash Monitor

Certified B Corporation

Vegan Society`,
    category: "Beverages",
    subCategory: "Soft Drink",
    amount: 0,
  },

  {
    name: "Sainsbury's Mixed Dried Fruit 500g",
    price: 1.7,
    image: "https://assets.sainsburys-groceries.co.uk/gol/3391/1/300x300.jpg",
    description: `A mix of sultanas, currants, raisins and candied mixed peel`,
    category: "Dry Fruits and Nuts",
    subCategory: "Fresh dried fruit",
    amount: 0,
  },

  {
    name: "Sainsbury's Roasted & Salted Mixed Nuts 200g",
    price: 2.1,
    image: "https://assets.sainsburys-groceries.co.uk/gol/411394/1/300x300.jpg",
    description: `Roasted and salted almonds, peanuts, hazelnuts and cashew nuts

 

Suitable for Vegans 

Source of protein 

Protein supports the growth and maintenance of muscle mass. Enjoy as part of a varied and balanced diet and a healthy lifestyle.`,
    category: "Dry Fruits and Nuts",
    subCategory: "Nuts and Seeds",
    amount: 0,
  },
  {
    name: "Sainsbury's Roasted Monkey Nuts in Shells 300g",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1241709/1/300x300.jpg",
    description: `Roasted peanuts in shell

 

Suitable for Vegans 

Source of magnesium 

Magnesium contributes to a reduction of tiredness and fatigue. 

 

Source of protein 

Protein supports the growth and maintenance of muscle mass. 

Enjoy as part of a varied and balance diet and a healthy lifestyle. 

 

50g of monkey nuts in shell are equal to 30g of shelled monkey nuts.`,
    category: "Dry Fruits and Nuts",
    subCategory: "Nuts and Seeds",
    amount: 0,
  },
  {
    name: "Graze Snack Box Punchy Protein Nuts 35g",
    price: 1.2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7754953/1/300x300.jpg",
    description: `Chilli & lime flavoured cashews, baked salted peanuts & almonds

Punchy Chilli & Lime Protein Nut Mix

Little chilli kick

A feel-good swap for crisps

Source of protein

High in fibre

High in vitamin e

Suitable for vegans and vegetarians

Conquer your day with this plant-powered‡, crunchy, nutty combo of chilli and lime flavoured cashews, salted peanuts and almonds. This healthy snack is vegan friendly, and it's also a tasty source of protein with 9.1g per portion - ready for whatever the day throws at you.
‡Protein contributes to the maintenance of muscle mass.

What if better snacking started here? It's the question that inspires our never ending hunt for seriously tasty, exciting snacks that make you feel good inside and out.

Enjoy as part of a varied and balanced diet and a healthy lifestyle.

Discover exciting snacks, delivered to your door
Try a free Graze subscription box at graze.com/subscribe

Union Flag

We'd know this pack anywhere. Copyright nature delivered.`,
    category: "Dry Fruits and Nuts",
    subCategory: "Nuts and Seeds",
    amount: 0,
  },
  {
    name: "Sensations Streetmix Mumbai Snacks & Nuts Mix 106g",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7920967/1/300x300.jpg",
    description: `Mix of Peanuts, Rice Snacks and Coated Peanuts with Indian inspired flavours

- Excite your senses with a delicious snack mix of peanuts, rice snacks and coated peanuts with Indian inspired flavours
- Indian style crackers, curried peanuts, black pepper rice sticks, spiced onion coated peanuts
- Enjoy paired with your drink of choice as the perfect aperitif
- Or serve with Sensations Crisps and Peanuts for the perfect party snack platter
- Suitable for vegetarians

Discover a mix inspired by the delicious flavours and aromas of Mumbai's vibrant street food. From delicious curried peanuts to crunchy Indian style crackers, take your senses on a journey of exciting tastes and textures. Indian Style Crackers with a delicious blend of spices. Curried Peanuts with a hint of coriander, gently seasoned Black Pepper Rice Sticks & Crunchy coated Spiced Onion Peanuts.

Packaged in a protective atmosphere.

Walkers, the Walkers Logo and Walkers Sensations are registered trademarks © 2019.`,
    category: "Dry Fruits and Nuts",
    subCategory: "Nuts and Seeds",
    amount: 0,
  },
  {
    name: "Sensations Streetmix Mexico City Snacks & Nuts Mix 115g",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7920978/1/300x300.jpg",
    description: `Mix of Vegetables, Coated Peanuts, Rice Snacks and Tortilla Sticks with Mexican inspired flavour

Tortilla sticks, Mexican style nuts, roasted & salted beans, chili crackers

Suitable for vegetarians

- Excite your senses with a delicious snack that combines flavours, aromas and textures inspired by the world-famous street food of Mexico City
- Sensations Mexico City Streetmix contain tortilla sticks, Mexican style nuts, roasted salted beans and chilli crackers
- Enjoy paired with your drink of choice as the perfect aperitif
- Or serve with Sensations Crisps and Peanuts for the perfect party snack platter
- Suitable for vegetarians

Why not excite your senses with Sensations® Streetmix Inspired by Bangkok

Packaged in a protective atmosphere.

Walkers, the Walkers Logo and Walkers Sensations are registered trademarks © 2018.`,
    category: "Dry Fruits and Nuts",
    subCategory: "Nuts and Seeds",
    amount: 0,
  },
  {
    name: "Tyrrells Nut Medley Sea Salt & Ground Black Pepper 105g",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8008351/1/300x300.jpg",
    description: `A mix of sea salt & black pepper seasoned almonds, cashew nuts & peanuts with roasted, salted corn kernels & fava beans.

Seasoned roasted almonds, cashews & peanuts with crunchy giant corn and fava beans

Source of Protein

High in Fibre

We never use artificial ingredients such as artificial flavours, colours or MSG

Suitable for Vegetarians

Our marvellously entertaining nuts are a spiffingly superior breed of nibble, combining the finest nuts we could forage with delightfully delectable seasonings.

Percentages shown as mixed, may differ slightly in individual bags due to packing process.

Packaged in a protective atmosphere.

*Not actual size. Ethel & Bertie not included.

New Recipe.

Terracycle® Please dispose of this pack responsibly. Find out how you can recycle it at www.terracycle.co.uk.

®Registered Trade Mark.`,
    category: "Dry Fruits and Nuts",
    subCategory: "Nuts and Seeds",
    amount: 0,
  },

  {
    name: "Sainsbury's Dried Apricots 40g",
    price: 0.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7614744/1/300x300.jpg",
    description: `Partially rehydrated dried apricots`,
    category: "Dry Fruits and Nuts",
    subCategory: "Packed Dried Fruits",
    amount: 0,
  },
  {
    name: "Sainsbury's Dried Apricots 500g",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7614709/1/300x300.jpg",
    description: `Partially rehydrated dried apricots

 

High fibre 

Each 30g serving counts as 1 of your 5 a-day 

Aim for at least 5 different portions of fruit or veg a day. Fresh, frozen, dried, canned and juice all count. 

Suitable for vegans 

Enjoy as part of a varied and balanced diet and a healthy lifestyle.`,
    category: "Dry Fruits and Nuts",
    subCategory: "Packed Dried Fruits",
    amount: 0,
  },
  {
    name: "Sainsbury's Dried Cranberries 75g",
    price: 1.15,
    image: "https://assets.sainsburys-groceries.co.uk/gol/606288/1/300x300.jpg",
    description: `Sweetened dried cranberries`,
    category: "Dry Fruits and Nuts",
    subCategory: "Packed Dried Fruits",
    amount: 0,
  },
  {
    name: "Sainsbury's Cut Mixed Peel 200g",
    price: 1,
    image: "https://assets.sainsburys-groceries.co.uk/gol/174213/1/300x300.jpg",
    description: `Glace orange and lemon peel

 

  delicious in fruity cakes & slices `,
    category: "Dry Fruits and Nuts",
    subCategory: "Packed Dried Fruits",
    amount: 0,
  },
  {
    name: "Sainsbury's Dried Apricots, SO Organic 250g",
    price: 3.65,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7614153/1/300x300.jpg",
    description: `Organic Dried Apricots`,
    category: "Dry Fruits and Nuts",
    subCategory: "Packed Dried Fruits",
    amount: 0,
  },
  {
    name: "Hubbard's Foodstore Mixed Fruit 500g",
    price: 1.1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8006027/1/300x300.jpg",
    description: `A mix of sultanas, raisins and candied mixed peel`,
    category: "Dry Fruits and Nuts",
    subCategory: "Packed Dried Fruits",
    amount: 0,
  },

  {
    name: "Sainsbury's Responsibly Sourced Scottish Salmon Fillets x2 240g",
    price: 3.35,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6447344/1/300x300.jpg",
    description: `Skin on, boneless salmon fillets

 

Boneless 

Rich and Succulent 

Responsibly Sourced 

This product’s packaging contains a minimum of 30% Prevented Ocean Plastic™. 

 

Ready to cook 

 

Try a classic pairing such as watercress sauce or a minted pea puree with baby potatoes and seasonal vegetables 

 

Eat 2 fish a week 

Government advice is to include 2 portions of fish every week, one of which should be oily. Enjoy as part of a varied and balanced diet and a healthy lifestyle. 

 

High in Omega 3 

Long chain omega 3 fatty acids EPA and DHA play a role in helping the heart to work normally. The beneficial effect is obtained with a daily intake of 250mg of EPA and DHA.  

 

RSPCA Assured 

The salmon in this product comes from producers inspected to RSPCA welfare standards by the RSPCAs independently certified farm assurance scheme. For more information visit www.rspcaassured.org.uk/sainsburys 

 

About our salmon 

We take great care to ensure our salmon is the best it can be. Here are some of the reasons why:  

All Sainsbury’s Scottish salmon is sourced from dedicated farms around the west coast and isles of Scotland chosen for their ideal conditions. The farms use responsible management to protect and maintain the natural environment. The salmon are fed a bespoke diet designed to protect our natural resources from over fishing and guarantee great taste and nutritional benefit for you.`,
    category: "Fish and Seafood",
    subCategory: "Fresh fish",
    amount: 0,
  },
  {
    name:
      "Sainsbury's Fishcakes Melting Middle Smoked Haddock with Cheddar & Leek Taste the Difference x2 290g",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7442857/1/300x300.jpg",
    description: `Smoked haddock and haddock fillet with mashed potato and a creamy Cheddar and leek sauce centre in a breadcrumb coating Previously frozen and defrosted without affecting the quality or safety of the product

 

Melt in the Middle 

This product’s packaging contains a minimum of 30% Prevented Ocean Plastic™.`,
    category: "Fish and Seafood",
    subCategory: "Fresh fish",
    amount: 0,
  },
  {
    name: "Sainsbury's Sea Bass Fillets 180g",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7573402/1/300x300.jpg",
    description: `Defrosted boneless sea bass fillets

 

Delicate and flaky`,
    category: "Fish and Seafood",
    subCategory: "Fresh fish",
    amount: 0,
  },
  {
    name: "Harbour Smokehouse Salmon 100g",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7883086/1/300x300.jpg",
    description: `Prime Salmon smoked

Over a balanced blend of selected woods

High in omega 3 and protein

Ready to eat

A bit about enjoying our salmon
The delicate, melt in the mouth texture and light smokey flavour of our smoked Salmon is something to be savoured. It's ready to eat straight from the pack, so you can just get stuck in and enjoy!

A bit about us and our salmon
We know a thing or two about salmon, and pride ourselves in making top quality salmon even tastier and easier to use. In fact, we're so passionate about this that we farm our own salmon to make sure we have full control from start to finish.

Board - Not Yet Recycled`,
    category: "Fish and Seafood",
    subCategory: "Fresh fish",
    amount: 0,
  },
  {
    name: "Sainsbury's Fish Pie Mix 300g",
    price: 3.75,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6342405/1/300x300.jpg",
    description: `Diced smoked pollock, haddock & salmon

 

Add a creamy sauce and top with mash 

Responsibly sourced 

Ready to cook 

 

Eat 2 fish a week  

Government advice is to include 2 portions of fish every week, one of which should be oily. Enjoy as part of a varied and balanced diet and healthy lifestyle.`,
    category: "Fish and Seafood",
    subCategory: "Fresh fish",
    amount: 0,
  },
  {
    name: "Sainsbury's British Hot Smoked Peppered Mackerel Fillets x2 ",
    price: 3.08,
    image: "https://assets.sainsburys-groceries.co.uk/gol/20022/1/300x300.jpg",
    description: `Smoked mackerel fillets with cracked black peppercorns

 

Spicy and warming 

Ready to eat 

 

Our delicious smoked mackerel with the warmth of crushed black pepper -it's ready to eat, but can be reheated 

 

High in Omega 3 

Smoked mackerel is high in long chain omega 3 fatty acids EPA and DHA. 100g provides 2200mg of EPA and 3400mg DHA. Enjoy as part of a varied and balanced diet and healthy lifestyle.`,
    category: "Fish and Seafood",
    subCategory: "Fresh fish",
    amount: 0,
  },

  {
    name: "The Saucy Fish Co. Salmon & Cod Fishcakes x2 270g",
    price: 2.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7837332/1/300x300.jpg",
    description: `Salmon & Cod Fishcakes

Saucy centres

With a heavenly hollandaise centre

Cook from frozen

Maximum flavour, minimum fuss - that's our motto at The Saucy Fish Co. Since we set up, we've made it our mission to make fish more enjoyable. So here it is - great fish with super sauce you can cook from frozen. Easy peasy (with an optional lemon squeezy).`,
    category: "Fish and Seafood",
    subCategory: "Frozen fish",
    amount: 0,
  },
  {
    name: "Kiddyum Kids' Ready Meal Fish & Vegetable Pie 200g",
    price: 1.3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7760380/1/300x300.jpg",
    description: `Pollock & Salmon in White Sauce with Vegetables and a Cheesy Mash

Made for mini tums

All natural ingredients

Frozen locked in goodness

No added sugar /low salt

No preservatives

No GM ingredients

No artificial colours/flavours

Ready in 5 mins

Proudly made in the UK from sustainable fish

My twist on a classic fish pie is a huge hit in our house. Sweetcorn, spinach and mash are perfect with the fish so it's yummy for tummies and filling too!
Jayne xx

My Stage 3 meals are perfect for independent little eaters (no cutting required) with lots of flavour to excite their tastebuds (but no extra salt or added sugar*)
Jayne xx
*contains naturally occurring sugars`,
    category: "Fish and Seafood",
    subCategory: "Frozen fish",
    amount: 0,
  },
  {
    name: "Young's Boneless Pink Salmon Fillets x4 360g",
    price: 4.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7396176/1/300x300.jpg",
    description: `Boneless Pacific Salmon Fillets

Rich & flaky

Wrapped individually for freshness

High in omega 3 and protein`,
    category: "Fish and Seafood",
    subCategory: "Frozen fish",
    amount: 0,
  },
  {
    name: "Birds Eye Battered Cod Fillets x4 440g",
    price: 4.8,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7228714/1/300x300.jpg",
    description: `Portions Formed from Pieces of Cod Fillet, Coated in a Crispy Batter, Lightly Fried.

100% Cod Fillet

260 Calories per Fillet

Freshness Locked In from sea to plate - Responsibly Sourced

Fish is good for our health, and so for the good health of our oceans, here at Birds Eye, we fish responsibly so that future generations can enjoy fish too.
So when you choose our fish, you choose fish that's good all round.
'For People. For Our Planet. For The Future.'
Fish for Good Responsibly Sourced

Find out where your fish comes from and discover the Captain's dedication to responsible fishing.

MSC - Certified Sustainable Seafood MSC™, MSC-C-50470, Choose the Blue Fish, Thank you for choosing fish that has met the MSC's global standard for sustainability. Together we can help protect fish stocks for the future. Find out more at www.msc.org

Recycle

'Birds Eye' and 'The Logo Shape' are trademarks of Nomad Foods Europe Limited

MSC`,
    category: "Fish and Seafood",
    subCategory: "Frozen fish",
    amount: 0,
  },
  {
    name: "Young's Chip Shop Large Cod Fillets 440g",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7513776/1/300x300.jpg",
    description: `Formed Cod Fillets in Batter

In Our Crisp Bubbly Batter

Same Size Fillets Less Packaging

223 Calories Per Fillet

Britain's favourite for over 35 years

Treat the family to the authentic taste of the chippy at home
It's our unique crisp bubbly batter that makes us Britain's favourite`,
    category: "Fish and Seafood",
    subCategory: "Frozen fish",
    amount: 0,
  },
  {
    name: "Young's Gastro Cod, Spinach & Cheese Gratin 360g",
    price: 2.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7712910/1/300x300.jpg",
    description: `Pieces of Cod Fillet and Spinach in a Cheese and Garlic Sauce with Sliced Potatoes and a Cheddar Cheese Topping

Meal for one

No Artificial Colours, Flavours or Preservatives

Pieces of cod fillet, spinach & sliced potato in a cheese & garlic sauce topped with Cheddar cheese

Restaurant Quality Fish
Our Gastro range is the best way to create your own restaurant experience at home.

Responsibly sourced fish for life®
Our fish for life® programme makes sure all our fish is responsibly sourced. To see how we do the right things to conserve fish for future generations visit www.youngsseafood.co.uk

PA0152

Carton - Recycle
Tray - Recycle
Film - Don't Recycle`,
    category: "Fish and Seafood",
    subCategory: "Frozen fish",
    amount: 0,
  },

  {
    name: "Sainsbury's Beef Mince 5% Fat 750g",
    price: 3.88,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7865307/1/300x300.jpg",
    description: `British or Irish Beef 5% fat mince

 

Reared by trusted farmers 

Naturally high in protein`,
    category: "Fresh Meat",
    subCategory: "Fresh Beef",
    amount: 0,
  },
  {
    name: "Sainsbury's Beef Mince 20% Fat 500g",
    price: 1.49,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7715235/1/300x300.jpg",
    description: `British or Irish 20% fat beef mince

 

Reared by trusted farmers`,
    category: "Fresh Meat",
    subCategory: "Fresh Beef",
    amount: 0,
  },
  {
    name: "Sainsbury's 21 Day matured Beef Medallion Steak 340g",
    price: 4.75,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7915754/1/300x300.jpg",
    description: `British or Irish Extra Lean Medallion Steak

 

 Reared by trusted farmers and expertly matured for tenderness 
 
 Naturally high in protein`,
    category: "Fresh Meat",
    subCategory: "Fresh Beef",
    amount: 0,
  },
  {
    name:
      "Sainsbury's 30 Days Matured British Beef Fillet Steak, Taste the Difference x2",
    price: 14.11,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7623674/1/300x300.jpg",
    description: `British beef fillet steaks

 

30 days matured for exceptional tenderness, succulence and flavour. 

30 Days Matured. 

Taste the difference cattle are selected from trusted farms. Our farmers are dedicated to producing the best quality beef. Our beef is expertly butchered and matured for a fuller flavour, exceptional tenderness and succulence.`,
    category: "Fresh Meat",
    subCategory: "Fresh Beef",
    amount: 0,
  },
  {
    name:
      "Sainsbury's 30 Days Matured British Beef Slow Roasting Joint, Taste the Difference",
    price: 10.54,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7341020/1/300x300.jpg",
    description: `British beef silverside slow roasting beef joint

 

Dry Aged for 14 days on the bone and matured for a further 16 days for succulence and flavour. 

30 Day Matured 

Taste the Difference cattle are selected from trusted farms. Our farmers are dedicated to producing the best quality beef. Our Beef is expertly butchered and matured for a fuller flavour, exceptional tenderness and succulence`,
    category: "Fresh Meat",
    subCategory: "Fresh Beef",
    amount: 0,
  },

  {
    name: "Sainsbury's Lamb Mince 20% Fat 500g",
    price: 3.57,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1308693/1/300x300.jpg",
    description: `British or New Zealand Lamb Mince

 

UK: Our lamb comes from specially selected farms, always best in season for succulence, tenderness and flavour 

NZ: Our lamb comes from specially selected farms, chosen for succulence, tenderness and flavour.`,
    category: "Fresh Meat",
    subCategory: "Lamb and Lamb Pieces",
    amount: 0,
  },
  {
    name: "Sainsbury's Lamb Whole Leg",
    price: 17.6,
    image: "https://assets.sainsburys-groceries.co.uk/gol/48385/1/140x140.jpg",
    description: `Whole leg of lamb

 

British: Our lamb comes from specially selected farms, always best in season for succulence, tenderness and flavour 

New Zealand: Our lamb comes from specially selected farms, chosen for succulence, tenderness and flavour.`,
    category: "Fresh Meat",
    subCategory: "Lamb and Lamb Pieces",
    amount: 0,
  },
  {
    name: "Sainsbury's Fresh Lambs Liver",
    price: 1,
    image: "https://assets.sainsburys-groceries.co.uk/gol/82204/1/140x140.jpg",
    description: `Lamb Liver

`,
    category: "Fresh Meat",
    subCategory: "Lamb and Lamb Pieces",
    amount: 0,
  },
  {
    name: "Sainsbury's Lamb Chops 340g",
    price: 3.49,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7916464/1/300x300.jpg",
    description: `Lamb Chops

 

UK: Our lamb comes from specially selected farms, always best in season for succulence, tenderness and flavour 

NZ: Our lamb comes from specially selected farms, chosen for succulence, tenderness and flavour.`,
    category: "Fresh Meat",
    subCategory: "Lamb and Lamb Pieces",
    amount: 0,
  },
  {
    name: "Sainsbury's Thin Cut Lamb Chops 425g",
    price: 5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7944447/1/300x300.jpg",
    description: `Thin cut lamb chops

 

UK: Our lamb comes from specially selected farms, always best in season for succulence, tenderness and flavour 

NZ: Our lamb comes from specially selected farms, chosen for succulence, tenderness and flavour.`,
    category: "Fresh Meat",
    subCategory: "Lamb and Lamb Pieces",
    amount: 0,
  },
  {
    name: "Sainsbury's Lamb Half Shoulder",
    price: 6.74,
    image: "https://assets.sainsburys-groceries.co.uk/gol/48422/1/140x140.jpg",
    description: `Lamb shoulder joint

 

 British: Our lamb comes from specially selected farms, always best in season for succulence, tenderness and flavour 
 
 New Zealand: Our lamb comes from specially selected farms, chosen for succulence, tenderness and flavour.`,
    category: "Fresh Meat",
    subCategory: "Lamb and Lamb Pieces",
    amount: 0,
  },
  {
    name: "Sainsbury's Carrots Loose",
    price: 0.4,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1192049/1/300x300.jpg",
    description: `Carrots

 

1 medium carrot / 80g serving counts as 1 of 5 a day 

Eating plenty of fruit and vegetables is one of the most important dietary changes needed to improve your diet and health. Aim for at least 5 different portions of fruit or veg a day, they contain nutrients vital for health. fresh, frozen, dried, canned and juice all count.`,
    category: "Fruits and Vegetables",
    subCategory: "Vegetables",
    amount: 0,
  },
  {
    name: "Sainsbury's Red Pepper",
    price: 0.42,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1236644/1/300x300.jpg",
    description: `Red pepper Class I

 

Wash before use`,
    category: "Fruits and Vegetables",
    subCategory: "Vegetables",
    amount: 0,
  },
  {
    name: "Sainsbury's Baking Potatoes Loose",
    price: 0.83,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1193961/1/300x300.jpg",
    description: `Sainsbury's Baking Potatoes Loose`,
    category: "Fruits and Vegetables",
    subCategory: "Vegetables",
    amount: 0,
  },
  {
    name: "Sainsbury's Onions Loose",
    price: 0.85,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1192094/1/140x140.jpg",
    description: `Brown Onions

 

1 medium onion / 80g serving counts as 1 of 5 a day 

Eating plenty of fruit and vegetables is one of the most important dietary changes needed to improve your diet and health. Aim for at least 5 different portions of fruit or veg a day, they contain nutrients vital for health. fresh, frozen, dried, canned and juice all count.`,
    category: "Fruits and Vegetables",
    subCategory: "Vegetables",
    amount: 0,
  },
  {
    name: "Sainsbury's Whole Cucumber",
    price: 0.43,
    image: "https://assets.sainsburys-groceries.co.uk/gol/62/1/300x300.jpg",
    description: `Whole cucumber

`,
    category: "Fruits and Vegetables",
    subCategory: "Vegetables",
    amount: 0,
  },
  {
    name: "Sainsbury's Broccoli Loose",
    price: 1.6,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1192001/1/300x300.jpg",
    description: `Broccoli

 

6 Florets / 80g serving counts as 1 of 5 a day 

Eating plenty of fruit and vegetables is one of the most important dietary changes needed to improve your diet and health. Aim for at least 5 different portions of fruit or veg a day, they contain nutrients vital for health. fresh, frozen, dried, canned and juice all count.`,
    category: "Fruits and Vegetables",
    subCategory: "Vegetables",
    amount: 0,
  },

  {
    name: "Sainsbury's Lemons",
    price: 1.2,
    image: "https://assets.sainsburys-groceries.co.uk/gol/93/1/300x300.jpg",
    description: `Lemons Class I

 

 Juicy and Zingy `,
    category: "Fruits and Vegetables",
    subCategory: "Fruits",
    amount: 0,
  },
  {
    name: "Sainsbury's Fairtrade Bananas",
    price: 0.73,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1196757/1/300x300.jpg",
    description: `Fairtade Bananas

 

Fairtrade contributes to sustainable development for certified producers by enabling fairer trading conditions, social change and environmental protection.  

Bananas are Fairtrade certified, traded, audited and sourced from Fairtrade producers, total 100%. For more visit info.fairtrade.net/sourcing.`,
    category: "Fruits and Vegetables",
    subCategory: "Fruits",
    amount: 0,
  },
  {
    name: "Sainsbury's Limes",
    price: 0.18,
    image: "https://assets.sainsburys-groceries.co.uk/gol/209762/1/150x150.jpg",
    description: `Limes Class I

 

Sharp and zesty `,
    category: "Fruits and Vegetables",
    subCategory: "Fruits",
    amount: 0,
  },
  {
    name: "Driscoll's Strawberries",
    price: 2.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7555699/1/300x300.jpg",
    description: `Driscoll's Strawberries`,
    category: "Fruits and Vegetables",
    subCategory: "Fruits",
    amount: 0,
  },
  {
    name: "Sainsbury's Oranges",
    price: 0.3,
    image: "https://assets.sainsburys-groceries.co.uk/gol/79/1/140x140.jpg",
    description: `Single Orange Class I

 

Sweet and juicy `,
    category: "Fruits and Vegetables",
    subCategory: "Fruits",
    amount: 0,
  },
  {
    name: "Sainsbury's Easy Peeler",
    price: 1.7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1197563/1/300x300.jpg",
    description: `Easy Peelers Class I

 

Sweet and Juicy `,
    category: "Fruits and Vegetables",
    subCategory: "Fruits",
    amount: 0,
  },

  {
    name: "Sainsbury's Antibacterial Spray 750ml",
    price: 0.8,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7442650/1/300x300.jpg",
    description: `Anti-bacterial Surface Cleaner

 

Anti-bacterial Surface Cleanser Antibacterial formula. 

Kills H1N1 flu virus & Coronavirus (tested against murine coronavirus following EN14476). 

Kills 99.9% bacteria including Listeria, Salmonella, MRSA and E. coli. 

Suitable for use where food is prepared. 

Non-bleach and no taint; no need to rinse. 

Chopping boards Work Surfaces High chairs Changing mats Bins Fridge`,
    category: "Home Care",
    subCategory: "Household Cleaning",
    amount: 0,
  },
  {
    name: "Sainsbury's Antibacterial Floor Wipes x15",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7491427/1/300x300.jpg",
    description: `15 Anti-bacterial floor wipes Apple

 

- Effective cleaning, leaves floors with brilliant shine. 

- Tested to BSEN1276:2019. including listeria, E.coli and salmonella. 

- Tested to BSEN14476 against enveloped viruses which includes coronavirus and influenza virus. 

- Suitable for Vinyl, Linoleum, Glazed Tiles, Sealed Laminate floors and Sealed Wooden Floors`,
    category: "Home Care",
    subCategory: "Household Cleaning",
    amount: 0,
  },
  {
    name: "Sainsbury's Antibacterial Multi-Surface Wipes",
    price: 1.8,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7496198/1/300x300.jpg",
    description: `120 Anti-bacterial cleansing surface wipes

 

- Kills H1N1 Flu virus. 

- Tested to BSEN1276:2019. including E.coli, salmonella and MRSA. 

- Tested to BSEN14476 against H1N1 and enveloped viruses which includes coronavirus and influenza virus. 

- Suitable for chopping boards, high chairs, changing mats, fridges, bins, kitchen and bathroom`,
    category: "Home Care",
    subCategory: "Household Cleaning",
    amount: 0,
  },
  {
    name: "Dettol Antibacterial Cleansing Surface Wipes Large",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7330379/1/300x300.jpg",
    description: `No Bleach or Odour

Suitable to use where food is prepared

Removes 90% of allergens

Proven to kill cold & flu virus & antibiotic resistant MRSA**
**Kills 99.9% of MRSA, Klebsiella pneumoniae NDM-1 positive, Escherichia coli with extended spectrum beta-lactamase resistance (ESBL)

Invented for Doctors*
*Dettol brand originally invented for doctors in 1933

Kills 99.9% of Bacteria & Viruses†
†Kills flu virus (Influenza - Type A H1N1), Cold viruses (Human Coronavirus and RSV, Rotavirus)

Ingredients:
Germ Protection - Benzalkonium Chloride
Freshness - Fragrance
Helpers - Water
Cleaners - Alcohol
Free From - Bleach, Taint, Odour

Dettol Antibacterial Surface Cleansing Wipes are Proven to Kill Bacteria:
- E. Coli
- S.aureus
- Listeria
- Campylobacter
- P.aeruginosa
- Salmonella
- MRSA
- Escherichia coli with extended spectrum beta-lactamase resistance (ESBL)
- Klebsiella pneumoniae NDM-1 positive

Proven to Remove Allergens:
Pollen Particles, Dust mites, Pet Dander`,
    category: "Home Care",
    subCategory: "Household Cleaning",
    amount: 0,
  },
  {
    name: "Flash Lemon All Purpose Liquid Cleaner 1L",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6526463/1/300x300.jpg",
    description: `Removes up to 100% of dirt, grease & grime

Flash One for All offers you a universal solution for your entire home

Powerful multi surface cleaning

Leaves intense freshness and brilliant shine

Cleans in cold water, saving energy

Available in multiple scents

Flash Multi Surface & Floor Cleaner is perfect for cleaning almost any hard surface in your home. Use it on the kitchen sink, greasy stove tops, even as a floor cleaner. See package for full usage instructions. A rinse is required for surfaces in direct contact with food. `,
    category: "Home Care",
    subCategory: "Household Cleaning",
    amount: 0,
  },
  {
    name:
      "Dettol All in One Disinfectant Antibacterial Spray Crisp Linen 400ml",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7786947/1/300x300.jpg",
    description: `Kills Cold & Flu Viruses

Hard Surfaces & Upholstery

Ingredients:
Germ Protection - Ethanol, Quaternary Ammonium Compounds
Freshness - Fragrance
Helpers - Water, Monoethanolamine, Ammonium Hydroxide, Sodium Lauroyl Sarcosinate, Propellant
Free From - Bleach

Dettol All in One Disinfectant Spray kills the following bacteria, viruses a fungi: Bacteria & Fungi- E. coli, Salmonella, Listeria, Staph, aureus, Campylobacter, Streptococcus, Athlete's foot fungus, MRSA

Kills 99.9% of Bacteria & Viruses†
†Viruses- Influenza Type A H1N1, Rhinovirus (the leading cause of the common cold), Rotavirus (the leading cause of infectious diarrhoea in children), Respiratory Syncytial Virus (RSV-the leading cause of lower respiratory infection in children), Poliovirus Type 1, Adenovirus Type 2, Herpes simplex virus Types 1 & 2, Hepatitis A virus.`,
    category: "Home Care",
    subCategory: "Household Cleaning",
    amount: 0,
  },

  {
    name: "Sainsbury's Super Soft Toilet Tissue, Pure White x9 Rolls",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7308628/1/300x300.jpg",
    description: `Sainsbury's Super soft pure white 9x220 sheets

 

now even softer, 9 rolls, 220 sheets per roll, 2 ply tissue  

Super soft by Sainsbury's has been developed with our paper-making experts to combine advanced technology and premium, sustainable materials to create our softest ever tissue, combining luxury softness and strength.  

 

Try using our super soft toilet tissue with our moist toilet tissue wipes for an even fresher and clean feeling than using dry toilet tissue alone. 

 

9 rolls, 2 ply 

220 sheets per roll 

Sheet size 124mm x 105mm 

Average roll length 27.28m 

Total area 25.78sq. metres `,
    category: "Home Care",
    subCategory: "Toilet paper, tissues and wet wipes",
    amount: 0,
  },
  {
    name: "Andrex Classic Clean Toilet Tissue 16 Rolls",
    price: 7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7529451/1/300x300.jpg",
    description: `Winner of Product of the Year 2021 in the Toilet Tissue Category

  30% recycled packaging, still 100% recyclable
  
  Use Andrex® Toilet Tissue and Andrex® Washlets™ Moist Toilet Tissue for all day freshness (vs. using Dry Bath Tissue alone)
  
  New and improved and now softer
  
  New and improved Andrex® Classic Clean Toilet Tissue has been specifically designed to give you a better clean* than ever before. Each sheet now features our unique 3D Wave™ texture that is proven to clean more effectively*, giving you a better clean with fewer sheets. Plus, each toilet roll is now softer and gives you the best clean*. Use Andrex® Toilet Tissue and Andrex® Washlets™ Moist Toilet Tissue for all day freshness†.
  
  *Compared with previous Andrex® Classic Clean †vs. Using Dry Bath Tissue alone.`,
    category: "Home Care",
    subCategory: "Toilet paper, tissues and wet wipes",
    amount: 0,
  },
  {
    name: "Plenty White Kitchen Towel x2 Rolls",
    price: 3.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7858710/1/300x300.jpg",
    description: `Wettable, Wringable & Scrubbable - Plenty kitchen roll is 40% more absorbent* and NEW Power-X structure keeps the sheets strong and intact even when wet! Great for tougher tasks all around the home. Whether you're mopping, wetting, polishing, shining, cooking or cleaning, Plenty's superior performance is perfect for every task around the home
*vs the next best selling brand. Based on laboratory tests (February 2021)

Plenty tip: Add a sheet of Plenty The Original One to a bag when defrosting bread. This will help soak up the excess moisture

Product Specification 2 roll 2-ply tissue. Average 100 sheets per roll. Roll length 22.7m. Sheet size 230mm x 227mm (All measurements are averages)`,
    category: "Home Care",
    subCategory: "Toilet paper, tissues and wet wipes",
    amount: 0,
  },
  {
    name: "Sainsbury's Super Soft Pure White Tissues Cube 1x56 Sheets",
    price: 0.75,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7847848/1/300x300.jpg",
    description: `Sainsbury's Cube selection x56 sheets

 

super soft pure white  

Super soft tissues combine softness and strength making them versatile for all your everyday needs. 

 

Available in a range of sizes and formats to suit all your needs. 

 

56 sheets, 3 ply 

Sheet size 200mm x 206mm 

Total area 2.3 sq. metres `,
    category: "Home Care",
    subCategory: "Toilet paper, tissues and wet wipes",
    amount: 0,
  },
  {
    name: "Kleenex Ultra Soft Tissues 2 Pack",
    price: 3.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/3146255/1/300x300.jpg",
    description: `Kleenex® ultra soft tissues

2 packs

Beautifully soft and silky for your face

Kleenex® Ultra Soft. You deserve a touch of luxury. Kleenex® Ultra Soft is designed with that in mind; it's supremely soft and silky feeling beautiful. Kleenex®. Someone needs one.

Kleenex® Ultra Soft Tissues 2 Pack
2 Pack
3 ply

2 Pack
Average 64 sheets per box
20 x 20cm
Total 3.2m2

By Appointment to Her Majesty The Queen Manufacturers of Disposable Tissues Kimberly-Clark Limited Kings Hill, Kent`,
    category: "Home Care",
    subCategory: "Toilet paper, tissues and wet wipes",
    amount: 0,
  },
  {
    name: "House 247 Facial Tissues",
    price: 0.75,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8034942/1/300x300.jpg",
    description: `House 24/7 facial tissues 226 sheets

 

226 tissue sheets, 2 ply tissue  

226 sheets, 2 ply 

Sheet size 200mm x 206mm 

Total area 9.3 sq. metres `,
    category: "Home Care",
    subCategory: "Toilet paper, tissues and wet wipes",
    amount: 0,
  },

  {
    name: "Ariel All-in-1 Pods Original Washing Liquid Capsules",
    price: 9,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7875812/1/300x300.jpg",
    description: `All-in-1 Ariel PODs: 1. Lift stains 2. Brightens 3. Freshens 4. Protects fabrics 5. Designed for cold

Extraordinary cleaning in one washing liquid capsule

Laundry detergent PODs covered in film that dissolves completely in contact with water

Outstanding cleaning even in a cold wash

Easy to use: no need to measure and pour

Ariel All-in-1 provide extraordinary cleaning power in one little POD. Ariel All-in-1 PODs Original washing liquid capsules have a unique multi-compartment design that keeps the ingredients stable and separate until they reach the wash, providing super concentrated cleaning power. The innovative film of Ariel washing liquid tablet dissolves completely in contact with water to release the powerful technologies that tackle a broad stain range and provide you with just the right amount of the best liquid laundry detergent from Ariel. 

Use together with Lenor fabric conditioners and Unstoppables in-wash scent boosters for an extra boost of softness and freshness.

WARNING! This product may be harmful and could cause serious injury. Keep Ariel PODs out of reach of children. Visit keepcapsfromkids.eu for more information.`,
    category: "Home Care",
    subCategory: "Laundry and ironing",
    amount: 0,
  },
  {
    name: "Sainsbury's Non Bio Concentrated Laundry Liquid 1500ml",
    price: 3.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7857072/1/300x300.jpg",
    description: `Safe for use with septic tanks.`,
    category: "Home Care",
    subCategory: "Laundry and ironing",
    amount: 0,
  },
  {
    name: "Sainsbury's Colour Bio Concentrated Laundry Liquid 50 Washes 1500ml",
    price: 3.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7857077/1/300x300.jpg",
    description: `Safe for use with septic tanks.`,
    category: "Home Care",
    subCategory: "Laundry and ironing",
    amount: 0,
  },
  {
    name: "Bold All-in-1 Pods Washing Capsules Lavender & Camomile",
    price: 7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8069325/1/300x300.jpg",
    description: `All-in-1 Pods Washing Liquid Capsules: Clean, Freshen, Soften

Brilliant hygienic cleaning with built-in fabric softener

Touch-activated perfume technology for long-lasting freshness

Enjoy the blissful scent of Lavender & Camomile

Try the Dream Team: Bold + Lenor Fabric Conditioner + Lenor Scent Booster

Child-Lock System

A relaxing and lingering scent, that’s Bold Lavender and Camomile. Imagine strolling through fragrant lavender fields, leaving all cares behind. This classic scent blends soothing camomile and honey with woody notes for a total feeling of serenity. Breathe in the blissful notes and... relax.

All-in-1 Pods washing liquid capsules are Bold's latest innovation, infusing your clothes with relaxing, invigorating and luxurious scents inspired by nature's most divine fragrances.

Unlike traditional washing powder, All-in-1 Pods have a unique three-chamber design, that comes with brilliant hygienic cleaning detergent as well as built-in fabric softener – for cleaner, fresher and softer feeling clothes than ever before.`,
    category: "Home Care",
    subCategory: "Laundry and ironing",
    amount: 0,
  },
  {
    name: "Sainsbury's Home Wooden Pegs x50",
    price: 3.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/131448817/1/300x300.jpg",
    description: `Your clothes won't be flying into the neightbours garden. Not with these pegs. Made from wood, they will hold your clothes securely onto the washing line.

Pack contains: 50 x pegs
Care and use: Store pegs away when you're not using them`,
    category: "Home Care",
    subCategory: "Laundry and ironing",
    amount: 0,
  },
  {
    name: "Dylon Spray Starch 300ml",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/3665725/1/300x300.jpg",
    description: `Fresh cotton fragrance

35% fewer creases

With silicone for easy ironing

Restores the crisp, fresh look of fabric

Helps fabrics such as shirts and table linens look pristine, whilst taking the hard work of ironing away. Simply spray onto fabric & iron. Its silicone content helps your iron glide over tough creases for a smooth, wrinkle free finish in minimal time.
With natural starch it restores a crisp, fresh look & improves resistance to dirt & wear for a perfect finish that lasts.`,
    category: "Home Care",
    subCategory: "Laundry and ironing",
    amount: 0,
  },

  {
    name: "Sainsbury's Extra-Wear Household Cleaning Gloves, Medium",
    price: 1.8,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6002974/1/300x300.jpg",
    description: `Extra wear household gloves medium

 

double layer for strength and durability  

Extra wear household gloves 

Made from durable, natural rubber and have a nitrile rubber coating for added strength and are ideal for all household tasks. They are designed for comfort with a luxurious cotton flock lining, extra grip and long cuff.`,
    category: "Home Care",
    subCategory: "Cleaning accessories",
    amount: 0,
  },
  {
    name: "Marigold Kitchen Gloves, Medium",
    price: 2.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/3035719/1/300x300.jpg",
    description: `For a brighter clean

Triple-layered to last longer

Roll-top cuffs that stay up

Cotton-lined to be extra-comfy

For minimal risks only

Why Marigold?
Lots of reasons. Dipped three times for extra protection and durability, our Extra-Life Kitchen gloves have special roll top cuffs that stay up, an anti-slip pattern to give you more grip and an extra comfy cotton lining. Our gloves also protect your hands and nails from domestic detergents and hot water.

Marigold transforms the dullest chore into one with a sense of purpose, pride and deep satisfaction. We call it the Marigold cleaning glow.

Since we made the first rubber gloves in 1947, we've been providing the performance and protection you need to tackle the toughest jobs.

Why not try:
- Longer Bathroom Gloves
- Extra-Tough Outdoor Gloves
- Gloves for Sensitive Skin
- Disposable Gloves

CE Mark - European Conformance

Green Dot`,
    category: "Home Care",
    subCategory: "Cleaning accessories",
    amount: 0,
  },
  {
    name: "Dishmatic Handle With Head",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/2641652/1/300x300.jpg",
    description: `Dishmatic is the world's #1 dispensing fillable and refillable washing up tool

Abrasive on sponge heads treated with anti bacterial agent

Dishmatic Style Fillable Washing Up Handle

Dishmatic is the world's #1 dispensing fillable and refillable washing up tool.

Dishmatic - Your dish friend.
Stunningly simple and fantastically effective, Dishmatic is an essential aid to dishwashing that's loved by everyone who uses it.

The familiar favourite Dishmatic dispensing handle - sold with an anti-bacterial abrasive on the sponge head to prevent the growth of bacteria. With an easy grip handle and a specially designed twist and click screw cap closure for easy filling.

Practical and reliable, it is designed to last. Dishmatic's angled head makes it easy to get into the corners of bakeware and crockery. Suitable for use with our full range of interchangeable heads.

To use Dishmatic:
Fill - Simply unscrew the cap and fill with your favourite washing up liquid. Twist and click to close.
Dispense - The washing up liquid is automatically dispensed through the sponge head as you wash your crockery and pans, leaving your dishes spotlessly clean.
Replace - Your Dishmatic is designed to last but when the sponge head is worn, simply unclip and replace it. All Dishmatic refills are interchangeable and all abrasive on sponge heads are treated with our anti-bacterial agent.

In addition, Dishmatic is:
Kind to hands - Doing the hard work to help protect your skin and nails.

Designed and manufactured in the UK.

www.dishmatic.com
Find us on: Facebook and Instagram

“Dishmatic” and "Your dish friend" are registered trademarks and wordmarks of Libman Brands UK Ltd. Patented Design.

Please recycle this packaging
97% - This packaging is made from recycled paper
50% - This product is made from recycled plastic

Available Refills
White/Blue - Non Scratch
Green - General Purpose
Black - Extra Heavy Duty
Available refills fit all Dishmatic handles.

Anti bacterial
Made in Britain`,
    category: "Home Care",
    subCategory: "Cleaning accessories",
    amount: 0,
  },
  {
    name: "Vileda Fresh Dishbrush",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/125439789/1/300x300.jpg",
    description: `Dirty dishes will be a thing of the past with this Vileda dishbrush. Designed with easy rinse channels for effective and thorough rinsing of food particles, whiles keeping the brush fresh and clean.

Ergonomic soft touch handle

Composition:
PP: 77%, TPE: 9%, PBT: 12%, Steel: 2%`,
    category: "Home Care",
    subCategory: "Cleaning accessories",
    amount: 0,
  },
  {
    name: "Vileda Supermocio Compact Mop",
    price: 6.75,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/124024995/1/300x300.jpg",
    description: `The Vileda SuperMocio 3Action Compact mop with microfibre includes three key cleaning actions for deep down cleaning and removes 99% bacteria with JUST water*. Has a compact handle can be easily disassembled into 3 pieces for easier storage.
1. Triple Power for Easy Mopping .
2. Piece Handle for ease of storage.
3. The lemon shaped head allows the mop head to reach into corners and clean effectively.

Dimensions : 480mm x 110mm x 70mm
Box Contents: 1 x 3 piece handle , 1 x mop head
Other Information : Metal / Plastic
Mop - Polyester, Viscose, Polyamide`,
    category: "Home Care",
    subCategory: "Cleaning accessories",
    amount: 0,
  },
  {
    name: "Vileda Red Handled Dustpan Set",
    price: 5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/123486266/1/300x300.jpg",
    description: `The Vileda 2 in1 Dustpan is the essential dustpan and brush set for quick and uncomplicated floor sweeping. It is the ideal sweeping brush for dust and similar gritty particles of dirt.
Innovative 2 in1 system combines soft bristles with ultra-thin black fibres collect the finest dust while hard red fibres reach into stiff or angled corners
Specially designed for effective cleaning
Rubber lip helps create a seal on uneven floors.
The brush locks into dustpan handle for easy storage.

Dimensions : 366mm x 249mm x 141.3mm
216g
Box Contents: 1 x dustpan , 1 x brush
Other Information : Plastic, Black and red bristles`,
    category: "Home Care",
    subCategory: "Cleaning accessories",
    amount: 0,
  },

  {
    name: "Walkers Wotsits Really Cheesy Multipack Snacks 6x16.5g",
    price: 1.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/4060697/1/300x300.jpg",
    description: `Really Cheesy Flavour Corn Puffs

82 kcal 340 kJ per Pack

- Wotsits are crunchy, melty and seriously cheesy baked corn snacks made with real cheese
- Meltingly tasty multipack with 6 packs
- Baked not fried
- No artificial colours or preservatives
- Suitable for vegetarians

Are you a cruncher or a melter? Do you like to nibble those smooth, round edges? Or let them gently dissolve in your mouth? Or maybe you live life on the edge... start off with melting and then take a bite. However you snaffle a Wotsit, it's always deliciously cheesy.

Our snacking range combines the very best of Walkers family favourite crisps, offering a tasty flavour and unique shape for every taste and occasion. Including lunchtime classics Wotsits, Quavers, French Fries and Squares and snack-time heroes Monster Munch, Bugles, Mix Ups and Poppables, Walkers Snacks are jam-packed with flavour and fun.

Walkers, the Walkers logo, Wotsits and Wotsits logo are registered trademarks. ©2021`,
    category: "Instant Food",
    subCategory: "snacks",
    amount: 0,
  },
  {
    name: "Walkers Sunbites Sweet Chilli Mulitpack Snacks",
    price: 1.7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6920066/1/300x300.jpg",
    description: `Sun Ripened Sweet Chilli Flavour Wholegrain Snack

Best Ever Recipe

120 kcal 500kJ per pack

High in Fibre

Only Natural Flavours

Suitable for Vegetarians

- 6x25g multipack of Sunbites sun ripened sweet chilli wholegrain snacks
- Deliciously sweet and spicy multigrain snacks made with corn, oats and wheat
- Suitable for vegetarians
- Made with 100% wholegrains and 100% natural flavourings
- Sunbites harness the taste of nature by combining golden grains, sun-ripened veggies and unbeatable flavours to create the perfect snack for any occasion
- This multipack contains 6 individual servings

Harnessing the power of golden multigrains and sun-ripened vegetables, Sunbites Grainwaves bring together the best of nature with unbeatable flavour and a characteristic crunch. Deliciously satisfying snacking alternatives that'll make your lunchbox sing, Sunbites Grainwaves are snacks worth looking forward to. A little do good and taste good in every bite, Sunbites are commited to a new era of sustainable snacking by reducing waste and water usage and relying only on renewable energy sources in production.

Packaged in a Protective Atmosphere.

Sunbites and the Sunbites logo are registered trademarks. ©2020`,
    category: "Instant Food",
    subCategory: "snacks",
    amount: 0,
  },
  {
    name: "Walkers Quavers Cheese Multipack Snacks",
    price: 1.7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/2095950/1/300x300.jpg",
    description: `Cheese Flavour Potato Snack

Light curly potato snack

86 kcal, 359 kJ per pack

No Artificial Colours or Preservatives

Suitable for Vegetarians

- Light and curly Walkers Quavers snacks are as delicious as they are fun to eat
- Multipack contains 6 x 16g packets of Walkers Quavers Cheese Snacks
- 86 calories per pack
- No artificial colours or preservatives
- Suitable for vegetarians

Our snacking range combines the very best of Walkers family favourite crisps, offering a tasty flavour and unique shape for every taste and occasion. Including lunchtime classics Wotsits, Quavers, French Fries and Squares and snack-time heroes Monster Munch, Bugles, Mix Ups and Poppables, Walkers Snacks are jam-packed with flavour and fun.

Walkers, Quavers, Walkers and the Quavers logos are registered trademarks. ©2020`,
    category: "Instant Food",
    subCategory: "snacks",
    amount: 0,
  },
  {
    name: "Walkers Baked Sea Salt Mulitpack Snacks",
    price: 1.7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6447861/1/300x300.jpg",
    description: `6 x Sea Salt Baked Potato Snack

No added MSG

No artificial colours

No preservatives

Suitable for vegetarians

- Delicious baked Walkers crisps lightly seasoned with sea salt
- Baked for extra crispy crunchiness
- Walkers Oven Baked contain 50% less fat than regular potato crisps
- Enjoy on-the-go or packed into a lunchbox
- Each multipack contains 6 individual packs

The Walkers Baked range includes a variety of delicious crisps and snacks that contain up to 50% less fat than regular crisps - all without compromising on the Walkers flavour you know and love. Try the classic Walkers Baked flavours or upgrade your lunchbox with an irresistible pack of Walkers Baked with Veg, Walkers Baked Fusions or Walkers Baked Crackers.

Visit us at: https://walkers.co.uk/crisps-range/baked

Walkers and the Walkers Logo are registered trademarks ©2021`,
    category: "Instant Food",
    subCategory: "snacks",
    amount: 0,
  },
  {
    name: "Sunbites Sour Cream Mulitpack Snacks",
    price: 1.7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6649330/1/300x300.jpg",
    description: `Sour Cream and Cracked Black Pepper Flavour Wholegrain Snack

Best Ever Recipe

119 kcal 498kJ per pack

High in Fibre

Only Natural Flavours

Suitable for Vegetarians

- 6x25g multipack of Sunbites sour cream & black pepper wholegrain snacks
- Deliciously smooth and peppery multigrain snacks made with corn, oats and wheat
- Suitable for vegetarians
- Made with 100% wholegrains and 100% natural flavourings
- Sunbites harness the taste of nature by combining golden grains, sun-ripened veggies and unbeatable flavours to create the perfect snack for any occasion
- This multipack contains 6 individual servings

Harnessing the power of golden multigrains and sun-ripened vegetables, Sunbites Grainwaves bring together the best of nature with unbeatable flavour and a characteristic crunch. Deliciously satisfying snacking alternatives that'll make your lunchbox sing, Sunbites Grainwaves are snacks worth looking forward to. A little do good and taste good in every bite, Sunbites are commited to a new era of sustainable snacking by reducing waste and water usage and relying only on renewable energy sources in production.

Packaged in a Protective Atmosphere.

Sunbites and the Sunbites logo are registered trademarks. ©2020`,
    category: "Instant Food",
    subCategory: "snacks",
    amount: 0,
  },
  {
    name: "Walkers Quavers Cheese Multipack Snacks",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6536916/1/300x300.jpg",
    description: `Cheese Flavour Potato Snack

Light curly potato snack

86 kcal 359 kJ Per Pack

No Artificial Colours or Preservatives

Suitable for Vegetarians

- Light and curly Walkers Quavers snacks are as delicious as they are fun to eat
- Multipack contains 12 x 16g packets of Walkers Quavers Cheese Snacks
- 86 calories per pack
- No artificial colours or preservatives
- Suitable for vegetarians

Our snacking range combines the very best of Walkers family favourite crisps, offering a tasty flavour and unique shape for every taste and occasion. Including lunchtime classics Wotsits, Quavers, French Fries and Squares and snack-time heroes Monster Munch, Bugles, Mix Ups and Poppables, Walkers Snacks are jam-packed with flavour and fun.

Please dispose of this packet responsibly, or find out how you can recycle it at walkers.co.uk/recycle
To recycle, visit walkers.co.uk/recycle

Walkers Quavers, Walkers and the Quavers logos are registered trademarks. ©2020`,
    category: "Instant Food",
    subCategory: "snacks",
    amount: 0,
  },

  {
    name: "Sainsbury's Fruit Pastilles Sweets",
    price: 0.9,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/1269536/1/300x300.jpg",
    description: `Fruit flavoured gums with a sugar coating

 

Approx 9 servings 

The flavourings and colourings used in this product are sourced from natural sources`,
    category: "Instant Food",
    subCategory: "Sweets",
    amount: 0,
  },
  {
    name: "Skittles Fruits Sweets Family Size Pouch Bag",
    price: 1.35,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7909897/1/300x300.jpg",
    description: `Chewy Candies in a Crisp Sugar Shell with Fruit Flavours.

Share with friends and friends of friends

Suitable for Vegetarians and vegans

Lemon, Blackcurrant, Strawberry, Lime, Orange

No two Rainbows are the same. Neither are two packs of Skittles. Enjoy an odd mix.
Share the Rainbow, Taste the Rainbow!

Product may contain an uneven mix of flavours.

Vegan Society`,
    category: "Instant Food",
    subCategory: "Sweets",
    amount: 0,
  },
  {
    name: "Tic Tac 100 Fruit Adventure",
    price: 1.4,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8018029/1/300x300.jpg",
    description: `Fruit Flavour Drops

Tic Tac sweets, Fruit Adventure flavour

Enjoy the delicious taste of cherry, strawberry, passionfruit and lime all in one pack with Tic Tac's Fruit Adventure.
Tic Tac Fruit Adventure provides little moments of refreshment in a convenient pack with the recognisable Tic Tac rattle. A total of 100 sweets.
A single pack of 49g

Tic Tac sparks refreshing moments to be enjoyed anywhere and with anyone.

For more information visit: www.tictac.com and check out our Instagram! @tictac.uk

At Ferrero, we bring a little bit of pleasure to life through our iconic and much-loved brands. For over 50 years, we have been committed to providing our UK consumers with high quality products such as Kinder Surprise, Ferrero Rocher, Tic Tac, Nutella and Thorntons. We are driven by our pursuit for quality and excellence, whilst staying true to our values as a family-owned business. For us this all starts with placing Quality at the Heart of everything we do. This value runs throughout our entire business, from our approach to nutrition and sustainability, to the role we play within our communities, to the unique experiences we create for our consumers.

Green Dot`,
    category: "Instant Food",
    subCategory: "Sweets",
    amount: 0,
  },
  {
    name: "Haribo Starmix Sweets Bag",
    price: 0.95,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7509759/1/300x300.jpg",
    description: `Fruit Flavour Gums with 2% Fruit Juice from Concentrate, Cola Flavour Gums and Sweet Foam Gums

Fruitier Mix

Now with Fruit Juice

Share size

Ironic favourites

Without Artificial Colours

Kids and grown-ups love it so ...
... the happy world of HARIBO!

A portion is a little handful.
In this case it's approx. 7 sweets`,
    category: "Instant Food",
    subCategory: "Sweets",
    amount: 0,
  },
  {
    name: "Haribo Tangfastics Sour Sweets Bag",
    price: 0.95,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7509774/1/300x300.jpg",
    description: `Fizzy Fruit Flavour, Cola Flavour and Sweet Foam Gums

Share size

Tangy tastiness

Without Artificial Colours

Kids and grown-ups it so ...
... the happy world of HARIBO!

A portion is a little handful.
In this case it's approx. 5 sweets`,
    category: "Instant Food",
    subCategory: "Sweets",
    amount: 0,
  },
  {
    name: "Sainsbury's Strawberry Laces Sweets",
    price: 0.45,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6682312/1/300x300.jpg",
    description: `Strawberry flavour sweets

 

Suitable for Vegetarians 

3 servings 

The flavouring used in this product is sourced from natural sources`,
    category: "Instant Food",
    subCategory: "Sweets",
    amount: 0,
  },

  {
    name: "Sanex BiomeProtect Moisturising Shower Gel",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8020157/1/300x300.jpg",
    description: `Keep your skin healthy and cared for with the new Sanex BiomeProtect Dermo Moisturising Shower Gel

This body wash has been expertly crafted to gently cleanse your skin, while boosting its natural defences and enhancing its natural moisturisation

Our shower gel provides microbiome skincare by nourishing the good bacteria on skin and targeting the bad, making it more resilient to external aggressors

The new advanced formula has a unique blend of skin nutrients to strengthen your skin’s microbiome – your natural first layer of protection

It contains a proprietary prebiotic and postbiotic complex to support the good bacteria on skin and enhance your skin’s natural barrier and hydration

Healthy skin starts with the new Sanex BiomeProtect Dermo Moisturising Shower Gel. The body wash is expertly crafted to enhance natural moisturisation and strengthen the microbiome – your natural first layer of protection. Take care of the good bacteria on skin to keep it protected.

Look after your skin and keep it healthy with the new Sanex BiomeProtect Dermo Moisturising Shower Gel. This microbiome shower gel has been expertly crafted to gently cleanse your skin, while boosting its natural defences and enhancing its natural moisturisation to keep it feeling soft and smooth. Our body wash provides microbiome skincare by nourishing the good bacteria on skin and targeting the bad, making it more resilient to external aggressors. The new advanced formula has been crafted with a unique blend of skin nutrients to strengthen your skin’s microbiome – your natural first layer of protection. Sanex BiomeProtect Dermo Moisturising Shower Gel contains a proprietary prebiotic and postbiotic complex to support the good bacteria on skin and enhance your skin’s natural barrier and hydration. What’s more, it’s been dermatologically tested, respects your skin’s natural pH and contains 0% sulfates to help skin perform at its healthy best. Sanex research is validated by the British Skin Foundation.`,
    category: "Personal Care",
    subCategory: "Bathing",
    amount: 0,
  },
  {
    name: "Dove Pampering Body Wash ",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7970683/1/300x300.jpg",
    description: `Dove Pampering Body Wash gives you softer, smoother skin after just one shower

Made with our unique ¼ moisturising cream, this nourishing body wash helps to minimise skin dryness

Our moisturising body wash delivers skin natural nutrients to make your skin feel cared for

Discover Dove’s gentlest ever sulfate SLES free body wash

The moisturising properties of Dove Pampering Body Wash nourish deep into the surface layers of your skin

Our gentle formula protects your microbiome (your skins protective layer) and provides lasting care for your skin

Enjoy softer, smoother skin after just one shower with Dove Pampering Body Wash. Our moisturising and microbiome gentle formula provides instant softness and lasting care for your skin. This Pampering Dove Body Wash wraps you in a cloud of rich, creamy lather, infused with the warm scent of shea butter and vanilla, for a soothing sensory experience that will leave you feeling truly relaxed. Dove Pampering Body Wash ensures your microbiome (your skin’s living protective layer) is given the nutrients it needs to protect itself and minimise skin dryness. This moisturising body wash is made with mild cleansers to help your skin maintain its natural balance and deliver skin nourishment simultaneously. Enjoy the rich, creamy lather and a fresh fragrance combination of shea butter and vanilla, leaving you feeling relaxed and pampered. The mild, gentle formula is kind to your skin, making Dove Pampering Body Wash great for all skin types. For best results, simply squeeze onto a shower puff or your hands and massage all over your body before rinsing thoroughly. Use this pampering body wash as part of your daily shower routine for softer, smoother skin. All Dove skin care products are cruelty-free accredited by PETA.`,
    category: "Personal Care",
    subCategory: "Bathing",
    amount: 0,
  },
  {
    name: "Radox 2-in-1 Shampoo and Shower Gel Feel Awake",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6307393/1/300x300.jpg",
    description: `Refreshing RADOX Mineral Therapy Feel Awake 2-in-1 Shower Gel & Shampoo for men provides an awakening shower experience that revives your senses

Our shower gel & shampoo is made with a unique blend of herbs and minerals which activates with hot water to cleanse and revive you

Feel the fresh energising sea breeze rouse you from the state of sleep with RADOX Feel Awake shower gel, infused with revitalising scents of fennel and sea minerals

Our replenishing shower gel is suitable for daily use, simply squeeze it out, lather on hair and body and indulge in a reviving shower experience

Our body wash & shampoo for men is pH neutral and suitable for all skin types

RADOX shower gel rinses off easily leaving your skin feeling fresh and clean

RADOX Mineral Therapy Feel Awake 2-in-1 men's shower gel and shampoo is crafted with a unique blend of herbs and minerals and infused with a reviving fragrance of fennel and sea minerals. This refreshing shower gel and shampoo cleanses your skin and recharges your batteries, making you feel awake. Transform your day with RADOX's mineral therapy ritual every time you step in the shower.
Enriched with a unique blend of 4 herbs and 13 minerals that activate in hot water, RADOX Feel Awake 2-in-1 Shower Gel & Shampoo goes beyond cleansing the body and delights your senses with a revitalising scent of fennel and sea minerals. Suitable for daily use, our shower gel for men rinses off easily leaving your skin feeling fresh and clean. For best results, squeeze out RADOX reviving body wash, then lather on body. If eye contact occurs, rinse well with warm water. In case of rash or irritation, discontinue use.
From as early as 1908, RADOX founders used a unique blend of minerals and herbs to ease the fatigue of weary bodies and minds. From reviving the tired feet of early travellers to helping hardworking people find a moment of solitude and sanctuary – RADOX is rooted in the transformative power of mineral therapy. We have a long history of everyday therapy, we call it your daily R&R, RADOX Mineral Therapy. Enjoy our Feel Awake shower gel.`,
    category: "Personal Care",
    subCategory: "Bathing",
    amount: 0,
  },
  {
    name: "Radox Calm Your Mind Salts Pouch",
    price: 2.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7972223/1/300x300.jpg",
    description: `RADOX Mineral Therapy Sleep Aromatherapy Bath Salts are scented with lavender and ylang-ylang, and crafted with 100% pure sea salt

Inspired by nature’s best ingredients, our premium bath salts are blended with the scents of lavender, ylang-ylang and our DreamScentz fragrance which improves sleep quality

At RADOX, we have been blending mineral bath salts since 1908 to unleash a mood, whether you want to be energised or refreshed, uplifted or soothed

Pour about 2-3 handfuls of RADOX bath salts under warm running water and let them dissolve before stepping into the mood-enhancing, relaxing bath

RADOX Sleep Aromatherapy Bath Salts are enriched with calcium, sodium and magnesium and are pH neutral, meaning they are suitable for all skin types

Relax in a bath with our blended sea salts to wash away stresses and clear your mind

Your body’s trying to tell you something. Time to listen. Time to swap press-ups and lunging for lounging in mineral sea salts. Don’t float like a butterfly, sink like a stone into a warm lavender and ylang-ylang scented bath for some well-deserved me-time. From troubles to bubbles, close your eyes, relax and recover. RADOX Mineral Therapy Sleep Aromatherapy Bath Salts are crafted with 100% pure sea salt with natural calcium, sodium and magnesium, and infused with pure essential oils - the perfect blend to help you unwind in a relaxing bath. Blended with scents of lavender, ylang-ylang and our DreamScentz fragrance, which improves sleep quality, this bath product helps you to indulge in a bath therapy ritual, de-stress and get ready for a restful night's sleep.

Pour a generous amount (about 2-3 handfuls) of RADOX bath salts under warm running water and allow to fully dissolve before carefully stepping into the bath. Reseal pouch firmly to keep waterproof. For an extra intense mineral-bathing experience, increase the dosage to 4 or 5 handfuls (about 200 g).

From as early as 1908, RADOX founders used a unique blend of minerals and herbs to ease the fatigue of weary bodies and minds. From reviving the tired feet of early travellers to helping hardworking people find a moment of solitude and sanctuary – RADOX bath soak and bath salt blends are rooted in the transformative power of mineral therapy. We have a long history of everyday therapy, we call it your daily R&R, RADOX Mineral Therapy. Feel Revived.`,
    category: "Personal Care",
    subCategory: "Bathing",
    amount: 0,
  },
  {
    name: "Radox Bath Oil Coconut ",
    price: 3.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7919861/1/300x300.jpg",
    description: `Caring coconut scent

Moisturising Bath Oil Blends

Infused with Natural Oils and Vitamin E

Reboot your mood and leave your skin feeling moisturised

Leaves your skin soft and moisturised after you bathe

New Radox Bath Me-Time range

Today may not have been your day, but with the help of our Caring Coconut scent, tonight has your name written all over it! Radox Bath Oil Blends is our new bath range enriched with natural oils and Vitamin E that leaves your skin soft and moisturised after you bathe. Things are looking up. In fact, the forecast for tomorrow is 100% winning. Reboot your mood and leave your skin feeling moisturised! At Radox, we have been taking inspiration from nature's incredible fragrances since 1908 to create refreshing shower gel, hand wash and bath products. We then capture their transformative effects with one goal in mind: to help people get in the mood they want to be in. Smell is not only one of the most important senses, but one of the most overlooked. Fragrance has the power to lift you when you're down, to awaken you when you rise, to make us sleep, love, create, dream. It has the power to genuinely transform how you feel. In fact, there's hardly a mood in society that cannot be moved by fragrance. And there's barely a person on earth who can't be affected by the right scent. Bath products with nature inspired fragrance to transform your mood.`,
    category: "Personal Care",
    subCategory: "Bathing",
    amount: 0,
  },
  {
    name: "Pears Transparent Bar Soap",
    price: 0.7,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/2255705/1/300x300.jpg",
    description: `Transparent Soap Bar with Natural Oils

Our Soap Bar is suitable for Vegans

Dermatologically tested to be mild on the skin - the perfect Bar of Soap!

100% recyclable packaging

A soap bar crafted to be gentle on your skin

Iconic fragrance of Pears made with Natural Oils in a Transparent Soap Bar

Over 200 years of soap making expertise

Pears, a soap with 200 years of heritage, is prepared with a unique process of moulding & then matured till it reaches pure transparency. Each bar of Pears soap is still finished by hand and checked by eye. It's crafted to be gentle on the hands and is dermatologically tested to be mild on your skin.

Pears Pure & Gentle Transparent Soap Bar with Natural Oils carries our iconic fragrance of natural oils like Rosemary, Lavender and Thyme.

Lather up your Pears Transparent Soap Bar and massage the smooth, rich lather over your face and body enjoying the iconic fragrance of Pears. Rinse away with warm water and enjoy soft, clean skin.

If you like our Transparent Soap Bar then why not try our Shower Gel or our Liquid Hand Wash? We have three lovely fragrances; our iconic fragrance made with Natural Oils, our uplifting & refreshing fragrance with Mint Extract and our mild & refreshing fragrance with Lemon Extracts.

All of our Body Washes, Liquid Hand Washes and Transparent Soap Bars are suitable for Vegans. At Pears we care about the environment as well as your skin so we've made all of our packaging 100% recyclable.

Pears is a registered Trade Mark.`,
    category: "Personal Care",
    subCategory: "Bathing",
    amount: 0,
  },

  {
    name: "Colgate Max Fresh Cooling Crystals Toothpaste",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7859354/1/300x300.jpg",
    description: `Freshens and cleans your mouth

Whiter teeth

Fights cavities

Keep your teeth healthy and fresh with Colgate Max Fresh® Cooling Crystals Toothpaste. Our powerful formula is infused with cooling crystals, so you will experience a new dimension of freshness. The FreshFX Technology provides a cooling effect that lasts +10x longer*
*vs regular fluoride toothpaste
Keep your teeth healthy and fresh with Colgate Max Fresh® Cooling Crystals Toothpaste. Our powerful formula is infused with cooling crystals, so you will experience a whole new dimension of freshness every time you brush. The FreshFX Technology also provides a cooling effect that lasts +10 times longer than a regular fluoride toothpaste.`,
    category: "Personal Care",
    subCategory: "Oral hygiene",
    amount: 0,
  },
  {
    name: "Oral-B Gum & Enamel Repair Gentle Whitening Toothpaste",
    price: 4.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7858391/1/300x300.jpg",
    description: `Helps rejuvenate gums & repair enamel in 2 weeks

 It provides antibacterial action on gums
 
 It defends teeth against acid erosion & helps repair the enamel
 
 Toothpaste for sensitive teeth
 
 Gently removes and prevents stains, residues and tartar
 
 Oral-B Gum & Enamel Repair gentle whitening toothpaste for sensitive teeth helps rejuvenate gums and repair enamel in just 2 weeks. Its unique ActivRepair technology simultaneously helps rejuvenate gums with its antibacterial action, helps repair enamel and defends teeth against acid erosion.`,
    category: "Personal Care",
    subCategory: "Oral hygiene",
    amount: 0,
  },
  {
    name: "Aquafresh Little Teeth Soft Bristle 3-5 Years Kids Toothbrush",
    price: 2,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6581739/1/300x300.jpg",
    description: `Aquafresh Little Teeth Toothbrush for Kids 3-5 Years

WHAT IS AQUAFRESH LITTLE TEETH TOOTHBRUSH: It is a specially designed toothbrush for children between 3 and 5 years with a colourful design to help engage kids and make brushing more fun
WHY CHOOSE AQUAFRESH LITTLE TEETH TOOTHBRUSH: It has all the features that your kids will love, colourful animal clip-on bristle protectors help engage your child in brushing as the non-slip handle provides better control of the grip
HOW IT WORKS: Specially designed by dental experts, with a flexible neck that bends to help absorb excess pressure from brushing and soft bristles that clean teeth to help keep gums healthy
WHAT IS IT FOR: The brush helps protect little teeth. Little teeth are important - besides chewing, they enable proper speech, as well as jaw and facial development, they also act as space holders for big teeth waiting in the gums
EXPLORE OUR RANGE: Use Aquafresh Little Teeth toothbrush with Aquafresh Little Teeth toothpaste and you can download the Brush Time app to help kids brush for longer

As children get bigger, so do their mouths and hands. The Aquafresh Little Teeth toothbrush has a small head to brush harder-to-reach places, and soft bristles to gently clean and protect sensitive gums of those first teeth. The Aquafresh Little Teeth Kids toothbrush is specially designed by dental experts for children between 3 and 5 years old. Its colourful design is created to help engage kids and encourage them to start developing good oral care habits. The toothbrush comes with a colourful animal clip on bristle protector so you can choose from crocodile, bunny, shark or tiger to help make brush time fun for your little one. It is recommended that you store your child’s toothbrush in an upright position to air dry. The Aquafresh Little Teeth toothbrush is designed to stand on its own thanks to its suction foot. Use the Aquafresh Little Teeth toothbrush together with Aquafresh Little Teeth toothpaste, as it provides gentle care with low abrasion and the benefit of Sugar Acid Protection*, provided by fluoride. You can also make brush time more engaging with our free Aquafresh Brush Time app. It will help get your little one to brush their teeth for the recommended 2 minutes. Positive oral care habits they learn at a young age will help build habits that last. *Follow a healthy diet and brush twice daily with a fluoride toothpaste.

Trade Marks are owned by or licensed to the GSK group of companies.`,
    category: "Personal Care",
    subCategory: "Oral hygiene",
    amount: 0,
  },
  {
    name: "Oral-B 123 Classic Care Medium Manual Toothbrush",
    price: 1.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7576246/1/300x300.jpg",
    description: `Provides an effective clean

Reaches difficult areas to clean

Manual toothbrush for a solid cleaning of the teeth

An ergonomically designed handle provides comfort and control

Medium manual toothbrush

Oral-B 1-2-3 Classic Care manual toothbrush provides an effective clean. It reaches difficult areas to clean. It is a manual toothbrush that adapts to your profile. Wavy bristle tooth contours and reaches between teeth for a good cleaning of your teeth. An ergonomically designed handle provides comfort and control.`,
    category: "Personal Care",
    subCategory: "Oral hygiene",
    amount: 0,
  },
  {
    name: "Corsodyl Fresh Mint Gum Care Alcohol Free Daily Mouthwash ",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6582058/1/300x300.jpg",
    description: `Corsodyl Gum Care Mouthwash Alcohol Free Daily Fresh Mint 500ml

Daily fluoride mouthwash
Contains fluoride to strengthen teeth and prevent cavities
Chlorhexidine creates an anti-bacterial shield to help protect gums*
Helps to reduce bacteria which causes bad breath
Alcohol free 500ml Mouthwash
*when used twice daily in combination with tooth brushing

Gum problems can be caused by the build-up of plaque bacteria and if left untreated, can affect your oral health. Such bacteria build up on and around your teeth and can lead to bad breath. Corsodyl Fresh Mint Daily Mouthwash contains 0.06% chlorhexidine to help reduce the bacteria that causes bad breath. The mouthwash provides 24-hour gum protection against plaque build-up when used in combination with twice daily tooth brushing. It is clinically proven to remove more plaque than brushing alone and helps prevent further build up*. Used every day it helps protect teeth from plaque that can cause gum problems. It also contains fluoride to strengthen teeth and help prevent cavities. *when used twice daily in combination with tooth brushing.

Trade Marks are owned by or licensed to the GSK group of companies.`,
    category: "Personal Care",
    subCategory: "Oral hygiene",
    amount: 0,
  },
  {
    name: "Listerine Cool mint Mouthwash 1L",
    price: 4.25,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7648920/1/300x300.jpg",
    description: `LISTERINE® Cool Mint Mouthwash for a cleaner fresher mouth than brushing alone. The formula removes up to 97% of bad breath and plaque causing germs left after brushing. Just 30 seconds of rinsing, twice a day.

Used twice a day LISTERINE® Cool Mint Mouthwash is proven to:
1. Kill germs
Kills up to 97% of plaque causing and bad breath germs left behind after brushing
2. Reduce plaque
Reduces plaque by up to 56% more than brushing alone
3. Maintain healthy gums
Helps kill plaque causing germs above and below the gum line to keep gums healthy
4. Freshen Breath
Provides lasting fresh breath confidence

Packing - Recyclable

Listerine® is a registered trade mark.`,
    category: "Personal Care",
    subCategory: "Oral hygiene",
    amount: 0,
  },

  {
    name: "Sure Men Roll On Anti-Perspirant Deodorant, Sensitive",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6380917/1/300x300.jpg",
    description: `Sure Sentitive Anti-perspirant Deodorant Roll On 50 ml has been developed to give you cutting-edge protection against sweat and odour

    This deodorant features our unique MotionSense technology – the more you move, the more it protects
    
    Our roll-on deodorant gives you an all-day fresh, reassuring scent with sensual notes of sandalwood, patchouli and vanilla
    
    Get all-day freshness and 48h protection from sweat and odour with Sure Sentitive Anti-perspirant Deodorant Roll On
    
    This anti-perspirant roll on is dermatologically tested & alcohol-free*
    
    Sure Sensitive Anti-perspirant Deodorant Roll On allows you to always be protected for whatever happens. Sure, it won't let you down
    
    Sure Sensitive Anti-perspirant Deodorant Roll On has been developed to give you cutting-edge protection against sweat and odour. With Sure, you're always protected for whatever happens. Our roll-on deodorant also contains Sure’s innovative MotionSense technology. It works like this: unique microcapsules sit on the surface of your skin. When you move, friction breaks those microcapsules, and they release more fragrance. Every time you move, MotionSense keeps you fresh and free from odour. Whether you’re working hard in the office, playing hard out and about or just meeting up with friends, Sure Sensitive Anti-perspirant Deodorant Roll On will give you all the back-up you need. Sure. It won't let you down. Sure Sensitive has a reassuring scent with sensual notes of sandalwood, patchouli and vanilla. Each step, stride and sprint comes with an energising boost. And with protection for up to 48 hours, sweat and odour won’t stand in your way. You can keep going to where you want to be, and that bit farther. Feel fresh. Feel energised. Feel ready for anything. How to use: Before applying, ensure underarms are dry. Roll on in circular motions, checking coverage is even on both underarms. Avoid contact with eyes and broken skin.
    *ethyl alcohol`,
    category: "Personal Care",
    subCategory: "Hygiene products",
    amount: 0,
  },
  {
    name: "Champagne Mango Pack",
    price: 80,
    image: "../frontend/src/assets/items/Mango.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque diam, commodo et elementum et, dictum ac leo. Nulla sed efficitur velit. Maecenas congue metus sit amet tempor vulputate. Integer facilisis, tellus eu eleifend blandit, justo justo commodo orci, efficitur hendrerit turpis neque eget tortor. Vestibulum ac consequat dui. In hac habitasse platea dictumst. Curabitur consequat dui dapibus ipsum venenatis, rutrum posuere nisi ultrices. Nam vel mauris ornare, porta sem vel, finibus eros.",
    category: "Personal Care",
    subCategory: "Hygiene products",

    amount: 0,
  },
  {
    name: "Dove Anti-Perspirant Deodorant Stick, Invisible Dry",
    price: 2.75,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6381867/1/300x300.jpg",
    description: `Dove Invisible Dry Anti-perspirant Deodorant Stick provides up to 48 hours of sweat and odour protection

Our Invisible Dry deodorant is proven to leave no white marks on 100 colours

Containing our unique ¼ moisturising cream, this deodorant stick gives you beautifully soft and smooth underarms

This anti-perspirant is dermatologically tested and contains 0% alcohol to help reduce irritation

The clean, fresh scent of Dove Invisible Dry deodorant helps to keep you feeling fresh all day long

Our anti-perspirant deodorant helps your delicate underarm skin recover from irritation caused by shaving

With Dove Invisible Dry Anti-perspirant Deodorant Stick, you can step out in style wearing any colour you like. It has been tested on 100 different colours and it's proven to leave no white marks on any of them. And with up to 48 hours of anti-perspirant protection, you don't have to worry about underarm wetness either, you can do your thing, knowing that you'll smell great all day. Its dermatologically tested, alcohol-free formula contains our unique ¼ moisturising cream which helps delicate underarm skin to recover from the irritation that regular shaving can cause. The delicate scent keeps you feeling clean and fresh all day too. This deodorant for women provides the reliable underarm care you know and love, helping your underarms look and feel softer, smoother and even more beautiful than before. To get the best results from your Dove Invisible Dry Anti-perspirant Deodorant Stick, simply apply first thing in the morning to your underarm skin, preferably when it's cool and dry, gliding gently for even coverage. Enjoy underarm skin that feels beautiful and smells great thanks to Dove Invisible Dry stick deodorant. Pair it with your most colourful clothes and forget about those deodorant stains for good. No need to sweat about the small stuff - Dove Invisible Dry has your anti-perspirant protection covered.`,
    category: "Personal Care",
    subCategory: "Hygiene products",

    amount: 0,
  },
  {
    name: "Impulse Body Spray, Tease",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/6380931/1/300x300.jpg",
    description: `Impulse Tease Body Spray Deodorant 75ml from the number 1 female body spray in the UK

Dermatologically tested deodorant for women

Impulse Body Mist is gentle on your skin

Twist, Press, Spray the deodorant anywhere, anytime and Trust Your Impulse

An exciting fragrance with stimulating pineapple and exotic wood notes

This handy 75ml size body mist is perfect to take on the go

Impulse Tease Body Spray deodorant 75ml is part of Impulse’s body spray range featuring a variety of exciting and fresh fragrances to suit your every impulse. This perfect 75ml size means it easily fits in your backpack and can be enjoyed at school, after the gym or just on the go. Enjoy this fragrance anytime, anywhere and Trust Your Impulse.
Tease is an addictive scent with hints of tempting fruits and delicious undertones. With a teasing modern and fruity top notes such as pineapple, mandarin and red fruits. This is complemented by transparent freshness of forbidden fruits and delicate flowers such as rose, peach blossom and pink peony, ending with sensual notes of vanilla sorbet and creamy liquid musk. An exciting fragrance with stimulating pineapple and exotic wood notes, this special fragrance will make you feel revitalized, and fresh to suit your every Impulse.
Impulse is currently the number one female body spray in the UK, you are guaranteed to turn heads with this fantastic fragrance. Be super careful not to spray anywhere near your eyes and make sure to avoid broken or irritated skin. Hold the can 15cm away from the body. Simply twist the top and press in short bursts to release the fragrance.`,
    category: "Personal Care",
    subCategory: "Hygiene products",

    amount: 0,
  },
  {
    name: "Gillette Fusion5 ProGlide Razor For Men + 3 Blades",
    price: 14,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7903096/1/300x300.jpg",
    description: `Gets virtually every hair effortlessly

Razor with 5 anti-friction blades for a close, long-lasting shave

FlexBall technology responds to your contours for a comfortable shave

Enhanced lubrastrip (vs. Fusion5)

Precision trimmer for hard-to-reach places and styling facial hair

Microfins that gently stretch and smooth skin for a close shave

The Gillette ProGlide men's razor with FlexBall technology responds to contours for uncompromising closeness and comfort. With its blades spaced closely together for incredible comfort and a precision trimmer on the back, you can dare to get close.`,
    category: "Personal Care",
    subCategory: "Hygiene products",

    amount: 0,
  },
  {
    name: "Gillette Blue II Plus Slalom Disposable Razors",
    price: 3.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7078398/1/300x300.jpg",
    description: `Less Razor burn vs. BlueII without lubrastrip

Men's disposable razor with 2 long lasting chromium coating blades

Water-activated Lubrastrip provides smooth glide

30° pivoting head which adjusts to the contours of the face

Easy Grip handle for great manoeuverability

Gillette’s BlueII Plus Slalom men's disposable razor has 2 long lasting blades with chromium coating, so you don’t have to change your razor as often. It has a Lubrastrip that provides a smooth glide. The razor features a pivot head that adjust to the contours of your face. It also has an Easy Grip handle for great manoeuverability.`,
    category: "Personal Care",
    subCategory: "Hygiene products",

    amount: 0,
  },

  {
    name: "Accessorize Lovelily Eau de Parfum Natural Spray ",
    price: 14,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7879127/1/300x300.jpg",
    description: `Lovelily Eau de Parfum Natural Spray`,
    category: "Personal Care",
    subCategory: "Perfumery",
    amount: 0,
  },
  {
    name: "Calvin Klein CKIN2U Her Eau de Toilette Spray ",
    price: 30,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7922664/1/300x300.jpg",
    description: `Eau de toilette spray.`,
    category: "Personal Care",
    subCategory: "Perfumery",
    amount: 0,
  },
  {
    name: "Calvin Klein Eternity for Men Eau de Toilette Spray",
    price: 28,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7723112/1/300x300.jpg",
    description: `Eau de Toilette Spray`,
    category: "Personal Care",
    subCategory: "Perfumery",
    amount: 0,
  },
  {
    name: "Calvin Klein Obsession Eau de Parfum Spray",
    price: 35,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7922074/1/300x300.jpg",
    description: `Obsession Eau de Parfum Spray

Only authorized retailers are permitted to sell this product.`,
    category: "Personal Care",
    subCategory: "Perfumery",
    amount: 0,
  },
  {
    name: "Charlie Blue Eau De Toilette",
    price: 5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7922397/1/300x300.jpg",
    description: `Charlie Blue Eau De Toilette`,
    category: "Personal Care",
    subCategory: "Perfumery",
    amount: 0,
  },
  {
    name: "Charlie Red Eau De Toilette Natural Spray",
    price: 5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7922390/1/300x300.jpg",
    description: `Charlie Red Eau De Toilette Natural Spray`,
    category: "Personal Care",
    subCategory: "Perfumery",
    amount: 0,
  },

  {
    name: "Sainsbury's Wild Bird Sunflower Hearts",
    price: 2.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7872283/1/300x300.jpg",
    description: `A complementary feed for wild birds

 

Suitable for a wide variety of wild birds 

Sunflower Hearts provide a high level of energy and will help to attract a wide range of wild birds to your garden, including blue tits, robins, sparrows, starlings and woodpeckers. 

 

Feeding guide 

These sunflower hearts can be used in seed feeders, on a bird table and also spread on the ground. It is recommended that you feed wild birds all year round, through the colder winter months and throughout the spring and summer to help the adult birds raise their young. Feed from a sheltered location that offers protection from bad weather and keep well away from shrubs that may harbour predators. Please keep packaging out of reach of children.  

 

Not for human consumption.`,
    category: "Pet Care",
    subCategory: "Pet Care",
    amount: 0,
  },
  {
    name: "Felix with Salmon & Trout in Jelly",
    price: 1,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8067030/1/300x300.jpg",
    description: `Complete pet food for adult cats.

100% Complete and Balanced

Vitamins D & E

Source of omega 6 fatty acid

No added artificial flavourings, preservatives or colourants

Clever cats know what they want, especially at mealtimes! That's why each recipe in this Felix® range of meals is made with quality ingredients and packed with deliciously tender pieces in succulent jelly that your cat can really get his teeth into. Felix - just irresistible!
That's not all!
These tasty meals are also a source of essential Omega-6 fatty acids with the right combination of vitamins to satisfy 100% of your cat's daily needs.

® Reg. Trademark of Société des Produits Nestlé S.A

Green Dot

Mobius Loop`,
    category: "Pet Care",
    subCategory: "Pet Care",
    amount: 0,
  },
  {
    name: "Pooch & Mutt Adult Complete Dry Food ",
    price: 6.4,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/8044812/1/300x300.jpg",
    description: `Vet approved, complete, dry, grain-free & junk-free, naturally hypoallergenic health food for adult dogs.

For the pampered pooches in the pack, we've developed this stand-out Superfood dry diet for adult dogs. Containing a high meat content from lean chicken and a host of fresh and natural nutritious vegetables including kale, spinach and cranberries - this food is high in vitamins, minerals and antioxidants to improve immunity and provide optimal health. With omega 3 fatty acids and glucosamine for joint protection as well as chamomile for its naturally calming effect as part of our added Calm+Care supplement, this food has also been boosted with prebiotics to help aid healthy digestion and to promote overall physical and mental health, your pet’s diet may soon put yours to shame!

This delicious recipe is packed with natural goodness to keep your pooch feeling great both on the inside and out, helping you to be confident that you're giving them everything that they nutritionally need to live their best life.

Key Ingredients -
Chicken with sweet potato, kale, spinach, blackcurrant, cranberry
Digestion: prebiotics, fibre, linseed, activated charcoal
Skin & Coat: salmon oil, omega 3, seaweed, zinc, linseed, prebiotics
Joints & Mobility: glucosamine, omega 3, rosehip, olive extract, yucca
Behaviour: chamomile, L-tryptophan
Overall Health: superfoods, antioxidants, vitamins, minerals

With an Adult Dog, Puppy, Senior and Small Dog option, our Superfoods range caters to all and gives you the ability to feed a premium diet for the duration of your beloved pet’s life. Fresh and filling, dogs can’t get enough of the meaty taste in this range and even the fussiest are soon won over.

This food is formulated with no added artificial flavours, colours or preservatives, with no grain, cereal or gluten and with non-GM produce. It is produced in an establishment where grains etc may be present, so there is a tiny chance that some may have snuck in, but we do everything in our power to prevent this.

Created by a small Great British company.
We know that a healthy mind is just as important as a healthy body, but should that thinking be limited to humans? We've created an enhanced range of meals, treats and supplements that does good and tastes good, to give your pet the optimal ingredients needed to boost their mood and behaviour paw in paw with their physical health. And by delivering our message in the clearest way possible, we give you the peace of mind you need to better support them.

Accredited by Peta and the Ethical Companies Organisation.

Good Mood Food For Dogs
Join the Pooch pack community on Facebook, Twitter & Instagram for updates, competitions and lots of dog pics @poochandmutt

Good Shopping Guide - Ethical Company`,
    category: "Pet Care",
    subCategory: "Pet Care",
    amount: 0,
  },
  {
    name: "Purina One Sensitive Dry Cat Food Turkey And Rice",
    price: 5.5,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7510115/1/300x300.jpg",
    description: `Visible health for today and tomorrow

  Dual defence
  
  For a healthy digestion
  
  Helps food tolerance
  
  High digestibility
  
  Rich in turkey and rice
  
  No added colourants, artificial flavours and artificial preservatives
  
  Complete pet food for adult cats
  
  Purina ONE® Sensitive is specially designed for the health and well-being of cats with sensitive digestion and delicate appetite
  Purina ONE® Bifensis® is a unique nutritional formula with beneficial functional bacteria scientifically proven to help support your cat's natural defences from the inside out.
  
  Developed by Purina vets and nutritionists, Purina ONE® Bifensis® contains, along with the beneficial functional bacteria, all the key nutrients your cat needs, including Omega 6 fatty acids. Its dual defence formula works in parallel on the inside, by helping to support your cat's natural antibody production, and on the outside by helping to maintain a healthy skin and coat.
  
  Firm stools with 24%* less odour in 14 days thanks to natural fibres**
  *Purina research **see composition
  Selected protein sources to help food tolerance
  High digestibility thanks to high quality ingredients
  Made with tasty ingredients to stimulate cat's appetite
  Omega 6 fatty acids and zinc help support healthy skin and shiny coat
  
  ® Reg. Trademark of Société des Produits Nestlé S.A
  
  Green Dot`,
    category: "Pet Care",
    subCategory: "Pet Care",
    amount: 0,
  },
  {
    name: "Petface Squeaky Doggy Bone Dog Toy",
    price: 4,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7992276/1/300x300.jpg",
    description: `Cuddle & squeak

The pet product experts

Petface and the Pf logo are registered trademarks.`,
    category: "Pet Care",
    subCategory: "Pet Care",
    amount: 0,
  },
  {
    name: "Petface Super Tennis Balls Dog Toys x3 6cm",
    price: 3,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7991830/1/300x300.jpg",
    description: `Dogs are playful by nature; this dog toy will give your pet hours of fun and can help to keep them fit and healthy.

The pet product experts

Petface and the PF logo are registered trademarks.`,
    category: "Pet Care",
    subCategory: "Pet Care",
    amount: 0,
  },
];

export default products;
