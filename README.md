# Building Management System

This is a simple building management web application built using **pure JavaScript, HTML, and CSS**.

The app allows adding, editing, and deleting apartments and common rooms (Gym, Library, Laundry).  
It also tracks room temperature and shows whether heating or cooling is enabled based on the building’s requested temperature.

---

##  Features

- Add apartments and common rooms
- Edit room details
- Delete rooms
- Set building requested temperature
- Automatically shows heating/cooling status based on room temperature
- UI with cards and modal popup
- Displays building and room status in real-time

---

## Building Logic

- Each room has:
    - Unique **ID**
    - Current **temperature** (randomly initialized between **10°C and 40°C**)
    - **Heating status**
    - **Cooling status**

- **Apartment** includes an additional property:
    - Owner name

- **Common Room** includes an additional property:
    - Room type (Gym, Library, Laundry)

- **Building** includes:
    - Multiple apartments and common rooms
    - Requested temperature (default **20°C**)
    - Ability to change requested temperature

---

##  Heating/Cooling Logic

- If room temperature **< requested temperature** → Heating enabled
- If room temperature **> requested temperature** → Cooling enabled

---

##  Initial Setup (Main Application)

On loading the app, the building is created with:
- Apartments: **101** and **102**
- Common Rooms: **Gym** and **Library**
- Requested temperature: **25°C**

---

##  Prerequisites

- Modern web browser (Chrome, Firefox, Edge)
- No server or backend required

##  How to Run the Project

### Option 1: Open directly
1. Open the project folder
2. Double-click **`index.html`**
3. It will open in your default browser

### Option 2: Open using browser
1. Open Chrome/Firefox/Edge
2. Press `Ctrl + O`
3. Select **`index.html`**
4. Click **Open**
##  Run the Project

1. Clone the repository:
   ```bash
git clone https://github.com/Muskan-Thakur-4436/BuildingManagement.git