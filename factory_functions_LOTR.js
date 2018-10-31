function createCharacter(name, nickname, race, origin, attack, defense){

    return {
        name, nickname, race, origin, attack, defense,
        describe(){
            console.log( `${name} is a ${race} from ${origin}.`);
        },
        evaluateFight(character){
            let x = 0, y = 0;
            if(this.attack > character.defense){
                x = this.attack - character.defense;
            }
            if(this.defense < character.attack){
                y = character.attack - this.defense;
            }
            console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
        }
    };
}
const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Mr. B', 'Tiny', 'sneaky', 'Chicago', 20, 30));

characters.find(item => item.nickname === 'aragorn').describe();

const hobitOnly = characters.filter(item => item.race === 'Hobbit');
//console.log(hobitOnly);

const attackOnly = characters.filter(item => item.attack > 5);
//console.log(attackOnly);

//add weapons property...