import allTypes from "./types";
import getName from "./getName";
import getType from "./getType";

export default function Character(name, type) {
  this.name = getName(name);
  this.type = getType(type);
  this.health = 100;
  this.level = 1;
  this.attack = allTypes[type].attack;
  this.defense = allTypes[type].defense;
}
