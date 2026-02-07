/*
CopyRight Muskan Thakur
*/
import java.util.Random;
import java.util.UUID;

public abstract class Room {
    protected String id;
    protected double temperature;
    protected boolean heatingEnabled;
    protected boolean coolingEnabled;

    public Room() {
        this.id = UUID.randomUUID().toString();
        this.temperature = 10 + new Random().nextDouble() * 30; // 10–40
        updateClimate(20.0);
    }

    public void updateClimate(double requestedTemp) {
        heatingEnabled = temperature < requestedTemp;
        coolingEnabled = temperature > requestedTemp;
    }

    public String getId() {
        return id;
    }

    public double getTemperature() {
        return temperature;
    }

    public boolean isHeatingEnabled() {
        return heatingEnabled;
    }

    public boolean isCoolingEnabled() {
        return coolingEnabled;
    }
}
