<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PuStreak - Counting Streaks </title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #000000;
            font-family: sans-serif;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 1000;
            text-align: center;
            overflow: bold;
        }
        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h1 {
            font-size: 5rem;
            margin-top: 1rem;
            margin-bottom: 0.02rem;
            letter-spacing: 2px;
        }
        h2 {
            font-size: 1.5rem;
            font-weight: 400;
            margin-top: 0.09rem;
            margin-bottom: 0.5rem;
            text-transform: none;
            color: #ffe7e77a;
        }
        .highlight {
            background: linear(135deg, #ff0000 100%, transparent 00%) repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color:  	#ffa500;
            background-size: 4px 4px;
        }
        p {
            font-size: 1rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        #timer {
            font-size: 3.5rem;
            font-weight: normal;
            line-height: 1.5;
        }
        #modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #modalContent {
            background: white;
            color: black;
            padding: 50px;
            border-radius: 10px;
            text-align: center;
            width: 450px;
        }
        .modalHeading {
            color:black;
        }
        button {
            background-color: #3d3b9b;
            color: white;
            padding: 20px 20px;
            font-size: 1.5rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.2s;
            margin-top: 30px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        button:hover {
            transform: scale(1.08);
        }
        input {
            padding: 12px;
            border: 1px solid #000000;
            border-radius: 5px;
            margin-top: 15px;
            margin-bottom: 25px;
            width: 80%;
            font-size: 1rem;
            display: block;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }
        label {
            display: inline;
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 1rem;
        }
        .footer {
            position: fixed;
            bottom: 10px;
            right: 10px;
            font-size: 0.9rem;
        }
        .footer a {
            color: rgb(92, 77, 230);
            text-decoration: underline;
        }
        #reset {
            font-size: 1rem;
            text-decoration: underline;
            cursor: pointer;
            margin-top: 2rem
        }
    /* Media Queries for Mobile Devices */
    @media (max-width: 768px) {
        h1 {
            font-size: 1rem;
        }
        h2 {
            font-size: 1rem;
        }
        p {
            font-size: 1rem;
        }
        #timer {
            font-size: 1rem;
        }
        button {
            font-size: 1rem;
            padding: 15px 15px;
        }
        input {
            font-size: 1rem;
        }
        label {
            font-size: 0.5rem;
        }
        #modalContent {
            width: 80%;
            padding: 30px;
        }
        .footer {
            position: fixed;
            bottom: 8px;
            right: 8px;
            font-size: 0.7rem;
        }
    }
    @media (max-width: 480px) {
        h1 {
            font-size: 0.9rem;
        }
        h2 {
            font-size: 0.5rem;
        }
        p {
            font-size: 1rem;
        }
        #timer {
            font-size: 0.5rem;
        }
        button {
            font-size: 0.9rem;
            padding: 12px;
        }
        input {
            font-size: 0.9rem;
        }
        label {
            font-size: 1rem;
        }
        #modalContent {
            width: 80%;
            padding: 20px;
        }
        .footer {
            position: fixed;
            bottom: 8px;
            right: 10px;
            font-size: 0.9rem;
        }
    }
    </style>
</head>
<body>
    <div class="wrapper">
        <h1>Pu<span class="highlight">Streak</span></h1>
        <h2>Streak Counter</h2>
        <p id="tagline" style="display: none;"></p>
        <div id="timer" style="display: none;">Streak Details</div>
        <p id="reset" style="display: none;" onclick="reset()">Broke your streak? Reset here.</p>
        <button id="getStartedButton" style="display: none;">Start</button>
    </div>

    <div id="modal" style="display: none;">
        <div id="modalContent">
            <h2 class="modalHeading">Track Your Streak</h2>
            <label>Name your streak...</label>
            <input type="text" id="streakTaglineInput">
            <label>When did you start your streak?</label>
            <input type="datetime-local" id="streakStartInput">
            <button onclick="saveStreakData()">Start!</button>
        </div>
    </div>

    <div class="footer">Made by "Kira"<a href="" target="_blank"></a></div>

    <script>
        // Disable scrolling
        document.body.style.overflow = 'hidden';

        function saveStreakData() {
            const streakTagline = document.getElementById('streakTaglineInput').value;
            const streakStart = document.getElementById('streakStartInput').value;
            if (streakTagline && streakStart) {
                const maxAge = 60 * 60 * 24 * 365 * 68;
                document.cookie = `streakTagline=${streakTagline}; path=/; SameSite=Strict; max-age=${maxAge}`;
                document.cookie = `streakStart=${streakStart}; path=/; SameSite=Strict; max-age=${maxAge}`;
                document.getElementById('modal').style.display = 'none';
                location.reload();
            }
        }
        
        function reset() {
            // Clear cookies
            document.cookie = "streakStart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "streakTagline=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            // Reload the page
            location.reload();
        }
        

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        window.onload = function() {
            const tagline = getCookie('streakTagline');
            const start = getCookie('streakStart');

            if (tagline && start) {
                document.getElementById('tagline').style.display = 'inline';
                document.getElementById('tagline').innerText = tagline;
                
                const startTime = new Date(start).getTime();

                setInterval(() => {
                    const now = new Date().getTime();
                    const elapsed = now - startTime;

                    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

                    document.getElementById('timer').style.display = 'inline';
                    document.getElementById('timer').innerText = `${days} Days\n${hours} Hours\n${minutes} Minutes\n${seconds} Seconds`;
                    document.getElementById('reset').style.display = 'inline';
                }, 1000);
            } else {
                document.getElementById('getStartedButton').style.display = 'block';
                document.getElementById('getStartedButton').onclick = function() {
                    document.getElementById('modal').style.display = 'flex';
                };
            }
        }
    </script>
    <script type="application/ld+json">
</script>

</body>
</html>
