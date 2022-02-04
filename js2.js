function transformToRot13(stringToTransform) {
  // 👩‍🚒👩‍🚒👩‍🚒 Créer une nouvelle variable qui comprend string

  // 👩‍🚒👩‍🚒👩‍🚒 Transform le un tableau

  return stringToTransform
    .split("")
    .map((char) => {
      const code = char.charCodeAt(char);

      // 👩‍🚒👩‍🚒👩‍🚒 parcourt le tableau pour retrouver son character code
      // 👩‍🚒👩‍🚒👩‍🚒 verifier s'il et enter 65 et 90
      // 👩‍🚒👩‍🚒👩‍🚒 sinon retourne un caracter par converti

      if (code < 65 || code > 90) {
        return String.fromCharCode(code);
      } else if (code < 78) {
        // 👩‍🚒👩‍🚒👩‍🚒 avance de 13 places

        console.log("Avance de 13 place");
        return String.fromCharCode(code + 13);
      } else {
        // 👩‍🚒👩‍🚒👩‍🚒 recule de 13 places

        console.log("Recule de 13 places");
        return String.fromCharCode(code - 13);
      }
      // 👩‍🚒👩‍🚒👩‍🚒 retransform en string
    })
    .join("");

  //👩‍🚒👩‍🚒👩‍🚒 retourn le tout
}

console.log(transformToRot13("URYYB JBEYQ"));
console.log(transformToRot13("BCRAPYNFFEBBZF"));
console.log(transformToRot13("THYPNA"));
