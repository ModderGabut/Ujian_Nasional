<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $password = trim($_POST['password']);

    $passwordBenar = "SASonline123";

    if ($password === $passwordBenar) {
        $_SESSION['login'] = true;
        header("Location: Form.html"); // Login berhasil ke form.html
        exit;
    } else {
        echo "<h2 style='color:red; font-size:45px'>Login Gagal!</h2>";
        echo "<p style='font-size:35px'>Password salah.</p>";
        /* echo "<p>Anda akan dialihkan kembali ke halaman login...</p>"; */
        echo " <script>
                setTimeout(function(){
                    window.location.href = 'login.html';
                }, 3000);
              </script>";
        exit;
    }
}
?>