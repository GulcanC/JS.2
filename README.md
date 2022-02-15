# Algorithme de Décriptage de ROTI13

# :point_right: split() | charCodeAt() | map() | join()

A = N | B = O | C = P | D = Q | E = R | F = S | G = T | H = U | I = V | J = W | K = X | L = Y | M = Z

L’idée est décaler chacun des lettres de l’alphabet de 13 places. Autrement dit, le H devient le U, le E devient le R, etc. Transformer notre chaine de caractères en un tableau. La méthode charCodeAt () en JS ne renvoi d’ailleurs pas que des codes caractères pour les lettres A à Z elle peut aussi renvoyer des codées caractères pour des caractères spéciaux.

Cette valeur doit donc être située entre 65 et 91.
La valeur au milieu de ma liste est le 78, entre 65 et 91. C’est la valeur médiane et elle équivaut à la lettre « N ». 
Si la lettre est située en dessous de 78, je vais devoir lui ajouter 13 places. Autrement dit, incrémenter cette valeur de 13. Et sinon je vais devoir la décrémenter de 13. 


