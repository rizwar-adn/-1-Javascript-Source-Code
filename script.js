var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var nama = document.getElementById('nama').value;
    var umur = document.getElementById('umur').value;
    var res1 = document.getElementById('res1').value;
    var res2 = document.getElementById('res2').value;

    res1 = document.getElementById('res1').value = "Halo " + nama + " Selamat Siang :)";

    if(umur <= 25){
        res2 = document.getElementById('res2').value = "Wah masih muda ya!, semangat mengejar mimpi yang belum tercapai!!";
    }else if((umur > 25) && (umur <= 80)){
        res2 = document.getElementById('res2').value = "Walaupun sudah berumur tapi semangat nya harus tetap muda ya!! :)";
    }else{
        res2 = document.getElementById('res2').value = "Data tidak terdeteksi!!";
    }
})