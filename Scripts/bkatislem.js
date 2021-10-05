
function bkatDegistir(bk_id) {
    var bkat = document.getElementById('bkat_' + bk_id);
    var dataBilgi = {};
    dataBilgi.b = { ID: bk_id, bkat: bkat.value };
    if (bkat.value != '') {
        $.ajax({
            url: '/kategoriler/bDegistir',
            data: dataBilgi,
            type: 'POST',
            success: function (cevap) {
                bootbox.alert('B kategori güncellendi')
            },
            error: function () {

            }
        });
    }
    else {
        bootbox.alert('Alanları boş bırakmayınız!');
    }
}
function bkatSil(bk_id) {
    bootbox.confirm('B kategoriyi silmek istiyor musunuz?', function (cevap) {

        if (cevap) {

            $.ajax({
                url: '/kategoriler/bSil',
                data: { id: bk_id },
                success: function (sonuc) {

                    bootbox.alert(sonuc);
                    $('#bk_' + bk_id).remove();
                },
                error: function () {

                }
            });

        }
        else {
            bootbox.alert('Silme işlemi iptal edildi.');
        }

    })
}