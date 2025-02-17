document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    // Get input values
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Determine BMI category, exercise recommendation, and food schedule
    let category = '';
    let exerciseRecommendation = '';
    let foodSchedule = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        exerciseRecommendation = `
            <strong>Recommended Exercises:</strong>
            <ul>
                <li>Strength training (e.g., weightlifting)</li>
                <li>Yoga or Pilates for flexibility</li>
                <li>Swimming or cycling for cardiovascular health</li>
            </ul>
        `;
        foodSchedule = `
            <strong>Food Schedule for Gaining Healthy Weight:</strong>
            <ul>
                <li><strong>Breakfast:</strong> Oatmeal with nuts, fruits, and whole milk</li>
                <li><strong>Snack:</strong> Smoothie with banana, peanut butter, and yogurt</li>
                <li><strong>Lunch:</strong> Grilled chicken with quinoa and vegetables</li>
                <li><strong>Snack:</strong> Handful of almonds and dried fruits</li>
                <li><strong>Dinner:</strong> Salmon with sweet potatoes and avocado</li>
            </ul>
        `;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
        exerciseRecommendation = `
            <strong>Recommended Exercises:</strong>
            <ul>
                <li>Running or jogging</li>
                <li>Team sports (e.g., soccer, basketball)</li>
                <li>High-intensity interval training (HIIT)</li>
            </ul>
        `;
        foodSchedule = `
            <strong>Food Schedule for Maintaining Healthy Weight:</strong>
            <ul>
                <li><strong>Breakfast:</strong> Whole-grain toast with avocado and eggs</li>
                <li><strong>Snack:</strong> Greek yogurt with berries</li>
                <li><strong>Lunch:</strong> Grilled fish with brown rice and steamed veggies</li>
                <li><strong>Snack:</strong> Apple slices with almond butter</li>
                <li><strong>Dinner:</strong> Stir-fried tofu with broccoli and quinoa</li>
            </ul>
        `;
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        exerciseRecommendation = `
            <strong>Recommended Exercises:</strong>
            <ul>
                <li>Walking or brisk walking</li>
                <li>Low-impact aerobics</li>
                <li>Cycling or swimming</li>
            </ul>
        `;
        foodSchedule = `
            <strong>Food Schedule for Losing Weight:</strong>
            <ul>
                <li><strong>Breakfast:</strong> Scrambled eggs with spinach and whole-grain toast</li>
                <li><strong>Snack:</strong> Carrot sticks with hummus</li>
                <li><strong>Lunch:</strong> Grilled chicken salad with olive oil dressing</li>
                <li><strong>Snack:</strong> A handful of mixed nuts</li>
                <li><strong>Dinner:</strong> Grilled turkey with roasted vegetables</li>
            </ul>
        `;
    } else {
        category = 'Obesity';
        exerciseRecommendation = `
            <strong>Recommended Exercises:</strong>
            <ul>
                <li>Walking (start with short distances)</li>
                <li>Water aerobics (low impact)</li>
                <li>Stretching or light yoga</li>
            </ul>
        `;
        foodSchedule = `
            <strong>Food Schedule for Healthy Weight Loss:</strong>
            <ul>
                <li><strong>Breakfast:</strong> Oatmeal with berries and a boiled egg</li>
                <li><strong>Snack:</strong> Cucumber slices with tzatziki</li>
                <li><strong>Lunch:</strong> Lentil soup with a side of steamed vegetables</li>
                <li><strong>Snack:</strong> A small apple or pear</li>
                <li><strong>Dinner:</strong> Baked cod with a side of roasted Brussels sprouts</li>
            </ul>
        `;
    }

    // Display result, exercise recommendation, and food schedule
    const resultDiv = document.getElementById('result');
    const exerciseDiv = document.getElementById('exerciseRecommendation');
    const foodDiv = document.getElementById('foodSchedule');
    resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong>. This is considered <strong>${category}</strong>.`;
    exerciseDiv.innerHTML = exerciseRecommendation;
    foodDiv.innerHTML = foodSchedule;
});