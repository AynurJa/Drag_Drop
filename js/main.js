window.onload = function() {
    const carDropdown = document.querySelector('#car');
    const modelDropdown = document.querySelector('#modeles');
    const cars = [{ id: 1, name: "BMC" },
        { id: 2, name: "BMW" },
        { id: 3, name: "Chevrolet" },
        { id: 4, name: "Ferrari" },
        { id: 5, name: "Jeep" },
        { id: 6, name: "Nissan" },
        { id: 7, name: "Porsche" },
        { id: 8, name: "Kia" }
    ]
    const models = [{ name: "Pro 827", carId: 1 },
        { name: "Pro 832", carId: 1 },
        {
            name: "M3",
            carId: 2
        },
        { name: "X1", carId: 2 },
        { name: "Z4", carId: 2 },
        { name: "M6", carId: 2 },
        { name: "I8", carId: 2 },
        { name: "Blazer", carId: 3 },
        { name: "Cobalt", carId: 3 },
        { name: "Matiz", carId: 3 },
        { name: "California", carId: 4 },
        { name: "Wrangler", carId: 5 },
        { name: "Patriot", carId: 5 },
        { name: "Compass", carId: 5 },
        { name: "Liberty", carId: 5 },
        { name: "Almera", carId: 6 },
        { name: "Blubird", carId: 6 },
        { name: "Kicks", carId: 6 },
        { name: "Qashqai", carId: 6 },
        { name: "Cayenne", carId: 7 },
        { name: "Macan", carId: 7 },
        { name: "Panamera", carId: 7 },
        { name: "Boxter", carId: 7 },
        { name: "Besta", carId: 8 },
        { name: "Rio", carId: 8 },
        { name: "Pride", carId: 8 },
        { name: "Shuma", carId: 8 },
        { name: "Soul", carId: 8 }
    ];

    cars.forEach(cr => {
        const option = document.createElement('option');
        option.setAttribute("value", cr.id);
        option.innerText = cr.name;
        carDropdown.appendChild(option);
    });

    carDropdown.onchange = function() {
        const crId = +this.value;
        const DropdownModel = models.filter(model => {
            return model.carId === crId;
        });

        modelDropdown.innerHTML = "<option value=''>Select Model</option>";
        DropdownModel.forEach(model => {
            const option = document.createElement('option');
            option.innerText = model.name;
            modelDropdown.appendChild(option);

        });

    }
}