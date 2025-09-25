// Várjuk meg, amíg a HTML oldal teljesen betöltődik
document.addEventListener('DOMContentLoaded', () => {
    // Az aszinkron fetch() hívás
    fetch('http://localhost/adatok.php') // A XAMPP szerver címe és a PHP fájl neve
        .then(response => {
            if (!response.ok) {
                throw new Error('Hálózati hiba történt');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('adatok-body');
            
            if (data.length === 0) {
                const row = document.createElement('tr');
                row.innerHTML = `<td colspan="3" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Nincs megjeleníthető adat.</td>`;
                tableBody.appendChild(row);
            } else {
                data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.ID}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.Vezeteknev}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.Keresztnev}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }
        })
        .catch(error => {
            console.error('Hiba az adatok lekérdezésekor:', error);
            const tableBody = document.getElementById('adatok-body');
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="3" class="px-6 py-4 whitespace-nowrap text-sm text-red-500 text-center">Hiba történt az adatok betöltésekor. Kérlek, ellenőrizd a konzolt.</td>`;
            tableBody.appendChild(row);
        });
});