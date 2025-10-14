document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    const submitBtn = document.getElementById('btn-create');
    const thanksMessage = document.querySelector('.thanks');
    
    thanksMessage.style.display = 'none';
    
    // Обрабатываем клик по кнопке вместо отправки формы
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем отправку формы
        console.log('Кнопка нажата...');
        
        // Получаем значения
        const name = document.getElementById('name').value.trim();
        const alcohol = document.getElementById('alcohol').value.trim();
        
        console.log('Имя:', name);
        console.log('Алкоголь:', alcohol);
        
        // Проверяем имя
        if (!name) {
            alert('Пожалуйста, введите ваше имя и фамилию');
            document.getElementById('name').focus();
            return;
        }
        
        // Проверяем радиокнопки
        const radios = document.getElementsByName('attend');
        let attendValue = null;
        
        for (let radio of radios) {
            console.log(`Радиокнопка ${radio.value}: ${radio.checked}`);
            if (radio.checked) {
                attendValue = radio.value;
                break;
            }
        }
        
        if (!attendValue) {
            alert('Пожалуйста, выберите, планируете ли вы присутствовать');
            return;
        }
        
        console.log('Все данные получены, отправляем...');
        
        // Отправляем данные
        fetch('https://68ed5460df2025af78ffe34b.mockapi.io/v1/guest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                alcohol: alcohol,
                presence: attendValue === "Да"
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Успех:', data);
            thanksMessage.style.display = 'block';
            form.reset();
            setTimeout(() => {
                thanksMessage.style.display = 'none';
            }, 3000);
        })
       
    });
});