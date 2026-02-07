/*
CopyRight Muskan Thakur
*/
public class Apartment extends Room {
    private String ownerName;
    private int apartmentNumber;

    public Apartment(int apartmentNumber, String ownerName) {
        super();
        this.apartmentNumber = apartmentNumber;
        this.ownerName = ownerName;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public int getApartmentNumber() {
        return apartmentNumber;
    }
}
