// Configuramos la variable de entorno "PORT" para que
// coja una ya existente o le asigne el 3000 si no existe
process.env.PORT = process.env.PORT || 4000;

// Una forma de generar una semilla lo suficientemente aleatoria es:
// require("crypto").randomBytes(64).toString("hex")
process.env.SEED = process.env.SEED || "SECRET KEY";