const box = document.querySelector('.characters-box');
const characters = document.querySelectorAll('.character');

document.querySelector('.next').addEventListener('click', () => {
    box.scrollBy({
        left: characters[0].offsetWidth + 50,
        behavior: 'smooth'
    });
});

document.querySelector('.prev').addEventListener('click', () => {
    box.scrollBy({
        left: -(characters[0].offsetWidth + 50),
        behavior: 'smooth'
    });
});


const characterData = {
    kratos: {
        img: '/assets/characters/kratos.png',
        name: 'Kratos',
        description: `Kratos, a feared god-slayer from Sparta, seeks an absolution in the Norse world. Haunted by his lingering guilt for slaughtering deities, he must learn how to confront his inner demon to break free from the same vicious cycle. 
                      Now a father, he bears the ultimate responsibility to foster, teach, and protect his son from unforgiving creatures and gods.`,
        birthplace: {
            img: '/assets/realms/runes/midgard-rune.png',
            name: 'Sparta'
        }
    },
    atreus: {
        img: '/assets/characters/atreus.png',
        name: 'Atreus',
        description: `A language prodigy, Atreus explores the meticulous, bloodstained Norse domain alongside his father, Kratos of Sparta. 
                      In a world teeming with undying conflicts, he must develop sheer discipline and unwavering resilience, under his father's guidance, to survive and thrive.`,
        birthplace: {
            img: '/assets/realms/runes/midgard-rune.png', 
            name: 'Midgard'
        }
    },
    mimir: {
        img: '/assets/characters/mimir.webp',
        name: 'Mimir',
        description: `Revered as the wisest man alive, Mimir offers counsel across distinct realms while nurturing both compassion and neutrality. 
                      These behaviors have granted him enduring trust and rare gifts, even from the elusive primordial beings. Yet in time, Mimir's nature poses a significant threat to the Allfather.`,
        birthplace: {
            img: '/assets/realms/runes/asgard-rune.png',
            name: 'Asgard'
        }
    },
    brok: {
        img: '/assets/characters/brok.webp',
        name: 'Brok',
        description: `Renowned for his distinctive skin and sarcastic behavior, Brok possesses blacksmithing abilities so exceptional that even divine beings are enthralled. 
                      Notwithstanding his harsh behavior, he occasionally displays genuine care and offers assistance to his closest allies in need.`,
        birthplace: {
            img: '/assets/realms/runes/svartalfheim-rune.png',
            name: 'Svartalfheim'
        }
    },
    sindri: {
        img: '/assets/characters/sindri.webp',
        name: 'Sindri',
        description: `Sindri, a dwarf allergic to germs and uncleanliness, manufactures every creation with utmost precision and monumental dedication. 
                      Unlike the ill-mannered and audacious Brok, Sindri is more courteous and reserved, thus sparking occasional altercations with his brother.`,
        birthplace: {
            img: '/assets/realms/runes/svartalfheim-rune.png',
            name: 'Svartalfheim'
        }
    },
    tyr: {
        img: '/assets/characters/tyr.webp',
        name: 'Tyr',
        description: `Tyr, venerated for his diplomacy, mediates tensions across the Nine Realms while enforcing pragmatism, neutrality, and solicitude. 
                      Also the Norse god of war, he keeps his emotions under control and surges forth into skirmishes alongside the Aesir, securing a definite victory on his side.`,
        birthplace: {
            img: '/assets/realms/runes/asgard-rune.png',
            name: 'Asgard'
        }
    },
    thor: {
        img: '/assets/characters/thor.png',
        name: 'Thor',
        description: `Feared for his jarring nature, Thor relies on his brute force and arsenal to vanquish his opposition, particularly the Jotnar who have long resented his tribe. 
                      His blood-soaked hammer, Mjölnir, embodies brutality and devastation wrought throughout the cosmos.`,
        birthplace: {
            img: '/assets/realms/runes/asgard-rune.png',
            name: 'Asgard'
        }
    },
    baldur: {
        img: '/assets/characters/baldur.webp',
        name: 'Baldur',
        description: `Baldur, hailed by Odin as his finest tracker, possesses immunity to physical or magical attacks. 
                      His superiority breeds extreme arrogance and condescension, even toward his own kin. 
                      Yet in his deepest heart, he remains hollow, yearning to feel just the faintest warmth.`,
        birthplace: {
            img: '/assets/realms/runes/asgard-rune.png',
            name: 'Asgard'
        }
    }
}

characters.forEach(character => {
    character.addEventListener('click', () => {
        document.querySelector('.popup-overlay').classList.remove('hidden');

        const id = character.id;
        const data = characterData[id];

        document.querySelector('.popup-image').innerHTML = `<img src="${data.img}" alt="${data.name}"/>`
        document.querySelector('.popup-name').innerHTML = `<h4>${data.name}</h4>`
        document.querySelector('.popup-description').innerHTML = `<p>${data.description}</p>`
    })
})


document.querySelector('.popup-close').addEventListener('click', () => {
    document.querySelector('.popup-overlay').classList.add('hidden');
})
