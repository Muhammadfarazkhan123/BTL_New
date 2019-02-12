(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true,
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});
			
		}
	});

	$(window).load(function(){

	});

})(jQuery, document, window);


function showMore1(){
    var head1 ='<h2 class="entry-title"><a>Distribution:-</a></h2><p style="text-align: justify">The whitefly thrives worldwide in tropical, subtropical, and less predominately in temperate habitats. Cold temperatures kill both the adults and the nymphs of the species.</p>'
    var head2='<h2><a>Host Plants:-</a></h2><p style="text-align: justify">Tetraleurodes ursorum, Trialeurodes abutiloneus, Trialeurodes vaporariorum, Trialeurodes floridensis, Abelmoschlus manihot, Aleurodicus disperses, Abelmoschus moschatus, Aleurodicus disperses, Abrus precatorius, Acaudaleyrodes rachipora, Abutilon foliosum, Aleurolobus marlatti, Abutilon theophrasti Medic, Trialeurodes abutiloneus, Abutilon sp, Acacia aneura F. Muell. ex Benth., Aleuromarginatus moundi, Acacia aneura etc.</p>'
    var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Green Lacewing, Big Eyed Bug, Lady Bird Beetle</p>'
   var text=head1+head2+head3
    document.getElementById("more1").innerHTML=text

    document.getElementById("show1").style.display='none'
    document.getElementById("hide1").style.display='block'
    
}

function hide1(){
    document.getElementById("more1").innerHTML=""
    document.getElementById("hide1").style.display='none'
    document.getElementById("show1").style.display='block'
}


function showMore2(){
    var head1 ='<h2 class="entry-title"><a>Distribution:-</a></h2><p style="text-align: justify">This species is believed to be native to Belize, Costa Rica, Guatemala and Mexico. It has spread to certain Caribbean Islands, Hawaii and French Guiana, and also to parts of Southeast Asia, including India, Indonesia and Thailand. It was discovered in Bradenton, Florida, in the United States in 1998 feeding on hibiscus, and four years later it had been detected on eighteen different plant species in the state. It has since been found in Texas and California and it is likely to become more widely distributed on the Gulf Coast, and perhaps also in crops grown under glass further north in the United States.</p>'
    var head2='<h2><a>Host Plants:-</a></h2><p style="text-align: justify">The mealybug feeds on over 55 plants in more than 25 genera. Economically important host plants include papaya, avocado, citrus, mango, cherry and pomegranate, as well as hibiscus, cotton, tomato, eggplant, peppers, beans, peas and sweet potato. The mango is more affected by the mango mealybug.</p>'
    var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Green Lacewing, Big Eyed Bug, Lady Bird Beetle</p>'
   var text=head1+head2+head3
    document.getElementById("more2").innerHTML=text

    document.getElementById("show2").style.display='none'
    document.getElementById("hide2").style.display='block'
    
}

function hide2(){
    document.getElementById("more2").innerHTML=""
    document.getElementById("hide2").style.display='none'
    document.getElementById("show2").style.display='block'
}

function showMore3(){
    var p =" which more recent authors do not separate from the Pexicopiinae and usually even do not consider a distinct tribe ('Chelariini') within them. Its synanthropic habits allow it to be easily transported in international grain shipments. Its common name refers to Angoumois, the pre-revolutionary province of France from which it was first scientifically described by G.-A. Olivier in 1789. The province was transformed into the present-day Charente département the following year, and as it has since turned out the species is not originally native to western France."
    var head1 ='<h2 class="entry-title"><a>Distribution:-</a></h2><p style="text-align: justify">It is found in Europe, Australia, Benin, Brazil, China, Indonesia, Japan and Samoa.</p>'
    var head2='<h2><a>Host Plants:-</a></h2><p style="text-align: justify">Its caterpillars feed on grains of Asian rice (Oryza sativa), pearl millet (Pennisetum glaucum), sorghum (Sorghum bicolor), wheats (Triticum) and maize (Zea mays).</p>'
    var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Green Lace Wing</p>'
   var text=p+head1+head2+head3
    document.getElementById("more3").innerHTML=text

    document.getElementById("show3").style.display='none'
    document.getElementById("hide3").style.display='block'
    
}

function hide3(){
    document.getElementById("more3").innerHTML=""
    document.getElementById("hide3").style.display='none'
    document.getElementById("show3").style.display='block'
}

function showMore4(){
    // var p =" which more recent authors do not separate from the Pexicopiinae and usually even do not consider a distinct tribe ('Chelariini') within them. Its synanthropic habits allow it to be easily transported in international grain shipments. Its common name refers to Angoumois, the pre-revolutionary province of France from which it was first scientifically described by G.-A. Olivier in 1789. The province was transformed into the present-day Charente département the following year, and as it has since turned out the species is not originally native to western France."
    var head1 ='<h2 class="entry-title"><a>Life Cycle:-</a></h2><p style="text-align: justify">Most species overwinter as eggs or adults. Eggs are inserted into leaf veins, shoots or stems of host plants. Wingless nymphs hatch from eggs in about 10 days and begin feeding on the tender new growth of their host plant. They develop through five stages (instars) over a period of 12 to 30 days, leaving shed skins in the feeding area. As nymphs grow larger, they develop wing pads. Most leafhoppers produce one generation per year, but some may develop up to six.</p>'
    var head2='<h2><a>Host Plants:-</a></h2><p style="text-align: justify"> Green Lacewing, Big Eyed Bug, Lady Bird Beetle</p>'
    // var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Predators include midges, lacewings, syrphid fly larvae, anthocorid bugs and ladybirds (ladybeetles). Several members of the Aphidiinae and Aphelinidae wasp families are parasitoids of aphids. One which shows promise as a biocontrol agent is Aphelinus asychis.</p>'
   var text=head1+head2
    document.getElementById("more4").innerHTML=text

    document.getElementById("show4").style.display='none'
    document.getElementById("hide4").style.display='block'
    
}

function hide4(){
    document.getElementById("more4").innerHTML=""
    document.getElementById("hide4").style.display='none'
    document.getElementById("show4").style.display='block'
}
function showMore5(){
    // var p =" which more recent authors do not separate from the Pexicopiinae and usually even do not consider a distinct tribe ('Chelariini') within them. Its synanthropic habits allow it to be easily transported in international grain shipments. Its common name refers to Angoumois, the pre-revolutionary province of France from which it was first scientifically described by G.-A. Olivier in 1789. The province was transformed into the present-day Charente département the following year, and as it has since turned out the species is not originally native to western France."
    var head1 ='<h2 class="entry-title"><a>Distribution:-</a></h2><p style="text-align: justify">It is found in tropical and temperate regions throughout the world except extreme northern areas. It is common in North and South America, Central Asia, Africa, Australia, Brazil, East Indies, Mexico and Hawaii and in most of Europe.</p>'
    var head2='<h2><a>Host Plants:-</a></h2><p style="text-align: justify">The cotton aphid has a very wide host range with at least 60 host plants being known in Florida and perhaps 700 worldwide. Among cucurbit vegetables, it can seriously affect watermelons, cucumbers, cantaloupes, squash and pumpkin. Other vegetable crops attacked include pepper, eggplant, okra and asparagus. It also affects citrus, cotton and hibiscus.</p>'
    var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Green Lacewing, Big Eyed Bug, Lady Bird Beetle</p>'
   var text=head1+head2+head3
    document.getElementById("more5").innerHTML=text

    document.getElementById("show5").style.display='none'
    document.getElementById("hide5").style.display='block'
    
}

function hide5(){
    document.getElementById("more5").innerHTML=""
    document.getElementById("hide5").style.display='none'
    document.getElementById("show5").style.display='block'
}

function showMore6(){
    var p ="  Although several groups of egg parasitoids are commonly employed for biological control throughout the world, Trichogramma spp. have been the most extensively studied. More than a thousand papers have been published on Trichogramma species, and they are the most used biological control agents in the world."
    var head1 ='<h2 class="entry-title"><a>Description:-</a></h2><p style="text-align: justify">Trichogramma are difficult to identify because they are so small and have generally uniform morphological characters. Also, certain physical characteristics such as body color and the number and length of body hairs can vary with body size, season, rearing temperature and the host on which the adult was reared. </p>'
    var head2='<h2><a>Parasitism:-</a></h2><p style="text-align: justify">To locate host eggs, adult females use chemical and visual signals, such as egg shape and colour. After she finds a suitable egg, an experienced female attempts to determine if the egg has previously been parasitized, using her ovipositor and antennal drumming (tapping on the egg surface). Females also use antennal drumming to determine the size and quality of the target egg, which determines the number of eggs the female will insert.A single female can parasitize up to 10 host eggs a day.</p>'
    // var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Predators include midges, lacewings, syrphid fly larvae, anthocorid bugs and ladybirds (ladybeetles). Several members of the Aphidiinae and Aphelinidae wasp families are parasitoids of aphids. One which shows promise as a biocontrol agent is Aphelinus asychis.</p>'
   var text=p+head1+head2
    document.getElementById("more6").innerHTML=text

    document.getElementById("show6").style.display='none'
    document.getElementById("hide6").style.display='block'
    
}

function hide6(){
    document.getElementById("more6").innerHTML=""
    document.getElementById("hide6").style.display='none'
    document.getElementById("show6").style.display='block'
}

function showMore7(){
    // var p =" which more recent authors do not separate from the Pexicopiinae and usually even do not consider a distinct tribe ('Chelariini') within them. Its synanthropic habits allow it to be easily transported in international grain shipments. Its common name refers to Angoumois, the pre-revolutionary province of France from which it was first scientifically described by G.-A. Olivier in 1789. The province was transformed into the present-day Charente département the following year, and as it has since turned out the species is not originally native to western France."
    var head1 ='<h2 class="entry-title"><a>Description:-</a></h2><p style="text-align: justify">Green lacewings are delicate insects with a wingspan of 6 to over 65 mm, though the largest forms are tropical. They are characterized by a wide costal field in their wing venation, which includes the cross-veins. The bodies are usually bright green to greenish-brown, and the compound eyes are conspicuously golden in many species.</p>'
    var head2='<h2><a>Food source:-</a></h2><p style="text-align: justify">Larvae have sickle-shaped jaws (mandibles) with which they pierce prey and suck out body juices. Adults have chewing mouthparts. Adults are poor fliers, active at night and feed on pollen, nectar and honeydew (the exudate of aphids and other sucking insects). Some species are predaceous as adults to a limited extent. The larvae, called “aphid lions”, are extremely carnivorous and predaceous on many soft-bodied insects and mites, including insect eggs, thrips, mealybugs, immature whiteflies and small caterpillars. Larvae have sickle-shaped jaws that contain tubes with which they can inject prey with a paralyzing venom and then suck out the body fluids. They can consume over 200 aphids or other prey per week.</p>'
    // var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Predators include midges, lacewings, syrphid fly larvae, anthocorid bugs and ladybirds (ladybeetles). Several members of the Aphidiinae and Aphelinidae wasp families are parasitoids of aphids. One which shows promise as a biocontrol agent is Aphelinus asychis.</p>'
   var text=head1+head2
    document.getElementById("more7").innerHTML=text

    document.getElementById("show7").style.display='none'
    document.getElementById("hide7").style.display='block'
    
}

function hide7(){
    document.getElementById("more7").innerHTML=""
    document.getElementById("hide7").style.display='none'
    document.getElementById("show7").style.display='block'
}


function showMore8(){
    // var p =" which more recent authors do not separate from the Pexicopiinae and usually even do not consider a distinct tribe ('Chelariini') within them. Its synanthropic habits allow it to be easily transported in international grain shipments. Its common name refers to Angoumois, the pre-revolutionary province of France from which it was first scientifically described by G.-A. Olivier in 1789. The province was transformed into the present-day Charente département the following year, and as it has since turned out the species is not originally native to western France."
    var head1 ='<h2 class="entry-title"><a>Description:-</a></h2><p style="text-align: justify">Coccinellids are often conspicuously coloured yellow, orange, or red with small black spots on their wing covers, with black legs, heads and antennae. There is, however, great variation in these colour patterns. Most coccinellids have round to elliptical, dome-shaped bodies with six short legs. Depending on the species, they can have spots, stripes, or no markings at all. Seven-spotted coccinellids are red or orange with three spots on each side and one in the middle; they have a black head with white patches on each side.</p>'
    var head2='<h2><a>Food source:-</a></h2><p style="text-align: justify"> Mouthparts are for chewing. Larvae and adults feed primarily on aphids, but they will also feed on scales, eggs of caterpillars and other soft-bodied insects and mites. Adults occasionally feed on nectar, pollen and honeydew (exudate of aphids and other sucking insects). Adults disperse seeking feeding and reproduction sites.</p>'
    // var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Predators include midges, lacewings, syrphid fly larvae, anthocorid bugs and ladybirds (ladybeetles). Several members of the Aphidiinae and Aphelinidae wasp families are parasitoids of aphids. One which shows promise as a biocontrol agent is Aphelinus asychis.</p>'
   var text=head1+head2
    document.getElementById("more8").innerHTML=text

    document.getElementById("show8").style.display='none'
    document.getElementById("hide8").style.display='block'
    
}

function hide8(){
    document.getElementById("more8").innerHTML=""
    document.getElementById("hide8").style.display='none'
    document.getElementById("show8").style.display='block'
}


function showMore9(){
    // var p =" which more recent authors do not separate from the Pexicopiinae and usually even do not consider a distinct tribe ('Chelariini') within them. Its synanthropic habits allow it to be easily transported in international grain shipments. Its common name refers to Angoumois, the pre-revolutionary province of France from which it was first scientifically described by G.-A. Olivier in 1789. The province was transformed into the present-day Charente département the following year, and as it has since turned out the species is not originally native to western France."
    var head1 ='<h2 class="entry-title"><a>Description:-</a></h2><p style="text-align: justify">Big-eyed bugs are true bugs in the order Hemiptera. The two most common species are Geocoris pallens and Geocoris punctipes. Both are predators and occur in many habitats, including fields, gardens, and turf grass. Adult big-eyed bugs are small (about 3 mm (0.12 in)) black, gray, or tan with proportionately large eyes. Eggs are deposited singly or in clusters on leaves near potential prey.</p>'
    var head2='<h2><a>Food source:-</a></h2><p style="text-align: justify">Nymphs and adults are general predators, feeding on small caterpillars and caterpillar eggs, fleahoppers, lygus bugs, mites, thrips, whiteflies. They will also feed on various seeds and suck plant juices but are not considered to be injurious to plants. They occur in most crops and landscapes.</p>'
    // var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Predators include midges, lacewings, syrphid fly larvae, anthocorid bugs and ladybirds (ladybeetles). Several members of the Aphidiinae and Aphelinidae wasp families are parasitoids of aphids. One which shows promise as a biocontrol agent is Aphelinus asychis.</p>'
   var text=head1+head2
    document.getElementById("more9").innerHTML=text

    document.getElementById("show9").style.display='none'
    document.getElementById("hide9").style.display='block'
    
}

function hide9(){
    document.getElementById("more9").innerHTML=""
    document.getElementById("hide9").style.display='none'
    document.getElementById("show9").style.display='block'
}


function showMore0(){
    // var p =" which more recent authors do not separate from the Pexicopiinae and usually even do not consider a distinct tribe ('Chelariini') within them. Its synanthropic habits allow it to be easily transported in international grain shipments. Its common name refers to Angoumois, the pre-revolutionary province of France from which it was first scientifically described by G.-A. Olivier in 1789. The province was transformed into the present-day Charente département the following year, and as it has since turned out the species is not originally native to western France."
    var head1 ='<h2 class="entry-title"><a>Description:-</a></h2><p style="text-align: justify">Encarsia formosa is a tiny parasitic wasp that parasitizes whiteflies. It was the first biological control agent developed for use in greenhouses. Adults are black with yellow abdomen, less than 1 mm (1/20 inch) long (they do not sting). Larval stages live entirely inside immature whiteflies, which darken and turn black as the parasites develop inside.</p>'
    var head2='<h2><a>Distribution:-</a></h2><p style="text-align: justify">This wasp is a native of India and Vietnam. It has been introduced to and has established itself in Barbados, Cuba, Jamaica, Mexico, Salvador, Venezuela, the USA (Florida, Texas and Hawaii), Kenya and Oman, for the purpose of controlling citrus blackfly.</p>'
    // var head3='<h2><a>Biocontrol:-</a></h2><p style="text-align: justify">Predators include midges, lacewings, syrphid fly larvae, anthocorid bugs and ladybirds (ladybeetles). Several members of the Aphidiinae and Aphelinidae wasp families are parasitoids of aphids. One which shows promise as a biocontrol agent is Aphelinus asychis.</p>'
   var text=head1+head2
    document.getElementById("more0").innerHTML=text

    document.getElementById("show0").style.display='none'
    document.getElementById("hide0").style.display='block'
    
}

function hide0(){
    document.getElementById("more0").innerHTML=""
    document.getElementById("hide0").style.display='none'
    document.getElementById("show0").style.display='block'
}