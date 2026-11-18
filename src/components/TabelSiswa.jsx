function TabelSiswa({ siswa, loading, onEdit, onDelete }) {
  return (
    <div className="card">
      <h2>Daftar Siswa</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Tgl</th>
              <th>Jurusan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="empty">Memuat data...</td>
              </tr>
            ) : siswa.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty">Belum ada data siswa</td>
              </tr>
            ) : (
              siswa.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.kode_siswa}</td>
                  <td>{s.nama_siswa}</td>
                  <td>{s.alamat_siswa}</td>
                  <td>{s.tgl_siswa}</td>
                  <td>{s.jurusan_siswa}</td>
                  <td>
                    <div className="row-actions">
                      <button className="btn-edit" onClick={() => onEdit(s)}>
                        Edit
                      </button>
                      <button className="btn-delete" onClick={() => onDelete(s.id)}>
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelSiswa;