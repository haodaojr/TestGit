<?php
// products.php - CRUD sản phẩm sử dụng session và hỗ trợ tìm kiếm, lọc, sắp xếp, phân trang
if (!isset($_SESSION['products'])) {
    $_SESSION['products'] = [];
    $_SESSION['product_last_id'] = 0;
}
if (!isset($_SESSION['categories'])) {
    $_SESSION['categories'] = [];
}

$alert = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    $id = (int)($_POST['id'] ?? 0);
    $name = trim($_POST['name'] ?? '');
    $price = floatval($_POST['price'] ?? 0);
    $category = (int)($_POST['category_id'] ?? 0);

    if ($name === '' || $category === 0) {
        $alert = ['type' => 'danger', 'msg' => 'Vui lòng nhập đầy đủ thông tin.'];
    } else {
        if ($action === 'add') {
            $id = ++$_SESSION['product_last_id'];
            $_SESSION['products'][$id] = [
                'id' => $id,
                'name' => $name,
                'price' => $price,
                'category_id' => $category
            ];
            $alert = ['type' => 'success', 'msg' => 'Thêm sản phẩm thành công!'];
        } elseif ($action === 'edit' && isset($_SESSION['products'][$id])) {
            $_SESSION['products'][$id]['name'] = $name;
            $_SESSION['products'][$id]['price'] = $price;
            $_SESSION['products'][$id]['category_id'] = $category;
            $alert = ['type' => 'success', 'msg' => 'Cập nhật sản phẩm thành công!'];
        }
    }
}

if (isset($_GET['delete'])) {
    $deleteId = (int)$_GET['delete'];
    if (isset($_SESSION['products'][$deleteId])) {
        unset($_SESSION['products'][$deleteId]);
        $alert = ['type' => 'success', 'msg' => 'Xóa sản phẩm thành công!'];
    }
}

$edit = null;
if (isset($_GET['edit'])) {
    $editId = (int)$_GET['edit'];
    if (isset($_SESSION['products'][$editId])) {
        $edit = $_SESSION['products'][$editId];
    }
}

$search = trim($_GET['search'] ?? '');
$filterCat = (int)($_GET['cat'] ?? 0);
$sort = $_GET['sort'] ?? '';
$page = max(1, (int)($_GET['p'] ?? 1));
$perPage = 5;

$products = array_values($_SESSION['products']);

if ($search !== '') {
    $products = array_filter($products, function ($p) use ($search) {
        return stripos($p['name'], $search) !== false;
    });
}
if ($filterCat) {
    $products = array_filter($products, function ($p) use ($filterCat) {
        return $p['category_id'] === $filterCat;
    });
}

switch ($sort) {
    case 'name_asc':
        usort($products, fn($a, $b) => strcmp($a['name'], $b['name']));
        break;
    case 'name_desc':
        usort($products, fn($a, $b) => strcmp($b['name'], $a['name']));
        break;
    case 'price_asc':
        usort($products, fn($a, $b) => $a['price'] <=> $b['price']);
        break;
    case 'price_desc':
        usort($products, fn($a, $b) => $b['price'] <=> $a['price']);
        break;
}

$total = count($products);
$pages = max(1, ceil($total / $perPage));
$page = min($page, $pages);
$products = array_slice($products, ($page - 1) * $perPage, $perPage);
$categories = $_SESSION['categories'];
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quản lý sản phẩm</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container">
        <a class="navbar-brand" href="index.php">Catalog</a>
        <div class="navbar-nav">
            <a class="nav-link" href="index.php?page=categories">Danh mục</a>
            <a class="nav-link active" href="index.php?page=products">Sản phẩm</a>
            <a class="nav-link" href="index.php?page=export" target="_blank">Export JSON</a>
        </div>
    </div>
</nav>
<div class="container">
    <h1 class="mb-4">Quản lý sản phẩm</h1>
    <?php if ($alert): ?>
        <div class="alert alert-<?= $alert['type']; ?>"><?= htmlspecialchars($alert['msg']); ?></div>
    <?php endif; ?>

    <form method="post" class="mb-4">
        <input type="hidden" name="action" value="<?= $edit ? 'edit' : 'add'; ?>">
        <?php if ($edit): ?>
            <input type="hidden" name="id" value="<?= $edit['id']; ?>">
        <?php endif; ?>
        <div class="row mb-3">
            <div class="col-md-4">
                <label class="form-label">Tên sản phẩm</label>
                <input type="text" name="name" class="form-control" value="<?= htmlspecialchars($edit['name'] ?? '') ?>">
            </div>
            <div class="col-md-4">
                <label class="form-label">Danh mục</label>
                <select name="category_id" class="form-select">
                    <option value="0">Chọn danh mục</option>
                    <?php foreach ($categories as $c): ?>
                        <option value="<?= $c['id']; ?>" <?= ($edit && $edit['category_id'] == $c['id']) ? 'selected' : ''; ?>><?= htmlspecialchars($c['name']); ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="col-md-4">
                <label class="form-label">Giá</label>
                <input type="number" step="0.01" name="price" class="form-control" value="<?= htmlspecialchars($edit['price'] ?? 0) ?>">
            </div>
        </div>
        <button class="btn btn-primary" type="submit">
            <?= $edit ? 'Cập nhật' : 'Thêm'; ?>
        </button>
        <?php if ($edit): ?>
            <a href="index.php?page=products" class="btn btn-secondary ms-2">Hủy</a>
        <?php endif; ?>
    </form>

    <form method="get" class="row mb-4">
        <input type="hidden" name="page" value="products">
        <div class="col-md-3 mb-2">
            <input type="text" name="search" class="form-control" value="<?= htmlspecialchars($search) ?>" placeholder="Tìm kiếm">
        </div>
        <div class="col-md-3 mb-2">
            <select name="cat" class="form-select">
                <option value="0">Tất cả danh mục</option>
                <?php foreach ($categories as $c): ?>
                    <option value="<?= $c['id']; ?>" <?= $filterCat == $c['id'] ? 'selected' : '' ?>><?= htmlspecialchars($c['name']); ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <div class="col-md-3 mb-2">
            <select name="sort" class="form-select">
                <option value="">Mặc định</option>
                <option value="name_asc" <?= $sort === 'name_asc' ? 'selected' : '' ?>>Tên ↑</option>
                <option value="name_desc" <?= $sort === 'name_desc' ? 'selected' : '' ?>>Tên ↓</option>
                <option value="price_asc" <?= $sort === 'price_asc' ? 'selected' : '' ?>>Giá ↑</option>
                <option value="price_desc" <?= $sort === 'price_desc' ? 'selected' : '' ?>>Giá ↓</option>
            </select>
        </div>
        <div class="col-md-3 mb-2">
            <button class="btn btn-primary" type="submit">Lọc</button>
        </div>
    </form>

    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Giá</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($products as $p): ?>
                <tr>
                    <td><?= $p['id']; ?></td>
                    <td><?= htmlspecialchars($p['name']); ?></td>
                    <td><?= htmlspecialchars($categories[$p['category_id']]['name'] ?? ''); ?></td>
                    <td><?= number_format($p['price'], 2); ?></td>
                    <td>
                        <a href="index.php?page=products&edit=<?= $p['id']; ?>" class="btn btn-sm btn-warning">Sửa</a>
                        <a href="index.php?page=products&delete=<?= $p['id']; ?>" class="btn btn-sm btn-danger" onclick="return confirm('Xóa sản phẩm này?');">Xóa</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <nav>
        <ul class="pagination">
            <?php for ($i = 1; $i <= $pages; $i++): ?>
                <li class="page-item <?= $i == $page ? 'active' : '' ?>">
                    <a class="page-link" href="?page=products&p=<?= $i ?>&search=<?= urlencode($search) ?>&cat=<?= $filterCat ?>&sort=<?= $sort ?>"><?= $i ?></a>
                </li>
            <?php endfor; ?>
        </ul>
    </nav>
</div>
</body>
</html>
