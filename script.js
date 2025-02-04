function calculateIdealWeight() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;

    // تحقق من صحة الإدخالات
    if (!name || !age || !height || height < 30 || height > 300) {
        document.getElementById('result').textContent = 'يرجى إدخال جميع البيانات المطلوبة بشكل صحيح';
        return;
    }

    const heightInMeters = height / 100;
    const idealWeight = 22 * (heightInMeters * heightInMeters); // معادلة الوزن الصحي

    document.getElementById('result').innerHTML = `
        <p>مرحبًا <strong>${name}</strong>!</p>
        <p>الوزن المثالي لجسمك هو <strong>${idealWeight.toFixed(2)} كجم</strong>.</p>
        <p>أهلا بكم في تطبيق حاسبة الوزن الطبيعي لشخصكم الكريم!</p>
    `;
}
