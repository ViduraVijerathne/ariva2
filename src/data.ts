export type Destination={name:string;region:"Highlands"|"Heritage"|"Wildlife"|"Coast";image:string;activities:string[];stays:string[];wellness:string[]};
const raw:[string,Destination["region"],string,string,string][]=[
["Nuwara Eliya","Highlands","Pink Post Office|Gregory Park|Horton Plains|Tea Factory Visit|Pidurutalagala Hike|Moon Plains|Lover’s Leap Waterfall|Seetha Amman Kovil|Evening High Tea","The Grand Hotel|Araliya Green Hills|Tea Trails","Highland Herbal Tea Spa|Heated Hydrotherapy"],
["Ella","Highlands","Ella Rock|Little Adam’s Peak|Nine Arches Bridge|Ravana Caves|Ravana Waterfall|Kithal Ella Waterfall|Nil Diya Pokuna|Secret Ella Waterfall|Sri Lankan Cooking Experience|Club Nights","98 Acres Resort|Ella Jungle Resort|Zion View","Ayurvedic Steam & Herbal Bath|Mountain View Spa"],
["Sigiriya","Heritage","Sigiriya Rock Fortress|Pidurangala Rock|Village Safari|Village Food Experience|Hot Air Balloon Ride|Golf Club|Silk & Saree Experience","Heritance Kandalama|Aliya Resort & Spa|Water Garden Sigiriya","Traditional Ayurveda|Shirodhara Spa"],
["Dambulla","Heritage","Dambulla Cave Temple|Dambulla Market|Minneriya & Kaudulla Safari|Lunch at the Bus Restaurant|Cultural Dance Performance|Two Ancient Capitals|Wilpattu National Park excursion","Heritance Kandalama|Lakeside Resort|Eco Hostel","Ayurveda & Herbal Spa"],
["Kandy","Highlands","Temple of the Sacred Tooth|Peradeniya Botanical Gardens|Cultural Dance Performance|Hanthana Mountain Hike|Udawattakele Forest Safari|Spice Garden|Gem Museum|Wood Carving Centre|Pinnawala Elephant Orphanage|Evening High Tea","Victoria Golf Resort, Digana|Serendib Signature|Hilltop Hostel","Royal Ayurveda & Herbal Spa"],
["Wilpattu","Wildlife","Wilpattu Safari|Leopard tracking|Villu and wetland exploration","Wilpattu Safari Camp|Jungle Eco Lodge|Wellness Retreat Nearby","Open-Air Forest Wellness|Forest Massage"],
["Tissamaharama & Yala","Wildlife","Yala National Park Safari|Bundala Bird Safari|Udawalawe Elephant Safari|Tissa Lake Boat Safari|Tissamaharama Temple","Lakeside Stay, Tissa|Yala Safari Resort|Wellness Retreat, South","Safari Wellness|Cooling Spa"],
["Udawalawe","Wildlife","Udawalawe Safari|Wild elephant herd watching|Elephant Transit Home Feeding|Bundala Birdwatching excursion","Udawalawe Safari Camp|Garden Lodge, South|Wellness Stay Nearby","Herbal Recovery Massage|Wellness treatments"],
["Bundala","Wildlife","Bundala Birdwatching Safari|Coastal Wetlands exploration|Flamingo and migratory bird watching","Eco Lagoon Stays|Coastal Bungalow|Nearby Hostels","Coastal Wellness|Aromatherapy"],
["Negombo","Coast","Dry Fish Market|St. Mary’s Church|Negombo Lagoon Boat Safari|Muthurajawela Marsh Safari|Kitulgala White Water Rafting excursion","Beachside Resort, Negombo|Lagoon Boutique Stay|Airport Transit Hostel","Coastal Ayurveda|Aromatherapy"],
["Yapahuwa & Kumana","Heritage","Yapahuwa Rock Fortress|Skydiving inquiry|Para Jumping inquiry|Ridi Viharaya|Kumana Bird Safari","Heritage Lodge|Countryside Bungalow|Nearby Hostels","Herbal Village Wellness"],
["Trincomalee","Coast","Whale Watching|Surfing for Beginners|Pigeon Island Snorkeling|Kanniya Hot Springs|Koneswaram Kovil|Jungle Beach|Nilaveli Beach","Nilaveli Beach Resort|Coastal Boutique Hotel|Beach Hostel","Hot Springs|Coastal Spa"],
["Mahiyanganaya","Heritage","Dambana Vedda Village|Indigenous community-guided cultural experience","Riverside Eco Lodge|Countryside Stay|Nearby Hostels","Indigenous Herbal Wellness"],
["Ratnapura","Highlands","Traditional Gem Mine visit|Gravel washing and gem sorting|Gem cutting and polishing experience","Hill Country Bungalow|Riverside Stay|Nearby Hostels","Gem City Ayurveda"],
["Sinharaja","Wildlife","Guided Rainforest Safari|Endemic bird watching|Wildlife and waterfall walks","Rainforest Eco Lodge|Jungle Bungalow|Nearby Homestay","Rainforest Wellness|Herbal Bath"],
["Kalpitiya","Coast","Kitesurfing|Para Surfing|Lagoon water sports","Beachfront Kite Resort|Lagoon Eco Lodge|Nearby Hostels","Coastal Wind & Wellness"],
["Bentota","Coast","Madu River Safari|Sea Turtle Hatchery","Riverside Resort, Bentota|Beach Boutique Hotel|Nearby Hostels","Riverside Ayurveda Spa"],
["Galle","Coast","Galle Dutch Fort|Seafood Lunch|Stilt Fishermen|Surfing for Beginners|Thalpe Beach|Mihiripenna Beach|Unawatuna Beach|Blue Beach|Evening High Tea","Fort Heritage Villa|Beachfront Boutique Hotel|Galle Hostel","Colonial Spa|Ayurveda"],
["Mirissa","Coast","Whale Watching|Snorkeling|Coconut Tree Hill|Parrot Rock|Club Night at The Doctor’s House","Beachfront Resort, Mirissa|Surf Boutique Stay|Beach Hostel","Ocean Breeze Wellness"],
["Hiriketiya & Tangalle","Coast","Hiriketiya Surfing|Relax & Sunbathe|Hummanaya Blowhole|Kirinda|Rekawa Turtle Watch|Weligama Surfing|Evening High Tea, Tangalle","Bay Boutique Resort|Surf Villa, Hiriketiya|Beach Hostel","Surf & Yoga Wellness"],
["Arugam Bay","Coast","Expert Surfing|Club Nights","Surf Beach Resort|Boutique Surf Cabana|Surfer Hostel","Surf Recovery & Wellness"]
];
const images=["photo-1540202404-a2f29016b523","photo-1500534623283-312aade485b7","photo-1470770841072-f978cf4d019e","photo-1499856871958-5b9627545d1a","photo-1441974231531-c6227db76b6e","photo-1482938289607-e9573fc25ebb"];
export const destinations:Destination[]=raw.map(([name,region,activities,stays,wellness],i)=>({name,region,activities:activities.split("|"),stays:stays.split("|"),wellness:wellness.split("|"),image:`https://images.unsplash.com/${images[i%images.length]}?auto=format&fit=crop&w=1500&q=80`}));
export const chapters=[
{eyebrow:"01 / INTO THE HIGHLANDS",title:"Where the world\\nslows down.",desc:"Let the mist lift. Follow winding roads, forgotten waterfalls and the quiet rhythm of tea country.",image:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=85"},
{eyebrow:"02 / ANCIENT LEGACY",title:"Every stone\\nholds a story.",desc:"Explore sacred heritage, local culture and the traces of extraordinary island kingdoms.",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85"},
{eyebrow:"03 / INTO THE WILD",title:"Meet the\\nextraordinary.",desc:"A wilderness of elephants, elusive leopards, golden light and untamed beauty.",image:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2200&q=85"},
{eyebrow:"04 / FIND YOUR BLUE",title:"Where time\\nmeets the tide.",desc:"From Galle's timeless ramparts to Mirissa's ocean horizons, follow the coast.",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85"}
];
export const packages=[
{name:"Silver",sub:"Comfort, Flexibility & Value",features:["Flexible lunch arrangements","Comfortable sedan for two; adjusted for groups","English-speaking professional chauffeur","3–5 star hotels on half-board basis"],ideal:"For comfort, flexibility and value."},
{name:"Gold",sub:"Enhanced Comfort & Professional Guidance",features:["Sri Lankan or European-style buffet lunch","Comfortable sedan for two; adjusted for groups","Qualified licensed chauffeur-guide; language by request","Selected 5-star half-board hotels"],ideal:"For elevated comfort and expert local guidance."},
{name:"Platinum",sub:"Premium Comfort & Personalised Experiences",features:["Your preferred dining experience","Premium SUV for two; adjusted for groups","Qualified private guide in preferred language, subject to confirmation","5-star-plus and other premium accommodation"],ideal:"For premium comfort and personalised experiences."}
];
export const guides=[
{name:"Dilan Perera",language:"English · Sinhala",specialty:"Heritage & hill country"},
{name:"Nadeesha Fernando",language:"English · French",specialty:"Culture & cuisine"},
{name:"Sahan Wijesinghe",language:"English · German",specialty:"Wildlife & adventure"}
];