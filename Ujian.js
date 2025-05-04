const questions = [
  // --- SOAL IPA ---
  {
    question: "[IPA] 1. Benda yang dapat menghantarkan listrik disebut ...",
    options: ["Konduktor", "Isolator", "Transistor", "Semikonduktor"],
    answer: 0
  },
  {
    question: "[IPA] 2. Bagian tumbuhan yang berfungsi menyerap air adalah ...",
    options: ["Daun", "Batang", "Akar", "Bunga"],
    answer: 2
  },
  {
    question: "[IPA] 3. Proses fotosintesis terjadi di bagian ...",
    options: ["Daun", "Akar", "Batang", "Biji"],
    answer: 0
  },
  {
    question: "[IPA] 4. Sumber energi utama bagi bumi adalah ...",
    options: ["Angin", "Air", "Matahari", "Listrik"],
    answer: 2
  },
  {
    question: "[IPA] 5. Air berubah menjadi uap pada suhu ...",
    options: ["0°C", "50°C", "100°C", "200°C"],
    answer: 2
  },
  {
    question: "[IPA] 6. Alat untuk mengukur suhu adalah ...",
    options: ["Barometer", "Termometer", "Higrometer", "Altimeter"],
    answer: 1
  },
  {
    question: "[IPA] 7. Hewan pemakan tumbuhan disebut ...",
    options: ["Karnivora", "Omnivora", "Herbivora", "Detrivora"],
    answer: 2
  },
  {
    question: "[IPA] 8. Gerhana matahari terjadi saat ...",
    options: ["Bulan di antara matahari dan bumi", "Matahari di antara bumi dan bulan", "Bumi di antara matahari dan bulan", "Bulan purnama"],
    answer: 0
  },
  {
    question: "[IPA] 9. Gaya yang menyebabkan benda jatuh ke bumi adalah ...",
    options: ["Gaya gesek", "Gaya dorong", "Gaya magnet", "Gaya gravitasi"],
    answer: 3
  },
  {
    question: "[IPA] 10. Alat pernapasan pada ikan adalah ...",
    options: ["Hidung", "Paru-paru", "Insang", "Kulit"],
    answer: 2
  },
  {
    question: "[IPA] 11. Contoh perubahan kimia adalah ...",
    options: ["Air membeku", "Kertas dibakar", "Es mencair", "Air menguap"],
    answer: 1
  },
  {
    question: "[IPA] 12. Planet terbesar di tata surya adalah ...",
    options: ["Bumi", "Mars", "Saturnus", "Jupiter"],
    answer: 3
  },
  {
    question: "[IPA] 13. Lapisan ozon berfungsi untuk ...",
    options: ["Menahan cahaya", "Menjaga suhu bumi", "Menyerap sinar ultraviolet", "Menimbulkan hujan"],
    answer: 2
  },
  {
    question: "[IPA] 14. Benda yang tidak dapat kembali ke bentuk semula disebut ...",
    options: ["Elastis", "Plastis", "Fleksibel", "Lunak"],
    answer: 1
  },
  {
    question: "[IPA] 15. Contoh energi terbarukan adalah ...",
    options: ["Minyak bumi", "Batu bara", "Gas alam", "Energi surya"],
    answer: 3
  },
  {
    question: "[IPA] 16. Hasil utama fotosintesis adalah ...",
    options: ["Oksigen dan air", "Karbon dioksida dan air", "Glukosa dan oksigen", "Glukosa dan karbon"],
    answer: 2
  },
  {
    question: "[IPA] 17. Benda yang dapat ditarik magnet disebut ...",
    options: ["Kayu", "Kaca", "Besi", "Kertas"],
    answer: 2
  },
  {
    question: "[IPA] 18. Hewan yang berkembang biak dengan bertelur disebut ...",
    options: ["Vivipar", "Ovipar", "Ovovivipar", "Herbivor"],
    answer: 1
  },
  {
    question: "[IPA] 19. Urutan planet dari matahari dimulai dari ...",
    options: ["Mars", "Bumi", "Venus", "Merkurius"],
    answer: 3
  },
  {
    question: "[IPA] 20. Benda langit yang memancarkan cahaya sendiri adalah ...",
    options: ["Bulan", "Planet", "Matahari", "Asteroid"],
    answer: 2
  },

  // --- SOAL IPS ---
  {
    question: "[IPS] 21. Ibu kota negara Indonesia adalah ...",
    options: ["Bandung", "Surabaya", "Jakarta", "Medan"],
    answer: 2
  },
  {
    question: "[IPS] 22. Sungai terpanjang di Indonesia adalah ...",
    options: ["Sungai Bengawan Solo", "Sungai Kapuas", "Sungai Musi", "Sungai Mahakam"],
    answer: 1
  },
  {
    question: "[IPS] 23. Pancasila terdiri dari ... sila.",
    options: ["3", "4", "5", "6"],
    answer: 2
  },
  {
    question: "[IPS] 24. Kerajaan Hindu tertua di Indonesia adalah ...",
    options: ["Majapahit", "Sriwijaya", "Kutai", "Singasari"],
    answer: 2
  },
  {
    question: "[IPS] 25. Gunung tertinggi di Indonesia adalah ...",
    options: ["Gunung Merapi", "Gunung Rinjani", "Gunung Semeru", "Puncak Jaya"],
    answer: 3
  },
  {
    question: "[IPS] 26. ASEAN merupakan organisasi negara-negara di kawasan ...",
    options: ["Eropa", "Afrika", "Asia Tenggara", "Amerika Selatan"],
    answer: 2
  },
  {
    question: "[IPS] 27. Candi Borobudur dibangun pada masa kerajaan ...",
    options: ["Majapahit", "Sriwijaya", "Mataram Kuno", "Singasari"],
    answer: 2
  },
  {
    question: "[IPS] 28. Hari Kemerdekaan Indonesia diperingati setiap tanggal ...",
    options: ["17 Juli", "17 Agustus", "10 November", "1 Juni"],
    answer: 1
  },
  {
    question: "[IPS] 29. Jenis mata pencaharian utama di daerah pantai adalah ...",
    options: ["Bertani", "Berdagang", "Beternak", "Nelayan"],
    answer: 3
  },
  {
    question: "[IPS] 30. Letak geografis Indonesia berada di antara dua benua, yaitu ...",
    options: ["Asia dan Afrika", "Asia dan Australia", "Asia dan Eropa", "Eropa dan Amerika"],
    answer: 1
  },
  {
    question: "[IPS] 31. Sumpah Pemuda dicetuskan pada tahun ...",
    options: ["1928", "1945", "1908", "1965"],
    answer: 0
  },
  {
    question: "[IPS] 32. Ibukota provinsi Jawa Barat adalah ...",
    options: ["Bekasi", "Bandung", "Bogor", "Cirebon"],
    answer: 1
  },
  {
    question: "[IPS] 33. Indonesia merdeka dari penjajahan ...",
    options: ["Belanda", "Portugis", "Spanyol", "Inggris"],
    answer: 0
  },
  {
    question: "[IPS] 34. Pulau terbesar di Indonesia adalah ...",
    options: ["Jawa", "Bali", "Sumatera", "Kalimantan"],
    answer: 3
  },
  {
    question: "[IPS] 35. Lembaga yang mengatur hukum di Indonesia adalah ...",
    options: ["KPK", "KPU", "MA", "BNN"],
    answer: 2
  },
  {
    question: "[IPS] 36. Nilai tukar uang disebut juga ...",
    options: ["Inflasi", "Ekspor", "Kurs", "Impor"],
    answer: 2
  },
  {
    question: "[IPS] 37. Contoh kegiatan ekonomi distribusi adalah ...",
    options: ["Menanam padi", "Mengangkut barang", "Menjual hasil panen", "Mengolah hasil bumi"],
    answer: 1
  },
  {
    question: "[IPS] 38. Rumah adat Tongkonan berasal dari ...",
    options: ["Papua", "Sumatera", "Toraja", "Bali"],
    answer: 2
  },
  {
    question: "[IPS] 39. Pasar yang hanya menjual barang-barang tertentu disebut ...",
    options: ["Pasar tradisional", "Pasar loak", "Pasar swalayan", "Pasar khusus"],
    answer: 3
  },
  {
    question: "[IPS] 40. Perdagangan antarnegara disebut juga ...",
    options: ["Distribusi lokal", "Perdagangan internasional", "Monopoli", "Pasar bebas"],
    answer: 1
  },

  // --- SOAL BAHASA INDONESIA ---
  {
    question: "[B. Indo] 1. Sinonim dari kata 'cepat' adalah ...",
    options: ["Lambat", "Segera", "Tepat", "Lincah"],
    answer: 1
  },
  {
    question: "[B. Indo] 2. Antonim dari kata 'tinggi' adalah ...",
    options: ["Rendah", "Pendek", "Tinggi", "Lebar"],
    answer: 0
  },
  {
    question: "[B. Indo] 3. Contoh kalimat yang menggunakan kata 'sehingga' dengan tepat adalah ...",
    options: ["Dia berjalan dengan cepat sehingga sampai lebih awal.", "Dia berjalan cepat sehingga sampai.", "Dia cepat sehingga sampai lebih.", "Dia cepat sehingga berjalan."],
    answer: 0
  },
  {
    question: "[B. Indo] 4. Ciri dari teks narasi adalah ...",
    options: ["Mengandung informasi ilmiah", "Menceritakan kejadian atau peristiwa", "Menunjukkan argumen atau pendapat", "Menyajikan fakta dan data"],
    answer: 1
  },
  {
    question: "[B. Indo] 5. Kalimat 'Adik membeli buku di toko' termasuk kalimat ...",
    options: ["Deklaratif", "Interogatif", "Eksklamatif", "Imperatif"],
    answer: 0
  },
  {
    question: "[B. Indo] 6. Dalam sebuah paragraf, gagasan utama terdapat pada ...",
    options: ["Kalimat utama", "Kalimat penjelas", "Kalimat penutup", "Kalimat penghubung"],
    answer: 0
  },
  {
    question: "[B. Indo] 7. Makna kata 'pandai' dalam kalimat 'Dia pandai bermain piano' adalah ...",
    options: ["Cerdas", "Lincah", "Terampil", "Sabar"],
    answer: 2
  },
  {
    question: "[B. Indo] 8. Kalimat yang menggunakan kata 'namun' dengan tepat adalah ...",
    options: ["Dia rajin, namun hasilnya buruk.", "Dia rajin namun bekerja keras.", "Dia rajin namun belajar.", "Dia rajin namun tidur."],
    answer: 0
  },
  {
    question: "[B. Indo] 9. Sebuah cerita yang berisi pengalaman pribadi disebut ...",
    options: ["Cerpen", "Novel", "Biografi", "Autobiografi"],
    answer: 3
  },
  {
    question: "[B. Indo] 10. Dalam sebuah karangan, 'pendahuluan' berfungsi untuk ...",
    options: ["Menjelaskan isi karangan", "Menarik perhatian pembaca", "Menyimpulkan karangan", "Menyampaikan pokok masalah"],
    answer: 3
  },
  {
    question: "[B. Indo] 11. Kata yang tepat untuk melengkapi kalimat 'Mereka pergi ke pasar ... hari Minggu' adalah ...",
    options: ["pada", "di", "ke", "untuk"],
    answer: 0
  },
  {
    question: "[B. Indo] 12. Bagian yang berfungsi sebagai pembuka dalam sebuah teks prosedur adalah ...",
    options: ["Tujuan", "Langkah-langkah", "Bahan", "Alat"],
    answer: 0
  },
  {
    question: "[B. Indo] 13. Dalam teks deskripsi, ciri-ciri yang dijelaskan bersifat ...",
    options: ["Konkretnya", "Abstraknya", "Generiknya", "Umumnya"],
    answer: 0
  },
  {
    question: "[B. Indo] 14. Kata yang tepat untuk melengkapi kalimat 'Dia sangat ... dalam bermain catur' adalah ...",
    options: ["Pandai", "Bersikap", "Bercanda", "Cerdas"],
    answer: 0
  },
  {
    question: "[B. Indo] 15. Teks yang berisi informasi dan penjelasan mengenai objek disebut ...",
    options: ["Teks deskripsi", "Teks prosedur", "Teks narasi", "Teks eksposisi"],
    answer: 0
  },
  {
    question: "[B. Indo] 16. Kalimat yang memiliki makna majas personifikasi adalah ...",
    options: ["Angin berbisik lembut", "Burung terbang tinggi", "Bumi berputar", "Hujan turun deras"],
    answer: 0
  },
  {
    question: "[B. Indo] 17. Dalam paragraf, kalimat yang mengandung opini disebut ...",
    options: ["Kalimat utama", "Kalimat pendapat", "Kalimat penjelas", "Kalimat penutup"],
    answer: 1
  },
  {
    question: "[B. Indo] 18. Karya sastra yang termasuk dalam jenis prosa adalah ...",
    options: ["Puisi", "Cerpen", "Drama", "Pantun"],
    answer: 1
  },
  {
    question: "[B. Indo] 19. 'Aku akan pergi ke sekolah' adalah contoh kalimat dengan jenis kata kerja ...",
    options: ["Aktif", "Pasif", "Bertindak", "Lancar"],
    answer: 0
  },
  {
    question: "[B. Indo] 20. Kalimat yang tepat menggunakan kata 'karena' adalah ...",
    options: ["Dia datang terlambat karena hujan", "Dia datang terlambat karena juga hujan", "Dia datang terlambat karena dia hujan", "Dia datang terlambat karena hujan juga"],
    answer: 0
  },
  {
    question: "[B. Inggris] 1. What is the correct plural form of 'child'?",
    options: ["Childs", "Childes", "Children", "Childen"],
    answer: 2
  },
  {
    question: "[B. Inggris] 2. She _____ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: 1
  },
  {
    question: "[B. Inggris] 3. Which word is a verb?",
    options: ["Quickly", "Happy", "Run", "Beautiful"],
    answer: 2
  },
  {
    question: "[B. Inggris] 4. I have _____ apple in my bag.",
    options: ["a", "an", "the", "some"],
    answer: 1
  },
  {
    question: "[B. Inggris] 5. The opposite of 'hot' is ...",
    options: ["Cold", "Warm", "Cool", "Boil"],
    answer: 0
  },
  {
    question: "[B. Inggris] 6. My father _____ TV last night.",
    options: ["watch", "watches", "watched", "watching"],
    answer: 2
  },
  {
    question: "[B. Inggris] 7. Which sentence is correct?",
    options: ["He don't like milk", "He doesn't like milk", "He didn't likes milk", "He not like milk"],
    answer: 1
  },
  {
    question: "[B. Inggris] 8. 'Library' is a place to ...",
    options: ["Buy books", "Read and borrow books", "Eat and drink", "Play games"],
    answer: 1
  },
  {
    question: "[B. Inggris] 9. The sun _____ in the east.",
    options: ["rise", "rises", "rose", "rising"],
    answer: 1
  },
  {
    question: "[B. Inggris] 10. How do you say 'selamat pagi' in English?",
    options: ["Good night", "Good afternoon", "Good morning", "Good evening"],
    answer: 2
  },
  {
    question: "[B. Inggris] 11. They _____ soccer every Sunday.",
    options: ["plays", "played", "play", "playing"],
    answer: 2
  },
  {
    question: "[B. Inggris] 12. Which word is an adjective?",
    options: ["Run", "Swim", "Beautiful", "Carefully"],
    answer: 2
  },
  {
    question: "[B. Inggris] 13. Where _____ you live?",
    options: ["do", "does", "did", "doing"],
    answer: 0
  },
  {
    question: "[B. Inggris] 14. 'Doctor' is someone who ...",
    options: ["Teaches students", "Cooks food", "Drives a car", "Treats sick people"],
    answer: 3
  },
  {
    question: "[B. Inggris] 15. I usually _____ my homework at night.",
    options: ["does", "do", "doing", "did"],
    answer: 1
  },
  {
    question: "[B. Inggris] 16. The color of the sky is usually ...",
    options: ["Blue", "Green", "Yellow", "Red"],
    answer: 0
  },
  {
    question: "[B. Inggris] 17. What time is it? It’s _____ 3 o’clock.",
    options: ["on", "at", "in", "to"],
    answer: 1
  },
  {
    question: "[B. Inggris] 18. We _____ a movie last weekend.",
    options: ["see", "saw", "seen", "seeing"],
    answer: 1
  },
  {
    question: "[B. Inggris] 19. Which is a correct question?",
    options: ["Where you live?", "Where do you live?", "Where you does live?", "Where are you live?"],
    answer: 1
  },
  {
    question: "[B. Inggris] 20. 'He is reading a book.' The tense is ...",
    options: ["Simple past", "Present continuous", "Future", "Present perfect"],
    answer: 1
  }
];

let timeLeft = 4800; // 90 menit dalam detik
const timerDisplay = document.getElementById("timer");

const timer = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    submitQuiz();
  }
}, 1000);

window.onload = () => {
  const quizForm = document.getElementById("quizForm");
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<p>${q.question}</p>`;
    q.options.forEach((opt, j) => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${j}" required />
          ${opt}
        </label><br/>
      `;
    });
    quizForm.appendChild(div);
  });
};

let quizSubmitted = false;

function submitQuiz() {
  if (quizSubmitted) return;

  const form = document.forms["quizForm"];
  let score = 0;
  let feedback = "";
  const totalQuestions = questions.length;

  for (let i = 0; i < totalQuestions; i++) {
    const selected = form[`q${i}`].value;

    if (selected === "") {
      const warning = document.getElementById("warning");
      warning.classList.add("show");
      warning.innerText = "Silakan jawab semua pertanyaan sebelum mengirim.";
      setTimeout(() => {
        warning.classList.remove("show");
      }, 3000);
      return;
    }

    if (parseInt(selected) === questions[i].answer) {
      score++;
    }
  }

  const finalScore = Math.round((score / totalQuestions) * 100);
  const salah = totalQuestions - score;
  feedback = `Skor kamu: ${finalScore}\nSalah: ${salah}`;
  document.getElementById("result").innerText = feedback;

  quizSubmitted = true;
}