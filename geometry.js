const luasPersegi = (side) => side * side
const kelilingPersegi = (side) => 4 * side
const luasPersegiPanjang = (length, width) => length * width
const kelilingPersegiPanjang = (length, width) => 2 * (length + width)

module.exports = {
  luasPersegi,
  kelilingPersegi,
  luasPersegiPanjang,
  kelilingPersegiPanjang,
}
