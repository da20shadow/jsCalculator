<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>JS Calculator</title>
</head>
<body>

        <h1>JS Calculator</h1>

        <div class="calculator-grid">

            <!--Display -->
            <div class="display" style="min-height: 19vh;">
                <div data-previous class="previous"></div>
                <div data-current class="current"></div>
            </div>

            <button data-clear class="c item">C</button>
            <button id="del" class="del item">Del</button>
            <button data-operator class="division item">/</button>
            <button data-number class="one item">1</button>
            <button data-number class="two item">2</button>
            <button data-number class="three item">3</button>
            <button data-operator class="multiply item">*</button>
            <button data-number class="four item">4</button>
            <button data-number class="five item">5</button>
            <button data-number class="six item">6</button>
            <button data-operator class="add item">+</button>
            <button data-number class="seven item">7</button>
            <button data-number class="eight item">8</button>
            <button data-number class="nine item">9</button>
            <button data-operator class="sub item">-</button>
            <button data-number class="point item">.</button>
            <button data-number class="zero item">0</button>
            <button id="equals" class="sum item">=</button>

        </div>

    <script src="script.js"></script>
</body>
</html>