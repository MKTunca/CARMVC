
function akatDegistir(ak_id) {
    var akat = document.getElementById('akat_' + ak_id);
    var dataBilgi = {};
    dataBilgi.a = { ID: ak_id, akat: akat.value };
    if (akat.value != '') {
        $.ajax({
            url: '/kategoriler/aDegistir',
            data: dataBilgi,
            type: 'POST',
            success: function (cevap) {
                bootbox.alert('Ana kategori güncellendi')
            },
            error: function () {

            }
        });
    }
    else {
        bootbox.alert('Alanları boş bırakmayınız!');
    }
}
function akatSil(ak_id) {
    bootbox.confirm('Ana kategoriyi silmek istiyor musunuz?', function (cevap) {

        if (cevap) {

            $.ajax({
                url: '/kategoriler/aSil' ,
                data: { id: ak_id },
                success: function (sonuc) {

                    bootbox.alert(sonuc);
                    $('#ak_' + ak_id).remove();
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