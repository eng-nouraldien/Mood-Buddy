document.getElementById('calculate-btn').addEventListener('click', function() {
    let values = [];
    let unanswered = false;

    for (let i = 1; i <= 3; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
            unanswered = true;
            break;
        }
        values.push(parseInt(selected.value));
    }

    const resultEl = document.getElementById('stress-result');
    if (unanswered) {
        resultEl.textContent = "يرجى الإجابة على جميع الأسئلة أولاً!";
        resultEl.style.color = "red";
        return;
    }

    let resultText = '';

    // تحقق إذا كل الإجابات متطابقة
    const allSame = values.every(v => v === values[0]);
    if(allSame) {
        if(values[0] === 1) resultText = "توتر منخفض 😌";
        else if(values[0] === 2) resultText = "توتر متوسط 😐";
        else resultText = "توتر مرتفع 😣";
    } else {
        // حساب المتوسط إذا الإجابات مختلفة
        const average = values.reduce((a,b)=>a+b,0) / values.length;
        if(average <= 1.5) resultText = "توتر منخفض 😌";
        else if(average <= 2.5) resultText = "توتر متوسط 😐";
        else resultText = "توتر مرتفع 😣";
    }

    resultEl.textContent = resultText;
    resultEl.style.color = "green";
});
