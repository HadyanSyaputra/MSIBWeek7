const shapes = require('./geometry')

const persegi_sisi = 5
const persegi_luas = shapes.luasPersegi(persegi_sisi)
const persegi_keliling = shapes.kelilingPersegi(persegi_sisi)

console.log(`Luas persegi dengan sisi ${persegi_sisi} adalah ${persegi_luas}`)
console.log(`Keliling persegi dengan sisi ${persegi_sisi} adalah ${persegi_keliling}`)

const panjang = 6
const lebar = 4
const persegiPanjang_luas = shapes.luasPersegiPanjang(panjang, lebar)
const persegiPanjang_keliling = shapes.kelilingPersegiPanjang(panjang, lebar)

console.log(`Luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${persegiPanjang_luas}`)
console.log(`Keliling persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${persegiPanjang_keliling}`)
