<script>
document.addEventListener('DOMContentLoaded', function() {
    const visitTypeSelect = document.getElementById('visit-type');
    const lectureSelectContainer = document.getElementById('lecture-select-container');
    const lectureSelect = document.getElementById('lecture-name');
    const equipmentSelectContainer = document.getElementById('equipment-select-container');
    const equipmentSelect = document.getElementById('equipment');

    visitTypeSelect.addEventListener('change', function() {
        if (this.value === 'lecture') {
            // Показываем выбор лекции
            lectureSelectContainer.style.display = 'block';
            lectureSelect.setAttribute('required', 'required');

            // Скрываем выбор оборудования
            equipmentSelectContainer.style.display = 'none';
            equipmentSelect.removeAttribute('required');
        } else {
            // Показываем выбор оборудования
            equipmentSelectContainer.style.display = 'block';
            equipmentSelect.setAttribute('required', 'required');

            // Скрываем выбор лекции
            lectureSelectContainer.style.display = 'none';
            lectureSelect.removeAttribute('required');
        }
    });
});
</script>

// --- Логика кнопки "Наверх" ---
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        // Используем стрелочную функцию и проверяем scrollY
        window.addEventListener('scroll', function() {
            // Если прокрутили больше 200 пикселей
            if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        // Плавный скролл наверх при клике
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// --- Логика переключения темы ---
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    if (themeToggleBtn) {
        // Проверяем, сохранена ли тема в браузере
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-theme');
            // Меняем иконку на солнце
            themeIcon.innerHTML = '<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>';
        }

        themeToggleBtn.addEventListener('click', function() {
            body.classList.toggle('dark-theme');

            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                // Меняем иконку на солнце
                themeIcon.innerHTML = '<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>';
            } else {
                localStorage.setItem('theme', 'light');
                // Меняем иконку обратно на луну
                themeIcon.innerHTML = '<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>';
            }
        });
    }
});

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('.order-form'); // Находим форму по классу

            // Проверяем, есть ли форма на странице
            if (form) {
                form.addEventListener('submit', function(event) {
                    // 1. Отменяем стандартную отправку (перезагрузку страницы)
                    event.preventDefault();

                    // 2. Проверяем, заполнены ли обязательные поля (HTML-валидация)
                    if (!form.checkValidity()) {
                        form.reportValidity(); // Показываем стандартные подсказки браузера
                        return;
                    }

                    // 3. Инициализируем и показываем Toast
                    const toastElement = document.getElementById('successToast');
                    const toast = new bootstrap.Toast(toastElement, {
                        delay: 5000 // Уведомление исчезнет через 5 секунд
                    });
                    toast.show();

                    // 4. Очищаем форму (по желанию)
                    form.reset();
                });
            }
        });
    </script>