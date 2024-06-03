var show = document.getElementById("nav-links");
function showMenu(){
  show.style.right = "0";
}
function closeMenu(){
  show.style.right = "-200px";
}

function tampilNilai() {
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var nilaiAngka = parseInt(document.getElementById('nilai').value);
    var mataKuliah = document.getElementById('mataKuliah').value;
    var nilaiHuruf = parseInt(document.getElementById('nilaiHuruf').value);
    var indeksNilai = parseInt(document.getElementById('indeksNilai').value);
    var keterangan = document.getElementById('keterangan').value;

  
    if (nilaiAngka >= 85 && nilaiAngka <= 100) {
      nilaiHuruf = 'A';
      indeksNilai = '4.00';
      keterangan = 'Pujian';
    } else if (nilaiAngka >= 79 && nilaiAngka <= 84) {
      nilaiHuruf = 'A-';
      indeksNilaindeksNilai = '3.67';
      keterangan = 'Sangat Memuaskan';
    } else if (nilaiAngka >= 74 && nilaiAngka <= 78) {
      nilaiHuruf = 'B+';
      indeksNilai = '3.33';
      keterangan = 'Sangat Memuaskan';
    } else if (nilaiAngka >= 69 && nilaiAngka <= 73) {
      nilaiHuruf = 'B';
      indeksNilai = '3.00';
      keterangan = 'Memuaskan';
    } else if (nilaiAngka >= 64 && nilaiAngka<= 68) {
      nilaiHuruf = 'B-';
      indeksNilai = '2.67';
      keterangan = 'Memuaskan';
    } else if (nilaiAngka >= 59 && nilaiAngka <= 63) {
      nilaiHuruf = 'C+';
      indeksNilai = '2.33';
    } else if (nilaiAngka>= 54 && nilaiAngka <= 58) {
      nilaiHuruf = 'C';
      indeksNilai = '2.00';
    } else if (nilaiAngka >= 41 && nilaiAngka <= 53) {
      nilaiHuruf = 'D';
      indeksNilai = '1.00';
    } else if (nilaiAngka >=0 && nilaiAngka <= 40) {
      nilaiHuruf = 'E';
      indeksNilai = '0.00';
    }
    else if (nilaiAngka >=101 || nilaiAngka <=-1) {
      alert("Input nilai yang anda masukkan salah<br/> Harap Masukkan Nilai Yang Sesuai!!");
    }

    var hasilNilai = "<tr>" +
                   "<td>" + nim + "</td>" +
                   "<td>" + nama + "</td>" +
                   "<td>" + nilaiAngka + "</td>" +
                   "<td>" + mataKuliah + "</td>" +
                   "<td>" + nilaiHuruf + "</td>" +
                   "<td>" + indeksNilai + "</td>" +
                   "<td>" + keterangan+ "</td>" +
                   "<td><button class='btn btn-success' onclick='hapusData(this)'>Hapus</button></td>" +
                   "</tr>";
  
    var hasilBody = document.getElementById('hasilBody');
    hasilBody.innerHTML += hasilNilai;
    
   document.getElementById('nim').value=null;
   document.getElementById('nama').value=null;
   document.getElementById('nilai').value=null;
   document.getElementById('mataKuliah').value='Pilih';
   document.getElementById('nilaiHuruf').value=null;
   document.getElementById('indeksNilai').value=null;
   document.getElementById('keterangan').value=null;
}

function resetForm() {
document.getElementById('nilaiForm').reset();
document.getElementById('hasilNilai').innerHTML = ' ';
}

function hapusData(button) {
var row = button.parentNode.parentNode;
row.parentNode.removeChild(row);
}