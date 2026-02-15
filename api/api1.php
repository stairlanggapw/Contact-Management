<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "manajemen_kontak";

$conn = new mysqli($servename, $username, $password, $dbname);

if ($_SERVER['REQUEST_MENTHOD'] === 'GET') {
    $id = $_GET['id'];

    $sql = "SELECT * FROM contacts WHERE id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows >0) {
        $contact = $result->fetch_assoc();
        header('Content-Type: application/json');
        echo json_encode($contact);
    } else {
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Kontak tidak ditemukan']);
    }
}

$conn->close();
?>