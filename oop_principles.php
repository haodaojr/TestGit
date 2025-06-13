<?php
// Ví dụ minh họa 4 tính chất của lập trình hướng đối tượng (OOP) trong PHP
// 1. Tính đóng gói (Encapsulation)
// 2. Tính kế thừa (Inheritance)
// 3. Tính đa hình (Polymorphism)
// 4. Tính trừu tượng (Abstraction)

abstract class Animal {
    // Đóng gói: thuộc tính chỉ truy cập thông qua getter
    private $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function getName(): string {
        return $this->name;
    }

    // Trừu tượng: phương thức phải được lớp con cài đặt
    abstract public function makeSound(): string;
}

// Kế thừa: Dog mở rộng Animal
class Dog extends Animal {
    public function makeSound(): string {
        return "Gâu gâu";
    }
}

// Kế thừa: Cat mở rộng Animal
class Cat extends Animal {
    public function makeSound(): string {
        return "Meo meo";
    }
}

// Hàm sử dụng đa hình: có thể nhận bất kỳ đối tượng Animal nào
function describe(Animal $animal): void {
    echo $animal->getName() . ': ' . $animal->makeSound() . PHP_EOL;
}

$dog = new Dog('Chó');
$cat = new Cat('Mèo');

describe($dog);
describe($cat);
?>
