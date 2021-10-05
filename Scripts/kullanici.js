
function kullaniciSil(satir_id) {

    bootbox.confirm('Kullanıcıyı silmek istiyor musunuz?', function (cevap) {

        if (cevap) {

            $.ajax({
                url: '/kullanicilar/sil',
                data: { id: satir_id },
                success: function (sonuc) {

                    bootbox.alert(sonuc);
                    $('#satir_' + satir_id).remove();
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

function bilgiDegistir(satir_id) {

    var Email = document.getElementById('Email_' + satir_id);
    var Tel = document.getElementById('Tel_' + satir_id);
    var Sifre = document.getElementById('Sifre_' + satir_id);
    var AdSoyad = document.getElementById('adsoyad_' + satir_id);

    if ((Email.value != '') && (Sifre.value != '')) {

        var dataBilgi = {};
        dataBilgi.yonetim = { ID: satir_id, Email: Email.value, Tel: Tel.value, Sifre: Sifre.value, AdSoyad: AdSoyad.value };

        $.ajax({

            url: '/kullanicilar/degistir',
            data: dataBilgi,
            type: 'POST',
            success: function (cevap) {

                bootbox.alert('Bilgileriniz güncellendi');
            },
            error: function () {

            }
        });

    }
    else {
        bootbox.alert('Alanları boş bırakmayınız!');
    }

}