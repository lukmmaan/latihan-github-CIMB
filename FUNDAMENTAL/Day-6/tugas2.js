
a = start()()[2][1].kontak.telfon[0]
console.log(a)

function start () {
     function e() {
      return [1,2,[
        {
          nama: 'Doraemon',
          pekerjaan: 'Manjain orang'
        },
        {
          nama: 'Seto',
          kontak: {
            rumah: 'BSD',
            telfon: ['081234', '432108']
          }
        }
      ],4,5]
    }
    return e
}
