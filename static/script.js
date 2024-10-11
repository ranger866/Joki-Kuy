function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Fungsi untuk menampilkan atau menyembunyikan dropdown
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('active');
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active')
}

// Jika Anda ingin menggunakan dropdown juga di sidebar
function toggleDropdownSidebar() {
    const dropdownMenuSidebar = document.getElementById('dropdown-menu-sidebar');
    dropdownMenuSidebar.classList.toggle('active');
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('trans')
    const dropdown = document.getElementById('dropdown2');
    dropdown.classList.toggle('active')
}

function toggleFormSewa() {
    const formSewa = document.getElementById('form-sewa');
    const contentSewa = document.getElementById('content-sewa')
    formSewa.classList.toggle('active')
    contentSewa.classList.toggle('active')
    const button = document.getElementById('sewa');
    if (button.textContent === 'Kuy Sewa...'){
        button.textContent = 'Belum Dulu Deh...';
    } else {
        button.textContent = 'Kuy Sewa...';
    }
}


function pesanJokiCoding() {
    // Ambil hasil inputan user
    const nama = document.getElementById('nama').value;
    const judul = document.getElementById('topik').value;
    const deskripsi = document.getElementById('deskripsi').value;

    // Cek apakah input tidak kosong
    if (nama.trim() === '' || judul.trim() === '' || deskripsi.trim() === '') {
        alert('Mohon lengkapi semua field!');
        return;
    }

    // Nomor WhatsApp tujuan (ganti dengan nomor tujuan yang valid)
    const nomorWa = '6283871069021'; // Pastikan nomor diawali kode negara (62 untuk Indonesia)

    // Buat URL WhatsApp dengan pesan yang sudah dikodekan
    const urlWa = `https://wa.me/${nomorWa}?text=${encodeURIComponent(
        'Halo, kenalin saya' + nama + ', pengen pesan jasa joki coding dengan topik ' + judul + ' dengan detail: ' + deskripsi
    )}`;

    // Buka halaman WhatsApp Web untuk mengirim pesan
    window.open(urlWa, '_blank');
}


function pesanJokiMakalah() {
    // Ambil hasil inputan user
    const nama = document.getElementById('nama').value;
    const judul = document.getElementById('topik').value;
    const deskripsi = document.getElementById('deskripsi').value;

    // Cek apakah input tidak kosong
    if (nama.trim() === '' || judul.trim() === '' || deskripsi.trim() === '') {
        alert('Mohon lengkapi semua field!');
        return;
    }

    // Nomor WhatsApp tujuan (ganti dengan nomor tujuan yang valid)
    const nomorWa = '6283871069021'; // Pastikan nomor diawali kode negara (62 untuk Indonesia)

    // Buat URL WhatsApp dengan pesan yang sudah dikodekan
    const urlWa = `https://wa.me/${nomorWa}?text=${encodeURIComponent(
        'Halo, kenalin saya' + nama + ', pengen pesan jasa joki Makalah dengan topik ' + judul + ' dengan detail: \n' + deskripsi
    )}`;

    // Buka halaman WhatsApp Web untuk mengirim pesan
    window.open(urlWa, '_blank');
}


function pesanJokiPPT() {
    // Ambil hasil inputan user
    const nama = document.getElementById('nama').value;
    const judul = document.getElementById('topik').value;
    const deskripsi = document.getElementById('deskripsi').value;

    // Cek apakah input tidak kosong
    if (nama.trim() === '' || judul.trim() === '' || deskripsi.trim() === '') {
        alert('Mohon lengkapi semua field!');
        return;
    }

    // Nomor WhatsApp tujuan (ganti dengan nomor tujuan yang valid)
    const nomorWa = '6283871069021'; // Pastikan nomor diawali kode negara (62 untuk Indonesia)

    // Buat URL WhatsApp dengan pesan yang sudah dikodekan
    const urlWa = `https://wa.me/${nomorWa}?text=${encodeURIComponent(
        'Halo, kenalin saya' + nama + ', pengen pesan jasa joki PPT dengan topik ' + judul + ' dengan detail: \n' + deskripsi
    )}`;

    // Buka halaman WhatsApp Web untuk mengirim pesan
    window.open(urlWa, '_blank');
}