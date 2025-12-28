document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const sendAnotherBtn = document.getElementById('sendAnother');

    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeEGh4whVNlrUOaJk2WrnaMTcLoyeK41zH-x9qPpP3Y-CSsQA/formResponse';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Đang gửi... 🦌';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Forms
                body: formData
            });

            // Assuming success since no-cors doesn't return readable status
            form.reset();
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');

        } catch (error) {
            console.error('Error:', error);
            alert('Có lỗi xảy ra khi gửi lời nhắn. Bạn thử lại nha! 🥺');
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    sendAnotherBtn.addEventListener('click', () => {
        successMessage.classList.add('hidden');
        form.classList.remove('hidden');
    });
});
