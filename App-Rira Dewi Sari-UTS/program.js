function tampilNilai() {
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var nilaiAngka = parseInt(document.getElementById('nilai').value);
    var mataKuliah = document.getElementById('mataKuliah').value;
  
    if (nilaiAngka >= 85 && nilaiAngka <= 100) {
      nilaiHuruf = 'A';
      IndeksNilai = '4.00';
      keterangan = 'Pujian';
    } else if (nilaiAngka >= 79 && nilaiAngka <= 84) {
      nilaiHuruf = 'A-';
      IndeksNilai = '3.67';
      keterangan = 'Sangat Memuaskan';
    } else if (nilaiAngka >= 74 && nilaiAngka <= 78) {
      nilaiHuruf = 'B+';
      IndeksNilai = '3.33';
      keterangan = 'Sangat Memuaskan';
    } else if (nilaiAngka >= 69 && nilaiAngka <= 73) {
      nilaiHuruf = 'B';
      IndeksNilai = '3.00';
      keterangan = 'Memuaskan';
    } else if (nilaiAngka >= 64 && nilaiAngka<= 68) {
      nilaiHuruf = 'B-';
      IndeksNilai = '2.67';
      keterangan = 'Memuaskan';
    } else if (nilaiAngka >= 59 && nilaiAngka <= 63) {
      nilaiHuruf = 'C+';
      IndeksNilai = '2.33';
    } else if (nilaiAngka>= 54 && nilaiAngka <= 58) {
      nilaiHuruf = 'C';
      IndeksNilai = '2.00';
    } else if (nilaiAngka >= 41 && nilaiAngka <= 53) {
      nilaiHuruf = 'D';
      IndeksNilai = '1.00';
    } else if (nilaiAngka >=0 && nilaiAngka <= 40) {
      nilaiHuruf = 'E';
      IndeksNilai = '0.00';
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
                   "<td>" + IndeksNilai + "</td>" +
                   "<td>" + keterangan+ "</td>" +
                   "<td><button class='btn btn-success' onclick='hapusData(this)'>Hapus</button></td>" +
                   "</tr>";
  
    var hasilNilai = document.getElementById('hasilNilai');
    hasilBody.innerHTML += hasilNilai;
    
   document.getElementById('nim').value=null;
   document.getElementById('nama').value=null;
   document.getElementById('nilai').value=null;
   document.getElementById('mataKuliah').value='Pilih';
}

function resetForm() {
document.getElementById('nilaiForm').reset();
document.getElementById('hasilNilai').innerHTML = ' ';
}

function hapusData(button) {
var row = button.parentNode.parentNode;
row.parentNode.removeChild(row);
}