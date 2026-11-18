import { useEffect, useState } from 'react';
import './App.css';
import Pesan from './components/Pesan';
import FormSiswa from './components/FormSiswa';
import TabelSiswa from './components/TabelSiswa';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/siswa';

const emptyForm = {
  kode_siswa: '',
  nama_siswa: '',
  alamat_siswa: '',
  tgl_siswa: '',
  jurusan_siswa: '',
};

function App() {
  const [siswa, setSiswa] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // READ
  const fetchSiswa = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Gagal mengambil data siswa');
      const data = await res.json();
      setSiswa(data);
      setError('');
    } catch (err) {
      setError(err.message || 'Tidak dapat terhubung ke server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSiswa();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditId(null);
  };

  // CREATE & UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch(editId ? `${API_URL}/${editId}` : API_URL, {
        method: editId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Terjadi kesalahan');

      setSuccess(editId ? 'Data siswa berhasil diubah' : 'Data siswa berhasil ditambahkan');
      resetForm();
      fetchSiswa();
    } catch (err) {
      setError(err.message || 'Tidak dapat terhubung ke server');
    }
  };

  const handleEdit = (s) => {
    setEditId(s.id);
    setForm({
      kode_siswa: s.kode_siswa,
      nama_siswa: s.nama_siswa,
      alamat_siswa: s.alamat_siswa,
      tgl_siswa: s.tgl_siswa,
      jurusan_siswa: s.jurusan_siswa,
    });
    setError('');
    setSuccess('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm('Yakin ingin menghapus data siswa ini?')) return;
    setError('');
    setSuccess('');

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Gagal menghapus data');

      setSuccess('Data siswa berhasil dihapus');
      if (editId === id) resetForm();
      fetchSiswa();
    } catch (err) {
      setError(err.message || 'Tidak dapat terhubung ke server');
    }
  };

  return (
    <div className="container">
      <h1>Data Siswa</h1>

      <Pesan error={error} success={success} />

      <FormSiswa
        form={form}
        editId={editId}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={resetForm}
      />

      <TabelSiswa
        siswa={siswa}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;