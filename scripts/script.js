// Получаем все кнопки вкладок
const tabButtons = document.querySelectorAll('.tab');

// Добавляем обработчик событий для каждой кнопки
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем класс active у всех кнопок и содержимого вкладок
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.menu__table').forEach(content => {
            content.classList.remove('active');
        });
        
        // Добавляем класс active для выбранной кнопки
        button.classList.add('active');
        
        // Получаем id вкладки, которую нужно показать
        const tabId = button.getAttribute('data-tab');
        
        // Показываем соответствующее содержимое
        document.getElementById(tabId).classList.add('active');
    });
});