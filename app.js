// Configuración
const githubToken = 'YOUR_GITHUB_TOKEN';
const repoOwner = 'YOUR_REPO_OWNER';
const repoName = 'YOUR_REPO_NAME';

/* const proyectName = document.getElementById('name-proyect');
proyectName.textContent = repoOwner;
proyectName.appendChild(proyectName);

const reposName = document.getElementById('name-repo');
reposName.textContent = repoName;
reposName.appendChild(reposName); */
$('#name-proyect').text(repoOwner);  
$('#name-repo').text(repoName);

// Función para realizar solicitudes a la API de GitHub con autenticación
async function githubFetch(url) {
    const response = await fetch(url, {
        headers: {
            'Authorization': `token ${githubToken}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });

    if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

// Obtener todas las ramas del repositorio
async function fetchBranches() {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/branches?per_page=100`;
    return await githubFetch(url);
}

// Obtener commits de una rama específica
async function fetchCommits(branchName) {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/commits?sha=${branchName}&per_page=100`;
    return await githubFetch(url);
}

// Procesar contribuciones por colaborador
async function fetchContributions() {
    const branches = await fetchBranches();
    const contributors = {};

    for (const branch of branches) {
        try {
            const commits = await fetchCommits(branch.name);
            commits.forEach(commit => {
                const author = commit.commit.author.name;
                const date = new Date(commit.commit.author.date);

                if (!contributors[author]) {
                    contributors[author] = [];
                }

                contributors[author].push({
                    branch: branch.name,
                    date: date
                });
            });
        } catch (error) {
            console.error(`Error al obtener commits de la rama ${branch.name}:`, error);
        }
    }

    // Ordenar los commits por fecha para cada colaborador
    for (const author in contributors) {
        contributors[author].sort((a, b) => a.date - b.date);
    }

    return contributors;
}

// Renderizar la línea de tiempo
function renderTimeline(contributors) {
    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = ''; // Limpiar contenido previo
    const datatimeContainer = document.getElementById('datatime');
    datatimeContainer.innerHTML = ''; 
    // Obtener la fecha mínima y máxima para el timeline
    let minDate = new Date();
    let maxDate = new Date(0);
    console.log(minDate);
    console.log(maxDate);
    

    const dateMin = document.createElement('div');
    dateMin.classList.add('date');
    dateMin.textContent = minDate.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
    datatimeContainer.appendChild(dateMin);
    const dateMax = document.createElement('div');
    dateMax.classList.add('date');
    dateMax.textContent = maxDate.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
    datatimeContainer.appendChild(dateMax);
    
    for (const author in contributors) {
        console.log(contributors)
        contributors[author].forEach(commit => {
            if (commit.date < minDate) minDate = commit.date;
            if (commit.date > maxDate) maxDate = commit.date;
        });
    }

    const timeSpan = maxDate - minDate;

    // Crear una línea de tiempo para cada colaborador
    for (const author in contributors) {
        console.log(author)
        const timeline = document.createElement('div');
        timeline.classList.add('contributor-timeline');

        // Nombre del colaborador
        const name = document.createElement('div');
        name.classList.add('contributor-name');
        name.textContent = author;
   
        // Línea de tiempo
        const line = document.createElement('div');
        line.classList.add('timeline-line');
        timeline.appendChild(line);

        // Agregar marcadores de commits
        contributors[author].forEach(commit => {
            const marker = document.createElement('div');
            marker.classList.add('commit-marker');

            // Calcular la posición del marcador basado en la fecha del commit
            const position = ((commit.date - minDate) / timeSpan) * 100;
            marker.style.left = `${position}%`;

            // Tooltip con información del commit
            const tooltip = document.createElement('div');
            tooltip.classList.add('commit-tooltip');
            tooltip.textContent = `Fecha: ${commit.date.toLocaleDateString()} - Rama: ${commit.branch}`;
            marker.appendChild(tooltip);

            line.appendChild(marker);
        });

        timelineContainer.appendChild(timeline);
    }
}

// Iniciar el proceso
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const contributors = await fetchContributions();
        renderTimeline(contributors);
    } catch (error) {
        console.error('Error al procesar las contribuciones:', error);
        const timelineContainer = document.getElementById('timeline-container');

        timelineContainer.innerHTML = `<p>Error al cargar los datos del repositorio. Revisa la consola para más detalles.</p>`;
    }
});
