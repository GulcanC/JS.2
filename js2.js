function transformToRot13(stringToTransform) {
  // π©βππ©βππ©βπ CrΓ©er une nouvelle variable qui comprend string

  // π©βππ©βππ©βπ Transform le un tableau

  return stringToTransform
    .split("")
    .map((char) => {
      const code = char.charCodeAt(char);

      // π©βππ©βππ©βπ parcourt le tableau pour retrouver son character code
      // π©βππ©βππ©βπ verifier s'il et enter 65 et 90
      // π©βππ©βππ©βπ sinon retourne un caracter par converti

      if (code < 65 || code > 90) {
        return String.fromCharCode(code);
      } else if (code < 78) {
        // π©βππ©βππ©βπ avance de 13 places

        console.log("Avance de 13 place");
        return String.fromCharCode(code + 13);
      } else {
        // π©βππ©βππ©βπ recule de 13 places

        console.log("Recule de 13 places");
        return String.fromCharCode(code - 13);
      }
      // π©βππ©βππ©βπ retransform en string
    })
    .join("");

  //π©βππ©βππ©βπ retourn le tout
}

console.log(transformToRot13("URYYB JBEYQ"));
console.log(transformToRot13("BCRAPYNFFEBBZF"));
console.log(transformToRot13("THYPNA"));
