// Получаем элементы DOM
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.close');

// Добавляем обработчики событий для миниатюр
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    // Устанавливаем атрибуты src и alt для изображения в модальном окне
    modalImage.src = thumbnail.src;
    modalImage.alt = thumbnail.alt;

    // Показываем модальное окно
    modal.style.display = 'block';
  });
});

// Добавляем обработчик события для кнопки закрытия
closeBtn.addEventListener('click', () => {
  // Скрываем модальное окно
  modal.style.display = 'none';
});

// Добавляем обработчик события для клика за пределы модального окна
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    // Скрываем модальное окно
    modal.style.display = 'none';
  }
});
