// ===== Уровень A — Условные операторы =====

// Задание 161. Проверка возраста для участия в хакатоне
console.log("--- Задание 161 ---");
{
  function hackathon(age) {
    if (age >= 16 && age <= 25) {
      return "Регистрация разрешена";
    } else {
      return "Возраст не соответствует требованиям";
    }
  }
  let age = 19;
  console.log(age + ": " + hackathon(age)); // Регистрация разрешена
  [15, 16, 25, 26].forEach(function (a) {
    console.log(a + ": " + hackathon(a));
  });
}

// Задание 162. Проверка количества свободных компьютеров
console.log("--- Задание 162 ---");
{
  function labStatus(totalComputers, occupiedComputers) {
    if (occupiedComputers < 0 || occupiedComputers > totalComputers) {
      return "Ошибка: занятых компьютеров не может быть меньше 0 или больше общего количества";
    }
    let free = totalComputers - occupiedComputers;
    if (free > 5) {
      return "Свободно: " + free + " — Места есть";
    } else if (free >= 1) {
      return "Свободно: " + free + " — Мест осталось мало";
    } else {
      return "Свободно: 0 — Кабинет заполнен";
    }
  }
  let totalComputers = 24;
  let occupiedComputers = 18;
  console.log("Занято " + occupiedComputers + " из " + totalComputers + ": " + labStatus(totalComputers, occupiedComputers)); // 6 — Места есть
  [20, 23, 24, 30, -1].forEach(function (o) {
    console.log("Занято " + o + " из 24: " + labStatus(24, o));
  });
}

// Задание 163. Проверка уровня знаний по JavaScript
console.log("--- Задание 163 ---");
{
  function knowledgeLevel(score) {
    if (score < 0 || score > 100) {
      return "Ошибка: баллы должны быть от 0 до 100";
    } else if (score < 40) {
      return "Начальный";
    } else if (score < 60) {
      return "Базовый";
    } else if (score < 80) {
      return "Средний";
    } else {
      return "Продвинутый";
    }
  }
  let score = 76;
  console.log(score + ": " + knowledgeLevel(score)); // Средний
  [39, 40, 79, 80, 101].forEach(function (s) {
    console.log(s + ": " + knowledgeLevel(s));
  });
}

// Задание 164. Проверка доставки заказа
console.log("--- Задание 164 ---");
{
  function orderStatus(isPaid, inStock) {
    if (isPaid && inStock) {
      return "Заказ отправлен";
    } else if (!isPaid && !inStock) {
      return "Ожидается оплата; Товар отсутствует";
    } else if (!isPaid) {
      return "Ожидается оплата";
    } else {
      return "Товар отсутствует";
    }
  }
  let isPaid = true;
  let inStock = false;
  console.log("Оплачен: " + isPaid + ", на складе: " + inStock + " -> " + orderStatus(isPaid, inStock)); // Товар отсутствует
  [[true, true], [false, true], [false, false]].forEach(function (c) {
    console.log("Оплачен: " + c[0] + ", на складе: " + c[1] + " -> " + orderStatus(c[0], c[1]));
  });
}

// Задание 165. Проверка времени выполнения теста
console.log("--- Задание 165 ---");
{
  function testResult(timeSpent, score) {
    if (timeSpent < 0 || score < 0 || score > 100) {
      return "Ошибка: некорректные данные";
    }
    if (timeSpent <= 30) {
      if (score >= 50) {
        return "Тест успешно завершён";
      } else {
        return "Тест не сдан";
      }
    } else {
      return "Превышено время";
    }
  }
  let timeSpent = 25;
  let score = 80;
  console.log(timeSpent + " мин, " + score + " баллов: " + testResult(timeSpent, score)); // успешно
  console.log("35 мин, 80 баллов: " + testResult(35, 80));  // Превышено время
  console.log("25 мин, 40 баллов: " + testResult(25, 40));  // Тест не сдан
  console.log("30 мин, 50 баллов: " + testResult(30, 50));  // успешно (границы)
  console.log("-5 мин, 80 баллов: " + testResult(-5, 80));  // ошибка
}

// ===== Уровень B — Циклы и массивы =====

// Задание 166. Анализ посещаемости студентов
console.log("--- Задание 166 ---");
{
  let attendance = [1, 1, 0, 1, 0, 1, 1, 1, 0, 1];
  let present = 0;
  let absent = 0;
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === 1) {
      present++;
    } else {
      absent++;
    }
  }
  console.log("Присутствуют: " + present + ", отсутствуют: " + absent); // 7 и 3
  console.log("Посещаемость: " + present / attendance.length * 100 + "%"); // 70%
}

// Задание 167. Вывод чисел в обратном порядке
console.log("--- Задание 167 ---");
{
  let all = [];
  let multiplesOf5 = [];
  for (let i = 50; i >= 1; i--) {
    all.push(i);
    if (i % 5 === 0) {
      multiplesOf5.push(i);
    }
  }
  console.log("От 50 до 1: " + all.join(", "));
  console.log("Кратные 5: " + multiplesOf5.join(", ")); // 50, 45, ... 5
}

// Задание 168. Анализ стоимости IT-оборудования
console.log("--- Задание 168 ---");
{
  let equipment = [180000, 250000, 95000, 420000, 160000, 310000];
  let total = 0;
  let max = equipment[0];
  let min = equipment[0];
  let expensive = [];
  for (let i = 0; i < equipment.length; i++) {
    total += equipment[i];
    if (equipment[i] > max) max = equipment[i];
    if (equipment[i] < min) min = equipment[i];
    if (equipment[i] > 200000) expensive.push(equipment[i]);
  }
  console.log("Общая стоимость: " + total + " ₸");                                  // 1415000
  console.log("Максимальная цена: " + max + " ₸");                                   // 420000
  console.log("Минимальная цена: " + min + " ₸");                                   // 95000
  console.log("Средняя стоимость: " + (total / equipment.length).toFixed(2) + " ₸"); // 235833.33
  console.log("Дороже 200 000 ₸: " + expensive.join(", ") + " (" + expensive.length + " шт.)");
}

// Задание 169. Поиск чисел, кратных четырём
console.log("--- Задание 169 ---");
{
  let found = [];
  let sum = 0;
  for (let i = 1; i <= 80; i++) {
    if (i % 4 === 0) {
      found.push(i);
      sum += i;
    }
  }
  console.log("Числа: " + found.join(", "));
  console.log("Количество: " + found.length + ", сумма: " + sum); // 20, 840
}

// Задание 170. Анализ длины слов
console.log("--- Задание 170 ---");
{
  let words = ["computer", "AI", "programming", "web", "algorithm"];
  let shortest = words[0];
  let longest = words[0];
  let totalLength = 0;
  for (let i = 0; i < words.length; i++) {
    console.log(words[i] + ": " + words[i].length + " символов");
    totalLength += words[i].length;
    if (words[i].length < shortest.length) shortest = words[i];
    if (words[i].length > longest.length) longest = words[i];
  }
  console.log("Самое короткое слово: " + shortest);                  // AI
  console.log("Самое длинное слово: " + longest);                    // programming
  console.log("Средняя длина слов: " + totalLength / words.length);  // 6.6
}

// Задание 171. Подсчёт количества товаров
console.log("--- Задание 171 ---");
{
  let quantities = [12, 5, 8, 20, 3, 15, 7];
  let total = 0;
  let min = quantities[0];
  let max = quantities[0];
  let below10 = 0;
  for (let i = 0; i < quantities.length; i++) {
    total += quantities[i];
    if (quantities[i] < min) min = quantities[i];
    if (quantities[i] > max) max = quantities[i];
    if (quantities[i] < 10) below10++;
  }
  console.log("Общее количество: " + total);        // 70
  console.log("Минимальный остаток: " + min);        // 3
  console.log("Максимальный остаток: " + max);       // 20
  console.log("Позиций с остатком менее 10: " + below10); // 4
}

// Задание 172. Формирование массива кубов
console.log("--- Задание 172 ---");
{
  let cubes = [];
  for (let i = 1; i <= 10; i++) {
    cubes.push(i ** 3);
  }
  console.log(cubes); // [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
}

// Задание 173. Проверка наличия товара
console.log("--- Задание 173 ---");
{
  let products = ["Ноутбук", "Монитор", "Клавиатура", "Мышь", "Принтер"];
  let search = "Принтер";
  console.log(search + ": " + (products.includes(search) ? "Товар найден" : "Товар отсутствует"));
  // Дополнительно: поиск без учёта регистра
  function findIgnoreCase(name) {
    let lowerProducts = products.map(function (p) { return p.toLowerCase(); });
    return lowerProducts.includes(name.trim().toLowerCase());
  }
  console.log('"принтер" (точный поиск): ' + (products.includes("принтер") ? "Товар найден" : "Товар отсутствует"));
  console.log('"принтер" (без учёта регистра): ' + (findIgnoreCase("принтер") ? "Товар найден" : "Товар отсутствует"));
  console.log('"Телефон" (без учёта регистра): ' + (findIgnoreCase("Телефон") ? "Товар найден" : "Товар отсутствует"));
}

// ===== Уровень C — Функции и объекты =====

// Задание 174. Расчёт стоимости аренды оборудования
console.log("--- Задание 174 ---");
{
  function calculateRentalCost(rate, hours) {
    if (typeof rate !== "number" || typeof hours !== "number" ||
        isNaN(rate) || isNaN(hours) || rate <= 0 || hours <= 0) {
      return null;
    }
    let cost = rate * hours;
    if (hours > 5) {
      cost = cost * 0.9; // скидка 10%
    }
    return cost;
  }
  function showRental(rate, hours) {
    let cost = calculateRentalCost(rate, hours);
    console.log(rate + " ₸/ч × " + hours + " ч: " + (cost === null ? "Ошибка: некорректные данные" : cost + " ₸"));
  }
  showRental(1500, 6);  // 8100 ₸ (со скидкой 10%)
  showRental(1500, 5);  // 7500 ₸ (скидки нет: ровно 5 часов)
  showRental(1500, 3);  // 4500 ₸
  showRental(1500, 0);  // ошибка
  showRental(-100, 4);  // ошибка
}

// Задание 175. Проверка статуса проекта
console.log("--- Задание 175 ---");
{
  function checkProjectStatus(project) {
    if (project.progress === 100) {
      return "Проект завершён";
    } else if (project.deadlinePassed) {
      return "Проект просрочен";
    } else if (project.progress < 50) {
      return "Начальный этап";
    } else {
      return "Проект в разработке";
    }
  }
  let project = { name: "AI Assistant", progress: 75, deadlinePassed: false };
  console.log(project.name + ": " + checkProjectStatus(project)); // Проект в разработке
  console.log("progress 100, срок истёк: " + checkProjectStatus({ name: "A", progress: 100, deadlinePassed: true }));
  console.log("progress 60, срок истёк: " + checkProjectStatus({ name: "B", progress: 60, deadlinePassed: true }));
  console.log("progress 30, срок не истёк: " + checkProjectStatus({ name: "C", progress: 30, deadlinePassed: false }));
}

// Задание 176. Генератор сертификатов
console.log("--- Задание 176 ---");
{
  function generateCertificate(name, course, score) {
    if (score >= 70) {
      return `Сертификат: ${name} успешно прошёл(-ла) курс «${course}» с результатом ${score} баллов.`;
    } else {
      return "Сертификат не выдан";
    }
  }
  console.log(generateCertificate("Алия", "JavaScript Basics", 95));
  console.log(generateCertificate("Арман", "JavaScript Basics", 70));
  console.log(generateCertificate("Данияр", "JavaScript Basics", 65));
}

// Задание 177. Расчёт рейтинга команд
console.log("--- Задание 177 ---");
{
  let teams = [
    {name: "Code Masters", points: 85},
    {name: "AI Innovators", points: 98},
    {name: "Digital Team", points: 91},
    {name: "Web Creators", points: 79}
  ];
  function rankTeams(teams) {
    let sorted = teams.slice().sort(function (a, b) { return b.points - a.points; });
    let sum = 0;
    let ranking = sorted.map(function (t, index) {
      sum += t.points;
      return { place: index + 1, name: t.name, points: t.points };
    });
    return { ranking: ranking, winner: ranking[0].name, average: sum / teams.length };
  }
  let result = rankTeams(teams);
  result.ranking.forEach(function (t) {
    console.log(t.place + " место: " + t.name + " — " + t.points);
  });
  console.log("Победитель: " + result.winner);        // AI Innovators
  console.log("Средний балл: " + result.average);     // 88.25
}

// Задание 178. Расчёт расхода материалов для 3D-печати
console.log("--- Задание 178 ---");
{
  let models = [
    {name: "Robot Case", grams: 120},
    {name: "Phone Stand", grams: 45},
    {name: "Gear", grams: 30}
  ];
  function calculatePrintCost(grams, pricePerGram) {
    return grams * pricePerGram;
  }
  let pricePerGram = 8;
  let totalGrams = 0;
  let totalCost = 0;
  let maxModel = models[0];
  models.forEach(function (m) {
    let cost = calculatePrintCost(m.grams, pricePerGram);
    totalGrams += m.grams;
    totalCost += cost;
    if (m.grams > maxModel.grams) maxModel = m;
    console.log(m.name + ": " + m.grams + " г, стоимость " + cost + " ₸");
  });
  console.log("Общий расход пластика: " + totalGrams + " г");                           // 195
  console.log("Больше всего пластика: " + maxModel.name + " (" + maxModel.grams + " г)"); // Robot Case
  console.log("Итоговая стоимость печати: " + totalCost + " ₸");                         // 1560
}

// Задание 179. Анализ использования компьютеров
console.log("--- Задание 179 ---");
{
  let computers = [
    {id: 1, hours: 6, working: true},
    {id: 2, hours: 0, working: false},
    {id: 3, hours: 9, working: true},
    {id: 4, hours: 4, working: true}
  ];
  let working = computers.filter(function (c) { return c.working; });
  let broken = computers.filter(function (c) { return !c.working; });
  let totalHours = 0;
  let busiest = computers[0];
  computers.forEach(function (c) {
    totalHours += c.hours;
    if (c.hours > busiest.hours) busiest = c;
  });
  console.log("Исправных компьютеров: " + working.length);                                 // 3
  console.log("Неисправные компьютеры (id): " + broken.map(function (c) { return c.id; }).join(", ")); // 2
  console.log("Общее время работы: " + totalHours + " ч");                                  // 19
  console.log("Максимальное время работы: компьютер " + busiest.id + " (" + busiest.hours + " ч)"); // 3
}

// Задание 180. Подсчёт стоимости разработки проекта
console.log("--- Задание 180 ---");
{
  let expenses = [
    {category: "Дизайн", amount: 50000},
    {category: "Разработка", amount: 180000},
    {category: "Тестирование", amount: 40000},
    {category: "Хостинг", amount: 25000}
  ];
  function analyzeBudget(expenses) {
    let total = 0;
    let biggest = expenses[0];
    expenses.forEach(function (e) {
      total += e.amount;
      if (e.amount > biggest.amount) biggest = e;
    });
    let items = expenses.map(function (e) {
      return { category: e.category, amount: e.amount, percent: e.amount / total * 100 };
    });
    return { total: total, biggest: biggest, items: items };
  }
  let budget = analyzeBudget(expenses);
  console.log("Общая стоимость проекта: " + budget.total + " ₸");                                    // 295000
  console.log("Самая дорогая статья: " + budget.biggest.category + " (" + budget.biggest.amount + " ₸)"); // Разработка
  budget.items.forEach(function (item) {
    console.log(item.category + ": " + item.percent.toFixed(2) + "%");
  });
}

// ===== Уровень D — Интерактивные веб-приложения =====
// (работают только в браузере)
if (typeof document !== "undefined") {

  // Задание 181. Электронный пропуск
  {
    // вымышленные учебные данные
    let allowed = [
      { id: "ST-1001", group: "РПО-23-1" },
      { id: "ST-1002", group: "РПО-23-1" },
      { id: "ST-2001", group: "РПО-23-2" },
      { id: "ST-3001", group: "ИС-23-1" }
    ];
    let groups = ["РПО-23-1", "РПО-23-2", "ИС-23-1"];
    let idInput = document.getElementById("passId");
    let groupSelect = document.getElementById("passGroup");
    let resultEl = document.getElementById("passResult");
    let timeEl = document.getElementById("passTime");

    groups.forEach(function (g) {
      let opt = document.createElement("option");
      opt.value = g;
      opt.textContent = g;
      groupSelect.appendChild(opt);
    });

    function show(text, kind) {
      resultEl.textContent = text;
      resultEl.className = "status " + kind;
      timeEl.textContent = "Проверено: " + new Date().toLocaleString("ru-RU");
    }

    document.getElementById("passForm").addEventListener("submit", function (e) {
      e.preventDefault();
      let id = idInput.value.trim().toUpperCase();
      let group = groupSelect.value;
      if (id === "" || group === "") {
        show("Введите идентификатор и выберите группу", "warn");
        return;
      }
      let record = allowed.find(function (a) { return a.id === id; });
      if (!record) {
        show("Доступ запрещён: идентификатор не найден", "bad");
      } else if (record.group !== group) {
        show("Доступ запрещён: группа не соответствует идентификатору", "bad");
      } else {
        show("Доступ разрешён", "ok");
      }
    });
  }

  // Задание 182. Калькулятор оценки за семестр
  {
    let ids = ["semPractice", "semSelf", "semExam"];
    let resultEl = document.getElementById("semResult");
    document.getElementById("semBtn").addEventListener("click", function () {
      let values = [];
      for (let i = 0; i < ids.length; i++) {
        let raw = document.getElementById(ids[i]).value.trim();
        let v = Number(raw);
        if (raw === "" || isNaN(v) || v < 0 || v > 100) {
          resultEl.textContent = "Ошибка: все три балла должны быть числами от 0 до 100";
          return;
        }
        values.push(v);
      }
      // 40% + 20% + 40%; считаем в целых долях, чтобы не накапливать погрешность
      let final = (values[0] * 40 + values[1] * 20 + values[2] * 40) / 100;
      let category;
      if (final >= 90) {
        category = "Отлично";
      } else if (final >= 70) {
        category = "Хорошо";
      } else if (final >= 50) {
        category = "Удовлетворительно";
      } else {
        category = "Неудовлетворительно";
      }
      resultEl.textContent = "Итоговый балл: " + final.toFixed(2) + ". Оценка: " + category;
    });
    document.getElementById("semClear").addEventListener("click", function () {
      ids.forEach(function (id) { document.getElementById(id).value = ""; });
      resultEl.textContent = "";
    });
  }

  // Задание 183. Интерактивный каталог оборудования
  {
    let devices = [
      { id: 1, name: "VR-гарнитура", category: "Виртуальная реальность", available: true },
      { id: 2, name: "3D-принтер", category: "Печать", available: false },
      { id: 3, name: "Ноутбук для ИИ", category: "Компьютеры", available: true },
      { id: 4, name: "Робот-конструктор", category: "Робототехника", available: true },
      { id: 5, name: "Raspberry Pi 5", category: "Микрокомпьютеры", available: true },
      { id: 6, name: "Jetson Nano", category: "Микрокомпьютеры", available: false },
      { id: 7, name: "Квадрокоптер", category: "Робототехника", available: true },
      { id: 8, name: "Графический планшет", category: "Периферия", available: true }
    ];
    let searchInput = document.getElementById("eqSearch");
    let categorySelect = document.getElementById("eqCategory");
    let cardsEl = document.getElementById("eqCards");
    let countEl = document.getElementById("eqCount");

    let categories = [];
    devices.forEach(function (d) {
      if (!categories.includes(d.category)) categories.push(d.category);
    });
    categories.forEach(function (c) {
      let opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      categorySelect.appendChild(opt);
    });

    function renderEquipment() {
      let query = searchInput.value.trim().toLowerCase();
      let category = categorySelect.value;
      let shown = devices.filter(function (d) {
        return d.name.toLowerCase().includes(query) && (category === "" || d.category === category);
      });
      cardsEl.innerHTML = "";
      if (shown.length === 0) {
        cardsEl.textContent = "Устройства не найдены";
      }
      shown.forEach(function (d) {
        let card = document.createElement("div");
        card.className = "card";
        let title = document.createElement("h4");
        title.textContent = d.name;
        let cat = document.createElement("div");
        cat.textContent = d.category;
        let status = document.createElement("div");
        status.textContent = d.available ? "Доступно" : "Забронировано";
        status.className = d.available ? "avail" : "busy";
        let btn = document.createElement("button");
        btn.textContent = "Забронировать";
        btn.disabled = !d.available;
        btn.addEventListener("click", function () {
          d.available = false;
          renderEquipment();
        });
        card.appendChild(title);
        card.appendChild(cat);
        card.appendChild(status);
        card.appendChild(btn);
        cardsEl.appendChild(card);
      });
      let free = devices.filter(function (d) { return d.available; }).length;
      countEl.textContent = "Доступно устройств: " + free + " из " + devices.length;
    }
    searchInput.addEventListener("input", renderEquipment);
    categorySelect.addEventListener("change", renderEquipment);
    renderEquipment();
  }

  // Задание 184. Генератор индивидуальных заданий
  {
    let pool = [
      { title: "Проверка чётности числа", level: "A" },
      { title: "Определение сезона по номеру месяца", level: "A" },
      { title: "Проверка пароля", level: "A" },
      { title: "Определение оценки по баллам", level: "A" },
      { title: "Проверка високосного года", level: "A" },
      { title: "Сумма чисел от 1 до 100", level: "B" },
      { title: "Поиск максимума в массиве", level: "B" },
      { title: "Подсчёт гласных в строке", level: "B" },
      { title: "Разворот массива", level: "B" },
      { title: "Фильтрация чётных чисел", level: "B" },
      { title: "Функция расчёта скидки", level: "C" },
      { title: "Каталог товаров на объектах", level: "C" },
      { title: "Генератор паролей", level: "C" },
      { title: "Калькулятор среднего балла", level: "C" },
      { title: "Рейтинг команд", level: "C" }
    ];
    let used = { A: [], B: [], C: [] };
    let nameInput = document.getElementById("genName");
    let levelSelect = document.getElementById("genLevel");
    let resultEl = document.getElementById("genResult");
    let infoEl = document.getElementById("genInfo");

    function generate() {
      let name = nameInput.value.trim();
      if (name === "") {
        resultEl.textContent = "Введите имя студента";
        infoEl.textContent = "";
        return;
      }
      let level = levelSelect.value;
      let ofLevel = pool.filter(function (t) { return t.level === level; });
      let free = ofLevel.filter(function (t) { return !used[level].includes(t.title); });
      let note = "";
      if (free.length === 0) {
        used[level] = [];
        free = ofLevel;
        note = " Все задания уровня " + level + " были выданы — список начат заново.";
      }
      let task = free[Math.floor(Math.random() * free.length)];
      used[level].push(task.title);
      resultEl.textContent = "Студент: " + name + " — задание: " + task.title + " (уровень " + level + ")";
      infoEl.textContent = "Выдано заданий уровня " + level + " в этом сеансе: " + used[level].length + " из " + ofLevel.length + "." + note;
    }
    document.getElementById("genBtn").addEventListener("click", generate);
    document.getElementById("genAgain").addEventListener("click", generate);
  }

  // Задание 185. IT Project Dashboard
  {
    let directions = ["Искусственный интеллект", "Веб-разработка", "Мобильные приложения", "Робототехника"];
    let statuses = ["Планируется", "В разработке", "На тестировании", "Завершён"];
    let projects = [];
    let nextId = 1;

    let nameInput = document.getElementById("dbName");
    let dirSelect = document.getElementById("dbDirection");
    let ownerInput = document.getElementById("dbOwner");
    let progressInput = document.getElementById("dbProgress");
    let statusSelect = document.getElementById("dbStatus");
    let filterSelect = document.getElementById("dbFilter");
    let msg = document.getElementById("dbMessage");
    let cardsEl = document.getElementById("dbCards");
    let avgEl = document.getElementById("dbAverage");

    directions.forEach(function (d) {
      [dirSelect, filterSelect].forEach(function (sel) {
        let opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        sel.appendChild(opt);
      });
    });
    statuses.forEach(function (s) {
      let opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s;
      statusSelect.appendChild(opt);
    });

    try {
      let saved = JSON.parse(localStorage.getItem("dashboardProjects"));
      if (Array.isArray(saved)) {
        projects = saved;
        nextId = projects.reduce(function (m, p) { return Math.max(m, p.id); }, 0) + 1;
      }
    } catch (e) {
      // localStorage недоступен
    }
    function save() {
      try {
        localStorage.setItem("dashboardProjects", JSON.stringify(projects));
      } catch (e) {
        // не удалось сохранить
      }
    }
    function updateAverage() {
      if (projects.length === 0) {
        avgEl.textContent = "Средний процент выполнения: —";
        return;
      }
      let sum = 0;
      projects.forEach(function (p) { sum += p.progress; });
      avgEl.textContent = "Средний процент выполнения: " + (sum / projects.length).toFixed(1) + "%";
    }
    function renderProjects() {
      let direction = filterSelect.value;
      let shown = projects.filter(function (p) {
        return direction === "" || p.direction === direction;
      });
      cardsEl.innerHTML = "";
      if (shown.length === 0) {
        cardsEl.textContent = "Проектов нет";
      }
      shown.forEach(function (p) {
        let card = document.createElement("div");
        card.className = "card";

        let title = document.createElement("h4");
        title.textContent = p.name;
        let info = document.createElement("div");
        info.textContent = p.direction + " · ответственный: " + p.owner;

        let statusSel = document.createElement("select");
        statuses.forEach(function (s) {
          let opt = document.createElement("option");
          opt.value = s;
          opt.textContent = s;
          if (s === p.status) opt.selected = true;
          statusSel.appendChild(opt);
        });
        statusSel.addEventListener("change", function () {
          p.status = statusSel.value;
          save();
        });

        let track = document.createElement("div");
        track.className = "track";
        let bar = document.createElement("div");
        bar.className = "bar";
        bar.style.width = p.progress + "%";
        track.appendChild(bar);

        let label = document.createElement("div");
        label.className = "progress-label";
        label.textContent = "Прогресс: " + p.progress + "%";

        let slider = document.createElement("input");
        slider.type = "range";
        slider.min = 0;
        slider.max = 100;
        slider.value = p.progress;
        slider.addEventListener("input", function () {
          bar.style.width = slider.value + "%";
          label.textContent = "Прогресс: " + slider.value + "%";
        });
        slider.addEventListener("change", function () {
          p.progress = Number(slider.value);
          save();
          updateAverage();
        });

        card.appendChild(title);
        card.appendChild(info);
        card.appendChild(statusSel);
        card.appendChild(track);
        card.appendChild(label);
        card.appendChild(slider);
        cardsEl.appendChild(card);
      });
      updateAverage();
    }
    document.getElementById("dbAdd").addEventListener("click", function () {
      let name = nameInput.value.trim();
      let owner = ownerInput.value.trim();
      let direction = dirSelect.value;
      let raw = progressInput.value.trim();
      let progress = Number(raw);
      if (name === "" || owner === "" || direction === "") {
        msg.textContent = "Заполните название, направление и ответственного";
        return;
      }
      if (raw === "" || isNaN(progress) || progress < 0 || progress > 100) {
        msg.textContent = "Прогресс должен быть числом от 0 до 100";
        return;
      }
      projects.push({
        id: nextId++,
        name: name,
        direction: direction,
        owner: owner,
        progress: progress,
        status: statusSelect.value
      });
      msg.textContent = "";
      nameInput.value = "";
      ownerInput.value = "";
      progressInput.value = "";
      dirSelect.value = "";
      save();
      renderProjects();
    });
    filterSelect.addEventListener("change", renderProjects);
    renderProjects();
  }
}
