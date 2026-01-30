#  Anime Power Showcase

**Live Demo:** [https://avanith12.github.io/ANIME_POWER_SHOWCASE/](https://avanith12.github.io/ANIME_POWER_SHOWCASE/)

##adding more charts


<div align="center">
  <img src="gifs/power-dragon-ball.gif" alt="Anime Power" width="400">
</div>

<div align="center">
  <img src="images/readme.png" alt="Anime Power Showcase" width="800">
</div>

**Anime Power Showcase** is a sleek, interactive data visualization dashboard designed to compare the power levels of legendary anime characters. Built with **D3.js**, it features a sophisticated, monochrome "Dark Mode" aesthetic with smooth transitions and AI-generated portraits.

Explore the stats that define your favorite heroes and villains through dynamic radar and bar charts.

##  Featured Characters

<table align="center">
  <tr>
    <td align="center">
      <img src="images/naruto.png" alt="Naruto Uzumaki" width="120"><br>
      <b>Naruto Uzumaki</b>
    </td>
    <td align="center">
      <img src="images/sasuke.png" alt="Sasuke Uchiha" width="120"><br>
      <b>Sasuke Uchiha</b>
    </td>
    <td align="center">
      <img src="images/goku.png" alt="Goku" width="120"><br>
      <b>Goku</b>
    </td>
    <td align="center">
      <img src="images/vegeta.png" alt="Vegeta" width="120"><br>
      <b>Vegeta</b>
    </td>
    <td align="center">
      <img src="images/luffy.png" alt="Monkey D. Luffy" width="120"><br>
      <b>Monkey D. Luffy</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="images/zoro.png" alt="Roronoa Zoro" width="120"><br>
      <b>Roronoa Zoro</b>
    </td>
    <td align="center">
      <img src="images/gojo.jpeg" alt="Gojo Satoru" width="120"><br>
      <b>Gojo Satoru</b>
    </td>
    <td align="center">
      <img src="images/Levi Ackerman.jpeg" alt="Levi Ackerman" width="120"><br>
      <b>Levi Ackerman</b>
    </td>
    <td align="center">
      <img src="images/Ryomen Sukuna.jpeg" alt="Ryomen Sukuna" width="120"><br>
      <b>Ryomen Sukuna</b>
    </td>
    <td align="center">
      <img src="images/Saitama.png" alt="Saitama" width="120"><br>
      <b>Saitama</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="images/Ichigo Kurosaki.jpeg" alt="Ichigo Kurosaki" width="120"><br>
      <b>Ichigo Kurosaki</b>
    </td>
    <td align="center">
      <img src="images/Madara Uchiha.jpeg" alt="Madara Uchiha" width="120"><br>
      <b>Madara Uchiha</b>
    </td>
    <td align="center">
      <img src="images/Hashirama_Senju.webp" alt="Hashirama Senju" width="120"><br>
      <b>Hashirama Senju</b>
    </td>
    <td align="center">
      <img src="images/toji.webp" alt="Toji Fushiguro" width="120"><br>
      <b>Toji Fushiguro</b>
    </td>
    <td align="center">
      <img src="images/sanji.webp" alt="Sanji" width="120"><br>
      <b>Sanji</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="images/gol d roger.webp" alt="Gol D. Roger" width="120"><br>
      <b>Gol D. Roger</b>
    </td>
    <td align="center">
      <img src="images/edward new gate.jpeg" alt="Edward Newgate" width="120"><br>
      <b>Edward Newgate</b>
    </td>
    <td align="center">
      <img src="images/shanks.png" alt="Shanks" width="120"><br>
      <b>Shanks</b>
    </td>
    <td align="center">
      <img src="images/sun_jin_woo.jpeg" alt="Sung Jin-Woo" width="120"><br>
      <b>Sung Jin-Woo</b>
    </td>
    <td align="center">
      <img src="images/kaido.jpg" alt="Kaido" width="120"><br>
      <b>Kaido</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="images/mihawk.jpeg" alt="Dracule Mihawk" width="120"><br>
      <b>Dracule Mihawk</b>
    </td>
  </tr>
</table>

*All 21 legendary characters ready for power comparison!*

---
##  Features

- **Dynamic Data Visualization**: Utilize an interactive **Radar Chart** (Spider Plot) and **Bar Chart** to visualize character attributes.
- **Compare Mode**: Overlay Two characters on the same chart for a direct head-to-head power analysis.
- **Detailed Character Profiles**: Each character features raw stats, a unique special ability, and an AI-generated portrait.
- **Intelligent Power Scoring**: Automatically calculates a "Power Score" and assigns a rank (e.g., Godlike, S-Rank) based on combined stats.
- **Premium Monochrome UI**: A clean, modern "Dark Mode" interface with glassmorphism effects and smooth D3.js animations.
- **Completely Responsive**: Designed to look great on both desktop and mobile devices.
- **Homepage**: Beautiful landing page with character showcase and website description.

---
##  Tech Stack

- **Core**: HTML5, CSS3, JavaScript (Vanilla - no frameworks)
- **Visualization**: [D3.js v7](https://d3js.org/) (via CDN)
- **Styling**: Vanilla CSS with Grid/Flexbox
- **Assets**: AI-generated character portraits
- **Typography**: Google Fonts (Poppins)

##  Project Structure

```
ANIME_POWER_SHOWCASE/
│
├── index.html          # Homepage/landing page
├── app.html            # Main application page
├── style.css           # Shared stylesheet with dark theme and glassmorphism effects
├── home.css            # Homepage-specific styles
├── script.js           # JavaScript logic, character data, and D3.js charts
├── README.md           # Project documentation
├── LICENSE             # MIT License
│
├── gifs/               # Animated GIFs
│   ├── power-dragon-ball.gif
│   └── aesthetic.gif
│
└── images/             # Character portraits
    ├── naruto.png
    ├── sasuke.png
    ├── goku.png
    ├── vegeta.png
    ├── luffy.png
    ├── zoro.png
    ├── gojo.jpeg
    ├── Levi Ackerman.jpeg
    ├── Ryomen Sukuna.jpeg
    ├── Saitama.png
    ├── Ichigo Kurosaki.jpeg
    ├── Madara Uchiha.jpeg
    └── readme.png      # README preview image
```

##  How to Run Locally

Since this is a client-side application, you don't need to install any heavy dependencies.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Avanith12/ANIME_POWER_SHOWCASE.git
   ```
2. **Navigate to the folder**:
   ```bash
   cd ANIME_POWER_SHOWCASE
   ```
3. **Open the app**:
   Simply open `index.html` in your favorite web browser (Chrome, Firefox, Safari, Edge).

---

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

##  Credits & Disclaimer

- **Charts**: Powered by [D3.js](https://d3js.org/).
- **Stats**: Character power stats are estimates based on various anime community power-scaling discussions and are purely for visualization purposes.
- **Portraits**: Portraits were generated using AI to fit the project's unique aesthetic.
- **Anime**: All characters and series names are property of their respective creators and animation studios.

---

Made with <3 for Anime Fans!
