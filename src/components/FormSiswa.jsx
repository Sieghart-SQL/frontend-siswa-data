function FormSiswa({ form, editId, onChange, onSubmit, onCancel }) {
  return (
    <div className="card">
      <h2>{editId ? 'Edit Data Siswa' : 'Tambah Data Siswa'}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="kode_siswa">Kode Siswa</label>
            <input
              id="kode_siswa"
              name="kode_siswa"
              value={form.kode_siswa}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nama_siswa">Nama Siswa</label>
            <input
              id="nama_siswa"
              name="nama_siswa"
              value={form.nama_siswa}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="alamat_siswa">Alamat Siswa</label>
            <input
              id="alamat_siswa"
              name="alamat_siswa"
              value={form.alamat_siswa}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tgl_siswa">Tgl Siswa</label>
            <input
              id="tgl_siswa"
              type="date"
              name="tgl_siswa"
              value={form.tgl_siswa}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="jurusan_siswa">Jurusan Siswa</label>
            <input
              id="jurusan_siswa"
              name="jurusan_siswa"
              list="daftar-jurusan"
              value={form.jurusan_siswa}
              onChange={onChange}
              required
            />
            <datalist id="daftar-jurusan">
              <option value="Rekayasa Perangkat Lunak" />
              <option value="Teknik Komputer dan Jaringan" />
              <option value="Multimedia" />
              <option value="Akuntansi" />
              <option value="Teknik Informatika" />
            </datalist>
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="btn-primary">
            {editId ? 'Simpan Perubahan' : 'Tambah'}
          </button>
          {editId && (
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Batal
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormSiswa;