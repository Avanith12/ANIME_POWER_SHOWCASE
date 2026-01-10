/**
 * DATASET: Anime Character Power Stats
 */
const characters = [
    {
        id: "naruto",
        name: "Naruto Uzumaki",
        anime: "Naruto",
        role: "Hero",
        stats: {
            Strength: 85,
            Speed: 90,
            IQ: 70,
            Durability: 95,
            Energy: 100,
            Combat: 88
        },
        image: "images/naruto.png",
        specialAbility: "Six Paths Sage Mode",
        shortDescription: "The Seventh Hokage and hero of the Leaf Village."
    },
    {
        id: "sasuke",
        name: "Sasuke Uchiha",
        anime: "Naruto",
        role: "Anti-Hero",
        stats: {
            Strength: 82,
            Speed: 95,
            IQ: 92,
            Durability: 80,
            Energy: 95,
            Combat: 98
        },
        image: "images/sasuke.png",
        specialAbility: "Rinnegan / Susanoo",
        shortDescription: "The Shadow Shinobi protecting the village from the outside."
    },
    {
        id: "goku",
        name: "Goku",
        anime: "Dragon Ball",
        role: "Hero",
        stats: {
            Strength: 100,
            Speed: 98,
            IQ: 65,
            Durability: 95,
            Energy: 100,
            Combat: 95
        },
        image: "images/goku.png",
        specialAbility: "Ultra Instinct",
        shortDescription: "A Saiyan warrior consistently breaking his own limits."
    },
    {
        id: "vegeta",
        name: "Vegeta",
        anime: "Dragon Ball",
        role: "Anti-Hero",
        stats: {
            Strength: 98,
            Speed: 95,
            IQ: 85,
            Durability: 92,
            Energy: 98,
            Combat: 96
        },
        image: "images/vegeta.png",
        specialAbility: "Ultra Ego",
        shortDescription: "The proud Prince of all Saiyans."
    },
    {
        id: "luffy",
        name: "Monkey D. Luffy",
        anime: "One Piece",
        role: "Hero",
        stats: {
            Strength: 90,
            Speed: 88,
            IQ: 60,
            Durability: 100,
            Energy: 92,
            Combat: 90
        },
        image: "images/luffy.png",
        specialAbility: "Gear 5 (Sun God Nika)",
        shortDescription: "Captain of the Straw Hat Pirates seeking the One Piece."
    },
    {
        id: "zoro",
        name: "Roronoa Zoro",
        anime: "One Piece",
        role: "Hero",
        stats: {
            Strength: 88,
            Speed: 82,
            IQ: 75,
            Durability: 95,
            Energy: 85,
            Combat: 96
        },
        image: "images/zoro.png",
        specialAbility: "Three Sword Style: King of Hell",
        shortDescription: "Master swordsman aiming to be the strongest in the world."
    },
    {
        id: "gojo",
        name: "Gojo Satoru",
        anime: "Jujutsu Kaisen",
        role: "Hero",
        stats: {
            Strength: 85,
            Speed: 100,
            IQ: 95,
            Durability: 100,
            Energy: 100,
            Combat: 98
        },
        image: "https://via.placeholder.com/300x300/0b0e14/00f2ff?text=Gojo+Satoru",
        specialAbility: "Limitless / Hollow Purple",
        shortDescription: "The strongest Jujutsu Sorcerer."
    },
    {
        id: "levi",
        name: "Levi Ackerman",
        anime: "Attack on Titan",
        role: "Hero",
        stats: {
            Strength: 75,
            Speed: 95,
            IQ: 90,
            Durability: 70,
            Energy: 50,
            Combat: 100
        },
        image: "https://via.placeholder.com/300x300/0b0e14/ff00c8?text=Levi+Ackerman",
        specialAbility: "Humanity's Strongest Soldier",
        shortDescription: "Expert Titan killer with unparalleled combat skill."
    },
    {
        id: "sukuna",
        name: "Ryomen Sukuna",
        anime: "Jujutsu Kaisen",
        role: "Villain",
        stats: {
            Strength: 95,
            Speed: 95,
            IQ: 98,
            Durability: 95,
            Energy: 100,
            Combat: 100
        },
        image: "https://via.placeholder.com/300x300/0b0e14/ff0000?text=Sukuna",
        specialAbility: "Malevolent Shrine / Cleave",
        shortDescription: "The King of Curses, an embodiment of pure malice and power."
    },
    {
        id: "saitama",
        name: "Saitama",
        anime: "One Punch Man",
        role: "Hero",
        stats: {
            Strength: 100,
            Speed: 100,
            IQ: 50,
            Durability: 100,
            Energy: 100,
            Combat: 80
        },
        image: "https://via.placeholder.com/300x300/0b0e14/ffff00?text=Saitama",
        specialAbility: "Serious Punch",
        shortDescription: "A hero who can defeat any enemy with a single punch."
    },
    {
        id: "ichigo",
        name: "Ichigo Kurosaki",
        anime: "Bleach",
        role: "Hero",
        stats: {
            Strength: 92,
            Speed: 98,
            IQ: 80,
            Durability: 90,
            Energy: 100,
            Combat: 95
        },
        image: "https://via.placeholder.com/300x300/0b0e14/ffa500?text=Ichigo",
        specialAbility: "True Bankai / Getsuga Tensho",
        shortDescription: "A Substitute Soul Reaper with extraordinary spiritual pressure."
    },
    {
        id: "madara",
        name: "Madara Uchiha",
        anime: "Naruto",
        role: "Villain",
        stats: {
            Strength: 94,
            Speed: 92,
            IQ: 98,
            Durability: 92,
            Energy: 100,
            Combat: 100
        },
        image: "https://via.placeholder.com/300x300/0b0e14/800080?text=Madara",
        specialAbility: "Infinite Tsukuyomi",
        shortDescription: "The legendary leader of the Uchiha clan."
    }
];

// App State
let state = {
    selectedA: characters[0],
    selectedB: characters[1],
    compareMode: false
};

const statsKeys = ["Strength", "Speed", "IQ", "Durability", "Energy", "Combat"];
const accentCyan = "#00f2ff";
const accentMagenta = "#ff00c8";

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    populateSelects();
    setupEventListeners();
    updateUI();
    drawCharts();
});

function populateSelects() {
    const selectA = document.getElementById("charA-select");
    const selectB = document.getElementById("charB-select");

    characters.forEach(char => {
        const optA = document.createElement("option");
        optA.value = char.id;
        optA.textContent = `${char.name} (${char.anime})`;
        selectA.appendChild(optA);

        const optB = document.createElement("option");
        optB.value = char.id;
        optB.textContent = `${char.name} (${char.anime})`;
        selectB.appendChild(optB);
    });

    selectA.value = state.selectedA.id;
    selectB.value = state.selectedB.id;
}

function setupEventListeners() {
    document.getElementById("charA-select").addEventListener("change", (e) => {
        state.selectedA = characters.find(c => c.id === e.target.value);
        updateUI();
    });

    document.getElementById("charB-select").addEventListener("change", (e) => {
        state.selectedB = characters.find(c => c.id === e.target.value);
        updateUI();
    });

    document.getElementById("compare-toggle").addEventListener("change", (e) => {
        state.compareMode = e.target.checked;
        document.getElementById("charB-group").style.display = state.compareMode ? "flex" : "none";
        document.getElementById("cardB").style.display = state.compareMode ? "block" : "none";
        document.getElementById("comparison-section").style.display = state.compareMode ? "block" : "none";
        updateUI();
    });

    document.getElementById("random-btn").addEventListener("click", () => {
        state.selectedA = characters[Math.floor(Math.random() * characters.length)];
        document.getElementById("charA-select").value = state.selectedA.id;
        if (state.compareMode) {
            state.selectedB = characters[Math.floor(Math.random() * characters.length)];
            document.getElementById("charB-select").value = state.selectedB.id;
        }
        updateUI();
    });

    document.getElementById("reset-btn").addEventListener("click", () => {
        state.selectedA = characters[0];
        state.selectedB = characters[1];
        state.compareMode = false;
        document.getElementById("charA-select").value = state.selectedA.id;
        document.getElementById("charB-select").value = state.selectedB.id;
        document.getElementById("compare-toggle").checked = false;
        document.getElementById("charB-group").style.display = "none";
        document.getElementById("cardB").style.display = "none";
        document.getElementById("comparison-section").style.display = "none";
        updateUI();
    });
}

function updateUI() {
    // Update Text A
    document.getElementById("nameA").textContent = state.selectedA.name;
    document.getElementById("animeA").textContent = state.selectedA.anime;
    document.getElementById("roleA").textContent = state.selectedA.role;
    document.getElementById("descA").textContent = state.selectedA.shortDescription;
    document.getElementById("abilityA").textContent = state.selectedA.specialAbility;
    document.getElementById("imgA").src = state.selectedA.image;

    const scoreA = calculatePowerScore(state.selectedA);
    document.getElementById("power-score-val").textContent = scoreA;
    document.getElementById("power-score-rank").textContent = getRankString(scoreA);

    const battleAnnounce = document.getElementById("battle-announcement");
    const winnerText = document.getElementById("winner-text");
    const badgeA = document.getElementById("winnerA");
    const badgeB = document.getElementById("winnerB");
    const cardA = document.getElementById("cardA");
    const cardB = document.getElementById("cardB");

    // Reset winner states
    badgeA.style.display = "none";
    badgeB.style.display = "none";
    cardA.classList.remove("winner-highlight");
    cardB.classList.remove("winner-highlight");

    // Update Text B
    if (state.compareMode) {
        document.getElementById("nameB").textContent = state.selectedB.name;
        document.getElementById("animeB").textContent = state.selectedB.anime;
        document.getElementById("roleB").textContent = state.selectedB.role;
        document.getElementById("descB").textContent = state.selectedB.shortDescription;
        document.getElementById("abilityB").textContent = state.selectedB.specialAbility;
        document.getElementById("imgB").src = state.selectedB.image;
        document.getElementById("table-head-A").textContent = state.selectedA.name;
        document.getElementById("table-head-B").textContent = state.selectedB.name;

        const scoreB = calculatePowerScore(state.selectedB);
        battleAnnounce.style.display = "block";

        if (scoreA > scoreB) {
            winnerText.textContent = `${state.selectedA.name} Wins!`;
            badgeA.style.display = "block";
            cardA.classList.add("winner-highlight");
        } else if (scoreB > scoreA) {
            winnerText.textContent = `${state.selectedB.name} Wins!`;
            badgeB.style.display = "block";
            cardB.classList.add("winner-highlight");
        } else {
            winnerText.textContent = "It's a Draw!";
        }

        updateComparisonTable();
    } else {
        battleAnnounce.style.display = "none";
    }

    updateCharts();
}

function updateComparisonTable() {
    const tbody = document.getElementById("comparison-body");
    tbody.innerHTML = "";
    statsKeys.forEach(stat => {
        const valA = state.selectedA.stats[stat];
        const valB = state.selectedB.stats[stat];
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${stat}</td>
            <td class="${valA > valB ? 'winner' : ''}">${valA}</td>
            <td class="${valB > valA ? 'winner' : ''}">${valB}</td>
        `;
        tbody.appendChild(row);
    });
}

function calculatePowerScore(char) {
    const vals = Object.values(char.stats);
    return Math.round(vals.reduce((a, b) => a + b) / vals.length);
}

function getRankString(score) {
    if (score >= 95) return "Rank: SSS (Beyond Godly)";
    if (score >= 90) return "Rank: SS (Godlike)";
    if (score >= 85) return "Rank: S (Extremely Powerful)";
    if (score >= 75) return "Rank: A (Powerful)";
    return "Rank: B (Exceptional)";
}

// --- D3 Charts Implementation ---

let radarSvg, barSvg;
const size = 350;
const margin = 40;
const radius = (size / 2) - margin;

function drawCharts() {
    drawRadarChart();
    drawBarChart();
}

function drawRadarChart() {
    d3.select("#radar-chart").selectAll("*").remove();

    radarSvg = d3.select("#radar-chart")
        .append("svg")
        .attr("width", size)
        .attr("height", size)
        .append("g")
        .attr("transform", `translate(${size / 2}, ${size / 2})`);

    // Draw grid circles
    const levels = 5;
    for (let i = 1; i <= levels; i++) {
        const r = (radius / levels) * i;
        radarSvg.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", r)
            .attr("fill", "none")
            .attr("stroke", "rgba(255,255,255,0.1)")
            .attr("stroke-dasharray", "4 4");
    }

    // Draw axes
    const angleSlice = (Math.PI * 2) / statsKeys.length;
    statsKeys.forEach((d, i) => {
        const x = Math.cos(angleSlice * i - Math.PI / 2) * radius;
        const y = Math.sin(angleSlice * i - Math.PI / 2) * radius;

        radarSvg.append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", x)
            .attr("y2", y)
            .attr("stroke", "rgba(255,255,255,0.1)");

        radarSvg.append("text")
            .attr("x", x * 1.15)
            .attr("y", y * 1.15)
            .attr("text-anchor", "middle")
            .attr("fill", "var(--text-secondary)")
            .attr("font-size", "10px")
            .attr("font-weight", "600")
            .text(d);
    });

    updateRadarChart();
}

function updateRadarChart() {
    const angleSlice = (Math.PI * 2) / statsKeys.length;
    const radarLine = d3.lineRadial()
        .radius(d => (d.value / 100) * radius)
        .angle((d, i) => i * angleSlice)
        .curve(d3.curveLinearClosed);

    const getData = (char) => statsKeys.map(key => ({ axis: key, value: char.stats[key] }));

    const dataA = getData(state.selectedA);
    const dataB = getData(state.selectedB);

    // Path A
    let pathA = radarSvg.selectAll(".radarPathA").data([dataA]);
    pathA.enter()
        .append("path")
        .attr("class", "radarPathA")
        .merge(pathA)
        .transition().duration(800)
        .attr("d", radarLine)
        .attr("fill", accentCyan)
        .attr("fill-opacity", 0.3)
        .attr("stroke", accentCyan)
        .attr("stroke-width", 2)
        .attr("filter", "drop-shadow(0 0 5px rgba(0, 242, 255, 0.5))");

    // Path B
    let pathB = radarSvg.selectAll(".radarPathB").data([state.compareMode ? [dataB] : []]);
    pathB.exit().remove();
    pathB.enter()
        .append("path")
        .attr("class", "radarPathB")
        .merge(pathB)
        .transition().duration(800)
        .attr("d", radarLine)
        .attr("fill", accentMagenta)
        .attr("fill-opacity", 0.3)
        .attr("stroke", accentMagenta)
        .attr("stroke-width", 2)
        .attr("filter", "drop-shadow(0 0 5px rgba(255, 0, 200, 0.5))");

    // Simple Tooltips on points
    drawRadarPoints(dataA, "A", accentCyan);
    if (state.compareMode) drawRadarPoints(dataB, "B", accentMagenta);
    else radarSvg.selectAll(".radarPointB").remove();
}

function drawRadarPoints(data, suffix, color) {
    const angleSlice = (Math.PI * 2) / statsKeys.length;
    const points = radarSvg.selectAll(`.radarPoint${suffix}`).data(data);

    points.enter()
        .append("circle")
        .attr("class", `radarPoint${suffix}`)
        .attr("r", 4)
        .attr("fill", color)
        .merge(points)
        .on("mouseover", (e, d) => showTooltip(e, `${d.axis}: ${d.value}`))
        .on("mouseout", hideTooltip)
        .transition().duration(800)
        .attr("cx", (d, i) => Math.cos(angleSlice * i - Math.PI / 2) * (d.value / 100) * radius)
        .attr("cy", (d, i) => Math.sin(angleSlice * i - Math.PI / 2) * (d.value / 100) * radius);
}

function drawBarChart() {
    d3.select("#bar-chart").selectAll("*").remove();

    const width = 400;
    const height = 300;
    const barPadding = 0.2;

    barSvg = d3.select("#bar-chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(60, 20)");

    // Scales
    const x = d3.scaleBand().domain(statsKeys).range([0, width - 80]).padding(barPadding);
    const y = d3.scaleLinear().domain([0, 100]).range([height - 50, 0]);

    // Axes
    barSvg.append("g")
        .attr("transform", `translate(0, ${height - 50})`)
        .call(d3.axisBottom(x))
        .attr("color", "var(--text-secondary)");

    barSvg.append("g")
        .call(d3.axisLeft(y).ticks(5))
        .attr("color", "var(--text-secondary)");

    updateBarChart();
}

function updateBarChart() {
    const width = 400;
    const height = 300;
    const x = d3.scaleBand().domain(statsKeys).range([0, width - 80]).padding(0.2);
    const y = d3.scaleLinear().domain([0, 100]).range([height - 50, 0]);

    const dataA = statsKeys.map(k => ({ key: k, value: state.selectedA.stats[k] }));
    const dataB = statsKeys.map(k => ({ key: k, value: state.selectedB.stats[k] }));

    // Bars A
    let barsA = barSvg.selectAll(".barA").data(dataA);
    barsA.enter().append("rect")
        .attr("class", "barA")
        .attr("x", d => x(d.key))
        .attr("width", state.compareMode ? x.bandwidth() / 2 : x.bandwidth())
        .attr("y", height - 50)
        .attr("height", 0)
        .attr("fill", accentCyan)
        .merge(barsA)
        .on("mouseover", (e, d) => showTooltip(e, `${d.key}: ${d.value}`))
        .on("mouseout", hideTooltip)
        .transition().duration(800)
        .attr("x", d => x(d.key))
        .attr("width", state.compareMode ? x.bandwidth() / 2 : x.bandwidth())
        .attr("y", d => y(d.value))
        .attr("height", d => (height - 50) - y(d.value));

    // Bars B
    let barsB = barSvg.selectAll(".barB").data(state.compareMode ? dataB : []);
    barsB.exit().remove();
    barsB.enter().append("rect")
        .attr("class", "barB")
        .attr("y", height - 50)
        .attr("height", 0)
        .attr("fill", accentMagenta)
        .merge(barsB)
        .on("mouseover", (e, d) => showTooltip(e, `${d.key}: ${d.value}`))
        .on("mouseout", hideTooltip)
        .transition().duration(800)
        .attr("x", d => x(d.key) + x.bandwidth() / 2)
        .attr("width", x.bandwidth() / 2)
        .attr("y", d => y(d.value))
        .attr("height", d => (height - 50) - y(d.value));
}

function updateCharts() {
    if (radarSvg) updateRadarChart();
    if (barSvg) updateBarChart();
}

function showTooltip(event, text) {
    const tt = document.getElementById("tooltip");
    tt.textContent = text;
    tt.style.opacity = "1";
    tt.style.left = (event.pageX + 10) + "px";
    tt.style.top = (event.pageY - 30) + "px";
}

function hideTooltip() {
    document.getElementById("tooltip").style.opacity = "0";
}
