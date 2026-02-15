<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "manajemen_kontak";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = 'SELECT * FROM contacts';
    $result = $conn->query($sql);
    $contacts = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $contacts[] = [
                'id' => $row['id'],
                'name' => $row['name'],
                'email' => $row['email']
            ];
        }
    }

    header('Content-Type: application/json');
    echo json_encode($contacts);
}

if ($_SERVER['REQUEST_MENTHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $name = $data['name'];
    $email = $data['email'];

    $sql = "INSERT INTO contacts (name, email) VALUES ('$name', '$email')";
    $conn->query($sql);

    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
}

if ($_SERVER['REQUEST_MENTHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $_GET['id'];
    $name = $data['name'];
    $email = $data['email'];

    $sql = "UPDATE contacts SET name = '$name', email = '$email' WHERE id = $id";
    $conn->query($sql);
    
    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
}

if ($_SERVER['REQUEST_MENTHOD'] === 'DELETE') {
    $id = $_GET['id'];

    $sql = "DELETE FROM contacts WHERE id = $id";
    $conn->query($sql);

    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
}

$conn->close();

?>