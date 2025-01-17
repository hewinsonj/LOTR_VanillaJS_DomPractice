console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id','middle-earth')
	

	for (let i = 0; i < lands.length ; i++){
		const artTag= document.createElement('article')
		artTag.setAttribute('id', lands[i])
		const newH1= document.createElement('h1')
		newH1.innerText= lands[i]
		artTag.appendChild(newH1)
		middleEarth.appendChild(artTag)
	}
	document.body.appendChild(middleEarth)
}


// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	const hobbitList= document.createElement('ul')
	for (let i = 0; i < hobbits.length ; i++){
		const hobbitNames= document.createElement('li')
		hobbitNames.setAttribute('class', 'hobbit')
		hobbitNames.setAttribute('id', hobbits[i])
		hobbitNames.innerText= hobbits[i]
		hobbitList.appendChild(hobbitNames)
		}
	const shire= document.getElementById('The-Shire')
	shire.appendChild(hobbitList)
}

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
	const theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	const frodo = document.querySelector('ul')
	const hobbitLi = frodo.children[0]
	hobbitLi.appendChild(theRing)
} 


//   keepItSecretKeepItSafe()

	// create a div with an id of `'the-ring'`

	// give the div a class of `'magic-imbued-jewelry'`

	// add the ring as a child of `Frodo`


// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	const badList= document.createElement('ul')
	for (let i = 0; i < baddies.length ; i++){
		const badNames = document.createElement('li')
		badNames.setAttribute('class', 'baddy')
		badNames.innerText= baddies[i]
		badList.appendChild(badNames)

		}
		const mordor= document.getElementById('Mordor')
		mordor.appendChild(badList)
	}

	// display an unordered list of baddies in Mordor

	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor


// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	const aside = document.createElement('aside')
	const buds = document.createElement('ul')
	for(let i = 0; i < buddies.length ; i ++){
		const budNames = document.createElement('li')
		budNames.setAttribute('class', 'buddd')
		budNames.setAttribute('id', buddies[i])
		budNames.innerText= buddies[i]
		buds.appendChild(budNames)
	}
	const riv= document.getElementById('Rivendell')
	aside.appendChild(buds)
	riv.appendChild(aside)

	// create an `aside` tag

	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	const riv= document.getElementById('Rivendell')
	const shi= document.getElementById('The-Shire')

	const hobbitP = shi.children[1]
	riv.appendChild(hobbitP)


	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	let strider = document.getElementById('Strider')
	strider.innerText = 'Aragorn'

	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party

	const theFellowship = document.createElement('div')
	const riv = document.getElementById('Rivendell')
	riv.appendChild(theFellowship)
	const hobBud = document.querySelectorAll('.hobbit') 
	const buddbudd = document.querySelectorAll('.buddd')
	const ulFellowship = document.createElement('ul')
	ulFellowship.setAttribute('class', 'fellowShip')
	theFellowship.appendChild(ulFellowship)

	for( i = 0; i < hobBud.length; i ++ ){
	ulFellowship.appendChild(hobBud[i])
	alert(`${hobBud[i].innerText} has joined the Fellowship`)
	}
	for( i = 0; i < buddbudd.length; i ++ ){
	ulFellowship.appendChild(buddbudd[i])
	alert(`${buddbudd[i].innerText} has joined the Fellowship`)
	}
	
	


	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	const bud = document.querySelectorAll('.buddd')
	bud[0].innerText = ('Gandalf the White')
	bud[0].style.backgroundColor = 'white'
	bud[0].style.border = 'solid grey'

	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	alert('*PPPPHHHHH* THE HORN OF GONDOR HAS BEEN BLOWN!')
	document.getElementById('Boromir').remove()




	

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	const frodo = document.getElementById('Frodo Baggins')
	const sam = document.getElementById('Samwise "Sam" Gamgee')
	const mordor = document.getElementById('Mordor')
	const mntDoom = document.createElement('div')
	mntDoom.setAttribute('id', 'mount-doom')
	mntDoom.appendChild(sam)
	mntDoom.appendChild(frodo)
	mordor.appendChild(mntDoom)

	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	const gollum = document.createElement('div')
	gollum.setAttribute('id', 'gollum')
	const mordor = document.getElementById('Mordor')
	const ring = document.getElementById('the-ring')
	const mntDoom = document.getElementById('mount-doom')
	mordor.appendChild(gollum)
	gollum.appendChild(ring)
	mntDoom.appendChild(gollum)
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`

	document.getElementById('gollum').remove()
	const frodo = document.getElementById('Frodo Baggins')
	const sam = document.getElementById('Samwise "Sam" Gamgee')
	const shire = document.getElementById('The-Shire')
	shire.appendChild(frodo)
	shire.appendChild(sam)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})




	// 1. create a section tag with an id of middle-earth

	// 2. use a for loop to iterate over the lands array that does the following:

	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".
