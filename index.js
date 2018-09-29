function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens
}

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}