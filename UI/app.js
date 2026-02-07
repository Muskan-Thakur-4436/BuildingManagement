
let building = {
    requestedTemperature: 25, //Default Temperature as mentioned in assignment 25
    rooms: []
};

let editIndex = null;

function randomTemp() {
    return Math.floor(Math.random() * 31) + 10;
}
function deleteRoom(index) {
    if (confirm("Are you sure you want to delete?")) {
        building.rooms.splice(index, 1);
        renderRooms();
    }
}

function createId() {
    return crypto.randomUUID();
}

function initBuilding() {
    building.rooms = [
        {
            id: createId(),
            type: "apartment",
            apartmentNumber: 101,
            owner: "Owner 101",
            temp: randomTemp()
        },
        {
            id: createId(),
            type: "apartment",
            apartmentNumber: 102,
            owner: "Owner 102",
            temp: randomTemp()
        },
        {
            id: createId(),
            type: "gym",
            name: "Gym",
            temp: randomTemp()
        },
        {
            id: createId(),
            type: "library",
            name: "Library",
            temp: randomTemp()
        }
    ];

    renderRooms();
}

function updateBuildingTemp() {
    building.requestedTemperature =
        Number(document.getElementById("requestedTemp").value);
    renderRooms();
}

function openModal() {
    document.getElementById("modalTitle").innerText = "Add Room";
    document.getElementById("roomModal").style.display = "flex";
    toggleFields();
}

function closeModal() {
    document.getElementById("roomModal").style.display = "none";
    clearModal();
    editIndex = null;
}

function toggleFields() {
    const type = document.getElementById("roomType").value;
    document.getElementById("apartmentFields").style.display =
        type === "apartment" ? "block" : "none";
    document.getElementById("commonRoomFields").style.display =
        type === "apartment" ? "none" : "block";
}

function saveRoom() {
    const type = document.getElementById("roomType").value;
    let room;

    if (type === "apartment") {
        const aptNo = document.getElementById("aptNumber").value;
        const owner = document.getElementById("ownerName").value;

        if (!aptNo) {
            alert("Apartment number required");
            return;
        }

        room = {
            id: createId(),
            type: "apartment",
            apartmentNumber: aptNo,
            owner: owner,
            temp: randomTemp()
        };
    } else {
        const name = document.getElementById("roomName").value || type;

        room = {
            id: createId(),
            type: type,
            name: name,
            temp: randomTemp()
        };
    }

    if (editIndex === null) {
        building.rooms.push(room);
    } else {
        building.rooms[editIndex] = room;
        editIndex = null;
    }

    closeModal();
    renderRooms();
}

function clearModal() {
    document.getElementById("aptNumber").value = "";
    document.getElementById("ownerName").value = "";
    document.getElementById("roomName").value = "";
}

function editRoom(index) {
    const room = building.rooms[index];
    editIndex = index;

    document.getElementById("modalTitle").innerText = "Edit Room";

    document.getElementById("roomType").value = room.type;
    toggleFields();

    if (room.type === "apartment") {
        document.getElementById("aptNumber").value = room.apartmentNumber;
        document.getElementById("ownerName").value = room.owner;
    } else {
        document.getElementById("roomName").value = room.name;
    }

    document.getElementById("roomModal").style.display = "flex";
}

function renderRooms() {
    const container = document.getElementById("rooms");
    container.innerHTML = "";

    building.rooms.forEach((room, index) => {
        const heating = room.temp < building.requestedTemperature;
        const cooling = room.temp > building.requestedTemperature;

        let title =
            room.type === "apartment"
                ? `Apartment ${room.apartmentNumber} (${room.owner || "No owner"})`
                : room.name;

        container.innerHTML += `
      <div class="room-card">
        <div class="room-info">
            <strong>${title}</strong><br><br>
            Temp: ${room.temp}&deg;C<br>
            Heating: ${heating ? "ON" : "OFF"}<br>
            Cooling: ${cooling ? "ON" : "OFF"}
        </div>

        <div class="room-actions">
            <button class="edit-btn" onclick="editRoom(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteRoom(${index})">Delete</button>
        </div>
    </div>
        `;
    });
}
initBuilding();
