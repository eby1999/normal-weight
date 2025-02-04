function calculateIdealWeight() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;

    if (!name || !age || !height) {
        document.getElementById('result').textContent = 'يرجى إدخال جميع البيانات المطلوبة';
        return;
    }

    const heightInMeters = height / 100;
    const idealWeight = 22 * (heightInMeters * heightInMeters); // متوسط مؤشر كتلة الجسم الصحي هو 22

    document.getElementById('result').innerHTML = `
        <p>مرحبًا ${name}!</p>
        <p>الوزن المثالي لجسمك هو <strong>${idealWeight.toFixed(2)} كجم</strong>.</p>
    `;
}
