<?php
// categories.php - CRUD danh mục sử dụng session
if (!isset($_SESSION['categories'])) {
    $_SESSION['categories'] = [];
    $_SESSION['category_last_id'] = 0;
}

$alert = null; // Lưu thông báo thành công hoặc lỗi

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $action = $_POST['action'] ?? '';
    $id = (int)($_POST['id'] ?? 0);

    if ($name === '') {
        $alert = ['type' => 'danger', 'msg' => 'Tên danh mục không được để trống!'];
    } else {
        if ($action === 'add') {
            $id = ++$_SESSION['category_last_id'];
            $_SESSION['categories'][$id] = ['id' => $id, 'name' => $name];
            $alert = ['type' => 'success', 'msg' => 'Thêm danh mục thành công!'];
        } elseif ($action === 'edit' && isset($_SESSION['categories'][$id])) {
            $_SESSION['categories'][$id]['name'] = $name;
            $alert = ['type' => 'success', 'msg' => 'Cập nhật danh mục thành công!'];
        }
    }
}

if (isset($_GET['delete'])) {
    $deleteId = (int)$_GET['delete'];
    if (isset($_SESSION['categories'][$deleteId])) {
        unset($_SESSION['categories'][$deleteId]);
        $alert = ['type' => 'success', 'msg' => 'Xóa danh mục thành công!'];
    }
}

$edit = null;
if (isset($_GET['edit'])) {
    $editId = (int)$_GET['edit'];
    if (isset($_SESSION['categories'][$editId])) {
        $edit = $_SESSION['categories'][$editId];
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quản lý danh mục</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container">
        <a class="navbar-brand" href="index.php">Catalog</a>
        <div class="navbar-nav">
            <a class="nav-link active" href="index.php?page=categories">Danh mục</a>
            <a class="nav-link" href="index.php?page=products">Sản phẩm</a>
            <a class="nav-link" href="index.php?page=export" target="_blank">Export JSON</a>
        </div>
    </div>
</nav>
<div class="container">
    <h1 class="mb-4">Quản lý danh mục</h1>
    <?php if ($alert): ?>
        <div class="alert alert-<?= $alert['type']; ?>"><?= htmlspecialchars($alert['msg']); ?></div>
    <?php endif; ?>

    <form method="post" class="mb-4">
        <input type="hidden" name="action" value="<?= $edit ? 'edit' : 'add'; ?>">
        <?php if ($edit): ?>
            <input type="hidden" name="id" value="<?= $edit['id']; ?>">
        <?php endif; ?>
        <div class="mb-3">
            <label class="form-label">Tên danh mục</label>
            <input type="text" name="name" class="form-control" value="<?= htmlspecialchars($edit['name'] ?? '') ?>">
        </div>
        <button class="btn btn-primary" type="submit">
            <?= $edit ? 'Cập nhật' : 'Thêm'; ?>
        </button>
        <?php if ($edit): ?>
            <a href="index.php?page=categories" class="btn btn-secondary ms-2">Hủy</a>
        <?php endif; ?>
    </form>

    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên danh mục</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($_SESSION['categories'] as $c): ?>
                <tr>
                    <td><?= $c['id']; ?></td>
                    <td><?= htmlspecialchars($c['name']); ?></td>
                    <td>
                        <a href="index.php?page=categories&edit=<?= $c['id']; ?>" class="btn btn-sm btn-warning">Sửa</a>
                        <a href="index.php?page=categories&delete=<?= $c['id']; ?>" class="btn btn-sm btn-danger" onclick="return confirm('Xóa danh mục này?');">Xóa</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>
</body>
</html>
