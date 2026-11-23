// Обезличенная копия изученной логики блока Leadteh.
// Получатели заменены примерами. Выполняется только в среде Leadteh,
// где доступны getContactVariable, setContactVariable и username.
// Это фрагмент кейса, не самостоятельный Telegram-бот.
function val(name) {
  var value = getContactVariable(name);
  return value === undefined || value === null ? "" : String(value);
}

var user = typeof username !== "undefined" && username ? String(username) : "";
if (user && user.indexOf("@") !== 0) {
  user = "@" + user;
}

var caption = [
  "@approver_demo @finance_demo",
  "Счёт на оплату",
  "",
  "Сумма: " + val("Сумма"),
  "Счет: " + val("Счет"),
  "Плательщик: " + val("плательщик"),
  "Контрагент: " + val("Контрагент"),
  "Крайний срок оплаты: " + val("Дата отчета"),
  "Тип РК: " + val("Тип РК"),
  "Источник: " + val("Источник"),
  "Бюджет: " + val("бюджет"),
  "Комментарии к расходам: " + val("Комментарии к расходам"),
  "",
  "Кто запустил счет в оплату: " + user
].join("\n");

setContactVariable("ТГ_сообщение", caption);
