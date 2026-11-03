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