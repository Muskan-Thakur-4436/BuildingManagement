void main() {
    Building building = new Building();
    building.setRequestedTemperature(25.0);

    building.addRoom(new Apartment(101, "Muskan Thakur"));
    building.addRoom(new Apartment(102, "Shivangi"));
    building.addRoom(new CommonRoom(CommonRoom.Type.GYM));
    building.addRoom(new CommonRoom(CommonRoom.Type.LIBRARY));

    for (Room room : building.getRooms()) {
        System.out.println(
                "Room ID: " + room.getId() +
                        " | Temp: " + room.getTemperature() +
                        " | Heating: " + room.isHeatingEnabled() +
                        " | Cooling: " + room.isCoolingEnabled()
        );
    }
}

