-- BlockChain-Based CrowdFunding website project --
    
    Kami dari tim "HelloWorld" akan membuat sebuah aplikasi web yang memungkinkan pengguna untuk mengumpulkan dana
    dengan bantuan teknologi blockchain. Website ini akan memungkinkan pengguna untuk membuat proyek, 
    mengumpulkan dana, dan memantau perkembangan proyek mereka. Kami
    akan menggunakan teknologi blockchain untuk memastikan keamanan dan transparansi dalam pengumpulan
    dana.
    Website ini sudah live di https://berkahchain.vercel.app
    Langkah - langkah yang dibawah ialah langkah dalam membuat database-nya

### Langkah 1: Membuat Struktur Basis Data
    Pertama, kami akan membuat struktur basis data untuk menyimpan informasi tentang proyek
    dan pengguna. Struktur basis data ini akan terdiri dari tabel proyek, tabel
    pengguna, dan tabel kontribusi.
        sql
        CREATE TABLE proyek (
            id_proyek INT PRIMARY KEY,
            nama_proyek VARCHAR(255),
            deskripsi_proyek TEXT,
            target_dana DECIMAL(10, 2),
            tanggal_mulai DATE,
            tanggal_selesai DATE
            );
        CREATE TABLE pengguna (
            id_pengguna INT PRIMARY KEY,
            nama_pengguna VARCHAR(255),
            email_pengguna VARCHAR(255),
            password_pengguna VARCHAR(255)
            );
            CREATE TABLE kontribusi (
                id_kontribusi INT PRIMARY KEY,
                id_proyek INT,
                id_pengguna INT,
                jumlah_kontribusi DECIMAL(10, 2),
                tanggal_kontribusi DATE,
                FOREIGN KEY (id_proyek) REFERENCES proyek(id_proyek),
                FOREIGN KEY (id_pengguna) REFERENCES pengguna(id_pengguna)
                );

### Langkah 2: Membuat Fungsi untuk Mengumpulkan Dana
    Kedua, kami akan membuat fungsi untuk mengumpulkan dana dari pengguna. Fungsi ini akan memungkinkan pengguna untuk mengirimkan kontribusi ke pro
    yek yang dipilih. Fungsi ini juga akan memastikan bahwa pengguna tidak mengirimkan kontribusi yang melebihi target dana proyek.
    sql
    CREATE FUNCTION tambah_kontribusi (
        id_proyek INT,
        id_pengguna INT,
        jumlah_kontribusi DECIMAL(10, 2)
        ) RETURNS INT AS $$
        BEGIN
        IF (jumlah_kontribusi > (SELECT target_dana FROM proyek WHERE id = proyek.id_proyek)) THEN
        RAISE EXCEPTION 'Kontribusi melebihi target dana proyek';
        END IF;
        INSERT INTO kontribusi (id_proyek, id_pengguna, jumlah_kontribusi, tanggal_kontribusi)
        VALUES (id_proyek, id_pengguna, jumlah_kontribusi, CURRENT_DATE
        );
        RETURN 1;
        END;
        $$ LANGUAGE plpgsql;
### Langkah 3: Membuat Fungsi untuk Menghitung Jumlah Kontribusi
    Ketiga, kami akan membuat fungsi untuk menghitung jumlah kontribusi yang telah danakan ke proyek. Fungsi ini akan memungkinkan pengguna
    untuk melihat jumlah kontribusi yang telah diterima oleh proyek.
    sql
    CREATE FUNCTION hitung_kontribusi (
     id_proyek INT
     ) RETURNS DECIMAL(10, 2) AS $$
     BEGIN
     RETURN (SELECT SUM(jumlah_kontribusi) FROM kontribusi WHERE id_proyek = id_proyek);
     END;
    $$ LANGUAGE plpgsql;
### Langkah 4: Membuat Fungsi untuk Menghitung Jumlah Pengguna
    Keempat, kami akan membuat fungsi untuk menghitung jumlah pengguna yang telah mengirim
    kan kontribusi ke proyek. Fungsi ini akan memungkinkan peng
    guna untuk melihat jumlah pengguna yang telah mendukung proyek.
    sql
    CREATE FUNCTION hitung_pengguna (
        id_proyek INT
        ) RETURNS INT AS $$
        BEGIN
        RETURN (SELECT COUNT(*) FROM kontribusi WHERE id_proyek = id_proyek
        );
        END;
        $$ LANGUAGE plpgsql;
### Langkah 5: Membuat Fungsi untuk Menghitung Persentase Kontribusi
    Kelima, kami akan membuat fungsi untuk menghitung persentase kontribusi yang telah
    diterima oleh proyek. Fungsi ini akan memungkinkan pengguna
    untuk melihat persentase kontribusi yang telah diterima oleh proyek.
    sql
    CREATE FUNCTION hitung_persentase (
        id_proyek INT
        ) RETURNS DECIMAL(10, 2) AS $$
        BEGIN
        RETURN (SELECT SUM(jumlah_kontribusi) FROM kontribusi WHERE id_proyek = id_proyek) / (SELECT target_dana FROM proyek WHERE id
        = id_proyek) * 100;
        END;
    $$ LANGUAGE plpgsql;
