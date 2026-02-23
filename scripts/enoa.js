// Регистрируем аджаидский язык в системе dnd5e
Hooks.on("init", function() {
  console.log("Эноа: Загрузка модуля...");
  
  if (game.system.id !== "dnd5e") return;
  
  // Добавляем аджаидский язык в список языков
  CONFIG.DND5E.languages = {
    ...CONFIG.DND5E.languages,
    "adjaid": "Аджаидский"
  };
  
  // Добавляем в список стандартных языков (чтобы был в выпадающих списках)
  CONFIG.DND5E.languagesStandard = {
    ...CONFIG.DND5E.languagesStandard,
    "adjaid": "Аджаидский"
  };
  
  console.log("Эноа: Язык 'Аджаидский' зарегистрирован!");
});