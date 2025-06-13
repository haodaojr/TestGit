<?php
session_start();

// Determine which page to display based on the "page" query parameter
$page = $_GET['page'] ?? 'categories';

switch ($page) {
    case 'products':
        require __DIR__ . '/products.php';
        break;
    case 'categories':
        require __DIR__ . '/categories.php';
        break;
    case 'export':
        // Export session data as JSON
        header('Content-Type: application/json');
        echo json_encode([
            'categories' => $_SESSION['categories'] ?? [],
            'products' => $_SESSION['products'] ?? []
        ]);
        break;
    default:
        // Unknown page - redirect to category management
        header('Location: ?page=categories');
        exit;
}
