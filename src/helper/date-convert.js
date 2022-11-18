export default function convertDateDBtoIndo(date) {
    const d = new Date(date);
    const string = d.toLocaleDateString("id")
    const bulanIndo = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const tahun = string.split("/")[2];
    const bulan = string.split("/")[1];
    const tanggal = string.split("/")[0];

    return tanggal + " " + bulanIndo[Math.abs(bulan)] + " " + tahun;
}
