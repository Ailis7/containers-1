/* eslint-disable no-unused-vars */
// TODO: write your code here
import Character from './classes/Character';
import Bowman from './classes/Bowman';
import Swordsman from './classes/Swordsman';
import Magician from './classes/Magician';
import Undead from './classes/Undead';
import Zombie from './classes/Zombie';
import Daemon from './classes/Daemon';
import Team from './classes/Team';

const man = new Bowman('Vasa');
const sad = new Magician('Ivan');
console.log(man);

const green = new Team();
green.addAll(man, sad, man);
// green.add(sad);
console.log((green.members));
console.log(JSON.stringify(green.toArray));
