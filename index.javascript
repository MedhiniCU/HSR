<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HSR Layout - Companies & Places</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(120deg, #f4f4f4, #d9e6f2);
            text-align: center;
            margin: 0;
            padding: 20px;
        }
        .container {
            background: white;
            max-width: 800px;
            margin: auto;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
            text-align: left;
        }
        h1, h2 {
            color: #333;
            text-align: center;
        }
        .section {
            padding: 15px;
            background: #f9f9f9;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        ul {
            padding: 0;
            list-style-type: none;
        }
        li {
            background: white;
            margin: 8px 0;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
        }
        img {
            width: 80px;
            height: 80px;
            margin-right: 15px;
            border-radius: 5px;
        }
        .dark-mode {
            background: #222;
            color: white;
        }
        @media (max-width: 600px) {
            .container {
                width: 90%;
                padding: 15px;
            }
            img {
                width: 60px;
                height: 60px;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>HSR Layout - Bengaluru</h1>
        <p>HSR Layout is a vibrant locality, home to numerous companies and notable places.</p>

        <!-- Companies Section -->
        <div class="section">
            <h2>Companies in HSR Layout</h2>
            <ul>
                <li><img src="C:\Users\user\Downloads\sonata-software.jpg" alt="Sonata Software"><strong>Sonata Software Ltd:</strong> IT services, software development, consulting.</li>
                <li><img src="C:\Users\user\Downloads\IBM_Bangalore.jpg" alt="IBM"><strong>IBM Global Services:</strong> IT consulting and business solutions.</li>
                <li><img src="C:\Users\user\Downloads\WIPRO.jpg" alt="Wipro"><strong>Wipro:</strong> IT, consulting, and business process services.</li>
                <li><img src="C:\Users\user\Downloads\infotech.jpg" alt="Infotech Global"><strong>Infotech Global India Ltd:</strong> Software development and IT-enabled services.</li>
                <li><img src="C:\Users\user\Downloads\Fisrt Logic.jpg" alt="First Logic"><strong>First Logic Meta Lab Pvt Ltd:</strong> Cloud computing, cybersecurity, software solutions.</li>
                <li><img src="C:\Users\user\Downloads\-pattemdigital-side-view.jpg" alt="Pattem Digital"><strong>Pattem Digital:</strong> Web development, digital marketing, tech solutions.</li>
                <li><img src="C:\Users\user\Downloads\Cube.jpg" alt="Cube"><strong>Cube:</strong> Tech startup focusing on digital products.</li>
                <li><img src="C:\Users\user\Downloads\Codemonk.jpg" alt="Codemonk"><strong>Codemonk:</strong> Startup working in web development and digital solutions.</li>
            </ul>
        </div>

        <!-- Notable Places Section -->
        <div class="section">
            <h2>Notable Places in HSR Layout</h2>
            <ul>
                <li><img src="C:\Users\user\Downloads\Agara Lake.jpg" alt="Agara Lake"><strong>Agara Lake:</strong> A serene spot for nature lovers and birdwatching.</li>
                <li><img src="C:\Users\user\Downloads\HSR Club.jpg" alt="HSR Club"><strong>HSR Layout Club:</strong> Gym, swimming pools, and sports courts.</li>
                <li><img src="C:\Users\user\Downloads\hsr 4.jpg" alt="Sector 4 Park"><strong>HSR Layout Sector 4 Park:</strong> A green space for relaxation and walks.</li>
                <li><img src="C:\Users\user\Downloads\Kormangla.jpg" alt="Koramangala Stadium"><strong>Koramangala Indoor Stadium:</strong> Hosts sports events and tournaments.</li>
                <li><img src="C:\Users\user\Downloads\PlayArena.jpg" alt="Vintage Museum"><strong>Vintage Car Museum:</strong> Displays classic cars for automobile enthusiasts.</li>
                <li><img src="C:\Users\user\Downloads\Vintage.jpg" alt="Play Arena"><strong>Play Arena:</strong> Adventure sports like go-karting and paintball.</li>
            </ul>
        </div>

        <p>This list provides a glimpse into the diverse corporate presence and attractions that make HSR Layout a notable area in Bengaluru.</p>
    </div>

<script>
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

        function searchItems() {
            let input = document.getElementById("searchBar").value.toLowerCase();
            let lists = document.querySelectorAll("ul li");

            lists.forEach(item => {
                let text = item.innerText.toLowerCase();
                if (text.includes(input)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        }

        function toggleSection(sectionId) {
            let section = document.getElementById(sectionId);
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }
    </script>

  </body>
</html>
