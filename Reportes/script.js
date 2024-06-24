document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo (puedes reemplazarlos con datos reales)
    const horaIngreso = "10:00 AM";
    const juegosCompletados = 4;
    const resultados = [
        { juego: "Suma", correctas: 7, incorrectas: 3 },
        { juego: "Resta", correctas: 6, incorrectas: 4 },
        { juego: "Multiplicación", correctas: 8, incorrectas: 2 },
        { juego: "División", correctas: 5, incorrectas: 5 }
    ];

    // Mostrar datos básicos
    document.getElementById("horaIngreso").innerText = horaIngreso;
    document.getElementById("juegosCompletados").innerText = juegosCompletados;

    // Mostrar resultados en la tabla
    const tbody = document.querySelector("#resultadosTable tbody");
    resultados.forEach(resultado => {
        const row = document.createElement("tr");
        const porcentaje = ((resultado.correctas / (resultado.correctas + resultado.incorrectas)) * 100).toFixed(2);
        row.innerHTML = `
            <td>${resultado.juego}</td>
            <td>${resultado.correctas}</td>
            <td>${resultado.incorrectas}</td>
            <td>${porcentaje}%</td>
        `;
        tbody.appendChild(row);
    });

    // Datos para el gráfico de habilidades
    const habilidadesData = {
        labels: resultados.map(r => r.juego),
        datasets: [{
            label: 'Correctas',
            data: resultados.map(r => r.correctas),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }, {
            label: 'Incorrectas',
            data: resultados.map(r => r.incorrectas),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    // Configuración del gráfico
    const config = {
        type: 'bar',
        data: habilidadesData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Crear el gráfico
    const habilidadesChart = new Chart(
        document.getElementById('habilidadesChart'),
        config
    );
});
