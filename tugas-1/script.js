const registeredTeams = [];

const form = document.getElementById("iel-form");
const teamNameInput = document.getElementById("team-name");
const captainEmailInput = document.getElementById("captain-email");
const gameCategorySelect = document.getElementById("game-category");
const deviceCheckbox = document.getElementById("bring-device");
const teamsList = document.getElementById("teams-list");
const errorEl = document.getElementById("error-message");
const successEl = document.getElementById("success-message");

function renderTeams() {
    teamsList.innerHTML = "";

    for (const team of registeredTeams) {
        const li = document.createElement("li");
        li.textContent = `${team.name} – ${team.game} ${team.bringDevice ? "(Bawa Device Sendiri)" : ""}`;
        teamsList.appendChild(li);
    }
}

function addTeam(team) {
    registeredTeams.push(team);
    renderTeams();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = teamNameInput.value.trim();
    const email = captainEmailInput.value.trim();
    const game = gameCategorySelect.value;
    const bringDevice = deviceCheckbox.checked;

    if (!name || !email) {
        errorEl.textContent = "Nama tim dan email kapten wajib diisi.";
        successEl.textContent = "";
        return;
    }

    if (!email.includes("@")) {
        errorEl.textContent = "Masukkan format email yang valid.";
        successEl.textContent = "";
        return;
    }

    errorEl.textContent = "";

    addTeam({ name, email, game, bringDevice });

    form.reset();

    successEl.textContent = "Pendaftaran berhasil disubmit!";

    setTimeout(() => {
        successEl.textContent = "";
    }, 3000);
});

renderTeams();