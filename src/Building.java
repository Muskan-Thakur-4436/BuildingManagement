/*
CopyRight Muskan Thakur
*/
import java.util.ArrayList;
import java.util.List;

public class Building {
    private double requestedTemperature = 20.0;
    private List<Room> rooms = new ArrayList<>();

    public void setRequestedTemperature(double temperature) {
        this.requestedTemperature = temperature;
        updateRooms();
    }

    public double getRequestedTemperature() {
        return requestedTemperature;
    }

    public void addRoom(Room room) {
        room.updateClimate(requestedTemperature);
        rooms.add(room);
    }

    public void removeRoom(String roomId) {
        rooms.removeIf(r -> r.getId().equals(roomId));
    }

    public List<Room> getRooms() {
        return rooms;
    }

    private void updateRooms() {
        for (Room room : rooms) {
            room.updateClimate(requestedTemperature);
        }
    }
}
