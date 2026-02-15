# Contact Management System

Aplikasi web untuk mengelola kontak dengan fitur CRUD (Create, Read, Update, Delete) menggunakan PHP dan MySQL.

![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Struktur Folder](#struktur-folder)
- [Cara Menggunakan](#cara-menggunakan)
- [Database](#database)
- [API Endpoints](#api-endpoints)
- [Bugs & Fixes](#bugs--fixes)

## ✨ Fitur

- ✅ Tambah kontak baru
- ✅ Melihat daftar semua kontak
- ✅ Edit/Update kontak
- ✅ Hapus kontak
- ✅ Interface yang user-friendly
- ✅ Validasi form
- ✅ API berbasis JSON

## 📦 Prasyarat

Sebelum menjalankan aplikasi ini, pastikan Anda sudah install:

- **PHP** >= 7.0 (atau gunakan XAMPP)
- **MySQL** / **MariaDB**
- **Web Browser** (Chrome, Firefox, Edge, dll)

## 🚀 Instalasi

### 1. Clone atau Download Project

```bash
git clone https://github.com/username/Contact-Management.git
cd Contact-Management
```

Atau extract file ZIP ke folder project Anda.

### 2. Setup Database

**Buka phpMyAdmin:**
- Buka browser → `http://localhost/phpmyadmin`

**Buat database baru:**
```sql
CREATE DATABASE manajemen_kontak;
USE manajemen_kontak;

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Konfigurasi File

Edit file `api.php` dan `api1.php` jika menggunakan host/username/password yang berbeda:

```php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "manajemen_kontak";
```

### 4. Jalankan Aplikasi

**Opsi 1: Menggunakan XAMPP**
- Copy folder project ke `C:\xampp\htdocs\`
- Buka browser → `http://localhost/Contact-Management/`

**Opsi 2: Menggunakan PHP Server**
```bash
php -S localhost:8000
```
Lalu buka browser → `http://localhost:8000`

## 📂 Struktur Folder

```
Contact-Management/
├── index.html          # File HTML utama
├── api.php             # API untuk GET, POST, PUT, DELETE
├── api1.php            # API untuk GET single contact
├── assets/
│   ├── css/
│   │   └── style.css   # Styling aplikasi
│   └── js/
│       └── script.js   # JavaScript untuk interaksi
└── README.md           # File dokumentasi ini
```

## 💻 Cara Menggunakan

1. **Buka aplikasi** di browser: `http://localhost/Contact-Management/`

2. **Tambah Kontak Baru:**
   - Masukkan nama dan email di form
   - Klik tombol "Tambah"
   - Kontak akan langsung muncul di list

3. **Edit Kontak:**
   - Klik tombol "Edit" pada kontak yang ingin diubah
   - Form akan terisi dengan data kontak
   - Ubah data sesuai keinginan
   - Klik "Update" untuk menyimpan perubahan

4. **Hapus Kontak:**
   - Klik tombol "Delete" pada kontak yang ingin dihapus
   - Kontak akan langsung terhapus dari list

## 🗄️ Database

### Struktur Tabel `contacts`

| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | INT | Primary key, auto increment |
| name | VARCHAR(100) | Nama kontak |
| email | VARCHAR(100) | Email kontak |
| created_at | TIMESTAMP | Waktu pembuatan |

## 🔌 API Endpoints

### GET - Ambil Semua Kontak
```
GET /api.php
Response: JSON Array
```

**Contoh Response:**
```json
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com"
    }
]
```

### GET - Ambil Kontak Spesifik
```
GET /api1.php?id=1
Response: JSON Object
```

**Contoh Response:**
```json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
}
```

### POST - Tambah Kontak Baru
```
POST /api.php
Content-Type: application/json

Body:
{
    "name": "John Doe",
    "email": "john@example.com"
}

Response: { "success": true }
```

### PUT - Update Kontak
```
PUT /api.php?id=1
Content-Type: application/json

Body:
{
    "name": "John Updated",
    "email": "john.updated@example.com"
}

Response: { "success": true }
```

### DELETE - Hapus Kontak
```
DELETE /api.php?id=1
Response: { "success": true }
```

## 🐛 Bugs & Fixes

Berikut adalah bug yang ditemukan dan solusinya:

### Bug 1: Typo `REQUEST_MENTHOD`
**File:** `api.php`, `api1.php`  
**Issue:** Penggunaan `REQUEST_MENTHOD` seharusnya `REQUEST_METHOD`

**Solusi:**
```php
// ❌ Salah
if ($_SERVER['REQUEST_MENTHOD'] === 'POST') {

// ✅ Benar
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
```

### Bug 2: Typo `$servename`
**File:** `api1.php` (line 7)  
**Issue:** Nama variabel typo `$servename` seharusnya `$servername`

**Solusi:**
```php
// ❌ Salah
$conn = new mysqli($servename, $username, $password, $dbname);

// ✅ Benar
$conn = new mysqli($servername, $username, $password, $dbname);
```

### Bug 3: Typo `paddingh` di CSS
**File:** `style.css` (line 8)  
**Issue:** Property CSS typo `paddingh` seharusnya `padding`

**Solusi:**
```css
/* ❌ Salah */
body {
    paddingh: 20px;
}

/* ✅ Benar */
body {
    padding: 20px;
}
```

### Bug 4: Typo `margin-buttom` di CSS
**File:** `style.css` (line 12)  
**Issue:** Property typo `margin-buttom` seharusnya `margin-bottom`

**Solusi:**
```css
/* ❌ Salah */
#contact {
    margin-buttom: 20px;
}

/* ✅ Benar */
#contact {
    margin-bottom: 20px;
}
```

### Bug 5: Missing semicolon di CSS
**File:** `style.css` (line 28)  
**Issue:** Baris `margin:20px 0` hilang semicolon

**Solusi:**
```css
/* ❌ Salah */
form {
    margin:20px 0
    display: flex;
}

/* ✅ Benar */
form {
    margin: 20px 0;
    display: flex;
}
```

### Bug 6: Typo `fle-direction`
**File:** `style.css` (line 29)  
**Issue:** Property typo `fle-direction` seharusnya `flex-direction`

**Solusi:**
```css
/* ❌ Salah */
form {
    fle-direction: column;
}

/* ✅ Benar */
form {
    flex-direction: column;
}
```

### Bug 7: Typo `menthod` di JavaScript
**File:** `script.js` (line 29)  
**Issue:** Opsi fetch typo `menthod` seharusnya `method`

**Solusi:**
```javascript
// ❌ Salah
fetch('api.php', {
    menthod: 'POST',
    headers: { ... }
})

// ✅ Benar
fetch('api.php', {
    method: 'POST',
    headers: { ... }
})
```

### Bug 8: Typo `emial` di JavaScript
**File:** `script.js` (line 65)  
**Issue:** ID element typo `emial` seharusnya `email`

**Solusi:**
```javascript
// ❌ Salah
const email = document.getElementById('emial').value;

// ✅ Benar
const email = document.getElementById('email').value;
```

### Bug 9: Typo `nbackground-color` di CSS
**File:** `style.css` (line 61)  
**Issue:** Property typo `nbackground-color` seharusnya `background-color`

**Solusi:**
```css
/* ❌ Salah */
.edit-button {
    nbackground-color: #007BFF;
}

/* ✅ Benar */
.edit-button {
    background-color: #007BFF;
}
```

### Bug 10: Typo `paddiny` di CSS
**File:** `style.css` (line 64)  
**Issue:** Property typo `paddiny` seharusnya `padding`

**Solusi:**
```css
/* ❌ Salah */
.edit-button {
    paddiny: 5px;
}

/* ✅ Benar */
.edit-button {
    padding: 5px;
}
```

### Bug 11: Typo `flex-decoration` di CSS
**File:** `style.css` (line 54)  
**Issue:** Property typo `flex-decoration` seharusnya `flex-direction`

**Solusi:**
```css
/* ❌ Salah */
.actions {
    flex-decoration: row;
}

/* ✅ Benar */
.actions {
    flex-direction: row;
}
```

### Bug 12: Wrong ID selector di JavaScript
**File:** `script.js` (line 18)  
**Issue:** Menggunakan ID `contacts` tapi di HTML adalah `contact`

**Solusi:**
```javascript
// ❌ Salah
document.getElementById('contacts').innerHTML = contacts;

// ✅ Benar
document.getElementById('contact').innerHTML = contacts;
```

## 🔐 Security Notes

⚠️ **PENTING:** Kode ini masih menggunakan SQL yang rentan terhadap SQL Injection. Untuk production, gunakan prepared statements:

```php
// ✅ Gunakan prepared statements
$stmt = $conn->prepare("INSERT INTO contacts (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
$stmt->execute();
```

## 📝 License

Project ini bebas digunakan untuk keperluan pembelajaran dan pengembangan pribadi.

## 👤 Author

- **Nama:** Stefanus Ariangga
- **GitHub:** [username]

## 📞 Hubungi

Jika ada pertanyaan atau saran, silakan buat issue atau hubungi saya melalui GitHub.

---

**Last Updated:** 14 Februari 2026
